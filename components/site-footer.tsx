export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10">
                <span className="text-xs font-bold text-primary-foreground">
                  TX
                </span>
              </div>
              <span className="text-base font-semibold text-primary-foreground">
                Exoneree Support
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Connecting Texas exonerees with the legal aid, housing assistance,
              employment support, and community they need to rebuild.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <a
                href="#"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Home
              </a>
              <a
                href="#statistics"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Statistics
              </a>
              <a
                href="#struggles"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Challenges
              </a>
              <a
                href="#resources"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Resources
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Crisis Support
            </h3>
            <p className="mb-2 text-sm text-primary-foreground/60">
              If you or someone you know is in crisis:
            </p>
            <a
              href="tel:988"
              className="text-lg font-bold text-primary-foreground transition-colors hover:text-primary-foreground/80"
            >
              988 Suicide & Crisis Lifeline
            </a>
            <p className="mt-1 text-sm text-primary-foreground/60">
              Call or text 988 {"—"} available 24/7
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/40">
            This site is a resource hub. It is not a substitute for
            professional legal advice. All organizations listed have been
            independently verified.
          </p>
        </div>
      </div>
    </footer>
  )
}
