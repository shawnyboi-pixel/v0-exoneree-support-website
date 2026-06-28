import { pool } from '@/lib/db'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'ide_session'
const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days in seconds

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // --- Input validation ---
    if (!email || !password || !name) {
      return Response.json({ error: 'Name, email, and password are required.' }, { status: 400 })
    }
    if (name.trim().length < 2) {
      return Response.json({ error: 'Name must be at least 2 characters.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (password.length < 8) {
      return Response.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
    }

    // --- Check for existing user ---
    const existing = await pool.query(
      'SELECT id FROM "user" WHERE email = $1',
      [email.toLowerCase().trim()]
    )
    if (existing.rows.length > 0) {
      return Response.json({ error: 'An account with this email already exists.' }, { status: 409 })
    }

    // --- Hash password (bcrypt, cost 12) ---
    const hashedPassword = await hash(password, 12)

    // --- Create user row ---
    const userId = randomUUID()
    const now = new Date()
    await pool.query(
      `INSERT INTO "user" (id, name, email, "emailVerified", "createdAt", "updatedAt")
       VALUES ($1, $2, $3, false, $4, $4)`,
      [userId, name.trim(), email.toLowerCase().trim(), now]
    )

    // --- Store password hash in account table (credential provider) ---
    const accountId = randomUUID()
    await pool.query(
      `INSERT INTO "account" (id, "accountId", "providerId", "userId", password, "createdAt", "updatedAt")
       VALUES ($1, $2, 'credential', $3, $4, $5, $5)`,
      [accountId, userId, userId, hashedPassword, now]
    )

    // --- Create session ---
    const sessionToken = randomUUID()
    const sessionId = randomUUID()
    const expiresAt = new Date(now.getTime() + SESSION_MAX_AGE * 1000)
    await pool.query(
      `INSERT INTO "session" (id, token, "userId", "expiresAt", "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $5)`,
      [sessionId, sessionToken, userId, expiresAt, now]
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

    return Response.json(
      { user: { id: userId, name: name.trim(), email: email.toLowerCase().trim() } },
      { status: 201 }
    )
  } catch (error) {
    console.error('[SIGNUP] Error:', error)
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
