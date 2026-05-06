'use client'

import { useEffect, useState, useRef } from 'react'

const buffer: string[] = []
const TARGET = 'alkaline'

export function EasterEgg() {
  const [active, setActive] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Tab') return
      buffer.push(e.key.toLowerCase())
      if (buffer.length > TARGET.length) buffer.shift()

      if (buffer.join('') === TARGET) {
        setActive(true)
        buffer.length = 0
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setActive(false), 6000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (active) {
      const fireflies = document.querySelectorAll('.firefly-spawn')
      fireflies.forEach((f) => {
        ;(f as HTMLElement).style.opacity = '1'
      })
    }
  }, [active])

  if (!active) return null

  return (
    <div className="easter-egg-overlay active" aria-hidden="true">
      {/* Rainforest Trees - detailed SVG silhouettes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`tree-${i}`}
          className="easter-egg-tree"
          style={{
            left: `${5 + i * 8 + (i % 3) * 3}%`,
            transform: `translateY(${50 + (i % 4) * 20}px)`,
            transitionDelay: `${i * 0.15}s`,
            width: `${120 + (i % 4) * 60}px`,
            height: `${300 + (i % 3) * 150}px`,
            zIndex: 1 + (i % 3),
            opacity: active ? 1 : 0,
          }}
        >
          <RainforestTree index={i} />
        </div>
      ))}

      {/* Firefly particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`firefly-${i}`}
          className="firefly-spawn animate-firefly"
          style={{
            position: 'absolute',
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            left: `${10 + (i * 3.2) % 80}%`,
            top: `${10 + (i * 5.7) % 70}%`,
            borderRadius: '50%',
            background: i % 3 === 0 ? '#f0d48a' : i % 3 === 1 ? '#4ade80' : '#86efac',
            boxShadow: `0 0 ${6 + (i % 4)}px ${i % 3 === 0 ? '#f0d48a' : '#4ade80'}`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + (i % 4) * 1.5}s`,
            opacity: 0,
          }}
        />
      ))}

      {/* Center message */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <p className="text-5xl lg:text-7xl font-serif text-white/90 drop-shadow-lg">
            Welcome to the Temple
          </p>
          <p className="text-xl text-nt-green-200 mt-4 drop-shadow">
            Your alkaline journey begins here
          </p>
        </div>
      </div>

      {/* Mist layers */}
      <div className="absolute inset-0 animate-mist-slow opacity-10 z-15">
        <div className="absolute bottom-[10%] left-[-10%] w-[120%] h-[80px] bg-gradient-to-r from-transparent via-nt-green-400 to-transparent blur-2xl" />
      </div>
    </div>
  )
}

function RainforestTree({ index }: { index: number }) {
  const trees = [
    // Palm tree
    <svg viewBox="0 0 200 500" fill="none" key="palm">
      <path d="M100 500 Q98 400 95 300 Q92 200 90 150 Q88 100 92 60" stroke="#1a472a" strokeWidth="8" fill="none" />
      <path d="M92 60 Q60 30 20 50" stroke="#2d8a4e" strokeWidth="3" fill="none" />
      <path d="M92 60 Q80 20 50 10" stroke="#2d8a4e" strokeWidth="3" fill="none" />
      <path d="M92 60 Q100 15 120 20" stroke="#2d8a4e" strokeWidth="3" fill="none" />
      <path d="M92 60 Q130 30 170 40" stroke="#2d8a4e" strokeWidth="3" fill="none" />
      <path d="M92 60 Q140 50 180 70" stroke="#2d8a4e" strokeWidth="3" fill="none" />
      <path d="M92 60 Q50 70 10 80" stroke="#2d8a4e" strokeWidth="3" fill="none" />
      <ellipse cx="20" cy="50" rx="30" ry="10" fill="#1a6b3c" opacity="0.8" />
      <ellipse cx="50" cy="10" rx="35" ry="8" fill="#228B22" opacity="0.7" />
      <ellipse cx="120" cy="20" rx="32" ry="8" fill="#228B22" opacity="0.7" />
      <ellipse cx="170" cy="40" rx="28" ry="8" fill="#1a6b3c" opacity="0.8" />
      <ellipse cx="180" cy="70" rx="25" ry="7" fill="#1a6b3c" opacity="0.8" />
      <ellipse cx="10" cy="80" rx="22" ry="6" fill="#1a6b3c" opacity="0.8" />
    </svg>,
    // Banyan tree
    <svg viewBox="0 0 250 500" fill="none" key="banyan">
      <path d="M125 500 Q120 380 115 280 Q110 180 105 120 Q100 70 110 30" stroke="#2d1810" strokeWidth="12" fill="none" />
      <path d="M110 120 Q70 100 30 130" stroke="#2d1810" strokeWidth="4" fill="none" />
      <path d="M108 140 Q160 110 200 140" stroke="#2d1810" strokeWidth="4" fill="none" />
      <path d="M115 280 Q80 300 50 350" stroke="#3d2817" strokeWidth="3" fill="none" />
      <path d="M118 260 Q170 280 195 340" stroke="#3d2817" strokeWidth="3" fill="none" />
      <ellipse cx="110" cy="30" rx="55" ry="35" fill="#1a5c3a" />
      <ellipse cx="70" cy="55" rx="45" ry="28" fill="#228B22" />
      <ellipse cx="150" cy="55" rx="45" ry="28" fill="#228B22" />
      <ellipse cx="30" cy="130" rx="35" ry="22" fill="#1a6b3c" />
      <ellipse cx="200" cy="140" rx="35" ry="22" fill="#1a6b3c" />
      <ellipse cx="90" cy="90" rx="40" ry="25" fill="#2d8a4e" />
      <ellipse cx="140" cy="90" rx="40" ry="25" fill="#2d8a4e" />
      <ellipse cx="110" cy="70" rx="30" ry="20" fill="#4ade80" opacity="0.6" />
    </svg>,
    // Broadleaf tropical
    <svg viewBox="0 0 220 500" fill="none" key="broadleaf">
      <path d="M110 500 Q108 400 105 300 Q102 200 100 140 Q98 90 105 50" stroke="#3d2817" strokeWidth="10" fill="none" />
      <path d="M100 140 Q60 110 25 130" stroke="#3d2817" strokeWidth="3" fill="none" />
      <path d="M102 120 Q150 90 190 115" stroke="#3d2817" strokeWidth="3" fill="none" />
      <path d="M103 160 Q65 145 35 170" stroke="#3d2817" strokeWidth="2.5" fill="none" />
      <path d="M104 155 Q145 135 180 160" stroke="#3d2817" strokeWidth="2.5" fill="none" />
      <ellipse cx="105" cy="50" rx="50" ry="30" fill="#1a6b3c" />
      <ellipse cx="60" cy="70" rx="40" ry="25" fill="#228B22" />
      <ellipse cx="150" cy="70" rx="40" ry="25" fill="#228B22" />
      <ellipse cx="25" cy="130" rx="30" ry="18" fill="#2d8a4e" />
      <ellipse cx="190" cy="115" rx="30" ry="18" fill="#2d8a4e" />
      <ellipse cx="35" cy="170" rx="25" ry="15" fill="#1a6b3c" />
      <ellipse cx="180" cy="160" rx="25" ry="15" fill="#1a6b3c" />
      <ellipse cx="85" cy="95" rx="35" ry="22" fill="#4ade80" opacity="0.5" />
      <ellipse cx="130" cy="95" rx="35" ry="22" fill="#4ade80" opacity="0.5" />
    </svg>,
  ]

  return <>{trees[index % trees.length]}</>
}
