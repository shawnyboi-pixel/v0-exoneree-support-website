'use client'

import { useRouter } from 'next/navigation'

interface Guide {
  id: string
  title: string
  description: string
  category: string
  path: string
}

const guides: Guide[] = [
  { id: '1', title: 'Opening Your First Bank Account', description: 'Step-by-step guide to opening a bank account with no credit history.', category: 'Financial Planning', path: '/guides/opening-bank-account' },
  { id: '2', title: 'Building Credit from Zero', description: 'Learn how to start building credit after reentry.', category: 'Financial Planning', path: '/guides/building-credit' },
  { id: '3', title: 'Budget Checklist for New Exonerees', description: 'Create your first monthly budget with this interactive checklist.', category: 'Financial Planning', path: '/guides/budget-checklist' },
  { id: '4', title: 'Understanding Your Compensation Options', description: 'Navigate state and federal compensation programs.', category: 'Financial Planning', path: '/guides/compensation-options' },
  { id: '5', title: 'Writing Your First Resume', description: 'Resume tips specifically for job seekers with conviction history.', category: 'Job Search', path: '/guides/interview-prep' },
  { id: '6', title: 'Disclosure and Interview Guide', description: 'How to disclose your history in interviews.', category: 'Job Search', path: '/guides/disclosure-interview' },
  { id: '7', title: 'Job Search Platforms and Resources', description: 'Find employers that hire individuals with conviction history.', category: 'Job Search', path: '/guides/interview-prep' },
  { id: '8', title: 'Navigating Housing Options', description: 'Resources for finding safe and affordable housing.', category: 'Housing', path: '/guides/affordable-housing-dallas' },
  { id: '9', title: 'Understanding Your Expungement Options', description: 'Learn about record expungement and sealing options.', category: 'Legal Rights', path: '/guides/expungement-records' },
  { id: '10', title: 'Healthcare Access Guide', description: 'Accessing healthcare services after reentry.', category: 'Healthcare', path: '/guides/health-insurance' },
  { id: '11', title: 'First Week Essentials', description: 'Everything you need to know for your first week home.', category: 'Getting Started', path: '/guides/first-week-essentials' },
  { id: '12', title: 'Coping Strategies for Reentry', description: 'Mental health resources and coping techniques.', category: 'Mental Health', path: '/guides/coping-strategies' },
]

export function HeroGuidesCarousel() {
  const router = useRouter()

  // Create an infinite loop by duplicating guides
  const infiniteGuides = [...guides, ...guides, ...guides]

  const handleCardClick = (path: string) => {
    router.push(path)
  }

  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes scroll-guides {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-${guides.length} * 140px));
          }
        }
        
        .guides-carousel {
          animation: scroll-guides 30s linear infinite;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      
      <div className="relative h-96 overflow-hidden rounded-2xl border-2 border-accent/20 bg-white/50 backdrop-blur-sm pointer-events-none">
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        {/* Carousel content */}
        <div className="guides-carousel">
          {infiniteGuides.map((guide, idx) => (
            <div
              key={`${guide.id}-${idx}`}
              onClick={() => handleCardClick(guide.path)}
              className="flex-shrink-0 h-36 px-4 py-3 cursor-pointer transition-all duration-300 hover:bg-accent/5 border-b border-accent/10 pointer-events-auto"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="inline-block mb-2 px-2 py-1 rounded-full bg-accent/15 text-xs font-semibold text-accent">
                    {guide.category}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight text-foreground mb-1 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-foreground/60 line-clamp-2">
                    {guide.description}
                  </p>
                </div>
                <div className="text-xs text-accent font-medium">Click to view →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
