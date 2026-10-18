'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { restoreHiddenGuides } from '@/app/actions/guides-admin'

export function RestoreGuidesButton({ count }: { count: number }) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  return (
    <Button
      type="button"
      variant="outline"
      className="gap-2"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          await restoreHiddenGuides()
          router.refresh()
        })
      }
    >
      <Undo2 className="size-4" />
      {`Restore ${count} removed`}
    </Button>
  )
}
