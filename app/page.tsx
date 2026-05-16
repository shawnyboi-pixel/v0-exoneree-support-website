import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { StatisticsDashboard } from '@/components/statistics-dashboard'
import { StrugglesSection } from '@/components/struggles-section'
import { ResourcesCta } from '@/components/resources-cta'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatisticsDashboard />
        <StrugglesSection />
        <ResourcesCta />
      </main>
      <SiteFooter />
    </div>
  )
}
