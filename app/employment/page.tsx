import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Phone, Briefcase, TrendingDown, UserX, DollarSign, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Employment After Exoneration | The IDE Project',
  description:
    'The challenges exonerees face finding work and Dallas-area organizations offering employment support, job training, and placement assistance.',
}

const employmentStats = [
  {
    label: 'Employed Within 1 Year of Release',
    value: '~15%',
    context:
      'The vast majority of exonerees cannot find steady work in their first year of freedom. No resume. No references. No safety net.',
    icon: Briefcase,
  },
  {
    label: 'Rejected Due to Background Checks',
    value: '67%',
    context:
      'Even after exoneration, background checks still trigger automatic rejection by most employers.',
    icon: UserX,
  },
  {
    label: 'Avg. Wage vs. Same-Age Peers',
    value: '40% Less',
    context:
      'Exonerees who do find work earn significantly less than people their age who were never incarcerated.',
    icon: DollarSign,
  },
  {
    label: 'Years of Career Development Lost',
    value: '14 avg.',
    context:
      'The average Texas exoneree lost 14 years of career growth, professional connections, and skills development.',
    icon: TrendingDown,
  },
]

const resources = [
  {
    name: 'Workforce Solutions Greater Dallas',
    description:
      'The primary workforce development organization for Dallas County. They offer free job search assistance, career counseling, skills assessments, and connections to training programs. Walk-ins welcome at their career centers across Dallas.',
    url: 'https://www.wfsdallas.com',
    phone: '(214) 290-1000',
    tags: ['Job Search', 'Career Counseling', 'Training'],
  },
  {
    name: 'Texas Workforce Commission',
    description:
      'State agency offering WorkInTexas.com, the state job matching system with thousands of active listings. Also administers unemployment benefits and provides information about your rights as a job seeker.',
    url: 'https://www.twc.texas.gov',
    phone: '(800) 628-5115',
    tags: ['State Program', 'Job Board'],
  },
  {
    name: 'Unlocking Doors',
    description:
      'Dallas-based nonprofit at 12225 Greenville Ave., Ste 850, focused on helping individuals with criminal backgrounds find stable employment. They offer resume building, interview coaching, and direct employer connections.',
    url: 'https://www.unlockingdoors.org/',
    phone: null,
    tags: ['Resume Help', 'Interview Prep', 'Dallas-Based'],
  },
  {
    name: 'South Dallas Employment Project',
    description:
      'Community-based initiative focused on connecting South Dallas residents with local employers. Programs include skills assessments, job fairs, and post-placement follow-up support.',
    url: 'https://www.southdallasemploymentproject.org/',
    phone: null,
    tags: ['Community', 'South Dallas'],
  },
  {
    name: 'Dallas College Career Services',
    description:
      'All seven Dallas College campuses offer free career services including job fairs, employer networking events, and internship placement. Open to both enrolled students and community members for some programs.',
    url: 'https://www.dallascollege.edu',
    phone: null,
    tags: ['Career Fairs', 'Education'],
  },
]

const fairChanceTips = [
  {
    title: 'Know Your Rights',
    description:
      'Texas does not have a statewide "ban the box" law, but Dallas and many large employers have adopted fair-chance hiring policies. This means they delay asking about criminal history until later in the hiring process. If an employer asks about convictions on the initial application, check whether they are subject to local fair-chance ordinances.',
  },
  {
    title: 'Get Your Records Straight',
    description:
      'Expungement removes the arrest and conviction from your record entirely. In Texas, exonerees are entitled to expungement of all records related to the wrongful conviction. Contact the court that handled your case or reach out to the Innocence Project of Texas for assistance with the process.',
  },
  {
    title: 'Focus on Skills, Not Gaps',
    description:
      'Many exonerees developed real skills during incarceration: conflict resolution, self-discipline, mentoring, and often vocational trades. Frame your resume around what you can do, not where you have been. Workforce Solutions Greater Dallas offers free resume coaching to help with this.',
  },
  {
    title: 'Start With Fair-Chance Employers',
    description:
      'Companies like Dave&apos;s Hot Chicken, Walmart, Target, Starbucks, and many others in the DFW area have publicly committed to fair-chance hiring. The Center for Employment Opportunities also maintains a list of fair-chance employers.',
  },
  {
    title: 'Consider Self-Employment',
    description:
      'Some exonerees find success in self-employment or gig work as an immediate income source. Services like DoorDash, lawn care, or handyman work can provide income while you search for more stable employment. Dallas College also offers entrepreneurship courses.',
  },
]

