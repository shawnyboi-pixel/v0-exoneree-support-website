'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function TransportationGuidePage() {
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
            Transportation Options in Dallas
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            DART, rideshare, and other ways to get around without a car
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Getting around Dallas without a car is possible and affordable. DART (Dallas Area Rapid Transit) is your main option, plus rideshare, walking, and biking can get you where you need to go. Compare costs and pick what works best.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• DART passes: $2.50 per ride, $65/month unlimited pass saves money</li>
            <li>• Rideshare: Uber and Lyft available, costs $5-15+ per ride</li>
            <li>• Bike Share: Cheap and easy for short trips around the city</li>
            <li>• Walking: Free and good for your health</li>
            <li>• Carpool: Ask coworkers for rides or cost-sharing</li>
          </ul>
        </section>

        {/* Section 1: DART Bus & Rail */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">DART: Dallas Public Transportation</h2>
          
          <p className="text-foreground/80 mb-6">
            DART is the main transit system in Dallas. It includes buses, light rail (the train), and paratransit (if you need accessibility accommodations).
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">How Much Does DART Cost?</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Pay Per Ride</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Local Bus:</strong> $2.50</li>
                  <li><strong>Express Bus:</strong> $3.50-$4</li>
                  <li><strong>Light Rail:</strong> $2.50-$3.50 (depending on distance)</li>
                  <li><strong>Day Pass:</strong> $5 (unlimited rides for 24 hours)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Monthly Passes</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Local Bus Pass:</strong> $65 (unlimited rides)</li>
                  <li><strong>Express Bus Pass:</strong> $110 (unlimited rides on express routes)</li>
                  <li><strong>All-Access Pass:</strong> $95 (buses + light rail)</li>
                  <li><strong>Student Pass:</strong> Discounted rates with school ID</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Should You Get a Monthly Pass?</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80 mb-3"><strong>Quick Math:</strong></p>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 26 rides = $65 (monthly pass is worth it)</li>
              <li>• If you take DART 2+ times per day, get the pass</li>
              <li>• If you only use DART occasionally, pay per ride</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">How to Use DART</h3>
          <ol className="space-y-4 text-foreground/80">
            <li>
              <strong>1. Download the DART App</strong>
              <p className="text-sm mt-1">The app shows real-time bus and train schedules, maps, and lets you track when your ride is coming.</p>
            </li>
            <li>
              <strong>2. Get a Prepaid Card or Tap with Phone</strong>
              <p className="text-sm mt-1">Buy a DART card at any station or participating store. Load money or a pass onto it. Or use your phone's contactless payment if it has NFC.</p>
            </li>
            <li>
              <strong>3. Tap Your Card at the Reader</strong>
              <p className="text-sm mt-1">When boarding, tap your card on the reader near the driver or at the light rail gate. Wait for the beep (that's confirmation).</p>
            </li>
            <li>
              <strong>4. Sit Down & Ride</strong>
              <p className="text-sm mt-1">Find a seat, stay alert to your stop, and get off when you arrive.</p>
            </li>
          </ol>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Key DART Routes for Dallas Reentry</h3>
          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Red Line (Light Rail)</h4>
                <p className="text-sm text-foreground/80">Runs from Plano through downtown Dallas. Good for jobs downtown or in North Dallas. Runs every 10-15 minutes.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Blue Line (Light Rail)</h4>
                <p className="text-sm text-foreground/80">Runs south from downtown to stations in South Dallas. Covers neighborhoods like Pleasant Grove and South Park.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Green Line (Light Rail)</h4>
                <p className="text-sm text-foreground/80">Runs from Deep Ellum through downtown. Good access to downtown jobs and services.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Express Routes (#677, #451, etc.)</h4>
                <p className="text-sm text-foreground/80">Faster than local buses. Connect suburbs to downtown. Good if you work in a specific area.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-2">Local Routes (Bus #1, #2, #3, etc.)</h4>
                <p className="text-sm text-foreground/80">Stop more frequently, serve neighborhoods. Good for accessing stores, parks, and local services.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Tips for Using DART Safely</h3>
          <div className="space-y-3">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Ride during daytime when possible</strong>
              <p className="text-sm text-foreground/80 mt-1">Feel safer riding during rush hours (7-9am, 4-6pm) when buses are crowded.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Sit near the front</strong>
              <p className="text-sm text-foreground/80 mt-1">Closer to the driver, safer area, you'll see your stop coming.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Be aware of your surroundings</strong>
              <p className="text-sm text-foreground/80 mt-1">Don't flash cash or valuables. Keep your belongings close. Stay alert.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Get off at well-lit stops</strong>
              <p className="text-sm text-foreground/80 mt-1">Late at night, get off at stations with lights and activity.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Use the panic button if needed</strong>
              <p className="text-sm text-foreground/80 mt-1">Every bus and train has an emergency call button. Don't hesitate to use it if you feel unsafe.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Rideshare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Rideshare: Uber & Lyft</h2>

          <p className="text-foreground/80 mb-6">
            Rideshare apps let you request a car ride through your phone. Convenient, but more expensive than DART.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">How Rideshare Works</h3>
          <ol className="space-y-3 text-foreground/80 mb-6">
            <li><strong>1. Download the app:</strong> Uber or Lyft (both operate in Dallas)</li>
            <li><strong>2. Add payment:</strong> Link a credit card or debit card</li>
            <li><strong>3. Enter destination:</strong> The app shows price estimate</li>
            <li><strong>4. Request a ride:</strong> Driver appears in 5-15 minutes</li>
            <li><strong>5. Pay automatically:</strong> Charged to your card after ride ends</li>
          </ol>

          <h3 className="text-2xl font-bold text-foreground mb-4">Uber vs. Lyft vs. DART Comparison</h3>
          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Uber/Lyft</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> $5-$20+ per ride (depends on distance and demand)</li>
                  <li><strong>Time:</strong> Fast (5-15 minutes pickup)</li>
                  <li><strong>Best for:</strong> Emergencies, late night, when you're in a rush</li>
                  <li><strong>Risk:</strong> Can add up quickly if you use it daily</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">DART Bus</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> $2.50-$3.50 per ride ($65/month pass)</li>
                  <li><strong>Time:</strong> Slower (10-30 minutes depending on route)</li>
                  <li><strong>Best for:</strong> Daily commuting, saving money, reliable schedule</li>
                  <li><strong>Advantage:</strong> Cheapest option long-term</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">DART Light Rail</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> $2.50-$3.50 per ride</li>
                  <li><strong>Time:</strong> Fast and predictable (every 10-15 min)</li>
                  <li><strong>Best for:</strong> Downtown jobs, faster than buses</li>
                  <li><strong>Coverage:</strong> Limited to specific routes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Safety Tips for Rideshare</h3>
          <div className="space-y-3">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Check the driver's name and rating</strong>
              <p className="text-sm text-foreground/80 mt-1">The app shows their name and photo. Confirm it matches the car and driver before getting in.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Verify the license plate</strong>
              <p className="text-sm text-foreground/80 mt-1">App shows it. Always double-check before entering the car.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Sit in the back seat</strong>
              <p className="text-sm text-foreground/80 mt-1">Safer position. Gives you space from the driver.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Share your ride details with someone</strong>
              <p className="text-sm text-foreground/80 mt-1">Most apps have a "Share Ride" feature. Send to a friend so they know where you are.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Trust your instincts</strong>
              <p className="text-sm text-foreground/80 mt-1">If something feels wrong, cancel and request another driver.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Other Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Other Transportation Options</h2>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">🚴 Bike Share (TEXAS Bikeshare)</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Rent bikes from stations around Dallas. Pick up at one station, drop off at another. Great for short trips.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> $3/ride or $15/month unlimited</li>
                  <li><strong>How:</strong> App-based, tap card at station</li>
                  <li><strong>Best for:</strong> Short distances, nice weather, staying active</li>
                  <li><strong>Stations:</strong> Throughout downtown and neighborhoods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">🚶 Walking</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Free and good exercise. Some areas are more walkable than others.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> Free</li>
                  <li><strong>Health benefit:</strong> Exercise and fresh air</li>
                  <li><strong>Best for:</strong> Neighborhoods, stores within 1-2 miles</li>
                  <li><strong>Safety:</strong> Use sidewalks, cross at lights, stay aware</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">🚗 Carpool with Coworkers</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Ask coworkers if they're willing to share rides. Split gas costs.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> Split gas (usually $5-10 per trip)</li>
                  <li><strong>How:</strong> Talk to coworkers on first week</li>
                  <li><strong>Best for:</strong> Regular commutes, building work relationships</li>
                  <li><strong>Tip:</strong> Be reliable and chip in fairly</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">🛴 Scooters</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Electric scooters scattered around the city. Fun and quick for short trips.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> $1 + $0.25 per minute (roughly $2-5 per trip)</li>
                  <li><strong>Apps:</strong> Lime, Bird, others</li>
                  <li><strong>Best for:</strong> Last mile (getting from DART to destination)</li>
                  <li><strong>Safety:</strong> Wear helmet, watch for cars</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">🚕 Taxi Cabs</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Traditional taxis. Call dispatch or hail on the street. Similar cost to rideshare.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Cost:</strong> $2.80 pickup + $2.70 per mile (roughly $8-15 per ride)</li>
                  <li><strong>How:</strong> Call or hail on street</li>
                  <li><strong>Best for:</strong> If you don't have smartphone or app</li>
                  <li><strong>Payment:</strong> Cash or card, driver determines</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Budget Planning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Transportation Budget Planning</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Monthly Cost Examples</h3>
          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Option 1: DART Only</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>Scenario:</strong> Commute to work and back daily, occasional shopping trips
                </p>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• DART Monthly Pass: $65</li>
                  <li>• Occasional Uber (2x/month): $20</li>
                  <li>• <strong>Total: ~$85/month</strong></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Option 2: Mix It Up</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>Scenario:</strong> DART for commute, rideshare for convenience, occasional scooter
                </p>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• DART All-Access Pass: $95</li>
                  <li>• Uber/Lyft (4x/month): $40</li>
                  <li>• Scooter trips (4x/month): $20</li>
                  <li>• <strong>Total: ~$155/month</strong></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Option 3: Maximum Convenience</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  <strong>Scenario:</strong> Mostly rideshare, occasional DART
                </p>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Uber/Lyft daily (20 rides): $200-300</li>
                  <li>• Occasional DART: $20</li>
                  <li>• <strong>Total: ~$250/month+</strong></li>
                  <li><strong>Note:</strong> Expensive option—not sustainable long-term</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Money-Saving Tips</h3>
          <div className="space-y-3">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Get a DART monthly pass if you ride 26+ times/month</strong>
              <p className="text-sm text-foreground/80 mt-1">Quick calculation: 26 rides × $2.50 = $65 (the pass price). You break even fast.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Use rideshare only for emergencies</strong>
              <p className="text-sm text-foreground/80 mt-1">Reserve Uber/Lyft for late night or when you're running very late. Plan ahead with DART.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Walk when possible</strong>
              <p className="text-sm text-foreground/80 mt-1">If it's under 1-2 miles, walking is free and good for health.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Carpool to work</strong>
              <p className="text-sm text-foreground/80 mt-1">Share costs with coworkers. Build relationships and save money.</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">Consider living near a DART station</strong>
              <p className="text-sm text-foreground/80 mt-1">Even if rent is slightly higher, transportation savings add up.</p>
            </div>
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
          guideTitle="Transportation Options in Dallas"
          guideId="transportation-dallas"
        />
      </article>
    </main>
  )
}
