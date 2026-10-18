'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { removeGuide } from '@/app/actions/guides-admin'

export function RemoveGuideButton({
  id,
  title,
  custom,
}: {
  id: string
  title: string
  custom: boolean
}) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const handleRemove = () => {
    startTransition(async () => {
      await removeGuide({ id, custom })
      router.refresh()
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          disabled={pending}
          aria-label={`Remove ${title}`}
          className="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/90 text-muted-foreground shadow-sm transition-colors hover:border-destructive/50 hover:text-destructive disabled:opacity-50"
        >
          <Trash2 className="size-4" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove this article?</AlertDialogTitle>
          <AlertDialogDescription>
            {`"${title}" will no longer appear in the guides list.`}
            {custom ? ' This can’t be undone.' : ' You can bring removed guides back later.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep it</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
