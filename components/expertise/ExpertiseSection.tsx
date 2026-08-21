'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, rowReveal } from '@/lib/motion'

const domains: {
  title: string
  descriptor: string
  tools: string[]
}[] = [
  {
    title: 'Creative Technology',
    descriptor: 'Bridging design intent and technical execution. Interactive experiences, generative systems, and tools that extend creative possibility.',
    tools: ['React / Next.js', 'GSAP', 'Three.js', 'Creative Coding'],
  },
  {
    title: 'Digital Marketing',
    descriptor: 'Performance-driven campaigns grounded in brand truth. Channel strategy, creative direction, and analytics that connect culture to conversion.',
    tools: ['Paid Media', 'Analytics', 'Brand Strategy', 'Content'],
  },
  {
    title: 'Frontend Engineering',
    descriptor: 'Production-grade interfaces built for scale. Design systems, component libraries, and the craft of making complex things feel effortless.',
    tools: ['TypeScript', 'Tailwind', 'Design Systems', 'Performance'],
  },
  {
    title: 'Product Management',
    descriptor: 'From insight to roadmap to release. Defining what to build, why it matters, and how to ship it with clarity, speed, and stakeholder alignment.',
    tools: ['Roadmapping', 'User Research', 'GTM', 'Agile'],
  },
]

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding px-6 md:px-10 lg:px-16 bg-bk-slate">
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
          Disciplines
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
            4 Areas of Practice · 2019–Present
          </span>
        </motion.div>
      </motion.div>

      {/* Domain list — typographic, no cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        variants={staggerContainer}
      >
        {domains.map((domain, i) => (
          <motion.div
            key={domain.title}
            variants={rowReveal}
            className="group border-t border-bk-rule/60 py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start hover:border-bk-gold/30 transition-colors duration-300"
          >
            <div>
              {/* Index + title */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-[9px] tracking-[0.25em] text-bk-gold/50 group-hover:text-bk-gold/80 transition-colors duration-200">
                  0{i + 1}
                </span>
                <h3
                  className="font-book text-bk-parchment group-hover:text-bk-gold transition-colors duration-200 leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                  {domain.title}
                </h3>
              </div>

              {/* Descriptor */}
              <p className="font-sans text-sm text-bk-muted leading-relaxed max-w-lg">
                {domain.descriptor}
              </p>
            </div>

            {/* Tools — right aligned */}
            <div className="flex flex-wrap md:flex-col gap-2 md:items-end md:pt-1">
              {domain.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[9px] tracking-[0.18em] uppercase text-bk-muted/60 border border-bk-rule px-2.5 py-1 group-hover:border-bk-rule/80 group-hover:text-bk-muted transition-all duration-200 whitespace-nowrap"
                >
                  {tool}
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
