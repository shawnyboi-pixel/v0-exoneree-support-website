'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Mail, User as UserIcon, Save, Loader2 } from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  createdAt?: string | null
}

interface ProfileFormData {
  name: string
  email: string
}

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState<ProfileFormData>({ name: '', email: '' })

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await fetch('/api/auth/session')
        if (!response.ok) {
          router.push('/sign-in')
          return
        }

        const data = await response.json()
        if (!data.user) {
          router.push('/sign-in')
          return
        }

        setUser(data.user)
        setFormData({
          name: data.user.name || '',
          email: data.user.email,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load profile')
      } finally {
        setLoading(false)
      }
    }

    fetchSession()
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const response = await fetch('/api/auth/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to update profile')
      }

      const updatedUser = await response.json()
      setUser(updatedUser.user)
      setFormData((prev) => ({ ...prev, name: updatedUser.user.name }))
      setSuccessMessage('Profile updated successfully!')
      setTimeout(() => setSuccessMessage(null), 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save changes')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center h-48">
            <Loader2 className="size-8 animate-spin text-accent" />
          </div>
        </div>
      </main>
    )
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-foreground/60 mb-4">You need to be signed in to view this page.</p>
          <Link href="/sign-in" className="text-accent hover:text-accent/80">
            Sign In
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name || user.email.split('@')[0]}!</h1>
            <p className="text-foreground/60">Manage your profile and account settings</p>
          </div>
        </div>

        {/* User Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-secondary/30 border border-border/60 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <UserIcon className="size-5 text-accent" />
              <p className="text-sm text-foreground/60">Name</p>
            </div>
            <p className="text-lg font-semibold text-foreground">{user.name || 'Not set'}</p>
          </div>

          <div className="bg-secondary/30 border border-border/60 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="size-5 text-accent" />
              <p className="text-sm text-foreground/60">Email</p>
            </div>
            <p className="text-lg font-semibold text-foreground truncate">{user.email}</p>
          </div>
        </div>

        {/* Edit Profile Form */}
        <div className="bg-secondary/20 border border-border/60 rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Edit Profile</h2>

          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-background border border-border/60 rounded-lg text-foreground placeholder-foreground/40 transition-all duration-200 focus:ring-2 focus:ring-accent/50 focus:border-accent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-2.5 bg-secondary/30 border border-border/60 rounded-lg text-foreground/60 placeholder-foreground/40 cursor-not-allowed"
              />
              <p className="text-xs text-foreground/40 mt-2">Email cannot be changed</p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/85 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="size-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
