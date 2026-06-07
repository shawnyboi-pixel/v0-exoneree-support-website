import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Roommate Agreements | The Ide Project',
  description: 'How to set up and maintain healthy roommate relationships.',
}

export default function RoommateAgreementPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Roommate Agreements</h1>
          <p className="text-lg text-muted-foreground">How to create and maintain healthy roommate situations.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why Living with a Roommate</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Cost savings:</span> Split rent, utilities, internet. Much cheaper than living alone.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Easier landlord approval:</span> Landlords may accept you more easily if you have a roommate with good credit.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Support:</span> Having someone around helps with isolation and mental health.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Finding a Roommate</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Where to Look</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Facebook Marketplace or groups</li>
                <li>• Craigslist (be careful with screening)</li>
                <li>• Friends or family</li>
                <li>• Nonprofit reentry programs (best option)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">What to Look For</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Stable employment or income</li>
                <li>• No active substance abuse</li>
                <li>• Respectful communication</li>
                <li>• Similar schedule (if possible)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Red Flags to Avoid</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• They don't ask about your background or timeline</li>
                <li>• They seem disrespectful or controlling</li>
                <li>• They pressure you to move in immediately</li>
                <li>• They ask for money upfront (not rent)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Creating a Roommate Agreement</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Before moving in, discuss and write down these things:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Rent & Bills</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Who pays what for rent, utilities, internet?</li>
                <li>• Due date for bills</li>
                <li>• What happens if someone can't pay?</li>
                <li>• Is it split 50/50 or by room size?</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Chores & Cleaning</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Who cleans what and when?</li>
                <li>• Are common areas cleaned on a schedule?</li>
                <li>• What about kitchen and bathroom?</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Guests & Visitors</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Can guests stay over? How often?</li>
                <li>• Overnight guests - notice needed?</li>
                <li>• Parties or gatherings okay?</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Noise & Quiet Hours</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• What time should people be quiet?</li>
                <li>• Headphones for music/TV?</li>
                <li>• Work from home considerations?</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Personal Space</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Is the bedroom private?</li>
                <li>• Can roommate go in without asking?</li>
                <li>• Shared vs. personal food in fridge?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Maintaining Good Relationships</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Communicate early.</span> If something bothers you, talk about it now, not after it becomes a big problem.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Pay your share on time.</span> This is non-negotiable. Missing rent destroys relationships and can get you evicted.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Clean up after yourself.</span> No one likes living with a slob. It builds resentment fast.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Respect boundaries.</span> Don't borrow things without asking. Don't go into their room. Don't eat their food.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Resolve conflicts calmly.</span> If there's an argument, take a break and talk when calm. Yelling doesn't solve anything.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If Conflicts Arise</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Talk Directly</p>
              <p className="text-sm text-muted-foreground">Calmly explain the problem: "When you [action], it makes me feel [feeling]. Can we [solution]?" Most issues resolve with direct conversation.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: Compromise</p>
              <p className="text-sm text-muted-foreground">Living with someone means not always getting your way. Find middle ground. "You're okay with guests on weekends if I give notice?" Both people should feel heard.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: Reassess Living Situation</p>
              <p className="text-sm text-muted-foreground">If problems persist and you can't resolve them, it might be time to part ways. Give notice (usually 30 days) and find a new living situation. Not worth your mental health.</p>
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
