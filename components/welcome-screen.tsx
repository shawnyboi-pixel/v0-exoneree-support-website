'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HelpCircle, Users, Globe } from 'lucide-react'
import { setCookie } from '@/hooks/use-user-preference'

interface WelcomeScreenProps {
  onDismiss: () => void
}

export function WelcomeScreen({ onDismiss }: WelcomeScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const router = useRouter()

  const handleContinue = () => {
    if (!selectedOption) return

    setIsRedirecting(true)
    
    // Set preference in cookies BEFORE routing
    if (selectedOption === 'help') {
      setCookie('ide_user_preference', 'need-help')
      onDismiss()
    } else if (selectedOption === 'help-others') {
      setCookie('ide_user_preference', 'help-others')
      router.push('/help-others')
    } else if (selectedOption === 'explore') {
      setCookie('ide_user_preference', 'explore')
      router.push('/explore')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md animate-fade-in">
      <div className="mx-auto max-w-4xl px-6 py-8 animate-scale-up">
        <div className="rounded-2xl bg-background p-8 md:p-12 shadow-2xl border border-border/40">
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
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 active:scale-95 cursor-pointer ${
                selectedOption === 'help'
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-border/60 hover:border-primary/60 hover:bg-primary/5'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`flex size-16 items-center justify-center rounded-full transition-colors ${
                  selectedOption === 'help'
                    ? 'bg-primary/30'
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
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
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 active:scale-95 cursor-pointer ${
                selectedOption === 'help-others'
                  ? 'border-accent bg-accent/10 shadow-md'
                  : 'border-border/60 hover:border-accent/60 hover:bg-accent/5'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`flex size-16 items-center justify-center rounded-full transition-colors ${
                  selectedOption === 'help-others'
                    ? 'bg-accent/30'
                    : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
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
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 active:scale-95 cursor-pointer ${
                selectedOption === 'explore'
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-border/60 hover:border-primary/40 hover:bg-primary/5'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`flex size-16 items-center justify-center rounded-full transition-colors ${
                  selectedOption === 'explore'
                    ? 'bg-primary/30'
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
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
              onClick={handleContinue}
              disabled={!selectedOption || isRedirecting}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 active:scale-95 cursor-pointer ${
                selectedOption
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                  : 'bg-primary/50 text-primary-foreground/70 cursor-not-allowed'
              }`}
            >
              {isRedirecting ? 'Loading...' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
