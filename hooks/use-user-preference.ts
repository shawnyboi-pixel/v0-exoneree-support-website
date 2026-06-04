'use client'

import { useEffect, useState } from 'react'

export type UserPreference = 'need-help' | 'help-others' | 'explore' | null

interface UserData {
  userId: string
  preference: UserPreference
}

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
function setCookie(name: string, value: string, maxAge: number = COOKIE_MAX_AGE): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`
}

/**
 * Get a cookie value
 */
function getCookie(name: string): string | null {
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
function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=; max-age=0; path=/`
}

/**
 * Initialize or get user ID
 */
function getOrCreateUserId(): string {
  let userId = getCookie(COOKIE_NAME_ID)
  if (!userId) {
    userId = generateUserId()
    setCookie(COOKIE_NAME_ID, userId)
  }
  return userId
}

/**
 * Hook to manage user preference
 */
export function useUserPreference() {
  const [userData, setUserData] = useState<UserData>({
    userId: '',
    preference: null,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from cookies on mount
  useEffect(() => {
    const userId = getOrCreateUserId()
    const preference = (getCookie(COOKIE_NAME_PREF) as UserPreference) || null
    setUserData({ userId, preference })
    setIsLoaded(true)
  }, [])

  const setPreference = (preference: UserPreference) => {
    if (preference) {
      setCookie(COOKIE_NAME_PREF, preference)
    } else {
      deleteCookie(COOKIE_NAME_PREF)
    }
    setUserData((prev) => ({ ...prev, preference }))
  }

  const resetAll = () => {
    deleteCookie(COOKIE_NAME_ID)
    deleteCookie(COOKIE_NAME_PREF)
    const newUserId = generateUserId()
    setCookie(COOKIE_NAME_ID, newUserId)
    setUserData({ userId: newUserId, preference: null })
  }

  return {
    ...userData,
    setPreference,
    resetAll,
    isLoaded,
  }
}
