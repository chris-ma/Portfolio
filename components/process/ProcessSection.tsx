'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, rowReveal } from '@/lib/motion'

const steps: {
  number: string
  title: string
  description: string
  tags: string[]
}[] = [
  {
    number: '01',
    title: 'Understand the Brief',
    description: 'Every engagement starts with context: market, audience, cultural moment. I dig into what is actually happening before deciding what to build.',
    tags: ['Research', 'Strategy', 'Briefing'],
  },
  {
    number: '02',
    title: 'Define the Experience',
    description: 'Translate insight into architecture. Define how someone should feel from first touch through to conversion.',
    tags: ['UX', 'Information Architecture', 'Vision'],
  },
  {
    number: '03',
    title: 'Build with Precision',
    description: 'Design and engineer simultaneously. Components that are clean, reusable, and production-ready. Nothing throwaway; everything ships.',
    tags: ['Design', 'Engineering', 'Systems'],
  },
  {
    number: '04',
    title: 'Launch with Intent',
    description: 'Coordinate the release: campaign creative, channel strategy, analytics instrumentation. Launch is a system, not an event.',
    tags: ['GTM', 'Analytics', 'Distribution'],
  },
  {
    number: '05',
    title: 'Measure and Evolve',
    description: 'Data informs iteration. Performance reporting, A/B signals, and cultural feedback loops feed back into the next build cycle.',
    tags: ['Analytics', 'Optimisation', 'Iteration'],
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding px-6 md:px-10 lg:px-16 bg-bk-deep">
      {/* Header */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="font-book font-bold text-bk-gold leading-none"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          Approach
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
            Process · {steps.length} Stages
          </span>
        </motion.div>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        variants={staggerContainer}
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={rowReveal}
            className="group border-t border-bk-rule/60 py-8 md:py-10 grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_auto] gap-4 md:gap-8 items-start hover:border-bk-gold/30 transition-colors duration-300"
          >
            {/* Step number */}
            <span className="font-mono text-[10px] tracking-[0.2em] text-bk-gold/50 group-hover:text-bk-gold transition-colors duration-200 pt-1">
              {step.number}
            </span>

            {/* Content */}
            <div>
              <h3
                className="font-book text-bk-parchment group-hover:text-bk-gold transition-colors duration-200 leading-tight mb-3"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {step.title}
              </h3>
              <p className="font-sans text-sm text-bk-muted leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap md:flex-col gap-2 md:items-end pt-1">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.18em] uppercase text-bk-muted/50 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div variants={fadeUp} className="border-t border-bk-rule/60" />
      </motion.div>
    </section>
  )
}
