'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Question {
  id: string
  author: string
  question: string
  replies: number
  timestamp: string
}

interface CardQASectionProps {
  cardId: string
  cardTitle: string
  sampleQuestions: Question[]
}

export function CardQASection({
  cardId,
  cardTitle,
  sampleQuestions,
}: CardQASectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAskingQuestion, setIsAskingQuestion] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')
  const [questions, setQuestions] = useState<Question[]>(sampleQuestions)

  const handleAskQuestion = () => {
    if (newQuestion.trim()) {
      const question: Question = {
        id: Date.now().toString(),
        author: 'You',
        question: newQuestion,
        replies: 0,
        timestamp: 'just now',
      }
      setQuestions([question, ...questions])
      setNewQuestion('')
      setIsAskingQuestion(false)
    }
  }

  return (
    <div className="mb-4 rounded-lg bg-accent/5 border border-accent/20">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-accent/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="size-4 text-accent" />
          <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
            Q&A ({questions.length})
          </span>
        </div>
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-accent/20 p-3 space-y-3">
          {/* Ask Question Form */}
          {!isAskingQuestion ? (
            <button
              onClick={() => setIsAskingQuestion(true)}
              className="w-full text-left text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              + Ask a Question
            </button>
          ) : (
            <div className="space-y-2 pb-2 border-b border-accent/10">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Ask a question about this guide..."
                className="w-full bg-secondary border border-border rounded px-2 py-1.5 text-sm placeholder:text-muted-foreground text-foreground focus:outline-none focus:border-accent"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAskQuestion()
                  }
                }}
              />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => {
                    setIsAskingQuestion(false)
                    setNewQuestion('')
                  }}
                  className="text-xs px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAskQuestion}
                  disabled={!newQuestion.trim()}
                  className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded hover:bg-accent/90 disabled:opacity-50 transition-colors flex items-center gap-1"
                >
                  <Send className="size-3" />
                  Post
                </button>
              </div>
            </div>
          )}

          {/* Questions List */}
          <div className="space-y-2">
            {questions.slice(0, 3).map((q) => (
              <div key={q.id} className="p-2 rounded bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-pointer">
                <p className="text-xs font-semibold text-foreground mb-1">
                  {q.question}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{q.author}</span>
                  <span className="text-xs text-muted-foreground/60">
                    {q.replies} {q.replies === 1 ? 'reply' : 'replies'} · {q.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          {questions.length > 3 && (
            <button className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors">
              View all {questions.length} questions
            </button>
          )}
        </div>
      )}
    </div>
  )
}
