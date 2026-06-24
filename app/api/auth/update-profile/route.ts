import { pool } from '@/lib/db'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('session')?.value

    if (!sessionToken) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get user from session
    const sessionResult = await pool.query(
      `SELECT s.userId FROM "session" s
       WHERE s.token = $1 AND s.expiresAt > NOW()`,
      [sessionToken]
    )

    if (sessionResult.rows.length === 0) {
      return Response.json({ error: 'Invalid session' }, { status: 401 })
    }

    const userId = sessionResult.rows[0].userId

    // Update user profile
    const updateResult = await pool.query(
      `UPDATE "user" SET name = $1 WHERE id = $2 RETURNING id, email, name`,
      [name, userId]
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
