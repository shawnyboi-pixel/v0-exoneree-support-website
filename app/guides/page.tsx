import { Metadata } from 'next'
import { GuidesHub } from '@/components/guides-hub'

export const metadata: Metadata = {
  title: 'Reentry Guides & Tutorials | The Ide Project - Exoneree Resources',
  description:
    'The Ide Project offers comprehensive reentry guides, video tutorials, checklists, and resources for exonerees. Learn about exoneree reentry support, financial literacy, housing assistance, employment programs, legal rights, and healthcare access. Free guides for building your life after wrongful conviction.',
}

export default function GuidesPage({ searchParams }: { searchParams: { q?: string } }) {
  const initialSearch = searchParams.q || ''

  return <GuidesHub initialSearch={initialSearch} />
}