export default function EmploymentPage() {
  return (
    <>
      <PageHeader
        label="Employment Resources"
        title="Employment After Exoneration"
        description="Finding work after years of wrongful incarceration is one of the hardest parts of rebuilding. This page explains why and connects you with Dallas-area organizations that can help."
      />

      {/* Stats */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            The Employment Reality
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            These numbers tell a story that most people never hear.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {employmentStats.map((stat) => (
              <Card key={stat.label} className="border-border/60">
                <CardContent className="pt-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <stat.icon className="size-5 text-accent" />
                  </div>
                  <p className="mb-1 font-serif text-3xl font-bold tracking-tight text-accent">
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
            Why Finding Work Is So Hard
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            The barriers are systemic, not personal. Understanding them is the
            first step to overcoming them.
          </p>

          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Imagine walking into a job interview and being asked to explain a
              14-year gap on your resume. The truth {"—"} wrongful imprisonment
              {"—"} often scares employers more than a blank space. Background
              checks, even when they show exoneration rather than conviction,
              trigger the same automated rejection systems that filter out
              anyone with a criminal record.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The skills gap is massive. Someone incarcerated in 2005 missed
              the smartphone revolution, the rise of cloud computing, remote
              work, and nearly every shift in the modern workplace. The job
              market you left is not the job market you came back to. Even
              basic tasks like submitting an online application or using
              workplace software require skills that most people take for
              granted.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Re-entry employment programs exist, but most are designed for
              people who committed crimes and are re-entering under
              supervision. Exonerees are innocent. Being lumped into the same
              programs designed for parolees can feel like another form of
              punishment. The psychological toll of repeated rejection {"—"}
              after already being rejected by the justice system {"—"} is
              something most people cannot imagine.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Fair-chance hiring policies are growing in Dallas, but they
              remain the exception rather than the rule. Many exonerees end up
              in low-wage, unstable work far below their potential. The
              question is not whether exonerees want to work {"—"} they
              overwhelmingly do. The question is whether the system gives them
              a fair chance to.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Practical Steps You Can Take
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            The path is not easy, but it is navigable. Here are concrete
            approaches that other exonerees have found helpful.
          </p>

          <div className="flex flex-col gap-4">
            {fairChanceTips.map((tip, i) => (
              <div
                key={tip.title}
                className="rounded-xl border border-border/60 bg-card p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {tip.title}
                  </h3>
                </div>
                <p className="ml-11 text-sm leading-relaxed text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Job Examples */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Job Examples by Skills & Experience
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Many skills you developed can translate directly into stable employment. Here are real job types suited to different backgrounds.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Mechanical Skills
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  If you have experience with engines, tools, or maintenance:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Auto repair technician</li>
                  <li>• HVAC technician</li>
                  <li>• Maintenance worker</li>
                  <li>• Equipment operator</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Briefcase className="size-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Construction & Skilled Trades
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  If you developed hands-on trades knowledge:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Carpenter or framing</li>
                  <li>• Electrician apprentice</li>
                  <li>• Plumbing</li>
                  <li>• General labor crew lead</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Customer Service & Retail
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  For people skills and communication:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Retail store associate</li>
                  <li>• Customer service representative</li>
                  <li>• Food service supervisor</li>
                  <li>• Call center representative</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Heart className="size-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Healthcare & Caregiving
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  If you have compassion and want to help:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Certified nursing assistant (CNA)</li>
                  <li>• Home health aide</li>
                  <li>• Patient transport</li>
                  <li>• Phlebotomy technician</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Clerical & Administrative
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  If you're organized and detail-oriented:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data entry specialist</li>
                  <li>• Office assistant</li>
                  <li>• Warehouse inventory clerk</li>
                  <li>• Receptionist</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Briefcase className="size-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Self-Employment & Gig Work
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  For independent earners:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Delivery driver (DoorDash, Instacart)</li>
                  <li>• Gig labor (TaskRabbit)</li>
                  <li>• Lawn care / landscaping</li>
                  <li>• Handyman services</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-lg border border-border/60 bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong>Pro tip:</strong> Dallas College offers affordable
              certifications in many of these fields. Start with an industry
              certification (like CNA or commercial driver&apos;s license) to
              make yourself more competitive while you continue job searching.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Resources */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Dallas Employment Resources
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            These organizations offer real job search assistance, training, and
            placement help in the Dallas area.
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
                        className="rounded-md bg-background px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {org.url && (
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/20"
                      >
                        Visit Website
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                    {org.phone && (
                      <a
                        href={`tel:${org.phone}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent transition-all hover:bg-accent/20"
                      >
                        <Phone className="size-3" />
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
    </>
  )
}
