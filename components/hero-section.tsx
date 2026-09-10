'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LoadingButton } from './loading-button'

export function HeroSection() {
  const [loading, setLoading] = useState<string | null>(null)

  // Reset loading state when component mounts (user navigates back)
  useEffect(() => {
    setLoading(null)
  }, [])

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(href)
    // Safety timeout to reset loading state in case navigation fails
    const timeoutId = setTimeout(() => {
      setLoading(null)
    }, 5000)
    
    setTimeout(() => {
      window.location.href = href
      clearTimeout(timeoutId)
    }, 300)
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-14 md:pt-8 md:pb-16 lg:px-8 lg:pt-10 lg:pb-20">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Content */}
          <div>
            <h1 className="mb-3 font-serif text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl animate-slide-in-right">
              <span className="text-balance">
                Ide Project
              </span>
            </h1>

            <p className="mb-4 text-xs font-medium tracking-wide text-black animate-fade-in-up">
              Nonprofit 501(c)(3) Organization
            </p>

            <p className="mb-6 text-sm leading-relaxed text-foreground/80 md:text-base animate-slide-in-left">
              The Ide Project is a youth-led organization that supports post-release exonerees with rehabilitation in innovative ways.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center animate-scale-up">
              <button
                onClick={handleClick('/guides')}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 hover:cursor-pointer active:scale-95 disabled:cursor-not-allowed disabled:opacity-90 min-h-[44px]"
                disabled={loading === '/guides'}
              >
                {loading === '/guides' ? (
                  <>
                    <div className="size-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    I Need Help
                    <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <button
                onClick={handleClick('/help-others')}
                className="group inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105 hover:cursor-pointer active:scale-95 disabled:cursor-not-allowed disabled:opacity-90 min-h-[44px]"
                disabled={loading === '/help-others'}
              >
                {loading === '/help-others' ? (
                  <>
                    <div className="size-4 animate-spin rounded-full border-2 border-foreground border-t-transparent mr-2" />
                    <span>Loading...</span>
                  </>
                ) : (
                  'I Want to Help'
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
