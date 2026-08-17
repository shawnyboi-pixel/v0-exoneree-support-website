import { Metadata } from 'next'
import { NewsHub } from '@/components/news-hub'

export const metadata: Metadata = {
  title: 'News & Events | The Ide Project - Exoneree News',
  description:
    'Stay updated on exoneree-related news, policy changes, success stories, incidents, and upcoming community events. Find workshops, legal clinics, and conferences hosted by The Ide Project and partner organizations.',
}

export default function NewsPage() {
  return <NewsHub />
}
