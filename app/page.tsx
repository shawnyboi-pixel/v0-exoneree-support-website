import { HeroSection } from '@/components/hero-section'
import { StatisticsDashboard } from '@/components/statistics-dashboard'
import { AboutSection } from '@/components/about-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsDashboard />
      <AboutSection />
    </>
  )
}
