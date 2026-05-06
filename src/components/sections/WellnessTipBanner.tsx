'use client'

import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { wellnessTips } from '@/lib/wellnessTips'

export function WellnessTipBanner() {
  const [tip, setTip] = useState('')

  useEffect(() => {
    setTip(wellnessTips[Math.floor(Math.random() * wellnessTips.length)])
  }, [])

  if (!tip) return null

  return (
    <div className="relative bg-nt-green-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center gap-3">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nt-gold shrink-0 animate-pulse" />
          <p className="text-[11px] sm:text-xs text-nt-green-100 leading-snug">
            {tip}
          </p>
        </div>
      </div>
    </div>
  )
}
