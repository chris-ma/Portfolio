import { createClient } from '@/lib/supabase/server'
import BlockEditor from '@/components/admin/BlockEditor'
import { notFound } from 'next/navigation'
import type { DbArticle } from '@/lib/blocks'

export default async function EditArticle({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!article) notFound()

  const a = article as DbArticle

  return (
    <BlockEditor
      articleId={a.id}
      initialBlocks={a.blocks}
      initialMeta={{
        slug: a.slug,
        title: a.title,
        subtitle: a.subtitle,
        category: a.category,
        date: a.date,
        read_time: a.read_time,
        tags: a.tags.join(', '),
        excerpt: a.excerpt,
        published: a.published,
      }}
    />
  )
}
