'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { userProfile, userActivity, savedItems } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { v4 as uuidv4 } from 'uuid'

/**
 * Resolve the current user id from the Better Auth session.
 * Every server action that touches user data MUST go through this helper
 * — it is the only thing standing between one user and another's rows.
 */
export async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

// User profile functions
export async function getUserProfile() {
  const userId = await getUserId()
  return db
    .select()
    .from(userProfile)
    .where(eq(userProfile.userId, userId))
    .limit(1)
}

export async function updateUserProfile(
  bio?: string,
  location?: string,
  phone?: string
) {
  const userId = await getUserId()
  const existingProfile = await db
    .select()
    .from(userProfile)
    .where(eq(userProfile.userId, userId))
    .limit(1)

  if (existingProfile.length === 0) {
    await db.insert(userProfile).values({
      id: uuidv4(),
      userId,
      bio,
      location,
      phone,
    })
  } else {
    await db
      .update(userProfile)
      .set({ bio, location, phone, updatedAt: new Date() })
      .where(eq(userProfile.userId, userId))
  }
  revalidatePath('/account')
}

// Activity tracking functions
export async function trackActivity(
  activityType: string,
  description?: string,
  page?: string,
  metadata?: Record<string, any>
) {
  const userId = await getUserId()
  await db.insert(userActivity).values({
    id: uuidv4(),
    userId,
    activityType,
    description,
    page,
    metadata,
  })
}

export async function getUserActivity(limit = 50) {
  const userId = await getUserId()
  return db
    .select()
    .from(userActivity)
    .where(eq(userActivity.userId, userId))
    .orderBy(desc(userActivity.createdAt))
    .limit(limit)
}

// Saved items functions
export async function saveItem(
  itemType: string,
  itemId: string,
  itemData?: Record<string, any>
) {
  const userId = await getUserId()
  const existing = await db
    .select()
    .from(savedItems)
    .where(
      and(
        eq(savedItems.userId, userId),
        eq(savedItems.itemType, itemType),
        eq(savedItems.itemId, itemId)
      )
    )
    .limit(1)

  if (existing.length === 0) {
    await db.insert(savedItems).values({
      id: uuidv4(),
      userId,
      itemType,
      itemId,
      itemData,
    })
  }
  revalidatePath('/saved')
}

export async function removeSavedItem(itemType: string, itemId: string) {
  const userId = await getUserId()
  await db
    .delete(savedItems)
    .where(
      and(
        eq(savedItems.userId, userId),
        eq(savedItems.itemType, itemType),
        eq(savedItems.itemId, itemId)
      )
    )
  revalidatePath('/saved')
}

export async function getSavedItems(itemType?: string) {
  const userId = await getUserId()
  let query = db
    .select()
    .from(savedItems)
    .where(eq(savedItems.userId, userId))

  if (itemType) {
    query = query.where(eq(savedItems.itemType, itemType))
  }

  return query.orderBy(desc(savedItems.createdAt))
}
