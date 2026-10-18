import { Metadata } from 'next'
import { GuidesHub } from '@/components/guides-hub'
import {
  getCustomGuides,
  getHiddenGuideIds,
  isCurrentUserAdmin,
} from '@/app/actions/guides-admin'

export const metadata: Metadata = {
  title: 'Reentry Guides | The Ide Project - Exoneree Resources',
  description:
    'The Ide Project offers comprehensive reentry guides, video tutorials, checklists, and resources for exonerees. Learn about exoneree reentry support, financial literacy, housing assistance, employment programs, legal rights, and healthcare access. Free guides for building your life after wrongful conviction.',
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
