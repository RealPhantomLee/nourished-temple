'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/lib/cart/context'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag, CreditCard } from 'lucide-react'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart()
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleCheckout = async () => {
    setCheckoutLoading(true)
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
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      alert('Could not start checkout.')
    }
    setCheckoutLoading(false)
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-nt-cream/95 backdrop-blur-xl shadow-2xl z-50 transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-nt-earth-200">
            <h2 className="text-xl font-serif font-bold text-nt-earth-900">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-nt-earth-100 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-nt-earth-300 mx-auto mb-4" />
                <p className="text-nt-earth-600">Your cart is empty.</p>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="mt-4 inline-block text-nt-green-700 font-medium hover:underline"
                >
                  Browse Products →
                </Link>
              </div>
            ) : (
              items.map((item, i) => (
                <div
                  key={item._id}
                  className="flex gap-4 p-3 bg-white/60 rounded-lg animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-nt-earth-900 truncate">{item.name}</h3>
                    <p className="text-sm text-nt-earth-500">${item.price}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="p-1 border border-nt-earth-200 rounded hover:bg-nt-earth-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="p-1 border border-nt-earth-200 rounded hover:bg-nt-earth-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="ml-auto p-1 text-nt-earth-400 hover:text-red-500"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold text-nt-earth-900 shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-nt-earth-200 bg-white/40">
              <div className="flex justify-between text-lg font-bold text-nt-earth-900 mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="w-full py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <CreditCard className="w-4 h-4" />
                {checkoutLoading ? 'Redirecting...' : 'Checkout'}
              </button>
              <Link
                href="/cart"
                onClick={onClose}
                className="block text-center mt-3 text-sm text-nt-earth-500 hover:text-nt-green-700 transition-colors"
              >
                View Full Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
