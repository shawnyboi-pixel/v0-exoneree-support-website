'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { GuideQASection } from '@/components/guide-qa-section'

export default function NetworkingGuidePage() {
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
            Networking for Job Success
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            By The Ide Project | Updated June 1st, 2026
          </p>
          <p className="text-lg text-muted-foreground">
            Build professional relationships without disclosing your background
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Quick Summary</h2>
          <p className="text-foreground/80 mb-4">
            Most jobs are filled by people who know someone. Networking isn't about sales pitches—it's about building genuine relationships with people in your field. You don't have to disclose your past to make real connections.
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li>• 70-80% of jobs never get publicly posted—they go to people with connections</li>
            <li>• Networking is just talking to people and building relationships</li>
            <li>• You can mention your past when the moment is right, or not at all</li>
            <li>• Start with people who have similar challenges or missions</li>
            <li>• Follow up and stay in touch—relationships take time</li>
          </ul>
        </section>

        {/* Section 1: What is Networking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">What Networking Really Is</h2>
          
          <p className="text-foreground/80 mb-6">
            Networking sounds intimidating, but it's just connecting with people. Here's the honest truth:
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">What Networking IS</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✓ Having genuine conversations with people</li>
                  <li>✓ Showing interest in what they do</li>
                  <li>✓ Finding common ground</li>
                  <li>✓ Staying in touch</li>
                  <li>✓ Helping others when you can</li>
                  <li>✓ Being authentic and real</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">What Networking IS NOT</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✗ Lying about who you are</li>
                  <li>✗ Using people for job connections</li>
                  <li>✗ Being fake or phony</li>
                  <li>✗ Immediately asking for a job</li>
                  <li>✗ Collecting business cards and never following up</li>
                  <li>✗ Sharing your trauma or criminal history right away</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Networking Matters</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="text-foreground/80 mb-3">
              <strong>The Reality:</strong> About 80% of jobs are never posted publicly. They're filled by someone who knows someone. By networking, you're not competing with thousands of other applicants—you're one of a few people who know about the opportunity.
            </p>
            <p className="text-foreground/80">
              Plus, if someone recommends you for a job, the hiring manager is more likely to take you seriously. You have built-in credibility.
            </p>
          </div>
        </section>

        {/* Section 2: Where to Network */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Where to Find People to Network With</h2>

          <p className="text-foreground/80 mb-6">
            You don't have to go to fancy events. Here are real places where networking happens:
          </p>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">1. Nonprofit Organizations & Reentry Programs</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  These attract people with compassion and people with lived experience. They often host events, workshops, and volunteer opportunities.
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> People already understand and support your situation. Less judgment, more genuine connection.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">2. Job Training & Vocational Programs</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Classmates, instructors, and guest speakers. You're all working toward employment—instant common ground.
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> Everyone is focused on careers. Instructors have industry connections.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">3. Industry Events & Job Fairs</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Hiring events, trade shows, conferences related to jobs you want. Meet actual employers and peers in your field.
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> Everyone's there for work connections. It's the whole point. No shame in it.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">4. Online Communities & LinkedIn</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Join groups related to your industry, skills, or interests. Participate genuinely in discussions. Connect with people 1-on-1.
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> Low-pressure. No one can see if you get rejected. Practice your pitch safely.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">5. Coffee Chats & Informational Interviews</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Ask someone in your field for 15 minutes over coffee to learn about their job. Most people say yes (it feels good to help).
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> Low-pressure on both sides. They're just giving advice, not hiring.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">6. Your Current or Past Jobs</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Coworkers, supervisors, customers. They already know your work ethic. Stay in touch.
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> They can give references and refer you to other jobs.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">7. Volunteer Work</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Helps animals, community, environment, kids. Meet mission-driven people who value integrity.
                </p>
                <p className="text-xs text-accent"><strong>Why here:</strong> Shows employers you care. You meet good people. Builds your resume.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: How to Network */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">How to Actually Network (Step by Step)</h2>

          <h3 className="text-2xl font-bold text-foreground mb-4">Step 1: Start a Conversation</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80 mb-3"><strong>Don't:</strong> "Hey, I'm looking for a job, can you help me?"</p>
            <p className="text-foreground/80"><strong>Do:</strong> "What kind of work do you do?" or "That's interesting—tell me more about that."</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Step 2: Listen More Than You Talk</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80 mb-3">Ask questions about their work, challenges, goals. People like talking about themselves. Let them.</p>
            <p className="text-foreground/80 mb-3"><strong>Good questions:</strong></p>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• "What does a typical day look like for you?"</li>
              <li>• "What's the best part of your job?"</li>
              <li>• "What skills have been most valuable in your field?"</li>
              <li>• "How did you get into this work?"</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Step 3: Find Common Ground</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80">It doesn't have to be deep. "I'm interested in [their field] because..." or "I respect that you care about [issue they mentioned]."</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Step 4: Share About Yourself (Selectively)</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80 mb-3">You don't have to dump your whole story. Share what's relevant:</p>
            <p className="text-foreground/80 mb-3"><strong>Good:</strong> "I'm currently training in [field]" or "I'm looking to transition into [industry]"</p>
            <p className="text-foreground/80"><strong>Too Much:</strong> Details about your past, your trauma, legal issues. Save this for later if it comes up naturally.</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Step 5: Ask for Advice, Not a Job</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border mb-6">
            <p className="text-foreground/80 mb-3"><strong>Don't:</strong> "Do you know anyone hiring?"</p>
            <p className="text-foreground/80"><strong>Do:</strong> "Based on your experience, what would you recommend for someone like me trying to break into this field?"</p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">Step 6: Get Contact Info & Follow Up</h3>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="text-foreground/80 mb-3">
              Exchange contact info (LinkedIn, email, phone). Within 1-2 days, send a message: "Great talking with you yesterday. I appreciated your advice about [specific thing they mentioned]. Hope we can stay in touch."
            </p>
            <p className="text-foreground/80">This keeps the relationship alive without being pushy.</p>
          </div>
        </section>

        {/* Section 4: Building Your LinkedIn */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">LinkedIn: Your Professional Networking Tool</h2>

          <p className="text-foreground/80 mb-6">
            LinkedIn is where employers and professionals hang out. It's less personal than Facebook, so you have control over what you share.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">Setting Up Your LinkedIn Profile</h3>
          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">1. Your Photo</h4>
                <p className="text-sm text-foreground/80">Professional headshot. Smile, good lighting, plain background. Not your mugshot or party photos.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">2. Headline</h4>
                <p className="text-sm text-foreground/80"><strong>Example:</strong> "Skilled Electrician | Training in Renewable Energy" or "Seeking Warehouse Operations Role"</p>
                <p className="text-xs text-foreground/70 mt-2">Avoid: vague, negative, or overly casual</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">3. About/Summary</h4>
                <p className="text-sm text-foreground/80">
                  Write 2-3 sentences about who you are professionally. What work excites you? What skills do you bring?
                </p>
                <p className="text-xs text-foreground/70 mt-2"><strong>Example:</strong> "Hardworking professional committed to learning new skills. Strong attention to detail and reliability. Passionate about [industry]. Open to entry-level and growth opportunities."</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">4. Work Experience</h4>
                <p className="text-sm text-foreground/80">List all jobs, dates, what you did. Focus on accomplishments: "Increased efficiency by organizing storage" not just "Worked in warehouse"</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">5. Skills</h4>
                <p className="text-sm text-foreground/80">List 5-10 relevant skills: "Customer Service, Inventory Management, Forklift Certified, Excel, Leadership"</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">6. Connections</h4>
                <p className="text-sm text-foreground/80">Start connecting with people you know: past coworkers, instructors, friends in your field. Send a note: "Great to connect on LinkedIn!"</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">LinkedIn Do's and Don'ts</h3>
          <div className="grid grid-cols-1 gap-4">
            <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">✓ DO</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Connect with people in your field</li>
                  <li>• Join industry groups and participate</li>
                  <li>• Share relevant articles or insights</li>
                  <li>• Congratulate connections on promotions/achievements</li>
                  <li>• Be professional and positive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">✗ DON'T</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Post personal drama or negativity</li>
                  <li>• Share political rants or controversial topics</li>
                  <li>• Immediately ask for a job from new connections</li>
                  <li>• Overshare about your past</li>
                  <li>• Post party photos or unprofessional content</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: When to Disclose */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">If/When You Decide to Disclose Your Past</h2>

          <p className="text-foreground/80 mb-6">
            Here's the truth: <strong>You don't have to tell everyone about your past.</strong> But if you do, timing and framing matter.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4">When You Don't Need to Disclose</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">• During casual networking</strong>
              <p className="text-sm text-foreground/80 mt-1">You're just having conversations. No obligation.</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">• When they don't ask</strong>
              <p className="text-sm text-foreground/80 mt-1">If an application doesn't ask about criminal history, you don't volunteer it.</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">• During initial job interviews for jobs that don't require background checks</strong>
              <p className="text-sm text-foreground/80 mt-1">Many jobs don't check backgrounds. Wait until they ask or until you're officially hired.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">When You Should Disclose</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">• They directly ask</strong>
              <p className="text-sm text-foreground/80 mt-1">You must answer honestly. Lying is grounds for immediate termination.</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">• You're applying for a job that requires background checks</strong>
              <p className="text-sm text-foreground/80 mt-1">They'll find out anyway. Be upfront and explain your growth.</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <strong className="text-foreground">• After building trust with someone in your network</strong>
              <p className="text-sm text-foreground/80 mt-1">Once you know them, you can decide to share. Most supportive connections will understand.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4">How to Frame Your Past (If You Choose to Share)</h3>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6">
            <p className="text-foreground/80 mb-4">Keep it brief, honest, and focused on growth:</p>
            <p className="text-foreground/80 mb-4 italic">"I was convicted of [general crime type] in [year]. That was a difficult time, but I've grown tremendously since then. I'm committed to contributing positively, and I'm grateful for the opportunity."</p>
            <p className="text-foreground/80">
              Then move the conversation forward: "I'm excited about [this job/field] because..." Don't over-explain or get defensive.
            </p>
          </div>
        </section>

        {/* Section 6: Follow-Up */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Following Up: Keeping Relationships Alive</h2>

          <p className="text-foreground/80 mb-6">
            Meeting people is just the start. Following up is how you build real relationships.
          </p>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Within 1-2 Days After Meeting</h4>
                <p className="text-sm text-foreground/80">Send a message: "Great connecting yesterday! Thanks for the advice about [topic]. Keep in touch!" Short and warm.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Every 3-6 Months</h4>
                <p className="text-sm text-foreground/80">Reach out occasionally: "Saw an article about [topic you discussed]. Thought of you!" No request, just genuine connection.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">When You See an Opportunity</h4>
                <p className="text-sm text-foreground/80">If a job opens up related to their field, send it: "Thought this might interest you!" They'll remember you as helpful.</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">When You Accomplish Something</h4>
                <p className="text-sm text-foreground/80">Got a promotion, finished training, started a new job: "Update—I just [achievement]! Thank you for helping me get here."</p>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Help Them When You Can</h4>
                <p className="text-sm text-foreground/80">Someone looking for [skill you have]? Refer them. Someone needs advice? Help. Build trust by being generous first.</p>
              </CardContent>
            </Card>
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
          guideTitle="Networking for Job Success"
          guideId="networking-job-success"
        />
      </article>
    </main>
  )
}
