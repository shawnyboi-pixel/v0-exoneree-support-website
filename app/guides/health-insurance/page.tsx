import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Health Insurance Options | The Ide Project',
  description: 'Understanding health insurance options in Texas and how to choose the right plan.',
}

export default function HealthInsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Health Insurance Options</h1>
          <p className="text-lg text-muted-foreground">Understand your options and choose the right health insurance plan.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Types of Health Insurance</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Medicaid (State Program)</p>
              <p className="text-sm text-muted-foreground">Free or very low cost. For low-income people. Usually the best option for people re-entering. See Medicaid guide.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Marketplace Insurance (ACA)</p>
              <p className="text-sm text-muted-foreground">Private insurance through Healthcare.gov. Can be affordable with subsidies if you don't qualify for Medicaid but have low income.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Employer Insurance</p>
              <p className="text-sm text-muted-foreground">Health insurance through your job. Some employers offer this, some don't. Often the cheapest option if available.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">No Insurance (Not Recommended)</p>
              <p className="text-sm text-muted-foreground">Emergency room visits cost thousands. One medical event can ruin your finances. Get insurance if possible.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If Your Employer Offers Insurance</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Read the plan carefully.</span> Understand deductibles, copays, and what's covered.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Enroll if you can afford it.</span> Many employers pay part of the premium.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Ask HR for help.</span> They explain everything and can answer questions.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Check if it's better than Medicaid.</span> Calculate your costs. Sometimes Medicaid is better, even if you work.</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Understanding Insurance Terms</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Premium</p>
              <p className="text-sm text-muted-foreground">Monthly fee you pay for insurance, whether you use it or not.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Deductible</p>
              <p className="text-sm text-muted-foreground">Amount you pay for healthcare before insurance starts paying. Higher deductible = lower premium. Choose based on your health needs.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Copay</p>
              <p className="text-sm text-muted-foreground">Fixed amount you pay for specific services ($20 for doctor visit, $50 for emergency room). Insurance pays the rest.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Out-of-Pocket Maximum</p>
              <p className="text-sm text-muted-foreground">Most you'll pay in a year. After you hit this, insurance pays 100% for covered services.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Network</p>
              <p className="text-sm text-muted-foreground">List of doctors and hospitals covered by your insurance. Using out-of-network costs more.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Using Your Health Insurance</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Choose a Primary Care Doctor</p>
              <p className="text-sm text-muted-foreground">Call your insurance. They give you a list of doctors near you. Schedule an appointment for a checkup.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Prescription Drugs</p>
              <p className="text-sm text-muted-foreground">Most plans cover prescriptions at a copay. Show your insurance card at the pharmacy. If the copay is very high, ask your doctor about generic alternatives.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Preventive Care (Checkups)</p>
              <p className="text-sm text-muted-foreground">Most insurance covers annual checkups, vaccines, and screenings for free (no copay). Use this for preventive care.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Emergency Care</p>
              <p className="text-sm text-muted-foreground">Go to the ER if you have a life-threatening emergency. Insurance covers it even out-of-network. Always get the bill in writing.</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Red Flags & Mistakes to Avoid</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Skipping insurance.</span> One emergency can cost $10,000+ and ruin your credit. Always have some coverage.</span>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Not updating your income.</span> If your income changes, tell Medicaid or Healthcare.gov immediately. Your subsidies might change.</span>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Ignoring bills.</span> If you get a medical bill you don't understand, contact the hospital's patient advocate, not a debt collector.</span>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Going out-of-network unnecessarily.</span> Check the provider directory before scheduling. Out-of-network costs thousands more.</span>
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
