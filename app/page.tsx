import { HeroSection } from '@/components/hero-section'
import { StatisticsDashboard } from '@/components/statistics-dashboard'
import { ResourcePagesSection } from '@/components/resource-pages-section'
import { GetHelpNow } from '@/components/get-help-now'
import { ResourcesCta } from '@/components/resources-cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsDashboard />
      <ResourcePagesSection />
      <GetHelpNow />
      <ResourcesCta />
    </>
  )
}
