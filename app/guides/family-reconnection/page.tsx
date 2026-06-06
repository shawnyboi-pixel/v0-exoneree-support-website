import { ArrowLeft, CheckCircle2, AlertCircle, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Family Reconnection Guide | The Ide Project',
  description: 'Rebuilding relationships with family after release.',
}

export default function FamilyReconnectionPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Family Reconnection</h1>
          <p className="text-lg text-muted-foreground">Rebuilding relationships after years apart.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">The Reality of Family Separation</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900 mb-3">
              Years apart change relationships. Your family may have moved on. They may have complicated feelings about your imprisonment. Some may blame you. Others may struggle with how much you've changed.
            </p>
            <p className="text-sm text-blue-900">
              This doesn't mean reconnection is impossible. It means going in with realistic expectations and patience.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Before You Reach Out</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Prepare Yourself Emotionally</p>
              <p className="text-sm text-muted-foreground">Family may not respond the way you hope. They might not answer. Or they might have changed. Accept that reconnection takes time and they may have their own pain to process.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Consider Who to Contact First</p>
              <p className="text-sm text-muted-foreground">Is there someone in the family more likely to be receptive? A sibling or cousin? Start there if possible, then expand. Don't start with someone who was most hurt.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Clarify What You Want</p>
              <p className="text-sm text-muted-foreground">Do you want reconciliation? Forgiveness? Just contact? Clarity helps you communicate clearly and prevents disappointment.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Making First Contact</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Have Contact Info</p>
              <p className="text-sm text-muted-foreground">Call or write a letter. A handwritten letter is often better than a call for first contact. It gives them time to process. Keep it short and sincere. Example:</p>
              <div className="bg-slate-50 rounded p-3 mt-3 text-xs text-foreground font-mono">
                <p>"Dear [name], I've been released and wanted to reach out. I know it's been [time] and there's a lot of hurt between us. I'm not asking for forgiveness, just to start rebuilding. If you're willing, I'd love to talk. Love, [your name]"</p>
              </div>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Don't Have Contact Info</p>
              <p className="text-sm text-muted-foreground">Use social media carefully. Facebook might have them. Don't be pushy. One message is enough. Wait for them to respond.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Don't Expect Immediate Reconciliation</p>
              <p className="text-sm text-muted-foreground">They might not respond right away. They might not respond at all. That's their choice. Respect it while leaving the door open.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If They Respond Positively</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Plan Carefully for First Meeting</p>
              <p className="text-sm text-muted-foreground">Neutral location is good (coffee shop, park). Public but not too crowded. Short first meeting is better than long. You can always schedule another.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Listen More Than Talk</p>
              <p className="text-sm text-muted-foreground">They likely have things to say. Pain, anger, questions. Let them express it without getting defensive. Listening is how you rebuild trust.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Be Honest About Your Growth</p>
              <p className="text-sm text-muted-foreground">Share what you've learned and how you've changed. Don't minimize what happened or make excuses. "I understand why you're angry. I did [wrong thing]. I've spent time understanding that and working on myself."</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Take It Slow</p>
              <p className="text-sm text-muted-foreground">Don't expect everything to be normal immediately. Rebuilding takes months or years. Regular, small contact (calls, texts) is better than trying to do too much too fast.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If They Respond Negatively or Not at All</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900 mb-2">
                <span className="font-semibold">This is not your failure.</span> Some people cannot or will not reconcile. That's their boundary and you must respect it.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Don't Pursue Aggressively</p>
              <p className="text-sm text-muted-foreground">Calling repeatedly, showing up at their house, or messaging constantly will push them further away. Send one genuine message and let it go.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Build Other Support</p>
              <p className="text-sm text-muted-foreground">If biological family rejects you, create chosen family. Friends, mentors, support groups, church communities. These can be just as healing.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Leave the Door Open</p>
              <p className="text-sm text-muted-foreground">People change. They may reach out years later. Keep your social media current so they can find you. Live well—that's the best message.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Managing Complex Feelings</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Guilt:</span> You may feel guilty for what happened or how they suffered. Talk to a therapist. You did your best to survive.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Anger:</span> You might be angry they moved on or didn't fight for you. This is valid. Process it with support, not at them.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Grief:</span> Time was lost. Relationships are different. Grieve that. It's real loss.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-green-50 border border-green-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Remember</h2>
          <p className="text-sm text-green-900 mb-4">
            Family reconnection is one part of your healing journey. It doesn't define your worth. Some people are worthy of love and support even if their biological family can't show it.
          </p>
          <p className="text-sm text-green-900">
            If reconnection happens, great. If it doesn't, you can still build a meaningful, connected life. Focus on the relationships that do work and the community you build.
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
