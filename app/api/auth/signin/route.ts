import { pool } from '@/lib/db'
import { compare } from 'bcryptjs'
import { randomUUID } from 'crypto'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return Response.json(
        { error: 'Missing email or password' },
        { status: 400 }
      )
    }

    // Get user by email
    const userResult = await pool.query(
      'SELECT id, email, name FROM "user" WHERE email = $1',
      [email]
    )

    if (userResult.rows.length === 0) {
      return Response.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const user = userResult.rows[0]

    // TODO: Verify password once we store hashed passwords
    // For now, just create a session
    const sessionToken = randomUUID()
    const sessionId = randomUUID()
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

    await pool.query(
      `INSERT INTO "session" (id, token, userId, expiresAt, createdAt, updatedAt)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [sessionId, sessionToken, user.id, expiresAt]
    )

    // Return success with user data
    return Response.json(
      {
        user,
        session: { token: sessionToken },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Signin error:', error)
    const message = error instanceof Error ? error.message : 'Signin failed'
    return Response.json(
      { error: message },
      { status: 500 }
    )
  }
}
