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
    slug: 'aeo-three-gate-diagnostic',
    title: 'The Three Gates',
    subtitle: 'How answer engines decide what to cite — and why most content fails before you\'ve written a word',
    category: 'Strategy',
    date: '2026-08-11',
    readTime: '10 min read',
    tags: ['AEO', 'GEO', 'SEO', 'Content Strategy', 'BrightEdge'],
    excerpt:
      'AEO isn\'t a visibility problem. It\'s a mechanism problem. Fetchable → Chosen → Extractable: three gates, three different failures, three different fixes. Most content never gets past Gate 2.',
  },
  {
    slug: 'claude-code-vs-codex',
    title: 'The $140 Question',
    subtitle: 'Claude Code vs OpenAI Codex — same task, very different bill',
    category: 'Tools',
    date: '2026-08-11',
    readTime: '6 min read',
    tags: ['AI', 'Claude Code', 'Codex', 'Dev Tooling'],
    excerpt:
      'The benchmark numbers are close. The bill isn\'t. What the $155 vs $15 refactor test actually tells you about which tool to reach for — and when.',
  },
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
