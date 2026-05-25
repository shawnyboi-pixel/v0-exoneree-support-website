import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10">
                <span className="text-xs font-bold text-primary-foreground">
                  ERP
                </span>
              </div>
              <div>
                <span className="text-base font-semibold text-primary-foreground">
                  Exoneree Reentry
                </span>
                <p className="text-xs font-medium text-primary-foreground/70">
                  Youth Led
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              A youth-led initiative connecting Texas exonerees with housing
              assistance, employment support, advocacy organizations, and the
              community support they need to rebuild.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Resource Pages
            </h3>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer navigation"
            >
              <Link
                href="/"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Home
              </Link>
              <Link
                href="/housing"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Housing in Dallas
              </Link>
              <Link
                href="/employment"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Employment After Exoneration
              </Link>
              <Link
                href="/financial"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Financial & Credit Rebuilding
              </Link>
              <Link
                href="/healthcare"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Healthcare & Insurance
              </Link>
              <Link
                href="/organizations"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
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
              wants to help {"—"} there are ways to make a difference.
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
          <p className="text-center text-xs text-primary-foreground/40">
            This site is an informational resource hub connecting exonerees with
            support organizations. It does not provide and should not be
            understood as professional advice of any kind. All organizations
            listed have been independently verified.
          </p>
        </div>
      </div>
    </footer>
  )
}
