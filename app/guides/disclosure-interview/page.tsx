import { ArrowLeft, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'When and How to Disclose Your Background | The Ide Project',
  description: 'Learn when to disclose your criminal history and how to do it effectively during job interviews and background checks.',
}

export default function DisclosureInterviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Disclosure During Job Interviews</h1>
          <p className="text-lg text-muted-foreground">When to tell employers about your background—and how to do it right.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Do You Have to Disclose?</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6 mb-4">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Short answer:</span> It's complicated. Most employers in Texas can only ask about felony convictions. Many cannot ask about misdemeanors or sealed records. However, you should still be prepared.
            </p>
          </div>
          <h3 className="font-semibold text-foreground mb-3">When You MUST Disclose:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Jobs requiring background checks (security, healthcare, finance)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Jobs with children or vulnerable people</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Government or federal positions</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>When directly asked on a job application</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">When You DON'T Have to Disclose</h2>
          <ul className="space-y-2 text-sm text-muted-foreground mb-6">
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Misdemeanor convictions (in most cases)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Sealed or expunged records</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Jobs that don't ask about criminal history</span>
            </li>
          </ul>
          <div className="rounded-lg bg-red-50 border border-red-200 p-4">
            <p className="text-sm text-red-900">
              <span className="font-semibold">Critical:</span> Never lie on a background check or job application. If they find out you lied, you'll be fired—even years later.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">How to Disclose: The Formula</h2>
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-2">1. Be Direct and Brief</p>
              <p className="text-sm text-muted-foreground">"I was convicted of [crime] in [year]. I served my time and have been living [X years] successfully since my release."</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">2. Take Responsibility</p>
              <p className="text-sm text-muted-foreground">"I take full responsibility for my actions. I've learned from that experience and have made better choices since."</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">3. Show Change</p>
              <p className="text-sm text-muted-foreground">"Since then, I've [completed GED, attended job training, worked steadily, stayed clean, etc.]."</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">4. Look Forward</p>
              <p className="text-sm text-muted-foreground">"I'm focused on building a stable future and contributing positively to my community."</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Real Examples</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border/60 p-6">
              <p className="text-sm font-semibold text-foreground mb-3">Good Disclosure:</p>
              <p className="text-sm text-muted-foreground italic">"I was convicted of felony drug possession in 2015. I served two years and have been clean since my release. I completed a vocational program while incarcerated and have been working steadily for the past five years. That experience changed my life and taught me the importance of making better decisions."</p>
            </div>
            <div className="rounded-lg border border-border/60 p-6">
              <p className="text-sm font-semibold text-foreground mb-3">Avoid This:</p>
              <p className="text-sm text-muted-foreground italic">"I had some trouble with the law but it wasn't my fault. The cops were corrupt and the judge didn't understand my situation."</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What If They Ask on the Application?</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If There's a Text Box:</p>
              <p className="text-sm text-muted-foreground">Write briefly: "Yes. Felony conviction in [year]. Served sentence and have been living responsibly since."</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If It's Just a Yes/No Box:</p>
              <p className="text-sm text-muted-foreground">Check "Yes" if applicable. Prepare your verbal explanation for the interview.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">During the Interview</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Stay Calm</p>
                <p className="text-sm text-muted-foreground">Take a breath. This is a conversation, not an interrogation. Many employers have hired people with records.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Use Your Prepared Story</p>
                <p className="text-sm text-muted-foreground">Practice your disclosure before the interview so it sounds natural, not rehearsed.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Be Honest, Not Oversharing</p>
                <p className="text-sm text-muted-foreground">Don't go into graphic details. Just the facts.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Redirect to Your Skills</p>
                <p className="text-sm text-muted-foreground">After explaining, pivot: "What I'm focused on now is bringing strong work ethic to this role."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Your Rights</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Employers cannot ask about arrests—only convictions</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Texas law allows you to answer "no" to questions about arrests that didn't lead to conviction</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>If your record is expunged, you can legally say "no" to conviction questions</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <span>They cannot reject you solely because of your background—only if it's relevant to the job</span>
            </li>
          </ul>
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
