'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { inkPress, fadeUp, staggerContainer } from '@/lib/motion'
import WebGLBackground from '@/components/ui/WebGLBackground'
import MagneticButton from '@/components/ui/MagneticButton'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  // Parallax: name (foil stamp) moves slower than the cloth behind it
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const bgY   = useTransform(scrollYProgress, [0, 1], ['0%',  '10%'])

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen bg-bk-deep flex flex-col overflow-hidden">

      {/* ── WebGL atmospheric cloth background ────────────────────────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <WebGLBackground />
      </motion.div>

      {/* Nav offset */}
      <div className="pt-14 relative z-10" />

      {/* ── Content ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-20 md:py-28">

        {/* Edition mark */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-bk-muted">
            Portfolio · Sydney / Global · Est. 2019
          </span>
        </motion.div>

        {/* Name with parallax — foil stamp sits above the cloth */}
        <motion.div style={{ y: nameY }}>
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-book font-bold italic text-bk-gold leading-[0.88] select-none"
              style={{ fontSize: 'clamp(4.5rem, 18vw, 16rem)' }}
              custom={0}
              variants={inkPress}
              initial="hidden"
              animate="visible"
            >
              Chris
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-book font-bold italic text-bk-gold leading-[0.88] select-none"
              style={{ fontSize: 'clamp(4.5rem, 18vw, 16rem)' }}
              custom={1}
              variants={inkPress}
              initial="hidden"
              animate="visible"
            >
              Ma.
            </motion.h1>
          </div>
        </motion.div>

        {/* Gold rule draws across */}
        <motion.div
          className="w-full h-px bg-bk-gold/30 mt-10 mb-10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        />

        {/* Subtitle row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <p className="font-sans text-base md:text-lg text-bk-parchment leading-relaxed max-w-md mb-8 opacity-90">
              Creative technologist working at the intersection of culture, technology, and commerce.
              Building digital experiences that earn attention and deliver commercially.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#work"
                className="group font-mono text-[10px] tracking-[0.22em] uppercase px-7 py-4 bg-bk-gold text-bk-deep flex items-center gap-3 transition-colors duration-150 hover:bg-bk-parchment"
              >
                Selected Work
                <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="font-mono text-[10px] tracking-[0.22em] uppercase px-7 py-4 border border-bk-rule text-bk-muted hover:border-bk-gold hover:text-bk-gold transition-all duration-150"
              >
                Correspondence
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-1.5 md:text-right">
            {['Creative Technology', 'Digital Marketing', 'Product Management'].map((role) => (
              <span key={role} className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted whitespace-nowrap">
                {role}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Footer rule */}
      <motion.div
        className="relative z-10 px-6 md:px-10 lg:px-16 py-6 border-t border-bk-rule flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted/60">
          Culture · Technology · Commerce
        </span>
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted/60">
          Scroll ↓
        </span>
      </motion.div>
    </section>
  )
}
