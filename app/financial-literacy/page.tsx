import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
import {
  ExternalLink,
  Phone,
  CreditCard,
  Ban,
  Percent,
  Clock,
  Landmark,
  ShieldCheck,
  BookOpen,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Literacy | The IDE Project',
  description:
    'How exonerees can rebuild financial identity, find fair banking, and understand compensation options in Dallas, Texas.',
}

const financialStats = [
  {
    label: 'Credit Score Upon Release',
    value: 'None',
    context:
      'Most exonerees walk out with zero credit history. In the eyes of lenders, you financially do not exist.',
    icon: CreditCard,
  },
  {
    label: 'Personal Loan Approval Rate',
    value: '<5%',
    context:
      'Without credit history, income records, or collateral, mainstream lenders reject nearly all exoneree applications.',
    icon: Ban,
  },
  {
    label: 'Avg. Predatory Loan Interest',
    value: '36%+',
    context:
      'Predatory lenders target people with no credit options. These rates trap borrowers in cycles of debt.',
    icon: Percent,
  },
  {
    label: 'Time to Receive TX Compensation',
    value: '3+ Years',
    context:
      'Even in Texas, which offers $80,000 per year of wrongful imprisonment, the process to receive funds takes years.',
    icon: Clock,
  },
]

const bankingResources = [
  {
    name: 'Associated Credit Union of Texas',
    description:
      'Offers the "180 Checking Account" specifically designed for people who have been turned away by other banks. Only $25 minimum deposit to open. No ChexSystems check. Multiple DFW-area branches.',
    url: 'https://www.acutx.org',
    phone: '(972) 263-5171',
    tags: ['Second Chance', '$25 Minimum'],
  },
  {
    name: 'Credit Union of Texas (CUTX)',
    description:
      'Their "Secure Checking Account" is available to anyone, including those with a negative banking history. $25 minimum deposit, no monthly service fees if you maintain the balance. Branches throughout Dallas.',
    url: 'https://www.cutx.org',
    phone: '(972) 263-9497',
    tags: ['Second Chance', 'No Monthly Fees'],
  },
  {
    name: 'Neighborhood Credit Union',
    description:
      'Community-focused credit union serving Dallas since 1930. Known for working with members on an individual basis. Offers checking, savings, and small personal loans with more flexible underwriting than big banks.',
    url: 'https://www.myncu.com',
    phone: '(214) 748-9393',
    tags: ['Community', 'Flexible'],
  },
  {
    name: 'Lone Star National Bank',
    description:
      'Offers the "Customer Care Account" for individuals who may not qualify for traditional checking accounts. Debit card included. Available at Texas locations.',
    url: 'https://www.lonestarnationalbank.com',
    phone: null,
    tags: ['Customer Care Account'],
  },
  {
    name: 'Bank On Dallas',
    description:
      'A citywide initiative connecting unbanked and underbanked Dallas residents with safe, affordable bank and credit union accounts. Their certified accounts have no overdraft fees and low monthly costs.',
    url: 'https://joinbankon.org',
    phone: null,
    tags: ['City Program', 'No Overdraft Fees'],
  },
]

const financialLiteracyResources = [
  {
    name: 'Operation HOPE',
    description:
      'Provides free financial coaching and literacy programs across Dallas. Coaches help with building credit from scratch, creating budgets, and setting financial goals. All services are free and confidential.',
    url: 'https://www.operationhope.org',
    icon: BookOpen,
  },
  {
    name: 'Miles of Freedom Financial Support',
    description:
      'Founded by Dallas exoneree Johnnie Lindsey, Miles of Freedom provides direct financial support and guidance to help exonerees navigate the basics: opening accounts, understanding bills, and avoiding predatory services.',
    url: 'https://www.milesoffreedom.org',
    icon: ShieldCheck,
  },
  {
    name: 'Dallas Public Library Financial Programs',
    description:
      'The Dallas Public Library hosts free financial literacy workshops covering topics from basic budgeting to credit building. No registration required for most programs. Check the events calendar at dallaslibrary.org.',
    url: 'https://dallaslibrary.org/events',
    icon: BookOpen,
  },
  {
    name: 'Consumer Financial Protection Bureau',
    description:
      'Federal resource with free guides on building credit, understanding your rights as a consumer, spotting predatory lending, and filing complaints against unfair financial practices.',
    url: 'https://www.consumerfinance.gov',
    icon: ShieldCheck,
  },
]

