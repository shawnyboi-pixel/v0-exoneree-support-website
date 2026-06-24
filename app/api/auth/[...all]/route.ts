import { auth } from '@/lib/auth'
import { toNextJsHandler } from 'better-auth/next-js'

const handlers = toNextJsHandler(auth.handler)

// Wrap handlers with error catching
export async function GET(request: Request) {
  try {
    console.log('[v0] AUTH GET called:', request.url)
    return await handlers.GET(request)
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('[v0] AUTH GET error:', errorMsg, error)
    return new Response(JSON.stringify({ error: 'Internal server error', details: errorMsg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export async function POST(request: Request) {
  try {
    const url = new URL(request.url)
    console.log('[v0] AUTH POST called:', url.pathname)
    const cloned = request.clone()
    const body = await cloned.json().catch(() => null)
    console.log('[v0] AUTH POST body:', body)
    return await handlers.POST(request)
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('[v0] AUTH POST error:', errorMsg, error)
    return new Response(JSON.stringify({ error: 'Internal server error', details: errorMsg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
