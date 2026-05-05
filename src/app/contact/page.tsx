'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div>
        <section className="py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">Thank You!</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Thanks for submitting! We will get back to you within 24-48 hours.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white text-center">
        <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
          Have questions? Want a consultation or personal chef service? Leave us a message.
        </p>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition"
              >
                <option value="">Select a topic</option>
                <option value="consultation">Consultation</option>
                <option value="personal-chef">Personal Chef</option>
                <option value="meal-plan">Meal Plan</option>
                <option value="products">Products</option>
                <option value="events">Events</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
