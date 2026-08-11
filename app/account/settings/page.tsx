'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Loader2,
  Save,
  ShieldCheck,
  HeartHandshake,
  LifeBuoy,
  Check,
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { AvatarUploader } from '@/components/avatar-uploader'
import { getUserProfile, updateUserProfile } from '@/app/actions/user'
import type { AccountType } from '@/lib/account-types'

interface User {
  id: string
  email: string
  name?: string | null
  image?: string | null
}

const ACCOUNT_TYPE_OPTIONS: {
  value: AccountType
  label: string
  description: string
  icon: typeof ShieldCheck
}[] = [
  {
    value: 'exoneree',
    label: 'Exoneree',
    description: 'I was wrongfully convicted and have been exonerated.',
    icon: ShieldCheck,
  },
  {
    value: 'volunteer',
    label: 'Volunteer',
    description: 'I want to help support exonerees and their cases.',
    icon: HeartHandshake,
  },
  {
    value: 'support_advisor',
    label: 'Support Advisor',
    description: 'I provide professional guidance and advisory support.',
    icon: LifeBuoy,
  },
]

export default function AccountSettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const [accountType, setAccountType] = useState<AccountType>('volunteer')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    async function load() {
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

        const rows = await getUserProfile()
        const profile = rows[0]
        if (profile) {
          setBio(profile.bio ?? '')
          setLocation(profile.location ?? '')
          setPhone(profile.phone ?? '')
          if (profile.accountType) {
            setAccountType(profile.accountType as AccountType)
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load settings')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [router])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccessMessage(null)

    try {
      await updateUserProfile(bio, location, phone, accountType)
      setSuccessMessage('Settings updated successfully!')
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save changes')
    } finally {
      setSaving(false)
    }
  }

  const handleImageChange = (image: string | null) => {
    setUser((prev) => (prev ? { ...prev, image } : prev))
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
            href="/account"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to My Account
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-foreground/60">Manage how you appear on the platform and your profile details</p>
        </div>

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

        <form onSubmit={handleSave} className="space-y-8">
          {/* Profile Photo */}
          <div className="bg-secondary/20 border border-border/60 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-1">Profile Photo</h2>
            <p className="text-sm text-foreground/60 mb-6">
              Add a photo so others can recognize you on the platform.
            </p>
            <AvatarUploader
              image={user.image}
              name={user.name || user.email}
              onChange={handleImageChange}
            />
          </div>

          {/* Account Type Selection */}
          <div className="bg-secondary/20 border border-border/60 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-1">I am a...</h2>
            <p className="text-sm text-foreground/60 mb-6">
              Choose how you identify on the platform. This helps others understand your role.
            </p>

            <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-label="Account type">
              {ACCOUNT_TYPE_OPTIONS.map((option) => {
                const Icon = option.icon
                const isSelected = accountType === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setAccountType(option.value)}
                    className={`flex items-start gap-4 text-left px-4 py-4 rounded-lg border transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.99] ${
                      isSelected
                        ? 'border-accent bg-accent/10 shadow-sm'
                        : 'border-border/60 bg-background hover:border-accent/40'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center size-10 rounded-full shrink-0 ${
                        isSelected ? 'bg-accent text-accent-foreground' : 'bg-secondary text-foreground/60'
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{option.label}</p>
                      <p className="text-sm text-foreground/60">{option.description}</p>
                    </div>
                    <div
                      className={`flex items-center justify-center size-5 rounded-full border shrink-0 mt-1 ${
                        isSelected ? 'bg-accent border-accent text-accent-foreground' : 'border-border/60'
                      }`}
                    >
                      {isSelected && <Check className="size-3" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-secondary/20 border border-border/60 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Profile Details</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="bio" className="mb-2">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell others a bit about yourself"
                  className="min-h-24"
                />
              </div>

              <div>
                <Label htmlFor="location" className="mb-2">
                  Location
                </Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="mb-2">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/85 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="size-4" />
                Save Settings
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  )
}
