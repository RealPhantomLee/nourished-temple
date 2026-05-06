import { Product } from '@/types'
import { ProductCard } from '@/components/ui/ProductCard'
import Link from 'next/link'
import { ArrowRight, Sprout } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-nt-green-300 mb-4">
              <Sprout className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Handcrafted with Care</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Featured Products</h2>
            <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
              Handcrafted wild-crafted and organic herbal compounds, alkaline meals, and more.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, i) => (
            <ScrollReveal key={product._id} delay={i * 0.15} direction="scale">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-nt-green-300 font-medium hover:text-white transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
