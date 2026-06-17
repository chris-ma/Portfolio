'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BLOB_TRANSITION, fadeIn } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  const yText = useTransform(scrollY, [0, 600], [0, -140])
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      id="hero"
    >
      {/* ── Background blobs ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-3xl max-h-3xl rounded-full bg-brand-cobalt opacity-[0.12] blur-[120px] pointer-events-none"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={BLOB_TRANSITION}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-5%] w-[40vw] h-[40vw] max-w-2xl max-h-2xl rounded-full bg-brand-cobalt opacity-[0.07] blur-[100px] pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 30, -40, 0], scale: [1, 1.05, 1.1, 1] }}
        transition={{ ...BLOB_TRANSITION, duration: 11 }}
      />
      <motion.div
        className="absolute top-[40%] right-[20%] w-[20vw] h-[20vw] max-w-md max-h-md rounded-full bg-brand-concrete opacity-[0.15] blur-[80px] pointer-events-none"
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 10, 0] }}
        transition={{ ...BLOB_TRANSITION, duration: 13 }}
      />

      {/* ── Decorative grid overlay ───────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-muted) 1px, transparent 1px), linear-gradient(90deg, var(--brand-muted) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-32 pb-24"
        style={{ y: yText, opacity: opacityHero }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <SectionLabel>Creative Technologist · Digital Marketer · Product Manager</SectionLabel>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(5rem,18vw,16rem)] leading-[0.9] tracking-tighter text-brand-white"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            CHRIS
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(5rem,18vw,16rem)] leading-[0.9] tracking-tighter text-brand-white"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <span className="text-brand-cobalt">MA</span>
          </motion.h1>
        </div>

        {/* Sub-copy and CTAs */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <div className="max-w-sm">
            <p className="font-sans text-base text-brand-white/60 leading-relaxed">
              At the intersection of culture, technology, and commerce.
              Building digital experiences that move people.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="group font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-cobalt text-brand-white hover:bg-brand-cobalt-light transition-all duration-300 flex items-center gap-3"
            >
              View Work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-brand-white/20 text-brand-white/70 hover:border-brand-white/60 hover:text-brand-white transition-all duration-300"
            >
              About
            </a>
          </div>
        </motion.div>

        {/* Issue / metadata strip */}
        <motion.div
          className="mt-16 pt-6 border-t border-brand-concrete/40 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-muted">Vol. 01</span>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-muted">2026 Edition</span>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cobalt inline-block mr-2" />
              Available for work
            </span>
          </div>
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-brand-muted">
            Scroll to explore ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
