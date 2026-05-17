import Link from 'next/link'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import {
  Home,
  Briefcase,
  DollarSign,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'

const pages = [
  {
    title: 'Housing in Dallas',
    description:
      'Average housing costs, homeownership barriers, and local organizations that can help you find stable housing.',
    href: '/housing',
    icon: Home,
    stats: '79% denied housing',
  },
  {
    title: 'Employment After Exoneration',
    description:
      'Navigating the job market with a background that scares employers, plus Dallas-area organizations offering real placement help.',
    href: '/employment',
    icon: Briefcase,
    stats: '~15% employed within 1 year',
  },
  {
    title: 'Financial & Credit Rebuilding',
    description:
      'Building a financial identity from zero, finding banks willing to help, and understanding your compensation options.',
    href: '/financial',
    icon: DollarSign,
    stats: 'No credit history upon release',
  },
  {
    title: 'Practical Tips for Daily Life',
    description:
      'Affordable stores, local food pantries, public libraries, community events, parks, churches, and everyday resources to help you settle in.',
    href: '/tips',
    icon: Lightbulb,
    stats: 'Dallas-specific resources',
  },
]

export function ResourcePagesSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            In-Depth Resources
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              What Exonerees Actually Face After Release
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Freedom is not the end of the fight. Each page below dives deep
            into a specific challenge with Dallas-area statistics, verified
            resources, and practical guidance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="group">
              <Card className="h-full border-border/60 transition-all group-hover:border-primary/30 group-hover:shadow-md">
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <page.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {page.title}
                      </h3>
                      <span className="text-sm font-medium text-accent">
                        {page.stats}
                      </span>
                    </div>
                  </div>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {page.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
