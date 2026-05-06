'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import { Search, ChevronDown, ChevronUp, Leaf, BookOpen, FlaskConical, MapPin, Star } from 'lucide-react'
import { herbs, herbCategories, healthBenefits, benefitKeywords, type Herb } from '@/lib/herbs'

function HerbCard({ herb, isExpanded, onToggle }: {
  herb: Herb
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="group rounded-2xl overflow-hidden transition-all duration-300">
      {/* Card header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left bg-white/75 backdrop-blur-md hover:bg-white/88 transition-all duration-200 p-6 rounded-2xl shadow-sm hover:shadow-lg"
        style={{ borderBottom: isExpanded ? `3px solid ${herb.accent}` : '3px solid transparent', borderRadius: isExpanded ? '1rem 1rem 0 0' : '1rem' }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Category badge */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white mb-3"
              style={{ backgroundColor: herb.accent }}
            >
              {herb.category}
            </span>

            <h3 className="text-lg font-bold text-nt-earth-900 leading-tight">{herb.name}</h3>
            <p className="text-xs text-nt-earth-500 italic mt-0.5">{herb.latinName}</p>

            {/* Top 3 benefits preview */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {herb.benefits.slice(0, 3).map((b) => (
                <span key={b} className="text-xs bg-nt-green-50 text-nt-green-800 border border-nt-green-200 px-2 py-0.5 rounded-full">
                  {b}
                </span>
              ))}
              {herb.benefits.length > 3 && (
                <span className="text-xs text-nt-earth-400">+{herb.benefits.length - 3} more</span>
              )}
            </div>
          </div>

          <div className="shrink-0 mt-1 text-nt-earth-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </button>

      {/* Expanded detail panel */}
      {isExpanded && (
        <div className="bg-white/88 backdrop-blur-md rounded-b-2xl shadow-lg border-t-0 px-6 pb-8 pt-6 space-y-6">
          {/* Description */}
          <p className="text-nt-earth-800 leading-[1.85] text-[0.95rem]">{herb.description}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Full benefits */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-nt-green-600" />
                <h4 className="text-sm font-bold text-nt-earth-900 uppercase tracking-wider">Benefits</h4>
              </div>
              <ul className="space-y-2">
                {herb.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-nt-earth-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-nt-green-500 mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical className="w-4 h-4 text-nt-green-600" />
                <h4 className="text-sm font-bold text-nt-earth-900 uppercase tracking-wider">Preparation</h4>
              </div>
              <ul className="space-y-2">
                {herb.preparation.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-nt-earth-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-nt-gold mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Origin */}
          <div className="flex items-start gap-2 text-sm text-nt-earth-600 bg-nt-earth-50 rounded-xl px-4 py-3">
            <MapPin className="w-4 h-4 text-nt-earth-400 shrink-0 mt-0.5" />
            <span><strong className="text-nt-earth-800">Origin:</strong> {herb.origin}</span>
          </div>

          {/* Dr. Sebi note */}
          {herb.drSebiNote && (
            <div className="border-l-4 pl-4" style={{ borderColor: herb.accent }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: herb.accent }}>
                Dr. Sebi Connection
              </p>
              <p className="text-sm text-nt-earth-700 leading-relaxed italic">{herb.drSebiNote}</p>
            </div>
          )}

          {/* Used in Nourished Temple products */}
          {herb.usedIn && herb.usedIn.length > 0 && (
            <div className="bg-nt-green-50 border border-nt-green-200 rounded-xl px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wider text-nt-green-700 mb-1">
                Found in Our Products
              </p>
              <ul className="space-y-1">
                {herb.usedIn.map((p) => (
                  <li key={p} className="text-sm text-nt-green-800 font-medium">→ {p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function HerbsPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeBenefit, setActiveBenefit] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return herbs.filter((herb) => {
      const matchSearch =
        search.trim() === '' ||
        herb.name.toLowerCase().includes(search.toLowerCase()) ||
        herb.latinName.toLowerCase().includes(search.toLowerCase()) ||
        herb.description.toLowerCase().includes(search.toLowerCase())

      const matchCategory = activeCategory === 'All' || herb.category === activeCategory

      const matchBenefit =
        activeBenefit === 'All' ||
        (benefitKeywords[activeBenefit] || []).some((kw) =>
          herb.benefits.join(' ').toLowerCase().includes(kw) ||
          herb.description.toLowerCase().includes(kw)
        )

      return matchSearch && matchCategory && matchBenefit
    })
  }, [search, activeCategory, activeBenefit])

  const toggle = (id: string) => setExpandedId((prev) => (prev === id ? null : id))

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-nt-green-300 mb-5">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">Alkaline Plant Medicine</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Herb Encyclopedia
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Roots, leaves, barks, and sea vegetables used in Nourished Temple Kreationz — each one grounded in ancestral wisdom and the Alkaline Electric lifestyle.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search + Filters */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-5 mb-10 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-nt-earth-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search herbs by name, benefit, or description…"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-nt-earth-200 bg-white/70 text-nt-earth-900 placeholder-nt-earth-400 focus:outline-none focus:ring-2 focus:ring-nt-green-500 focus:border-transparent text-sm transition"
              />
            </div>

            {/* Category filter */}
            <div>
              <p className="text-xs font-semibold text-nt-earth-500 uppercase tracking-wider mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {herbCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                      activeCategory === cat
                        ? 'bg-nt-green-700 text-white shadow-sm'
                        : 'bg-nt-earth-100 text-nt-earth-700 hover:bg-nt-earth-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefit filter */}
            <div>
              <p className="text-xs font-semibold text-nt-earth-500 uppercase tracking-wider mb-2">Health Focus</p>
              <div className="flex flex-wrap gap-2">
                {healthBenefits.map((ben) => (
                  <button
                    key={ben}
                    onClick={() => setActiveBenefit(ben)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                      activeBenefit === ben
                        ? 'bg-nt-gold text-nt-earth-900 shadow-sm'
                        : 'bg-nt-earth-100 text-nt-earth-700 hover:bg-nt-earth-200'
                    }`}
                  >
                    {ben}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            <p className="text-xs text-nt-earth-500">
              Showing <strong className="text-nt-earth-700">{filtered.length}</strong> of {herbs.length} herbs
              {(search || activeCategory !== 'All' || activeBenefit !== 'All') && (
                <button
                  onClick={() => { setSearch(''); setActiveCategory('All'); setActiveBenefit('All') }}
                  className="ml-3 text-nt-green-700 hover:text-nt-green-800 underline"
                >
                  Clear filters
                </button>
              )}
            </p>
          </div>

          {/* Herb grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white/70 backdrop-blur-md rounded-2xl">
              <Leaf className="w-12 h-12 text-nt-earth-300 mx-auto mb-4" />
              <p className="text-xl font-serif text-nt-earth-700">No herbs match your filters.</p>
              <p className="text-sm text-nt-earth-500 mt-2">Try adjusting the category or health focus.</p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
              {filtered.map((herb) => (
                <div key={herb.id} className="break-inside-avoid">
                  <HerbCard
                    herb={herb}
                    isExpanded={expandedId === herb.id}
                    onToggle={() => toggle(herb.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-nt-green-950/50 backdrop-blur-sm" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Leaf className="w-8 h-8 text-nt-green-400 mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white">
            Want these herbs working for your temple?
          </h2>
          <p className="mt-4 text-nt-green-200 leading-relaxed">
            Our handcrafted compounds bring these alkaline herbs together in intentional formulas — each one made fresh by Mel in Los Angeles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/shop"
              className="px-8 py-3.5 bg-nt-gold text-nt-earth-900 font-semibold rounded-lg hover:bg-nt-gold-light transition-colors hover:shadow-lg"
            >
              Shop Herbal Compounds
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
