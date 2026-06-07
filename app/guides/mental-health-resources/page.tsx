import { ArrowLeft, CheckCircle2, AlertCircle, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Mental Health Resources & Support | The Ide Project',
  description: 'Free and low-cost mental health resources for people processing trauma.',
}

export default function MentalHealthResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Mental Health Resources</h1>
          <p className="text-lg text-muted-foreground">Free support for processing trauma and building emotional health.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why Mental Health Matters</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900 mb-3">
              Incarceration and the reentry process can cause real trauma. You might experience:
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>• Depression or anxiety</li>
              <li>• Sleep problems or nightmares</li>
              <li>• Difficulty trusting people</li>
              <li>• Anger or emotional numbness</li>
              <li>• Overwhelming feeling when making decisions</li>
            </ul>
            <p className="text-sm text-blue-900 mt-3">
              These are normal responses to abnormal situations. Professional help isn't weakness—it's strength.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Free/Low-Cost Therapy</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Medicaid (If You Qualify)</p>
              <p className="text-sm text-muted-foreground">Covers all therapy, psychiatry, and counseling. No cost. (See Medicaid guide for application.)</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Community Mental Health Centers</p>
              <p className="text-sm text-muted-foreground">Sliding scale fees based on income. Find yours: CallBraveTexas.org or call 211.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Psychology Today Therapist Finder</p>
              <p className="text-sm text-muted-foreground">Visit PsychologyToday.com, filter by insurance/sliding scale. Many therapists offer reduced rates.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Faith-Based Organizations</p>
              <p className="text-sm text-muted-foreground">Churches, temples, and mosques often offer free counseling. You don't have to attend their services.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Crisis Support (When You're Struggling Right Now)</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <Heart className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">National Suicide Prevention Lifeline</p>
                <p className="text-red-900">Call or text 988. Free, 24/7. Talk to someone immediately if you're having thoughts of harming yourself.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <Heart className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">Crisis Text Line</p>
                <p className="text-red-900">Text HOME to 741741. Free, confidential. Sometimes it's easier to text than call.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <Heart className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">Emergency (If You Feel Danger)</p>
                <p className="text-red-900">Call 911. Go to an emergency room. This is free and they won't judge you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Support Groups</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Talking to others who've been through similar situations helps. Many are free and meet regularly:
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>NAACP Reentry Program groups (for exonerees specifically)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>AA/NA meetings (Alcoholics Anonymous, Narcotics Anonymous) – free, everywhere</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Trauma support groups at community mental health centers</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Online support communities (BumbleBee.org for exonerees)</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Self-Care While Waiting for Therapy</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Sleep</p>
                <p className="text-sm text-muted-foreground">7-8 hours nightly. No phone 30 minutes before bed. This helps more than you think.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Movement</p>
                <p className="text-sm text-muted-foreground">Walk 30 minutes daily. Exercise reduces anxiety and depression naturally.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Connection</p>
                <p className="text-sm text-muted-foreground">Spend time with people you trust. Isolation worsens mental health.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Meditation</p>
                <p className="text-sm text-muted-foreground">Apps like Insight Timer (free) have guided meditations. 10 minutes helps reduce anxiety.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What to Expect in Therapy</h2>
          <p className="text-sm text-muted-foreground mb-4">
            First session: You tell your story. The therapist listens without judgment. They ask about your background and current struggles. It's not about blame—it's about understanding what you need.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Following sessions: You work together on specific skills (managing anger, processing grief, building trust). It's not about rehashing the past—it's about healing and building a better future.
          </p>
          <p className="text-sm text-muted-foreground">
            It takes time. Therapy isn't magic. But with consistent effort, people feel significantly better in 8-12 weeks.
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
