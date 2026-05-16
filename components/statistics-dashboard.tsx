import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { TrendingDown, Clock, Briefcase, Scale } from 'lucide-react'

const stats = [
  {
    label: 'Total Exonerations in Texas',
    value: '430+',
    context: 'More than any other state in the U.S.',
    icon: Scale,
    accentClass: 'text-chart-1',
    bgClass: 'bg-chart-1/10',
  },
  {
    label: 'Average Years Lost',
    value: '14',
    context:
      'Years stolen from people later proven innocent. That is entire childhoods missed, careers never started, families fractured.',
    icon: Clock,
    accentClass: 'text-accent',
    bgClass: 'bg-accent/10',
  },
  {
    label: 'Employed Within First Year',
    value: '~15%',
    context:
      'The vast majority of exonerees cannot find steady work in their first year of freedom. No resume. No references. No safety net.',
    icon: Briefcase,
    accentClass: 'text-chart-3',
    bgClass: 'bg-chart-3/10',
  },
  {
    label: 'Avg. Time to Receive Compensation',
    value: '3+ yrs',
    context:
      'Even in states that offer it, compensation takes years of legal battles. Many exonerees never see a dime.',
    icon: TrendingDown,
    accentClass: 'text-chart-5',
    bgClass: 'bg-chart-5/10',
  },
]

export function StatisticsDashboard() {
  return (
    <section id="statistics" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The Numbers
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Texas Exoneration at a Glance
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Behind every statistic is a person who lost years, relationships, and
            opportunities to a system that failed them. These numbers are not
            abstractions {"—"} they are lived realities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-border/60 transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgClass}`}
                >
                  <stat.icon className={`size-5 ${stat.accentClass}`} />
                </div>
                <p className={`mb-1 font-serif text-4xl font-bold tracking-tight ${stat.accentClass}`}>
                  {stat.value}
                </p>
                <p className="mb-3 text-sm font-semibold text-foreground">
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
  )
}
