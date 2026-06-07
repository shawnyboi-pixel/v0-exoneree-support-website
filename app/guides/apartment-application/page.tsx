import { ArrowLeft, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Apartment Application Guide | The Ide Project',
  description: 'How to successfully apply for an apartment with a criminal record.',
}

export default function ApartmentApplicationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Apartment Application Guide</h1>
          <p className="text-lg text-muted-foreground">How to get approved for an apartment even with a criminal record.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Before You Apply</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Getting rejected from multiple apartments hurts your chances. Apply strategically to places likely to accept you.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Check Your Credit Report</p>
                <p className="text-sm text-muted-foreground">Free at annualcreditreport.com. Correct any errors before applying. A bad credit score makes apartments reject you faster than a record.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Get References Ready</p>
                <p className="text-sm text-muted-foreground">Employers, social workers, counselors, family—anyone who can say you're reliable and pay on time. They'll call these people.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Gather Financial Documents</p>
                <p className="text-sm text-muted-foreground">Pay stubs, bank statements, compensation letters, disability papers—anything showing income stability.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Filling Out the Application</h2>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-6 mb-6">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-semibold">Golden Rule:</span> Be honest. If you lie on the application and they find out, you're automatically disqualified and possibly blacklisted.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Section: Criminal History</h3>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-sm text-muted-foreground mb-3">If asked "Have you been convicted of a felony?" :</p>
                <div className="bg-slate-50 rounded p-3 mb-3">
                  <p className="text-sm font-mono text-foreground">"Yes, I was convicted of [specific charge] in [year]. I served my time and have focused on building a stable life since my release in [year]."</p>
                </div>
                <p className="text-sm text-muted-foreground">Then briefly explain what you've done to show you've changed (job, counseling, family support, etc.).</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Section: Employment</h3>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-sm text-muted-foreground mb-3">List every job you have or had. Include:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Exact job title</li>
                  <li>• Company name and address</li>
                  <li>• Dates worked (even if it was short)</li>
                  <li>• Supervisor's name and contact info</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">Don't leave gaps unexplained. If you were incarcerated, you can write "incarcerated" or "personal reasons."</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Section: References</h3>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="text-sm text-muted-foreground mb-3">Give people who will say positive things about you:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Current employer (best option)</li>
                  <li>• Previous employer (if on good terms)</li>
                  <li>• Social worker or counselor</li>
                  <li>• Teacher or instructor (if recent)</li>
                  <li>• Family member (only if landlord accepts)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <span className="font-semibold">Important:</span> Ask these people first. Tell them you're applying for apartments and they'll be called as a reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Application Fees & Costs</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Application Fee</p>
              <p className="text-sm text-muted-foreground">$25-75 is normal. They do a background check. This fee is usually non-refundable.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Security Deposit</p>
              <p className="text-sm text-muted-foreground">Usually one month's rent (sometimes more if you have bad credit). You get this back if you leave the place in good condition.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">First Month's Rent</p>
              <p className="text-sm text-muted-foreground">Usually due when you sign the lease, before you even move in.</p>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-900">
                <span className="font-semibold">Warning:</span> If a landlord asks for money via wire transfer or gift cards before you even sign, it's a scam. Stop communicating with them.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Red Flags to Avoid</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">They won't let you see the apartment:</span> Always see the place before applying or paying anything.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">They only accept cash:</span> Legitimate landlords take checks, money orders, or automatic transfers.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Pressure to decide immediately:</span> Real landlords give you time to think.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">They ask for personal details upfront:</span> Don't give your SSN or full financial info until you're seriously considering renting.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">After You're Approved</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Get the lease in writing. Read it carefully before signing.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Take photos of the apartment condition on move-in day (with date visible).</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Pay rent on time, every time. Build a good rental history for your next place.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Document any damage that was already there before you moved in.</span>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-border/60">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to All Guides
          </Link>
        </div>
      </div>
    </div>
  )
}
