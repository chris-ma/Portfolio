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
    slug: 'small-business-acquisition',
    title: 'Skip Year Zero',
    subtitle: 'Six million US businesses are changing hands by 2035. The ETA playbook for finding them, filtering them, and where AI actually compresses the work.',
    category: 'Strategy',
    date: '2026-08-19',
    readTime: '12 min read',
    tags: ['ETA', 'Business Acquisition', 'Search Fund', 'Due Diligence', 'AI Deal Sourcing', 'SBA'],
    excerpt:
      "Roughly 6 million US small businesses are expected to change ownership by 2035 as Baby Boomer owners retire — representing $5 trillion in enterprise value. 70% have no formal succession plan. That gap is the structural reason buying an existing profitable business has become a real, taught career path. Here is the playbook.",
  },
  {
    slug: 'automation-strategy',
    title: 'Not the Bots',
    subtitle: 'Isolated bots automating individual steps are not automation. The maturity ladder, the process-mining discipline, and the connective layer that changes the ROI calculation.',
    category: 'Systems',
    date: '2026-08-19',
    readTime: '11 min read',
    tags: ['Automation', 'Hyperautomation', 'RPA', 'Process Mining', 'AI Agents', 'ROI'],
    excerpt:
      "Fewer than 20% of large enterprises actually measure their automation initiatives properly. Most programs are running isolated bots — automating tasks, not processes. The maturity ladder, the process-mining discipline, and the single biggest lever: a shared orchestration layer that connects the steps.",
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
    slug: 'api-rate-limits-design',
    title: 'Before the 429',
    subtitle: "The rate limit isn't the problem. Hitting it without a plan is. The four-pattern stack that keeps you under the ceiling — and what to do when you're not.",
    category: 'Engineering',
    date: '2026-08-15',
    readTime: '10 min read',
    tags: ['API', 'Rate Limiting', 'REST', 'GraphQL', 'Backoff'],
    excerpt:
      "Most engineers discover rate limits by hitting them. The header that tells you how close you are to the wall has been there the whole time. The four-pattern stack — cache, batch, read headers, backoff — covers 95% of the problem before a 429 ever fires.",
  },
  {
    slug: 'data-visualization-charts',
    title: 'Before the Chart',
    subtitle: "Most bad dashboards aren't built with bad intentions — they're built with unasked questions. The perception science, honesty rules, and build sequence that change that.",
    category: 'Strategy',
    date: '2026-08-14',
    readTime: '11 min read',
    tags: ['Data Visualization', 'Dashboards', 'Chart Design', 'BI Tools', 'GA4'],
    excerpt:
      "Most bad dashboards aren't bad because of the chart library or the color palette. They're bad because nobody wrote down what decision the visual was supposed to inform before building started. One sentence changes that — and most of the downstream design decisions resolve themselves.",
  },
  {
    slug: 'email-marketing-automation',
    title: 'The 2% Lever',
    subtitle: '2% of send volume — the automated, behavior-triggered flows — generates 41% of total email revenue. The five flows worth building, in the order they pay back.',
    category: 'Strategy',
    date: '2026-08-14',
    readTime: '10 min read',
    tags: ['Email Marketing', 'Marketing Automation', 'Marketo', 'Deliverability', 'Lifecycle'],
    excerpt:
      "Email delivers $36–$42 per $1 spent — ahead of paid search, social, and display combined. The concentration is starker still: 2% of send volume drives 41% of email revenue. That 2% is the automated lifecycle flows. Everything else is diminishing returns until those exist.",
  },
  {
    slug: 'osint-ai-intelligence',
    title: 'Already Public',
    subtitle: 'OSINT is the structured practice of finding your own exposure before someone with worse intentions does. AI has changed the scale — the four-stage process, and the ethical boundaries, have not.',
    category: 'Engineering',
    date: '2026-08-13',
    readTime: '9 min read',
    tags: ['OSINT', 'Threat Intelligence', 'Competitive Intelligence', 'AI Security', 'Attack Surface'],
    excerpt:
      'The information your organisation has exposed is already visible to anyone who knows how to look. Security teams use OSINT to find it first. The same techniques, aimed differently, describe reconnaissance before an attack. That dual-use reality is what makes ethical framing load-bearing, not decorative.',
  },
  {
    slug: 'prompt-injection-llm-security',
    title: 'The Same Channel',
    subtitle: "LLMs process instructions and data through the same channel with no built-in separation. OWASP's LLM Top 10 has held prompt injection at #1 for two consecutive editions. Here is why — and the layered defense that actually works.",
    category: 'Engineering',
    date: '2026-08-13',
    readTime: '9 min read',
    tags: ['Prompt Injection', 'LLM Security', 'OWASP', 'AI Agents', 'Defense in Depth'],
    excerpt:
      "You can't patch your way out of prompt injection. It exploits how LLMs fundamentally work — no built-in separation between instructions and data. The Anthropic system card puts it concretely: 4.7% attack success at one attempt, 63% at a hundred. Defense in depth is not optional.",
  },
  {
    slug: 'chinese-llms-open-weight',
    title: 'East of Closed',
    subtitle: 'Four of the five leading open-weight models in 2026 come from Chinese labs. The capability gap with Western frontier models is closed. Here is what to actually evaluate — and what most of the discourse is pointing at incorrectly.',
    category: 'Engineering',
    date: '2026-08-13',
    readTime: '10 min read',
    tags: ['DeepSeek', 'Qwen', 'Kimi', 'GLM', 'Open-Weight LLMs', 'AI Risk'],
    excerpt:
      'Open-source no longer means second-best. GLM-5 outperforms Gemini 3 Pro on SWE-bench Verified. The question in 2026 is not whether Chinese models are good enough to consider — it is which one, for which job, and whether you are self-hosting or using a hosted API. Those two deployment paths carry completely different risk profiles.',
  },
  {
    slug: 'n8n-process-automation',
    title: 'Not a Pipe',
    subtitle: 'Zapier, Make, and n8n have settled into three distinct positions. The more important shift is what all three have stopped being.',
    category: 'Engineering',
    date: '2026-08-13',
    readTime: '9 min read',
    tags: ['n8n', 'Automation', 'Zapier', 'MCP', 'Workflow Engineering'],
    excerpt:
      'Classic automation follows a predetermined path. Every branch scripted in advance. An AI agent inside the same platform observes, reasons, picks a tool, acts, and decides what happens next. These two worlds are now wired directly together — and n8n is where that integration is most mature.',
  },
  {
    slug: 'mcp-model-context-protocol',
    title: 'One Protocol',
    subtitle: 'MCP is not a plugin format. It\'s vendor-neutral infrastructure — governed by the Linux Foundation, adopted across the industry, and the actual mechanism behind composable AI workflows.',
    category: 'Engineering',
    date: '2026-08-12',
    readTime: '9 min read',
    tags: ['MCP', 'Model Context Protocol', 'Agentic AI', 'Dev Tooling', 'Interoperability'],
    excerpt:
      'Before MCP, every AI product that wanted to integrate with GitHub had to build its own GitHub integration. MCP flips this: one server works with Claude, ChatGPT, Cursor, VS Code, or any compatible host — no additional work on the server side. The protocol is the interoperability layer.',
  },
  {
    slug: 'social-media-algorithms-kpis',
    title: 'No Followers Required',
    subtitle: 'Follower count stopped predicting reach. AI-ranked feeds distribute based on interest graphs, not audience size. The 2026 benchmarks and the playbook for the new reality.',
    category: 'Strategy',
    date: '2026-08-12',
    readTime: '10 min read',
    tags: ['Social Media', 'Social SEO', 'Algorithms', 'KPIs', 'TikTok'],
    excerpt:
      'Every major platform now uses AI to decide who sees what, based on individual relevance rather than follower relationship. Growing an audience is no longer sufficient. The algorithm distributes per-viewer regardless of who follows you.',
  },
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
