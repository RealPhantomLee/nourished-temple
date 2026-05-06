'use client'

import { useEffect, useState } from 'react'

export function NatureBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const farParallax = scrollY * 0.08
  const midParallax = scrollY * 0.18
  const nearParallax = scrollY * 0.32

  const maxScroll = typeof window !== 'undefined' ? 4000 : 4000
  const scrollProgress = Math.min(scrollY / maxScroll, 1)

  const treeScale = 1 + scrollProgress * 1.5
  const treeOpacityMultiplier = 1 + scrollProgress * 1.2
  const treeGrowthDuration = 1200

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep forest gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-nt-green-950 via-nt-green-900/90 to-nt-cream" />

      {/* Light rays from canopy */}
      <div className="absolute top-0 left-[5%] w-[3px] h-full bg-gradient-to-b from-nt-green-400/30 via-nt-green-300/15 to-transparent transform rotate-12 blur-[4px] animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-0 left-[15%] w-[2px] h-full bg-gradient-to-b from-nt-gold/25 via-transparent to-transparent transform rotate-8 blur-[3px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
      <div className="absolute top-0 left-[28%] w-[4px] h-full bg-gradient-to-b from-nt-green-400/25 via-transparent to-transparent transform rotate-15 blur-[5px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
      <div className="absolute top-0 left-[42%] w-[2px] h-full bg-gradient-to-b from-nt-green-300/20 via-nt-green-200/10 to-transparent transform rotate-6 blur-[3px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      <div className="absolute top-0 right-[35%] w-[3px] h-full bg-gradient-to-b from-nt-gold/25 via-transparent to-transparent transform -rotate-8 blur-[4px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.8s' }} />
      <div className="absolute top-0 right-[22%] w-[2px] h-full bg-gradient-to-b from-nt-green-400/20 via-transparent to-transparent transform -rotate-12 blur-[3px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      <div className="absolute top-0 right-[10%] w-[3px] h-full bg-gradient-to-b from-nt-green-300/18 via-transparent to-transparent transform -rotate-5 blur-[4px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.8s' }} />
      <div className="absolute top-0 left-[55%] w-[2px] h-full bg-gradient-to-b from-nt-gold/15 via-transparent to-transparent transform rotate-10 blur-[2px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />

      {/* FAR LAYER - trees grow upward from ground */}
      <div className="absolute inset-0" style={{ transform: `translateY(${farParallax}px)` }}>
        {[...Array(14)].map((_, i) => (
          <div
            key={`far-${i}`}
            className="absolute bottom-0 animate-sway-tree"
            style={{
              left: `${(i * 7.5) % 95}%`,
              width: `${80 + (i % 4) * 35}px`,
              height: `${180 + (i % 5) * 50}px`,
              opacity: (0.04 + scrollProgress * 0.08) * treeOpacityMultiplier,
              animationDuration: `${16 + i * 1.5}s`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {/* Inner wrapper for scale growth - transformOrigin bottom makes trees grow upward */}
            <div
              className="w-full h-full"
              style={{
                transform: `scaleY(${treeScale})`,
                transformOrigin: 'bottom',
                transition: `transform ${treeGrowthDuration}ms ease-out`,
              }}
            >
              <svg viewBox="0 0 200 350" fill="none" className="w-full h-full">
                <path d="M100 350 Q97 280 95 200 Q93 140 95 100 Q97 60 100 30" stroke="#1a472a" strokeWidth="6" fill="none" />
                <path d="M95 100 Q60 70 25 85" stroke="#2d8a4e" strokeWidth="2" fill="none" />
                <path d="M97 80 Q120 50 150 60" stroke="#2d8a4e" strokeWidth="2" fill="none" />
                <path d="M96 130 Q55 110 20 130" stroke="#1a6b3c" strokeWidth="1.5" fill="none" />
                <path d="M98 120 Q140 95 175 110" stroke="#1a6b3c" strokeWidth="1.5" fill="none" />
                <ellipse cx="100" cy="30" rx="42" ry="24" fill="#1a6b3c" />
                <ellipse cx="60" cy="55" rx="32" ry="18" fill="#228B22" />
                <ellipse cx="140" cy="60" rx="32" ry="18" fill="#228B22" />
                <ellipse cx="25" cy="85" rx="24" ry="14" fill="#1a6b3c" />
                <ellipse cx="150" cy="75" rx="24" ry="14" fill="#1a6b3c" />
                <ellipse cx="20" cy="130" rx="18" ry="10" fill="#228B22" />
                <ellipse cx="175" cy="110" rx="18" ry="10" fill="#228B22" />
                <ellipse cx="85" cy="75" rx="28" ry="16" fill="#4ade80" opacity="0.5" />
                <ellipse cx="115" cy="75" rx="28" ry="16" fill="#4ade80" opacity="0.5" />
                <ellipse cx="100" cy="55" rx="20" ry="12" fill="#86efac" opacity="0.3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* MID-FAR LAYER */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.14}px)` }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={`midfar-${i}`}
            className="absolute bottom-0 animate-sway-tree"
            style={{
              left: `${(i * 11 + 3) % 92}%`,
              width: `${110 + (i % 3) * 40}px`,
              height: `${220 + (i % 4) * 55}px`,
              opacity: (0.05 + scrollProgress * 0.09) * treeOpacityMultiplier,
              animationDuration: `${18 + i * 1.8}s`,
              animationDelay: `${i * 0.9}s`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                transform: `scaleY(${treeScale})`,
                transformOrigin: 'bottom',
                transition: `transform ${treeGrowthDuration}ms ease-out`,
              }}
            >
              <svg viewBox="0 0 200 380" fill="none" className="w-full h-full">
                <path d="M100 380 Q98 300 96 220 Q94 150 96 100 Q98 50 100 25" stroke="#1f5c35" strokeWidth="7" fill="none" />
                <path d="M96 100 Q55 75 15 95" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
                <path d="M98 75 Q130 40 170 55" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
                <path d="M97 130 Q50 105 10 125" stroke="#1a6b3c" strokeWidth="2" fill="none" />
                <path d="M99 125 Q145 95 190 115" stroke="#1a6b3c" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="25" rx="45" ry="26" fill="#1a6b3c" />
                <ellipse cx="50" cy="50" rx="35" ry="20" fill="#228B22" />
                <ellipse cx="155" cy="55" rx="35" ry="20" fill="#228B22" />
                <ellipse cx="15" cy="95" rx="26" ry="15" fill="#1a6b3c" />
                <ellipse cx="170" cy="55" rx="26" ry="15" fill="#1a6b3c" />
                <ellipse cx="10" cy="125" rx="20" ry="12" fill="#2d8a4e" />
                <ellipse cx="190" cy="115" rx="20" ry="12" fill="#2d8a4e" />
                <ellipse cx="80" cy="70" rx="30" ry="18" fill="#4ade80" opacity="0.45" />
                <ellipse cx="125" cy="70" rx="30" ry="18" fill="#4ade80" opacity="0.45" />
                <ellipse cx="100" cy="50" rx="22" ry="14" fill="#86efac" opacity="0.25" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* MID LAYER */}
      <div className="absolute inset-0" style={{ transform: `translateY(${midParallax}px)` }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute bottom-0 animate-sway-tree"
            style={{
              left: `${(i * 10.5 + 2) % 90}%`,
              width: `${130 + (i % 4) * 45}px`,
              height: `${260 + (i % 4) * 70}px`,
              opacity: (0.06 + scrollProgress * 0.12) * treeOpacityMultiplier,
              animationDuration: `${20 + i * 2}s`,
              animationDelay: `${i * 1}s`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                transform: `scaleY(${treeScale})`,
                transformOrigin: 'bottom',
                transition: `transform ${treeGrowthDuration}ms ease-out`,
              }}
            >
              {i % 4 === 0 ? (
                <PalmTree />
              ) : i % 4 === 1 ? (
                <BanyanTree />
              ) : i % 4 === 2 ? (
                <BroadleafTree />
              ) : (
                <CedarTree />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MID-NEAR LAYER */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.25}px)` }}>
        {[...Array(7)].map((_, i) => (
          <div
            key={`midnear-${i}`}
            className="absolute bottom-0 animate-sway-tree"
            style={{
              left: `${(i * 15 + 5) % 88}%`,
              width: `${160 + (i % 3) * 50}px`,
              height: `${300 + (i % 3) * 60}px`,
              opacity: (0.07 + scrollProgress * 0.14) * treeOpacityMultiplier,
              animationDuration: `${22 + i * 2.5}s`,
              animationDelay: `${i * 1.3}s`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                transform: `scaleY(${treeScale})`,
                transformOrigin: 'bottom',
                transition: `transform ${treeGrowthDuration}ms ease-out`,
              }}
            >
              {i % 3 === 0 ? (
                <PalmTree />
              ) : i % 3 === 1 ? (
                <BroadleafTree />
              ) : (
                <BanyanTree />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom canopy */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-nt-green-900/20 to-transparent" />

      {/* Floating pollen/spores */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`pollen-${i}`}
          className="absolute rounded-full animate-float-pollen"
          style={{
            width: `${2 + (i % 5)}px`,
            height: `${2 + (i % 5)}px`,
            left: `${3 + (i * 3.2) % 94}%`,
            top: `${5 + (i * 5.7) % 88}%`,
            opacity: 0.15 + (i % 4) * 0.08,
            background: i % 4 === 0 ? 'var(--color-nt-green-400)' : i % 4 === 1 ? 'var(--color-nt-gold-light)' : i % 4 === 2 ? 'var(--color-nt-green-300)' : 'var(--color-nt-green-200)',
            animationDuration: `${12 + (i % 6) * 3}s`,
            animationDelay: `${(i * 0.7) % 12}s`,
          }}
        />
      ))}

      {/* Falling leaves */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`leaf-${i}`}
          className="absolute w-6 h-6 animate-leaf-fall"
          style={{
            left: `${5 + i * 10}%`,
            animationDelay: `${i * 2.5}s`,
            animationDuration: `${18 + i * 3}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-nt-green-600 opacity-35">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>
      ))}

      {/* NEAR LAYER - vines and ferns */}
      <div className="absolute inset-0" style={{ transform: `translateY(${nearParallax}px)` }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={`vine-${i}`}
            className="absolute top-0"
            style={{
              left: `${(i * 11) % 90}%`,
              width: '2px',
              height: `${70 + (i % 4) * 50}px`,
              background: 'linear-gradient(to bottom, rgba(26, 107, 60, 0.18), transparent)',
              transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (4 + i * 1.5)}deg)`,
            }}
          >
            <div className="w-3.5 h-2.5 rounded-full bg-nt-green-700/25" style={{ marginTop: '15px', marginLeft: '-6px' }} />
            <div className="w-2.5 h-2 rounded-full bg-nt-green-600/20" style={{ marginTop: '35px', marginLeft: '2px' }} />
            <div className="w-3 h-2 rounded-full bg-nt-green-700/15" style={{ marginTop: '25px', marginLeft: '-4px' }} />
          </div>
        ))}

        {/* Hanging ferns */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`fern-${i}`}
            className="absolute top-0"
            style={{
              left: `${(i * 20 + 8) % 85}%`,
              width: `${60 + i * 15}px`,
              height: `${50 + (i % 3) * 30}px`,
              opacity: 0.08 + scrollProgress * 0.1,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                transform: `scaleY(${treeScale})`,
                transformOrigin: 'top',
                transition: `transform ${treeGrowthDuration}ms ease-out`,
              }}
            >
              <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
                <path d="M50 0 Q48 20 45 40 Q42 60 50 80" stroke="#2d8a4e" strokeWidth="1.5" fill="none" />
                <ellipse cx="45" cy="15" rx="12" ry="6" fill="#228B22" transform="rotate(-15 45 15)" />
                <ellipse cx="55" cy="30" rx="14" ry="7" fill="#1a6b3c" transform="rotate(10 55 30)" />
                <ellipse cx="42" cy="45" rx="11" ry="5" fill="#228B22" transform="rotate(-12 42 45)" />
                <ellipse cx="56" cy="55" rx="10" ry="5" fill="#4ade80" transform="rotate(8 56 55)" opacity="0.6" />
                <ellipse cx="48" cy="65" rx="8" ry="4" fill="#2d8a4e" transform="rotate(-5 48 65)" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Mist layers */}
      <div className="absolute inset-0 animate-mist-slow opacity-[0.08]">
        <div className="absolute top-[12%] left-[-10%] w-[120%] h-[100px] bg-gradient-to-r from-transparent via-nt-green-400 to-transparent blur-3xl" />
      </div>
      <div className="absolute inset-0 animate-mist-slower opacity-[0.06]">
        <div className="absolute top-[35%] left-[-10%] w-[120%] h-[70px] bg-gradient-to-r from-transparent via-nt-earth-300 to-transparent blur-2xl" />
      </div>
      <div className="absolute inset-0 animate-mist-slow opacity-[0.05]" style={{ animationDuration: '60s' }}>
        <div className="absolute top-[55%] left-[-5%] w-[110%] h-[50px] bg-gradient-to-r from-transparent via-nt-gold/30 to-transparent blur-xl" />
      </div>
      <div className="absolute inset-0 animate-mist-slower opacity-[0.04]" style={{ animationDuration: '80s' }}>
        <div className="absolute top-[75%] left-[-8%] w-[115%] h-[60px] bg-gradient-to-r from-transparent via-nt-green-300 to-transparent blur-2xl" />
      </div>

      {/* Breathing light orbs */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full animate-breathe-slow"
          style={{
            width: `${80 + (i % 5) * 60}px`,
            height: `${80 + (i % 5) * 60}px`,
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 6) * 15}%`,
            background: i % 4 === 0
              ? 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)'
              : i % 4 === 1
                ? 'radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)'
                : i % 4 === 2
                  ? 'radial-gradient(circle, rgba(74,124,89,0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(134,239,172,0.08) 0%, transparent 70%)',
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${14 + i * 2}s`,
          }}
        />
      ))}

      {/* Dappled light patches */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`dapple-${i}`}
          className="absolute rounded-full animate-dapple-light"
          style={{
            width: `${40 + (i % 5) * 30}px`,
            height: `${40 + (i % 5) * 30}px`,
            left: `${3 + i * 8}%`,
            top: `${15 + (i % 5) * 18}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + (i % 5) * 3}s`,
          }}
        />
      ))}

      {/* Forest floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-nt-earth-200/30 to-transparent" />

      {/* Undergrowth */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={`undergrowth-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${i * 5}%`,
              width: `${40 + (i % 3) * 20}px`,
              height: `${30 + (i % 4) * 15}px`,
            }}
          >
            <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
              <ellipse cx="30" cy="20" rx="28" ry="18" fill="#1a6b3c" />
              <ellipse cx="15" cy="25" rx="15" ry="10" fill="#228B22" />
              <ellipse cx="45" cy="22" rx="14" ry="9" fill="#2d8a4e" />
            </svg>
          </div>
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,46,22,0.1)_100%)]" />

      {/* Canopy top edge */}
      <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-nt-green-950 to-transparent" />
    </div>
  )
}

function PalmTree() {
  return (
    <svg viewBox="0 0 200 450" fill="none" className="w-full h-full">
      <path d="M100 450 Q97 350 94 250 Q91 170 90 120 Q89 80 93 40" stroke="#1a472a" strokeWidth="7" fill="none" />
      <path d="M93 40 Q55 10 15 30" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
      <path d="M93 40 Q70 5 30 0" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
      <path d="M93 40 Q95 5 115 10" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
      <path d="M93 40 Q130 15 170 25" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
      <path d="M93 40 Q145 35 185 55" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
      <path d="M93 40 Q45 50 5 60" stroke="#2d8a4e" strokeWidth="2.5" fill="none" />
      <ellipse cx="15" cy="30" rx="28" ry="9" fill="#1a6b3c" opacity="0.85" />
      <ellipse cx="30" cy="0" rx="32" ry="7" fill="#228B22" opacity="0.75" />
      <ellipse cx="115" cy="10" rx="30" ry="7" fill="#228B22" opacity="0.75" />
      <ellipse cx="170" cy="25" rx="26" ry="7" fill="#1a6b3c" opacity="0.85" />
      <ellipse cx="185" cy="55" rx="24" ry="6" fill="#1a6b3c" opacity="0.85" />
      <ellipse cx="5" cy="60" rx="20" ry="5" fill="#1a6b3c" opacity="0.85" />
      <ellipse cx="60" cy="20" rx="22" ry="6" fill="#4ade80" opacity="0.4" />
      <ellipse cx="130" cy="30" rx="22" ry="6" fill="#4ade80" opacity="0.4" />
      <circle cx="90" cy="42" r="5" fill="#8B4513" opacity="0.6" />
      <circle cx="96" cy="38" r="4" fill="#8B4513" opacity="0.5" />
    </svg>
  )
}

function BanyanTree() {
  return (
    <svg viewBox="0 0 250 450" fill="none" className="w-full h-full">
      <path d="M125 450 Q120 350 115 250 Q110 160 105 100 Q100 60 110 25" stroke="#2d1810" strokeWidth="10" fill="none" />
      <path d="M110 100 Q65 80 25 110" stroke="#2d1810" strokeWidth="3.5" fill="none" />
      <path d="M108 120 Q165 90 210 115" stroke="#2d1810" strokeWidth="3.5" fill="none" />
      <path d="M115 250 Q75 270 45 320" stroke="#3d2817" strokeWidth="2.5" fill="none" />
      <path d="M118 230 Q175 250 200 310" stroke="#3d2817" strokeWidth="2.5" fill="none" />
      <path d="M112 80 Q70 60 35 85" stroke="#2d1810" strokeWidth="2" fill="none" />
      <path d="M114 75 Q155 50 195 70" stroke="#2d1810" strokeWidth="2" fill="none" />
      <ellipse cx="110" cy="25" rx="52" ry="30" fill="#1a5c3a" />
      <ellipse cx="65" cy="45" rx="42" ry="24" fill="#228B22" />
      <ellipse cx="155" cy="45" rx="42" ry="24" fill="#228B22" />
      <ellipse cx="25" cy="110" rx="34" ry="20" fill="#1a6b3c" />
      <ellipse cx="210" cy="115" rx="34" ry="20" fill="#1a6b3c" />
      <ellipse cx="35" cy="85" rx="22" ry="14" fill="#2d8a4e" />
      <ellipse cx="195" cy="70" rx="22" ry="14" fill="#2d8a4e" />
      <ellipse cx="85" cy="70" rx="38" ry="22" fill="#2d8a4e" />
      <ellipse cx="145" cy="70" rx="38" ry="22" fill="#2d8a4e" />
      <ellipse cx="110" cy="50" rx="30" ry="18" fill="#4ade80" opacity="0.5" />
      <ellipse cx="75" cy="90" rx="22" ry="14" fill="#2d8a4e" opacity="0.7" />
      <ellipse cx="150" cy="85" rx="22" ry="14" fill="#2d8a4e" opacity="0.7" />
      <ellipse cx="110" cy="35" rx="20" ry="12" fill="#86efac" opacity="0.3" />
    </svg>
  )
}

function BroadleafTree() {
  return (
    <svg viewBox="0 0 220 450" fill="none" className="w-full h-full">
      <path d="M110 450 Q108 360 105 270 Q102 180 100 120 Q98 70 105 35" stroke="#3d2817" strokeWidth="9" fill="none" />
      <path d="M100 120 Q55 90 20 110" stroke="#3d2817" strokeWidth="3" fill="none" />
      <path d="M102 100 Q155 70 195 95" stroke="#3d2817" strokeWidth="3" fill="none" />
      <path d="M103 140 Q60 125 30 145" stroke="#3d2817" strokeWidth="2" fill="none" />
      <path d="M104 135 Q150 115 185 135" stroke="#3d2817" strokeWidth="2" fill="none" />
      <path d="M101 90 Q65 65 25 85" stroke="#3d2817" strokeWidth="2.5" fill="none" />
      <path d="M103 85 Q145 55 180 75" stroke="#3d2817" strokeWidth="2.5" fill="none" />
      <ellipse cx="105" cy="35" rx="50" ry="28" fill="#1a6b3c" />
      <ellipse cx="55" cy="55" rx="40" ry="24" fill="#228B22" />
      <ellipse cx="155" cy="55" rx="40" ry="24" fill="#228B22" />
      <ellipse cx="20" cy="110" rx="30" ry="18" fill="#2d8a4e" />
      <ellipse cx="195" cy="95" rx="30" ry="18" fill="#2d8a4e" />
      <ellipse cx="30" cy="145" rx="24" ry="14" fill="#1a6b3c" />
      <ellipse cx="185" cy="135" rx="24" ry="14" fill="#1a6b3c" />
      <ellipse cx="25" cy="85" rx="20" ry="12" fill="#228B22" />
      <ellipse cx="180" cy="75" rx="20" ry="12" fill="#228B22" />
      <ellipse cx="85" cy="75" rx="35" ry="20" fill="#4ade80" opacity="0.5" />
      <ellipse cx="135" cy="75" rx="35" ry="20" fill="#4ade80" opacity="0.5" />
      <ellipse cx="105" cy="60" rx="26" ry="16" fill="#86efac" opacity="0.4" />
      <ellipse cx="105" cy="45" rx="18" ry="10" fill="#bbf7d0" opacity="0.25" />
    </svg>
  )
}

function CedarTree() {
  return (
    <svg viewBox="0 0 200 450" fill="none" className="w-full h-full">
      <path d="M100 450 L100 100" stroke="#3d2817" strokeWidth="8" fill="none" />
      <path d="M100 100 L70 130 L130 130 Z" fill="#1a5c3a" />
      <path d="M100 120 L55 160 L145 160 Z" fill="#228B22" />
      <path d="M100 150 L45 200 L155 200 Z" fill="#2d8a4e" />
      <path d="M100 185 L35 245 L165 245 Z" fill="#1a6b3c" />
      <path d="M100 225 L30 295 L170 295 Z" fill="#228B22" />
      <path d="M100 270 L25 350 L175 350 Z" fill="#2d8a4e" />
      <path d="M100 320 L20 410 L180 410 Z" fill="#1a5c3a" />
      <ellipse cx="100" cy="100" rx="8" ry="5" fill="#4ade80" opacity="0.5" />
      <ellipse cx="85" cy="145" rx="12" ry="7" fill="#4ade80" opacity="0.4" />
      <ellipse cx="115" cy="180" rx="14" ry="8" fill="#86efac" opacity="0.3" />
      <ellipse cx="95" cy="240" rx="16" ry="10" fill="#4ade80" opacity="0.35" />
      <ellipse cx="110" cy="300" rx="18" ry="11" fill="#86efac" opacity="0.25" />
    </svg>
  )
}
