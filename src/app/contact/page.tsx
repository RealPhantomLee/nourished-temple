'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Sprout, CheckCircle, Send } from 'lucide-react'

const formFields = [
  [
    { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Your name', half: true },
    { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', half: true },
  ],
  [
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567', half: true },
    { id: 'subject', label: 'Reason for Contact', type: 'select', required: true, half: true, options: ['Consultation', 'Personal Chef', 'Meal Plan', 'Herbs & Compounds', 'Detox Package', 'Events & Pop-Ups', 'Product Inquiry', 'Community Program', 'Other'] },
  ],
  [
    { id: 'contactMethod', label: 'Preferred Contact Method', type: 'select', half: true, options: ['Email', 'Phone', 'Text Message'] },
    { id: 'hearAbout', label: 'How Did You Hear About Us?', type: 'select', half: true, options: ['Instagram', 'Friend/Family Referral', 'Google Search', 'Event/Pop-Up', 'Other Social Media', 'Other'] },
  ],
]

const healthFields = [
  { id: 'healthConcern', label: 'Health Concerns or Goals', type: 'textarea', rows: 2, placeholder: 'What health concerns or goals would you like help with?' },
]

const experienceFields = [
  { id: 'experienceLevel', label: 'Alkaline Experience Level', type: 'select', half: true, options: ['Just starting out', 'Currently transitioning', 'Some experience', 'Well versed in alkaline lifestyle'] },
  { id: 'dietaryRestrictions', label: 'Dietary Restrictions', type: 'select', half: true, options: ['None', 'Vegan', 'Full Alkaline', 'Raw Food', 'Fruitarian', 'Transitioning'] },
]

function FloatingField({ field, stagger }: { field: any; stagger: number }) {
  return (
    <ScrollReveal delay={stagger * 0.05}>
      <div className="floating-label-group">
        {field.type === 'select' ? (
          <>
            <label htmlFor={field.id} className="block text-sm font-medium text-nt-earth-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <select
              id={field.id}
              name={field.id}
              required={field.required}
              className={`w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50 ${field.half ? '' : ''}`}
            >
              <option value="">Select one</option>
              {field.options?.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </>
        ) : field.type === 'textarea' ? (
          <>
            <label htmlFor={field.id} className="block text-sm font-medium text-nt-earth-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              id={field.id}
              name={field.id}
              rows={field.rows || 4}
              className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50 resize-none"
              placeholder={field.placeholder}
            />
          </>
        ) : (
          <>
            <label htmlFor={field.id} className="block text-sm font-medium text-nt-earth-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              required={field.required}
              className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50"
              placeholder={field.placeholder}
            />
          </>
        )}
      </div>
    </ScrollReveal>
  )
}

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
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="relative z-10 text-center p-8">
          <div className="animate-sprout-grow mb-8 flex justify-center">
            <svg viewBox="0 0 100 150" className="w-32 h-48">
              <line x1="50" y1="150" x2="50" y2="50" stroke="#22c55e" strokeWidth="3" />
              <path d="M50 80 Q20 60 15 30" stroke="#4ade80" strokeWidth="2.5" fill="none" />
              <path d="M50 60 Q80 40 85 20" stroke="#4ade80" strokeWidth="2.5" fill="none" />
              <ellipse cx="15" cy="30" rx="15" ry="10" fill="#4ade80" />
              <ellipse cx="85" cy="20" rx="15" ry="10" fill="#4ade80" />
              <ellipse cx="50" cy="40" rx="12" ry="8" fill="#86efac" />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white">Thank You!</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-xl mx-auto">
            Your message has been received. We will get back to you within 24-48 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-nt-gold">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully</span>
          </div>
        </div>
      </div>
    )
  }

  let stagger = 0

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white">Contact Us</h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Have questions? Want a consultation or personal chef service? Let us know how we can help.
            </p>
          </ScrollReveal>
        </div>
        {/* Background lotus illustration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-[600px] h-[600px] animate-float" fill="white">
            <path d="M100 20 Q120 60 100 100 Q80 60 100 20Z" />
            <path d="M100 100 Q140 80 180 100 Q140 120 100 100Z" />
            <path d="M100 100 Q60 80 20 100 Q60 120 100 100Z" />
            <path d="M100 100 Q130 120 140 160 Q110 140 100 100Z" />
            <path d="M100 100 Q70 120 60 160 Q90 140 100 100Z" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white/70 backdrop-blur-sm p-8 lg:p-10 rounded-xl shadow-sm">
            {formFields.map((row, ri) => (
              <div key={ri} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {row.map((field: any) => {
                  const currentStagger = stagger++
                  return <FloatingField key={field.id} field={field} stagger={currentStagger} />
                })}
              </div>
            ))}

            {healthFields.map((field) => {
              const currentStagger = stagger++
              return <FloatingField key={field.id} field={field} stagger={currentStagger} />
            })}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experienceFields.map((field) => {
                const currentStagger = stagger++
                return <FloatingField key={field.id} field={field} stagger={currentStagger} />
              })}
            </div>

            <ScrollReveal delay={stagger * 0.05}>
              <div className="floating-label-group">
                <label htmlFor="message" className="block text-sm font-medium text-nt-earth-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50 resize-none"
                  placeholder="Tell us more about how we can help..."
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={(stagger + 1) * 0.05}>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="loading-leaf">
                    <Sprout className="w-5 h-5 animate-pulse" />
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </ScrollReveal>
          </form>
        </div>
      </section>
    </div>
  )
}
