import { cookies } from 'next/headers'
import { pool } from '@/lib/db'
import { SiteHeader } from './site-header'

export async function SiteHeaderWrapper() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('ide_session')?.value

    let user = null

    if (sessionToken) {
      const result = await pool.query(
        `SELECT u.id, u.name, u.email FROM "session" s
         JOIN "user" u ON s."userId" = u.id
         WHERE s.token = $1 AND s."expiresAt" > NOW()`,
        [sessionToken]
      )

      if (result.rows.length > 0) {
        const row = result.rows[0]
        user = {
          id: row.id,
          email: row.email,
          name: row.name,
        }
      }
    }

    return <SiteHeader user={user} />
  } catch (error) {
    console.error('[HEADER] Session error:', error)
    return <SiteHeader user={null} />
  }
}
