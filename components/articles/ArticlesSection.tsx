'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { articles } from '@/lib/articles'
import ArticleCard from './ArticleCard'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ArticlesSection() {
  const preview = articles.slice(0, 3)

  return (
    <section className="bg-brand-white section-padding" id="notes">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Field Notes</SectionLabel>

            <motion.h2
              className="font-display text-6xl md:text-8xl lg:text-9xl text-brand-black leading-none tracking-tightest mt-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              THINK
              <br />
              <span className="text-brand-cobalt">ALOUD.</span>
            </motion.h2>
          </div>

          <motion.p
            className="font-sans text-sm text-brand-muted max-w-xs leading-relaxed md:mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Systems, tooling, and the mental models behind the work. Notes on how I think and build.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-brand-concrete mb-14"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Article grid */}
        {preview.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {preview.map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={i}
                featured={i === 0 && preview.length === 1}
              />
            ))}
          </div>
        ) : (
          <p className="font-sans text-brand-muted text-sm">More notes coming soon.</p>
        )}

        {/* View all link */}
        {articles.length > 3 && (
          <motion.div
            className="mt-14 pt-10 border-t border-brand-concrete flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/articles"
              className="group flex items-center gap-3 font-sans text-sm tracking-[0.12em] uppercase text-brand-black hover:text-brand-cobalt transition-colors duration-300"
            >
              View all notes
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
