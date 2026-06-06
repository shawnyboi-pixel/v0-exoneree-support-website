'use client'

import { useState } from 'react'
import { ChevronDown, Briefcase, DollarSign, Users, Heart } from 'lucide-react'

const categories = [
  {
    id: 'lawyers',
    title: 'For Lawyers',
    icon: Briefcase,
    description: 'Connect with exonerees seeking legal guidance, participate in pro bono case reviews, contribute to innocence project initiatives, and help navigate post-conviction relief applications.',
    details: [
      'Pro bono legal consultations',
      'Case review and strategy',
      'Post-conviction relief guidance',
      'Innocence project collaboration',
      'Legal mentorship programs'
    ]
  },
  {
    id: 'finance',
    title: 'For Finance Professionals',
    icon: DollarSign,
    description: 'Provide financial planning assistance to exonerees, help secure grants and funding, manage fundraising campaigns for reentry support organizations, and advise on financial stability programs.',
    details: [
      'Financial planning services',
      'Grant and funding guidance',
      'Fundraising campaign management',
      'Financial stability programs',
      'Investment and savings advice'
    ]
  },
  {
    id: 'exonerees',
    title: 'For Exonerees',
    icon: Users,
    description: 'Share your reentry story to inspire others, mentor newly exonerated individuals, contribute your expertise to advocacy efforts, and participate in community leadership opportunities.',
    details: [
      'Peer mentorship programs',
      'Story sharing and advocacy',
      'Leadership development',
      'Community building',
      'Advocacy training'
    ]
  },
  {
    id: 'volunteers',
    title: 'For Volunteers',
    icon: Heart,
    description: 'Support day-to-day operations of partner organizations, assist with job training programs, help with housing navigation, provide mentorship and community support to exonerees rebuilding their lives.',
    details: [
      'Day-to-day operations support',
      'Job training assistance',
      'Housing navigation help',
      'Community mentorship',
      'Event coordination'
    ]
  }
]

export default function HelpOthersPage() {
  const [expandedId, setExpandedId] = useState<string | null>('lawyers')

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Make an Impact
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Choose your area of expertise and find meaningful ways to contribute.
          </p>
        </div>
      </div>

      {/* Sidebar Navigation with Expandable Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-1">
          {categories.map((category) => {
            const Icon = category.icon
            const isExpanded = expandedId === category.id

            return (
              <div
                key={category.id}
                className="rounded-lg bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Expandable Header */}
                <button
                  onClick={() => toggleExpand(category.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-slate-100 flex-shrink-0">
                      <Icon className="size-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {category.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-sm text-slate-600 mt-1 line-clamp-1">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`size-6 text-slate-700 flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-slate-200 px-6 py-6 bg-slate-50">
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                        What you can do:
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {category.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <div className="mt-1.5 size-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
