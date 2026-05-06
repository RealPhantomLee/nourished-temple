const testimonials = [
  { name: 'Keisha M.', text: '"Sea moss gel changed my skin completely. I glow now." — Los Angeles' },
  { name: 'Marcus T.', text: '"Mel\'s alkaline meal prep saved my health. Down 30 lbs and energized."' },
  { name: 'Aisha R.', text: '"The batana oil brought my edges back after years of damage."' },
  { name: 'David W.', text: '"Consultation was eye-opening. Finally understand what my body needs."' },
  { name: 'Janelle P.', text: '"The detox package reset my whole temple. Best decision I made."' },
  { name: 'Tyrone H.', text: '"Community events are so uplifting. Real people, real healing."' },
]

export function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-10 bg-nt-green-950/40 backdrop-blur-sm overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-nt-green-950 via-transparent to-nt-green-950 z-10 pointer-events-none" />
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((t, i) => (
          <div
            key={i}
            className="inline-flex items-center mx-12"
          >
            <span className="text-nt-gold text-2xl mr-3">✦</span>
            <p className="text-white/90 text-lg font-serif italic whitespace-nowrap">
              {t.text}
            </p>
            <span className="ml-3 text-nt-green-400 text-sm">— {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
