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
  const [mobileOpen, setMobileOpen] = useState(false)
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
            className="flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors hover:text-slate-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="border-t border-slate-300 bg-slate-200 px-6 pb-6 pt-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors mb-4"
              onClick={() => setMobileOpen(false)}
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
              The Ide Project
            </span>
            <p className="text-xs font-medium text-accent lg:text-sm">
              Youth Led Initiative
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-secondary/70 text-foreground'
                  : 'text-foreground/75 hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
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

        <button
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border/60 bg-background px-6 pb-6 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/guides"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
              onClick={() => setMobileOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/news"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
              onClick={() => setMobileOpen(false)}
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            {!user && (
              <>
                <div className="border-t border-border/30 my-2" />
                <Link
                  href="/sign-in"
                  className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-base font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all py-3 px-4 rounded-lg text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
