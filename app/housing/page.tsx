import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { ExternalLink, Home, DollarSign, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Housing in Dallas | The IDE Project',
  description:
    'Dallas housing costs, barriers exonerees face, and local organizations that help with housing placement and stability.',
}

const dallasStats = [
  {
    label: 'Median Home Price',
    value: '$378K',
    context: 'Dallas-Fort Worth metro area median sale price as of early 2025.',
    icon: Home,
  },
  {
    label: 'Average Monthly Rent',
    value: '$1,450',
    context:
      'Average rent for a one-bedroom apartment in Dallas proper.',
    icon: DollarSign,
  },
  {
    label: 'Poverty Rate',
    value: '16.7%',
    context:
      'Nearly 1 in 6 Dallas residents lives below the federal poverty line.',
    icon: TrendingDown,
  },
]

const exonereeStats = [
  { label: 'Denied housing due to background', value: '79%' },
  { label: 'Avg. time to secure stable housing', value: '18 months' },
  { label: 'Mortgage approval rate for exonerees', value: '~2%' },
]

const resources = [
  {
    name: 'Dallas Housing Authority',
    description:
      'Administers the Housing Choice Voucher program and public housing in Dallas. They can connect you with subsidized housing options throughout the city.',
    url: 'https://dhantx.com/',
    tags: ['Vouchers', 'Public Housing'],
  },
  {
    name: 'Habitat for Humanity DFW',
    description:
      'Builds and repairs homes for families in need across the Dallas-Fort Worth area. Homeownership programs are available for qualifying applicants.',
    url: 'https://www.habitat.org',
    tags: ['Homeownership', 'Construction'],
  },
  {
    name: 'After Innocence',
    description:
      'National organization providing life re-entry services to exonerees including housing assistance, employment support, and counseling.',
    url: 'https://www.after-innocence.org',
    tags: ['Re-entry', 'Housing'],
  },
  {
    name: 'Texas Reentry Services (TDCJ)',
    description:
      'State-run reentry program offering transitional housing referrals, support coordination, and connection to community-based housing providers.',
    url: 'https://www.tdcj.texas.gov/divisions/rrd/index.html',
    tags: ['State Program', 'Transitional'],
  },
  {
    name: 'Metro Dallas Homeless Alliance',
    description:
      'Coordinates the continuum of care for homeless services in Dallas and Collin counties, including emergency shelter, rapid re-housing, and permanent supportive housing.',
    url: 'https://www.mdhadallas.org',
    tags: ['Emergency Shelter', 'Rapid Re-housing'],
  },
  {
    name: 'Miles of Freedom',
    description:
      'Founded by Dallas exoneree Johnnie Lindsey, Miles of Freedom provides direct re-entry assistance and community support, including help finding housing.',
    url: 'https://www.milesoffreedom.org',
    tags: ['Exoneree-Led', 'Community'],
  },
]

export default function HousingPage() {
  return (
    <>
      <PageHeader
        label="Housing Resources"
        title="Housing in Dallas: Challenges & Costs"
        description="Finding a place to live after exoneration is one of the most immediate and difficult challenges. Here is what the Dallas housing market looks like and where to find help."
      />

      {/* Dallas Statistics Grid */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Dallas at a Glance
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Understanding the local landscape helps set realistic expectations
            for what housing costs and what barriers you may encounter.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dallasStats.map((stat) => (
              <Card
                key={stat.label}
                className="border-border/60"
              >
                <CardContent className="pt-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <p className="mb-1 font-serif text-3xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    {stat.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stat.context}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What Exonerees Face
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            The housing crisis for exonerees is not about preference {"—"} it
            is about survival from day one.
          </p>

          {/* Inline stats */}
          <div className="mb-8 flex flex-wrap gap-4">
            {exonereeStats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 rounded-lg border border-border/60 bg-card px-5 py-4"
                style={{ minWidth: '200px' }}
              >
                <p className="text-2xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              The first night of freedom should feel like a beginning. For most
              exonerees, it feels like a different kind of sentence. With no
              rental history, no recent income, and a record that still shows
              up in background checks {"—"} even after exoneration {"—"} finding a
              place to live is an immediate crisis.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Landlords routinely reject applications when a background check
              reveals any involvement with the criminal justice system.
              Expungement, where possible, is slow and inconsistent. Many
              exonerees spend their first months of freedom in shelters,
              transitional housing, or on the couches of overwhelmed family
              members who have already moved on with their lives.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              In Dallas, the average rent for a one-bedroom apartment runs
              about $1,450 per month. For someone released with no savings, no
              employment, and no credit history, that number might as well be a
              million dollars. Even subsidized housing programs have long
              waitlists, and the documentation requirements can be daunting for
              someone who may not yet have a valid state ID.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Homeownership is even further out of reach. Without years of
              verifiable income, a credit history, and a down payment, a
              mortgage is virtually impossible. The dream of owning a home
              becomes another reminder of everything the system took away.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Housing Resources in Dallas
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            These organizations have programs that can help with shelter,
            transitional housing, and longer-term stability.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((org) => (
              <Card
                key={org.name}
                className="group border-border/60 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {org.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {org.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {org.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                  >
                    Visit Website
                    <ExternalLink className="size-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
