import { auth } from '@/lib/auth'
import { toNextJsHandler } from 'better-auth/next-js'

const handlers = toNextJsHandler(auth.handler)

// Wrap handlers with error catching
export async function GET(request: Request) {
  try {
    return await handlers.GET(request)
  } catch (error) {
    console.error('[AUTH] GET error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export async function POST(request: Request) {
  try {
    return await handlers.POST(request)
  } catch (error) {
    console.error('[AUTH] POST error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
