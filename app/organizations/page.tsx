import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ExternalLink, Phone, Scale, Heart, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Verified Support Organizations | The IDE Project',
  description:
    'National and Texas-based organizations dedicated to supporting exonerees with re-entry services, housing, employment, advocacy, and healing.',
}

interface Organization {
  name: string
  description: string
  longDescription: string
  services: string[]
  url: string
  phone?: string
  icon: React.ElementType
  tags: string[]
}

const organizations: Organization[] = [
  {
    name: 'Innocence Project of Texas',
    description:
      'Legal representation and advocacy for wrongfully convicted Texans.',
    longDescription:
      'The Innocence Project of Texas works to exonerate innocent people who have been wrongly convicted, and to reform the criminal justice system to prevent wrongful convictions. They provide legal representation through a team of lawyers and investigators who investigate cases of actual innocence, primarily in Texas. Post-exoneration, they help connect people with resources and support services.',
    services: [
      'Legal representation for exoneration cases',
      'Post-release support and resource connections',
      'Advocacy for criminal justice reform',
      'Case investigation and DNA testing',
      'Connection to housing and employment resources'
    ],
    url: 'https://innocencetexas.org',
    phone: '(512) 600-8011',
    icon: Scale,
    tags: ['Legal', 'Advocacy', 'Texas-Based'],
  },
  {
    name: 'After Innocence',
    description:
      'Comprehensive re-entry services for exonerees nationwide.',
    longDescription:
      'After Innocence provides holistic re-entry services to exonerees across the United States, focusing on the unique trauma and challenges of rebuilding a life after wrongful conviction. They offer direct support in housing, employment, mental health, and community reintegration. Their approach recognizes that exonerees face distinct barriers compared to other returning citizens.',
    services: [
      'Housing assistance and placement support',
      'Employment counseling and job placement',
      'Mental health and trauma counseling',
      'Financial literacy and credit rebuilding',
      'Community reintegration programming',
      'One-on-one mentoring and case management'
    ],
    url: 'https://www.after-innocence.org',
    icon: Heart,
    tags: ['Re-entry', 'Housing', 'Employment', 'Mental Health'],
  },
  {
    name: 'Innocence Project (National)',
    description:
      'The leading national organization dedicated to exonerating the wrongly convicted.',
    longDescription:
      'The Innocence Project, based in New York, is the largest and most well-known organization working to exonerate wrongfully convicted individuals using DNA evidence. They have helped exonerate over 400 people in the United States. Beyond exoneration, they work on policy reform to prevent wrongful convictions and connect exonerees with post-release support. They maintain a network of legal and support resources across the country.',
    services: [
      'Legal representation and exoneration work',
      'DNA testing and evidence review',
      'Post-release resource referrals',
      'Policy advocacy at state and federal levels',
      'Network of legal and support partners nationwide',
      'Educational programs on criminal justice reform'
    ],
    url: 'https://innocenceproject.org',
    phone: '(212) 364-5340',
    icon: Scale,
    tags: ['Legal', 'Advocacy', 'National'],
  },
  {
    name: 'Miles of Freedom',
    description:
      'Dallas exoneree-led organization providing direct re-entry support.',
    longDescription:
      'Founded by exoneree Johnnie Lindsey, Miles of Freedom operates as an exoneree-led nonprofit providing direct re-entry assistance to exonerees and returning citizens in the Dallas-Fort Worth area. Because it was founded by someone who experienced wrongful conviction, the organization deeply understands the unique barriers exonerees face. They provide mentoring, employment connections, housing assistance, and community support based on lived experience.',
    services: [
      'Direct re-entry mentoring from exonerees',
      'Employment connections and job placement',
      'Housing assistance and navigation',
      'Community events and peer support',
      'Mental health support and counseling',
      'Crisis assistance and emergency support'
    ],
    url: 'https://www.milesoffreedom.org',
    icon: Heart,
    tags: ['Re-entry', 'Exoneree-Led', 'Dallas-Based'],
  },
  {
    name: 'Organization of Exonerees',
    description:
      'National network of exonerees advocating for systemic change.',
    longDescription:
      'The Organization of Exonerees is a peer-led national organization run by and for exonerees. They work to change the system from the inside through advocacy, awareness, and support. By centering the voices of people who have actually experienced wrongful conviction, they bring credibility and lived expertise to policy discussions. They support one another while fighting for broader criminal justice reform.',
    services: [
      'Peer support networks and community',
      'National advocacy and legislative work',
      'Awareness campaigns on wrongful convictions',
      'Member support and resources',
      'Platform for exonerees to tell their stories',
      'Connection to local and national initiatives'
    ],
    url: 'https://organizationofexonerees.com',
    icon: Users,
    tags: ['Advocacy', 'Peer Support', 'National'],
  },
  {
    name: 'Healing Justice',
    description:
      'Healing-focused services for exonerees and their families.',
    longDescription:
      'Healing Justice is dedicated to preventing and alleviating the harms caused by wrongful conviction through healing retreats, peer support, and direct services. They recognize that wrongful conviction creates trauma not just for the exoneree, but also for their family members who suffered alongside them. Their retreat programs bring exonerees together in safe spaces to process trauma, reconnect, and begin healing. They also provide ongoing counseling and support services.',
    services: [
      'Healing retreats for exonerees',
      'Family support and counseling',
      'Trauma-informed mental health services',
      'Peer support groups',
      'Resource navigation assistance',
      'Advocacy on behalf of exonerees and families'
    ],
    url: 'https://healingjusticeproject.org',
    icon: Heart,
    tags: ['Mental Health', 'Healing', 'Family Support'],
  },
]

export default function OrganizationsPage() {
  return (
    <>
      <PageHeader
        label="Verified Organizations"
        title="National & Texas Organizations Supporting Exonerees"
        description="These organizations are dedicated to helping exonerees like you rebuild your life. Every organization here has been vetted and has a genuine track record of support."
      />

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground">
            After exoneration, you shouldn&apos;t have to navigate the system alone.
            These organizations understand what you&apos;ve been through and have
            dedicated their work to supporting people like you. Some focus on
            legal advocacy, some on direct re-entry services, and others on
            healing and community. Many work together, so a conversation with
            one can connect you to others.
          </p>

          <div className="flex flex-col gap-8">
            {organizations.map((org) => (
              <Card
                key={org.name}
                className="border-border/60 overflow-hidden transition-all hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <org.icon className="size-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{org.name}</CardTitle>
                      <CardDescription className="mt-1 text-base">
                        {org.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Long Description */}
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {org.longDescription}
                  </p>

                  {/* Services */}
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground">
                      Services & Support:
                    </h3>
                    <ul className="space-y-2">
                      {org.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {org.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <div className="flex flex-col gap-3 border-t border-border/60 pt-4 sm:flex-row sm:gap-2">
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
                    >
                      Visit Website
                      <ExternalLink className="size-3.5" />
                    </a>
                    {org.phone && (
                      <a
                        href={`tel:${org.phone}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20"
                      >
                        <Phone className="size-3.5" />
                        Call
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            Not Sure Where to Start?
          </h2>
          <p className="mb-6 text-base leading-relaxed text-primary-foreground/80">
            Start with the organization that speaks to your immediate need. If
            you need legal support, contact the Innocence Project. If you need
            housing and employment help, Miles of Freedom or After Innocence
            are great first calls. Most importantly, reach out. These people
            exist to help you.
          </p>
          <a
            href="https://www.milesoffreedom.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 font-semibold text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-md"
          >
            Contact Miles of Freedom
            <ExternalLink className="size-4" />
          </a>
        </div>
      </section>
    </>
  )
}
