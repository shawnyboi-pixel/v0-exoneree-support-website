import { ArrowLeft, CheckCircle2, AlertCircle, Car } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Getting Your Driver License in Texas | The Ide Project',
  description: 'Complete guide to getting a Texas driver license or state ID after release.',
}

export default function DriverLicensePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Getting Your Driver License</h1>
          <p className="text-lg text-muted-foreground">Step-by-step guide to getting a Texas driver license or state ID.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Driver License vs. State ID</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Driver License</p>
              <p className="text-sm text-muted-foreground">Allows you to legally drive. Requires passing vision, written, and driving tests. Cost: $35-45.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">State ID Card</p>
              <p className="text-sm text-muted-foreground">Photo ID for non-drivers. No tests required. Good for voting, banking, employment. Cost: $16-25.</p>
            </div>
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Recommendation:</span> Start with State ID if you're not driving yet. It's faster and cheaper. You can get a driver license later if needed.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Documents You Need</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Birth certificate or passport</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Social Security card</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Proof of Texas residency (utility bill, lease, mail addressed to you)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Certification letter from parole/probation (if you're on probation)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Completed application (DL 43 form for driver license)</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Steps to Get Your ID</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Get Your Documents</p>
              <p className="text-sm text-muted-foreground">Gather all documents listed above. See Legal Documents guide if you need help getting any of these.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: Find a DPS Office</p>
              <p className="text-sm text-muted-foreground">Go to DPS.texas.gov and find the office nearest you. You can schedule an appointment online to skip the line.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: Take a Vision Test</p>
              <p className="text-sm text-muted-foreground">At the office, they check your vision. Bring glasses/contacts if you wear them.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 4: Take Photos & Pay</p>
              <p className="text-sm text-muted-foreground">They take your photo and process your ID. You can pay cash. It's ready in 1-2 weeks.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 5: Pick Up Your ID</p>
              <p className="text-sm text-muted-foreground">Return to get your ID or they mail it to you. Temporary ID good for 90 days while you wait.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If You Want a Driver License</h2>
          <p className="text-sm text-muted-foreground mb-4">
            After getting your state ID, you can test for a driver license. Here's what to know:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Written Test</p>
              <p className="text-sm text-muted-foreground">25 questions about road signs and driving rules. 80% to pass. Study for free at DPS.texas.gov. Most people pass.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Driving Test</p>
              <p className="text-sm text-muted-foreground">15-20 minute test with a DPS officer in a car. You drive routes they assign. Parallel parking and basic safety rules tested.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Preparation</p>
              <p className="text-sm text-muted-foreground">Consider taking a defensive driving course. It's inexpensive and gives you skills. Plus, you might get insurance discounts later.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Special Situations</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Lost Your License</p>
              <p className="text-sm text-muted-foreground">Go to DPS with documents. Tell them you need a replacement. Same process as first-time.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Have an Old Record Issue</p>
              <p className="text-sm text-muted-foreground">Some DPS offices may have old records from your imprisonment. Bring your certification letter. They can usually update it.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Can't Afford It</p>
              <p className="text-sm text-muted-foreground">DPS sometimes offers fee waivers for people with very low income. Ask at your local office.</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why This Matters</h2>
          <p className="text-sm text-muted-foreground mb-4">
            A valid ID is essential for:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Employment (virtually all jobs check ID)</li>
            <li>• Banking (opening accounts, cashing checks)</li>
            <li>• Housing (landlords require it)</li>
            <li>• Public benefits (Medicaid, food stamps)</li>
            <li>• Voting</li>
            <li>• Getting on a plane</li>
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
