import { ArrowLeft, CheckCircle2, AlertCircle, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Interview Preparation Guide | The Ide Project',
  description: 'Step-by-step preparation guide for your first job interview after release.',
}

export default function InterviewPrepPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Interview Preparation Guide</h1>
          <p className="text-lg text-muted-foreground">Everything you need to know to walk into your first interview with confidence.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Before the Interview</h2>
          
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Research the Company (30 minutes)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Zap className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Visit their website. What do they do? What's their mission?</span>
              </li>
              <li className="flex gap-3">
                <Zap className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Check Google Maps reviews—what do customers say?</span>
              </li>
              <li className="flex gap-3">
                <Zap className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Look on LinkedIn at employees (if available)</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Prepare Your Story (1 hour)</h3>
            <p className="text-sm text-muted-foreground mb-4">Write down and practice answering these questions:</p>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-mono text-sm text-foreground mb-2">Q: Tell me about yourself.</p>
                <p className="text-sm text-muted-foreground">A: Keep it to 2 minutes. Include: your name, where you're from, what you're doing now, and one goal you have.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-mono text-sm text-foreground mb-2">Q: Why do you want to work here?</p>
                <p className="text-sm text-muted-foreground">A: Use what you learned about the company. Example: "I see you focus on customer service, and I'm committed to doing quality work."</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-mono text-sm text-foreground mb-2">Q: What's your biggest strength?</p>
                <p className="text-sm text-muted-foreground">A: Pick ONE real strength. Reliability, willingness to learn, attention to detail, teamwork. Give an example.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4">
                <p className="font-mono text-sm text-foreground mb-2">Q: What's an area you need to improve?</p>
                <p className="text-sm text-muted-foreground">A: Pick something real but not job-critical. Then say what you're doing about it. Example: "I used to struggle with speaking up in group settings, so I've been taking a communication class."</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Logistics (Day Before)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Know EXACTLY where the interview is. Drive there if possible.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Plan to arrive 15 minutes early (not too early)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Check public transit times if you're using it</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Print 2-3 copies of your resume (bring originals)</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What to Wear</h2>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-6 mb-4">
            <p className="text-sm text-muted-foreground mb-4">
              When in doubt, dress slightly more formal than you think. You can always be more casual once you're hired.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-sm text-foreground mb-2">✓ Professional Retail/Office Jobs:</p>
              <p className="text-sm text-muted-foreground">Dress pants or skirt, button-up shirt or blouse, closed-toe shoes, minimal jewelry</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground mb-2">✓ Trade/Warehouse Jobs:</p>
              <p className="text-sm text-muted-foreground">Clean jeans or work pants, plain t-shirt or polo, work-appropriate shoes</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground mb-2">✓ General Rule:</p>
              <p className="text-sm text-muted-foreground">Be clean, neat, and well-groomed. No rips, stains, or strong smells.</p>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-900">
                <span className="font-semibold">Don't:</span> Wear visible tattoos if they're concerning (covered is fine), excessive perfume, wrinkled clothes, or anything that draws negative attention.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">During the Interview</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Arrive Early (But Not Too Early)</p>
                <p className="text-sm text-muted-foreground">Arrive 10-15 minutes early. Use the bathroom, check your appearance, and calm yourself.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Handshake & Eye Contact</p>
                <p className="text-sm text-muted-foreground">Firm handshake, smile, look them in the eye. These make a huge first impression.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Sit Up Straight</p>
                <p className="text-sm text-muted-foreground">Your body language matters. Don't slouch. Keep your phone OFF and away.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Listen More Than You Talk</p>
                <p className="text-sm text-muted-foreground">Answer questions fully but concisely. Let them do most of the talking.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">No Negative Talk</p>
                <p className="text-sm text-muted-foreground">Never badmouth former employers, judges, police, or others. Stay positive.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Red Flags During Interview</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Illegal questions:</span> They cannot ask about family, religion, health, or disabilities.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Job promise:</span> If they promise "this job will definitely help you get off parole" or make it seem too good to be true, it might be.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Money upfront:</span> Never pay money to start a job. That's a scam.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="size-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Vague job description:</span> If they can't explain what you'd actually do, be cautious.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Questions YOU Should Ask</h2>
          <p className="text-sm text-muted-foreground mb-4">Having questions shows you're interested. Ask 2-3 of these:</p>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">• "What would a typical day look like in this role?"</p>
            <p className="text-sm text-muted-foreground">• "What qualities do you value most in your team?"</p>
            <p className="text-sm text-muted-foreground">• "What's the next step in the hiring process?"</p>
            <p className="text-sm text-muted-foreground">• "What opportunities are there to learn and grow here?"</p>
            <p className="text-sm text-muted-foreground">• "How would you describe the work environment?"</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">After the Interview</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Send a thank you email within 24 hours mentioning something specific you discussed</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Wait to hear back. If they say 1-2 weeks, follow up after that time</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Don't take rejection personally. Most people get rejected several times before landing a job</span>
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
