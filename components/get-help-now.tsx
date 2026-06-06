import { ExternalLink, Phone, Scale, Heart, Users } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { useState } from 'react'

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

export function GetHelpNow() {
  const [loadingUrl, setLoadingUrl] = useState<string | null>(null)
  const [loadingPhone, setLoadingPhone] = useState<string | null>(null)

  const handleLinkClick = (url: string) => {
    setLoadingUrl(url)
    setTimeout(() => {
      setLoadingUrl(null)
    }, 800)
  }

  const handlePhoneClick = (phone: string) => {
    setLoadingPhone(phone)
    setTimeout(() => {
      setLoadingPhone(null)
    }, 800)
  }

  return (
    <section id="get-help" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl animate-fade-in-up">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Support Organizations
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Real Help from People Who Understand
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            These organizations have dedicated track records of supporting
            exonerees. Every link here has been vetted, with no dead ends or
            automated phone trees, just real people doing real work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, idx) => (
            <div
              key={org.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <Card className="group h-full border-border/60 transition-gentle cursor-pointer overflow-hidden hover:shadow-lg hover:-translate-y-2">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-smooth group-hover:scale-110 group-hover:bg-primary/15">
                    <org.icon className="size-5 text-primary transition-smooth group-hover:rotate-6" />
                  </div>
                  <CardTitle className="text-lg transition-gentle group-hover:text-primary">
                    {org.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {org.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {org.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground transition-smooth hover:bg-secondary/80"
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
                      onClick={() => handleLinkClick(org.url)}
                      disabled={loadingUrl === org.url}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-smooth hover:bg-primary/20 hover:scale-105 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed"
                    >
                      {loadingUrl === org.url ? (
                        <>
                          <div className="size-3 animate-spin rounded-full border border-primary border-t-transparent" />
                          Loading...
                        </>
                      ) : (
                        <>
                          Visit Website
                          <ExternalLink className="size-3 transition-smooth group-hover:translate-x-0.5" />
                        </>
                      )}
                    </a>
                    {org.phone && (
                      <a
                        href={`tel:${org.phone}`}
                        onClick={() => handlePhoneClick(org.phone!)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent transition-smooth hover:bg-accent/20 hover:scale-105 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed"
                      >
                        {loadingPhone === org.phone ? (
                          <>
                            <div className="size-3 animate-spin rounded-full border border-accent border-t-transparent" />
                            Calling...
                          </>
                        ) : (
                          <>
                            <Phone className="size-3" />
                            Call
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => handleLinkClick('connect')}
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed"
            disabled={loadingUrl === 'connect'}
          >
            {loadingUrl === 'connect' ? (
              <>
                <div className="size-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                <span>Connecting...</span>
              </>
            ) : (
              <>
                Get Connected Today
                <ExternalLink className="size-4 transition-smooth group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
