import { Metadata } from 'next'
import { NewsHub } from '@/components/news-hub'

export const metadata: Metadata = {
  title: 'News & Events | The Ide Project - Exoneree News',
  description:
    'Stay updated on exoneree-related news, policy changes, success stories, incidents, and upcoming community events. Find workshops, legal clinics, and conferences hosted by The Ide Project and partner organizations.',
}

export default function NewsPage() {
  return (
    <>
      <div className="w-full bg-red-500 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Under Development
          </h1>
          <p className="text-center mt-2 text-lg md:text-xl">
            This section is coming soon. Check back for news and events updates.
          </p>
        </div>
      </div>
      <NewsHub />
    </>
  )
}
