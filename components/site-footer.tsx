import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div>
            <div className="mb-4">
              <div>
                <span className="text-base font-semibold text-foreground lg:text-lg">
                  The Ide Project
                </span>
                <p className="text-xs font-medium text-foreground/70 lg:text-sm">
                  Youth Led Initiative
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/60 lg:text-base">
              The Ide Project is a youth-led initiative connecting exonerees nationwide with verified reentry support organizations, housing assistance, employment programs, legal resources, and community advocacy. We provide comprehensive reentry support and exoneree resources to help rebuild lives after wrongful conviction.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/80 lg:text-base">
              Resource Pages
            </h3>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer navigation"
            >
              <Link
                href="/"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground lg:text-base"
              >
                Home
              </Link>
              <Link
                href="/financial-literacy"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground lg:text-base"
              >
                Financial Literacy
              </Link>
              <Link
                href="/general-resources"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground lg:text-base"
              >
                Get Help Now
              </Link>
              <Link
                href="/organizations"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground lg:text-base"
              >
                Support Organizations
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Get Involved
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-foreground/60">
              Whether you are an exoneree, a family member, or someone who
              wants to help, there are ways to make a difference.
            </p>
            <Link
              href="/general-resources"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              View Helpful Resources &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6">
          <p className="text-center text-sm text-foreground/60">
            &copy; 2026 The Ide Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
