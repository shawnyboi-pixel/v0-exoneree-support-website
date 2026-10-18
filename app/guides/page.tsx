import { Metadata } from 'next'
import { GuidesHub } from '@/components/guides-hub'
import {
  getCustomGuides,
  getHiddenGuideIds,
  isCurrentUserAdmin,
} from '@/app/actions/guides-admin'

export const metadata: Metadata = {
  title: 'Guides | The Ide Project',
  description:
    'Easygoing guides and student-written articles from The Ide Project on cooking, gadgets, games, music, hobbies, travel, and other things worth learning for fun.',
}

export default async function GuidesPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams
  const initialSearch = params.q || ''

  const [isAdmin, customGuides, hiddenIds] = await Promise.all([
    isCurrentUserAdmin(),
    getCustomGuides(),
    getHiddenGuideIds(),
  ])

  return (
    <GuidesHub
      initialSearch={initialSearch}
      isAdmin={isAdmin}
      hiddenIds={hiddenIds}
      customGuides={customGuides.map((g) => ({
        id: g.id,
        slug: g.slug,
        title: g.title,
        description: g.description,
        category: g.category,
        wordCount: g.content.split(/\s+/).filter(Boolean).length,
      }))}
    />
  )
}
