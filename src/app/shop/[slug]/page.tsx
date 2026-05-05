import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProductBySlug, products } from '@/lib/products'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Leaf, ShieldCheck, Truck } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-nt-green-700 font-medium hover:text-nt-green-800 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-nt-earth-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
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
                  <Leaf className="w-5 h-5 text-nt-green-600" />
                  Wild-crafted & organic ingredients
                </div>
                <div className="flex items-center gap-3 text-sm text-nt-earth-600">
                  <ShieldCheck className="w-5 h-5 text-nt-green-600" />
                  Handcrafted with care in Los Angeles
                </div>
                <div className="flex items-center gap-3 text-sm text-nt-earth-600">
                  <Truck className="w-5 h-5 text-nt-green-600" />
                  Free shipping on orders over $75
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
