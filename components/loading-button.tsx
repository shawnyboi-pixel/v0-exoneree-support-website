'use client'

import { ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingButtonProps {
  isLoading: boolean
  loadingText?: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  [key: string]: any
}

export function LoadingButton({
  isLoading,
  loadingText = 'Loading...',
  children,
  className = '',
  variant = 'primary',
  ...props
}: LoadingButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-out active:scale-95 active:duration-100'

  const variantClasses = {
    primary: 'bg-accent px-6 py-3.5 text-accent-foreground hover:bg-accent/85 hover:shadow-md hover:-translate-y-1 active:shadow-sm lg:px-8 lg:py-4',
    secondary: 'bg-slate-700 px-8 py-3 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-md active:shadow-sm transition-all duration-200 ease-out',
    outline: 'border-2 border-primary-foreground/40 px-6 py-3.5 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 hover:-translate-y-1 hover:shadow-md active:shadow-sm lg:px-8 lg:py-4'
  }

  return (
    <button
      disabled={isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${isLoading ? 'opacity-90' : ''} disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin lg:size-5" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}
