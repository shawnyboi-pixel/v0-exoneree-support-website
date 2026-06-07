'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowLeft } from 'lucide-react'

const aboutLinks = [
  { label: 'Home', href: '/' },
  { label: 'What the Exonerees Say', href: '/#statistics' },
  { label: 'What we do', href: '/#what-we-do' },
]

const navLinks = [
  { label: 'About', href: '/', isDropdown: true },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Guides & Tutorials', href: '/guides' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
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
            <div key={link.label} className="relative group">
              {link.label === 'About' ? (
                <>
                  <button
                    className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-foreground/75 hover:text-foreground hover:bg-secondary/60"
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown className="inline-block size-4 ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-background border border-border/80 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                    {aboutLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-3 text-sm text-foreground/75 hover:text-foreground hover:bg-secondary/40 transition-all first:rounded-t-md last:rounded-b-md"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-secondary/70 text-foreground'
                      : 'text-foreground/75 hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
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
            <div>
              <button
                className="w-full text-base font-medium transition-colors hover:text-foreground text-muted-foreground flex items-center justify-between py-3 px-2"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                About
                <ChevronDown className={`size-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-border/60">
                  {aboutLinks.map((subLink) => (
                    <Link
                      key={subLink.label}
                      href={subLink.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/guides"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
              onClick={() => setMobileOpen(false)}
            >
              Guides & Tutorials
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-2 block"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
