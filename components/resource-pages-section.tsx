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
  Heart,
  Users,
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
    title: 'Financial and Credit Rebuilding',
    description:
      'Building a financial identity from zero, finding banks willing to help, and understanding your compensation options.',
    href: '/financial',
    icon: DollarSign,
    stats: 'No credit history upon release',
  },
  {
    title: 'General Resources for Daily Life',
    description:
      'Affordable stores, local food pantries, public libraries, community events, parks, churches, and everyday resources to help you settle in.',
    href: '/general-resources',
    icon: Lightbulb,
    stats: 'Dallas-specific resources',
  },
  {
    title: 'Healthcare and Insurance',
    description:
      'Access to healthcare, Medicaid, ACP, mental health services, and dental care, all affordable or free for low-income residents.',
    href: '/healthcare',
    icon: Heart,
    stats: 'Medicaid and ACP available',
  },
  {
    title: 'Support Organizations',
    description:
      'National and Texas-based organizations dedicated to exoneree support, from legal advocacy to re-entry services to healing.',
    href: '/organizations',
    icon: Users,
    stats: '6 verified organizations',
  },
]

export function ResourcePagesSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl animate-fade-in-up">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, idx) => (
            <Link key={page.href} href={page.href} className="group">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <Card className="h-full border-border/60 transition-gentle cursor-pointer overflow-hidden hover:shadow-lg hover:-translate-y-2">
                  <CardContent className="flex h-full flex-col pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-smooth group-hover:scale-110 group-hover:bg-primary/15">
                        <page.icon className="size-5 text-primary transition-smooth group-hover:rotate-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground transition-gentle group-hover:text-primary">
                          {page.title}
                        </h3>
                        <span className="text-xs font-medium text-accent transition-smooth group-hover:text-accent">
                          {page.stats}
                        </span>
                      </div>
                    </div>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {page.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-primary transition-smooth group-hover:text-primary">
                      Learn More
                      <ArrowRight className="size-4 transition-smooth group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
