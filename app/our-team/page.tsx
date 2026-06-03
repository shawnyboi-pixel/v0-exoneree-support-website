'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function OurTeamPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 border-b border-border/30">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-4">
              Our Team
            </h1>
            <p className="text-lg text-foreground/70">
              Meet the passionate advocates and technologists building The Ide Project to support exonerees on their journey to reentry.
            </p>
          </div>
        </div>

        {/* Members Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Members</h2>
            <p className="text-foreground/60">Founders and core team</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Shawn Chen - Founder */}
            <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              {/* Image */}
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4DEBE52B-B88F-4E52-AF59-C0E66F43DA52_1_201_a-Cpmtg1MXY9l3Qoi7lWmGFIa4MiPqeg.jpeg"
                  alt="Shawn Chen"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Info */}
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

            {/* Vajra Vanukuri - Co-founder and Web Designer */}
            <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              {/* Image Placeholder */}
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm font-medium">
                    Image placeholder
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Vajra Vanukuri
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    Co-founder and Web Designer
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Based in San Francisco, California. Passionate about leveraging technology to support wrongful conviction advocacy and exoneree reentry. Vajra brings technical expertise in Java, Python, HTML, and multiple other programming languages to build The Ide Project's digital platform for impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-border/30">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Board of Directors</h2>
            <p className="text-foreground/60">Guiding our mission and impact</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Board member placeholder */}
            <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <div className="mb-6 aspect-square w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm font-medium">
                    Image placeholder
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Board Member Name
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    Board Position
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Coming soon. Board member information and bio will be added here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
