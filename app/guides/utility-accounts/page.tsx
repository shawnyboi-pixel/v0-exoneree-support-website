import { ArrowLeft, CheckCircle2, AlertCircle, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Setting Up Utilities & Accounts | The Ide Project',
  description: 'How to set up electricity, water, internet, and bank accounts in your name.',
}

export default function UtilityAccountsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Setting Up Utilities & Accounts</h1>
          <p className="text-lg text-muted-foreground">How to get electricity, water, internet, and open a bank account.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why This Matters</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Setting up utilities and accounts in your name does two critical things:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Builds your credit history (important for loans, housing, jobs)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Proves you're living independently (for housing, benefits, court)</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Opening a Bank Account</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Start here. You need a bank account for everything else.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">What You Need:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Photo ID (driver license or state ID)</li>
                <li>• Social Security card or SSN</li>
                <li>• Proof of address (utility bill, lease, mail)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Where to Go:</p>
              <p className="text-sm text-muted-foreground mb-2">Any bank. Try credit unions—they're often easier for people with no history:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• UT Dallas Credit Union</li>
                <li>• Advocacy Credit Union</li>
                <li>• Local community banks</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">What to Expect:</p>
              <p className="text-sm text-muted-foreground">They ask your info, run a background check (ChexSystems, not criminal). Takes 15 minutes. You get a debit card usually within a week.</p>
            </div>
            <div className="rounded-lg bg-green-50 border border-green-200 p-4">
              <p className="text-sm text-green-900">
                <span className="font-semibold">Good news:</span> Criminal history rarely prevents you from opening a bank account. If one bank says no, try another.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Setting Up Utilities</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Electricity</p>
              <p className="text-sm text-muted-foreground mb-2">Contact: Oncor, TXU, Reliant (depends on your area)</p>
              <p className="text-sm text-muted-foreground">You'll need: ID, proof of address, SSN. Many offer budget billing (same amount each month).</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Water & Sewer</p>
              <p className="text-sm text-muted-foreground mb-2">Contact: City of Dallas Water Utilities or your apartment complex</p>
              <p className="text-sm text-muted-foreground">Usually $40-80/month. Same requirements as electricity.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Internet</p>
              <p className="text-sm text-muted-foreground mb-2">Contact: Spectrum, AT&T Fiber, or local providers</p>
              <p className="text-sm text-muted-foreground">$50-80/month. May run credit check. If denied, try prepaid options.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Cell Phone</p>
              <p className="text-sm text-muted-foreground mb-2">Contact: T-Mobile, Verizon, AT&T, or MVNO (cheaper)</p>
              <p className="text-sm text-muted-foreground">$30-50/month. Prepaid options don't require credit check.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Building Credit</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Setting up utilities builds your credit if you pay on time. Here's how:
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Pay on time, every time.</span> Missed payments destroy credit. If you'll be late, call and explain.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Set up autopay.</span> Have your bank automatically pay bills. Eliminates forgetting.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Check your credit report.</span> Free at annualcreditreport.com. Report errors immediately.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Start small.</span> Get a secured credit card ($300-500 deposit). Use it monthly and pay it off. This builds credit fast.</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If You Have Debt or Bad Credit</h2>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-4 mb-4">
            <p className="text-sm text-muted-foreground mb-3">
              Many people have unpaid bills or bad credit after incarceration. This doesn't prevent you from moving forward:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You can still open a bank account (ChexSystems is different from credit report)</li>
              <li>• You can still get utilities (they may require a deposit but will connect you)</li>
              <li>• You can start rebuilding credit today</li>
              <li>• Old debts age off (7-10 years) and become less impactful</li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Don't ignore old debts. Contact the creditor and ask about payment plans. Many will accept reduced payments or settlements.
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
