'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Calendar, MapPin, Clock } from 'lucide-react'

interface NewsArticle {
  id: string
  title: string
  description: string
  category: 'Policy' | 'Stories' | 'Incidents' | 'Organizations'
  date: string
  source?: string
  link?: string
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  organizer: string
  type: 'Workshop' | 'Conference' | 'Community Event' | 'Legal Clinic'
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'New State Compensation Bill Expands Benefits for Exonerees',
    description: 'Legislators pass landmark legislation increasing compensation to $50,000 per year of incarceration, plus additional support for housing and education.',
    category: 'Policy',
    date: 'March 15, 2024',
    source: 'State News',
  },
  {
    id: '2',
    title: 'Marcus Johnson Celebrates Freedom After 22 Years',
    description: 'After DNA evidence proved his innocence, Marcus is rebuilding his life with support from local reentry organizations and beginning a speaking tour.',
    category: 'Stories',
    date: 'March 10, 2024',
    source: 'Community Report',
  },
  {
    id: '3',
    title: 'Police Corruption Investigation Leads to Exonerations',
    description: 'A major investigation into detective misconduct has resulted in the exoneration of 12 individuals previously convicted based on coerced testimony.',
    category: 'Incidents',
    date: 'March 5, 2024',
    source: 'State Bar Association',
  },
  {
    id: '4',
    title: 'Legal Aid Organization Launches New Innocence Project',
    description: 'A coalition of law firms and nonprofits announce a new initiative to review cases and provide legal support to individuals claiming wrongful conviction.',
    category: 'Organizations',
    date: 'February 28, 2024',
    source: 'Legal Updates',
  },
  {
    id: '5',
    title: 'Tech Companies Partner on Job Training for Exonerees',
    description: 'Major technology firms launch a collaboration to provide free coding bootcamps and job placement assistance to exonerees entering the workforce.',
    category: 'Organizations',
    date: 'February 20, 2024',
    source: 'Business News',
  },
  {
    id: '6',
    title: 'Federal Appeals Court Overturns Conviction in Landmark Case',
    description: 'A federal court finds sufficient evidence of Brady violations, overturning a 15-year-old conviction and recommending immediate release.',
    category: 'Policy',
    date: 'February 15, 2024',
    source: 'Legal News',
  },
]

const upcomingEvents: Event[] = [
  {
    id: 'e1',
    title: 'Reentry Support Workshop',
    description: 'Learn about housing resources, financial planning, and employment opportunities. Expert panels and Q&A session included.',
    date: 'April 5, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Dallas Convention Center, Dallas, TX',
    organizer: 'The Ide Project',
    type: 'Workshop',
  },
  {
    id: 'e2',
    title: 'Legal Rights and Expungement Clinic',
    description: 'Free legal consultation on record expungement, restoration of rights, and navigating the legal system post-exoneration.',
    date: 'April 12, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'Community Justice Center, Houston, TX',
    organizer: 'Texas Innocence Project',
    type: 'Legal Clinic',
  },
  {
    id: 'e3',
    title: 'National Exoneree Conference',
    description: 'Annual conference bringing together exonerees, advocates, lawyers, and policymakers. Keynote speakers and networking opportunities.',
    date: 'May 10-12, 2024',
    time: 'All Day',
    location: 'San Antonio Convention Center, San Antonio, TX',
    organizer: 'National Association of Innocence Projects',
    type: 'Conference',
  },
  {
    id: 'e4',
    title: 'Community Dinner and Support Circle',
    description: 'Join our monthly community gathering for peer support, networking, and celebration of wins. Free dinner provided.',
    date: 'April 20, 2024',
    time: '6:00 PM - 8:30 PM',
    location: 'First Baptist Church Fellowship Hall, Dallas, TX',
    organizer: 'The Ide Project',
    type: 'Community Event',
  },
]

const categories = ['Policy', 'Stories', 'Incidents', 'Organizations'] as const
const eventTypes = ['Workshop', 'Conference', 'Community Event', 'Legal Clinic'] as const

export function NewsHub() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<typeof categories>([])
  const [selectedEventTypes, setSelectedEventTypes] = useState<typeof eventTypes>([])

  const toggleCategory = (category: typeof categories[number]) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const toggleEventType = (type: typeof eventTypes[number]) => {
    setSelectedEventTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(article.category)
    return matchesSearch && matchesCategory
  })

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedEventTypes.length === 0 || selectedEventTypes.includes(event.type)
    return matchesSearch && matchesType
  })

  return (
    <section className="min-h-screen bg-background py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">News & Events</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
            Stay informed about policy updates, exoneree success stories, incidents, and upcoming community events.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              placeholder="Search news and events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-border/60 bg-background py-3 md:py-4 pl-12 pr-4 text-base md:text-lg text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 min-h-[48px]"
            />
          </div>
        </div>

        {/* News Section */}
        <div className="mb-16 md:mb-24 border-b border-border/30 pb-16">
          {/* News Filters */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">News Categories</h3>
            <div className="flex flex-wrap gap-3">
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

          {/* News Title */}
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">Recent News</h2>

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group rounded-lg border border-border/40 bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {article.description}
                  </p>

                  {article.source && (
                    <p className="text-xs font-medium text-accent">Source: {article.source}</p>
                  )}
                </article>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-foreground/60">No news articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        {/* Events Section */}
        <div>
          {/* Events Filters */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Event Types</h3>
            <div className="flex flex-wrap gap-3">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleEventType(type)}
                  className={`rounded-full px-4 md:px-5 py-3 md:py-3 text-sm md:text-base font-medium transition-all active:scale-95 min-h-[44px] flex items-center justify-center ${
                    selectedEventTypes.includes(type)
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'border border-border/60 text-muted-foreground hover:border-accent/40 hover:bg-secondary/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Events Title */}
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">Upcoming Events</h2>

          {/* Events Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group rounded-lg border border-border/40 bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-foreground/70">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 border-t border-border/20 pt-4">
                    <div className="flex items-start gap-3 text-sm text-foreground/70">
                      <Calendar className="size-5 flex-shrink-0 text-accent" />
                      <div>
                        <div className="font-medium text-foreground">{event.date}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="size-4" />
                          {event.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-foreground/70">
                      <MapPin className="size-5 flex-shrink-0 text-accent" />
                      <div>
                        <div className="font-medium text-foreground">{event.location}</div>
                        <div className="text-xs mt-1">Organized by: {event.organizer}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-foreground/60">No events found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
