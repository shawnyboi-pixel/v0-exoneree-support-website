'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { MessageSquarePlus, MessagesSquare, User as UserIcon } from 'lucide-react'
import Link from 'next/link'
import {
  getConversationDetail,
  getConversations,
  type ConversationSummary,
} from '@/app/actions/messages'
import { NewChatDialog } from './new-chat-dialog'
import { ChatThread } from './chat-thread'

type DirectoryUser = {
  id: string
  name: string | null
  email: string
  image: string | null
}

type ConversationDetail = Awaited<ReturnType<typeof getConversationDetail>>

interface MessagesInboxProps {
  currentUserId: string
  initialConversations: ConversationSummary[]
  directory: DirectoryUser[]
  activeConversationId?: string
  initialDetail?: ConversationDetail
}

function formatRelativeTime(date: Date | string) {
  const d = new Date(date)
  const diffMs = Date.now() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  if (diffMin < 1) return 'now'
  if (diffMin < 60) return `${diffMin}m`
  const diffHr = Math.floor(diffMin / 60)
  if (diffHr < 24) return `${diffHr}h`
  const diffDay = Math.floor(diffHr / 24)
  if (diffDay < 7) return `${diffDay}d`
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export function MessagesInbox({
  currentUserId,
  initialConversations,
  directory,
  activeConversationId,
  initialDetail,
}: MessagesInboxProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  const { data: conversations, mutate } = useSWR(
    'conversations',
    () => getConversations(),
    {
      fallbackData: initialConversations,
      refreshInterval: 6000,
      revalidateOnFocus: true,
    }
  )

  const list = conversations ?? []

  return (
    <div className="mx-auto flex h-[calc(100vh-73px)] max-w-6xl">
      {/* Conversation list */}
      <aside
        className={`w-full shrink-0 border-r border-border/60 md:w-80 ${
          activeConversationId ? 'hidden md:flex' : 'flex'
        } flex-col`}
      >
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-4">
          <h1 className="text-lg font-bold text-foreground">Messages</h1>
          <button
            onClick={() => setDialogOpen(true)}
            className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-all duration-200 ease-out hover:bg-accent/85 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
          >
            <MessageSquarePlus className="size-4" />
            Start a new chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {list.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
              <MessagesSquare className="size-10 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No conversations yet. Start a new chat to message another
                member.
              </p>
            </div>
          ) : (
            list.map((c) => {
              const displayName =
                c.otherUser.name || c.otherUser.email.split('@')[0]
              const isActive = c.id === activeConversationId
              return (
                <Link
                  key={c.id}
                  href={`/messages/${c.id}`}
                  className={`flex items-center gap-3 border-b border-border/30 px-4 py-3 transition-all duration-200 ease-out hover:bg-secondary/50 ${
                    isActive ? 'bg-secondary/60' : ''
                  }`}
                >
                  <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-sm">
                    <UserIcon className="size-4 text-accent-foreground" />
                    {c.unreadCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                        {c.unreadCount > 9 ? '9+' : c.unreadCount}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`truncate text-sm ${
                          c.unreadCount > 0
                            ? 'font-bold text-foreground'
                            : 'font-semibold text-foreground'
                        }`}
                      >
                        {displayName}
                      </p>
                      {c.lastMessage && (
                        <span className="shrink-0 text-[11px] text-muted-foreground">
                          {formatRelativeTime(c.lastMessage.createdAt)}
                        </span>
                      )}
                    </div>
                    <p
                      className={`truncate text-xs ${
                        c.unreadCount > 0
                          ? 'font-medium text-foreground/80'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {c.lastMessage
                        ? `${c.lastMessage.senderId === currentUserId ? 'You: ' : ''}${c.lastMessage.body}`
                        : 'No messages yet'}
                    </p>
                  </div>
                </Link>
              )
            })
          )}
        </div>
      </aside>

      {/* Active thread */}
      <section
        className={`min-h-0 flex-1 ${
          activeConversationId ? 'flex' : 'hidden md:flex'
        }`}
      >
        {activeConversationId && initialDetail ? (
          <ChatThread
            conversationId={activeConversationId}
            currentUserId={currentUserId}
            initialDetail={initialDetail}
            onMessageSent={() => mutate()}
          />
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <MessagesSquare className="size-10 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              Select a conversation or start a new chat.
            </p>
          </div>
        )}
      </section>

      {dialogOpen && (
        <NewChatDialog
          directory={directory}
          onClose={() => setDialogOpen(false)}
        />
      )}
    </div>
  )
}
