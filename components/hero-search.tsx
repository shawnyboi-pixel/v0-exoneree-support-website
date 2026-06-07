'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

// Fuzzy match similarity score (0-1)
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase()
  const s2 = str2.toLowerCase()
  
  // Exact match
  if (s1 === s2) return 1
  
  // One contains the other
  if (s1.includes(s2) || s2.includes(s1)) return 0.9
  
  // Levenshtein-like distance for fuzzy matching
  const longer = s1.length > s2.length ? s1 : s2
  const shorter = s1.length > s2.length ? s2 : s1
  
  if (longer.length === 0) return 1
  
  const editDistance = getEditDistance(shorter, longer)
  return 1 - editDistance / longer.length
}

// Calculate edit distance (Levenshtein distance)
function getEditDistance(s1: string, s2: string): number {
  const costs = []
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j
      } else if (j > 0) {
        let newValue = costs[j - 1]
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
        }
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) costs[s2.length] = lastValue
  }
  return costs[s2.length]
}

// Score a guide based on search query
function scoreGuide(query: string, guide: Guide): number {
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 0)
  if (queryWords.length === 0) return 0
  
  let score = 0
  const titleWords = guide.title.toLowerCase().split(/\s+/)
  const descWords = guide.description.toLowerCase().split(/\s+/)
  const allText = `${guide.title} ${guide.description}`.toLowerCase()
  
  // Match against each query word
  for (const queryWord of queryWords) {
    // Exact word match in title (highest score)
    if (titleWords.some(w => w === queryWord)) {
      score += 50
    }
    // Partial word match in title
    else if (titleWords.some(w => w.includes(queryWord) || queryWord.includes(w))) {
      score += 30
    }
    // Fuzzy match in title
    else if (titleWords.some(w => calculateSimilarity(w, queryWord) > 0.7)) {
      score += 20
    }
    // Exact word match in description
    else if (descWords.some(w => w === queryWord)) {
      score += 15
    }
    // Partial word match in description
    else if (descWords.some(w => w.includes(queryWord) || queryWord.includes(w))) {
      score += 10
    }
    // Fuzzy match in description
    else if (descWords.some(w => calculateSimilarity(w, queryWord) > 0.7)) {
      score += 5
    }
  }
  
  return score
}

export function HeroSearch() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0, above: false })
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredGuides = useMemo(() => {
    if (!searchTerm.trim()) return []
    
    // Score all guides and filter by score
    const scored = guides.map(guide => ({
      guide,
      score: scoreGuide(searchTerm, guide)
    }))
    
    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(item => item.guide)
  }, [searchTerm])

  const handleSearch = useCallback((query: string) => {
    if (query.trim()) {
      setIsLoading(true)
      router.push(`/guides?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
      setSearchTerm('')
      // Reset loading state after a short delay in case navigation fails
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }, [router])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm)
    }
  }

  useEffect(() => {
    // Reset loading state when component mounts (in case user navigates back)
    setIsLoading(false)
  }, [])

  const updateDropdownPosition = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()

      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
        above: false,
      })
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition()
      window.addEventListener('scroll', updateDropdownPosition)
      window.addEventListener('resize', updateDropdownPosition)

      return () => {
        window.removeEventListener('scroll', updateDropdownPosition)
        window.removeEventListener('resize', updateDropdownPosition)
      }
    }
  }, [isOpen, updateDropdownPosition])

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl animate-fade-in-up mt-12">
      {/* Search Bar Container with Shadow and Gradient */}
      <div className="relative rounded-2xl shadow-2xl overflow-visible">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-5 rounded-2xl" />
        
        {/* Input Container */}
        <div className="relative bg-white/85 backdrop-blur-lg border-2 border-accent/40 rounded-2xl p-1">
          <div className="flex items-center gap-4 px-6 py-4 lg:px-8 lg:py-5">
            {isLoading ? (
              <div className="size-6 flex-shrink-0 flex items-center justify-center">
                <div className="animate-spin">
                  <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.1" />
                    <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <Search className="size-6 text-accent flex-shrink-0" />
            )}
            <input
              type="text"
              placeholder="Search guides, resources, topics..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setIsOpen(true)
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="w-full text-lg lg:text-xl font-medium text-slate-900 placeholder-slate-500 bg-transparent outline-none disabled:opacity-70 select-text"
            />
          </div>
        </div>
      </div>

      {/* Search Results Dropdown - Fixed Position */}
      {isOpen && !isLoading && (searchTerm.trim() || filteredGuides.length > 0) && (
        <div
          className="fixed rounded-xl bg-white/95 backdrop-blur-md border-2 border-accent/20 shadow-2xl z-50 overflow-hidden"
          style={{
            top: `${dropdownPos.top}px`,
            left: `${dropdownPos.left}px`,
            width: `${dropdownPos.width}px`,
          }}
        >
          {filteredGuides.length > 0 ? (
            <>
              <div className="max-h-80 overflow-y-auto">
                {filteredGuides.map((guide, idx) => (
                  <button
                    key={guide.id}
                    onClick={() => handleSearch(searchTerm)}
                    className={`w-full text-left px-6 py-4 hover:bg-accent/5 transition-colors ${idx !== filteredGuides.length - 1 ? 'border-b border-accent/10' : ''}`}
                  >
                    <p className="font-semibold text-slate-900">{guide.title}</p>
                    <p className="text-sm text-accent font-medium mt-1">{guide.category}</p>
                    <p className="text-sm text-slate-600 mt-2">{guide.description}</p>
                  </button>
                ))}
              </div>
              <div className="px-6 py-4 bg-accent/5 border-t-2 border-accent/10">
                <button
                  onClick={() => handleSearch(searchTerm)}
                  className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  View all results →
                </button>
              </div>
            </>
          ) : searchTerm.trim() ? (
            <div className="px-6 py-8 text-center">
              <p className="text-slate-600 font-medium">No guides found for "{searchTerm}"</p>
              <button
                onClick={() => handleSearch(searchTerm)}
                className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors mt-3 inline-block"
              >
                See all guides →
              </button>
            </div>
          ) : null}
        </div>
      )}

      {isOpen && !isLoading && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
