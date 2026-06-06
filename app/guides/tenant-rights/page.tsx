import { ArrowLeft, AlertCircle, CheckCircle2, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Know Your Tenant Rights | The Ide Project',
  description: 'Complete guide to tenant rights in Texas. Know what landlords can and cannot do.',
}

export default function TenantRightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Know Your Tenant Rights</h1>
          <p className="text-lg text-muted-foreground">What landlords can and cannot do to you under Texas law.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Your Basic Rights</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Shield className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Habitability</p>
                <p className="text-sm text-muted-foreground">Your apartment must be safe and fit to live in. Landlord must fix major problems like broken plumbing, heat in winter, or roof leaks.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Shield className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Peaceful Enjoyment</p>
                <p className="text-sm text-muted-foreground">You have the right to live in your apartment without unreasonable interference from the landlord.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Shield className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Privacy</p>
                <p className="text-sm text-muted-foreground">Landlord must give 24 hours notice before entering. They cannot enter without reason (emergencies are exceptions).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Shield className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Return of Deposit</p>
                <p className="text-sm text-muted-foreground">Landlord must return your security deposit within 30 days. They can only deduct for actual damage (not normal wear and tear).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What Landlords Cannot Do</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Enter without notice:</span> Except for emergencies, they must give written notice 24 hours before entering.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Lock you out:</span> Even if you miss rent, they cannot physically lock you out or throw out your belongings. They must go through eviction court.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Turn off utilities:</span> Cannot shut off water, electricity, or gas to force you out.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Remove your property:</span> Cannot remove your belongings or throw away your stuff.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Discriminate:</span> Cannot refuse to rent based on race, color, religion, sex, national origin, disability, or family status.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Retaliate:</span> Cannot evict you or increase rent because you complained about repairs or exercised your rights.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Eviction Process in Texas</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Even if you miss rent, the landlord MUST follow legal process. They cannot just force you out.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Written Notice</p>
              <p className="text-sm text-muted-foreground">Landlord must give written notice (usually 3 days for unpaid rent). This is called a "notice to vacate."</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: File in Court</p>
              <p className="text-sm text-muted-foreground">If you don't leave or fix the problem, they file for eviction in Justice Court.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: Court Hearing</p>
              <p className="text-sm text-muted-foreground">You get to go to court and tell your side. YOU CAN HAVE A LAWYER.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 4: Judgment</p>
              <p className="text-sm text-muted-foreground">Judge decides. Even if they rule for the landlord, they cannot physically remove you yet.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 5: Sheriff</p>
              <p className="text-sm text-muted-foreground">Only a sheriff can physically remove you, and only after the judgment is final.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If Your Landlord Violates Your Rights</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 mb-4">
              <p className="text-sm text-blue-900">
                You have rights even if you have a criminal record. A landlord cannot legally retaliate against you for knowing your rights or complaining about violations.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Document Everything</p>
              <p className="text-sm text-muted-foreground">Take photos/videos of problems. Keep copies of all communication with landlord. Write down dates and times of violations.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: Send Written Notice</p>
              <p className="text-sm text-muted-foreground">Email or send certified mail describing the problem. Keep proof you sent it.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: Contact Legal Aid</p>
              <p className="text-sm text-muted-foreground">Call Texas RioGrande Legal Aid at 1-888-529-5277. FREE legal help for low-income Texans.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 4: File a Complaint</p>
              <p className="text-sm text-muted-foreground">Contact the Texas Attorney General's office or local housing authority if laws are broken.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Your Responsibilities as a Tenant</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Pay rent on time</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Keep the apartment clean and not damage it beyond normal wear</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Follow lease terms (no unauthorized pets, guests, etc.)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Report maintenance problems to landlord</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Give proper notice if moving out</span>
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
