import { pool } from '@/lib/db'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('session')?.value

    if (!sessionToken) {
      return Response.json({ user: null })
    }

    // Get session from database
    const sessionResult = await pool.query(
      `SELECT s.userId, u.id, u.email, u.name FROM "session" s
       JOIN "user" u ON s.userId = u.id
       WHERE s.token = $1 AND s.expiresAt > NOW()`,
      [sessionToken]
    )

    if (sessionResult.rows.length === 0) {
      return Response.json({ user: null })
    }

    const user = sessionResult.rows[0]
    return Response.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('[AUTH] Session error:', error)
    return Response.json({ user: null })
  }
}
