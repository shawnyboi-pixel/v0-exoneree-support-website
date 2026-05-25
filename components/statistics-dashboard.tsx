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
        <div className="mb-12 max-w-2xl animate-fade-in-up">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The Numbers
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              What the Exonerees Say
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The statistics behind the systemic struggles exonerees face represent the reality of wrongful conviction. These numbers reveal the lived experiences of individuals seeking to rebuild their lives after years of injustice.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <Card className="group h-full border-border/60 transition-gentle cursor-pointer hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgClass} transition-smooth group-hover:scale-110`}
                  >
                    <stat.icon className={`size-5 ${stat.accentClass}`} />
                  </div>
                  <p className={`mb-1 font-serif text-4xl font-bold tracking-tight ${stat.accentClass} transition-gentle group-hover:scale-105 origin-left`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
