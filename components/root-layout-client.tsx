'use client'

import { useState, useEffect } from 'react'
import { WelcomeScreen } from './welcome-screen'
import { getPreference } from '@/hooks/use-user-preference'

interface RootLayoutClientProps {
  children: React.ReactNode
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has a preference set
    const preference = getPreference()
    
    // Only show welcome if NO preference is set
    if (!preference) {
      setShowWelcome(true)
    }
    
    setIsLoaded(true)
  }, [])

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
