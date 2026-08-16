import { getArticleBySlug } from '@/lib/articles'
import ArticlePodcastPlayer from '@/components/articles/ArticlePodcastPlayer'

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default function ArticleLayout({ children, params }: LayoutProps) {
  const article = getArticleBySlug(params.slug)
  return (
    <>
      {children}
      <ArticlePodcastPlayer
        title={article?.title ?? ''}
        readTime={article?.readTime ?? '9 min read'}
        slug={params.slug}
      />
    </>
  )
}
