'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { guideArticle, hiddenGuide, user } from '@/lib/db/schema'
import { desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { GUIDE_CATEGORIES } from '@/lib/guide-categories'

async function getSessionUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  return session?.user?.id ?? null
}

export async function isCurrentUserAdmin() {
  const userId = await getSessionUserId()
  if (!userId) return false
  const [row] = await db
    .select({ role: user.role })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1)
  return row?.role === 'admin'
}

async function requireAdminId() {
  const userId = await getSessionUserId()
  if (!userId) throw new Error('Unauthorized')
  const [row] = await db
    .select({ role: user.role })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1)
  if (row?.role !== 'admin') throw new Error('Forbidden')
  return userId
}

export async function getCustomGuides() {
  return db.select().from(guideArticle).orderBy(desc(guideArticle.createdAt))
}

export async function getHiddenGuideIds() {
  const rows = await db.select({ id: hiddenGuide.guideId }).from(hiddenGuide)
  return rows.map((r) => r.id)
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

export async function createGuideArticle(input: {
  title: string
  description: string
  category: string
  body: string
}) {
  const adminId = await requireAdminId()

  const title = input.title.trim()
  const description = input.description.trim()
  const body = input.body.trim()
  const category = input.category

  if (!title || title.length > 150) return { error: 'Add a title (150 characters max).' }
  if (!description || description.length > 300) {
    return { error: 'Add a short description (300 characters max).' }
  }
  if (!body || body.length > 50000) return { error: 'Add the article text.' }
  if (!(GUIDE_CATEGORIES as readonly string[]).includes(category)) {
    return { error: 'Pick a category.' }
  }

  const id = crypto.randomUUID()
  const slug = `${slugify(title) || 'article'}-${id.slice(0, 6)}`

  await db.insert(guideArticle).values({
    id,
    slug,
    title,
    description,
    category,
    types: 'article',
    duration: `${Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200))} min read`,
    content: body,
    createdBy: adminId,
  })

  revalidatePath('/guides')
  return { slug }
}

export async function removeGuide(input: { id: string; custom: boolean }) {
  const adminId = await requireAdminId()

  if (input.custom) {
    await db.delete(guideArticle).where(eq(guideArticle.id, input.id))
  } else {
    await db
      .insert(hiddenGuide)
      .values({ guideId: input.id, hiddenBy: adminId })
      .onConflictDoNothing()
  }

  revalidatePath('/guides')
  return { ok: true }
}

export async function restoreHiddenGuides() {
  await requireAdminId()
  await db.delete(hiddenGuide)
  revalidatePath('/guides')
  return { ok: true }
}
