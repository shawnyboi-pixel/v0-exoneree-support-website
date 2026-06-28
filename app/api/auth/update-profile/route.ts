import { pool } from '@/lib/db'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'ide_session'

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get(SESSION_COOKIE)?.value

    if (!sessionToken) {
      return Response.json({ error: 'Not authenticated.' }, { status: 401 })
    }

    const { name } = await request.json()

    if (!name || name.trim().length < 2) {
      return Response.json({ error: 'Name must be at least 2 characters.' }, { status: 400 })
    }

    // Resolve the session to a userId
    const sessionResult = await pool.query(
      `SELECT "userId" FROM "session" WHERE token = $1 AND "expiresAt" > NOW()`,
      [sessionToken]
    )
    if (sessionResult.rows.length === 0) {
      return Response.json({ error: 'Session expired. Please sign in again.' }, { status: 401 })
    }
    const userId = sessionResult.rows[0].userId

    // Update name in user table
    const updateResult = await pool.query(
      `UPDATE "user" SET name = $1, "updatedAt" = NOW() WHERE id = $2
       RETURNING id, name, email, "createdAt"`,
      [name.trim(), userId]
    )
    if (updateResult.rows.length === 0) {
      return Response.json({ error: 'User not found.' }, { status: 404 })
    }

    const user = updateResult.rows[0]
    return Response.json({
      user: { id: user.id, name: user.name, email: user.email, createdAt: user.createdAt },
    })
  } catch (error) {
    console.error('[UPDATE-PROFILE] Error:', error)
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
