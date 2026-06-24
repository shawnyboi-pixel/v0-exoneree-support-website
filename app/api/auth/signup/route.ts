import { pool } from '@/lib/db'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // Validate input
    if (!email || !password || !name) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return Response.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existing = await pool.query(
      'SELECT id FROM "user" WHERE email = $1',
      [email]
    )

    if (existing.rows.length > 0) {
      return Response.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const userId = randomUUID()
    const result = await pool.query(
      `INSERT INTO "user" (id, email, name, emailVerified, createdAt, updatedAt)
       VALUES ($1, $2, $3, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING id, email, name`,
      [userId, email, name]
    )

    if (result.rows.length === 0) {
      throw new Error('Failed to create user')
    }

    // Create session
    const sessionToken = randomUUID()
    const sessionId = randomUUID()
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

    await pool.query(
      `INSERT INTO "session" (id, token, userId, expiresAt, createdAt, updatedAt)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [sessionId, sessionToken, userId, expiresAt]
    )

    // Return success with user data
    return Response.json(
      {
        user: result.rows[0],
        session: { token: sessionToken },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Signup error:', error)
    const message = error instanceof Error ? error.message : 'Signup failed'
    return Response.json(
      { error: message },
      { status: 500 }
    )
  }
}
