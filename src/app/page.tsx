import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MissionSection } from '@/components/sections/MissionSection'
import { CTASection } from '@/components/sections/CTASection'
import { getFeaturedProducts } from '@/lib/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <ServicesOverview />
      <MissionSection />
      <CTASection />
    </>
  )
}
