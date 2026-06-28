import { pool } from '@/lib/db'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'ide_session'

export async function POST() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get(SESSION_COOKIE)?.value

    if (sessionToken) {
      // Delete session from Neon
      await pool.query('DELETE FROM "session" WHERE token = $1', [sessionToken])
    }

    // Clear the cookie
    cookieStore.set(SESSION_COOKIE, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('[SIGNOUT] Error:', error)
    return Response.json({ success: true }) // Always succeed from client's perspective
  }
}
