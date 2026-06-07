import { ArrowLeft, CheckCircle2, AlertCircle, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Processing Trauma After Incarceration | The Ide Project',
  description: 'Understanding trauma and beginning your healing journey.',
}

export default function ProcessingTraumaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Processing Trauma</h1>
          <p className="text-lg text-muted-foreground">Understanding what you&apos;ve experienced and beginning to heal.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What Is Trauma?</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900 mb-3">
              Trauma is your mind and body's response to overwhelming experiences. Incarceration—especially wrongful imprisonment or violence—causes real trauma.
            </p>
            <p className="text-sm text-blue-900">
              This is not weakness. This is not something you should "just get over." It's a normal response to abnormal situations.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Common Trauma Responses</h2>
          <p className="text-sm text-muted-foreground mb-4">
            After release, you might experience:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Hypervigilance:</span> Always scanning for danger. Feeling unsafe even in safe places. Startling easily.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Nightmares/Sleep Issues:</span> Reliving experiences in dreams. Difficulty sleeping. Waking up in panic.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Emotional Numbing:</span> Feeling disconnected or unable to feel. Nothing seems to matter. Difficulty connecting with people.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Anger/Irritability:</span> Quick to rage. Difficulty controlling emotions. Feeling like you might explode.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Depression/Anxiety:</span> Persistent sadness or worry. Feeling hopeless. Panic attacks in certain situations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Trust Issues:</span> Difficulty believing people are safe. Assuming the worst. Isolation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Why Healing Takes Time</h2>
          <p className="text-sm text-muted-foreground mb-4">
            You weren't hurt for days or weeks. You were in a traumatic environment for years or decades. Healing is a process:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Weeks 1-4: Shock</p>
              <p className="text-sm text-muted-foreground">You might feel numb. That's okay. Your mind is protecting you from overwhelming emotions.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Months 1-3: Adjustment</p>
              <p className="text-sm text-muted-foreground">Emotions start coming. You might cry unexpectedly or feel angry. This is normal and actually progress.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Months 3-12: Processing</p>
              <p className="text-sm text-muted-foreground">With therapy/support, you start making sense of what happened. Difficult but necessary.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Year 1+: Integration</p>
              <p className="text-sm text-muted-foreground">You're building a new identity—not defined by your trauma. Symptoms reduce but may still appear sometimes. That's normal.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">First Steps to Healing</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">1. Name What Happened</p>
              <p className="text-sm text-muted-foreground">You experienced something serious. Don't minimize it. It's okay to acknowledge: "I was wrongfully imprisoned" or "I experienced violence" or "I'm traumatized."</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">2. Know It's Not Your Fault</p>
              <p className="text-sm text-muted-foreground">Many trauma survivors blame themselves. You did what you could to survive. That took strength. Healing comes from self-compassion, not self-blame.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">3. Talk About It (When Ready)</p>
              <p className="text-sm text-muted-foreground">You don't have to share with everyone. But talking with a therapist, trusted person, or support group helps. Keeping it bottled makes it worse.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">4. Develop Coping Strategies</p>
              <p className="text-sm text-muted-foreground">Breathing exercises, walks, journaling, art, music—find what helps you regulate emotions. Your therapist can teach more.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">5. Build Safety and Connection</p>
              <p className="text-sm text-muted-foreground">Spend time with people you trust. Trauma thrives in isolation. Safe relationships help rewire your nervous system.</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-green-50 border border-green-200 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">You Will Heal</h2>
          <p className="text-sm text-green-900 mb-4">
            Trauma is not permanent. With time, support, and intentional work, people recover. You won't forget what happened, but you can process it and move forward.
          </p>
          <p className="text-sm text-green-900">
            Many people who've survived incarceration and trauma become the strongest, most compassionate people. Your experience can become your strength. But first, be gentle with yourself.
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
