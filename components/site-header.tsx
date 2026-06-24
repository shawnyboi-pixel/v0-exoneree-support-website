'use client'

import { useState } from 'react'
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
  const pathname = usePathname()
  const isHelpOthersPage = pathname === '/help-others'

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
            <div className="text-right">
              <span className="text-lg font-semibold tracking-tight text-slate-900 lg:text-xl">
                The Ide Project
              </span>
              <p className="text-xs font-medium text-slate-600 lg:text-sm">
                Youth Led Initiative
              </p>
            </div>
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
        <div className="relative">
          <button
            className="flex items-center justify-center rounded-md p-2.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          {navOpen && (
            <nav
              className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-border/60 bg-background shadow-lg"
              aria-label="Main navigation"
            >
              <div className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? 'bg-secondary/70 text-foreground'
                        : 'text-foreground/75 hover:text-foreground hover:bg-secondary/50'
                    }`}
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
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
              The Ide Project
            </span>
            <p className="text-xs font-medium text-accent lg:text-sm">
              Youth Led Initiative
            </p>
          </div>
        </Link>

        {/* User Menu / Auth Links */}
        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/50 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2.5 rounded-lg text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
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
