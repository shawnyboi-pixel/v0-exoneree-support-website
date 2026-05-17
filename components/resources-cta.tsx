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
    name: 'Miles of Freedom',
    description:
      'Founded by exoneree Johnnie Lindsey, Miles of Freedom provides re-entry assistance, community support, and essential services to help exonerees and returning citizens rebuild their lives.',
    url: 'https://www.milesoffreedom.org',
    phone: null,
    icon: Heart,
    tags: ['Re-entry', 'Community'],
  },
  {
    name: 'Organization of Exonerees',
    description:
      'A network of exonerees working to change the system from the inside. They bring awareness to wrongful convictions and support those still fighting for freedom.',
    url: 'https://organizationofexonerees.com',
    phone: null,
    icon: Users,
    tags: ['Advocacy', 'Peer Support'],
  },
  {
    name: 'Healing Justice',
    description:
      'Dedicated to preventing and alleviating the harms caused by wrongful convictions through healing retreats, peer support, and direct services for exonerees and their families.',
    url: 'https://healingjusticeproject.org',
    phone: null,
    icon: Heart,
    tags: ['Mental Health', 'Healing Retreats'],
  },
]

export function ResourcesCta() {
  return (
    <section id="resources" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Connect & Support
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Verified Organizations for General Resources
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This is your go-to reference for affordable groceries, transportation, libraries, and community programs across Dallas.
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
