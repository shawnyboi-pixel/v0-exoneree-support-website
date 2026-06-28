import { pool } from '@/lib/db'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'ide_session'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get(SESSION_COOKIE)?.value

    if (!sessionToken) {
      return Response.json({ user: null })
    }

    const result = await pool.query(
      `SELECT u.id, u.name, u.email, u."createdAt"
       FROM "session" s
       JOIN "user" u ON s."userId" = u.id
       WHERE s.token = $1 AND s."expiresAt" > NOW()`,
      [sessionToken]
    )

    if (result.rows.length === 0) {
      return Response.json({ user: null })
    }

    const user = result.rows[0]
    return Response.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error('[SESSION] Error:', error)
    return Response.json({ user: null })
  }
}
