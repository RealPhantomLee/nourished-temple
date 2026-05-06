'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import { Sprout } from 'lucide-react'
import { Product } from '@/types'

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setProducts([])
        setLoading(false)
      })
  }, [])

  const categories = [...new Set(products.map((p) => p.category))]
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  if (loading) {
    return (
      <div>
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 text-nt-green-700 mb-4">
              <Sprout className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Alkaline Kreationz</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-nt-earth-900">Shop</h1>
            <p className="mt-4 text-lg text-nt-earth-700 max-w-2xl mx-auto">
              Loading our handcrafted products...
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-nt-green-700 mb-4">
            <Sprout className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">Alkaline Kreationz</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-nt-earth-900">Shop</h1>
          <p className="mt-4 text-lg text-nt-earth-700 max-w-2xl mx-auto">
            Handcrafted wild-crafted and organic herbal compounds, alkaline meals, and wellness essentials.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                selectedCategory === null
                  ? 'bg-nt-green-700 text-white shadow-md'
                  : 'bg-white/70 backdrop-blur-sm text-nt-earth-700 hover:bg-white/90'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === cat
                    ? 'bg-nt-green-700 text-white shadow-md'
                    : 'bg-white/70 backdrop-blur-sm text-nt-earth-700 hover:bg-white/90'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-xl">
              <Sprout className="w-12 h-12 text-nt-earth-300 mx-auto mb-4" />
              <p className="text-xl text-nt-earth-600">No products available at the moment.</p>
              <p className="text-sm text-nt-earth-400 mt-2">Check back soon for new handcrafted creations.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product._id}
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  )
}
