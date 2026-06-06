'use client'

import { useState } from 'react'
import { Briefcase, DollarSign, Users, Heart } from 'lucide-react'

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
  const [selectedId, setSelectedId] = useState<string>('lawyers')
  const selectedCategory = categories.find(c => c.id === selectedId)
  const Icon = selectedCategory ? selectedCategory.icon : Briefcase

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      {/* Sidebar + Content Layout */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-2 sticky top-24">
              {categories.map((category) => {
                const CategoryIcon = category.icon
                const isSelected = selectedId === category.id

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedId(category.id)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-300 cursor-pointer relative ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md border-r-4 border-r-blue-300'
                        : 'bg-blue-100 text-blue-900 border border-blue-200 hover:border-blue-300 hover:bg-blue-150'
                    }`}
                  >
                    <CategoryIcon className="size-5 flex-shrink-0" />
                    <span className="font-medium text-sm">{category.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedCategory && (
              <div className="animate-fade-in rounded-lg bg-blue-50 border border-blue-200 shadow-sm p-8 md:p-10 relative border-l-4 border-l-blue-500">
                {/* Content Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                    <Icon className="size-7 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-blue-900">
                      {selectedCategory.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-blue-800 mb-8 leading-relaxed">
                  {selectedCategory.description}
                </p>

                {/* Details Grid */}
                <div className="mb-10">
                  <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-4">
                    What you can do:
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCategory.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-lg bg-blue-100 p-4 border border-blue-200"
                      >
                        <div className="mt-1.5 size-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-blue-800">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer/Disclaimer Section */}
      <div className="border-t border-blue-700 bg-blue-950/50 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-center text-sm text-blue-100">
            Join our mission to support exonerees on their reentry journey. Together, we&apos;re building a more just society.
          </p>
        </div>
      </div>
    </section>
  )
}
