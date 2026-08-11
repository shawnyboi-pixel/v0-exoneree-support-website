import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user) {
      return Response.json({ user: null })
    }

    return Response.json({
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      },
    })
  } catch (error) {
    console.error('[AUTH] Session error:', error)
    return Response.json({ user: null })
  }
}
