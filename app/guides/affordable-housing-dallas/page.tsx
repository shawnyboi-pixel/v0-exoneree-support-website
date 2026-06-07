import { ArrowLeft, CheckCircle2, MapPin, DollarSign, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Finding Affordable Housing in Dallas | The Ide Project',
  description: 'Step-by-step guide to finding affordable, safe housing in the Dallas area after release.',
}

export default function AffordableHousingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Finding Affordable Housing in Dallas</h1>
          <p className="text-lg text-muted-foreground">Complete guide to finding safe, affordable housing with your background.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Best Neighborhoods for Affordable Rent</h2>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3">
              <MapPin className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">South Dallas</p>
                <p className="text-sm text-muted-foreground">More affordable, growing job market, public transit</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Oak Cliff</p>
                <p className="text-sm text-muted-foreground">Diverse community, good transit, many support services</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">South Oak Cliff/North Oak Cliff</p>
                <p className="text-sm text-muted-foreground">Growing, affordable, many resources for formerly incarcerated</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Fair Park Area</p>
                <p className="text-sm text-muted-foreground">Affordable, close to downtown, bus access</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Smart move:</span> Start in an affordable area near public transit. You can move to nicer neighborhoods as you save money.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Where to Search</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Online Resources:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Craigslist.org (Dallas section)</li>
                <li>• Facebook Marketplace</li>
                <li>• Zillow.com and Apartments.com</li>
                <li>• HotPads.com</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Nonprofit Organizations:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Texas RioGrande Legal Aid (housing assistance)</li>
                <li>• Community Services Inc. (reentry housing)</li>
                <li>• New Friends New Life (women specifically)</li>
                <li>• Single Parent Assistance and Resource (SPAR)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Direct Search:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Drive around neighborhoods looking for "For Rent" signs</li>
                <li>• Call local property management companies</li>
                <li>• Ask friends and coworkers if they know places</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Budget Planning</h2>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">General Rule:</p>
                <p className="text-sm text-muted-foreground">Spend no more than 30% of your income on rent</p>
              </div>
              <div className="border-t border-accent/20 pt-4">
                <p className="text-sm font-semibold text-foreground mb-2">Example Budget:</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>If you earn $1,500/month:</span>
                    <span className="font-semibold">Max rent = $450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>If you earn $2,000/month:</span>
                    <span className="font-semibold">Max rent = $600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>If you earn $2,500/month:</span>
                    <span className="font-semibold">Max rent = $750</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Remember: rent is just part of housing costs. Add utilities ($80-120), renters insurance ($10-15), and internet if needed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">When You Can't Get a Traditional Lease</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 1: Month-to-Month</p>
              <p className="text-sm text-muted-foreground">Easier to qualify for but rent might be higher. You can leave anytime.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 2: Roommate Situations</p>
              <p className="text-sm text-muted-foreground">Rent a room from someone. Less strict about background. Cost is usually lower.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 3: Housing Programs</p>
              <p className="text-sm text-muted-foreground">Many Dallas nonprofits have housing specifically for people re-entering. Call them first.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Option 4: Cosigner</p>
              <p className="text-sm text-muted-foreground">If you have a family member with good credit, ask them to cosign (they're responsible if you don't pay).</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Red Flags - Don't Fall for Scams</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">They want money before showing:</span> Never pay until you see the place and sign something.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Price too good to be true:</span> If it's 50% cheaper than everything else, it's probably a scam.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Wire transfer or gift cards:</span> Legitimate landlords take checks or money orders.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">They won't take no for an answer:</span> Real landlords have other applicants.</p>
              </div>
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
