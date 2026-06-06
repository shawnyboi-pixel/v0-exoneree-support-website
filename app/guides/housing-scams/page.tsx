'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function HousingScamsGuidePage() {
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
            Avoiding Housing Scams
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            Red flags and how to protect yourself when searching for housing
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Housing scams prey on people who need a place to live quickly and may have limited options. Con artists pose as landlords or property managers. Learning the warning signs protects you and your money.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• Legitimate landlords never ask for money before showing the place</li>
            <li>• Never wire money or pay by gift card—you can't get it back</li>
            <li>• Always see the apartment in person and meet the landlord</li>
            <li>• If a deal seems too good to be true, it is</li>
            <li>• Trust your gut feeling if something feels wrong</li>
          </ul>
        </section>

        {/* Section 1: Common Scams */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Common Housing Scams to Watch For</h2>
          
          <p className="text-foreground/80 mb-6">
            Here are the most common scams used to steal from people like you. Know them so you can avoid them.
          </p>

          <div className="space-y-4">
            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Scam #1: The "Fake Listing"</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>How it works:</strong> Scammer copies photos and info from a real listing and posts it on Craigslist, Facebook, or similar sites. They claim to be the landlord. They ask for a "deposit" to hold the apartment.
                </p>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded text-sm text-foreground/80">
                  <strong>Example:</strong> You see an apartment for $600/month (way below market rate). You text the "landlord" and they say "Great, send $500 deposit and I'll send you the keys." You send money and never hear from them again.
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Scam #2: The "Landlord in Distress"</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>How it works:</strong> Scammer claims to be an out-of-state landlord who needs to pay off a debt or medical bill. They offer you a cheap rental if you help them. They ask for an upfront payment in exchange for the keys.
                </p>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded text-sm text-foreground/80">
                  <strong>Example:</strong> "I'm overseas and need cash. If you send $300, I'll wire you the lease and address to the house. You can move in immediately."
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Scam #3: The "Wire Money" Trap</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>How it works:</strong> "Landlord" agrees to rent you the place but says they need payment via wire transfer, Western Union, or gift cards. These payment methods can't be reversed.
                </p>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded text-sm text-foreground/80">
                  <strong>Red flag:</strong> Legitimate landlords accept checks, bank transfers, credit cards, or cash at the office. They never push sketchy payment methods.
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Scam #4: The "Too Good to Be True" Deal</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>How it works:</strong> A pristine 3-bedroom apartment listed for $300/month, utilities included, no deposit needed, no background check, no credit check, and the landlord will hold it for 24 hours while you "get the money."
                </p>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded text-sm text-foreground/80">
                  <strong>Reality:</strong> No legitimate landlord rents a good apartment that cheap with no safeguards. Ever.
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Scam #5: The "Landlord Vanishes"</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>How it works:</strong> You pay first month's rent, deposit, and fees. You show up on move-in day and... the locks are changed, and the real owner says they never rented to you.
                </p>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded text-sm text-foreground/80">
                  <strong>What happened:</strong> A scammer rented out someone else's apartment without permission. The owner only found out when you arrived.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Red Flags Checklist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Red Flags Checklist: Stop If You See These</h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They ask for payment before showing the apartment</strong>
                <p className="text-sm text-foreground/80">Legitimate landlords always show first, collect money after.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They only communicate by text or email</strong>
                <p className="text-sm text-foreground/80">Real landlords have phone numbers, offices, and meet you in person.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">The price is way below market rate</strong>
                <p className="text-sm text-foreground/80">If an apartment is $300/month cheaper than comparable units, something's wrong.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They request wire transfer, gift cards, or Western Union</strong>
                <p className="text-sm text-foreground/80">These can't be reversed. Real landlords take checks, bank transfers, or cash in-person.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They say "no background check" or "no credit check"</strong>
                <p className="text-sm text-foreground/80">Many scams target people who can't pass checks. Real landlords DO screen tenants.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They're "out of the country" and can't meet you</strong>
                <p className="text-sm text-foreground/80">Legitimate landlords can always arrange a video tour, Facetime, or send a property manager.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They're pushy or pressure you to decide quickly</strong>
                <p className="text-sm text-foreground/80">"Only 2 other people interested—decide today or lose it!" is a classic scam tactic.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">They have poor grammar or unprofessional communication</strong>
                <p className="text-sm text-foreground/80">Many scammers operate internationally. Bad English and typos are warning signs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="text-red-600 font-bold text-lg">🚩</div>
              <div>
                <strong className="text-foreground">Photos look like they're from a magazine or real estate website</strong>
                <p className="text-sm text-foreground/80">Scammers steal photos. Use Google Image Search to check if the photo appears elsewhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How to Verify */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">How to Verify a Landlord is Real</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Before You Give Money</h3>
          <ol className="space-y-4 text-foreground/80">
            <li>
              <strong>1. Search the property online</strong>
              <p className="text-sm mt-1">Google the address. Check Zillow, Apartments.com, Trulia. See if it's listed elsewhere. If the same unit is posted on 5 sites at different prices, it's a scam.</p>
            </li>
            <li>
              <strong>2. Use Google Image Search on the photos</strong>
              <p className="text-sm mt-1">Go to google.com/images. Upload the apartment photo. If it appears on magazine websites or generic real estate sites, it's stolen.</p>
            </li>
            <li>
              <strong>3. Ask to do a video tour</strong>
              <p className="text-sm mt-1">FaceTime, Zoom, or video call. A real landlord will show you around in real time. Scammers can't do this.</p>
            </li>
            <li>
              <strong>4. Visit the apartment in person</strong>
              <p className="text-sm mt-1">Before paying anything, see it with your own eyes. This is non-negotiable.</p>
            </li>
            <li>
              <strong>5. Look at the neighborhood</strong>
              <p className="text-sm mt-1">Is it in a dangerous area? Are there sketchy vibes? Check it at different times of day.</p>
            </li>
            <li>
              <strong>6. Verify the landlord's ownership</strong>
              <p className="text-sm mt-1">Ask for their ID. Check property records at your county courthouse (free). The name should match.</p>
            </li>
            <li>
              <strong>7. Talk to the current tenant</strong>
              <p className="text-sm mt-1">Ask to meet them. Ask about the landlord, maintenance, issues. Real tenants can give honest feedback.</p>
            </li>
            <li>
              <strong>8. Get a written lease</strong>
              <p className="text-sm mt-1">Before paying, get a lease in writing that clearly states what you're paying and what's included.</p>
            </li>
          </ol>
        </section>

        {/* Section 4: Safe Payment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Safe Ways to Pay</h2>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ SAFE: Cash in person</h4>
                <p className="text-sm text-foreground/80">Meet at the landlord's office or a neutral location. Get a receipt with the landlord's signature.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ SAFE: Check or money order</h4>
                <p className="text-sm text-foreground/80">Make it out to the landlord or property management company. Keep the cancelled check as proof.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✓ SAFE: Bank transfer (ACH)</h4>
                <p className="text-sm text-foreground/80">Only if you have the landlord's official bank account info and they're a verified company. Still risky.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">❌ NEVER: Wire transfer (Western Union, MoneyGram)</h4>
                <p className="text-sm text-foreground/80">Once sent, it's gone. You can't get it back. Scammers use this.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">❌ NEVER: Gift cards (Google Play, Apple, Amazon)</h4>
                <p className="text-sm text-foreground/80">Never. This is always a scam. Landlords don't accept gift cards.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">❌ NEVER: Cryptocurrency or Bitcoin</h4>
                <p className="text-sm text-foreground/80">Untraceable and irreversible. Only scammers ask for this.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: What to Do If Scammed */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">You've Been Scammed—What to Do Now</h2>

          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 1: Stop Communication</strong>
              <p className="text-sm text-foreground/80 mt-2">Don't send more money. Block the scammer.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 2: Report to the Platform</strong>
              <p className="text-sm text-foreground/80 mt-2">If on Craigslist, Facebook, etc., report the listing immediately. They'll remove fake listings.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 3: Report to Local Police</strong>
              <p className="text-sm text-foreground/80 mt-2">File a police report. Get the case number for your records.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 4: Contact Your Bank or Payment Service</strong>
              <p className="text-sm text-foreground/80 mt-2">If you used a credit card, debit card, or PayPal, call immediately. They may be able to reverse the charge (especially within 48 hours).</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 5: Report to the FTC</strong>
              <p className="text-sm text-foreground/80 mt-2">Go to reportfraud.ftc.gov. This helps authorities catch the scammer.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Step 6: Monitor Your Accounts</strong>
              <p className="text-sm text-foreground/80 mt-2">Watch for suspicious activity. Consider credit monitoring (sometimes free through libraries or nonprofits).</p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 mt-6">
            <p className="text-foreground/80">
              <strong>Note:</strong> If scammed through Western Union or wire transfer, the money is almost impossible to recover. If it was a small amount, focus on prevention for next time. If it was large, consult with a lawyer about your options.
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-border/60">
          <Link href="/guides" className="text-accent hover:text-accent/80 transition-colors font-medium">
            ← Back to All Guides
          </Link>
          <span className="text-sm text-muted-foreground">By The Ide Project | Updated June 1st, 2026</span>
        </div>

        {/* Q&A Section */}
        <GuideQASection
          guideTitle="Avoiding Housing Scams"
          guideId="housing-scams"
        />
      </article>
    </main>
  )
}
