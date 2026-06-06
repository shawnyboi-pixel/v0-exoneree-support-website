import { ArrowLeft, CheckCircle2, AlertCircle, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Email & Social Media Setup | The Ide Project',
  description: 'How to set up email and social media accounts safely.',
}

export default function EmailSocialMediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Email & Social Media Setup</h1>
          <p className="text-lg text-muted-foreground">How to set up accounts and use them safely and professionally.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why You Need Email</h2>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm text-blue-900">
              Email is essential for jobs, benefits, school, housing, and staying in touch with people. If you don't have an email, create one today.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Creating Professional Email</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Best Providers (All Free)</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Gmail (Google) – most popular, reliable</li>
                <li>• Outlook (Microsoft) – clean interface</li>
                <li>• Yahoo Mail – simple and straightforward</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Email Address Format</p>
              <p className="text-sm text-muted-foreground mb-2">Use your real name or something professional:</p>
              <div className="bg-slate-50 rounded p-3 text-sm font-mono text-foreground mb-2">
                firstname.lastname@gmail.com
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Don't use:</span> Email addresses with numbers, slang, or anything unprofessional. You'll use this for job applications.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Password Safety</p>
              <p className="text-sm text-muted-foreground">Use a strong password with letters, numbers, and symbols. Write it down and store safely at home (not in your wallet).</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Email Best Practices</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Check it daily.</span> Employers and agencies email you important info. Missing an email can cost you a job.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Respond professionally.</span> Use proper grammar. Sign with your full name. Keep it brief.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Don't overshare.</span> Email is not private. Don't discuss your background or personal issues unnecessarily.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Save important emails.</span> Create folders for jobs, benefits, housing. You may need proof later.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Social Media: Use Carefully</h2>
          <div className="rounded-lg bg-red-50 border border-red-200 p-6 mb-6">
            <p className="text-sm text-red-900 font-semibold mb-3">Important:</p>
            <p className="text-sm text-red-900">
              Everything you post on social media can be seen. Employers search your social media before hiring. Parole officers can access it. Future landlords see it. Be intentional about what you share.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Create Accounts</p>
              <p className="text-sm text-muted-foreground">Use your real name. Keep it professional. A photo of you smiling is good for LinkedIn/Facebook. Avoid group photos or party photos.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">What NOT to Post</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Anything about your past conviction</li>
                <li>• Photos with alcohol or drugs</li>
                <li>• Anything illegal (even joking)</li>
                <li>• Complaints about your job/employer</li>
                <li>• Intimate photos</li>
                <li>• Angry rants or controversial statements</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">What's Good to Post</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Job achievements and promotions</li>
                <li>• Educational accomplishments</li>
                <li>• Family and friends (positive moments)</li>
                <li>• Community service or volunteer work</li>
                <li>• Inspirational quotes or growth messages</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Privacy Settings</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Set accounts to private.</span> Limit who can see your posts—friends and approved followers only.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Review what others tag you in.</span> Approve photos before they show on your profile.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Be selective about friends.</span> Don't accept requests from people you don't know.</span>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-4 text-accent flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Delete old posts.</span> Go through your history and remove anything questionable.</span>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">LinkedIn for Job Search</h2>
          <p className="text-sm text-muted-foreground mb-4">
            LinkedIn is like Facebook for jobs. It's professional and employers actively recruit there. Create a LinkedIn profile with:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Your real name and professional photo</li>
            <li>• Job titles you've held</li>
            <li>• Skills you have (leadership, customer service, manual labor, etc.)</li>
            <li>• Education and certifications</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Don't mention your background unless you're actively looking for companies specializing in second chances. Employers will see your profile and may reach out to you directly.
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
