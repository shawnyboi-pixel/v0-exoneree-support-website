import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'First Week Essentials | The Ide Project',
  description: 'Priority checklist for your first week after release.',
}

export default function FirstWeekPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">First Week Essentials</h1>
          <p className="text-lg text-muted-foreground">Priority checklist for your first days after release.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Day 1: Critical First Steps</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex gap-3">
                <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-red-900 mb-1">Check in with Probation/Parole</p>
                  <p className="text-sm text-red-900">If you're on probation/parole, check in immediately. Get your officer's contact info and next appointment.</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Find Safe Housing</p>
              <p className="text-sm text-muted-foreground">You should have housing arranged. If not, contact housing nonprofits immediately (see Housing guide).</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Take a Breath</p>
              <p className="text-sm text-muted-foreground">You made it. You're free. Emotions will be overwhelming. That's normal. Call your support person. Rest if possible.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Days 2-3: Essential Documents</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Get birth certificate.</span> Order it online or go to vital statistics. Can take 2-5 business days.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Apply for Social Security card.</span> Go to local Social Security office. Bring birth certificate and state ID if you have one.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Get state ID or driver license.</span> Visit DPS office. Can be same day.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Copy your discharge paperwork.</span> Make 5 copies of your certificate of discharge. You'll need these constantly.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Days 4-5: Banking & Benefits</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Open a bank account.</span> Bring ID, SSN, proof of address. Debit card may arrive within a week.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Apply for Medicaid.</span> Go online to HHS.Texas.gov. Can apply in 20 minutes. Response in 15-30 days.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Check for benefits.</span> Ask your parole officer if you qualify for TANF, SNAP (food), or other benefits.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Days 6-7: Setup & Support</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Set up utilities.</span> Get electricity, water, internet in your name if possible. Builds credit history.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Start job search or apply to programs.</span> First week is good time to make inquiries. Programs often have intake appointments.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Find a therapist or counselor.</span> Even if you feel okay, processing trauma takes time. Starting early helps.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Spend time with loved ones.</span> You've been separated. Reconnection is part of healing. Don't skip this.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">First 30 Days: Building Stability</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Week 2-3: Employment</p>
              <p className="text-sm text-muted-foreground">Start applying for jobs. Even temporary work counts. Having income within 30 days is powerful for your case.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Week 2-4: Appointments</p>
              <p className="text-sm text-muted-foreground">Get your Medicaid card, see a doctor, set up mental health appointments, meet with reentry counselor.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Ongoing: Pay Everything on Time</p>
              <p className="text-sm text-muted-foreground">Every bill, every parole fee, every appointment. This builds trust with parole and employers.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Ongoing: Document Everything</p>
              <p className="text-sm text-muted-foreground">Keep receipts, appointment letters, job offer emails. These prove your progress to the court/parole.</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-blue-50 border border-blue-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Remember</h2>
          <p className="text-sm text-blue-900 mb-4">
            You will feel overwhelmed. The world has changed. Technology is different. People may judge you. All of this is normal.
          </p>
          <p className="text-sm text-blue-900">
            But you're building a new life now. One day at a time. One task at a time. You've already overcome the hardest part.
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
