'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { MessageCircle, Send, Loader2 } from 'lucide-react'
import { UserAvatar } from '@/components/user-avatar'
import { getArticleComments, postArticleComment, getCurrentCommenter } from '@/app/actions/comments'

interface ArticleCommentsProps {
  articleId: string
  articleTitle: string
}

export function ArticleComments({ articleId, articleTitle }: ArticleCommentsProps) {
  const { data: commenter } = useSWR('current-commenter', getCurrentCommenter)
  const {
    data: comments,
    isLoading,
    mutate,
  } = useSWR(['article-comments', articleId], () => getArticleComments(articleId))

  const [newComment, setNewComment] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  const isSignedIn = Boolean(commenter)

  const handlePostComment = async () => {
    if (!newComment.trim()) return
    try {
      setIsPosting(true)
      await postArticleComment(articleId, articleTitle, newComment.trim())
      setNewComment('')
      await mutate()
    } catch (error) {
      console.error('[v0] Error posting comment:', error)
    } finally {
      setIsPosting(false)
    }
  }

  return (
    <div className="rounded-lg border border-border/40 bg-card p-6">
      <h4 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
        <MessageCircle className="size-4 text-accent" />
        Comments {comments && comments.length > 0 ? `(${comments.length})` : ''}
      </h4>

      {/* Comment form — signed-in users only */}
      {isSignedIn && (
        <div className="mb-6 space-y-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={3}
            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <button
            onClick={handlePostComment}
            disabled={!newComment.trim() || isPosting}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPosting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Posting...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Post Comment
              </>
            )}
          </button>
        </div>
      )}

      {/* Comments list */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="size-5 animate-spin text-accent" />
          </div>
        ) : !comments || comments.length === 0 ? (
          <p className="text-sm text-foreground/50">
            {isSignedIn ? 'No comments yet. Be the first to share your thoughts.' : 'No comments yet.'}
          </p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="flex gap-3">
              <UserAvatar image={c.authorImage} name={c.authorName} className="size-8 shrink-0" iconClassName="size-4" />
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{c.authorName}</span>
                  <span className="text-xs text-foreground/50">{new Date(c.createdAt).toLocaleString()}</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">{c.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
