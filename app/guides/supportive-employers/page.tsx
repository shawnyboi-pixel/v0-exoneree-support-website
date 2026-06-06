'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function SupportiveEmployersGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60 bg-secondary/30 sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-4 py-4 lg:px-8">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-3 lg:text-5xl">
            Finding Supportive Employers
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            Companies and organizations that hire people with criminal histories—and why they're good options
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Many major companies actively hire people with criminal or arrest histories. These are called "second chance employers." They know you have valuable skills and they're willing to give you a real opportunity.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• Major companies like Amazon, Home Depot, and Koch Industries hire people with histories</li>
            <li>• Many don't run background checks or only check recent years</li>
            <li>• You're often NOT required to disclose your history upfront</li>
            <li>• Trade jobs and skilled work often pay well and care less about history</li>
            <li>• Nonprofits often have the most compassionate hiring practices</li>
          </ul>
        </section>

        {/* Section 1: Major Companies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Companies That Actively Hire People with Records</h2>
          
          <p className="text-foreground/80 mb-6">
            These are real companies with formal "second chance" programs. They're looking for hardworking people and willing to overlook past mistakes.
          </p>

          <div className="space-y-4 mb-6">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Amazon</h4>
                <p className="text-sm text-foreground/80 mb-3">Warehouse jobs, seasonal work, career advancement available. They don't do background checks for many positions.</p>
                <p className="text-xs text-accent">Positions: Warehouse associate, driver, management track</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Home Depot</h4>
                <p className="text-sm text-foreground/80 mb-3">Retail and warehouse work. Focus on work ethic, not background. Good benefits for part-time staff.</p>
                <p className="text-xs text-accent">Positions: Sales associate, warehouse, supervisor</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Koch Industries</h4>
                <p className="text-sm text-foreground/80 mb-3">Manufacturing and logistics. Formal second chance hiring program. Good wages, benefits, and career growth.</p>
                <p className="text-xs text-accent">Positions: Manufacturing, logistics, maintenance</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Tyson Foods</h4>
                <p className="text-sm text-foreground/80 mb-3">Production and processing work. Known for hiring formerly incarcerated workers. Steady employment, benefits available.</p>
                <p className="text-xs text-accent">Positions: Production, quality, safety roles</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Starbucks</h4>
                <p className="text-sm text-foreground/80 mb-3">Barista and restaurant work. Known for hiring diverse backgrounds. Tuition assistance and health benefits.</p>
                <p className="text-xs text-accent">Positions: Barista, shift leader, store manager</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">UPS</h4>
                <p className="text-sm text-foreground/80 mb-3">Package handling and delivery. Entry-level jobs available with advancement. Competitive wages and benefits.</p>
                <p className="text-xs text-accent">Positions: Package handler, driver, supervisor</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Industry-Specific */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Industries More Likely to Hire People with Records</h2>

          <p className="text-foreground/80 mb-6">
            Some fields are more open to hiring people with histories. These often pay well and offer real career growth.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Skilled Trades</h4>
                <p className="text-sm text-foreground/80 mb-3">Electricians, plumbers, HVAC technicians, welders. High demand, good pay ($50k-$100k+), less background checking.</p>
                <p className="text-xs text-accent font-medium">Training available through vocational schools and unions</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Transportation & Logistics</h4>
                <p className="text-sm text-foreground/80 mb-3">Truck drivers, warehouse, shipping. CDL training available, good income ($40k-$70k), consistent work.</p>
                <p className="text-xs text-accent font-medium">Many companies pay for training if you commit to 1-2 years</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Hospitality & Food Service</h4>
                <p className="text-sm text-foreground/80 mb-3">Hotels, restaurants, catering. Quick hiring, flexible schedules, tips available, advancement to management.</p>
                <p className="text-xs text-accent font-medium">Most don't require background checks for entry-level positions</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Construction</h4>
                <p className="text-sm text-foreground/80 mb-3">General labor, carpentry, roofing. High wages ($40k-$90k), less formal background screening, apprenticeships available.</p>
                <p className="text-xs text-accent font-medium">Unions are especially supportive of second-chance hiring</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Nonprofit Sector</h4>
                <p className="text-sm text-foreground/80 mb-3">Administrative, program support, outreach. Most sympathetic to your background. Often have mission-driven cultures.</p>
                <p className="text-xs text-accent font-medium">Many nonprofits work directly with justice-involved communities</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: How to Search */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">How to Find Second Chance Employers</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Job Sites & Programs</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Ban the Box</strong>
              <p className="text-sm text-foreground/80 mt-2">Websites dedicated to jobs that don't ask about criminal history upfront. Search "ban the box jobs"</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Indeed, LinkedIn, ZipRecruiter</strong>
              <p className="text-sm text-foreground/80 mt-2">Search keywords: "second chance hire," "ex-offender," "justice-involved," "reentry"</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Local Workforce Development Centers</strong>
              <p className="text-sm text-foreground/80 mt-2">Free job training and placement help. Specifically designed for reentry support. Search "workforce development near me"</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Reentry Job Fairs</strong>
              <p className="text-sm text-foreground/80 mt-2">Many communities host hiring events specifically for people reentering. Check The Ide Project resources.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">What to Tell Employers About Your Background</h3>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6">
            <p className="text-foreground/80 mb-4">
              <strong>Important:</strong> You're NOT always required to disclose. Here's the general rule:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>During initial application:</strong> Many companies don't ask. If they don't ask, you don't have to tell.</li>
              <li><strong>If asked directly:</strong> You must answer honestly. Lying can get you fired.</li>
              <li><strong>Common interview question:</strong> "Have you ever been arrested or convicted?" Answer truthfully and briefly.</li>
              <li><strong>What you can say:</strong> "Yes, I was convicted in [year]. I've spent time working on myself and I'm committed to being a great employee. Here's what I learned..."</li>
            </ul>
          </div>
        </section>

        {/* Section 4: What Makes an Employer "Good" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Signs of a Good Employer for You</h2>

          <div className="grid grid-cols-1 gap-4">
            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ They don't immediately judge you</h4>
                <p className="text-sm text-foreground/80">They're open to hearing your story and understanding where you are now.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ They offer training and growth</h4>
                <p className="text-sm text-foreground/80">Formal training programs, mentorship, and advancement opportunities.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ They have good benefits</h4>
                <p className="text-sm text-foreground/80">Health insurance, retirement plans, paid time off matter for your wellbeing.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ They have other people like you</h4>
                <p className="text-sm text-foreground/80">If there are other formerly incarcerated workers, you'll have support and understanding.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ Respectful management</h4>
                <p className="text-sm text-foreground/80">Managers who treat you with dignity and don't bring up your past unnecessarily.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: Red Flags */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Red Flags: Employers to Avoid</h2>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-6 space-y-4">
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ They constantly bring up your past</strong>
              <p className="text-sm text-foreground/80 mt-1">If managers use it as a threat ("Remember where you came from"), it's a toxic environment.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ Very low pay for dangerous work</strong>
              <p className="text-sm text-foreground/80 mt-1">Be cautious of exploitative situations targeting vulnerable workers. You deserve fair wages.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ No benefits or training</strong>
              <p className="text-sm text-foreground/80 mt-1">You need healthcare and growth opportunities. Avoid places that treat you as disposable.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ Pressure to not disclose</strong>
              <p className="text-sm text-foreground/80 mt-1">An employer telling you to lie is setting you up to fail. Walk away.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ They only hire people with records</strong>
              <p className="text-sm text-foreground/80 mt-1">Some predatory companies target formerly incarcerated workers for exploitation. Diverse workplaces are healthier.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Your Rights at Work</h2>

          <p className="text-foreground/80 mb-6">
            You have the same workplace rights as anyone else. Employers cannot:
          </p>

          <div className="space-y-3 text-foreground/80">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong>Fire you just because you have a criminal record</strong>
              <p className="text-sm mt-2">They can only fire you if your record is directly relevant to your job. (Example: Convicted sex offender in childcare would be relevant.)</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong>Continuously discriminate or harass you</strong>
              <p className="text-sm mt-2">If managers treat you unfairly because of your history, document it and report to HR or labor board.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong>Prevent you from being promoted</strong>
              <p className="text-sm mt-2">Your past shouldn't automatically disqualify you from advancement if you're doing your job well.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong>Pay you less than others for the same work</strong>
              <p className="text-sm mt-2">Equal pay for equal work is the law. Report wage discrimination.</p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-border/60">
          <Link href="/guides" className="text-accent hover:text-accent/80 transition-colors font-medium">
            ← Back to All Guides
          </Link>
          <span className="text-sm text-muted-foreground">By The Ide Project | Updated June 1st, 2026</span>
        </div>

        {/* Q&A Section */}
        <GuideQASection
          guideTitle="Finding Supportive Employers"
          guideId="supportive-employers"
        />
      </article>
    </main>
  )
}
