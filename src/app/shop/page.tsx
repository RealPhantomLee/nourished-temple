'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import { products, getAllCategories } from '@/lib/products'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = getAllCategories()

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold">Shop</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Handcrafted wild-crafted and organic herbal compounds, alkaline meals, and wellness essentials.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-nt-green-700 text-white'
                  : 'bg-nt-earth-100 text-nt-earth-700 hover:bg-nt-earth-200'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-nt-green-700 text-white'
                    : 'bg-nt-earth-100 text-nt-earth-700 hover:bg-nt-earth-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
