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
    slug: 'ai-hallucination-reduction',
    title: 'Confident and Wrong',
    subtitle: 'A model that confidently hallucinates poisons every decision built on its output. The 11 techniques that push AI toward calibration — knowing what it knows.',
    category: 'Engineering',
    date: '2026-08-12',
    readTime: '9 min read',
    tags: ['Hallucinations', 'Prompt Engineering', 'AI Reliability', 'RAG', 'Calibration'],
    excerpt:
      'On the AA-Omniscience benchmark, Claude 4.1 Opus scored 0% hallucination by refusing to answer when uncertain. The winning move is often not answering. Every technique here is a way of pushing a model toward that same behaviour.',
  },
  {
    slug: 'ai-self-improvement-wellbeing',
    title: 'The Deciding Factor',
    subtitle: "The 2026 research on AI and wellbeing is consistent on one point: structure separates genuine growth from a comfortable loop that goes nowhere.",
    category: 'Systems',
    date: '2026-08-12',
    readTime: '9 min read',
    tags: ['AI Wellbeing', 'Self-Improvement', 'Personal Growth', 'Reflection', 'AI Productivity'],
    excerpt:
      "A 2026 narrative review found real short-term benefits from AI use — for anxiety, stress, loneliness, and skill-building. It also found the results are inconsistent. The deciding variable is not which tool you use. It is how.",
  },
  {
    slug: 'customer-journey-mapping',
    title: 'Not a Poster',
    subtitle: 'Most journey maps are printed once and pinned to a wall. The operating model that keeps them current — and the KPI layer that gives them teeth.',
    category: 'Strategy',
    date: '2026-08-12',
    readTime: '10 min read',
    tags: ['Customer Journey', 'CX', 'NPS', 'Journey Management', 'Analytics'],
    excerpt:
      "A journey map that lives in a deck doesn't change behaviour. Forrester's 2026 research makes the gap clear: journey management is an operating model, not a one-time deliverable. Here is the methodology — and the metric layer — that makes it stick.",
  },
  {
    slug: 'marketing-funnel-engineering',
    title: 'The Missing Middle',
    subtitle: 'Most funnels have a top and a bottom. The MOFU gap is where qualified buyers go cold — and that is an engineering problem, not a content problem.',
    category: 'Strategy',
    date: '2026-08-12',
    readTime: '10 min read',
    tags: ['Marketing Funnel', 'TOFU MOFU BOFU', 'Marketo', 'MQL', 'Growth Marketing'],
    excerpt:
      "Only a third of companies actively optimise their funnel stage by stage. The rest treat the whole thing as one undifferentiated pipeline — and wonder where qualified buyers went.",
  },
  {
    slug: 'mvp-traction-validation',
    title: 'Proof First',
    subtitle: "Building has gotten cheap. Attention hasn't. The four-step sequence that gets you to traction before you run out of either.",
    category: 'Strategy',
    date: '2026-08-12',
    readTime: '11 min read',
    tags: ['MVP', 'Traction', 'Startups', 'Validation', 'Product Strategy'],
    excerpt:
      "A POC without traction is theory. An MVP without traction is a beta nobody's proven anyone wants. Traction is the actual finish line — everything before it exists to get you there as cheaply and quickly as possible.",
  },
  {
    slug: 'design-taste-frontend',
    title: 'The Swap Test',
    subtitle: 'Taste is pattern recognition, not talent. The deliberate practice that builds it, and the diagnostic that keeps your work from being a default.',
    category: 'Creative',
    date: '2026-08-12',
    readTime: '10 min read',
    tags: ['Design', 'UI Design', 'Typography', 'Visual Design', 'Figma'],
    excerpt:
      "Swap the logo and copy for an unrelated brand. If the design still makes sense, it wasn't designed for this brief — it's a default. That single test is the difference between competent and distinctive work.",
  },
  {
    slug: 'content-writing-eeat',
    title: 'The Last 50%',
    subtitle: 'AI handles structure and scaffolding. The sentences, specifics, and judgment are still yours.',
    category: 'Strategy',
    date: '2026-08-11',
    readTime: '9 min read',
    tags: ['Content Writing', 'E-E-A-T', 'AI Slop', 'SEO', 'Copywriting'],
    excerpt:
      'AI produces the first 50%: outline, rough pass, structure. The last 50%, where trust and originality live, is still a human job. Skipping it is the actual failure.',
  },
  {
    slug: 'app-security-rls-owasp',
    title: 'The Open Door',
    subtitle: 'What AI-scaffolded apps get wrong about security, and the fixes that actually close it.',
    category: 'Engineering',
    date: '2026-08-11',
    readTime: '11 min read',
    tags: ['Security', 'Supabase', 'RLS', 'OWASP', 'Vibe Coding'],
    excerpt:
      'AI tools build working apps against completely open databases. The demo looks fine. The database is not.',
  },
  {
    slug: 'hermes-agent-persistent-ai',
    title: 'The Agent That Remembers',
    subtitle: 'Every chat tool resets. Hermes is a daemon that accumulates context, writes its own skills, and runs unattended while you sleep.',
    category: 'Tools',
    date: '2026-08-11',
    readTime: '8 min read',
    tags: ['Hermes Agent', 'Nous Research', 'Self-Hosted AI', 'Autonomous Agents'],
    excerpt:
      "Every chat tool resets. Hermes doesn't. The open-source persistent-memory daemon from Nous Research: why the session model is the real bottleneck, and what changes when the agent remembers who you are.",
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
    subtitle: 'Midjourney builds the still. Higgsfield moves the camera. The gap between good and great output comes down to knowing the vocabulary.',
    category: 'Creative',
    date: '2026-08-11',
    readTime: '10 min read',
    tags: ['Midjourney', 'Higgsfield', 'AI Video', 'Cinematography'],
    excerpt:
      "The biggest quality jump in AI-generated video isn't a better model. It's using the camera preset menu as a director would: choosing a specific move for a specific reason, rather than defaulting to Static and hoping the prompt carries the shot.",
  },
  {
    slug: 'agentic-ai-loops-workflows',
    title: 'Stop Building Agents',
    subtitle: 'Most AI agents are workflows in disguise. Five patterns cover 90% of real tasks. Genuine autonomy is for the other 10%.',
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
    subtitle: 'How answer engines decide what to cite, and why most content fails before you\'ve written a word',
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
    subtitle: 'Claude Code vs OpenAI Codex. Same task, very different bill.',
    category: 'Tools',
    date: '2026-08-11',
    readTime: '6 min read',
    tags: ['AI', 'Claude Code', 'Codex', 'Dev Tooling'],
    excerpt:
      'The benchmark numbers are close. The bill isn\'t. What the $155 vs $15 refactor test actually tells you about which tool to reach for, and when.',
  },
  {
    slug: 'wispr-obsidian-notion-pkm-stack',
    title: 'Capture → Think → Coordinate',
    subtitle: 'Three tools, three distinct jobs. The PKM stack that actually holds together.',
    category: 'Systems',
    date: '2026-08-11',
    readTime: '8 min read',
    tags: ['PKM', 'Productivity', 'Obsidian', 'Notion', 'Wispr'],
    excerpt:
      'Three tools, three distinct jobs. One for capture, one for thinking, one for coordination, with clear rules about what lives where.',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
