import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { DbArticle } from '@/lib/blocks'

async function signOut() {
  'use server'
  const { createClient } = await import('@/lib/supabase/server')
  const supabase = createClient()
  await supabase.auth.signOut()
}

export default async function AdminArticles() {
  const supabase = createClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('id, slug, title, category, date, published, read_time')
    .order('created_at', { ascending: false })

  const list = (articles ?? []) as Pick<DbArticle, 'id' | 'slug' | 'title' | 'category' | 'date' | 'published' | 'read_time'>[]

  return (
    <div className="min-h-screen bg-bk-slate">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold mb-2">
              Field Notes CMS
            </p>
            <h1 className="font-book font-bold text-3xl text-bk-parchment">Articles</h1>
          </div>
          <div className="flex items-center gap-4">
            <form action={signOut}>
              <button
                type="submit"
                className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted hover:text-bk-parchment transition-colors duration-200"
              >
                Sign out
              </button>
            </form>
            <Link
              href="/admin/articles/new"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 border border-bk-gold text-bk-gold hover:bg-bk-gold hover:text-bk-deep transition-all duration-200"
            >
              + New article
            </Link>
          </div>
        </div>

        {/* Article list */}
        {list.length === 0 ? (
          <div className="bg-bk-deep border border-bk-rule p-10 text-center">
            <p className="font-sans text-sm text-bk-muted">No articles yet.</p>
            <Link
              href="/admin/articles/new"
              className="inline-block mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-bk-gold hover:text-bk-parchment transition-colors duration-200"
            >
              Create your first →
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {list.map((article) => (
              <div
                key={article.id}
                className="bg-bk-deep border border-bk-rule p-5 flex items-center justify-between group hover:border-bk-gold/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span
                    className={`flex-shrink-0 font-mono text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 border ${
                      article.published
                        ? 'border-bk-gold/40 text-bk-gold'
                        : 'border-bk-rule text-bk-muted'
                    }`}
                  >
                    {article.published ? 'Live' : 'Draft'}
                  </span>
                  <div className="min-w-0">
                    <p className="font-book font-bold text-bk-parchment truncate">{article.title}</p>
                    <p className="font-sans text-xs text-bk-muted mt-0.5">
                      {article.category} · {article.date} · {article.read_time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                  <Link
                    href={`/articles/${article.slug}`}
                    target="_blank"
                    className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted hover:text-bk-gold transition-colors duration-200"
                  >
                    View ↗
                  </Link>
                  <Link
                    href={`/admin/articles/${article.id}`}
                    className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-gold hover:text-bk-parchment transition-colors duration-200"
                  >
                    Edit →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
