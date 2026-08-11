import { auth } from '@/lib/auth'
import { pool } from '@/lib/db'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Update user profile (name only — email changes should go through
    // Better Auth's own change-email flow, not a direct write)
    const updateResult = await pool.query(
      `UPDATE "user" SET name = $1, "updatedAt" = NOW() WHERE id = $2 RETURNING id, email, name`,
      [name, session.user.id]
    )

    if (updateResult.rows.length === 0) {
      return Response.json({ error: 'Failed to update profile' }, { status: 500 })
    }

    const user = updateResult.rows[0]
    return Response.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('[PROFILE] Update error:', error)
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to update profile' },
      { status: 500 }
    )
  }
}
