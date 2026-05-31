import { Metadata } from 'next'
import { GuidesHub } from '@/components/guides-hub'

export const metadata: Metadata = {
  title: 'Guides & Tutorials | The IDE Project',
  description:
    'Comprehensive guides, videos, checklists, and resources for navigating reentry. Learn about financial planning, employment, housing, healthcare, and more.',
}

export default function GuidesPage() {
  return <GuidesHub />
}
