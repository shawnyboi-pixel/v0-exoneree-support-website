import { Metadata } from 'next'
import { QALanding } from '@/components/qa-landing'

export const metadata: Metadata = {
  title: 'Ask a Question | The Ide Project - Reentry Support Q&A',
  description:
    'Have questions about reentry? Ask The Ide Project community. Submit your questions about financial planning, housing, employment, healthcare, and more.',
}

export default function QAPage() {
  return <QALanding />
}
