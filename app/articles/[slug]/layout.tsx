import { getArticleBySlug } from '@/lib/articles'
import ArticlePodcastPlayer from '@/components/articles/ArticlePodcastPlayer'
import ArticleProgressBar from '@/components/articles/ArticleProgressBar'
import ArticleEndCTA from '@/components/articles/ArticleEndCTA'

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default function ArticleLayout({ children, params }: LayoutProps) {
  const article = getArticleBySlug(params.slug)

  const jsonLd = article ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Chris Ma',
      url: 'https://chrisma.com.au/portfolio',
    },
    publisher: {
      '@type': 'Person',
      name: 'Chris Ma',
    },
  } : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ArticleProgressBar />
      {children}
      <div className="max-w-[720px] mx-auto px-6 md:px-10 pb-20">
        <ArticleEndCTA />
      </div>
      <ArticlePodcastPlayer
        title={article?.title ?? ''}
        readTime={article?.readTime ?? '9 min read'}
        slug={params.slug}
      />
    </>
  )
}
