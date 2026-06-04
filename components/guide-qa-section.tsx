'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Send, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Question {
  id: string
  author: string
  question: string
  replies: number
  timestamp: string
}

interface GuideQASectionProps {
  guideTitle: string
  guideId: string
}

export function GuideQASection({ guideTitle, guideId }: GuideQASectionProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [newQuestion, setNewQuestion] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load questions from localStorage on mount
  useEffect(() => {
    const storageKey = `qa-${guideId}`
    const savedQuestions = localStorage.getItem(storageKey)
    if (savedQuestions) {
      try {
        setQuestions(JSON.parse(savedQuestions))
      } catch (err) {
        console.error('[v0] Failed to load questions:', err)
      }
    }
    setIsLoaded(true)
  }, [guideId])

  // Save questions to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      const storageKey = `qa-${guideId}`
      localStorage.setItem(storageKey, JSON.stringify(questions))
    }
  }, [questions, guideId, isLoaded])

  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      const question: Question = {
        id: String(Date.now()),
        author: 'Community Member',
        question: newQuestion,
        replies: 0,
        timestamp: 'just now',
      }
      setQuestions([question, ...questions])
      setNewQuestion('')
      setShowForm(false)
    }
  }

  return (
    <section className="mt-16 pt-12 border-t border-border/60">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <MessageCircle className="w-8 h-8 text-accent" />
          Questions & Answers
        </h2>
        <p className="text-lg text-foreground/70">
          Ask questions, share experiences, and help others in the community
        </p>
      </div>

      {/* Ask Question Form */}
      <Card className="border-border/60 mb-8 bg-secondary/30">
        <CardContent className="pt-6">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full px-4 py-3 rounded-lg border-2 border-border/40 text-left text-foreground/70 hover:bg-secondary/50 hover:text-foreground transition-colors"
            >
              Ask a question about this guide...
            </button>
          ) : (
            <div className="space-y-4">
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="What would you like to know about this guide?"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                rows={4}
              />
              <div className="flex gap-3">
                <button
                  onClick={handleAskQuestion}
                  disabled={!newQuestion.trim()}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  Post Question
                </button>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setNewQuestion('')
                  }}
                  className="px-6 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
            <p className="text-lg text-foreground/60 font-medium">No questions yet</p>
            <p className="text-sm text-foreground/50">Be the first to ask a question about this guide!</p>
          </div>
        ) : (
          questions.map((q) => (
            <Card key={q.id} className="border-border/60 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <button
                  onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-foreground">{q.author}</span>
                        <span className="text-xs text-foreground/50">• {q.timestamp}</span>
                      </div>
                      <p className="text-lg font-medium text-foreground mb-3">{q.question}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <span className="inline-flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {q.replies} {q.replies === 1 ? 'reply' : 'replies'}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground/50 transition-transform ${
                        expandedId === q.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded View */}
                {expandedId === q.id && (
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-foreground/70">
                        This Q&A feature is coming soon! You&apos;ll be able to see replies and join the discussion here.
                      </p>
                    </div>
                    <button className="text-accent hover:text-accent/80 font-medium text-sm">
                      View all {q.replies} replies →
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Help Text */}
      <div className="mt-8 p-6 bg-secondary/30 rounded-lg border border-border/30">
        <p className="text-sm text-foreground/70">
          <strong>Community Guidelines:</strong> Be respectful, share your personal experience, and remember we&apos;re all here to support each other. Questions are anonymous unless you choose otherwise.
        </p>
      </div>
    </section>
  )
}
