"use client"

import { useEffect, useState } from "react"

interface SparklesProps {
  className?: string
  density?: number
  color?: string
  speed?: number
}

export function Sparkles({ className, density = 800, color = "#FFFFFF", speed = 1 }: SparklesProps) {
  const [particles, setParticles] = useState<Array<{x: number, y: number, vx: number, vy: number, size: number, opacity: number}>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: density }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2 * speed,
      vy: Math.random() * 0.5 + 0.2 * speed,
      size: Math.random() * 2 + 1,
      opacity: Math.random(),
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        opacity: p.opacity > 0 ? p.opacity - 0.002 : 1,
      })).filter(p => p.y < 100))
    }, 16)

    return () => clearInterval(interval)
  }, [density])

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            borderRadius: '50%',
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
