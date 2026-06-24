'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Search, FileText, Video, CheckCircle, X, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Guide {
  id: string
  title: string
  description: string
  category: string
  types: ('video' | 'pdf' | 'checklist' | 'article')[]
  duration: string
  image?: string
  slug?: string
  hasQA?: boolean
  question?: string
}

const categories = [
  'Financial Planning',
  'Job Search',
  'Housing',
  'Legal Rights',
  'Healthcare',
  'Daily Life',
  'Technology',
  'Mental Health',
]

const resourceTypes = [
  { id: 'video', label: 'Videos', icon: Video },
  { id: 'pdf', label: 'PDFs', icon: FileText },
  { id: 'checklist', label: 'Checklists', icon: CheckCircle },
  { id: 'article', label: 'Articles', icon: FileText },
]

const guides: Guide[] = [
  // Financial Planning (4)
  {
    id: '1',
    title: 'Opening Your First Bank Account',
    description: 'Step-by-step guide to opening a bank account with no credit history.',
    category: 'Financial Planning',
    types: ['video', 'pdf'],
    duration: '8 min video / 6 page guide',
    slug: 'opening-bank-account',
    hasQA: true,
    question: 'Do banks reject applications because of my criminal history?',
  },
  {
    id: '2',
    title: 'Building Credit from Zero',
    description: 'Learn how to start building credit after reentry.',
    category: 'Financial Planning',
    types: ['video', 'pdf'],
    duration: '10 min video / 8 page guide',
    slug: 'building-credit',
    hasQA: true,
    question: 'How long does it take to build a decent credit score?',
  },
  {
    id: '3',
    title: 'Budget Checklist for New Exonerees',
    description: 'Create your first monthly budget with this interactive checklist.',
    category: 'Financial Planning',
    types: ['video', 'pdf'],
    duration: '12 min video / 5 page guide',
    slug: 'budget-checklist',
    question: 'What percentage of my income should I save each month?',
  },
  {
    id: '4',
    title: 'Understanding Your Compensation Options',
    description: 'Navigate state and federal compensation programs.',
    category: 'Financial Planning',
    types: ['article'],
    duration: '10 min read',
    slug: 'compensation-options',
    question: 'Am I eligible for state compensation if I was wrongfully convicted?',
  },

  // Job Search (4)
  {
    id: '5',
    title: 'Writing Your First Resume',
    description: 'Resume tips specifically for job seekers with conviction history.',
    category: 'Job Search',
    types: ['video'],
    duration: '12 min',
    slug: 'writing-resume',
    hasQA: true,
    question: 'Should I mention my exoneration on my resume?',
  },
  {
    id: '6',
    title: 'Disclosure and Interview Guide',
    description: 'How to disclose your history in interviews.',
    category: 'Job Search',
    types: ['pdf'],
    duration: '8 pages',
    slug: 'disclosure-interview',
    question: 'What do I say when asked about my background in an interview?',
  },
  {
    id: '7',
    title: 'Job Interview Prep Checklist',
    description: 'Complete checklist for interview day readiness.',
    category: 'Job Search',
    types: ['checklist'],
    duration: '20 min',
    slug: 'interview-prep',
    question: 'How do I build confidence before my first interview?',
  },
  {
    id: '8',
    title: 'Finding Supportive Employers',
    description: 'Directory and guide to second chance employers.',
    category: 'Job Search',
    types: ['article'],
    duration: '15 min read',
    slug: 'supportive-employers',
    question: 'Which companies are known for hiring people with conviction histories?',
  },

  // Housing (4)
  {
    id: '9',
    title: 'Finding Affordable Housing in Dallas',
    description: 'Navigate the Dallas housing market on a budget.',
    category: 'Housing',
    types: ['video'],
    duration: '10 min',
    slug: 'affordable-housing-dallas',
    question: 'Can a landlord refuse to rent to me because of my conviction?',
  },
  {
    id: '10',
    title: 'Landlord and Tenant Rights',
    description: 'Know your rights as a tenant in Texas.',
    category: 'Housing',
    types: ['pdf'],
    duration: '14 pages',
    slug: 'tenant-rights',
    hasQA: true,
    question: 'What are my legal protections as a tenant in Texas?',
  },
  {
    id: '11',
    title: 'Apartment Application Checklist',
    description: 'Prepare all documents needed for housing applications.',
    category: 'Housing',
    types: ['checklist'],
    duration: '25 min',
    slug: 'apartment-application',
    question: 'What documents do I need to apply for an apartment?',
  },
  {
    id: '12',
    title: 'Avoiding Housing Scams',
    description: 'Red flags and how to protect yourself.',
    category: 'Housing',
    types: ['article'],
    duration: '8 min read',
    slug: 'housing-scams',
    question: 'How do I know if a housing listing is a scam?',
  },

  // Legal Rights (3)
  {
    id: '13',
    title: 'Your Rights After Exoneration',
    description: 'Legal rights and what you are entitled to.',
    category: 'Legal Rights',
    types: ['video'],
    duration: '15 min',
    slug: 'rights-after-exoneration',
    hasQA: true,
    question: 'What government benefits am I eligible for as an exoneree?',
  },
  {
    id: '14',
    title: 'Expungement and Record Sealing',
    description: 'Getting your record cleared in Texas.',
    category: 'Legal Rights',
    types: ['pdf'],
    duration: '11 pages',
    slug: 'expungement-records',
    question: 'Can I get my record expunged after exoneration?',
  },
  {
    id: '15',
    title: 'Legal Documents Checklist',
    description: 'Important documents to gather and organize.',
    category: 'Legal Rights',
    types: ['checklist'],
    duration: '20 min',
    slug: 'legal-documents',
    question: 'Which legal documents should I keep safe after exoneration?',
  },

  // Healthcare (3)
  {
    id: '16',
    title: 'Applying for Medicaid',
    description: 'Step-by-step Medicaid application guide.',
    category: 'Healthcare',
    types: ['video'],
    duration: '9 min',
    slug: 'applying-medicaid',
    hasQA: true,
    question: 'What documents do I need to apply for Medicaid in Texas?',
  },
  {
    id: '17',
    title: 'Mental Health Resources',
    description: 'Finding therapy and counseling services.',
    category: 'Healthcare',
    types: ['pdf'],
    duration: '10 pages',
    slug: 'mental-health-resources',
    question: 'Are mental health services free for exonerees?',
  },
  {
    id: '18',
    title: 'Health Insurance Checklist',
    description: 'Compare and choose health insurance plans.',
    category: 'Healthcare',
    types: ['checklist'],
    duration: '30 min',
    slug: 'health-insurance',
    question: 'What type of health insurance is best for someone starting out?',
  },

  // Daily Life (3)
  {
    id: '19',
    title: 'Getting Your Driver License',
    description: 'Texas DL renewal and how to get started.',
    category: 'Daily Life',
    types: ['video'],
    duration: '7 min',
    slug: 'driver-license',
    question: 'Do I need to disclose my conviction history to get a driver license?',
  },
  {
    id: '20',
    title: 'Opening Utility Accounts',
    description: 'Getting electricity, water, and internet set up.',
    category: 'Daily Life',
    types: ['pdf'],
    duration: '6 pages',
    slug: 'utility-accounts',
    question: 'Can utility companies deny service based on my record?',
  },
  {
    id: '21',
    title: 'First Week Essentials Checklist',
    description: 'Everything you need to do in your first week.',
    category: 'Daily Life',
    types: ['checklist'],
    duration: '45 min',
    slug: 'first-week-essentials',
    question: 'What are the most important things to do in the first week back?',
  },

  // Technology (2)
  {
    id: '22',
    title: 'Setting Up Email and Social Media',
    description: 'Creating accounts safely and securely.',
    category: 'Technology',
    types: ['video'],
    duration: '6 min',
    slug: 'email-social-media',
    question: 'How do I protect my privacy when using social media?',
  },
  {
    id: '23',
    title: 'Staying Safe Online',
    description: 'Privacy and security best practices.',
    category: 'Technology',
    types: ['article'],
    duration: '12 min read',
    slug: 'stay-safe-online',
    question: 'What should I avoid sharing on the internet?',
  },

  // Mental Health (2)
  {
    id: '24',
    title: 'Processing Trauma and Reentry',
    description: 'Guided resources for emotional wellness.',
    category: 'Mental Health',
    types: ['video'],
    duration: '20 min',
    slug: 'processing-trauma',
    question: 'How do I cope with the emotional challenges of reentry?',
  },
  {
    id: '25',
    title: 'Coping Strategies for Reentry',
    description: 'Practical tools for managing stress and anxiety.',
    category: 'Mental Health',
    types: ['pdf'],
    duration: '9 pages',
    slug: 'coping-strategies',
    question: 'What are effective coping strategies for anxiety?',
  },

  // Additional guides to reach 30
  {
    id: '26',
    title: 'Understanding Tax Returns',
    description: 'Filing taxes for the first time.',
    category: 'Financial Planning',
    types: ['video'],
    duration: '11 min',
    slug: 'understanding-taxes',
    question: 'Do I have to file taxes if I just started working?',
  },
  {
    id: '27',
    title: 'Networking for Job Success',
    description: 'Build professional relationships.',
    category: 'Job Search',
    types: ['article'],
    duration: '9 min read',
    slug: 'networking-job-success',
    question: 'How do I network professionally without disclosing my background?',
  },
  {
    id: '28',
    title: 'Roommate Agreement Template',
    description: 'Written agreement for living with roommates.',
    category: 'Housing',
    types: ['pdf'],
    duration: '4 pages',
    slug: 'roommate-agreement',
    question: 'How do I set boundaries with a new roommate?',
  },
  {
    id: '29',
    title: 'Family Reconnection Guide',
    description: 'Rebuilding relationships after reentry.',
    category: 'Mental Health',
    types: ['video'],
    duration: '18 min',
    slug: 'family-reconnection',
    question: 'How do I reconnect with family after being away?',
  },
  {
    id: '30',
    title: 'Transportation Options in Dallas',
    description: 'DART, rideshare, and other options.',
    category: 'Daily Life',
    types: ['article'],
    duration: '7 min read',
    slug: 'transportation-dallas',
    question: "What's the cheapest way to get around Dallas?",
  },
]

