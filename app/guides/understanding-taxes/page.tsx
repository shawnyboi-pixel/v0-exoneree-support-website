import { ArrowLeft, CheckCircle2, AlertCircle, DollarSign } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Understanding Taxes | The Ide Project',
  description: 'Basic guide to taxes and how to file your taxes.',
}

export default function UnderstandingTaxesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Understanding Taxes</h1>
          <p className="text-lg text-muted-foreground">Basic tax information and how to file for free.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why Taxes Matter</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900">
              Filing taxes shows you're building a stable, legitimate life. It's important for employment records, benefits, housing applications, and your parole/reentry file. Not filing can cause legal problems.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Basic Tax Concepts</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">What Is a Tax?</p>
              <p className="text-sm text-muted-foreground">Money you pay to the government (federal and state) based on your income. It funds roads, schools, Social Security, etc.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">W-2 (If You're Employed)</p>
              <p className="text-sm text-muted-foreground">Your employer sends this form by January 31st. It shows how much you earned and how much tax was already taken out of your paychecks.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">1099 (If You're Self-Employed)</p>
              <p className="text-sm text-muted-foreground">If you do odd jobs or freelance work, you get a 1099 instead. It shows your income. You must report this even if you don't get a 1099.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Tax Refund</p>
              <p className="text-sm text-muted-foreground">If too much tax was taken from your paychecks, the government owes you money. You file taxes to claim your refund. It usually arrives 1-3 weeks after filing.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Do You Have to File?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            You must file if:
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You earned more than $12,550 in 2024 (single)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You had any self-employment income</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You want to claim a tax refund</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>You're on parole/probation (often required)</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">How to File Taxes (Free)</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 1: Free File (IRS.gov)</p>
              <p className="text-sm text-muted-foreground">If you earn less than $79,000/year, use IRS Free File. Go to IRS.gov and click "Free File." Completely free. You can do it at home on your computer.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 2: VITA (Volunteer Income Tax Assistance)</p>
              <p className="text-sm text-muted-foreground">Free tax help from volunteers. Find locations at IRS.gov/vita. They file taxes for you for free. Usually available January-April.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 3: Tax Preparation Services</p>
              <p className="text-sm text-muted-foreground">If you earn more or need help, services like H&R Block or TurboTax charge $100-200. Not free but fairly affordable.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Deadline</p>
              <p className="text-sm text-muted-foreground">April 15th each year. File early to get your refund faster.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What You Need to File</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>W-2 form(s) from your employer(s)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Social Security number</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>ID (driver license or state ID)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>If self-employed: records of what you earned and spent</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If You Owe Money</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If the government says you owe taxes:
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Don't ignore it.</span> The debt grows with penalties and interest.</span>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Contact the IRS.</span> They offer payment plans and sometimes reduce amounts if you truly can't pay.</span>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Tell your parole officer.</span> They should know about tax issues to help you navigate them.</span>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-green-50 border border-green-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Keep Records</h2>
          <p className="text-sm text-green-900 mb-4">
            Save:
          </p>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• W-2 forms</li>
            <li>• Tax returns you file</li>
            <li>• Any correspondence from IRS</li>
            <li>• Receipts if self-employed</li>
          </ul>
          <p className="text-sm text-green-900 mt-4">
            Keep these for at least 3-7 years. You never know when you'll need proof of income or past tax filings.
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
