'use client'

import { Product } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Check } from 'lucide-react'
import { useCart } from '@/lib/cart/context'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({
      _id: product._id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/95">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-nt-earth-100/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.featured && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-nt-green-700/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
          <div className="absolute inset-0 bg-nt-green-950/0 group-hover:bg-nt-green-950/10 transition-colors duration-300" />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs font-medium text-nt-green-700 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-semibold text-nt-earth-900 hover:text-nt-green-700 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-nt-earth-600 mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-nt-green-800">${product.price}</span>
          <button
            onClick={handleAdd}
            disabled={added}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md transform hover:scale-105 ${
              added
                ? 'bg-nt-green-100 text-nt-green-800'
                : 'bg-nt-green-700 text-white hover:bg-nt-green-800'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
