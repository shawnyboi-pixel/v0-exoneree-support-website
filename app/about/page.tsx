import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { OurTeamSection } from '@/components/our-team-section'
import { WhatWeDoSection } from '@/components/what-we-do-section'

export const metadata: Metadata = {
  title: 'About | The Ide Project',
  description:
    'The Ide Project is a youth-led organization that uses innovation to rehabilitate post-release exonerees. Meet our team and board of directors.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-16 text-center md:pt-24 md:pb-24 lg:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent md:text-sm">
            Our Mission
          </p>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-balance">
              The Ide Project is a{' '}
              <span className="text-accent">youth-led</span> organization that
              uses <span className="text-accent">innovation</span> to
              rehabilitate{' '}
              <span className="text-accent">post-release exonerees</span>.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl text-pretty">
            We are a group of students building approachable, human-centered
            tools for people coming home after a wrongful conviction. Here is
            what we do, and the people behind it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#what-we-do"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
            >
              What we do
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#members"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md active:scale-95"
            >
              Meet the team
            </a>
          </div>
        </div>
      </section>

      <WhatWeDoSection />
      <OurTeamSection />

      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <span className="text-balance">Want to see it in action?</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg text-pretty">
            Browse our articles, catch up on the latest news, or reach out to
            the team directly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/guides"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
            >
              Explore articles
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md active:scale-95"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
