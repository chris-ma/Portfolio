'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Campaign Intelligence Platform',
    description: 'End-to-end marketing intelligence platform combining real-time analytics, creative performance scoring, and automated media buying — built for a global consumer brand.',
    tags: ['Product Strategy', 'Frontend', 'Data Viz'],
    year: '2025',
    category: 'Digital Marketing',
    featured: true,
  },
  {
    title: 'Editorial Design System',
    description: 'Full-stack design system and component library for a media publisher. Token-driven, accessible, and built to ship at editorial speed.',
    tags: ['Frontend', 'Design Systems', 'TypeScript'],
    year: '2024',
    category: 'Creative Technology',
  },
  {
    title: 'Drop Commerce Experience',
    description: 'Limited-release e-commerce storefront with real-time queue system, countdown mechanics, and member-tier purchase access.',
    tags: ['React', 'Commerce', 'UX'],
    year: '2024',
    category: 'Frontend Engineering',
  },
  {
    title: 'Brand × Product Strategy',
    description: 'Go-to-market strategy and digital experience for a product launch spanning brand identity, paid media, landing pages, and launch analytics.',
    tags: ['Product Management', 'Growth', 'Strategy'],
    year: '2023',
    category: 'Product Management',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="section-padding px-6 md:px-10 lg:px-16 bg-brand-white">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        variants={staggerContainer}
      >
        <div>
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Available — Selected Work 2023–2025</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-brand-black"
          >
            SELECTED
            <br />
            <span className="text-brand-muted">WORK</span>
          </motion.h2>
        </div>
        <motion.p variants={fadeUp} className="font-sans text-sm text-brand-muted max-w-xs leading-relaxed md:text-right">
          A curated selection of projects across creative technology, digital marketing, and product.
        </motion.p>
      </motion.div>

      {/* Project grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        variants={staggerContainer}
      >
        {projects.map((project, i) => (
          <motion.div key={project.title} variants={fadeUp} className={project.featured ? 'md:col-span-2' : ''}>
            <ProjectCard {...project} index={i} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer link */}
      <motion.div
        className="mt-16 pt-8 border-t border-brand-concrete flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-muted">
          {projects.length} Projects · More available on request
        </span>
        <a href="mailto:hello@chrisma.co" className="font-sans text-xs tracking-[0.2em] uppercase text-brand-cobalt hover:text-brand-cobalt-light transition-colors duration-300">
          Collaborate →
        </a>
      </motion.div>
    </section>
  )
}
