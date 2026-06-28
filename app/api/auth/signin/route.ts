import { pool } from '@/lib/db'
import { compare } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'ide_session'
const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days in seconds

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // --- Input validation ---
    if (!email || !password) {
      return Response.json({ error: 'Email and password are required.' }, { status: 400 })
    }

    // --- Look up user by email ---
    const userResult = await pool.query(
      'SELECT id, name, email FROM "user" WHERE email = $1',
      [email.toLowerCase().trim()]
    )
    if (userResult.rows.length === 0) {
      // Generic message to prevent user enumeration
      return Response.json({ error: 'Invalid email or password.' }, { status: 401 })
    }
    const user = userResult.rows[0]

    // --- Fetch the stored password hash from the account table ---
    const accountResult = await pool.query(
      `SELECT password FROM "account" WHERE "userId" = $1 AND "providerId" = 'credential'`,
      [user.id]
    )
    if (accountResult.rows.length === 0 || !accountResult.rows[0].password) {
      return Response.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    // --- Compare password with hash ---
    const isValid = await compare(password, accountResult.rows[0].password)
    if (!isValid) {
      return Response.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    // --- Invalidate any expired sessions for this user (cleanup) ---
    await pool.query(
      `DELETE FROM "session" WHERE "userId" = $1 AND "expiresAt" < NOW()`,
      [user.id]
    )

    // --- Create new session ---
    const sessionToken = randomUUID()
    const sessionId = randomUUID()
    const now = new Date()
    const expiresAt = new Date(now.getTime() + SESSION_MAX_AGE * 1000)
    await pool.query(
      `INSERT INTO "session" (id, token, "userId", "expiresAt", "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $5)`,
      [sessionId, sessionToken, user.id, expiresAt, now]
    )

    // --- Set HttpOnly, Secure session cookie ---
    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_MAX_AGE,
    })

    return Response.json({
      user: { id: user.id, name: user.name, email: user.email },
    })
  } catch (error) {
    console.error('[SIGNIN] Error:', error)
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
