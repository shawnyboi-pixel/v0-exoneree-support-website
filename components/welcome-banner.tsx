'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

interface User {
  id: string
  email: string
  name?: string | null
}

export function WelcomeBanner() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await fetch('/api/auth/session')
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        }
      } catch (error) {
        console.error('Failed to fetch session:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSession()
  }, [])

  if (loading || !user) return null

  const displayName = user.name || user.email.split('@')[0]
  const greeting = getTimeBasedGreeting()

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 sm:p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 size-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 size-40 bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="size-5 text-accent animate-pulse" />
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">{greeting}</p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Welcome back, <span className="text-accent">{displayName}</span>!
            </h2>

            <p className="text-foreground/60 mb-4">
              {getMotivationalMessage()} {"You're"} all set to explore and learn more about supporting formerly incarcerated individuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/account"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/85 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:duration-100"
              >
                View Your Profile
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary/50 text-foreground/75 hover:text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm active:scale-95 active:duration-100"
              >
                Explore Resources
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* User Stats */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="text-right px-4 py-2 bg-background/40 border border-border/20 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-foreground/50 uppercase">Status</p>
              <p className="text-sm font-bold text-foreground flex items-center gap-1 justify-end">
                <span className="size-2 bg-green-500 rounded-full" />
                Active
              </p>
            </div>

            <div className="text-right px-4 py-2 bg-background/40 border border-border/20 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-foreground/50 uppercase">Member Since</p>
              <p className="text-sm font-bold text-foreground">{new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getTimeBasedGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 18) return 'Good Afternoon'
  return 'Good Evening'
}

function getMotivationalMessage(): string {
  const messages = [
    'Great to see you again!',
    'Thanks for being here.',
    'Ready to make a difference?',
    "Let's continue helping together.",
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}
