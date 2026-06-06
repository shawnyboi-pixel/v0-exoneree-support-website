import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'How to Expunge Your Record | The Ide Project',
  description: 'Complete guide to expunging your criminal record in Texas.',
}

export default function ExpungementRecordsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">How to Expunge Your Record</h1>
          <p className="text-lg text-muted-foreground">Make arrests and dismissals disappear from your record legally.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What Is Expungement?</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6 mb-4">
            <p className="text-sm text-blue-900">
              Expungement means your arrest or conviction is legally erased from most records. After expungement, you can legally say you were never arrested or convicted (for most purposes).
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            This is different from a pardon. An expungement actually removes the record. A pardon just means you're forgiven but the record stays.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What Can Be Expunged?</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-sm text-green-900 mb-2">✓ Can Usually Be Expunged:</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>• Arrests that didn't lead to charges</li>
                <li>• Cases dismissed</li>
                <li>• Acquittals ("not guilty")</li>
                <li>• Misdemeanors (after certain time)</li>
                <li>• Some felonies (depending on the crime)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-sm text-red-900 mb-2">✗ Cannot Be Expunged:</p>
              <ul className="text-sm text-red-900 space-y-1">
                <li>• Most serious felonies (murder, rape, certain violent crimes)</li>
                <li>• Some sex crimes</li>
                <li>• Crimes against children</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Steps to Expunge Your Record</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Determine Eligibility</p>
              <p className="text-sm text-muted-foreground">Check what charges you have and if enough time has passed. Misdemeanors: usually 3 years after discharge. Felonies: varies.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: Get Court Records</p>
              <p className="text-sm text-muted-foreground">Contact the court where you were charged. Ask for your case documents and disposition (outcome).</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: File Petition</p>
              <p className="text-sm text-muted-foreground">File a "Petition for Expungement" with the district court. The form is available online or from the court clerk.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 4: Pay Filing Fee</p>
              <p className="text-sm text-muted-foreground">Usually $200-500 depending on the court. Ask about fee waivers if you can't afford it.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 5: Get Judge's Order</p>
              <p className="text-sm text-muted-foreground">The judge reviews and signs an order. The court then notifies police and background check agencies to seal/delete the record.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Free Legal Help</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Expungement is complex. Get free help from:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Texas RioGrande Legal Aid:</span> 1-888-529-5277</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">State Bar of Texas Lawyer Referral:</span> Find lawyers who do reduced-cost expungements</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">The Innocence Project:</span> If you were exonerated, they help with expungement</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Local law schools:</span> Many have clinics doing free expungements</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">After Expungement</h2>
          <div className="rounded-lg bg-green-50 border border-green-200 p-6">
            <p className="text-sm text-green-900 mb-4">
              Once your record is expunged:
            </p>
            <ul className="space-y-2 text-sm text-green-900">
              <li>✓ You can legally say you were never arrested or convicted</li>
              <li>✓ Employers won't see it on background checks</li>
              <li>✓ You can rent apartments without that record coming up</li>
              <li>✓ You can get professional licenses more easily</li>
              <li>✓ Landlords and employers cannot legally discriminate based on expunged records</li>
            </ul>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Important: Exceptions Remain</h2>
          <p className="text-sm text-muted-foreground">
            Even after expungement, law enforcement and certain government jobs (security clearance, nursing licenses) can sometimes still see the record. But for most employers and landlords, the record is gone.
          </p>
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
