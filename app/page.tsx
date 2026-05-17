import { HeroSection } from '@/components/hero-section'
import { StatisticsDashboard } from '@/components/statistics-dashboard'
import { ResourcePagesSection } from '@/components/resource-pages-section'
import { GetHelpNow } from '@/components/get-help-now'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsDashboard />
      <ResourcePagesSection />
      <GetHelpNow />
    </>
  )
}
