import { HeroSection } from '@/components/hero-section'
import { WelcomeBanner } from '@/components/welcome-banner'

export default function HomePage() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <WelcomeBanner />
        </div>
      </div>
      <HeroSection />
    </>
  )
}
