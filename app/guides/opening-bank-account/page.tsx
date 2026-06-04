'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function BankAccountGuidePage() {
  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/guides/Opening-Bank-Account-Guide.pdf'
    link.download = 'Opening-Your-First-Bank-Account.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
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
            Opening Your First Bank Account
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By Shawn Chen | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            A straightforward guide to getting a bank account and avoiding scams
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Opening a bank account is one of the most important financial steps you'll take. This guide shows you how to avoid predatory services, keep your money safe, and set yourself up for long-term financial success.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• Avoid payday lenders, check cashers, and title loan companies</li>
            <li>• Choose a credit union over large banks if possible</li>
            <li>• Ask about overdraft fees and opt out of overdraft protection</li>
            <li>• Bring ID, Social Security number, and proof of address</li>
          </ul>
        </section>

        {/* Section 1: Predatory Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Don't Fall for These Scams</h2>
          
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-4">Services That Trap You in Debt</h3>
            <div className="space-y-4">
              <div>
                <strong className="text-foreground">Payday Lenders</strong>
                <p className="text-foreground/80">Charge 400% annual interest. A $500 loan costs $575 in fees after two weeks.</p>
              </div>
              <div>
                <strong className="text-foreground">Check Cashers</strong>
                <p className="text-foreground/80">Charge 2-3% to cash your check. They're a waste of money.</p>
              </div>
              <div>
                <strong className="text-foreground">Title Loan Companies</strong>
                <p className="text-foreground/80">Lend against your car title at 300%+ rates. You can lose your car.</p>
              </div>
              <div>
                <strong className="text-foreground">Credit Repair Scams</strong>
                <p className="text-foreground/80">Anyone promising instant credit fixes is lying. Legitimate credit repair takes time.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-3">Why Banks Are Safe</h3>
            <p className="text-foreground/80 mb-3">Banks are regulated and protect you:</p>
            <ul className="space-y-2 text-foreground/80">
              <li>• Your money is insured up to $250,000 (FDIC protection)</li>
              <li>• All fees must be disclosed upfront</li>
              <li>• You can dispute unauthorized charges</li>
              <li>• You get regular statements of your money</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Overdraft Fees */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Avoid Overdraft Fees</h2>
          
          <p className="text-foreground/80 mb-4">
            An overdraft happens when you spend more money than you have. The bank charges you $30-35 per transaction for this.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 mb-6">
            <p className="text-sm text-foreground/80">
              <strong>Example:</strong> You have $50. You buy groceries ($75), gas ($45), and medicine ($30). That's 3 overdraft fees ($90 total), leaving you with a negative balance instead of just needing an extra $100.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">How to Protect Yourself</h3>
          <ol className="space-y-3 text-foreground/80">
            <li><strong>1. Ask the bank to decline transactions instead of overdrafting.</strong> You'll be denied at checkout instead of charged a fee.</li>
            <li><strong>2. Opt out of overdraft protection when opening your account.</strong></li>
            <li><strong>3. Use the mobile app to check your balance before spending.</strong></li>
            <li><strong>4. Set up text alerts when your balance gets low.</strong></li>
            <li><strong>5. Keep at least $100 as a safety buffer.</strong></li>
            <li><strong>6. Ask the exact overdraft fee amount before signing up.</strong></li>
          </ol>
        </section>

        {/* Section 3: Choosing an Account */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Choose the Right Bank for You</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Credit Union or Bank?</h3>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Local Credit Union (Recommended)</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✓ Lower fees</li>
                  <li>✓ More flexible with people rebuilding credit</li>
                  <li>✓ Staff who know you personally</li>
                  <li>✓ Ask about "second chance" checking accounts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Large Bank</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✓ More ATM locations</li>
                  <li>✓ Better mobile apps</li>
                  <li>✗ Higher fees, harder to work with</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Questions to Ask</h3>
          <ol className="space-y-2 text-foreground/80">
            <li><strong>1. "Is there a monthly fee?"</strong> (Goal: $0, or less than $5)</li>
            <li><strong>2. "What's your overdraft fee?"</strong> (Compare banks)</li>
            <li><strong>3. "Can I opt out of overdraft protection?"</strong> (You want this)</li>
            <li><strong>4. "Is there a minimum balance?"</strong> (How much, and what if I go below it?)</li>
            <li><strong>5. "Are ATM withdrawals free?"</strong> (Use your bank's ATMs only)</li>
            <li><strong>6. "Do you offer mobile banking?"</strong> (Essential for checking balance)</li>
          </ol>
        </section>

        {/* Section 4: What to Bring */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">What You'll Need</h2>

          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Government-Issued Photo ID</strong>
              <p className="text-sm text-foreground/80">Driver's license, state ID, or passport</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Social Security Number</strong>
              <p className="text-sm text-foreground/80">For identity verification</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Proof of Address</strong>
              <p className="text-sm text-foreground/80">Utility bill or lease agreement from the last 60 days</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What Happens at the Bank</h3>
          <ol className="space-y-3 text-foreground/80">
            <li><strong>1. Meet with a banker</strong> and say you want to open an account</li>
            <li><strong>2. They'll ask questions</strong> - you don't have to discuss your past</li>
            <li><strong>3. Review account options</strong> and ask your questions</li>
            <li><strong>4. Sign paperwork</strong> (read it first)</li>
            <li><strong>5. Make an initial deposit</strong> ($1-25 minimum)</li>
            <li><strong>6. Get your debit card</strong> (5-10 business days, or digital immediately)</li>
          </ol>
        </section>

        {/* Download PDF Section */}
        <section className="my-12 border-t border-b border-border/60 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Download the Quick Reference Guide</h3>
              <p className="text-foreground/70">
                Get a printable PDF with checklists and questions to take to the bank.
              </p>
            </div>
          </div>
          
          <Card className="border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-secondary rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">PDF</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground">Opening A Bank Account: Quick and Easy Guide</h4>
                  <p className="text-sm text-foreground/70">Complete visual guide with examples</p>
                </div>
                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Team Section */}
        <section className="mt-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              Our Team
            </h3>
            <p className="text-foreground/70 mt-2">This guide was created by passionate advocates dedicated to supporting exonerees.</p>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-border/60">
          <Link href="/guides" className="text-accent hover:text-accent/80 transition-colors font-medium">
            ← Back to All Guides
          </Link>
          <span className="text-sm text-muted-foreground">By Shawn Chen | Updated June 1st, 2026</span>
        </div>

        {/* Q&A Section */}
        <GuideQASection
          guideTitle="Opening Your First Bank Account"
          guideId="opening-bank-account"
        />
      </article>
    </main>
  )
}
