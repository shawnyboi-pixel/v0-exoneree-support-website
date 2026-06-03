export function AboutSection() {
  return (
    <>
      <section id="what-we-do" className="bg-background py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:max-w-4xl animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                What we do
              </span>
            </h2>
          </div>
          {/* What we do section content to be added */}
        </div>
      </section>

      <section id="members" className="bg-secondary py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:max-w-4xl animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Members
              </span>
            </h2>
          </div>

          {/* Members Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Shawn Chen - Founder */}
            <div className="group animate-fade-in-up rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              {/* Image Placeholder */}
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm font-medium">
                    Image placeholder - 400x400px
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Shawn Chen
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    Founder
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Based in Dallas, Texas. A passionate advocate for wrongful conviction justice with 2 years of direct volunteer experience. Shawn founded The Ide Project to provide exonerees with the resources and support they need to rebuild their lives successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
