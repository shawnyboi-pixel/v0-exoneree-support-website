import { ArrowLeft, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Writing Your First Resume | The Ide Project',
  description: 'Resume tips designed specifically for people with conviction history rebuilding their careers.',
}

export default function WritingResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Writing Your First Resume</h1>
          <p className="text-lg text-muted-foreground">Create a powerful resume that tells your story without overselling or underselling yourself.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">The Truth About Resumes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your resume doesn't need to explain everything about you. It's a marketing document designed to get you an interview. Employers understand that people make mistakes and that circumstances are complex. What they want to know: Can you do the job? Are you reliable? Will you show up?
          </p>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Key principle:</span> A resume is NOT a confession. It's a professional document showing your skills and experience.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Resume Structure (Keep It Simple)</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">1. Contact Information</p>
              <p className="text-sm text-muted-foreground">Name, phone, email, city (optional: LinkedIn profile if professional)</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">2. Professional Summary (Optional)</p>
              <p className="text-sm text-muted-foreground">2-3 lines about who you are professionally. Example: "Reliable warehouse worker with 3 years experience. Strong work ethic and commitment to safety."</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">3. Work Experience</p>
              <p className="text-sm text-muted-foreground">Job title, company, dates, bullet points of what you did</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">4. Skills</p>
              <p className="text-sm text-muted-foreground">What you're good at: "Customer service, Microsoft Word, Bilingual (English/Spanish), Basic carpentry"</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">5. Education</p>
              <p className="text-sm text-muted-foreground">High school diploma, GED, college, certifications, or trade schools</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Writing Your Work Experience</h2>
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-4">Use the "Action Word + Task + Result" format. Here are examples:</p>
            <div className="space-y-3">
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <p className="text-sm font-mono text-green-900">
                  ✓ Managed inventory of 1000+ items with 98% accuracy
                </p>
              </div>
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <p className="text-sm font-mono text-green-900">
                  ✓ Trained 5 new employees on company procedures
                </p>
              </div>
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <p className="text-sm font-mono text-green-900">
                  ✓ Completed all shifts with zero tardiness over 6 months
                </p>
              </div>
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <p className="text-sm font-mono text-green-900">
                  ✓ Resolved customer complaints maintaining 95% satisfaction rating
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-4">Action words to use: Managed, Created, Organized, Improved, Implemented, Coordinated, Resolved, Trained, Supervised, Designed, Developed</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Handling Employment Gaps</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Option 1: Simple Timeline</p>
              <p className="text-sm text-muted-foreground">Just list years. "2015-2018" doesn't require explanation.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Option 2: Brief Explanation</p>
              <p className="text-sm text-muted-foreground">Example: "2015-2018: Personal circumstances (can discuss in interview)" or "2015-2018: Focused on family/personal development"</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground mb-2">Option 3: Say Nothing</p>
              <p className="text-sm text-muted-foreground">Most effective. Employers notice gaps less than you think. If asked in interview, be honest and brief.</p>
            </div>
          </div>
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Pro tip:</span> Gaps are common. You're not required to explain them on a resume. Many people take time off for health, family, or personal reasons. Employers get it.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Should I Mention My Exoneration?</h2>
          <div className="rounded-lg border-2 border-accent p-6">
            <p className="font-semibold text-foreground mb-3">Short answer: No, not on your resume.</p>
            <p className="text-sm text-muted-foreground mb-4">
              Your resume shouldn't address your record or exoneration. If you're asked about it in an interview, that's different (see our Disclosure and Interview Guide). 
            </p>
            <p className="text-sm text-muted-foreground">
              Your resume shows your skills and experience. Background checks are separate and handled after an interview.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Resume Mistakes to Avoid</h2>
          <div className="space-y-3">
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Lying or exaggerating</p>
                <p className="text-sm text-muted-foreground">They will check. Be honest about jobs, dates, and skills.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Making it too long</p>
                <p className="text-sm text-muted-foreground">Keep it to 1 page if possible. 2 pages only if you have extensive experience.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Typos or poor formatting</p>
                <p className="text-sm text-muted-foreground">Spell check carefully. Use consistent fonts and spacing.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Generic objective</p>
                <p className="text-sm text-muted-foreground">Skip the objective. If you include summary, make it specific to the job.</p>
              </div>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Using unprofessional email</p>
                <p className="text-sm text-muted-foreground">Use yourname@email.com, not partyking420@email.com</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Free Resume Tools</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground text-sm">Canva Resume</p>
              <p className="text-sm text-muted-foreground">Professional templates, super easy to use</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground text-sm">Google Docs Templates</p>
              <p className="text-sm text-muted-foreground">Free, simple, works everywhere</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground text-sm">Indeed Resume Builder</p>
              <p className="text-sm text-muted-foreground">Free, designed for job search</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-foreground text-sm">Microsoft Word</p>
              <p className="text-sm text-muted-foreground">Download templates, save as PDF before sending</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Your Action Checklist</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Gather all job history with dates and company names</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Write bullet points for each job (5 max per job)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">List your skills (software, languages, trade skills)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Create using free tool (Canva, Google Docs, or Word)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Save as PDF (employers prefer this)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Ask someone you trust to review it</span>
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
