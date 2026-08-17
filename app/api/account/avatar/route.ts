import { put, del } from '@vercel/blob'
import { auth } from '@/lib/auth'
import { pool } from '@/lib/db'
import { headers } from 'next/headers'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json(
        { error: 'Invalid file type. Please upload a JPEG, PNG, WEBP, or GIF image.' },
        { status: 400 }
      )
    }

    if (file.size > MAX_FILE_SIZE) {
      return Response.json({ error: 'Image must be smaller than 5MB.' }, { status: 400 })
    }

    // Look up the previous avatar so we can delete it after a successful upload
    const previous = await pool.query<{ image: string | null }>(
      `SELECT image FROM "user" WHERE id = $1`,
      [session.user.id]
    )
    const previousImage = previous.rows[0]?.image ?? null

    const extension = file.type.split('/')[1] || 'jpg'
    const blob = await put(`avatars/${session.user.id}-${Date.now()}.${extension}`, file, {
      access: 'public',
      contentType: file.type,
    })

    const updateResult = await pool.query(
      `UPDATE "user" SET image = $1, "updatedAt" = NOW() WHERE id = $2 RETURNING id, image`,
      [blob.url, session.user.id]
    )

    if (updateResult.rows.length === 0) {
      return Response.json({ error: 'Failed to update profile image' }, { status: 500 })
    }

    // Best-effort cleanup of the old avatar blob (only ones we manage)
    if (previousImage && previousImage.includes('blob.vercel-storage.com')) {
      del(previousImage).catch((err) => {
        console.error('[AVATAR] Failed to delete previous avatar blob:', err)
      })
    }

    return Response.json({ image: updateResult.rows[0].image })
  } catch (error) {
    console.error('[AVATAR] Upload error:', error)
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to upload image' },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const previous = await pool.query<{ image: string | null }>(
      `SELECT image FROM "user" WHERE id = $1`,
      [session.user.id]
    )
    const previousImage = previous.rows[0]?.image ?? null

    await pool.query(`UPDATE "user" SET image = NULL, "updatedAt" = NOW() WHERE id = $1`, [
      session.user.id,
    ])

    if (previousImage && previousImage.includes('blob.vercel-storage.com')) {
      del(previousImage).catch((err) => {
        console.error('[AVATAR] Failed to delete avatar blob:', err)
      })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[AVATAR] Delete error:', error)
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to remove image' },
      { status: 500 }
    )
  }
}
