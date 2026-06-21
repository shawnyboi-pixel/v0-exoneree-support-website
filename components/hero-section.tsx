'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroSearch } from './hero-search'
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(104,65,30,0.03)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(104,65,30,0.02)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40 xl:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground/70 lg:text-sm">
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs border border-accent/30 backdrop-blur-sm text-accent">
                Youth Led Initiative
              </span>
            </p>

            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl animate-slide-in-right">
              <span className="text-balance">
                Ide Project
              </span>
            </h1>

            <p className="mb-6 text-base leading-relaxed text-foreground/80 md:text-lg animate-slide-in-left">
              The Ide Project, led by youth changemakers, connects exonerees nationwide with verified reentry support organizations, housing resources, job training programs, and community advocacy. Get help after wrongful conviction.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center animate-scale-up">
              <button
                onClick={handleClick('/guides')}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:cursor-pointer active:scale-95 md:px-5 md:py-3 md:text-base disabled:cursor-not-allowed disabled:opacity-90"
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
                className="group inline-flex items-center justify-center rounded-lg border-2 border-foreground/40 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground/10 hover:border-foreground/60 hover:scale-105 hover:cursor-pointer active:scale-95 md:px-5 md:py-3 md:text-base disabled:cursor-not-allowed disabled:opacity-90"
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

          {/* Right Column - Search Bar */}
          <div className="lg:col-span-2 animate-fade-in-up lg:sticky lg:top-20">
            <HeroSearch />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </div>
    </section>
  )
}
