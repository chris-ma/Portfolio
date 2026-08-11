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
    slug: 'hermes-agent-persistent-ai',
    title: 'The Agent That Remembers',
    subtitle: 'Every chat tool resets. Hermes is a daemon — it accumulates context, writes its own skills, and runs unattended while you sleep.',
    category: 'Tools',
    date: '2026-08-11',
    readTime: '8 min read',
    tags: ['Hermes Agent', 'Nous Research', 'Self-Hosted AI', 'Autonomous Agents'],
    excerpt:
      "Every chat tool resets. Hermes doesn't. The open-source persistent-memory daemon from Nous Research — why the session model is the real bottleneck, and what changes when the agent remembers who you are.",
  },
  {
    slug: 'tokenmaxxing-ai-productivity',
    title: 'The Wrong Scoreboard',
    subtitle: 'Token counts measure activity. They say nothing about whether the activity was worth anything.',
    category: 'Strategy',
    date: '2026-08-11',
    readTime: '7 min read',
    tags: ['AI Productivity', 'Tokenmaxxing', 'Valuemaxxing', 'Claude Code'],
    excerpt:
      "Meta built a leaderboard ranking employees by tokens processed. The highest scorer averaged 281 billion tokens. The leaderboard was taken down two days later. That's the whole story.",
  },
  {
    slug: 'ai-image-video-generation-midjourney-higgsfield',
    title: 'Not Prompting. Directing.',
    subtitle: 'Midjourney builds the still. Higgsfield moves the camera. And the gap between good and great output is almost entirely about knowing the vocabulary.',
    category: 'Creative',
    date: '2026-08-11',
    readTime: '10 min read',
    tags: ['Midjourney', 'Higgsfield', 'AI Video', 'Cinematography'],
    excerpt:
      "The biggest quality jump in AI-generated video isn't a better model. It's treating the camera preset menu as a director's toolkit — picking a deliberate move for a deliberate reason, instead of defaulting to Static and hoping the prompt carries the shot.",
  },
  {
    slug: 'agentic-ai-loops-workflows',
    title: 'Stop Building Agents',
    subtitle: 'Most AI agents are workflows in disguise. Five patterns cover 90% of real tasks — genuine autonomy is for the other 10%',
    category: 'Engineering',
    date: '2026-08-11',
    readTime: '8 min read',
    tags: ['Agentic AI', 'LLM', 'Workflows', 'ReAct'],
    excerpt:
      "The most common production mistake isn't under-engineering agentic AI. It's reaching for autonomous loops when a fixed workflow would have been cheaper, faster, and more reliable.",
  },
  {
    slug: 'rag-retrieval-augmented-generation',
    title: 'Retrieve First',
    subtitle: 'How RAG works, where it breaks, and why most implementations over-engineer the wrong things',
    category: 'Engineering',
    date: '2026-08-11',
    readTime: '9 min read',
    tags: ['RAG', 'LLM', 'AI Engineering', 'Vector Search'],
    excerpt:
      'RAG fixes two things: stale knowledge and hallucination. It introduces one new way to fail: bad retrieval with false confidence. The pipeline is simple. Getting retrieval right is not.',
  },
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
