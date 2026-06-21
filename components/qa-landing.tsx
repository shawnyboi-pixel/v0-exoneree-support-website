'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Question {
  id: string
  name: string
  email: string
  question: string
  category: string
  timestamp: string
}

const categories = [
  'Financial & Banking',
  'Housing & Shelter',
  'Employment & Jobs',
  'Healthcare & Insurance',
  'Legal & Expungement',
  'Family & Relationships',
  'Mental Health',
  'Other',
]

export function QALanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    category: 'Other',
  })
  const [submitted, setSubmitted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      name: 'Marcus J.',
      email: 'marcus@example.com',
      question: 'How do I start rebuilding my credit after exoneration?',
      category: 'Financial & Banking',
      timestamp: '2 days ago',
    },
    {
      id: '2',
      name: 'Sarah M.',
      email: 'sarah@example.com',
      question: 'What are my options for finding stable housing in Texas?',
      category: 'Housing & Shelter',
      timestamp: '1 week ago',
    },
    {
      id: '3',
      name: 'James T.',
      email: 'james@example.com',
      question: 'Do employers have to hire people with conviction records?',
      category: 'Employment & Jobs',
      timestamp: '1 week ago',
    },
  ])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.question && formData.category) {
      const newQuestion: Question = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        question: formData.question,
        category: formData.category,
        timestamp: 'just now',
      }
      setQuestions((prev) => [newQuestion, ...prev])
      setFormData({ name: '', email: '', question: '', category: 'Other' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="border-b border-border/60 bg-background px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 lg:size-14">
              <Mail className="size-6 text-accent lg:size-7" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                Ask Your Question
              </h1>
              <p className="text-sm text-muted-foreground lg:text-base">
                Submit questions about your reentry journey
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Have questions about reentry? Submit your question below and join our community of people
            navigating reentry with The Ide Project. Your question helps us understand what matters most to you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-border/60">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground lg:text-base">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="mt-2 w-full rounded-lg border border-border/40 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent lg:px-5 lg:py-3"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground lg:text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-2 w-full rounded-lg border border-border/40 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent lg:px-5 lg:py-3"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground lg:text-base">
                      Question Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-border/40 bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent lg:px-5 lg:py-3"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Question */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground lg:text-base">
                      Your Question
                    </label>
                    <textarea
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder="Ask your question here..."
                      rows={5}
                      className="mt-2 w-full rounded-lg border border-border/40 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent lg:px-5 lg:py-3"
                      required
                    />
                    <p className="mt-2 text-xs text-muted-foreground lg:text-sm">
                      Be as detailed as possible to help us understand your question better.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 active:scale-95 lg:py-4 lg:text-base"
                  >
                    <Send className="size-4 lg:size-5" />
                    Submit Question
                  </button>

                  {/* Success Message */}
                  {submitted && (
                    <div className="flex items-center gap-3 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 lg:px-5 lg:py-4 lg:text-base">
                      <CheckCircle className="size-5 flex-shrink-0 lg:size-6" />
                      <span>Thank you! Your question has been submitted.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <Card className="border-border/60 bg-card">
              <CardContent className="pt-8">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-accent lg:text-5xl">
                      {questions.length}
                    </div>
                    <p className="mt-2 text-sm font-medium text-muted-foreground lg:text-base">
                      Questions Asked
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground lg:text-4xl">
                      {categories.length}
                    </div>
                    <p className="mt-2 text-sm font-medium text-muted-foreground lg:text-base">
                      Topic Categories
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:text-sm">
                      Get Involved
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
                      Your question helps our community understand what matters most in the reentry journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Recent Questions Section */}
      <section className="border-t border-border/60 bg-secondary/30 px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Recent Questions
            </h2>
            <p className="mt-3 text-muted-foreground lg:text-lg">
              See what others in our community are asking about
            </p>
          </div>

          <div className="space-y-4">
            {questions.map((q) => (
              <Card key={q.id} className="border-border/40 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground lg:text-lg">{q.name}</h3>
                      <p className="text-xs text-muted-foreground lg:text-sm">{q.timestamp}</p>
                    </div>
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent lg:text-sm">
                      {q.category}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {q.question}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
