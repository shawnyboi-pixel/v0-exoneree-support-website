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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.08)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40 xl:py-48">
        <div className="max-w-3xl lg:max-w-4xl animate-fade-in-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/75 lg:text-base">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-foreground/30 to-primary-foreground/10 px-4 py-1.5 text-xs lg:text-sm border border-primary-foreground/20 backdrop-blur-sm">
              Youth Led Initiative
            </span>
          </p>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl animate-slide-in-right">
            <span className="text-balance">
              Ide Project
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl lg:text-2xl animate-slide-in-left">
            The Ide Project, led by youth changemakers, connects exonerees nationwide with verified reentry support organizations, housing resources, job training programs, and community advocacy. Get help after wrongful conviction with expert guidance on reentry support, exoneree resources, and building your new life.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-scale-up">
            <button
              onClick={handleClick('/guides')}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:cursor-pointer active:scale-95 lg:px-8 lg:py-4 lg:text-lg disabled:cursor-not-allowed disabled:opacity-90"
              disabled={loading === '/guides'}
            >
              {loading === '/guides' ? (
                <>
                  <div className="size-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent lg:size-5" />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  I Need Help
                  <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1 lg:size-5" />
                </>
              )}
            </button>
            <button
              onClick={handleClick('/help-others')}
              className="group inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/40 px-6 py-3.5 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/60 hover:scale-105 hover:cursor-pointer active:scale-95 lg:px-8 lg:py-4 lg:text-lg disabled:cursor-not-allowed disabled:opacity-90"
              disabled={loading === '/help-others'}
            >
              {loading === '/help-others' ? (
                <>
                  <div className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2 lg:size-5" />
                  <span>Loading...</span>
                </>
              ) : (
                'I Want to Help'
              )}
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-10">
            <HeroSearch />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
      </div>
    </section>
  )
}