// Fuzzy match similarity score (0-1)
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase()
  const s2 = str2.toLowerCase()
  
  if (s1 === s2) return 1
  if (s1.includes(s2) || s2.includes(s1)) return 0.9
  
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

// Score a guide based on search query (fuzzy matching)
function scoreGuide(query: string, guide: Guide): number {
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 0)
  if (queryWords.length === 0) return 100 // No search term, include all guides
  
  let score = 0
  const titleWords = guide.title.toLowerCase().split(/\s+/)
  const descWords = guide.description.toLowerCase().split(/\s+/)
  
  for (const queryWord of queryWords) {
    if (titleWords.some(w => w === queryWord)) {
      score += 50
    } else if (titleWords.some(w => w.includes(queryWord) || queryWord.includes(w))) {
      score += 30
    } else if (titleWords.some(w => calculateSimilarity(w, queryWord) > 0.7)) {
      score += 20
    } else if (descWords.some(w => w === queryWord)) {
      score += 15
    } else if (descWords.some(w => w.includes(queryWord) || queryWord.includes(w))) {
      score += 10
    } else if (descWords.some(w => calculateSimilarity(w, queryWord) > 0.7)) {
      score += 5
    }
  }
  
  return score
}

function ResourceTypeIcon({ type }: { type: string }) {
  switch (type) {
    case 'video':
      return <Video className="size-4" />
    case 'pdf':
      return <FileText className="size-4" />
    case 'checklist':
      return <CheckCircle className="size-4" />
    default:
      return <FileText className="size-4" />
  }
}

