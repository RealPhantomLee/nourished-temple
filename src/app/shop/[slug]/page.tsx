'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { fetchProductBySlug } from '@/lib/sanity'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Leaf, ShieldCheck, Truck, Check, Minus, Plus } from 'lucide-react'
import { useCart } from '@/lib/cart/context'
import { FDADisclaimer } from '@/components/ui/FDADisclaimer'
import { Product } from '@/types'

type Props = {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: Props) {
  const { addItem } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [slug, setSlug] = useState('')

  useEffect(() => {
    params.then((p) => setSlug(p.slug))
  }, [params])

  useEffect(() => {
    if (!slug) return
    fetchProductBySlug(slug)
      .then((p) => {
        setProduct(p || null)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-nt-earth-600">Loading product...</p>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        _id: product._id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-nt-green-700 font-medium hover:text-nt-green-800 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-medium text-nt-green-700 uppercase tracking-wider">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl lg:text-4xl font-bold text-nt-earth-900">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl font-bold text-nt-green-800">${product.price}</p>
              <p className="mt-6 text-nt-earth-700 leading-relaxed">{product.description}</p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-nt-earth-600">
                  <div className="w-8 h-8 bg-nt-green-100/80 rounded-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-nt-green-600" />
                  </div>
                  Wild-crafted & organic ingredients
                </div>
                <div className="flex items-center gap-3 text-sm text-nt-earth-600">
                  <div className="w-8 h-8 bg-nt-green-100/80 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-nt-green-600" />
                  </div>
                  Handcrafted with care in Los Angeles
                </div>
                <div className="flex items-center gap-3 text-sm text-nt-earth-600">
                  <div className="w-8 h-8 bg-nt-green-100/80 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-nt-green-600" />
                  </div>
                  Free shipping on orders over $75
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-nt-earth-700">Quantity:</span>
                  <div className="flex items-center border border-nt-earth-200 rounded-lg">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2 hover:bg-nt-earth-100 rounded-l-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 hover:bg-nt-earth-100 rounded-r-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={added}
                  className={`w-full py-4 font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5 ${
                    added
                      ? 'bg-nt-green-100 text-nt-green-800'
                      : 'bg-nt-green-700 text-white hover:bg-nt-green-800'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart — ${(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>

                <div className="mt-6">
                  <FDADisclaimer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
