'use client'

import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import { ArrowLeft, Loader2, Send, User as UserIcon } from 'lucide-react'
import Link from 'next/link'
import {
  getConversationDetail,
  markConversationRead,
  sendMessage,
} from '@/app/actions/messages'

type ConversationDetail = Awaited<ReturnType<typeof getConversationDetail>>

interface ChatThreadProps {
  conversationId: string
  currentUserId: string
  initialDetail: ConversationDetail
  onMessageSent?: () => void
}

function formatTime(date: Date | string) {
  const d = new Date(date)
  return d.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function ChatThread({
  conversationId,
  currentUserId,
  initialDetail,
  onMessageSent,
}: ChatThreadProps) {
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { data: detail, mutate } = useSWR(
    ['conversation-detail', conversationId],
    () => getConversationDetail(conversationId),
    {
      fallbackData: initialDetail,
      refreshInterval: 4000,
      revalidateOnFocus: true,
    }
  )

  const messages = detail?.messages ?? []
  const otherUser = detail?.otherUser ?? null

  useEffect(() => {
    markConversationRead(conversationId).catch(() => {})
  }, [conversationId])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [messages.length])

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    const body = draft.trim()
    if (!body || sending) return

    setSending(true)
    setError(null)
    setDraft('')

    try {
      await sendMessage(conversationId, body)
      await mutate()
      onMessageSent?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
      setDraft(body)
    } finally {
      setSending(false)
    }
  }

  const otherDisplayName =
    otherUser?.name || otherUser?.email.split('@')[0] || 'Member'

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      {/* Thread header */}
      <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
        <Link
          href="/messages"
          className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all duration-200 md:hidden"
          aria-label="Back to conversations"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-sm">
          <UserIcon className="size-4 text-accent-foreground" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {otherDisplayName}
          </p>
          {otherUser && (
            <p className="truncate text-xs text-muted-foreground">
              {otherUser.email}
            </p>
          )}
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No messages yet. Say hello to {otherDisplayName}.
          </p>
        ) : (
          messages.map((m) => {
            const isMine = m.senderId === currentUserId
            return (
              <div
                key={m.id}
                className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2.5 text-sm ${
                    isMine
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary/60 text-foreground'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words leading-relaxed">
                    {m.body}
                  </p>
                  <p
                    className={`mt-1 text-[10px] ${
                      isMine ? 'text-accent-foreground/70' : 'text-muted-foreground'
                    }`}
                  >
                    {formatTime(m.createdAt)}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>

      {error && (
        <div className="px-4 pb-1 text-sm text-destructive">{error}</div>
      )}

      {/* Composer */}
      <form
        onSubmit={handleSend}
        className="flex items-end gap-2 border-t border-border/60 px-4 py-3"
      >
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              !e.shiftKey &&
              !e.nativeEvent.isComposing &&
              e.keyCode !== 229
            ) {
              e.preventDefault()
              handleSend(e)
            }
          }}
          placeholder="Write a message..."
          rows={1}
          className="max-h-32 flex-1 resize-none rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/50 focus:border-accent"
        />
        <button
          type="submit"
          disabled={!draft.trim() || sending}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all duration-200 ease-out hover:bg-accent/85 hover:-translate-y-0.5 hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          {sending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </button>
      </form>
    </div>
  )
}
