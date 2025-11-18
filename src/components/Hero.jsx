import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function Hero() {
  const containerRef = useRef(null)

  // Scroll-linked transforms for parallax on the Spline canvas and glow orb
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220])

  // Mouse reactive glow position (falls back to center on touch)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.4 })
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = e.clientX / w
      const y = e.clientY / h
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Smoothly follow mouse with memoized style
  const glowStyle = useMemo(() => ({
    left: `calc(${mouse.x * 100}% - 200px)`,
    top: `calc(${mouse.y * 100}% - 200px)`,
  }), [mouse])

  return (
    <section ref={containerRef} id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        {/* Scroll-reactive Spline background */}
        <motion.div style={{ y: parallaxY, scale: parallaxScale }} className="absolute inset-0 will-change-transform">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>

        {/* Interactive glow orb that follows cursor + scroll ("the ball") */}
        <motion.div
          aria-hidden
          style={{ y: glowY, ...glowStyle }}
          className="pointer-events-none absolute h-[400px] w-[400px] rounded-full opacity-60 blur-3xl"
        >
          <div className="h-full w-full rounded-full" style={{
            background: 'radial-gradient(closest-side, rgba(168,85,247,0.45), rgba(79,70,229,0.30), rgba(236,72,153,0.18), transparent 70%)',
            filter: 'saturate(120%)',
            mixBlendMode: 'screen',
          }} />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live automation brain for your business
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.6 }} className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Connect your data, processes, and tools to one AI Brain
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg leading-8 text-slate-300">
            Centralize documents, CRMs, and workflows. Deploy agents that read, reason, and act across your stack. Build once, scale everywhere.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-10 flex items-center justify-center gap-3">
            <a href="#cta" className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-200 transition-colors">
              Start free
            </a>
            <a href="#product" className="rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              Explore product
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-6 text-xs text-slate-400">
            No credit card required
          </motion.div>
        </div>
      </div>
    </section>
  )
}
