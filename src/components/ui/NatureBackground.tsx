'use client'

export function NatureBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep purple gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-nt-purple-950 via-nt-purple-900/90 to-nt-cream" />

      {/* Soft ambient glow orbs — sparse, blurred, no hard shapes */}
      <div
        className="absolute rounded-full animate-breathe-slow"
        style={{
          width: '480px',
          height: '480px',
          left: '-10%',
          top: '5%',
          background: 'radial-gradient(circle, rgba(147,51,234,0.14) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="absolute rounded-full animate-breathe-slow"
        style={{
          width: '400px',
          height: '400px',
          right: '-8%',
          top: '30%',
          background: 'radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)',
          filter: 'blur(20px)',
          animationDelay: '4s',
        }}
      />
      <div
        className="absolute rounded-full animate-breathe-slow"
        style={{
          width: '520px',
          height: '520px',
          left: '20%',
          bottom: '-10%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          filter: 'blur(24px)',
          animationDelay: '8s',
        }}
      />

      {/* Sparse floating pollen */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`pollen-${i}`}
          className="absolute rounded-full animate-float-pollen"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${5 + (i * 9.5) % 92}%`,
            top: `${8 + (i * 8.7) % 80}%`,
            opacity: 0.15 + (i % 3) * 0.06,
            background: i % 2 === 0 ? 'var(--color-nt-purple-300)' : 'var(--color-nt-gold-light)',
            animationDuration: `${14 + (i % 4) * 3}s`,
            animationDelay: `${(i * 0.9) % 10}s`,
          }}
        />
      ))}

      {/* Single slow mist band */}
      <div className="absolute inset-0 animate-mist-slow opacity-[0.06]">
        <div className="absolute top-[30%] left-[-10%] w-[120%] h-[100px] bg-gradient-to-r from-transparent via-nt-purple-300 to-transparent blur-3xl" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(59,7,100,0.12)_100%)]" />

      {/* Canopy top edge */}
      <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-nt-purple-950 to-transparent" />
    </div>
  )
}
