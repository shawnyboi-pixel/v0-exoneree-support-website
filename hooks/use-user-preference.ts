'use client'

import { useEffect, useState } from 'react'

export type UserPreference = 'need-help' | 'help-others' | 'explore' | null

const COOKIE_NAME_ID = 'ide_user_id'
const COOKIE_NAME_PREF = 'ide_user_preference'
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds

/**
 * Generate a unique user ID
 */
function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Set a cookie (client-side)
 */
export function setCookie(name: string, value: string, maxAge: number = COOKIE_MAX_AGE): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`
}

/**
 * Get a cookie value
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const nameEQ = name + '='
  const cookies = document.cookie.split(';')
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length)
    }
  }
  return null
}

/**
 * Delete a cookie
 */
export function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=; max-age=0; path=/`
}

/**
 * Initialize or get user ID - call this synchronously
 */
export function getOrCreateUserId(): string {
  let userId = getCookie(COOKIE_NAME_ID)
  if (!userId) {
    userId = generateUserId()
    setCookie(COOKIE_NAME_ID, userId)
  }
  return userId
}

/**
 * Get the current preference from cookie
 */
export function getPreference(): UserPreference {
  const pref = getCookie(COOKIE_NAME_PREF)
  return (pref as UserPreference) || null
}

/**
 * Hook to manage user preference
 */
export function useUserPreference() {
  const [preference, setPreferenceState] = useState<UserPreference>(null)
  const [userId, setUserIdState] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Run once on mount to read cookies
    const id = getOrCreateUserId()
    const pref = getPreference()
    
    setUserIdState(id)
    setPreferenceState(pref)
    setIsLoaded(true)
  }, [])

  const setPreference = (pref: UserPreference) => {
    if (pref) {
      setCookie(COOKIE_NAME_PREF, pref)
    } else {
      deleteCookie(COOKIE_NAME_PREF)
    }
    setPreferenceState(pref)
  }

  const resetAll = () => {
    deleteCookie(COOKIE_NAME_ID)
    deleteCookie(COOKIE_NAME_PREF)
    const newUserId = generateUserId()
    setCookie(COOKIE_NAME_ID, newUserId)
    setUserIdState(newUserId)
    setPreferenceState(null)
  }

  return {
    userId,
    preference,
    setPreference,
    resetAll,
    isLoaded,
  }
}
