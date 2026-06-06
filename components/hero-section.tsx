'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'
import { HeroSearch } from './hero-search'

export function HeroSection() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleClick = (href: string) => {
    setLoading(href)
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
            <Link
              href="/guides"
              onClick={() => handleClick('/guides')}
              className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 lg:px-8 lg:py-4 lg:text-lg ${
                loading === '/guides' ? 'opacity-90' : ''
              }`}
            >
              {loading === '/guides' ? (
                <>
                  <Loader2 className="size-4 animate-spin lg:size-5" />
                  Loading...
                </>
              ) : (
                <>
                  I Need Help
                  <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1 lg:size-5" />
                </>
              )}
            </Link>
            <Link
              href="/help-others"
              onClick={() => handleClick('/help-others')}
              className={`group inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/40 px-6 py-3.5 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/60 hover:scale-105 active:scale-95 lg:px-8 lg:py-4 lg:text-lg ${
                loading === '/help-others' ? 'opacity-90' : ''
              }`}
            >
              {loading === '/help-others' ? (
                <>
                  <Loader2 className="size-4 animate-spin lg:size-5 mr-2" />
                  Loading...
                </>
              ) : (
                'I Want to Help'
              )}
            </Link>
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
