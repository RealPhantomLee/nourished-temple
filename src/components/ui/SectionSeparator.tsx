interface SectionSeparatorProps {
  variant?: 'wave' | 'vine' | 'leaf' | 'eyebrow'
  flip?: boolean
  label?: string
}

export function SectionSeparator({ variant = 'wave', flip = false, label }: SectionSeparatorProps) {
  if (variant === 'eyebrow') {
    return (
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-px bg-nt-terracotta" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-nt-earth-600">
          {label}
        </span>
      </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div className={`section-divider ${flip ? 'rotate-180' : ''}`}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0 30 Q360 0 720 30 T1440 30 L1440 60 L0 60Z"
            fill="currentColor"
            className="text-nt-green-950/80"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'leaf') {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-nt-gold/50 to-transparent" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-nt-gold mx-3" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-nt-gold/50 to-transparent" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-4">
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-nt-green-700/30 to-transparent" />
    </div>
  )
}
