'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function BudgetChecklistPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60 bg-secondary/30 sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-4 py-4 lg:px-8">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-3 lg:text-5xl">
            Budget Checklist for Your First Year
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            A practical monthly and yearly checklist to manage your finances effectively
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Budgeting is about knowing where your money goes each month. Use this checklist to track income, expenses, savings, and debt payments. The goal is to spend less than you earn and build financial stability.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• Track all income sources (job, benefits, side work)</li>
            <li>• List all monthly expenses (rent, food, transportation)</li>
            <li>• Identify non-negotiables vs. extras</li>
            <li>• Plan for unexpected expenses</li>
            <li>• Review your budget monthly and adjust as needed</li>
          </ul>
        </section>

        {/* Section 1: Monthly Budget Basics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Monthly Budget Checklist</h2>

          <div className="space-y-4 mb-8">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Income Sources</h3>
                <p className="text-sm text-muted-foreground mb-4">Calculate your total monthly income from all sources:</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Primary job salary/wages: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Part-time/side work: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Government benefits (SNAP, UI, etc.): $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Family support/gifts: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Other income: $_______</span>
                  </li>
                  <li className="flex items-start gap-3 font-semibold border-t border-border/30 pt-3 mt-3">
                    <span>TOTAL MONTHLY INCOME: $_______</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Fixed Monthly Expenses</h3>
                <p className="text-sm text-muted-foreground mb-4">These don&apos;t change month to month (usually):</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Rent/housing payment: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Phone bill: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Internet/cable: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Car payment (if applicable): $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Car insurance: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Health insurance: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Loan payments (credit card, etc.): $_______</span>
                  </li>
                  <li className="flex items-start gap-3 font-semibold border-t border-border/30 pt-3 mt-3">
                    <span>TOTAL FIXED EXPENSES: $_______</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Variable Monthly Expenses</h3>
                <p className="text-sm text-muted-foreground mb-4">These change depending on your needs:</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Groceries/food: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Dining out/fast food: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Transportation/gas/DART: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Personal care (haircut, toiletries): $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Entertainment (movies, subscriptions): $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Clothing: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Medical/pharmacy: $_______</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Miscellaneous/other: $_______</span>
                  </li>
                  <li className="flex items-start gap-3 font-semibold border-t border-border/30 pt-3 mt-3">
                    <span>TOTAL VARIABLE EXPENSES: $_______</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-secondary/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Monthly Budget Summary</h3>
                <div className="space-y-3 text-sm font-semibold">
                  <p className="text-foreground">Total Monthly Income: $_______</p>
                  <p className="text-foreground">Total Fixed Expenses: $_______</p>
                  <p className="text-foreground">Total Variable Expenses: $_______</p>
                  <p className="text-foreground/60">TOTAL EXPENSES: $_______</p>
                  <p className="border-t border-border/30 pt-3 mt-3 text-accent">
                    REMAINING (Income - Expenses): $_______
                  </p>
                </div>
                {/* Quick tip */}
                <p className="text-xs text-muted-foreground mt-4">
                  💡 <strong>Tip:</strong> Your remaining amount should go toward savings and emergency fund. If it&apos;s negative, you need to reduce expenses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Savings & Emergency Fund */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Savings & Emergency Fund Checklist</h2>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Emergency Fund Goals</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Month 1-3: Save $500-$1,000 for emergencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Month 4-6: Build to $1,500-$2,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Month 7-12: Aim for 3 months of expenses ($3,000-$5,000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Open a separate savings account for emergency fund</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Set up automatic transfer to savings each payday</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Monthly Savings Plan</h3>
                <p className="text-sm text-muted-foreground mb-4">Set realistic savings goals:</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Emergency fund contribution: $_______/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>General savings goal: $_______/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Long-term goal (education, car, etc.): $_______/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Total monthly savings target: $_______/month</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Debt Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Debt Management Checklist</h2>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">List All Your Debts</h3>
                <p className="text-sm text-muted-foreground mb-4">If you have any loans or credit card debt:</p>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 bg-secondary/20 rounded border border-border/30">
                      <p className="text-sm font-semibold text-foreground mb-2">Debt #{i}</p>
                      <ul className="space-y-2 text-xs text-foreground/80">
                        <li className="flex items-start gap-2">
                          <span className="w-20">Type:</span> <input type="text" className="flex-1 border border-border/40 rounded px-2 py-1 bg-background text-sm" placeholder="e.g., Credit card, loan" />
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-20">Creditor:</span> <input type="text" className="flex-1 border border-border/40 rounded px-2 py-1 bg-background text-sm" />
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-20">Balance:</span> <input type="text" className="flex-1 border border-border/40 rounded px-2 py-1 bg-background text-sm" placeholder="$" />
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-20">Rate:</span> <input type="text" className="flex-1 border border-border/40 rounded px-2 py-1 bg-background text-sm" placeholder="Interest %" />
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-20">Payment:</span> <input type="text" className="flex-1 border border-border/40 rounded px-2 py-1 bg-background text-sm" placeholder="$" />
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Debt Payoff Strategy</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span><strong>Priority:</strong> Pay at least minimum on all debts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span><strong>Snowball Method:</strong> Pay off smallest debt first (motivational)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span><strong>Avalanche Method:</strong> Pay off highest interest first (saves money)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Never miss a payment—builds credit and avoids penalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Contact creditor if you can&apos;t pay—many offer payment plans</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Quarterly & Annual Reviews */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Quarterly & Annual Budget Review</h2>

          <div className="space-y-4">
            <Card className="border-border/60 bg-accent/5">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Every 3 Months (Quarterly)</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Review your last 3 months of spending</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Check if actual expenses match your budget plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Identify categories where you spent more/less than planned</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Adjust budget for next quarter if needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Celebrate milestones (paid off a debt, saved $500, etc.)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-secondary/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Every 12 Months (Annual)</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Review entire year of financial progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Check credit score and credit report</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Calculate total savings accumulated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Track debt reduction (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Set financial goals for next year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Review and increase retirement savings contributions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Prepare for income tax filing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: Pro Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Pro Tips for Budget Success</h2>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">✓ Best Practices</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings/debt</li>
                  <li>• Keep receipts or track spending with an app (Mint, YNAB, EveryDollar)</li>
                  <li>• Use cash for variable expenses—it's harder to overspend</li>
                  <li>• Set automatic transfers to savings so you don&apos;t forget</li>
                  <li>• Review your budget before each payday</li>
                  <li>• Join a free financial literacy class or workshop</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">✗ Common Mistakes to Avoid</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Making a budget and never looking at it again</li>
                  <li>• Forgetting to include irregular expenses (car registration, gifts)</li>
                  <li>• Cutting your budget too aggressively (you&apos;ll give up)</li>
                  <li>• Not distinguishing between needs and wants</li>
                  <li>• Using credit cards when you&apos;re not ready</li>
                  <li>• Ignoring small expenses—they add up!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Q&A Section */}
        <GuideQASection 
          question="What percentage of my income should I save each month?"
          answers={[
            {
              title: "Start Small",
              description: "Even $25-$50 per month is good when you&apos;re just starting. Once you stabilize, aim for 10-20% of income."
            },
            {
              title: "The 50/30/20 Rule",
              description: "Allocate 50% to needs (rent, food), 30% to wants (entertainment), and 20% to savings and debt. Adjust based on your situation."
            },
            {
              title: "Emergency Fund First",
              description: "Prioritize building $500-$1,000 in emergency savings before aggressive debt payoff or investment savings."
            },
            {
              title: "Don&apos;t Compare",
              description: "Everyone&apos;s situation is different. Save what you can afford. Consistency matters more than the amount."
            }
          ]}
        />
      </article>
    </main>
  )
}
