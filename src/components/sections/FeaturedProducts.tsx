import { Product } from '@/types'
import { ProductCard } from '@/components/ui/ProductCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 lg:py-24 bg-nt-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nt-earth-900">Featured Products</h2>
          <p className="mt-4 text-lg text-nt-earth-600 max-w-2xl mx-auto">
            Handcrafted wild-crafted and organic herbal compounds, alkaline meals, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-nt-green-700 font-medium hover:text-nt-green-800 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
