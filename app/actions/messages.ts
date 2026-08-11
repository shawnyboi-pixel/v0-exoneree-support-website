'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import {
  conversation,
  conversationParticipant,
  message,
  user,
} from '@/lib/db/schema'
import { and, asc, desc, eq, gt, ne, sql } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { v4 as uuidv4 } from 'uuid'

/**
 * Resolve the current user id from the Better Auth session.
 * Every server action that touches messaging data MUST go through this
 * helper — it is what stops one user from reading another's conversations.
 */
async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

/**
 * Verify the current user is a participant in a conversation.
 * Throws if not — used before any read/write on messages.
 */
async function assertParticipant(conversationId: string, userId: string) {
  const rows = await db
    .select({ id: conversationParticipant.id })
    .from(conversationParticipant)
    .where(
      and(
        eq(conversationParticipant.conversationId, conversationId),
        eq(conversationParticipant.userId, userId)
      )
    )
    .limit(1)

  if (rows.length === 0) throw new Error('Unauthorized')
}

// ---------------------------------------------------------------------------
// Directory: list every other signed-up user, for "Start a new chat"
// ---------------------------------------------------------------------------

export async function getMessagingDirectory() {
  const userId = await getUserId()

  return db
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    })
    .from(user)
    .where(ne(user.id, userId))
    .orderBy(asc(user.name))
}

// ---------------------------------------------------------------------------
// Conversations
// ---------------------------------------------------------------------------

export type ConversationSummary = {
  id: string
  updatedAt: Date
  otherUser: { id: string; name: string | null; email: string; image: string | null }
  lastMessage: { body: string; createdAt: Date; senderId: string } | null
  unreadCount: number
}

/**
 * List all conversations the current user participates in, with the other
 * participant's info, the latest message preview, and an unread count.
 */
export async function getConversations(): Promise<ConversationSummary[]> {
  const userId = await getUserId()

  const myConversations = await db
    .select({
      conversationId: conversationParticipant.conversationId,
      lastReadAt: conversationParticipant.lastReadAt,
    })
    .from(conversationParticipant)
    .where(eq(conversationParticipant.userId, userId))

  if (myConversations.length === 0) return []

  const results: ConversationSummary[] = []

  for (const my of myConversations) {
    const [otherParticipant] = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      .from(conversationParticipant)
      .innerJoin(user, eq(user.id, conversationParticipant.userId))
      .where(
        and(
          eq(conversationParticipant.conversationId, my.conversationId),
          ne(conversationParticipant.userId, userId)
        )
      )
      .limit(1)

    if (!otherParticipant) continue

    const [conversationRow] = await db
      .select({ updatedAt: conversation.updatedAt })
      .from(conversation)
      .where(eq(conversation.id, my.conversationId))
      .limit(1)

    const [lastMessageRow] = await db
      .select({
        body: message.body,
        createdAt: message.createdAt,
        senderId: message.senderId,
      })
      .from(message)
      .where(eq(message.conversationId, my.conversationId))
      .orderBy(desc(message.createdAt))
      .limit(1)

    const [unreadRow] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(message)
      .where(
        and(
          eq(message.conversationId, my.conversationId),
          ne(message.senderId, userId),
          my.lastReadAt ? gt(message.createdAt, my.lastReadAt) : sql`true`
        )
      )

    results.push({
      id: my.conversationId,
      updatedAt: conversationRow?.updatedAt ?? new Date(),
      otherUser: otherParticipant,
      lastMessage: lastMessageRow ?? null,
      unreadCount: unreadRow?.count ?? 0,
    })
  }

  results.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
  return results
}

/**
 * Find the existing 1:1 conversation with another user, or create one.
 * Returns the conversation id.
 */
