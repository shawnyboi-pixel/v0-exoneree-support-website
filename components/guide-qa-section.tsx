'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { MessageCircle, Send, ChevronDown, Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { UserAvatar } from '@/components/user-avatar'
import {
  getGuideQuestions,
  postGuideQuestion,
  postGuideAnswer,
  getCurrentCommenter,
} from '@/app/actions/comments'

interface GuideQASectionProps {
  guideTitle: string
  guideId: string
}

export function GuideQASection({ guideTitle, guideId }: GuideQASectionProps) {
  const { data: commenter } = useSWR('current-commenter', getCurrentCommenter)
  const {
    data: questions,
    isLoading,
    mutate,
  } = useSWR(['guide-questions', guideId], () => getGuideQuestions(guideId))

  const [newQuestion, setNewQuestion] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [isPosting, setIsPosting] = useState(false)
  const [isPostingAnswer, setIsPostingAnswer] = useState<Record<string, boolean>>({})
  const [newAnswers, setNewAnswers] = useState<Record<string, string>>({})

  const isSignedIn = Boolean(commenter)

  const handleAskQuestion = async () => {
    if (!newQuestion.trim()) return
    try {
      setIsPosting(true)
      await postGuideQuestion(guideId, guideTitle, newQuestion.trim())
      setNewQuestion('')
      setShowForm(false)
      await mutate()
    } catch (error) {
      console.error('[v0] Error posting question:', error)
    } finally {
      setIsPosting(false)
    }
  }

  const handlePostAnswer = async (questionId: string) => {
    const answerText = newAnswers[questionId]
    if (!answerText?.trim()) return
    try {
      setIsPostingAnswer((prev) => ({ ...prev, [questionId]: true }))
      await postGuideAnswer(guideId, questionId, answerText.trim())
      setNewAnswers((prev) => ({ ...prev, [questionId]: '' }))
      await mutate()
    } catch (error) {
      console.error('[v0] Error posting answer:', error)
    } finally {
      setIsPostingAnswer((prev) => ({ ...prev, [questionId]: false }))
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

      {/* Ask Question Form — signed-in users only */}
      {isSignedIn && (
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
                  onFocus={(e) => {
                    setTimeout(() => {
                      e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }, 100)
                  }}
                  placeholder="What would you like to know about this guide?"
                  className="w-full px-4 py-3 md:py-4 rounded-lg bg-background border border-border text-base md:text-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  rows={4}
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleAskQuestion}
                    disabled={!newQuestion.trim() || isPosting}
                    className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPosting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Post Question
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setShowForm(false)
                      setNewQuestion('')
                    }}
                    className="px-6 md:px-8 py-2 md:py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-accent" />
          </div>
        ) : !questions || questions.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
            <p className="text-lg text-foreground/60 font-medium">No questions yet</p>
            <p className="text-sm text-foreground/50">
              {isSignedIn
                ? 'Be the first to ask a question about this guide!'
                : 'Sign in to be the first to ask a question about this guide!'}
            </p>
          </div>
        ) : (
          questions.map((q) => (
            <Card key={q.id} className="border-border/60 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <button onClick={() => setExpandedId(expandedId === q.id ? null : q.id)} className="w-full text-left">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-grow">
                      <UserAvatar image={q.authorImage} name={q.authorName} className="size-9 mt-0.5" iconClassName="size-4" />
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground">{q.authorName}</span>
                          <span className="text-xs text-foreground/50">
                            • {new Date(q.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-3">{q.question}</p>
                        <div className="flex items-center gap-4 text-sm text-foreground/60">
                          <span className="inline-flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {q.answers?.length || 0} {(q.answers?.length || 0) === 1 ? 'reply' : 'replies'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground/50 transition-transform flex-shrink-0 ${
                        expandedId === q.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded View - Answers */}
                {expandedId === q.id && (
                  <div className="mt-6 pt-6 border-t border-border/30 space-y-4">
                    {/* Display Answers */}
                    {q.answers && q.answers.length > 0 ? (
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-foreground">Answers</h4>
                        {q.answers.map((answer) => (
                          <div key={answer.id} className="bg-secondary/50 rounded-lg p-4 flex gap-3">
                            <UserAvatar image={answer.authorImage} name={answer.authorName} className="size-7" iconClassName="size-3.5" />
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-sm text-foreground">{answer.authorName}</span>
                                <span className="text-xs text-foreground/50">
                                  {new Date(answer.createdAt).toLocaleString()}
                                </span>
                              </div>
                              <p className="text-foreground text-sm leading-relaxed">{answer.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {/* Answer Form — signed-in users only */}
                    {isSignedIn && (
                      <div className="space-y-3 pt-4 border-t border-border/30">
                        <h4 className="font-semibold text-foreground text-sm">Post an Answer</h4>
                        <textarea
                          value={newAnswers[q.id] || ''}
                          onChange={(e) => setNewAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                          onFocus={(e) => {
                            setTimeout(() => {
                              e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }, 100)
                          }}
                          placeholder="Share your knowledge and help the community..."
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm md:text-base text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                          rows={3}
                        />
                        <button
                          onClick={() => handlePostAnswer(q.id)}
                          disabled={!newAnswers[q.id]?.trim() || isPostingAnswer[q.id]}
                          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isPostingAnswer[q.id] ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Posting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Post Answer
                            </>
                          )}
                        </button>
                      </div>
                    )}
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
          <strong>Community Guidelines:</strong> Be respectful, share your personal experience, and remember
          we&apos;re all here to support each other.
        </p>
      </div>
    </section>
  )
}
