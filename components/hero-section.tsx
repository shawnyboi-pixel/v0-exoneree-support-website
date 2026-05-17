import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
            Texas Exoneree Support Network
          </p>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              You survived the system. Now let us help you rebuild.
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Wrongful conviction stole years of your life. But your story
            {"doesn't"} end there. We connect exonerees across Texas with real
            organizations, real people, and real support {"—"} no runaround, no
            red tape.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/general-resources"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Find Resources & Tips
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/housing"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Explore Housing Support
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10" />
      </div>
    </section>
  )
}
