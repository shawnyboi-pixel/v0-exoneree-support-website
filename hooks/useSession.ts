'use client'

import { useState, useEffect } from 'react'

export interface User {
  id: string
  email: string
  name?: string | null
}

export function useSession() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await fetch('/api/auth/session')
        if (!response.ok) throw new Error('Failed to fetch session')

        const data = await response.json()
        setUser(data.user)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchSession()
  }, [])

  return { user, loading, error }
}
