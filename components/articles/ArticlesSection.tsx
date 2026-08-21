'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { articles } from '@/lib/articles'
import ArticleCard from './ArticleCard'
import { staggerContainer, fadeUp } from '@/lib/motion'

export default function ArticlesSection() {
  const preview = articles.slice(0, 3)

  return (
    <section className="section-padding bg-bk-slate" id="notes">
      <div className="px-6 md:px-10 lg:px-16">
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
            Field Notes
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
              Writing · Systems &amp; Thinking
            </span>
            <p className="font-sans text-sm text-bk-muted leading-relaxed max-w-xs">
              Systems, tooling, and the mental models behind the work.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-bk-rule mb-14"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Article list */}
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
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bk-muted">
            More writing incoming.
          </p>
        )}

        {/* View all */}
        {articles.length > 3 && (
          <motion.div
            className="mt-14 pt-10 border-t border-bk-rule/60 flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/articles"
              className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-bk-muted hover:text-bk-gold transition-colors duration-150"
            >
              All Writing
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