const compensationSteps = [
  {
    step: 1,
    title: 'Exoneration Must Be Official',
    description:
      'Texas compensation requires an official exoneration, either through a court order, a governor&apos;s pardon based on innocence, or a grant of relief by the Texas Court of Criminal Appeals.',
  },
  {
    step: 2,
    title: 'File an Application',
    description:
      'Applications are filed with the Texas Comptroller of Public Accounts. The process involves documenting the wrongful conviction and years served. Many exonerees work with organizations experienced in this process.',
  },
  {
    step: 3,
    title: 'Compensation Amount',
    description:
      'Texas provides $80,000 for each year of wrongful imprisonment, plus an annuity. It also includes 120 hours of tuition at a state institution of higher education, and access to the state employee health insurance plan.',
  },
  {
    step: 4,
    title: 'Timeline Expectations',
    description:
      'The process typically takes 3 or more years from filing to receiving funds. During this waiting period, exonerees must find other ways to meet their basic needs. This is why immediate resources like the ones on this site matter so much.',
  },
]

export default function FinancialPage() {
  return (
    <>
      <PageHeader
        label="Financial Resources"
        title="Financial & Credit Rebuilding"
        description="Building a financial identity from zero is one of the most invisible yet paralyzing challenges exonerees face. This page breaks down the barriers and connects you with real help in Dallas."
      />

      {/* Stats */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            The Financial Reality
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            These numbers capture what it means to re-enter the financial world
            after years of having no financial existence at all.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {financialStats.map((stat) => (
              <Card key={stat.label} className="border-border/60">
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

      {/* Deep Explanation */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What Financial Invisibility Feels Like
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            This is not about being bad with money. It is about the system
            erasing your financial identity and then expecting you to function
            as if nothing happened.
          </p>

          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              When you walk out of prison after years or decades of wrongful
              incarceration, you do not just lack money {"—"} you lack a
              financial identity. No credit score. No bank account history. No
              employment records. In the eyes of every lender and most
              landlords, you simply do not exist. It is as if the financial
              system has never heard of you.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              This financial invisibility makes exonerees prime targets for
              predatory lenders. Without access to mainstream banks, the only
              options for many are payday lenders and title loan shops that
              charge interest rates of 36% or higher. What starts as a small
              loan to cover first month&apos;s rent or a bus pass can quickly
              spiral into thousands of dollars of debt.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Even opening a basic checking account can become a bureaucratic
              wall. Most banks run ChexSystems reports, which flag anyone who
              has had banking issues. If you had an account that went negative
              before your incarceration {"—"} which many people did, since they
              could not manage finances from inside prison {"—"} you may be
              blacklisted from traditional banking for years.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Building credit from zero takes time that exonerees often do not
              have. Secured credit cards require deposits. Credit-builder
              loans require proof of income. Every financial product designed
              to help people build credit assumes a baseline stability that
              most exonerees have not yet achieved. It is a catch-22: you
              need credit to get housing and employment, but you need housing
              and employment to build credit.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Resources */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <span className="flex items-center gap-3">
              <Landmark className="size-7 text-primary" />
              Dallas Banks That Can Help
            </span>
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            These financial institutions offer second-chance accounts or have
            programs specifically designed for people who have been turned away
            elsewhere.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bankingResources.map((bank) => (
              <Card
                key={bank.name}
                className="group border-border/60 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {bank.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {bank.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {bank.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={bank.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Visit Website
                      <ExternalLink className="size-3.5" />
                    </a>
                    {bank.phone && (
                      <a
                        href={`tel:${bank.phone}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Phone className="size-3.5" />
                        {bank.phone}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Literacy */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Financial Education & Support
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Understanding how money works in today&apos;s world is a skill, and
            these organizations offer free help learning it.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {financialLiteracyResources.map((res) => (
              <Card
                key={res.name}
                className="group border-border/60 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <res.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {res.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {res.description}
                  </p>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Visit Website
                    <ExternalLink className="size-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Overview */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Texas Compensation: What to Know
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Texas is one of the states that provides compensation for wrongful
            imprisonment. Here is a general overview of how the process works.
            This is informational only {"—"} consider connecting with an
            experienced organization for guidance specific to your situation.
          </p>

          <div className="flex flex-col gap-4">
            {compensationSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border/60 bg-card p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="ml-11 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
