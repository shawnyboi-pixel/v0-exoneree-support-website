'use client'

import { useState, useEffect } from 'react'
import { WelcomeScreen } from './welcome-screen'

interface RootLayoutClientProps {
  children: React.ReactNode
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has seen welcome screen before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome')
    
    // Show welcome screen only on first visit
    if (!hasSeenWelcome) {
      setShowWelcome(true)
    }
    
    setIsLoaded(true)
  }, [])

  const handleDismissWelcome = () => {
    setShowWelcome(false)
    // Mark that user has seen welcome screen
    localStorage.setItem('hasSeenWelcome', 'true')
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
