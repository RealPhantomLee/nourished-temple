import { Product } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-nt-earth-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
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
          <button className="flex items-center gap-2 px-3 py-2 bg-nt-green-700 text-white text-sm font-medium rounded-lg hover:bg-nt-green-800 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
