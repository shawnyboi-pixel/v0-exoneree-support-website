'use client'

import { useState, useEffect } from 'react'
import { WelcomeScreen } from './welcome-screen'
import { useUserPreference } from '@/hooks/use-user-preference'

interface RootLayoutClientProps {
  children: React.ReactNode
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { preference, isLoaded: prefsLoaded } = useUserPreference()

  useEffect(() => {
    if (!prefsLoaded) return

    // Show welcome screen only if user has no preference set
    if (!preference) {
      setShowWelcome(true)
    }

    setIsLoaded(true)
  }, [preference, prefsLoaded])

  const handleDismissWelcome = () => {
    setShowWelcome(false)
  }

  if (!isLoaded) {
    return <>{children}</>
  }

  return (
    <>
      {showWelcome && <WelcomeScreen onDismiss={handleDismissWelcome} />}
      {children}
    </>
  )
}
