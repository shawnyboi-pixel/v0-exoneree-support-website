'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Housing', href: '/housing' },
  { label: 'Employment', href: '/employment' },
  { label: 'Financial', href: '/financial' },
  { label: 'Healthcare', href: '/healthcare' },
  { label: 'Organizations', href: '/organizations' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-bold text-primary-foreground">
              ERP
            </span>
          </div>
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Exoneree Reentry
            </span>
            <p className="text-xs font-medium text-accent">
              Youth Led
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/general-resources"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Help Now
          </Link>
        </nav>

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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-foreground ${
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/general-resources"
              className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              onClick={() => setMobileOpen(false)}
            >
              Get Help Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
