export interface Article {
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
}

export const articles: Article[] = [
  {
    slug: 'wispr-obsidian-notion-pkm-stack',
    title: 'Capture → Think → Coordinate',
    subtitle: 'Building a frictionless PKM stack with Wispr Flow, Obsidian, and Notion',
    category: 'Systems',
    date: '2026-08-11',
    readTime: '8 min read',
    tags: ['PKM', 'Productivity', 'Obsidian', 'Notion', 'Wispr'],
    excerpt:
      'A boundary-first approach to personal knowledge management. One tool for capture, one for thinking, one for coordination — and clear rules for what lives where.',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
