'use client'

// Custom auth client that bypasses Better Auth's broken signup
export const authClient = {
  signUp: {
    email: async (data: { email: string; password: string; name: string }) => {
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          const error = await response.json()
          return { error: error.error || 'Signup failed' }
        }

        const result = await response.json()
        // Store session token
        if (result.session?.token) {
          document.cookie = `session=${result.session.token}; path=/; max-age=${7 * 24 * 60 * 60}`
        }
        return { data: result, error: null }
      } catch (error) {
        return { error: error instanceof Error ? error.message : 'Network error' }
      }
    },
  },
  signIn: {
    email: async (data: { email: string; password: string }) => {
      try {
        const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          const error = await response.json()
          return { error: error.error || 'Signin failed' }
        }

        const result = await response.json()
        // Store session token
        if (result.session?.token) {
          document.cookie = `session=${result.session.token}; path=/; max-age=${7 * 24 * 60 * 60}`
        }
        return { data: result, error: null }
      } catch (error) {
        return { error: error instanceof Error ? error.message : 'Network error' }
      }
    },
  },
  signOut: async () => {
    // Clear session cookie
    document.cookie = 'session=; path=/; max-age=0'
  },
}
