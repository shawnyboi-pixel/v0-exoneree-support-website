import { ArrowLeft, CheckCircle2, AlertCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Your Rights After Exoneration | The Ide Project',
  description: 'Complete guide to your legal rights and benefits after exoneration in Texas.',
}

export default function RightsAfterExonerationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Your Rights After Exoneration</h1>
          <p className="text-lg text-muted-foreground">What you're legally entitled to after being released from wrongful imprisonment.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Key Point About Your Status</h2>
          <div className="rounded-lg bg-green-50 border border-green-200 p-6">
            <p className="text-sm text-green-900 mb-3">
              <span className="font-semibold">You are innocent.</span> The court has determined you did not commit the crime. You have the same rights as anyone who was never accused.
            </p>
            <p className="text-sm text-green-900">
              This is different from a pardon (forgiveness) or a parole (conditional release). This is exoneration: proof of innocence.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Compensation Rights</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Texas law provides compensation to exonerees. The amounts vary but can be significant.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Monetary Compensation</p>
              <p className="text-sm text-muted-foreground">Texas pays $80,000 per year of wrongful imprisonment, plus $25,000 for each year on parole/probation. Depending on your case, this could be $300,000 to $1 million+.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Education Benefits</p>
              <p className="text-sm text-muted-foreground">Free tuition and fees at any Texas public college or university. Housing and meals may also be covered depending on the school.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Mental Health Services</p>
              <p className="text-sm text-muted-foreground">Up to $50,000 in free mental health counseling, therapy, and psychiatric care.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Job Training</p>
              <p className="text-sm text-muted-foreground">Up to $20,000 for vocational training programs to help you get hired.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Employment Rights</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">You can legally say you were never convicted:</span> If asked "have you been convicted," you can answer "no." It's legally accurate since you were exonerated.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">No background check stigma:</span> Your exoneration should clear background checks. If it doesn't, you can challenge it.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">License restoration:</span> If your professional license (driver, nurse, contractor) was suspended, it can be restored.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Housing & Benefits</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Social Security benefits:</span> If you lost time due to imprisonment, you may qualify for increased benefits.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Healthcare:</span> You qualify for expedited Medicaid enrollment.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Housing assistance:</span> Many nonprofits provide emergency housing for newly released exonerees.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">How to Claim Your Benefits</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Get Your Court Documents</p>
              <p className="text-sm text-muted-foreground">Obtain the exoneration order from the court. This proves your case. The Innocence Project or your lawyer can help.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: Contact Comptroller's Office</p>
              <p className="text-sm text-muted-foreground">Texas Comptroller of Public Accounts handles compensation. They can tell you exactly what you qualify for.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: Apply for Education Benefits</p>
              <p className="text-sm text-muted-foreground">Contact the Texas Higher Education Coordinating Board or your desired college's financial aid office with your exoneration documents.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 4: Get Legal Help</p>
              <p className="text-sm text-muted-foreground">Nonprofit organizations (The Innocence Project, After Innocence) will help you navigate this process for free.</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Important: Don't Sign Away Your Rights</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Some exonerees are offered money in settlements but required to sign documents limiting their rights. Before signing anything:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Read it carefully or have a lawyer read it</li>
            <li>• Understand what you're giving up</li>
            <li>• Know that you likely have more rights than they're offering</li>
            <li>• Consult with the Innocence Project or legal aid first</li>
          </ul>
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
