import { HeroSection } from '@/components/hero-section'
import { StatisticsDashboard } from '@/components/statistics-dashboard'
import { AboutSection } from '@/components/about-section'
import { OurTeamSection } from '@/components/our-team-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsDashboard />
      <AboutSection />
      <OurTeamSection />
    </>
  )
}
