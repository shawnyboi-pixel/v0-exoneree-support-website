'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createGuideArticle } from '@/app/actions/guides-admin'

export function AddGuideDialog({ categories }: { categories: string[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const reset = () => {
    setTitle('')
    setDescription('')
    setCategory('')
    setBody('')
    setError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      try {
        const result = await createGuideArticle({ title, description, category, body })
        if ('error' in result && result.error) {
          setError(result.error)
          return
        }
        reset()
        setOpen(false)
        router.refresh()
      } catch {
        setError('Something went wrong. Please try again.')
      }
    })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setError(null)
      }}
    >
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="size-4" />
          Add article
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Add a guide article</DialogTitle>
            <DialogDescription>
              It shows up in the guides list right away. Separate paragraphs with a blank line,
              start a line with ## for a heading, and start lines with - for bullet points.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <Label htmlFor="guide-title">Title</Label>
            <Input
              id="guide-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={150}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="guide-description">Short description</Label>
            <Textarea
              id="guide-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={300}
              rows={2}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="guide-category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger id="guide-category" className="w-full">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="guide-body">Article</Label>
            <Textarea
              id="guide-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              required
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={pending || !category}>
              {pending ? 'Publishing...' : 'Publish article'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
