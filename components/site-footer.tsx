import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div>
            <div className="mb-4">
              <div>
                <span className="text-base font-semibold text-primary-foreground lg:text-lg">
                  The IDE Project
                </span>
                <p className="text-xs font-medium text-primary-foreground/70 lg:text-sm">
                  Youth Led Initiative
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/60 lg:text-base">
              A youth-led initiative connecting exonerees nationwide with support organizations, advocacy groups, and the community resources they need to rebuild their lives.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 lg:text-base">
              Resource Pages
            </h3>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer navigation"
            >
              <Link
                href="/"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground lg:text-base"
              >
                Home
              </Link>
              <Link
                href="/financial-literacy"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground lg:text-base"
              >
                Financial Literacy
              </Link>
              <Link
                href="/general-resources"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground lg:text-base"
              >
                Get Help Now
              </Link>
              <Link
                href="/organizations"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground lg:text-base"
              >
                Support Organizations
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Get Involved
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-primary-foreground/60">
              Whether you are an exoneree, a family member, or someone who
              wants to help, there are ways to make a difference.
            </p>
            <Link
              href="/general-resources"
              className="text-sm font-medium text-primary-foreground transition-colors hover:text-primary-foreground/80"
            >
              View Helpful Resources &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-primary-foreground/50">
            Disclaimer
          </p>
          <p className="text-center text-xs text-primary-foreground/40">
            This is a landing page and informational resource hub connecting exonerees with
            support organizations. It does not provide and should not be
            understood as professional advice of any kind. All organizations
            listed have been independently verified.
          </p>
        </div>
      </div>
    </footer>
  )
}
