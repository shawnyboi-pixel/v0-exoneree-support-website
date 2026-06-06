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
    <div className="relative w-full max-w-4xl animate-fade-in-up mt-12">
      {/* Search Bar Container with Shadow and Gradient */}
      <div className="relative rounded-2xl shadow-2xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-5" />
        
        {/* Input Container */}
        <div className="relative bg-white/85 backdrop-blur-lg border-2 border-accent/40 rounded-2xl p-1">
          <div className="flex items-center gap-4 px-6 py-4 lg:px-8 lg:py-5">
            <Search className="size-6 text-accent flex-shrink-0" />
            <input
              type="text"
              placeholder="Search guides, resources, topics..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setIsOpen(true)
              }}
              onFocus={() => setIsOpen(true)}
              className="w-full text-lg lg:text-xl font-medium text-slate-900 placeholder-slate-500 bg-transparent outline-none"
            />
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (searchTerm.trim() || filteredGuides.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-4 rounded-xl bg-white/90 border-2 border-accent/20 shadow-2xl z-50 overflow-hidden">
          {filteredGuides.length > 0 ? (
            <>
              <div className="max-h-80 overflow-y-auto">
                {filteredGuides.map((guide, idx) => (
                  <Link
                    key={guide.id}
                    href="/guides"
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-4 hover:bg-accent/5 transition-colors ${idx !== filteredGuides.length - 1 ? 'border-b border-accent/10' : ''}`}
                  >
                    <p className="font-semibold text-slate-900">{guide.title}</p>
                    <p className="text-sm text-accent font-medium mt-1">{guide.category}</p>
                    <p className="text-sm text-slate-600 mt-2">{guide.description}</p>
                  </Link>
                ))}
              </div>
              <div className="px-6 py-4 bg-accent/5 border-t-2 border-accent/10">
                <Link
                  href="/guides"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  View all guides →
                </Link>
              </div>
            </>
          ) : searchTerm.trim() ? (
            <div className="px-6 py-8 text-center">
              <p className="text-slate-600 font-medium">No guides found for "{searchTerm}"</p>
              <Link
                href="/guides"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors mt-3 inline-block"
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
