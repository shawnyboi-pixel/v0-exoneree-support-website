'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { guideQuestion, guideAnswer, articleComment, user } from '@/lib/db/schema'
import { asc, desc, eq, inArray } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { v4 as uuidv4 } from 'uuid'

/**
 * Resolve the current user id from the Better Auth session.
 * Every action that writes a comment/question/answer MUST go through this
 * helper so only signed-in users can post.
 */
async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

/** Whether the current visitor is signed in. Used to gate the post UI. */
export async function getCurrentCommenter() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return null
  return {
    id: session.user.id,
    name: session.user.name,
    image: session.user.image,
  }
}

async function attachAuthors<T extends { userId: string }>(rows: T[]) {
  if (rows.length === 0) return [] as (T & { authorName: string; authorImage: string | null })[]
  const userIds = [...new Set(rows.map((r) => r.userId))]
  const authors = await db
    .select({ id: user.id, name: user.name, image: user.image })
    .from(user)
    .where(inArray(user.id, userIds))
  const authorById = new Map(authors.map((a) => [a.id, a]))
  return rows.map((row) => ({
    ...row,
    authorName: authorById.get(row.userId)?.name ?? 'Community Member',
    authorImage: authorById.get(row.userId)?.image ?? null,
  }))
}

// --- Guide Q&A ---------------------------------------------------------------

export async function getGuideQuestions(guideId: string) {
  const questions = await db
    .select()
    .from(guideQuestion)
    .where(eq(guideQuestion.guideId, guideId))
    .orderBy(desc(guideQuestion.createdAt))

  const questionsWithAuthors = await attachAuthors(questions)

  const answers = await db
    .select()
    .from(guideAnswer)
    .where(
      inArray(
        guideAnswer.questionId,
        questions.map((q) => q.id)
      )
    )
    .orderBy(asc(guideAnswer.createdAt))
  const answersWithAuthors = await attachAuthors(answers)

  return questionsWithAuthors.map((q) => ({
    ...q,
    answers: answersWithAuthors.filter((a) => a.questionId === q.id),
  }))
}

export async function postGuideQuestion(guideId: string, guideTitle: string, question: string) {
  const userId = await getUserId()
  const trimmed = question.trim()
  if (!trimmed) throw new Error('Question cannot be empty')

  await db.insert(guideQuestion).values({
    id: uuidv4(),
    guideId,
    guideTitle,
    userId,
    question: trimmed,
  })
  revalidatePath(`/guides/${guideId}`)
}

export async function postGuideAnswer(guideId: string, questionId: string, answer: string) {
  const userId = await getUserId()
  const trimmed = answer.trim()
  if (!trimmed) throw new Error('Answer cannot be empty')

  await db.insert(guideAnswer).values({
    id: uuidv4(),
    questionId,
    userId,
    answer: trimmed,
  })
  revalidatePath(`/guides/${guideId}`)
}

// --- Article comments --------------------------------------------------------

export async function getArticleComments(articleId: string) {
  const comments = await db
    .select()
    .from(articleComment)
    .where(eq(articleComment.articleId, articleId))
    .orderBy(desc(articleComment.createdAt))

  return attachAuthors(comments)
}

export async function postArticleComment(articleId: string, articleTitle: string, comment: string) {
  const userId = await getUserId()
  const trimmed = comment.trim()
  if (!trimmed) throw new Error('Comment cannot be empty')

  await db.insert(articleComment).values({
    id: uuidv4(),
    articleId,
    articleTitle,
    userId,
    comment: trimmed,
  })
  revalidatePath('/news')
}
