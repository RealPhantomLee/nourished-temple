'use client'

import { useEffect, useRef } from 'react'

function LeafSVG({ size = 24, color = '#15803d' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CustomCursor() {
  const mainRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)
  const targetPos = useRef({ x: -100, y: -100 })
  const trailPos = useRef({ x: -100, y: -100 })
  const angleRef = useRef(0)
  const lastTimeRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, select, textarea, .interactive')) {
        isHoveringRef.current = true
      }
    }

    const handleMouseOut = () => {
      isHoveringRef.current = false
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mouseout', handleMouseOut, { passive: true })

    const animate = (time: number) => {
      if (!mainRef.current || !trailRef.current) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      const elapsed = time - lastTimeRef.current
      if (elapsed < 8) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = time

      const tx = targetPos.current.x
      const ty = targetPos.current.y

      const dx = tx - trailPos.current.x
      const dy = ty - trailPos.current.y
      const newAngle = Math.atan2(dy, dx)
      angleRef.current += (newAngle - angleRef.current) * 0.3

      trailPos.current.x += dx * 0.15
      trailPos.current.y += dy * 0.15

      const rot = angleRef.current * (180 / Math.PI) + 90

      mainRef.current.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`
      trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) rotate(${rot}deg)`

      frameRef.current = requestAnimationFrame(animate)
    }

    const frameRef = { current: 0 }
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={mainRef}
        className="cursor-leaf-main"
      >
        <LeafSVG size={24} color="#15803d" />
      </div>
      <div
        ref={trailRef}
        className="cursor-leaf-trail"
      >
        <LeafSVG size={16} color="#16a34a" />
      </div>
    </>
  )
}
