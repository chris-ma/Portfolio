'use client'

import { motion } from 'framer-motion'
import { fadeUp, cobaltUnderline, staggerContainer } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const domains = [
  {
    index: '01',
    title: 'Creative Technology',
    descriptor: 'Bridging design intent and technical execution. Interactive experiences, generative systems, and tools that extend creative possibility.',
    tools: ['React / Next.js', 'GSAP', 'Three.js', 'Creative Coding'],
  },
  {
    index: '02',
    title: 'Digital Marketing',
    descriptor: 'Performance-driven campaigns grounded in brand truth. Channel strategy, creative direction, and analytics that connect culture to conversion.',
    tools: ['Paid Media', 'Analytics', 'Brand Strategy', 'Content'],
  },
  {
    index: '03',
    title: 'Frontend Engineering',
    descriptor: 'Production-grade interfaces built for scale. Design systems, component libraries, and the craft of making complex things feel effortless.',
    tools: ['TypeScript', 'Tailwind', 'Design Systems', 'Performance'],
  },
  {
    index: '04',
    title: 'Product Management',
    descriptor: 'From insight to roadmap to release. Defining what to build, why it matters, and how to ship it with clarity, speed, and stakeholder alignment.',
    tools: ['Roadmapping', 'User Research', 'GTM', 'Agile'],
  },
]

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-brand-white">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Expertise Index</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-brand-black"
          >
            WHAT I DO
          </motion.h2>
        </motion.div>
      </div>

      {/* Domain grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-concrete/40">
        {domains.map((domain, i) => (
          <motion.div
            key={domain.index}
            className="bg-brand-white px-8 py-10 group relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
          >
            {/* Index number */}
            <div className="font-display text-7xl text-brand-cobalt/15 leading-none mb-4 group-hover:text-brand-cobalt/30 transition-colors duration-500">
              {domain.index}
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl text-brand-black mb-3 group-hover:text-brand-cobalt transition-colors duration-300">
              {domain.title}
            </h3>

            {/* Animated underline */}
            <div className="relative h-px bg-brand-concrete mb-6 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brand-cobalt"
                style={{ originX: 0 }}
                variants={cobaltUnderline}
              />
            </div>

            {/* Descriptor */}
            <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
              {domain.descriptor}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {domain.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1 group-hover:border-brand-cobalt/40 group-hover:text-brand-cobalt transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
