'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function CompensationGuidePage() {
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
            Understanding Your Compensation Options
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            A complete guide to compensation programs for the wrongfully convicted
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Most states have laws that compensate people who were wrongfully convicted. You may be eligible for money, healthcare, education benefits, and more. The key is understanding your rights and knowing which programs apply to you.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• Federal law provides $50,000 base compensation plus $50,000 per year wrongfully imprisoned</li>
            <li>• Most states have their own compensation programs with different amounts</li>
            <li>• You may qualify for healthcare, mental health services, and education benefits</li>
            <li>• There are time limits to file, so act soon after exoneration</li>
          </ul>
        </section>

        {/* Section 1: Federal Compensation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Federal Compensation (All States)</h2>
          
          <p className="text-foreground/80 mb-6">
            If you've been exonerated, the federal government provides compensation through the <strong>Civil Rights Act</strong>. This is available in every state.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-4">How Federal Compensation Works</h3>
            <div className="space-y-4 text-foreground/80">
              <div>
                <strong className="text-foreground">Base Amount:</strong>
                <p>$50,000 for your wrongful conviction</p>
              </div>
              <div>
                <strong className="text-foreground">Additional Per-Year Amount:</strong>
                <p>$50,000 for each year you were wrongfully imprisoned</p>
              </div>
              <div>
                <strong className="text-foreground">Who Qualifies:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Your conviction was overturned</li>
                  <li>You were exonerated or your case was dismissed</li>
                  <li>You served actual prison time</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Example</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="text-foreground/80">
              <strong>James spent 15 years in prison for a crime he didn't commit.</strong> He receives:
            </p>
            <p className="text-foreground font-semibold mt-3">$50,000 (base) + ($50,000 × 15 years) = $800,000</p>
            <p className="text-foreground/80 text-sm mt-3">This money is tax-free and won't affect most government benefits.</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How to File</h3>
          <ol className="space-y-3 text-foreground/80">
            <li><strong>1. Contact the U.S. Department of Justice</strong> or an exoneree organization</li>
            <li><strong>2. Gather proof of exoneration</strong> (court documents, DNA evidence, etc.)</li>
            <li><strong>3. Submit a claim with documentation</strong></li>
            <li><strong>4. The government reviews and approves</strong></li>
            <li><strong>5. Receive payment</strong> (timeline: 6-12 months)</li>
          </ol>
        </section>

        {/* Section 2: State Compensation Laws */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">State Compensation Programs</h2>

          <p className="text-foreground/80 mb-6">
            Most states have their own compensation laws, and some offer MORE than federal compensation. These vary significantly by state.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">Texas Compensation (If You're In Texas)</h3>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6 mb-6">
            <p className="text-foreground/80 mb-4">
              <strong>Texas Article 64.03 Law:</strong> Provides compensation to the wrongfully convicted.
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li><strong>• Base payment:</strong> $80,000</li>
              <li><strong>• Per year imprisoned:</strong> $80,000 per year</li>
              <li><strong>• Lifetime mental health services:</strong> Free counseling and therapy</li>
              <li><strong>• Health insurance:</strong> Can receive state healthcare coverage</li>
              <li><strong>• Education:</strong> Free tuition at Texas universities</li>
              <li><strong>• Work:</strong> Priority employment consideration with state agencies</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Other States</h3>
          <p className="text-foreground/80 mb-4">
            Compensation amounts vary widely. Some states pay more, some less. <strong>Check with your state's Attorney General office or an exoneree organization to learn your state's specific law.</strong>
          </p>

          <Card className="border-border/60 mb-6">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-3">Quick Compensation Range by State</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• <strong>Texas, North Carolina:</strong> $80,000+ per year</li>
                <li>• <strong>California, New York:</strong> $140,000-$200,000+ per year</li>
                <li>• <strong>Federal baseline:</strong> $50,000+ per year</li>
                <li>• <strong>Some states:</strong> $25,000-$50,000 per year</li>
                <li>• <strong>Some states:</strong> No program (rare)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Additional Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Beyond Money: Other Benefits</h2>

          <p className="text-foreground/80 mb-6">
            Compensation isn't just cash. Many programs include services that help you rebuild your life.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Mental Health Services</h4>
                <p className="text-sm text-foreground/80">Free therapy, counseling, and psychiatric care for life. Reentry trauma is real—this support helps.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Healthcare</h4>
                <p className="text-sm text-foreground/80">Free or reduced-cost health insurance and medical care. Physical exams, medications, everything covered.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Education & Job Training</h4>
                <p className="text-sm text-foreground/80">Free tuition at colleges, universities, or vocational training programs. Career counseling included.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Priority Employment</h4>
                <p className="text-sm text-foreground/80">Preference for government jobs, job placement assistance, and employer connections.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Record Sealing</h4>
                <p className="text-sm text-foreground/80">Your arrest and conviction records can be sealed so employers and landlords don't see them.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: How to Apply */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Step-by-Step: How to File Your Claim</h2>

          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 1: Get Your Court Documents</strong>
              <p className="text-sm text-foreground/80 mt-2">You need proof of exoneration: court order, DNA exoneration, dismissal, pardon, or clemency.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 2: Contact Your State's Program</strong>
              <p className="text-sm text-foreground/80 mt-2">Call your state's Attorney General office or crime victim compensation board. They'll tell you exactly what to do.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 3: Gather Supporting Documents</strong>
              <p className="text-sm text-foreground/80 mt-2">You'll need: identification, proof of wrongful conviction, proof of time served, medical records (if seeking healthcare benefits).</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 4: File Your Claim</strong>
              <p className="text-sm text-foreground/80 mt-2">Submit your application. There are time limits (usually 1-2 years after exoneration), so don't wait.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 5: Wait for Approval</strong>
              <p className="text-sm text-foreground/80 mt-2">Timeline: 3-12 months depending on your state. You can check status regularly.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 6: Receive Your Benefits</strong>
              <p className="text-sm text-foreground/80 mt-2">Money deposited to your account, benefits cards mailed, or services activated.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Mistakes to Avoid</h2>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-6 space-y-4">
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ Waiting Too Long</strong>
              <p className="text-sm text-foreground/80 mt-1">Most states have a deadline (1-2 years). File immediately after exoneration.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ Not Asking for Help</strong>
              <p className="text-sm text-foreground/80 mt-1">Exoneree organizations and lawyers will help FOR FREE. Don't try to navigate alone.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ Missing Deadlines</strong>
              <p className="text-sm text-foreground/80 mt-1">Read all deadlines carefully. One missed deadline can disqualify you.</p>
            </div>
            <div>
              <strong className="text-red-900 dark:text-red-200">❌ Not Taking Mental Health Services</strong>
              <p className="text-sm text-foreground/80 mt-1">Many people skip this. You've been through trauma—please use these free services.</p>
            </div>
          </div>
        </section>

        {/* Get Help Section */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Get Help Filing Your Claim</h3>
          <p className="text-foreground/80 mb-4">You don't have to do this alone. These organizations help exonerees for free:</p>
          <ul className="space-y-2 text-foreground/80">
            <li>• <strong>The Innocence Project:</strong> www.innocenceproject.org</li>
            <li>• <strong>National Registry of Exonerations:</strong> www.law.umich.edu/special/exoneration</li>
            <li>• <strong>Your state's Attorney General office</strong> - they explain your state's program</li>
            <li>• <strong>Local legal aid societies</strong> - free lawyers to help with your claim</li>
          </ul>
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
          guideTitle="Understanding Your Compensation Options"
          guideId="compensation-options"
        />
      </article>
    </main>
  )
}
