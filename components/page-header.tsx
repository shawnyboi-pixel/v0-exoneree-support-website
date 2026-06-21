import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageHeaderProps {
  label: string
  title: string
  description: string
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(104,65,30,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground/60">
          {label}
        </p>

        <h1 className="mb-4 max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">{title}</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
          {description}
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </div>
    </section>
  )
}
