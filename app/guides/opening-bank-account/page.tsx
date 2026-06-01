import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Opening Your First Bank Account | The Ide Project',
  description:
    'Complete guide to opening a bank account as an exoneree, including avoiding predatory lenders, understanding fees, choosing the right account type, and protecting yourself from financial exploitation.',
}

export default function BankAccountGuidePage() {
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
          <p className="text-lg text-muted-foreground">
            A comprehensive guide to establishing financial independence and protecting yourself from predatory practices
          </p>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">Why This Guide Matters</h2>
            <p className="text-foreground/80">
              Opening a bank account as an exoneree can feel overwhelming, especially if you're entering the financial system for the first time or after a long absence. This guide walks you through every step while helping you avoid common pitfalls and predatory practices that specifically target people in your situation.
            </p>
          </div>

          {/* Section 1: Understanding Predatory Organizations */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Understanding Predatory Organizations and Loans</h2>
          
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-900 dark:text-red-200 mb-3">Red Flags to Watch For</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• <strong>Payday lenders</strong> - Offer quick cash but charge 400% annual interest rates. These trap you in cycles of debt.</li>
              <li>• <strong>Check cashers</strong> - Charge 2-3% of your check to cash it. A $1,000 check costs you $20-30.</li>
              <li>• <strong>Title loan companies</strong> - Lend money against your car title at rates exceeding 300% annually. You can lose your car.</li>
              <li>• <strong>Rent-to-own stores</strong> - Charge 3-4x the item's actual value. A $300 TV could cost $1,200+ by the time you own it.</li>
              <li>• <strong>Promises of credit repair</strong> - Legitimate credit repair takes time. Anyone promising instant fixes is scamming you.</li>
            </ul>
          </div>

          <p className="text-foreground/80 mb-4">
            Predatory organizations specifically target people with limited credit history or past financial difficulties. They know you might feel desperate or untrustworthy to traditional banks, and they exploit that vulnerability.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Banks Are Actually Better Than Alternatives</h3>
          <p className="text-foreground/80 mb-4">
            While large banks can seem intimidating, they're regulated by federal authorities and offer far better protections than alternative services. Banks are required by law to:
          </p>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>• Protect your deposits (FDIC insurance up to $250,000)</li>
            <li>• Disclose all fees clearly upfront</li>
            <li>• Allow you to dispute unauthorized transactions</li>
            <li>• Provide regular account statements</li>
          </ul>

          {/* Section 2: Understanding Overdraft Fees */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Avoiding Overdraft Fees and Hidden Charges</h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-200 mb-3">What Overdraft Fees Are</h3>
            <p className="text-foreground/80">
              An overdraft occurs when you try to withdraw or pay more money than you have in your account. The bank covers the difference, but charges you a fee—typically $30-35 per transaction.
            </p>
          </div>

          <p className="text-foreground/80 mb-4">
            Many people don't realize that one large purchase can trigger multiple overdraft fees. For example:
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 mb-6 border border-border">
            <p className="text-sm text-foreground/80"><strong>Example:</strong> You have $50 in your account. You use your debit card for groceries ($75), then at a gas station ($45), then for medication ($30). That's 3 separate overdraft fees ($30 each = $90), leaving you with -$190 in your account instead of just needing $100.</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Avoid Overdraft Fees</h3>
          <ol className="space-y-3 text-foreground/80 mb-6">
            <li><strong>1. Choose a bank that declines transactions instead of overdrafting.</strong> Some banks automatically refuse transactions that would overdraw your account. You'll be denied at the register instead of incurring a fee.</li>
            <li><strong>2. Opt out of overdraft protection.</strong> When you open an account, banks often automatically enable overdraft coverage. Ask them to disable it.</li>
            <li><strong>3. Use the bank's mobile app to check your balance.</strong> Many free apps let you see your current balance in real-time before spending.</li>
            <li><strong>4. Set up low-balance alerts.</strong> Have the bank text or email you when your balance drops below a certain amount (like $50).</li>
            <li><strong>5. Keep a buffer in your account.</strong> Try to never let your balance drop below $100. This cushion prevents accidental overdrafts.</li>
            <li><strong>6. Understand the fee schedule.</strong> Ask your banker: "How much is an overdraft fee?" and "When are these fees charged?" Different banks charge at different times.</li>
          </ol>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Other Hidden Fees to Know About</h3>
          <div className="space-y-3 text-foreground/80">
            <div className="border-l-4 border-accent pl-4">
              <strong>Monthly maintenance fee:</strong> Some accounts charge $10-15/month. Look for free accounts.
            </div>
            <div className="border-l-4 border-accent pl-4">
              <strong>ATM fees:</strong> Using out-of-network ATMs can cost $2-4. Use your bank's ATMs only.
            </div>
            <div className="border-l-4 border-accent pl-4">
              <strong>Minimum balance fees:</strong> If your balance drops below $500 (or whatever the minimum is), they charge you. Ask about this before opening an account.
            </div>
            <div className="border-l-4 border-accent pl-4">
              <strong>Wire transfer fees:</strong> Sending money electronically can cost $15-30. For exonerees, this matters when sending money to family.
            </div>
          </div>

          {/* Section 3: Choosing the Right Account */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">How to Choose the Right Bank Account for Your Situation</h2>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Step 1: Local Credit Union vs. Large Bank</h3>
          <p className="text-foreground/80 mb-4">
            <strong>Local Credit Unions:</strong> These are member-owned organizations, not profit-driven corporations. They typically have:
          </p>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>• Lower fees and higher interest on savings</li>
            <li>• More willingness to work with people with limited credit history</li>
            <li>• Personal relationships with staff who know you</li>
            <li>• Community-focused lending practices</li>
          </ul>

          <p className="text-foreground/80 mb-4">
            <strong>Large Banks (JPMorgan Chase, Bank of America, Wells Fargo):</strong>
          </p>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>• More ATM locations nationwide (convenient if you travel)</li>
            <li>• Better online/mobile apps</li>
            <li>• But: Higher fees, higher minimums, less flexible with customers</li>
          </ul>

          <p className="text-foreground/80 mb-6">
            <strong>Recommendation for exonerees:</strong> Start with a local credit union. Ask specifically about their "second chance" checking accounts designed for people rebuilding credit.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Step 2: Second-Chance vs. Regular Checking Accounts</h3>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Second-Chance Checking</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✓ Designed for people denied regular accounts</li>
                  <li>✓ Easier approval process</li>
                  <li>✗ Higher fees ($15-20/month typical)</li>
                  <li>✗ Lower spending limits initially</li>
                  <li>✓ You can upgrade after 6-12 months of good standing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Regular Checking Account</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✓ Often free (no monthly fee)</li>
                  <li>✓ Higher spending limits</li>
                  <li>✓ Access to better rates on savings</li>
                  <li>✗ Harder to qualify if you have banking history issues</li>
                  <li>? Your situation depends on your ChexSystems report</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Step 3: Questions to Ask Before Opening an Account</h3>
          <ol className="space-y-4 text-foreground/80 mb-6">
            <li><strong>1. "What is the monthly maintenance fee?"</strong> Ideal answer: $0. If it's more than $5, keep looking.</li>
            <li><strong>2. "What's your overdraft fee?"</strong> Compare banks. Typical range is $25-35.</li>
            <li><strong>3. "Do you check ChexSystems or other bank history reports?"</strong> If yes, ask if your past banking issues will disqualify you.</li>
            <li><strong>4. "Can I opt out of overdraft protection?"</strong> You want to be able to decline transactions rather than incur fees.</li>
            <li><strong>5. "Is there a minimum balance requirement?"</strong> If yes, how much? What happens if I fall below it?</li>
            <li><strong>6. "How much does an out-of-network ATM withdrawal cost?"</strong> Aim for free access to a large ATM network.</li>
            <li><strong>7. "Do you offer mobile banking and real-time alerts?"</strong> Essential for monitoring your account.</li>
            <li><strong>8. "How will you help me rebuild my credit?"</strong> Some banks offer credit builder accounts that help establish positive history.</li>
          </ol>

          {/* Section 4: Documents and Process */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Documents You'll Need and What to Expect</h2>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Required Documents</h3>
          <div className="space-y-4 text-foreground/80 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4">
              <strong>Government-Issued Photo ID:</strong> Driver's license, state ID, or passport. This proves who you are.
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <strong>Social Security Number:</strong> The bank will ask for this to verify your identity and check your credit/banking history.
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <strong>Proof of Address:</strong> A utility bill, lease agreement, or official mail dated within the last 60 days. This shows where you live.
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What Happens During Your First Visit</h3>
          <ol className="space-y-3 text-foreground/80 mb-6">
            <li><strong>1. Sit down with a banker</strong> (or customer service representative). Tell them you'd like to open an account.</li>
            <li><strong>2. They'll ask questions about your identity</strong> - some may ask about your past. You do NOT have to explain your criminal history or exoneration. Simply provide the documents they ask for.</li>
            <li><strong>3. They'll review account options</strong> and go over fees. Ask all your questions here.</li>
            <li><strong>4. You'll sign paperwork.</strong> Read everything. Don't sign if you don't understand something.</li>
            <li><strong>5. You'll make an initial deposit.</strong> This can be as little as $1-25 depending on the bank. It just needs to be something.</li>
            <li><strong>6. You'll get your debit card.</strong> This usually arrives in 5-10 business days. Many banks offer digital cards you can use immediately.</li>
            <li><strong>7. You'll receive check deposit information</strong> in case you need to deposit checks by mail.</li>
          </ol>

          {/* Section 5: Building Credit While Banking */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Using Your Bank Account to Build Credit</h2>
          
          <p className="text-foreground/80 mb-4">
            Simply having a checking account doesn't build credit, but it's the foundation for credit-building activities:
          </p>

          <ul className="space-y-3 text-foreground/80 mb-6">
            <li>• <strong>Secured credit card:</strong> Some banks offer credit cards where you deposit $500-1,000, and they give you a card with that limit. Pay it off monthly and you'll build excellent credit.</li>
            <li>• <strong>Credit builder loan:</strong> You borrow $500-1,000 from the bank that you don't immediately get. As you make payments, it builds your credit history. You eventually get the money.</li>
            <li>• <strong>Become an authorized user:</strong> Ask family members if you can be added to their established credit card account (one they pay off monthly). Their good history helps yours.</li>
          </ul>

          {/* Section 6: Safety and Fraud Protection */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Protecting Yourself from Fraud and Identity Theft</h2>

          <ol className="space-y-3 text-foreground/80 mb-6">
            <li><strong>1. Never share your PIN or online password</strong> - not even with bank employees (real bankers never ask this).</li>
            <li><strong>2. Regularly check your account</strong> using the bank's official app or website. Report any unfamiliar transactions immediately.</li>
            <li><strong>3. Use your debit card carefully</strong> - prefer it for ATM withdrawals over in-person purchases when possible.</li>
            <li><strong>4. Report fraud immediately</strong> - You have 60 days to report unauthorized transactions. Call the bank right away if something seems wrong.</li>
            <li><strong>5. Shred documents</strong> with personal information before discarding them.</li>
            <li><strong>6. Monitor your credit report</strong> - Get a free one annually at AnnualCreditReport.com to spot identity theft early.</li>
          </ol>

          {/* Action Steps */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Your Action Plan: Next Steps</h2>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
            <ol className="space-y-4 text-foreground/80">
              <li><strong>This week:</strong> Locate 2-3 credit unions in your area. Call and ask if they offer second-chance checking.</li>
              <li><strong>Before you go:</strong> Gather your ID, Social Security number, and proof of address. Make copies in case you need them.</li>
              <li><strong>At the bank:</strong> Ask all the questions listed above. Don't rush the process.</li>
              <li><strong>After opening:</strong> Set up mobile banking and low-balance alerts immediately.</li>
              <li><strong>First month:</strong> Track every purchase and check your balance daily. Understand how the account works.</li>
              <li><strong>After 6 months:</strong> Consider a credit builder product to start establishing credit history.</li>
            </ol>
          </div>
        </section>

        {/* Download PDF Section */}
        <section className="my-12 border-t border-b border-border/60 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Download the Quick Reference Guide</h3>
              <p className="text-foreground/70">
                Get a printable PDF with checklists, key questions, and document requirements you can take to the bank.
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
                  <p className="text-sm text-foreground/70">Complete visual guide with examples and important information</p>
                </div>
                <a
                  href="/guides/opening-bank-account-guide.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Q&A Section */}
        <section className="mt-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              Questions from the Community
            </h3>
            <p className="text-foreground/70">Have a question about opening a bank account? Ask below and the community can help.</p>
          </div>

          <Card className="border-border/60">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <button className="w-full group/qa flex items-start gap-3 rounded-lg p-3 hover:bg-secondary/50 transition-colors text-left">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex flex-col items-center gap-1 text-muted-foreground/60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                        <span className="text-xs font-semibold text-accent">0</span>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover/qa:text-accent transition-colors">
                        Ask a question
                      </p>
                      <p className="text-xs text-muted-foreground/60">
                        Get answers from the community
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-border/60">
          <Link href="/guides" className="text-accent hover:text-accent/80 transition-colors font-medium">
            ← Back to All Guides
          </Link>
          <span className="text-sm text-muted-foreground">Updated January 2026</span>
        </div>
      </article>
    </main>
  )
}