export async function startConversation(otherUserId: string) {
  const userId = await getUserId()

  if (otherUserId === userId) {
    throw new Error('You cannot start a conversation with yourself')
  }

  const [otherUserRow] = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.id, otherUserId))
    .limit(1)

  if (!otherUserRow) throw new Error('User not found')

  // Look for an existing 1:1 conversation between these two users.
  const existing = await db
    .select({ conversationId: conversationParticipant.conversationId })
    .from(conversationParticipant)
    .where(eq(conversationParticipant.userId, userId))

  for (const row of existing) {
    const participants = await db
      .select({ userId: conversationParticipant.userId })
      .from(conversationParticipant)
      .where(eq(conversationParticipant.conversationId, row.conversationId))

    const ids = participants.map((p) => p.userId)
    if (ids.length === 2 && ids.includes(otherUserId)) {
      return row.conversationId
    }
  }

  // No existing conversation — create one.
  const conversationId = uuidv4()

  await db.insert(conversation).values({ id: conversationId })

  await db.insert(conversationParticipant).values([
    { id: uuidv4(), conversationId, userId },
    { id: uuidv4(), conversationId, userId: otherUserId },
  ])

  revalidatePath('/messages')
  return conversationId
}

// ---------------------------------------------------------------------------
// Messages within a conversation
// ---------------------------------------------------------------------------

export async function getConversationDetail(conversationId: string) {
  const userId = await getUserId()
  await assertParticipant(conversationId, userId)

  const [otherParticipant] = await db
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    })
    .from(conversationParticipant)
    .innerJoin(user, eq(user.id, conversationParticipant.userId))
    .where(
      and(
        eq(conversationParticipant.conversationId, conversationId),
        ne(conversationParticipant.userId, userId)
      )
    )
    .limit(1)

  const messages = await db
    .select({
      id: message.id,
      body: message.body,
      senderId: message.senderId,
      createdAt: message.createdAt,
    })
    .from(message)
    .where(eq(message.conversationId, conversationId))
    .orderBy(asc(message.createdAt))

  return {
    currentUserId: userId,
    otherUser: otherParticipant ?? null,
    messages,
  }
}

export async function sendMessage(conversationId: string, body: string) {
  const userId = await getUserId()
  await assertParticipant(conversationId, userId)

  const trimmed = body.trim()
  if (!trimmed) throw new Error('Message cannot be empty')
  if (trimmed.length > 4000) throw new Error('Message is too long')

  const now = new Date()

  await db.insert(message).values({
    id: uuidv4(),
    conversationId,
    senderId: userId,
    body: trimmed,
    createdAt: now,
  })

  await db
    .update(conversation)
    .set({ updatedAt: now })
    .where(eq(conversation.id, conversationId))

  await db
    .update(conversationParticipant)
    .set({ lastReadAt: now })
    .where(
      and(
        eq(conversationParticipant.conversationId, conversationId),
        eq(conversationParticipant.userId, userId)
      )
    )

  revalidatePath('/messages')
  revalidatePath(`/messages/${conversationId}`)
}

export async function markConversationRead(conversationId: string) {
  const userId = await getUserId()
  await assertParticipant(conversationId, userId)

  await db
    .update(conversationParticipant)
    .set({ lastReadAt: new Date() })
    .where(
      and(
        eq(conversationParticipant.conversationId, conversationId),
        eq(conversationParticipant.userId, userId)
      )
    )

  revalidatePath('/messages')
}

/**
 * Total unread messages across all of the current user's conversations.
 * Used for a badge in the nav.
 */
export async function getUnreadMessageCount() {
  const userId = await getUserId()

  const myConversations = await db
    .select({
      conversationId: conversationParticipant.conversationId,
      lastReadAt: conversationParticipant.lastReadAt,
    })
    .from(conversationParticipant)
    .where(eq(conversationParticipant.userId, userId))

  let total = 0
  for (const my of myConversations) {
    const [row] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(message)
      .where(
        and(
          eq(message.conversationId, my.conversationId),
          ne(message.senderId, userId),
          my.lastReadAt ? gt(message.createdAt, my.lastReadAt) : sql`true`
        )
      )
    total += row?.count ?? 0
  }

  return total
}
