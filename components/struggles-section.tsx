'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  DollarSign,
  Home,
  Briefcase,
  ShieldAlert,
  ExternalLink,
} from 'lucide-react'

const struggles = [
  {
    id: 'financial',
    label: 'Financial & Credit',
    icon: DollarSign,
    headline: 'Starting from Zero with No Safety Net',
    stats: [
      { label: 'Average credit score upon release', value: 'None' },
      { label: 'Personal loan approval rate', value: '<5%' },
      { label: 'Average predatory loan interest', value: '36%+' },
    ],
    paragraphs: [
      "When you walk out of prison after years or decades of wrongful incarceration, you don't just lack money — you lack a financial identity. No credit score. No bank account history. No employment records. In the eyes of every lender, you simply don't exist.",
      'This financial invisibility makes exonerees prime targets for predatory lenders who charge astronomical interest rates on basic personal loans. Even opening a checking account can become a bureaucratic nightmare when you cannot produce the documentation banks require.',
      "State compensation, where it exists, is not the lifeline people assume. In Texas, exonerees may be eligible for $80,000 per year of wrongful imprisonment — but the process to receive it takes an average of three or more years. In the meantime, you're expected to survive with nothing.",
    ],
    resources: [
      {
        name: 'Innocence Project Financial Aid Guide',
        url: 'https://innocenceproject.org',
      },
      {
        name: 'Texas RioGrande Legal Aid',
        url: 'https://www.trla.org',
      },
    ],
  },
  {
    id: 'housing',
    label: 'Housing & Mortgages',
    icon: Home,
    headline: 'Locked Out Before You Even Apply',
    stats: [
      { label: 'Denied housing due to background', value: '79%' },
      { label: 'Avg. time to secure stable housing', value: '18 mo.' },
      { label: 'Mortgage approval rate for exonerees', value: '~2%' },
    ],
    paragraphs: [
      "The first night of freedom should feel like a beginning. For most exonerees, it feels like a different kind of sentence. With no rental history, no recent income, and a record that still shows up in background checks — even after exoneration — finding a place to live is an immediate crisis.",
      "Landlords routinely reject applications when a background check reveals any involvement with the criminal justice system. Expungement, where possible, is slow and inconsistent. Many exonerees spend their first months of freedom in shelters, transitional housing, or on the couches of overwhelmed family members who've already moved on with their lives.",
      "Homeownership is even further out of reach. Without years of verifiable income, a credit history, and a down payment, a mortgage is virtually impossible. The American dream of owning a home becomes another reminder of everything the system took.",
    ],
    resources: [
      {
        name: 'After Innocence Housing Resources',
        url: 'https://www.after-innocence.org',
      },
      {
        name: 'Texas Reentry Services',
        url: 'https://www.tdcj.texas.gov/divisions/rpd/reentry_services.html',
      },
    ],
  },
  {
    id: 'employment',
    label: 'Employment',
    icon: Briefcase,
    headline: 'Qualified for Nothing, Overqualified for Pain',
    stats: [
      { label: 'Employed within 1 year of release', value: '~15%' },
      { label: 'Rejected due to background checks', value: '67%' },
      { label: 'Avg. wage vs. peers (same age group)', value: '40% less' },
    ],
    paragraphs: [
      "Explain a 14-year gap on your resume. That's the impossible task facing every exoneree who walks into a job interview. The truth — wrongful imprisonment — often scares employers more than a blank space. Background checks, even when they show exoneration, trigger the same automated rejection as a conviction.",
      "The skills gap compounds the problem. Someone incarcerated in 2005 missed the smartphone revolution, the rise of cloud computing, remote work, and nearly every shift in the modern workplace. Re-entry programs, where they exist, are usually designed for people who committed crimes — not for the innocent.",
      "Fair-chance hiring policies are growing but remain the exception. Most exonerees end up in low-wage, unstable work far below their potential. The psychological toll of repeated rejection — after already being rejected by the justice system — cannot be overstated.",
    ],
    resources: [
      {
        name: 'Innocence Project Employment Support',
        url: 'https://innocenceproject.org',
      },
      {
        name: 'Texas Workforce Commission',
        url: 'https://www.twc.texas.gov',
      },
    ],
  },
  {
    id: 'systemic',
    label: 'Systemic Gaps',
    icon: ShieldAlert,
    headline: 'Released but Not Free',
    stats: [
      { label: 'Released without state ID', value: '85%' },
      { label: 'No access to mental health care', value: '70%' },
      { label: 'Report lasting psychological effects', value: '94%' },
    ],
    paragraphs: [
      "The state takes years of your life and then hands you back to the world with nothing. No identification documents. No phone. No understanding of how the world has changed. For someone incarcerated for over a decade, even the act of using a touchscreen or navigating a modern grocery store self-checkout can be disorienting.",
      "There is no standard re-entry protocol for exonerees in most states. The programs that exist are designed for parolees — people who committed crimes and are re-entering under supervision. Exonerees are innocent. They should not be funneled through the same systems that presume guilt.",
      "The psychological toll is staggering. PTSD, anxiety, depression, and chronic distrust of institutions are the norm, not the exception. Yet access to trauma-informed mental health care is scarce, expensive, and often contingent on navigating a healthcare system that requires the very documentation exonerees lack.",
    ],
    resources: [
      {
        name: 'Innocence Project Policy Reform',
        url: 'https://innocenceproject.org/policy',
      },
      {
        name: 'Texas Access to Justice Commission',
        url: 'https://www.texasatj.org',
      },
    ],
  },
]

export function StrugglesSection() {
  return (
    <section id="struggles" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The Real Challenges
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              What Exonerees Actually Face After Release
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Freedom is not the end of the fight. These are the four core areas
            where exonerees need immediate and sustained support.
          </p>
        </div>

        <Tabs defaultValue="financial" className="gap-0">
          <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
            {struggles.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                <s.icon className="size-4" />
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sm:hidden">
                  {s.label.split(' ')[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {struggles.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm md:p-10">
                <h3 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {s.headline}
                </h3>

                <div className="mb-8 flex flex-wrap gap-4">
                  {s.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 rounded-lg bg-secondary px-4 py-3"
                      style={{ minWidth: '180px' }}
                    >
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-8 flex flex-col gap-4">
                  {s.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {s.resources.length > 0 && (
                  <div className="border-t border-border/60 pt-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Related Resources
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {s.resources.map((r) => (
                        <a
                          key={r.name}
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <Badge
                            variant="outline"
                            className="gap-1.5 px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
                          >
                            {r.name}
                            <ExternalLink className="size-3" />
                          </Badge>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
