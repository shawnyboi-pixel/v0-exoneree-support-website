import { ArrowLeft, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Building Credit from Zero | The Ide Project',
  description: 'Learn how to start building credit after reentry with practical steps and timeline expectations.',
}

export default function BuildingCreditPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Building Credit from Zero</h1>
          <p className="text-lg text-muted-foreground">Learn how to start building credit after reentry with practical steps and realistic timeline expectations.</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why Building Credit Matters</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Credit is a score that tells banks, landlords, and employers how trustworthy you are with money. Starting from zero after reentry can feel daunting, but building credit is absolutely possible—and it's one of the most important investments in your future.
          </p>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Good news:</span> You don't need a perfect past to build a strong credit future. Most lenders focus on recent financial behavior, not your history.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Credit Building Timeline</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Months 1-3: Getting Started</p>
              <p className="text-sm text-muted-foreground">First credit builder account or secured credit card issued. Your credit score may not even show up yet—and that's normal.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Months 3-6: Score Appears</p>
              <p className="text-sm text-muted-foreground">Credit bureaus create your credit file. Your score typically starts in the 600 range.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Months 6-12: Building Momentum</p>
              <p className="text-sm text-muted-foreground">With consistent on-time payments, your score can rise by 50-100 points.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Year 1-2: Significant Progress</p>
              <p className="text-sm text-muted-foreground">Most people with good behavior reach 700+ credit score. You become eligible for better credit products.</p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Step-by-Step: Building Credit</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Open a Checking Account</h3>
                  <p className="text-sm text-muted-foreground mb-3">Many banks can't see your criminal history. Focus on banks that have second-chance checking programs.</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Look for banks offering "second chance" or "fresh start" accounts</li>
                    <li>• Avoid overdrafts—set up account alerts so you always know your balance</li>
                    <li>• Keep this account active for at least 6 months</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Get a Credit Builder Account (Best First Step)</h3>
                  <p className="text-sm text-muted-foreground mb-3">This is specifically designed for people starting from zero. You deposit money, and the lender holds it while reporting to credit bureaus.</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Companies: LendingClub, Self, Mission Lane, Chime</li>
                    <li>• Cost: Usually $25-30/month for 12 months</li>
                    <li>• Benefit: You get your money back + positive credit history</li>
                    <li>• Timeline: Takes 6-12 months to show results</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Get a Secured Credit Card</h3>
                  <p className="text-sm text-muted-foreground mb-3">You put down a cash deposit ($200-500), and that's your credit limit. Use it like a normal card.</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Companies: Capital One 360, Discover, Chime</li>
                    <li>• Make small purchases ($10-20/month)</li>
                    <li>• Pay in full every month before the due date</li>
                    <li>• After 6-12 months, request to convert to regular card and get deposit back</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Become an Authorized User (If Possible)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Ask a trusted family member with good credit to add you to their credit card.</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Their good payment history helps your score</li>
                    <li>• Only do this with someone you completely trust</li>
                    <li>• Make sure they pay on time (you're connected to that account)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Score Breakdown */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What Affects Your Credit Score</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <span className="text-sm font-semibold text-foreground">Payment History</span>
              <span className="text-lg font-bold text-accent">35%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <span className="text-sm font-semibold text-foreground">Amounts Owed</span>
              <span className="text-lg font-bold text-accent">30%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <span className="text-sm font-semibold text-foreground">Length of Credit History</span>
              <span className="text-lg font-bold text-accent">15%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <span className="text-sm font-semibold text-foreground">Credit Mix</span>
              <span className="text-lg font-bold text-accent">10%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <span className="text-sm font-semibold text-foreground">New Credit Inquiries</span>
              <span className="text-lg font-bold text-accent">10%</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold">The biggest factor:</span> Pay every bill on time, every single time. One missed payment can hurt your score for years.
          </p>
        </section>

        {/* Red Flags */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Maxing Out Credit Cards</p>
                <p className="text-sm text-muted-foreground">Keep your credit utilization under 30%. If your limit is $500, use no more than $150/month.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Applying for Too Many Cards</p>
                <p className="text-sm text-muted-foreground">Each application creates a "hard inquiry" and slightly lowers your score. Space applications 3-6 months apart.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Missing Payments</p>
                <p className="text-sm text-muted-foreground">One missed payment can stay on your report for 7 years. Set up automatic payments or phone reminders.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Closing Old Accounts</p>
                <p className="text-sm text-muted-foreground">Keep old credit accounts open, even after paying them off. This shows a longer credit history.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="size-4 text-accent" />
                Will my criminal history affect my credit score?
              </h3>
              <p className="text-sm text-muted-foreground">No. Your credit score only looks at financial behavior, not criminal history. This is one of the few areas where you get a fresh start.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="size-4 text-accent" />
                How long does 600 take to become 700?
              </h3>
              <p className="text-sm text-muted-foreground">With consistent on-time payments and responsible credit use, most people improve 100+ points in 12-18 months.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="size-4 text-accent" />
                Should I pay for credit repair services?
              </h3>
              <p className="text-sm text-muted-foreground">No. Legitimate credit repair only happens through time and responsible financial behavior. Don't pay anyone claiming they can fix your credit quickly.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="size-4 text-accent" />
                What if I have old debts from before?
              </h3>
              <p className="text-sm text-muted-foreground">Consider consulting with a credit counselor. Some old debts may have expired (debt of limitations). Never ignore them—sometimes payment plans are possible.</p>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Your Action Plan</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">Check your credit report at annualcreditreport.com (free, government website)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">Open a checking account this week</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">Apply for a credit builder account (Self or LendingClub)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">Set up automatic payment reminders for everything</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">Check your score monthly using a free app (Credit Karma, Capital One)</span>
            </div>
          </div>
        </section>

        {/* Back Link */}
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
