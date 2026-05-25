import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { TrendingDown, Clock, Briefcase, Scale } from 'lucide-react'

const stats = [
  {
    label: 'Total Exonerations in Texas',
    value: '508',
    context: 'Second most exonerations in the nation.',
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
]

export function StatisticsDashboard() {
  return (
    <section id="statistics" className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl lg:max-w-4xl animate-fade-in-up">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground lg:text-base">
            The Numbers
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">
              What the Exonerees Say
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
            The statistics behind the systemic struggles exonerees face represent the reality of wrongful conviction. These numbers reveal the lived experiences of individuals seeking to rebuild their lives after years of injustice.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <Card className="group h-full border-border/60 transition-gentle cursor-pointer hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6 lg:pt-8">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgClass} transition-smooth group-hover:scale-110 lg:h-12 lg:w-12`}
                  >
                    <stat.icon className={`size-5 ${stat.accentClass} lg:size-6`} />
                  </div>
                  <p className={`mb-1 font-serif text-4xl font-bold tracking-tight ${stat.accentClass} transition-gentle group-hover:scale-105 origin-left lg:text-5xl`}>
                    {stat.value}
                  </p>
                  <p className="mb-3 text-sm font-semibold text-foreground lg:text-base">
                    {stat.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
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
