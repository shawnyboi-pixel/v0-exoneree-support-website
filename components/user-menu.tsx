'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronDown, User, LogOut, Settings } from 'lucide-react'
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
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
          router.refresh()
        },
      },
    })
  }

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-secondary/50 text-foreground/75 hover:text-foreground"
      >
        <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center">
          <User className="size-4 text-accent" />
        </div>
        <span className="hidden sm:inline max-w-[100px] truncate">{user.name || user.email.split('@')[0]}</span>
        <ChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border/60 rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-2 border-b border-border/30">
            <p className="text-sm font-semibold text-foreground">{user.name || 'User'}</p>
            <p className="text-xs text-foreground/60">{user.email}</p>
          </div>
          <Link
            href="/account"
            className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/75 hover:bg-secondary/50 hover:text-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <User className="size-4" />
            My Account
          </Link>
          <Link
            href="/account/settings"
            className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/75 hover:bg-secondary/50 hover:text-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="size-4" />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground/75 hover:bg-secondary/50 hover:text-foreground transition-colors border-t border-border/30 mt-2"
          >
            <LogOut className="size-4" />
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}
