import Link from 'next/link'
import type { Metadata } from 'next'
import { articles } from '@/lib/articles'
import ArticleCard from '@/components/articles/ArticleCard'

export const metadata: Metadata = {
  title: 'Field Notes — Chris Ma',
  description: 'Systems, tooling, and the mental models behind the work. Notes on how I think and build.',
}

export default function ArticlesPage() {
  const categories = Array.from(new Set(articles.map((a) => a.category)))

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Header */}
      <header className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-14 border-b border-brand-concrete">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-cobalt mb-4">Field Notes</p>
            <h1 className="font-display text-7xl md:text-9xl lg:text-[130px] text-brand-black leading-none tracking-tightest">
              THINK<br />
              <span className="text-brand-cobalt">ALOUD.</span>
            </h1>
          </div>
          <div className="md:mb-4 max-w-xs">
            <p className="font-sans text-sm text-brand-muted leading-relaxed">
              Systems, tooling, and the mental models behind the work.
              Notes on how I think and build.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <span key={cat} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Article grid */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {articles.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={i}
              featured={false}
            />
          ))}
        </div>
      </main>

      {/* Footer nav */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-16 border-t border-brand-concrete pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  )
}
