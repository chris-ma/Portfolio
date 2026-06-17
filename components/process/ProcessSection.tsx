'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Understand the Signal',
    description: 'Every brief starts with context: market, audience, cultural moment. I dig into what is actually happening before deciding what to build.',
    tags: ['Research', 'Strategy', 'Briefing'],
  },
  {
    number: '02',
    title: 'Define the Experience',
    description: 'Translate insight into architecture. What should someone feel the moment they land? What does the journey look like from first touch to conversion?',
    tags: ['UX', 'Information Architecture', 'Vision'],
  },
  {
    number: '03',
    title: 'Build with Precision',
    description: 'Design and engineer simultaneously. Components that are clean, reusable, and production-ready. No throwaway prototypes — just real, ship-ready work.',
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
    tags: ['Analytics', 'Optimization', 'Iteration'],
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding px-6 md:px-10 lg:px-16 bg-brand-graphite">
      {/* Header */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="mb-4">
          <SectionLabel>How I Work</SectionLabel>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-brand-white"
        >
          PROCESS
        </motion.h2>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        variants={staggerContainer}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            className="group border-t border-brand-concrete/40 py-8 grid grid-cols-1 md:grid-cols-[6rem_1fr_auto] gap-4 md:gap-8 items-start hover:border-brand-cobalt/40 transition-colors duration-500"
          >
            {/* Step number */}
            <div className="font-display text-5xl text-brand-cobalt/20 group-hover:text-brand-cobalt/40 transition-colors duration-400 leading-none">
              {step.number}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-brand-white group-hover:text-brand-cobalt transition-colors duration-300 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap md:flex-col gap-2 md:items-end">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted/60 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Last border */}
        <motion.div variants={fadeUp} className="border-t border-brand-concrete/40" />
      </motion.div>
    </section>
  )
}
