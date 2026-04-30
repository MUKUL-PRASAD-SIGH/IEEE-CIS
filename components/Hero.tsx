'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Members' },
  { value: '50+', label: 'Events' },
  { value: '10+', label: 'Years Active' },
  { value: '20+', label: 'Projects' },
]

export default function Hero() {
  const particlesRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number
    }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 228, 245, ${p.opacity + 0.2})` // Increased opacity for better visibility
        ctx.fill()
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) { // Slightly increased connection distance
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(200, 228, 245, ${0.4 * (1 - dist / 120)})` // Increased connection opacity and thickness
            ctx.lineWidth = 1.0 // Increased line width from 0.5 to 1.0
            ctx.stroke()
          }
        })
      })

      animFrame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ieee-gradient"
    >
      {/* Animated particle canvas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 hero-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,132,200,0.25) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,98,155,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-36">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-ieee-gold animate-pulse" />
            <span className="text-blue-100 text-sm font-medium tracking-wide">
              IEEE Student Branch Chapter · Bangalore
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-up">
            Computational{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Intelligence</span>
              <span
                className="absolute inset-0 rounded-lg -z-0"
                style={{ background: 'rgba(0,132,200,0.25)', padding: '0 8px', margin: '0 -8px' }}
                aria-hidden="true"
              />
            </span>
            <br />
            Society
          </h1>

          {/* Subheading */}
          <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Advancing the theory, design, and application of biologically and linguistically motivated 
            computational paradigms — neural networks, fuzzy systems, evolutionary computing, and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => {
                const el = document.getElementById('events')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ieee-blue font-semibold text-sm hover:bg-ieee-sky transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Events
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('about')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl px-5 py-4 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg"
              >
                <p className="font-display font-black text-3xl text-white mb-0.5">{stat.value}</p>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer group animate-float"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
      </button>
    </section>
  )
}
