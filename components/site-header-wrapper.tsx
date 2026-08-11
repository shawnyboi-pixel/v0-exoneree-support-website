import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { SiteHeader } from './site-header'

export async function SiteHeaderWrapper() {
  try {
    const session = await auth.api.getSession({ headers: await headers() })

    const user = session?.user
      ? {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
        }
      : null

    return <SiteHeader user={user} />
  } catch (error) {
    console.error('[HEADER] Session error:', error)
    return <SiteHeader user={null} />
  }
}
