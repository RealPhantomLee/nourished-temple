const testimonials = [
  {
    name: 'Keisha M.',
    location: 'Los Angeles',
    text: 'Six weeks on the sea moss gel and I stopped buying concealer. My skin hasn\'t looked like this in years.',
  },
  {
    name: 'Marcus T.',
    location: 'Compton',
    text: 'Down 28 pounds since I started the alkaline meal prep. Mel\'s food doesn\'t taste like a sacrifice — it tastes like healing.',
  },
  {
    name: 'Aisha R.',
    location: 'Inglewood',
    text: 'I\'d given up on my edges. Batana oil brought them back in three months. Nothing pharmaceutical ever did that.',
  },
  {
    name: 'Tanya B.',
    location: 'Long Beach',
    text: 'The N360 tonic is the first thing I reach for every morning. My afternoon energy crashes are completely gone.',
  },
  {
    name: 'Dominique K.',
    location: 'Culver City',
    text: 'One detox package reset everything — digestion, sleep, mood. I came back for the meal prep the very next week.',
  },
  {
    name: 'James W.',
    location: 'Hawthorne',
    text: 'The consultation answered questions I\'d been asking doctors for years. Finally someone who understands root cause.',
  },
]

export function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-10 bg-nt-green-950/40 backdrop-blur-sm overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-nt-green-950 via-transparent to-nt-green-950 z-10 pointer-events-none" />
      <div className="animate-marquee flex">
        {doubled.map((t, i) => (
          <div key={i} className="inline-flex items-start gap-4 mx-10 shrink-0 max-w-sm">
            <span className="text-nt-gold text-xl mt-1 shrink-0">✦</span>
            <div>
              <p className="text-white/90 text-base font-serif italic leading-snug whitespace-nowrap">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-1 text-nt-green-400 text-xs font-medium">
                — {t.name}, {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
