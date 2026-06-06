import { ArrowLeft, CheckCircle2, AlertCircle, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Essential Legal Documents | The Ide Project',
  description: 'What legal documents you need and how to get copies.',
}

export default function LegalDocumentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 lg:py-12">
          <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Essential Legal Documents</h1>
          <p className="text-lg text-muted-foreground">Documents you need to have and where to get them.</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Documents You MUST Have</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex gap-4">
                <FileText className="size-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground mb-2">Birth Certificate</p>
                  <p className="text-sm text-muted-foreground mb-3">Needed for: IDs, jobs, bank accounts, school, marriage licenses</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">Get it from:</span> Vital Statistics Office in your county of birth. Cost: $10-25</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex gap-4">
                <FileText className="size-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground mb-2">Social Security Card</p>
                  <p className="text-sm text-muted-foreground mb-3">Needed for: Employment, tax returns, banking, loans</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">Get it from:</span> Social Security Administration office or apply at ssa.gov. FREE</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex gap-4">
                <FileText className="size-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground mb-2">Photo ID (Driver's License or State ID)</p>
                  <p className="text-sm text-muted-foreground mb-3">Needed for: Everyday life, voting, traveling, applying for jobs</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">Get it from:</span> Texas DPS. See Driver's License Guide for details. Cost: $16-35</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 p-6">
              <div className="flex gap-4">
                <FileText className="size-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground mb-2">Certificate of Discharge</p>
                  <p className="text-sm text-muted-foreground mb-3">Proves you completed your sentence. Needed for jobs, benefits, housing</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">Get it from:</span> Your parole/probation officer or request from Texas Department of Criminal Justice</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Documents for Specific Situations</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You're Applying for Benefits:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Proof of income (pay stubs, W-2s)</li>
                <li>• Proof of address (utility bill, lease)</li>
                <li>• Social Security card</li>
                <li>• Birth certificate</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You're Renting an Apartment:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Photo ID</li>
                <li>• Proof of income</li>
                <li>• References</li>
                <li>• Certificate of Discharge (sometimes)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Were Exonerated:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Court order of exoneration</li>
                <li>• Certificate of Innocence (if issued)</li>
                <li>• All documentation from appeal</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">If You Have a Child:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Birth certificate (theirs)</li>
                <li>• Social Security card (theirs)</li>
                <li>• Your ID and SSN</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">How to Get Copies of Your Court Records</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 1: Find the Right Court</p>
              <p className="text-sm text-muted-foreground">Remember which county you were tried in. Go to that county's district court or justice court.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 2: Request Records</p>
              <p className="text-sm text-muted-foreground">Go to the clerk's office and ask for your case documents. Be ready to give your name, case number (if you know it), and date of trial.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 3: Get Copies</p>
              <p className="text-sm text-muted-foreground">The court will copy the documents you need. Cost is usually $0.50-$1 per page. Request certified copies for official purposes.</p>
            </div>
            <div className="rounded-lg border border-border/60 p-4">
              <p className="font-semibold text-sm text-foreground mb-2">Step 4: Pay & Take Home</p>
              <p className="text-sm text-muted-foreground">Pay the copying fee. They give you official court documents. Keep copies safe in multiple places.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Safe Storage Tips</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Keep originals safe:</span> Store birth certificate, discharge papers, and court orders in a safe place (not in your car or with roommates).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Make copies:</span> Keep photocopies or digital scans in a separate safe location.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Don't share originals:</span> Use copies for applications. Employers/landlords should accept copies. Keep the original.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="size-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Consider a lockbox:</span> A small lockbox at home or with a trusted family member is safest.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-accent/5 border border-accent/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What If You Lost Your Documents?</h2>
          <p className="text-sm text-muted-foreground">
            Many people lose documents during incarceration or transition. Don't panic. You can get replacements. Each document has an agency that can reissue it. Start with your birth certificate and work from there. The process takes 2-4 weeks usually. If you need documents urgently, explain your situation—many agencies have expedited options.
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
