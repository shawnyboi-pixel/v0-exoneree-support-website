import { ExternalLink, Phone, Scale, Heart, Users } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

const organizations = [
  {
    name: 'Innocence Project of Texas',
    description:
      'Legal representation and advocacy for wrongfully convicted Texans. They fight for exoneration and post-release support.',
    url: 'https://innocencetexas.org',
    phone: '(512) 600-8011',
    icon: Scale,
    tags: ['Legal Aid', 'Advocacy'],
  },
  {
    name: 'After Innocence',
    description:
      'National organization providing life re-entry services to exonerees including housing assistance, employment support, and counseling.',
    url: 'https://www.after-innocence.org',
    phone: null,
    icon: Heart,
    tags: ['Re-entry', 'Housing', 'Employment'],
  },
  {
    name: 'Innocence Project (National)',
    description:
      'The leading national organization dedicated to exonerating wrongfully convicted individuals and reforming the criminal justice system.',
    url: 'https://innocenceproject.org',
    phone: '(212) 364-5340',
    icon: Scale,
    tags: ['Legal Aid', 'Policy Reform'],
  },
  {
    name: 'Texas Defender Service',
    description:
      'Provides legal representation to death row inmates and advocates for a fair and just criminal legal system in Texas.',
    url: 'https://www.texasdefender.org',
    phone: '(713) 222-7788',
    icon: Scale,
    tags: ['Legal Aid', 'Death Penalty'],
  },
  {
    name: 'Texas RioGrande Legal Aid',
    description:
      'Free civil legal services to low-income residents across Texas, including help with housing, benefits, and family law matters.',
    url: 'https://www.trla.org',
    phone: '(888) 988-9996',
    icon: Users,
    tags: ['Legal Aid', 'Benefits', 'Housing'],
  },
  {
    name: 'Returning Hearts Celebration',
    description:
      'Reunification events for incarcerated parents and their children. Helping families heal the bonds that incarceration fractured.',
    url: 'https://returninghearts.com',
    phone: null,
    icon: Heart,
    tags: ['Family', 'Community'],
  },
]

export function ResourcesCta() {
  return (
    <section id="resources" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Verified Organizations
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Real Help from People Who Understand
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            These organizations have dedicated track records of supporting
            exonerees. Every link here has been vetted. No dead ends, no
            automated phone trees {"—"} real people doing real work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org) => (
            <Card
              key={org.name}
              className="group border-border/60 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <org.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{org.name}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {org.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                <div className="flex flex-col gap-2">
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Visit Website
                    <ExternalLink className="size-3.5" />
                  </a>
                  {org.phone && (
                    <a
                      href={`tel:${org.phone}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="size-3.5" />
                      {org.phone}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
