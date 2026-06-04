'use client'

import { useUserPreference } from '@/hooks/use-user-preference'
import { RotateCcw } from 'lucide-react'

export function UserPreferenceReset() {
  const { preference, resetAll } = useUserPreference()

  if (!preference) return null

  const handleReset = () => {
    if (confirm('Reset your preference? You will see the welcome screen again.')) {
      resetAll()
      window.location.reload()
    }
  }

  return (
    <button
      onClick={handleReset}
      className="inline-flex items-center gap-2 px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
      title="Reset your preference"
    >
      <RotateCcw className="size-4" />
      <span className="hidden sm:inline">Reset</span>
    </button>
  )
}
