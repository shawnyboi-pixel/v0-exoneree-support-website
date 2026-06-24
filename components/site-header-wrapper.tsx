import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { SiteHeader } from './site-header'
import { UserMenu } from './user-menu'

export async function SiteHeaderWrapper() {
  const session = await auth.api.getSession({ headers: await headers() })
  const user = session?.user

  return <SiteHeader user={user} />
}
