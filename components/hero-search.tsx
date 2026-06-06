'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

interface Guide {
  id: string
  title: string
  description: string
  category: string
}

const guides: Guide[] = [
  { id: '1', title: 'Opening Your First Bank Account', description: 'Step-by-step guide to opening a bank account with no credit history.', category: 'Financial Planning' },
  { id: '2', title: 'Building Credit from Zero', description: 'Learn how to start building credit after reentry.', category: 'Financial Planning' },
  { id: '3', title: 'Budget Checklist for New Exonerees', description: 'Create your first monthly budget with this interactive checklist.', category: 'Financial Planning' },
  { id: '4', title: 'Understanding Your Compensation Options', description: 'Navigate state and federal compensation programs.', category: 'Financial Planning' },
  { id: '5', title: 'Writing Your First Resume', description: 'Resume tips specifically for job seekers with conviction history.', category: 'Job Search' },
  { id: '6', title: 'Disclosure and Interview Guide', description: 'How to disclose your history in interviews.', category: 'Job Search' },
  { id: '7', title: 'Job Search Platforms and Resources', description: 'Find employers that hire individuals with conviction history.', category: 'Job Search' },
  { id: '8', title: 'Navigating Housing Options', description: 'Resources for finding safe and affordable housing.', category: 'Housing' },
  { id: '9', title: 'Understanding Your Expungement Options', description: 'Learn about record expungement and sealing options.', category: 'Legal Rights' },
  { id: '10', title: 'Healthcare Access Guide', description: 'Accessing healthcare services after reentry.', category: 'Healthcare' },
]

export function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const filteredGuides = useMemo(() => {
    if (!searchTerm.trim()) return []
    return guides.filter((guide) =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5)
  }, [searchTerm])

  return (
    <div className="relative w-full max-w-2xl animate-fade-in-up">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary-foreground/60" />
        <input
          type="text"
          placeholder="Search guides, resources, topics..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-3.5 pl-12 text-primary-foreground placeholder-primary-foreground/50 transition-all duration-300 backdrop-blur-sm focus:border-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 lg:py-4 lg:text-lg"
        />
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (searchTerm.trim() || filteredGuides.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-background border border-border/60 shadow-xl z-50 overflow-hidden">
          {filteredGuides.length > 0 ? (
            <>
              <div className="max-h-96 overflow-y-auto">
                {filteredGuides.map((guide) => (
                  <Link
                    key={guide.id}
                    href="/guides"
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-border/30 px-4 py-3 hover:bg-secondary/50 transition-colors last:border-b-0"
                  >
                    <p className="font-medium text-foreground text-sm">{guide.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{guide.category}</p>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-3 bg-secondary/30 border-t border-border/30">
                <Link
                  href="/guides"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  View all guides →
                </Link>
              </div>
            </>
          ) : searchTerm.trim() ? (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-muted-foreground">No guides found for "{searchTerm}"</p>
              <Link
                href="/guides"
                onClick={() => setIsOpen(false)}
                className="text-xs font-medium text-accent hover:underline mt-2 inline-block"
              >
                Browse all guides →
              </Link>
            </div>
          ) : null}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
