'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronDown, User, LogOut, Settings, CheckCircle } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

interface UserMenuProps {
  user: {
    id: string
    name?: string | null
    email: string
    image?: string | null
  }
}

export function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await authClient.signOut()
    setIsOpen(false)
    router.push('/')
    router.refresh()
  }

  const displayName = user.name || user.email.split('@')[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-out hover:bg-secondary/50 text-foreground/75 hover:text-foreground hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:duration-100 active:shadow-sm"
      >
        <div className="relative size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-sm">
          <User className="size-4 text-accent-foreground" />
          <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
            <CheckCircle className="size-1.5 text-white" />
          </div>
        </div>
        <span className="hidden sm:inline max-w-[100px] truncate font-semibold text-foreground">{displayName}</span>
        <ChevronDown className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-background border border-border/60 rounded-lg shadow-xl py-2 z-50 animate-soft-pop">
          {/* Header Section with Badge */}
          <div className="px-4 py-3 border-b border-border/30 bg-secondary/30">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-bold text-foreground">{displayName}</p>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                <CheckCircle className="size-3" />
                Signed In
              </span>
            </div>
            <p className="text-xs text-foreground/60 break-all">{user.email}</p>
          </div>

          {/* Menu Items */}
          <Link
            href="/account"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/75 hover:bg-secondary/50 hover:text-foreground transition-all duration-200 ease-out hover:-translate-x-0.5 active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            <User className="size-4" />
            <span>My Account</span>
          </Link>

          <Link
            href="/account/settings"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/75 hover:bg-secondary/50 hover:text-foreground transition-all duration-200 ease-out hover:-translate-x-0.5 active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="size-4" />
            <span>Settings</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/75 hover:bg-destructive/10 hover:text-destructive transition-all duration-200 ease-out hover:-translate-x-0.5 active:scale-95 border-t border-border/30 mt-2"
          >
            <LogOut className="size-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  )
}
