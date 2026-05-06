import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MissionSection } from '@/components/sections/MissionSection'
import { CTASection } from '@/components/sections/CTASection'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { TestimonialMarquee } from '@/components/sections/TestimonialMarquee'
import { SectionSeparator } from '@/components/ui/SectionSeparator'
import { fetchFeaturedProducts } from '@/lib/sanity'

export default async function HomePage() {
  const featuredProducts = await fetchFeaturedProducts()

  return (
    <>
      <HeroSection />
      <SectionSeparator variant="wave" />
      <TestimonialMarquee />
      <SectionSeparator variant="leaf" />
      <FeaturedProducts products={featuredProducts} />
      <SectionSeparator variant="wave" />
      <ServicesOverview />
      <SectionSeparator variant="leaf" />
      <MissionSection />
      <SectionSeparator variant="wave" />
      <InstagramFeed />
      <SectionSeparator variant="leaf" />
      <CTASection />
    </>
  )
}
