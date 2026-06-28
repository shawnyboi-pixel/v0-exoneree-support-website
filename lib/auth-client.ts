'use client'

export const authClient = {
  signUp: {
    email: async (data: { email: string; password: string; name: string }) => {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'same-origin',
      })
      const json = await response.json()
      if (!response.ok) return { data: null, error: { message: json.error || 'Signup failed.' } }
      return { data: json, error: null }
    },
  },
  signIn: {
    email: async (data: { email: string; password: string }) => {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'same-origin',
      })
      const json = await response.json()
      if (!response.ok) return { data: null, error: { message: json.error || 'Sign in failed.' } }
      return { data: json, error: null }
    },
  },
  signOut: async () => {
    await fetch('/api/auth/signout', {
      method: 'POST',
      credentials: 'same-origin',
    })
  },
}