function getTypeLabel(type: string) {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

export function GuidesHub({ initialSearch = '' }: { initialSearch?: string }) {
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [loadingGuideId, setLoadingGuideId] = useState<string | null>(null)

  // Reset loading state when component mounts (user navigates back)
  useEffect(() => {
    setLoadingGuideId(null)
  }, [])

  const filteredGuides = useMemo(() => {
    // Score all guides
    const scored = guides.map(guide => ({
      guide,
      score: scoreGuide(searchTerm, guide)
    }))
    
    // Filter and sort by score
    return scored
      .filter(item => {
        const matchesSearch = searchTerm.trim() === '' || item.score > 0
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(item.guide.category)
        const matchesType =
          selectedTypes.length === 0 ||
          selectedTypes.some((type) => item.guide.types.includes(type as any))
        
        return matchesSearch && matchesCategory && matchesType
      })
      .sort((a, b) => b.score - a.score)
      .map(item => item.guide)
  }, [searchTerm, selectedCategories, selectedTypes])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    )
  }

  const handleGuideClick = (guideId: string, href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setLoadingGuideId(guideId)
    // Small delay to show the loading state smoothly
    setTimeout(() => {
      window.location.href = href
    }, 300)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategories([])
    setSelectedTypes([])
  }

  const hasActiveFilters =
    searchTerm || selectedCategories.length > 0 || selectedTypes.length > 0

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl lg:max-w-4xl animate-fade-in-up">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Guides</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
            The Ide Project provides comprehensive reentry guides, tutorial videos, and checklists to help exonerees navigate reentry successfully. Learn at your own pace with resources covering financial literacy, employment support, housing assistance, legal rights, and more. Get expert guidance on exoneree reentry support from our curated collection of guides.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 animate-fade-in-up sticky top-0 md:static bg-background py-4 md:py-0 -mx-6 md:mx-0 px-6 md:px-0 z-40 md:z-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={(e) => {
                // Scroll input into view on mobile
                setTimeout(() => {
                  e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 100)
              }}
              className="w-full rounded-lg border border-border/60 bg-background py-3 md:py-4 pl-12 pr-4 text-base md:text-lg text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 min-h-[48px]"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6 animate-fade-in-up">
          {/* Category Filters */}
          <div>
            <h3 className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`rounded-full px-4 md:px-5 py-3 md:py-3 text-sm md:text-base font-medium transition-all active:scale-95 min-h-[44px] flex items-center justify-center ${
                    selectedCategories.includes(category)
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'border border-border/60 text-muted-foreground hover:border-accent/40 hover:bg-secondary/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filters */}
          <div>
            <h3 className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground">
              Resource Type
            </h3>
            <div className="flex flex-wrap gap-2">
              {resourceTypes.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => toggleType(id)}
                  className={`flex items-center gap-2 rounded-full px-4 md:px-5 py-3 md:py-3 text-sm md:text-base font-medium transition-all active:scale-95 min-h-[44px] justify-center ${
                    selectedTypes.includes(id)
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'border border-border/60 text-muted-foreground hover:border-accent/40 hover:bg-secondary/50'
                  }`}
                >
                  <Icon className="size-4 md:size-5" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div>
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm md:text-base font-medium text-accent hover:text-accent/80 transition-colors py-2"
              >
                <X className="size-4 md:size-5" />
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground lg:text-base">
          Showing {filteredGuides.length} of {guides.length} guides
        </div>

        {/* Guide Cards Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredGuides.map((guide, idx) => (
              <div
                key={guide.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                {guide.slug ? (
                  <a 
                    href={`/guides/${guide.slug}`} 
                    onClick={handleGuideClick(guide.id, `/guides/${guide.slug}`)}
                    className="block h-full"
                  >
                    <Card className={`group h-full border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer relative ${loadingGuideId === guide.id ? 'opacity-80' : ''}`}>
                      <CardContent className="flex h-full flex-col pt-6 lg:pt-8">
                        {loadingGuideId === guide.id && (
                          <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg z-10">
                            <div className="animate-spin">
                              <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.1" />
                                <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                        )}
                    {/* Type Badges and QA Badge */}
                    <div className="mb-4 flex flex-wrap gap-2 items-start">
                      <div className="flex flex-wrap gap-2 flex-1">
                        {guide.types.map((type) => (
                          <div key={type} className="flex items-center gap-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-accent/10 lg:size-8">
                              <ResourceTypeIcon type={type} />
                            </div>
                            <span className="inline-block rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent lg:text-sm">
                              {getTypeLabel(type)}
                            </span>
                          </div>
                        ))}
                      </div>
                      {guide.hasQA && (
                        <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 lg:text-sm">
                          <MessageCircle className="size-3 lg:size-4" />
                          <span>QA</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-serif text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors lg:text-xl">
                      {guide.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {guide.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider lg:text-sm">
                          {guide.category}
                        </span>
                        <span className="text-xs text-muted-foreground/60 lg:text-sm">
                          {guide.duration}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
                  </a>
                ) : (
                  <div className="block h-full cursor-default">
                    <Card className={`group h-full border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative ${loadingGuideId === guide.id ? 'opacity-80' : ''}`}>
                    <CardContent className="flex h-full flex-col pt-6 lg:pt-8">
                      {loadingGuideId === guide.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg z-10">
                          <div className="animate-spin">
                            <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.1" />
                              <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                      )}
                    {/* Type Badges and QA Badge */}
                    <div className="mb-4 flex flex-wrap gap-2 items-start">
                      <div className="flex flex-wrap gap-2 flex-1">
                        {guide.types.map((type) => (
                          <div key={type} className="flex items-center gap-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-accent/10 lg:size-8">
                              <ResourceTypeIcon type={type} />
                            </div>
                            <span className="inline-block rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent lg:text-sm">
                              {getTypeLabel(type)}
                            </span>
                          </div>
                        ))}
                      </div>
                      {guide.hasQA && (
                        <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 lg:text-sm">
                          <MessageCircle className="size-3 lg:size-4" />
                          <span>QA</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-serif text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors lg:text-xl">
                      {guide.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {guide.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider lg:text-sm">
                          {guide.category}
                        </span>
                        <span className="text-xs text-muted-foreground/60 lg:text-sm">
                          {guide.duration}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Card className="border-border/60">
            <CardContent className="py-12 text-center lg:py-16">
              <p className="text-lg text-muted-foreground lg:text-xl">
                No guides found matching your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                Try clearing filters
              </button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
