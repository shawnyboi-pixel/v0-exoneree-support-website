import { ArrowLeft, CheckCircle2, AlertCircle, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Applying for Medicaid in Texas | The Ide Project',
  description: 'Step-by-step guide to qualifying for and applying for Medicaid in Texas.',
}

export default function ApplyingMedicaidPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Applying for Medicaid</h1>
          <p className="text-lg text-muted-foreground">Free or low-cost healthcare in Texas. Complete application guide.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What Is Medicaid?</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900">
              Medicaid is free or low-cost health insurance paid for by the state and federal government. If you have low income, you likely qualify. It covers doctors, hospitals, emergency care, and prescriptions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Do You Qualify?</h2>
          <p className="text-sm text-muted-foreground mb-4">You likely qualify if:</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Your income is below a certain level ($1,500-2,000/month for single adults)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You are a Texas resident</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You are a US citizen or legal permanent resident</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You are age 19-64 (or under 19, or 65+)</span>
            </div>
          </div>
          <div className="rounded-lg bg-green-50 border border-green-200 p-4 mt-6">
            <p className="text-sm text-green-900">
              <span className="font-semibold">Good news for exonerees:</span> If you received compensation for wrongful imprisonment, the first $100,000 doesn't count toward income limits.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">How to Apply</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 1: Online (Easiest)</p>
              <p className="text-sm text-muted-foreground">Go to HHS.Texas.gov/Medicaid and apply online. Takes 20 minutes. You get instant confirmation.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 2: By Phone</p>
              <p className="text-sm text-muted-foreground">Call 2-1-1 (dial 2, then 1, then 1) or 1-877-TEXIT411. They'll help you apply over the phone in your language.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 3: In Person</p>
              <p className="text-sm text-muted-foreground">Visit your local HHSC office. Bring ID and proof of income. They help you apply immediately.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Documents You'll Need</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>ID or state-issued identification</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Proof of income (pay stubs, employer letter, or compensation letter)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Social Security number</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Proof of Texas residency (utility bill, lease, or mail)</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">After You Apply</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Approval Timeline</p>
              <p className="text-sm text-muted-foreground">Usually 15-30 days. If you're sick or having an emergency, you can get temporary coverage right away while your application is being reviewed.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">You'll Receive a Card</p>
              <p className="text-sm text-muted-foreground">Once approved, they mail you a Medicaid card. You can use it immediately at doctors and pharmacies.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Your Coverage</p>
              <p className="text-sm text-muted-foreground">Doctor visits, hospital care, emergency services, prescriptions, dental (for emergencies), and mental health are covered. You pay little to nothing.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Finding Doctors</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="mb-3">Once you have Medicaid:</p>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Call the number on your Medicaid card to find doctors</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Most doctors, clinics, and hospitals accept Medicaid</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Community health centers are particularly good for newly released people</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You choose your own primary care doctor (you control your healthcare)</span>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Mental Health & Medicaid</h2>
          <p className="text-sm text-muted-foreground">
            Medicaid covers mental health counseling and psychiatric care at no cost. If you experienced trauma during incarceration, therapy is covered. Many counselors work with formerly incarcerated people. Your Medicaid card works just like for a physical doctor.
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
