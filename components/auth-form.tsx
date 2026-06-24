'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formTouched, setFormTouched] = useState(false)

  const isSignUp = mode === 'sign-up'

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 8
  }

  const validateName = (name: string) => {
    return name.trim().length >= 2
  }

  const isSpamEmail = (email: string) => {
    // Check for common spam patterns
    const spamPatterns = [
      /\d{5,}/, // Too many consecutive numbers
      /(.)\1{4,}/, // Same character repeated 5+ times
      /spam|test\d+|bot|fake/i,
    ]
    return spamPatterns.some((pattern) => pattern.test(email))
  }

  const validateFormData = (): boolean => {
    if (isSignUp) {
      if (!name.trim()) {
        setError('Please enter your name')
        return false
      }
      if (!validateName(name)) {
        setError('Name must be at least 2 characters')
        return false
      }
    }

    if (!email.trim()) {
      setError('Please enter your email')
      return false
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return false
    }

    if (isSpamEmail(email)) {
      setError('Invalid email address. Please use a valid email.')
      return false
    }

    if (!password) {
      setError('Please enter your password')
      return false
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters')
      return false
    }

    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!validateFormData()) {
      return
    }

    setLoading(true)

    try {
      const { error } = isSignUp
        ? await authClient.signUp.email({ email, password, name })
        : await authClient.signIn.email({ email, password })

      if (error) {
        setError(error.message ?? 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      router.push('/')
      router.refresh()
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-svh bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md p-8 border-border/50">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-base text-foreground/60 mt-2">
            {isSignUp
              ? 'Join our community to get started'
              : 'Sign in to continue'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          {isSignUp && (
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setFormTouched(true)}
                autoComplete="name"
                disabled={loading}
              />
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setFormTouched(true)}
              autoComplete="email"
              disabled={loading}
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setFormTouched(true)}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              disabled={loading}
            />
            {isSignUp && (
              <p className="text-xs text-foreground/50">
                Minimum 8 characters
              </p>
            )}
          </div>

          {isSignUp && (
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => setFormTouched(true)}
                autoComplete="new-password"
                disabled={loading}
              />
            </div>
          )}

          {error && (
            <div
              className="bg-destructive/10 border border-destructive/30 rounded-md p-3"
              role="alert"
            >
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 font-semibold mt-2"
          >
            {loading
              ? 'Please wait...'
              : isSignUp
                ? 'Create Account'
                : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-sm text-foreground/60 text-center">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <Link
              href={isSignUp ? '/sign-in' : '/sign-up'}
              className="text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              {isSignUp ? 'Sign in here' : 'Sign up here'}
            </Link>
          </p>
        </div>
      </Card>
    </main>
  )
}
