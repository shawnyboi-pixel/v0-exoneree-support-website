import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-3 py-1 text-xs">
              Youth Led Initiative
            </span>
          </p>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              We help make reentry possible.
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            The Exoneree Reentry Project, led by youth changemakers, connects exonerees nationwide with support organizations.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/general-resources"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-gentle shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              Get Help Now
              <ArrowRight className="size-4 transition-smooth group-hover:translate-x-1" />
            </Link>
            <Link
              href="/organizations"
              className="group inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-6 py-3.5 text-base font-medium text-primary-foreground transition-gentle hover:bg-primary-foreground/10 hover:scale-105 active:scale-95"
            >
              Explore Organizations
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/15" />
      </div>
    </section>
  )
}
