'use client'

import { useCart } from '@/lib/cart/context'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Minus, Plus, X, ShoppingBag, CreditCard } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  const [referralCode, setReferralCode] = useState('')
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')
  const router = useRouter()

  const handleCheckout = async () => {
    setCheckoutLoading(true)
    setCheckoutError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item._id,
            quantity: item.quantity,
            price: item.price,
            name: item.name,
          })),
          referralCode: referralCode.trim() || undefined,
        }),
      })

      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setCheckoutError('Could not start checkout. Please try again.')
      }
    } catch {
      setCheckoutError('Something went wrong. Please try again.')
    }
    setCheckoutLoading(false)
  }

  if (items.length === 0) {
    return (
      <div>
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShoppingBag className="w-16 h-16 text-nt-earth-300 mx-auto mb-6" />
            <h1 className="text-3xl lg:text-4xl font-bold text-nt-earth-900">Your Cart</h1>
            <p className="mt-4 text-lg text-nt-earth-600">Your cart is empty.</p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Browse Products
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-nt-green-700 font-medium hover:text-nt-green-800 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-nt-earth-900">Your Cart</h1>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-nt-earth-900 truncate">{item.name}</h3>
                    <p className="text-sm text-nt-earth-500">${item.price}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="p-1 border border-nt-earth-200 rounded hover:bg-nt-earth-100 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="p-1 border border-nt-earth-200 rounded hover:bg-nt-earth-100 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="ml-auto p-1 text-nt-earth-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold text-nt-earth-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold text-nt-earth-900 mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-nt-earth-600">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-nt-earth-600">
                    <span>Shipping</span>
                    <span>{total >= 75 ? 'Free' : '$5.00'}</span>
                  </div>
                  <div className="border-t border-nt-earth-200 pt-3 flex justify-between font-semibold text-nt-earth-900">
                    <span>Total</span>
                    <span>${(total + (total >= 75 ? 0 : 5)).toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="referral" className="block text-xs font-medium text-nt-earth-600 mb-1">
                    Referral Code (optional)
                  </label>
                  <input
                    id="referral"
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                    placeholder="NT-XXXXXXXX"
                    className="w-full px-3 py-2 border border-nt-earth-200 rounded-lg text-sm focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none bg-white/50"
                  />
                </div>

                {checkoutError && (
                  <p className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {checkoutError}
                  </p>
                )}

                <button
                  onClick={handleCheckout}
                  disabled={checkoutLoading}
                  className="mt-4 w-full py-3 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <CreditCard className="w-4 h-4" />
                  {checkoutLoading ? 'Redirecting...' : 'Checkout'}
                </button>

                <button
                  onClick={clearCart}
                  className="mt-2 w-full py-2 text-sm text-nt-earth-500 hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
