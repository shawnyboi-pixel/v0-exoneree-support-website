import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Healthy Coping Strategies | The Ide Project',
  description: 'Evidence-based coping skills for managing stress and trauma.',
}

export default function CopingStrategiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Healthy Coping Strategies</h1>
          <p className="text-lg text-muted-foreground">Evidence-based techniques to manage stress, anxiety, and trauma.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why Coping Matters</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900">
              Healthy coping strategies help you handle difficult emotions and situations without hurting yourself or others. They're not permanent solutions, but they help you get through hard moments.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Immediate Coping (When You're In Crisis)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Use these when you're overwhelmed right now:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">The 5-4-3-2-1 Grounding Technique</p>
              <p className="text-sm text-muted-foreground mb-2">When anxious or panicking:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Name 5 things you can see</li>
                <li>• Name 4 things you can touch</li>
                <li>• Name 3 things you can hear</li>
                <li>• Name 2 things you can smell</li>
                <li>• Name 1 thing you can taste</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">This brings you back to the present moment. Takes 5 minutes.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Deep Breathing (4-7-8 Technique)</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Breathe in for 4 counts</li>
                <li>• Hold for 7 counts</li>
                <li>• Exhale for 8 counts</li>
                <li>• Repeat 4-5 times</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">Slows your nervous system. Works for panic, anger, and anxiety.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Cold Water Splash</p>
              <p className="text-sm text-muted-foreground">Splash cold water on your face or run cold water over your wrists. Activates your body's "calm response." Takes 30 seconds but very effective.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Physical Release</p>
              <p className="text-sm text-muted-foreground">Do 20 push-ups, run up and down stairs, punch a pillow, or do jumping jacks. Burns off the adrenaline that causes panic. Takes 5 minutes.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Daily Coping Practices</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Do these regularly to prevent crises:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">30 Minutes of Movement</p>
              <p className="text-sm text-muted-foreground">Walk, run, dance, basketball, anything. Movement is medicine. Reduces anxiety, depression, and anger. Do daily if possible.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">7-8 Hours of Sleep</p>
              <p className="text-sm text-muted-foreground">Sleep deprivation worsens mental health. Set a bedtime. No screens 30 minutes before bed. Dark and cool room helps.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Journaling (10-15 minutes)</p>
              <p className="text-sm text-muted-foreground">Write down your thoughts without judging them. Don't worry about grammar. Just get it out of your head. Reduces anxiety and helps you process.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Social Connection</p>
              <p className="text-sm text-muted-foreground">Spend time with people you trust. Call a friend. Join a group or activity. Isolation makes trauma worse. Connection heals.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Meditation or Mindfulness</p>
              <p className="text-sm text-muted-foreground">Apps like Insight Timer (free) have guided meditations. Even 5 minutes daily helps calm your nervous system.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Creative Outlets</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Processing emotions through creativity helps:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">Drawing, painting, or coloring (you don't need to be good)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">Writing poems, stories, or letters (you don't have to send them)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">Music (listening or playing)</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">Photography or collecting images that inspire you</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">Cooking, gardening, or crafting</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What NOT to Do</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900"><span className="font-semibold">Avoid self-harm:</span> Cutting, burning, or hitting yourself. These are trauma responses but make things worse. If you're thinking about it, call 988 or text HOME to 741741.</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900"><span className="font-semibold">Avoid drugs/alcohol:</span> They numb pain temporarily but don't heal it. They make trauma worse and damage your life. If you're struggling with substance abuse, tell your parole officer or therapist immediately.</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900"><span className="font-semibold">Avoid isolation:</span> When you're hurting, the urge to hide is strong. But isolation makes everything worse. Push yourself to connect even when you don't want to.</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-900"><span className="font-semibold">Avoid unhealthy relationships:</span> If someone is abusive, controlling, or makes you feel worse, distance yourself. You deserve people who treat you with respect.</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-green-50 border border-green-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Build Your Personal Coping Plan</h2>
          <p className="text-sm text-green-900 mb-4">
            Pick at least 3 strategies from above. Write them down. Keep the list where you can see it.
          </p>
          <p className="text-sm text-green-900">
            On good days, when you're calm, practice these skills. That way, when you're in crisis, they're automatic. Your brain learns: "When I'm overwhelmed, I can [breathing/grounding/movement/connection]."
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
