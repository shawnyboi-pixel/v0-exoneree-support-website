'use client'

import { useRef, useState } from 'react'
import { Camera, Loader2, Trash2 } from 'lucide-react'
import { UserAvatar } from '@/components/user-avatar'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

interface AvatarUploaderProps {
  image?: string | null
  name?: string | null
  onChange: (image: string | null) => void
}

export function AvatarUploader({ image, name, onChange }: AvatarUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [removing, setRemoving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelected = async (file: File) => {
    setError(null)

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Please choose a JPEG, PNG, WEBP, or GIF image.')
      return
    }
    if (file.size > MAX_FILE_SIZE) {
      setError('Image must be smaller than 5MB.')
      return
    }

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/account/avatar', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image')
      }

      onChange(data.image)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = async () => {
    setError(null)
    setRemoving(true)
    try {
      const response = await fetch('/api/account/avatar', { method: 'DELETE' })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to remove image')
      }
      onChange(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove image')
    } finally {
      setRemoving(false)
    }
  }

  const busy = uploading || removing

  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <UserAvatar image={image} name={name} className="size-20" iconClassName="size-8" />
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background/70">
            <Loader2 className="size-6 animate-spin text-accent" />
          </div>
        )}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          aria-label="Upload profile photo"
          className="absolute -bottom-1 -right-1 flex items-center justify-center size-7 rounded-full bg-accent text-accent-foreground shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Camera className="size-3.5" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={busy}
            className="px-3 py-1.5 text-sm font-medium border border-border/60 rounded-lg text-foreground/75 hover:text-foreground hover:bg-secondary/50 transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          >
            {image ? 'Change photo' : 'Upload photo'}
          </button>
          {image && (
            <button
              type="button"
              onClick={handleRemove}
              disabled={busy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              {removing ? <Loader2 className="size-3.5 animate-spin" /> : <Trash2 className="size-3.5" />}
              Remove
            </button>
          )}
        </div>
        <p className="text-xs text-foreground/50">JPEG, PNG, WEBP, or GIF. Max 5MB.</p>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ALLOWED_TYPES.join(',')}
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFileSelected(file)
          e.target.value = ''
        }}
      />
    </div>
  )
}
