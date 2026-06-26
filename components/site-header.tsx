'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { UserMenu } from './user-menu'

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

interface SiteHeaderProps {
  user?: {
    id: string
    name?: string | null
    email: string
    image?: string | null
  } | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const [navOpen, setNavOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHelpOthersPage = pathname === '/help-others'

  // Close menu when clicking outside
  useEffect(() => {
    if (!navOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [navOpen])

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavOpen(false)
      }
    }

    if (navOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navOpen])

  if (isHelpOthersPage) {
    return (
      <header className="sticky top-0 z-50 border-b border-slate-300 bg-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft className="size-5" />
            <span className="text-sm font-medium">Go Back</span>
          </Link>

          {/* Logo/Title on the Right */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight text-foreground lg:text-2xl">
            Ide Project
          </span>
        </Link>

          <button
            className="flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors hover:text-slate-900"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {navOpen && (
          <nav
            className="border-t border-slate-300 bg-slate-200 px-6 pb-6 pt-4"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors mb-4"
              onClick={() => setNavOpen(false)}
            >
              <ArrowLeft className="size-5" />
              <span className="text-base font-medium">Go Back</span>
            </Link>
          </nav>
        )}
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 gap-4">
        {/* Navigation Dropdown Button */}
        <div className="relative" ref={navRef}>
          <button
            className="flex items-center justify-center rounded-lg p-2.5 text-muted-foreground transition-all duration-200 ease-out hover:text-foreground hover:bg-secondary/50 active:scale-95 active:duration-100 hover:-translate-y-0.5 hover:shadow-md active:shadow-sm"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            aria-label="Toggle navigation menu"
          >
            <Menu className={`size-5 transition-all duration-300 ease-out ${navOpen ? 'opacity-0 -rotate-90 absolute' : 'opacity-100 rotate-0'}`} />
            <X className={`size-5 transition-all duration-300 ease-out ${navOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90 absolute'}`} />
          </button>

          {navOpen && (
            <nav
              className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-border/60 bg-background shadow-xl backdrop-blur-sm animate-soft-pop"
              aria-label="Main navigation"
            >
              <div className="flex flex-col py-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-medium transition-all duration-200 ease-out hover:-translate-x-0.5 active:scale-95 active:duration-100 ${
                      pathname === link.href
                        ? 'bg-secondary/70 text-foreground'
                        : 'text-foreground/75 hover:text-foreground hover:bg-secondary/50'
                    }`}
                    style={{ 
                      animation: `fade-in-up 0.3s ease-out ${index * 0.05}s both`
                    }}
                    onClick={() => setNavOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>

        {/* Logo/Title - Centered */}
        <Link href="/" className="flex items-center gap-3 flex-1">
          <span className="text-lg font-bold tracking-tight text-foreground lg:text-2xl">
            Ide Project
          </span>
        </Link>

        {/* User Menu / Auth Links */}
        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/50 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm active:scale-95 active:duration-100 active:shadow-none"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2.5 rounded-lg text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/85 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:duration-100 active:shadow-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
