'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, rowReveal } from '@/lib/motion'

const ROMAN = ['I', 'II', 'III', 'IV', 'V']

const projects: {
  title: string
  description: string
  category: string
  year: string
}[] = [
  {
    title: 'Campaign Intelligence Platform',
    description: 'End-to-end marketing intelligence platform combining real-time analytics, creative performance scoring, and automated media buying. Built for a global consumer brand.',
    category: 'Digital Marketing',
    year: '2025',
  },
  {
    title: 'Editorial Design System',
    description: 'Full-stack design system and component library for a media publisher. Token-driven, accessible, and built to ship at editorial speed.',
    category: 'Creative Technology',
    year: '2024',
  },
  {
    title: 'Drop Commerce Experience',
    description: 'Limited-release e-commerce storefront with real-time queue system, countdown mechanics, and member-tier purchase access.',
    category: 'Frontend Engineering',
    year: '2024',
  },
  {
    title: 'Brand × Product Strategy',
    description: 'Go-to-market strategy and digital experience for a product launch spanning brand identity, paid media, landing pages, and launch analytics.',
    category: 'Product Management',
    year: '2023',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="section-padding px-6 md:px-10 lg:px-16 bg-bk-slate">
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
          Selected Work
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4 flex items-center gap-6">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
            2023–2025 · {projects.length} Projects
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
            More available on request
          </span>
        </motion.div>
      </motion.div>

      {/* Table of contents */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        variants={staggerContainer}
      >
        {projects.map((project, i) => (
          <ProjectEntry key={project.title} project={project} index={i} />
        ))}
        <motion.div variants={fadeUp} className="border-t border-bk-rule/60 mt-1" />
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-12 flex justify-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="mailto:hello@chrisma.co"
          className="group font-mono text-[10px] tracking-[0.22em] uppercase text-bk-muted hover:text-bk-gold transition-colors duration-150 flex items-center gap-3"
        >
          Commission a project
          <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
        </a>
      </motion.div>
    </section>
  )
}

function ProjectEntry({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <motion.div
      variants={rowReveal}
      className="group border-t border-bk-rule/60 py-7 md:py-9 grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_auto] gap-4 md:gap-8 items-start hover:border-bk-gold/30 transition-colors duration-300 cursor-pointer"
    >
      {/* Roman numeral */}
      <span className="font-mono text-[11px] tracking-[0.2em] text-bk-gold/70 group-hover:text-bk-gold transition-colors duration-200 pt-1">
        {ROMAN[index]}
      </span>

      {/* Title + description */}
      <div>
        <h3
          className="font-book text-bk-parchment group-hover:text-bk-gold transition-colors duration-200 leading-tight mb-2"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          {project.title}
        </h3>
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-bk-muted">
          {project.category}
        </span>
        <p className="font-sans text-sm text-bk-muted leading-relaxed mt-3 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
          {project.description}
        </p>
      </div>

      {/* Year */}
      <span className="font-mono text-[10px] text-bk-muted/60 group-hover:text-bk-muted transition-colors duration-200 pt-1 text-right">
        {project.year}
      </span>
    </motion.div>
  )
}
