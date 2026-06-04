'use client'

import { useState } from 'react'
import { HelpCircle, Users, Globe } from 'lucide-react'

interface WelcomeScreenProps {
  onDismiss: () => void
}

export function WelcomeScreen({ onDismiss }: WelcomeScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm animate-fade-in">
      <div className="mx-auto max-w-4xl px-6 py-8 animate-scale-up">
        <div className="rounded-2xl bg-background p-8 md:p-12 shadow-xl border border-border/40">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to Ide Project
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              How can we help you today? Select one of the options below to get started.
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {/* Option 1 */}
            <button
              onClick={() => setSelectedOption('help')}
              className="group relative p-6 rounded-xl border-2 border-border/60 transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 active:scale-95"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <HelpCircle className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  I Need Help
                </h3>
                <p className="text-sm text-foreground/60">
                  Access resources, guides, and support to help with your reentry journey.
                </p>
              </div>
            </button>

            {/* Option 2 */}
            <button
              onClick={() => setSelectedOption('help-others')}
              className="group relative p-6 rounded-xl border-2 border-border/60 transition-all duration-300 hover:border-accent/60 hover:bg-accent/5 active:scale-95"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Users className="size-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  I Want to Help
                </h3>
                <p className="text-sm text-foreground/60">
                  Connect with organizations and support others on their reentry journey.
                </p>
              </div>
            </button>

            {/* Option 3 */}
            <button
              onClick={() => setSelectedOption('explore')}
              className="group relative p-6 rounded-xl border-2 border-border/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 active:scale-95"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Just Exploring
                </h3>
                <p className="text-sm text-foreground/60">
                  Learn more about our mission and the resources we provide.
                </p>
              </div>
            </button>
          </div>

          {/* Close Button */}
          <div className="text-center">
            <button
              onClick={onDismiss}
              className="px-6 py-2.5 rounded-lg bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:bg-primary hover:shadow-lg active:scale-95"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
