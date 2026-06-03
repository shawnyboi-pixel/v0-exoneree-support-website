'use client'

export function AboutSection() {
  return (
    <>
      <section id="about" className="bg-secondary py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:max-w-4xl animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                About The Ide Project
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              The Ide Project is a youth-led initiative dedicated to supporting exonerees through their reentry journey by providing essential resources, guidance, and community support.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To empower individuals who have been exonerated from wrongful convictions by connecting them with comprehensive reentry support, practical resources, and a compassionate community dedicated to their successful integration back into society.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed">
                  A world where exonerees have equal access to the resources and support they need to rebuild their lives, restore their dignity, and thrive in their communities.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What We Do</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Provide comprehensive guides on financial planning, housing, employment, and legal rights</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Connect exonerees with community resources and support networks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Advocate for policy changes that support wrongful conviction victims</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Foster community awareness and education about wrongful convictions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
