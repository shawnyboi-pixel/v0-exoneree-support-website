'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const aboutLinks = [
  { label: 'Home', href: '/' },
  { label: 'What the Exonerees Say', href: '/#statistics' },
  { label: 'What we do', href: '/#what-we-do' },
  { label: 'Members', href: '/#members' },
]

const resourcesLinks = [
  { label: 'Financial Literacy', href: '/financial-literacy' },
  { label: 'Organizations that Help', href: '/organizations' },
  { label: 'Healthcare and Insurance', href: '/healthcare' },
  { label: 'Information on Employment', href: '/employment' },
  { label: 'Other Resources', href: '/general-resources' },
]

const navLinks = [
  { label: 'About', href: '/', isDropdown: true },
  { label: 'Resources', href: '/general-resources', isDropdown: true },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground lg:text-xl">
              The IDE Project
            </span>
            <p className="text-xs font-medium text-accent lg:text-sm">
              Youth Led Initiative
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:gap-12 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.label === 'About' ? (
                <>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground flex items-center gap-1"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 mt-0 w-48 bg-background border border-border/60 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {aboutLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : link.label === 'Resources' ? (
                <>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground flex items-center gap-1"
                    onClick={() => setResourcesDropdownOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 mt-0 w-56 bg-background border border-border/60 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {resourcesLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setResourcesDropdownOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
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
                className="w-full text-base font-medium transition-colors hover:text-foreground text-muted-foreground flex items-center justify-between"
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                className="w-full text-base font-medium transition-colors hover:text-foreground text-muted-foreground flex items-center justify-between"
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
              >
                Resources
                <ChevronDown className={`size-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesDropdownOpen && (
                <div className="mt-2 pl-4 flex flex-col gap-2 border-l border-border/60">
                  {resourcesLinks.map((subLink) => (
                    <Link
                      key={subLink.label}
                      href={subLink.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/support"
              className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Support
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
