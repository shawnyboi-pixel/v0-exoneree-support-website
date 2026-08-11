'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Search, User as UserIcon, X } from 'lucide-react'
import { startConversation } from '@/app/actions/messages'

type DirectoryUser = {
  id: string
  name: string | null
  email: string
  image: string | null
}

interface NewChatDialogProps {
  directory: DirectoryUser[]
  onClose: () => void
}

export function NewChatDialog({ directory, onClose }: NewChatDialogProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [startingId, setStartingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return directory
    return directory.filter(
      (u) =>
        (u.name ?? '').toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    )
  }, [directory, query])

  async function handleSelect(userId: string) {
    setError(null)
    setStartingId(userId)
    try {
      const conversationId = await startConversation(userId)
      router.push(`/messages/${conversationId}`)
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start chat')
      setStartingId(null)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-border/60 bg-background shadow-xl animate-soft-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <h2 className="text-lg font-bold text-foreground">Start a new chat</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all duration-200"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="border-b border-border/60 px-5 py-3">
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/20 px-3 py-2">
            <Search className="size-4 text-muted-foreground" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search members by name or email"
              className="w-full bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
            />
          </div>
        </div>

        {error && (
          <div className="px-5 pt-3 text-sm text-destructive">{error}</div>
        )}

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-5 py-6 text-center text-sm text-muted-foreground">
              {directory.length === 0
                ? 'No other members have signed up yet.'
                : 'No members match your search.'}
            </p>
          ) : (
            filtered.map((u) => {
              const displayName = u.name || u.email.split('@')[0]
              const isStarting = startingId === u.id
              return (
                <button
                  key={u.id}
                  onClick={() => handleSelect(u.id)}
                  disabled={startingId !== null}
                  className="flex w-full items-center gap-3 px-5 py-3 text-left transition-all duration-200 ease-out hover:bg-secondary/50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-sm">
                    <UserIcon className="size-4 text-accent-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {displayName}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{u.email}</p>
                  </div>
                  {isStarting && (
                    <Loader2 className="size-4 shrink-0 animate-spin text-accent" />
                  )}
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
