import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/articles'
import {
  WisprMockup, ObsidianMockup, NotionMockup, FlowDiagram,
  ContextWindowComparison, BenchmarkChart, CostComparison, WorkflowSplit,
  QueryFanOut, ThreeGateDiagram, SAGELoop, ContentShapeComparison,
  RAGPipeline, HybridRetrievalDiagram, ChunkingComparison, AdaptiveRAGDiagram,
  WorkflowSpectrum, ReActLoop, PlanExecuteDiagram, AgentFailureModeDiagram,
  MidjourneyParams, CameraMovesGrid, PromptFormulaDiagram, ToolComparisonSplit,
  TokenLeaderboard, VanityVsValue, CostPerTaskChart, ComplexityRouter,
  HermesMemoryTimeline, SkillFlywheel, GatewayHubSpoke, HermesVsClaudeComparison,
  RLSStateDiagram, OWASPTopTenVisual, RLSPolicyDiagram,
  SlopPatternVisual, EEATFramework, WritingWorkflowDiagram,
  SwapTestDiagram, DesignFundamentalsGrid, TwoPassDiagram,
  ValidationSequenceDiagram, MVPScopeVisual, TractionMetricsDiagram,
  FunnelStageDiagram, ScoringGapDiagram, AttributionDiagram,
  JourneyMapVisual, CXMetricsDiagram, DataUnificationDiagram,
  AIUsageTypologyDiagram, WellbeingBoundaryDiagram, UsageRhythmDiagram,
  CalibrationVsAccuracyDiagram, PromptTechniquesRanking, TwoStepVerificationDiagram,
} from '@/components/articles/ArticleMockups'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — Chris Ma`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const formattedDate = new Date(article.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (article.slug === 'ai-hallucination-reduction')
    return <HallucinationArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'ai-self-improvement-wellbeing')
    return <SelfImprovementArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'customer-journey-mapping')
    return <CustomerJourneyArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'marketing-funnel-engineering')
    return <MarketingFunnelArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'mvp-traction-validation')
    return <MVPTractionArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'design-taste-frontend')
    return <DesignTasteArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'content-writing-eeat')
    return <ContentWritingArticle article={article} formattedDate={formattedDate} />

  if (article.slug === 'app-security-rls-owasp') {
    return <AppSecurityArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'agentic-ai-loops-workflows') {
    return <AgenticArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'rag-retrieval-augmented-generation') {
    return <RAGArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'aeo-three-gate-diagnostic') {
    return <AEOArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'claude-code-vs-codex') {
    return <CodexArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'wispr-obsidian-notion-pkm-stack') {
    return <PKMArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'ai-image-video-generation-midjourney-higgsfield') {
    return <CreativeToolsArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'tokenmaxxing-ai-productivity') {
    return <TokenmaxxingArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'hermes-agent-persistent-ai') {
    return <HermesArticle article={article} formattedDate={formattedDate} />
  }

  notFound()
}

function HallucinationArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          CONFIDENT<br />
          AND<br />
          <span className="text-brand-cobalt">WRONG.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            A model that hallucinates 5% of the time does not fail 5% of the time. Every answer it gives is suspect. Every downstream decision built on its output inherits that uncertainty silently — because the model did not flag it. The confident wrong answer is the failure mode. The hedged, partial answer that admits a gap is not a failure at all.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            On the AA-Omniscience hallucination benchmark, Claude 4.1 Opus scored 0% hallucination. Not because it got everything right, but because it refused to answer when it was uncertain rather than guessing. That data point is the whole argument: the winning move is often not answering. Every technique in this guide is structurally the same move — pushing a model toward admitting uncertainty rather than filling gaps with plausible-sounding invention.
          </p>
        </section>

        {/* Section 01 — The reframe */}
        <section>
          <SectionHeading number="01" title="Accuracy vs calibration — why the distinction matters" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The standard framing is accuracy: how often does the model get it right? The sharper framing is calibration: does the model know what it knows? A model that is right 95% of the time and silently wrong 5% of the time is less useful than one that is right 80% of the time and honest about the remaining 20% — because the honest model flags exactly where to double-check, and the overconfident one poisons the decisions you build on it.
          </p>

          <div className="mt-8">
            <CalibrationVsAccuracyDiagram />
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            This reframe changes what you are optimising for. You are not trying to make the model answer more confidently. You are trying to make it honest about its own uncertainty. A model that says &ldquo;I cannot answer this with confidence&rdquo; has done exactly the right thing. A model that answers anyway, fluently and wrongly, has done the most damaging thing.
          </p>
        </section>

        {/* Section 02 — Why hallucinations happen */}
        <section>
          <SectionHeading number="02" title="Why hallucinations happen" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            LLMs do not &ldquo;know&rdquo; facts the way a person does. They predict the statistically most likely next token given training data and context. Hallucination is not a rare malfunction; it is a predictable output of a system optimised for fluency rather than for auditing its own claims. Two specific triggers explain most real-world failures.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                label: 'Vague prompts invite creative guessing',
                body: 'When a prompt is underspecified, the model has to infer intent and fill gaps. It fills them with plausible-sounding content rather than admitting the gap exists. The narrower and more explicit the scope, the less room the model has to invent.',
              },
              {
                label: 'Models try too hard to answer',
                body: 'Left unconstrained, a model will attempt an answer even when it genuinely lacks the information to give one accurately — because refusing is not the default behaviour. You have to explicitly override that default. Without that override, the model will always lean toward an answer over an admission of uncertainty.',
              },
            ].map(({ label, body }) => (
              <div key={label} className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
                <span className="font-sans font-semibold text-sm text-brand-black block mb-2">{label}</span>
                <p className="font-sans text-sm text-brand-black/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Both triggers point to the same fix: remove the ambiguity, and explicitly authorise the model to say it does not know.
          </p>
        </section>

        {/* Section 03 — The 11 techniques */}
        <section>
          <SectionHeading number="03" title="The 11 techniques, ranked by leverage" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Every technique below is structurally the same: a way of narrowing the space the model has to guess in, or of giving it explicit permission to refuse rather than invent. Ranked by consistent real-world impact.
          </p>

          <div className="mt-8">
            <PromptTechniquesRanking />
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                rank: '01',
                label: 'Ground it in source material and restrict explicitly',
                body: 'The single highest-leverage move: give the model something to point to, and tell it to use only that. "Using ONLY the information in the following document, answer the question below. If the document doesn\'t contain the answer, say so explicitly." This is the same principle as RAG applied at the prompt level — grounding beats recall every time.',
              },
              {
                rank: '02',
                label: 'Authorise "I don\'t know" directly',
                body: '"If you are not confident in your answer based on the information provided, respond with \'I cannot answer this with confidence\' rather than guessing." This single instruction targets the actual failure mode — attempting an answer past the point of real knowledge — rather than trying to improve accuracy after the fact. It consistently outperforms every other single-instruction approach.',
              },
              {
                rank: '03',
                label: 'Be maximally specific',
                body: 'Weak: "Tell me about recent AI regulations." Better: "Summarise major EU AI Act developments announced between January 2025 and March 2026, citing only publicly documented events." Specificity narrows the space the model has to guess in. A vague scope is an invitation to fill gaps; a narrow, dated, sourced scope leaves much less room for invention.',
              },
              {
                rank: '04',
                label: 'Separate knowns from unknowns before answering',
                body: '"List the known facts. Then list the unknowns. Then provide an answer using only the known facts." Forcing this separation as an explicit step catches the model before it blends genuine information with inferred filler. The blending is what makes hallucinated content hard to spot — it reads identically to the real content around it.',
              },
              {
                rank: '05',
                label: 'Use chain-of-thought reasoning',
                body: 'Reasoning explicitly, in view, reduces the logic gaps and unsupported leaps that produce fabrication mid-answer. It is harder for a model to quietly invent a fact when it has to show the reasoning chain that supposedly led there. Particularly effective for anything with logical steps or multi-part conclusions.',
              },
              {
                rank: '06',
                label: 'Require sources and confidence levels per claim',
                body: 'Per-claim accountability rather than an overall confidence gesture. One practitioner report in a news-analysis context cited roughly a 40% hallucination reduction from requiring sources and confidence levels attached to each individual claim. Treat that figure as directional rather than guaranteed, but the mechanism is sound.',
              },
              {
                rank: '07',
                label: 'Constrain the output format',
                body: 'A strict template or schema reduces the wiggle room a model has to pad an answer with unsupported content. "Respond only in this structure: {root_cause, supporting_evidence, confidence_level, recommended_next_step}. Do not speculate beyond the evidence provided." Less room to be creative is less room to hallucinate.',
              },
            ].map(({ rank, label, body }) => (
              <div key={rank} className="border border-brand-concrete p-5">
                <div className="flex items-start gap-4">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted flex-shrink-0 mt-1">{rank}</span>
                  <div>
                    <span className="font-sans font-semibold text-sm text-brand-black block mb-2">{label}</span>
                    <p className="font-sans text-sm text-brand-black/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04 — Verification pass */}
        <section>
          <SectionHeading number="04" title="The verification pass — auditing, not retrying" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Techniques 08 through 11 are all variations on verification — having the model check its own output. The critical distinction is that verification is structurally different from generation. Asking a model to try harder produces a more confident version of the same answer. Asking it to audit its output puts it in a different mode entirely.
          </p>

          <div className="mt-8">
            <TwoStepVerificationDiagram />
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                rank: '08',
                label: 'Two-step verification pass',
                body: 'Step 1: original question. Step 2: "Review your answer above. Identify any claims you\'re less than 90% confident about. Note any logical inconsistencies. Flag anywhere you might be filling a gap with plausible-sounding but unverified information. Provide an overall confidence score." This surfaces uncertainty the model did not flag on the first pass — a genuinely different check from just asking it to try harder.',
              },
              {
                rank: '09',
                label: 'Anchor to a real output example',
                body: 'When format matters, provide one real example and say "follow this format closely." Anchoring to a concrete sample measurably improves accuracy over a purely verbal description of the desired format. The model has a specific target rather than an interpreted one.',
              },
              {
                rank: '10',
                label: 'Set a system-level behavioural boundary',
                body: '"You are a factual assistant. Never fabricate citations, statistics, or events. If information is unavailable, clearly state uncertainty. Prefer accuracy over completeness." A standing instruction set once at the system level is more reliable than restating the same constraint in every individual prompt — and it applies to every interaction in the session rather than just one.',
              },
              {
                rank: '11',
                label: 'Lower the temperature',
                body: 'If you are working via API or a tool with configurable settings: high temperature (0.8–1.0) trades accuracy for creativity and randomness; low temperature (0.0–0.2) trades creativity for determinism and factual consistency. For anything where accuracy matters more than novelty, low temperature is the right default.',
              },
            ].map(({ rank, label, body }) => (
              <div key={rank} className="border border-brand-concrete p-5">
                <div className="flex items-start gap-4">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted flex-shrink-0 mt-1">{rank}</span>
                  <div>
                    <span className="font-sans font-semibold text-sm text-brand-black block mb-2">{label}</span>
                    <p className="font-sans text-sm text-brand-black/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 05 — What doesn't work */}
        <section>
          <SectionHeading number="05" title="What doesn't work as well as it sounds" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Three approaches that feel intuitive but consistently underperform:
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                label: 'Just asking "are you sure?"',
                body: 'Without the structured verification pattern from technique 08, a bare "are you sure?" often just produces a confident restatement. The model treats it as a prompt to justify its answer, not to re-examine it. Structure the audit — don\'t just ask for one.',
              },
              {
                label: 'Longer prompts without more specificity',
                body: 'More words without more grounding or a tighter scope does not reduce hallucination. It can increase it, by giving the model more surface area to misinterpret intent from. Length is not a proxy for precision.',
              },
              {
                label: 'Prioritising completeness over accuracy',
                body: 'A prompt that implicitly rewards a full, comprehensive-sounding answer pushes the model toward filling gaps to look thorough. Explicitly stating that a partial, honest answer beats a complete but padded one changes this incentive directly. "Prefer accuracy over completeness" is one of the most underused instructions in a system prompt.',
              },
            ].map(({ label, body }) => (
              <div key={label} className="border-l-2 border-brand-concrete pl-4 py-1">
                <span className="font-sans font-semibold text-sm text-brand-black block mb-2">{label}</span>
                <p className="font-sans text-sm text-brand-black/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06 — Production practices */}
        <section>
          <SectionHeading number="06" title="Production and workflow-level practices" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Per-prompt techniques reduce hallucination. Architectural choices eliminate the root cause. For anything recurring — a regular workflow, a tool you are building, a report you produce weekly — these apply alongside the prompting layer, not instead of it.
          </p>

          <div className="mt-8 border border-brand-concrete divide-y divide-brand-concrete">
            {[
              {
                label: 'RAG as an architectural fix',
                body: 'Grounding responses in a real retrieval source addresses the root cause rather than mitigating symptoms per-prompt. The model cannot hallucinate information that was retrieved rather than recalled. Worth the setup cost for any knowledge-intensive recurring workflow.',
              },
              {
                label: 'Transparency with whoever uses the output',
                body: 'Label AI-assisted output as such and make clear it can be wrong. This matters for your own content writing and client-facing work as much as it does for a production system. The reader\'s expectation calibrates how they use the output.',
              },
              {
                label: 'Log and review — don\'t just trust',
                body: 'You cannot fix what you do not measure. For any recurring AI-assisted workflow, keep a running note of the specific claims or outputs that turned out to be wrong. This is what lets you refine your prompting pattern over time rather than repeating the same failure mode.',
              },
              {
                label: 'Fact-check anything load-bearing, always',
                body: 'No prompting technique gets you to zero. Treat every technique in this guide as risk reduction, not elimination. Anything a hallucination would actually cost you — a client deliverable, a financial decision, a technical specification — requires independent verification regardless of how confident the output sounds.',
              },
            ].map(({ label, body }) => (
              <div key={label} className="px-5 py-4">
                <span className="font-sans font-semibold text-sm text-brand-black block mb-1.5">{label}</span>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 07 — Combined prompt pattern */}
        <section>
          <SectionHeading number="07" title="The combined prompt pattern" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            A single template that stacks the highest-leverage techniques together. Use this as a starting point and strip back anything the context does not require.
          </p>

          <Callout label="Combined pattern" className="mt-6">
            <CodeBlock>{`You are a factual assistant. Using ONLY the information in [provided material], answer the following question: [question].

Reason step-by-step before your final answer. For each claim, note your confidence level (high / medium / low). If any part cannot be answered with confidence from the provided material, state that explicitly rather than guessing. Do not fabricate citations, statistics, or events.`}</CodeBlock>
          </Callout>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-5">
            The pattern stacks five techniques: system-level refusal boundary, explicit grounding restriction, chain-of-thought, per-claim confidence labelling, and explicit authorisation to admit uncertainty. In practice, even one or two of these applied consistently makes a real difference. The full stack is for high-stakes outputs where the cost of a confident wrong answer is high.
          </p>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/60 leading-relaxed italic">
            Every technique here is the same move: shrink the space the model has to guess in, and explicitly give it permission to say it does not know.
          </p>
        </section>

      </div>

      {/* Footer nav */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pb-16 border-t border-brand-concrete pt-10">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
        >
          ← Field Notes
        </Link>
      </div>
    </div>
  )
}

function SelfImprovementArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">DECIDING</span><br />
          FACTOR.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            A 2026 narrative review published in Behavioral Sciences synthesised the actual research on AI and wellbeing. Its finding is not that AI helps or does not help. It is more precise than that: real short-term benefits exist — for anxiety, stress, loneliness, self-esteem, skill-building, and social confidence — but the results are inconsistent. The variable that explains the inconsistency is not which tool you use. It is the structure of the interaction, the kind of feedback it gives, and the broader context you are using it in.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            AI companionship specifically was found to offer real but temporary emotional support — useful in the moment, not a substitute for the kind of connection that compounds over time. That distinction is the load-bearing idea beneath everything that follows.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            This is not a case for using AI more. It is a case for using it deliberately, in the places it actually helps, while staying honest about the places it does not.
          </p>
        </section>

        {/* Section 01 — What the research says */}
        <section>
          <SectionHeading number="01" title="What the research actually found" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The Behavioral Sciences review covered AI-facilitated interventions across wellbeing, education, interpersonal skill development, and AI companionship. The consistent pattern: structured interactions produced real short-term benefit; unstructured use produced much weaker and less consistent results. The difference was not model quality or tool choice. It was whether the interaction had a clear goal and a clear feedback loop.
          </p>

          <div className="mt-8 border border-brand-concrete divide-y divide-brand-concrete">
            <div className="grid grid-cols-2 divide-x divide-brand-concrete bg-brand-graphite/40">
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Where structured use produced real benefit</span></div>
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Where results were weaker or inconsistent</span></div>
            </div>
            {[
              { left: 'Processing a specific stressful situation or decision', right: 'Open-ended venting with no structure or goal' },
              { left: 'Learning a topic with examples, practice, and feedback', right: 'Passive Q&A that substitutes for deliberate learning' },
              { left: 'Walking through a specific coping or reframing technique', right: 'Generalised emotional support without a clear endpoint' },
              { left: 'Rehearsing a hard conversation or social scenario', right: 'Avoidance of the real conversation via AI proxy' },
            ].map(({ left, right }, i) => (
              <div key={i} className="grid grid-cols-2 divide-x divide-brand-concrete">
                <div className="px-4 py-3"><p className="font-sans text-sm text-brand-black/70 leading-relaxed">{left}</p></div>
                <div className="px-4 py-3"><p className="font-sans text-sm text-brand-muted leading-relaxed">{right}</p></div>
              </div>
            ))}
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The review treats these as moderately reliable findings rather than settled consensus — this is an actively developing research area, and specific results vary by context, population, and how tightly the study controlled for confounders. Use the pattern as a calibration tool rather than a guarantee.
          </p>
        </section>

        {/* Section 02 — Three modes */}
        <section>
          <SectionHeading number="02" title="Three modes of use — and why most people only have one" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Most AI use is task-directed. Draft this, fix that, build this. That mode is useful and it is also the only mode most people ever use. The two modes that produce the most growth are almost never on anyone&rsquo;s regular schedule.
          </p>

          <div className="mt-8">
            <AIUsageTypologyDiagram />
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                label: 'Task mode',
                body: 'The mode you already have. Execution-directed: build, draft, fix, summarise. Useful for output. Produces no structural improvement to how you think or what you know unless something else is also happening.',
              },
              {
                label: 'Learning mode',
                body: 'The research distinction that matters: AI-assisted learning shows real benefit when structured — targeted explanation, practice, and feedback on a specific named gap. It shows much weaker benefit when it is just passive Q&A. The difference is whether you have identified a specific thing you do not know and are working through it, not browsing. One weekly session aimed at one specific gap outperforms daily ambient use for actual skill-building.',
              },
              {
                label: 'Reflection mode',
                body: 'The highest-leverage and least-used mode. A periodic session — weekly or monthly — where you externalise your own reasoning and have it reflected back: what actually worked, what did not, what pattern keeps repeating. This is not a task session. It uses the same tool for a different purpose: noticing your own patterns rather than just executing against them. Most people skip this entirely.',
              },
            ].map(({ label, body }) => (
              <div key={label} className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
                <span className="font-sans font-semibold text-sm text-brand-black block mb-2">{label}</span>
                <p className="font-sans text-sm text-brand-black/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <Callout label="Practical setup" className="mt-8">
            <p className="font-sans text-sm text-brand-black/75 leading-relaxed">Three session types, three different purposes. One task-directed (already happening). One learning-directed — a specific named gap, not general browsing, on a real weekly cadence. One reflection-directed — what pattern keeps repeating this month — on a real monthly cadence, not &ldquo;whenever I remember.&rdquo;</p>
          </Callout>
        </section>

        {/* Section 03 — Opportunity */}
        <section>
          <SectionHeading number="03" title="Using AI to open up more opportunity" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The same principle applies here as in content and AEO work: opportunity flows to whoever has a specific, findable point of view, not generic competence. AI can help you produce more and faster. The thing that actually opens doors is still specific, real expertise made visible. The tool collapses the production cost. The substance has to come from somewhere else.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Lower the cost of showing your work</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Writing up a finished project into something shareable — a case study, a write-up, a talk outline — used to be the part that got skipped because it took too long after the actual work was done. AI collapses that cost. The value in the output is still in the specific detail only you could add, not the volume of what gets produced. AI-generated case study text without your actual numbers, decisions, and reasoning is indistinguishable from noise.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Rehearse, not just draft</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Before a real pitch, negotiation, or difficult conversation, running the actual scenario — including the specific pushback you expect — is a meaningfully different use than asking for advice in the abstract. This is closer to deliberate practice than to consultation. The research finding on rehearsal as a structured interaction is relevant here: the benefit is in the specificity of the scenario, not in the general question.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Widen the search radius deliberately</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Ask explicitly for adjacent fields, unfamiliar framings, or categories of opportunity you would not have thought to search for. AI-assisted research can surface the actual landscape of a space — rates, positioning, what the market calls a role, who is hiring for it — faster than manually piecing it together from individual searches.</p>
            </div>
          </div>

          <Callout label="The caution worth naming directly" className="mt-8">
            <p className="font-sans text-sm text-brand-black/75 leading-relaxed">None of this replaces the actual work of reaching out to people, showing up, and building real relationships in your field. AI can prepare you for the conversation. It cannot have the conversation for you. Heavy AI use that substitutes for real outreach and relationship-building produces activity that feels productive but does not compound into an actual network. The two feel similar from the inside. They are not.</p>
          </Callout>
        </section>

        {/* Section 04 — Wellbeing boundary */}
        <section>
          <SectionHeading number="04" title="Where it genuinely helps — and where the real risk sits" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The research on AI and wellbeing is where people most want a clear answer and where the evidence is most genuinely mixed. The honest version: structured use can help with real things. The risks are also real, not hypothetical, and they are worth being specific about.
          </p>

          <div className="mt-8">
            <WellbeingBoundaryDiagram />
          </div>

          <div className="mt-10 space-y-5">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">The companionship drift risk</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">The review is specific on this point: AI companionship provides real but temporary emotional benefit. The risk is not using AI when you are stressed. It is letting AI use quietly substitute for the slower, harder work of building or maintaining real human relationships — because the AI is always available, always responsive, and never having its own bad day. That asymmetry is real and worth noticing.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Not therapy</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Using AI for mental health literacy — understanding a condition, a term, a coping technique in plain language — is a different thing from using it as treatment. The line between the two gets blurry exactly when someone is struggling most. Anything approaching a genuine mental health crisis is where a static, well-meaning response from a tool is a poor substitute for a professional who can actually intervene.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">The echo chamber problem</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">A chatbot that is agreeable by design can quietly reinforce whatever you already believe — including unhelpful patterns. A tendency to catastrophise, a grudge, an avoidant instinct. A productive use pushes back and offers a genuinely different angle. A use that just validates whatever you already feel is an echo chamber of one. These feel different from the inside if you are paying attention.</p>
            </div>
          </div>
        </section>

        {/* Section 05 — Rhythm */}
        <section>
          <SectionHeading number="05" title="A practical weekly rhythm" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            A concrete way to run all of this without it becoming another thing to manage. Four cadences, each with a distinct purpose. The ongoing one is not a scheduled session — it is a standing question.
          </p>

          <div className="mt-8">
            <UsageRhythmDiagram />
          </div>

          <div className="mt-8 space-y-3">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">On the daily cadence</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">The task-directed mode you already have. No structure needed here — it is already running.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">On the weekly reflection</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Twenty minutes. What actually worked this week. What did not. One pattern you noticed. The value is in the regularity, not in any individual session. The habit of externalising your reasoning on a fixed cadence is the thing that compounds, not the quality of any single reflection.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">On the monthly shareable</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">One piece of real work, turned into something that can help someone else. Strip anything private. Post the general version. This is the lowest-cost high-leverage community contribution available, and it requires nothing you have not already done — only the step of making it legible to someone outside your own head.</p>
            </div>
            <div className="border-l-2 border-amber-500/50 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">On the standing check</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Not a session. A question: am I reaching for AI right now instead of a specific person I would otherwise talk to, or in addition to one? Sometimes the answer is genuinely fine. The point is to be honest about which it is rather than letting the decision happen by default.</p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed">
            The tool is not the deciding factor. The structure is.
          </p>
        </section>
      </div>
    </div>
  )
}

function CustomerJourneyArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          NOT<br />
          A<br />
          <span className="text-brand-cobalt">POSTER.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Forrester&rsquo;s 2026 buyer research on journey mapping makes one point that should reframe the whole exercise: journey maps have historically been static artifacts. A workshop output, a poster, a one-time deliverable. And that is exactly why most journey mapping work stalls, fails to scale, and struggles to demonstrate ROI. It gets cut in the next budget cycle.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            The organisations that are getting durable value from this work treat customer journey management as an operating model, not a document. Structured and unstructured customer data, operational KPIs, and financial metrics feed the same system continuously, rather than a map that gets printed once. Where the data and metrics stay disconnected, journey work remains anecdotal. And anecdotal work is the first thing cut.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            This is the standard this guide is built to. Not journey maps as a deliverable. Journey management as an operating model.
          </p>
        </section>

        {/* Section 01 — Scope */}
        <section>
          <SectionHeading number="01" title="Scope it tight, or fix nothing" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Pick one journey, not &ldquo;the whole customer experience.&rdquo; A first-purchase journey, an onboarding journey, and a renewal journey are three different maps with three different owners and three different failure points. Trying to map all of them at once produces something too vague to act on.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            State these four things explicitly before gathering a single data point. Without them, the map will drift to reflect what is easy to measure rather than what the business actually needs to understand.
          </p>

          <div className="mt-8 border border-brand-concrete divide-y divide-brand-concrete">
            <div className="grid grid-cols-4 divide-x divide-brand-concrete bg-brand-graphite/40">
              {['WHO', 'WHAT', 'WHEN', 'WHY'].map(h => (
                <div key={h} className="px-4 py-3">
                  <span className="font-display text-xl text-brand-cobalt/40">{h}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 divide-x divide-brand-concrete">
              <div className="px-4 py-4"><p className="font-sans text-sm text-brand-black/70 leading-relaxed">Which specific persona or segment. Not &ldquo;all customers.&rdquo;</p></div>
              <div className="px-4 py-4"><p className="font-sans text-sm text-brand-black/70 leading-relaxed">Which journey. For example: &ldquo;trial signup to first paid conversion.&rdquo;</p></div>
              <div className="px-4 py-4"><p className="font-sans text-sm text-brand-black/70 leading-relaxed">The actual time window this journey covers.</p></div>
              <div className="px-4 py-4"><p className="font-sans text-sm text-brand-black/70 leading-relaxed">What decision or improvement this map exists to inform.</p></div>
            </div>
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Tight scope is not a limitation. It is the thing that makes the work actionable. A well-scoped map of one journey that actually changes behaviour is worth more than a sweeping map of five journeys that sits in a shared drive.
          </p>
        </section>

        {/* Section 02 — Real data */}
        <section>
          <SectionHeading number="02" title="Build from real data, not assumptions" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The most consistent finding across current practitioner guidance: internal teams are reliably wrong about where the actual friction lives, because they experience the product from the inside. A journey map built from internal assumptions tends to reflect the product team&rsquo;s mental model of the experience rather than the one customers actually have.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            The fix is not more research. It is pulling the data you already have before commissioning anything new. GA4, Salesforce, support ticket history, and existing survey data cover most of what you need for a first working draft. Most teams skip this step and go straight to a workshop.
          </p>

          <div className="mt-8">
            <DataUnificationDiagram />
          </div>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Include both solicited and unsolicited data</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Solicited feedback (surveys, structured interviews) is useful but incomplete on its own. People answer the question you asked, not necessarily the thing that actually matters to them. Unsolicited data (support tickets, review text, call transcripts, session recordings) surfaces friction customers did not think to mention because you did not ask about it directly.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Detail the micro-interactions, not just the headline stages</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Not just Awareness, Consideration, Purchase — the specific page that causes hesitation, the specific email that gets ignored, the specific support interaction that escalates frustration. Session recordings and heatmaps earn their place here. They show you the step nobody thought to mention in an interview.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Validate before treating the map as finished</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Cross-check the drafted map against a fresh sample of real behavioural and feedback data before publishing it as the reference version. A map built from six-month-old assumptions is a liability rather than an asset.</p>
            </div>
          </div>
        </section>

        {/* Section 03 — Non-linear map */}
        <section>
          <SectionHeading number="03" title="Design for the non-linear path" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Customers loop. They re-enter stages. A subscription customer might cycle back through evaluation multiple times over a relationship — when a competitor changes pricing, when the internal champion gets a new job, when a new feature makes them reconsider what they are paying for. A map that only shows a single forward path misrepresents how returning and long-tenure customers actually behave.
          </p>

          <div className="mt-8">
            <JourneyMapVisual />
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-8">
            This is the same principle underlying the McKinsey Customer Decision Journey model: the corrective to the linear funnel is not that stages are wrong, but that the assumption of unidirectional movement is wrong. On the acquisition side, a buyer who reaches Consideration may loop back to Awareness when a competitor shifts the category definition. On the post-purchase side, an Onboarding customer who hits friction may re-enter Consideration — evaluating whether to stay with you or switch.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            Designing the map to accommodate this explicitly is not a complexity exercise. It is an accuracy exercise. A map that cannot represent the paths your customers actually take cannot tell you where they actually get stuck.
          </p>
        </section>

        {/* Section 04 — KPIs */}
        <section>
          <SectionHeading number="04" title="The right metric for the right question" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            NPS, CSAT, and CES are each answering a different question. Using them interchangeably is the single most common CX measurement mistake, because it produces data that is too blunt to act on.
          </p>

          <div className="mt-8">
            <CXMetricsDiagram />
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-8">
            The practical rule: NPS tells you if there is a problem somewhere in the relationship. CES and CSAT, measured at specific touchpoints, tell you where. Relying on NPS alone to diagnose a specific broken flow is like using a fever to diagnose which organ is infected. It tells you something is wrong, not what to fix.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            A touchpoint that causes the most complaints is not automatically the one worth fixing first. Weigh it against how many customers actually pass through that touchpoint and how much value, in revenue or retention risk, sits on the other side of it. The highest-volume friction point and the highest-value friction point are rarely the same thing.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Set KPIs against your mapping goals, not generically</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">A KPI set that does not map back to what a specific journey exists to inform will drift into vanity tracking over time. Each phase should have a KPI that actually matches what that phase is meant to diagnose.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Track behavioural and financial KPIs together</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Subscriber acquisition cost, churn rate, and customer lifetime value read very differently in combination than in isolation. A low CAC next to a high early-churn rate is a different problem than a high CAC next to strong retention — but a dashboard that shows them on separate tabs makes that connection easy to miss.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Tie journey work to financial accountability explicitly</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Journey initiatives with green KPIs still lose internal prioritisation battles if no one has connected those KPIs to revenue, cost, or retention impact in a way finance and leadership actually recognise. This is the most cited reason CX investment gets deprioritised even when the underlying metrics look healthy.</p>
            </div>
          </div>
        </section>

        {/* Section 05 — Build sequence */}
        <section>
          <SectionHeading number="05" title="The practical build sequence" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Nine steps, in order. Each one is a prerequisite for the next. Skip the validation step and the map becomes a liability. Skip the KPI-attachment step and the map becomes invisible.
          </p>

          <Callout label="Build sequence" className="mt-8">
            <ol className="space-y-3">
              {[
                'Scope one journey — persona, journey, timeframe, and the decision it needs to inform.',
                'Pull existing data first — GA4, Salesforce, support ticket history, any existing survey data. Do not commission new research before checking what you already have.',
                'Fill the gaps with targeted, small-batch research — a handful of structured interviews or a short survey aimed at the specific touchpoints existing data cannot explain.',
                'Draft the map, including the non-linear loops real customers actually take — not a single forward path.',
                'Validate against a fresh data sample before treating it as the reference version.',
                'Attach KPIs per phase, chosen to match what each phase&rsquo;s map is actually meant to diagnose.',
                'Connect the KPI layer to the systems that already exist — CDJ dashboard exec, waterfall, and diagnostic layers rather than a parallel disconnected reporting system.',
                'Close the loop: route what the map surfaces to the team that can act on it, and follow up with affected customers where practical.',
                'Revisit on a cadence, not once — a stale map is worse than no map, because it creates false confidence.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-2xl text-brand-cobalt/25 flex-shrink-0 leading-none w-6">{i + 1}</span>
                  <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </Callout>
        </section>

        {/* Section 06 — Making it stick */}
        <section>
          <SectionHeading number="06" title="The connective tissue that makes it stick" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Forrester identifies one differentiator between journey work that compounds and journey work that gets quietly deprioritised: whether the platform connects voice of customer, analytics, business intelligence, and delivery tooling into one operating system, versus keeping journey insight, execution, and measurement in separate tools that require manual translation between them.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            Manual translation is where journey initiatives quietly die. Not from lack of insight, but from the insight never reaching the team that could act on it. The fix is not a new tool. It is treating the connective layer — the link from what the map surfaces to what the delivery team ships — as infrastructure rather than coordination overhead.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Fix the brilliant basics before chasing big initiatives</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Consistency and reliability at the fundamental touchpoints — a support reply that actually resolves the issue, a checkout that does not break on mobile — build the trust foundation that makes any more ambitious CX investment actually land. A flashy new initiative on top of unreliable basics does not move the needle. It gets ignored because trust has not been earned yet.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Close the loop with the customer, not just internally</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">When a journey map surfaces a real fix, the highest-trust version of &ldquo;we heard you&rdquo; is telling the specific customers who experienced the friction what changed — not a generic release note, but a targeted message to the segment the friction affected. This is what actually builds Advocacy-stage behaviour: the feeling that the feedback went somewhere.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">CX ownership is cross-functional from the start</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">A journey map that identifies a handoff failure between marketing and support only creates change if both teams see the same map and agree on the same fix. A map that lives solely inside one team&rsquo;s tooling rarely survives contact with a budget or roadmap conversation outside that team.</p>
            </div>
          </div>
        </section>

        {/* Map health checklist */}
        <section>
          <SectionHeading number="07" title="Map health checklist" />
          <Callout label="Before publishing as the reference version" className="mt-6">
            <ul className="space-y-2 mt-2">
              {[
                'Scoped to one specific journey, persona, and decision — not "the whole customer experience"',
                'Built from real behavioural, feedback, and operational data — not internal assumption',
                'Includes both solicited and unsolicited data sources',
                'Captures micro-interactions, not just headline stages',
                'Reflects non-linear customer movement, including loops and re-entry points',
                'Validated against a fresh data sample',
                'Each phase has a KPI that actually matches what that phase is meant to diagnose',
                'Findings routed to the specific team that can act on them — not just archived in a deck',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-sm text-brand-black/70 leading-relaxed">
                  <span className="text-brand-cobalt/50 flex-shrink-0 mt-0.5">&#9632;</span>
                  {item}
                </li>
              ))}
            </ul>
          </Callout>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed">
            The map is only as good as what it changes.
          </p>
        </section>
      </div>
    </div>
  )
}

function MarketingFunnelArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">MISSING</span><br />
          MIDDLE.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            The funnel model has a design flaw everyone knows about and almost nobody fixes: it implies buyers move in one direction through a fixed sequence. Real buyers loop. They re-enter. They jump from BOFU back to TOFU when a competitor changes their pricing, or when the person who was championing your product gets a new job. McKinsey&rsquo;s Customer Decision Journey was built specifically as a corrective to this, and the practitioner consensus in 2026 has caught up with it.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            The funnel still earns its keep as a planning and measurement scaffold. It forces distinct content, channels, and metrics per stage. But the operating model underneath it needs to assume non-linear movement, not a straight pipe. That framing resolves the apparent contradiction in treating each stage as a separable engineering problem while accepting that buyers will not cooperate with your PowerPoint slides.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            A second structural change is reshaping the top of the funnel specifically. Around 60% of Google searches now end without a click. Buyers are getting their first answers inside ChatGPT, Gemini, and Perplexity before they ever reach brand-owned content. That share of awareness is happening on a surface you do not control and cannot put a pixel on, which is why AEO and GEO work is now a parallel TOFU investment rather than a side project.
          </p>
        </section>

        {/* Section 01 — Five-stage overview */}
        <section>
          <SectionHeading number="01" title="The five-stage model" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Most current B2B and SaaS practice runs five stages: Awareness, Consideration, Conversion, Loyalty, and Advocacy. TOFU, MOFU, and BOFU are practitioner shorthand for the first three. The post-purchase stages matter more than most teams treat them: expansion ARR represents over 40% of new ARR for SaaS companies above $50M, so &ldquo;done at the sale&rdquo; means leaving compounding growth on the table. Only about a third of companies actively optimise each stage independently. The rest treat the whole thing as one undifferentiated pipeline, and wonder where qualified buyers went.
          </p>

          <div className="mt-8">
            <FunnelStageDiagram />
          </div>

          <div className="mt-8 border border-brand-concrete divide-y divide-brand-concrete">
            <div className="grid grid-cols-3 divide-x divide-brand-concrete bg-brand-graphite/40">
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Stage</span></div>
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Buyer mindset</span></div>
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Primary metric</span></div>
            </div>
            {[
              { stage: 'Awareness', mindset: 'Exploratory — looking for education, not a product', metric: 'Reach / CPM / organic traffic' },
              { stage: 'Consideration', mindset: 'Comparing — evaluating you against alternatives', metric: 'MQL → SQL rate, engagement depth' },
              { stage: 'Conversion', mindset: 'Deciding — needs the practical mechanics of yes', metric: 'CPA / ROAS / lead response time' },
              { stage: 'Loyalty', mindset: 'Validating — did this deliver what it promised?', metric: 'NRR / adoption depth / renewal rate' },
              { stage: 'Advocacy', mindset: 'Vouching — willing to recommend, if asked well', metric: 'Referral rate / NPS / UGC volume' },
            ].map(({ stage, mindset, metric }) => (
              <div key={stage} className="grid grid-cols-3 divide-x divide-brand-concrete">
                <div className="px-4 py-4">
                  <span className="font-sans font-semibold text-sm text-brand-black">{stage}</span>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{mindset}</p>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-brand-muted leading-relaxed font-mono text-[12px]">{metric}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 02 — TOFU */}
        <section>
          <SectionHeading number="02" title="Awareness — the metric most teams get wrong" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            TOFU buyers have a problem, or a symptom of one. They are not looking for your product, your demo, or your brand name. They want education. The job of awareness-stage content is to reach them on the surfaces where they are already looking and to give them something genuinely useful.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            The single most common practitioner mistake at this stage is applying a bottom-funnel metric to top-of-funnel spend. Judging TOFU content by conversion rate, ROAS, or CPA is the wrong scoreboard entirely. Those metrics belong further down. Applying them here produces one of two outcomes: spend gets cut on channels that are doing their actual job, or content gets pushed toward premature pitching to generate trackable conversions from cold audiences who are not ready for them. Either way, awareness atrophies.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            The right metrics for a healthy TOFU are reach, impressions, organic traffic volume, and content engagement. A BOFU-style call to action shown to a cold TOFU audience measurably reduces engagement because it mismatches intent. That is not a copywriting problem. It is a stage-confusion problem.
          </p>

          <Callout label="The AEO dimension" className="mt-8">
            <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
              Around 60% of Google searches now end without a click. A meaningful share of first-touch awareness is happening inside AI answer engines that your standard GA4 and GSC reporting cannot see. Citation tracking, structured schema, and answer-engine-specific content architecture are now TOFU investments, not a side project. If your SAGE-style citation data and your organic traffic trend are diverging, that is the gap.
            </p>
          </Callout>
        </section>

        {/* Section 03 — MOFU */}
        <section>
          <SectionHeading number="03" title="Consideration — where qualified buyers go cold" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            MOFU buyers know the problem is real and are actively comparing solutions. They do not need more education about the category. They need proof that you specifically are the right choice, and help building an internal case for it.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            This is the stage most teams under-invest in. The pattern is consistent: a team builds strong TOFU reach and a sharp BOFU conversion push, then leaves the middle thin. Qualified prospects stall in the gap, cool off, and eventually show up in a lost-deal report attributed to &ldquo;went with a competitor&rdquo; or &ldquo;went dark.&rdquo; The fix is almost never more content. It is a scoring and nurture engineering problem.
          </p>

          <div className="mt-8">
            <ScoringGapDiagram />
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-8">
            The data on this is unambiguous. MQL-to-SQL conversion averages 13–15% for teams using static demographic and firmographic scoring. Teams using genuine behavioural scoring run 39–40%. That is not a marginal improvement. It is a 3x gap driven almost entirely by which signals are being weighted. A lead score built on job title, company size, and industry tag is profiling, not scoring. Pricing page visits, guide downloads, webinar completions, and demo requests are the actual intent signals.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Content shape shifts at MOFU</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Case studies, comparison content, webinars, product-led demos, and structured email nurture. Material that helps someone build an internal case, not material that re-explains the problem they already understand.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Behavioural scoring in Marketo</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">The audit question worth running: what percentage of your current lead score is built on engagement signal versus static attributes? If the answer is below 50%, that is where the MQL-to-SQL gap lives.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">AI-driven nurture sequencing</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">The 2026 upgrade to static drip sequences: trigger the next piece of content off actual engagement signal. Viewed pricing page, then send a comparison guide. Downloaded the guide, then invite to a webinar. One static sequence for everyone, regardless of behaviour, is leaving MOFU on manual.</p>
            </div>
          </div>
        </section>

        {/* Section 04 — BOFU */}
        <section>
          <SectionHeading number="04" title="Conversion — process and tooling, not content" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            BOFU buyers are deciding. They need the practical specifics: cost, implementation timeline, contract terms, proof of outcome. They are not discovering you at this point. The job is removing friction from a decision they are already working toward.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            The most under-discussed lever at this stage is follow-up speed. Responding to an inbound lead within five minutes makes a team roughly 21 times more likely to qualify that lead compared to slower response times. The number is striking enough to warrant a moment of attention. This is not a content fix, a better case study, or a stronger CTA. It is a process and tooling fix. Response time is infrastructure, and most teams treat it as a soft metric.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-amber-500/50 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Retargeting over prospecting</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">At BOFU you are not trying to find new people. You are removing friction for people who are already most of the way there. Tightly controlled ABO-style retargeting, not broad prospecting.</p>
            </div>
            <div className="border-l-2 border-amber-500/50 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Remove ambiguity explicitly</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Ambiguity at BOFU costs you the deal. Clear pricing, clear implementation timeline, ROI case studies, guarantees, and direct comparisons. The buyer is actively looking for a reason to say yes or a reason to hesitate. Do not give them the hesitation by accident.</p>
            </div>
            <div className="border-l-2 border-amber-500/50 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">BOFU metrics: CPA, ROAS, close rate, sales-cycle length, lead-response time</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">These are the metrics that belong at BOFU. If they are being applied to TOFU spend, that is a measurement problem upstream.</p>
            </div>
          </div>
        </section>

        {/* Section 05 — Loyalty + Advocacy */}
        <section>
          <SectionHeading number="05" title="Loyalty and Advocacy — where compounding growth lives" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The conventional funnel ends at Conversion. For most SaaS businesses running at meaningful scale, that is the wrong finish line. Expansion ARR now represents over 40% of new ARR for companies above $50M. Net Revenue Retention above 100% means the existing customer base is growing without any new logos, and the compounding effect of that on a growth trajectory is materially different from what CAC-driven acquisition alone produces.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Loyalty: onboarding quality is the leading indicator</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">A rocky first 30, 60, 90 days is the single strongest predictor of early churn, independent of how good the product actually is. The engineering job here is proactive, usage-based outreach: a customer under-using a paid feature, a customer approaching a plan limit. Those triggers should fire before churn risk appears in a lagging retention number.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Advocacy rarely happens spontaneously at scale</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">It needs a deliberate mechanism: referral programmes, case-study requests timed to a genuine recent win, review prompts triggered by a high in-app satisfaction signal rather than sent on a blanket schedule. The timing matters as much as the ask.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Advocacy feeds Awareness — the loop closes here</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Reviews, referrals, and user-generated proof feed directly back into Stage 1. This is why &ldquo;funnel&rdquo; is a slightly misleading shape for the mature model. The bottom genuinely does feed the top, and teams that treat post-purchase stages as cost centres are compounding the wrong direction.</p>
            </div>
          </div>
        </section>

        {/* Section 06 — Connective layer + Attribution */}
        <section>
          <SectionHeading number="06" title="The connective layer — attribution and measurement" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            A funnel engineered stage-by-stage but never connected end-to-end just moves the bottleneck around. The two disciplines that matter more here than any single stage tactic are unified measurement across stages and an honest attribution model.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            A dashboard that shows TOFU traffic and BOFU revenue as separate reports with no connective tissue can tell you that each stage looks healthy but cannot actually diagnose where the leak is. The exec, waterfall, and diagnostic-layer structure is not organisational habit. It is the minimum information architecture required to run the funnel as a system rather than five independent silos.
          </p>

          <div className="mt-8">
            <AttributionDiagram />
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-8">
            Attribution model choice is more consequential than most teams treat it. Last-Click systematically over-credits BOFU and under-credits the awareness and nurture work that built the pipeline in the first place. A team running Last-Click attribution will consistently under-invest in TOFU and MOFU, because those stages show up poorly on the scoreboard they are actually being measured against.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            The 2026 shift practitioners are making: moving toward causal models, specifically Marketing Mix Modelling and incrementality testing. These can distinguish which stage-level spend is actually driving outcomes versus which is riding along with demand that would have existed anyway. Last-Click cannot make that distinction. The practical starting point is not replacing your current attribution overnight, but identifying the two or three channels where Last-Click is most likely to be mismeasuring contribution, and running an incrementality test on those.
          </p>

          <Callout label="Quick reference" className="mt-10">
            <div className="border border-brand-concrete divide-y divide-brand-concrete mt-2">
              <div className="grid grid-cols-3 divide-x divide-brand-concrete bg-brand-graphite/40">
                <div className="px-3 py-2"><span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted">Stage</span></div>
                <div className="px-3 py-2"><span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted">Primary metric</span></div>
                <div className="px-3 py-2"><span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted">Most common mistake</span></div>
              </div>
              {[
                { stage: 'Awareness', metric: 'Reach / CPM / organic traffic', mistake: 'Judging TOFU content by conversion rate' },
                { stage: 'Consideration', metric: 'MQL → SQL rate, engagement depth', mistake: 'Neglecting MOFU nurture entirely' },
                { stage: 'Conversion', metric: 'CPA / ROAS / lead response time', mistake: 'Slow follow-up on qualified leads' },
                { stage: 'Loyalty', metric: 'NRR / adoption depth / renewal rate', mistake: 'Treating the sale as the finish line' },
                { stage: 'Advocacy', metric: 'Referral rate / NPS / UGC volume', mistake: 'Expecting it to happen without a mechanism' },
              ].map(({ stage, metric, mistake }) => (
                <div key={stage} className="grid grid-cols-3 divide-x divide-brand-concrete">
                  <div className="px-3 py-3"><span className="font-sans font-semibold text-xs text-brand-black">{stage}</span></div>
                  <div className="px-3 py-3"><p className="font-sans text-xs text-brand-muted font-mono">{metric}</p></div>
                  <div className="px-3 py-3"><p className="font-sans text-xs text-brand-black/65 italic leading-snug">{mistake}</p></div>
                </div>
              ))}
            </div>
          </Callout>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed">
            The funnel is not broken. The assumption that it runs in a straight line is.
          </p>
        </section>
      </div>
    </div>
  )
}

function MVPTractionArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          PROOF<br />
          <span className="text-brand-cobalt">FIRST.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Building has gotten cheap. AI-assisted engineering has collapsed the cost of shipping software, which means the scarce resource has inverted. It is no longer &ldquo;can you build it.&rdquo; It is &ldquo;can you prove anyone actually wants it, fast, before you spend real time and credibility on the wrong thing.&rdquo;
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            Both investors and internal stakeholders have adjusted accordingly. A deck full of vision does not move either audience anymore. Evidence does. 2026 is the year of proof over promises.
          </p>
        </section>

        {/* Section 01 — Three things */}
        <section>
          <SectionHeading number="01" title="Three things that are not the same thing" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Conflating these is the single most common strategic error at this stage. Each one proves something different, and understanding what each one does not prove is more useful than understanding what it does.
          </p>

          <div className="mt-8 border border-brand-concrete divide-y divide-brand-concrete">
            <div className="grid grid-cols-3 divide-x divide-brand-concrete bg-brand-graphite/40">
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Term</span></div>
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Proves</span></div>
              <div className="px-4 py-3"><span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-muted">Does not prove</span></div>
            </div>
            {[
              {
                term: 'Proof of Concept',
                proves: 'The idea is technically possible — it can be built.',
                not: 'Nothing about whether anyone wants it.',
              },
              {
                term: 'MVP',
                proves: 'A specific segment gets real value from the smallest working version.',
                not: 'Not the full vision. Deliberately incomplete everywhere except the one core job.',
              },
              {
                term: 'Traction',
                proves: 'Repeatable demand exists — people come back, pay, or refer without being pushed.',
                not: 'Not a spike, a vanity number, or a one-time launch bump.',
              },
            ].map(({ term, proves, not }) => (
              <div key={term} className="grid grid-cols-3 divide-x divide-brand-concrete">
                <div className="px-4 py-4">
                  <span className="font-sans font-semibold text-sm text-brand-black">{term}</span>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{proves}</p>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-brand-muted leading-relaxed italic">{not}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            A POC without traction is theory. An MVP without traction is a beta nobody has proven anyone wants. Traction is the actual finish line. Everything before it exists to get you there as cheaply and quickly as possible.
          </p>
        </section>

        {/* Section 02 — Validation sequence */}
        <section>
          <SectionHeading number="02" title="The four-step validation sequence" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Run these in order. Each step is a filter. Most ideas should die at Problem Validation, and that is the system working correctly, not failing.
          </p>

          <div className="mt-8">
            <ValidationSequenceDiagram />
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                n: '01',
                head: 'Problem Validation',
                body: '15–20 structured interviews with a specific segment. If you are not hearing repeated patterns by interview 20, the segment is defined too broadly. Narrow it and rerun.',
              },
              {
                n: '02',
                head: 'Solution Verification',
                body: 'Does your proposed solution actually resolve the validated problem? A landing page, clickable prototype, or narrow POC earns its keep here: cheap to build, fast to falsify.',
              },
              {
                n: '03',
                head: 'Market Viability',
                body: 'Is the addressable segment large enough, and reachable enough, to be worth pursuing? This is the filter most teams run first. Run it third.',
              },
              {
                n: '04',
                head: 'Willingness to Pay',
                body: 'The hardest and most honest signal. People will say they like an idea in an interview. Far fewer will hand over a card number — or, internally, reallocate their own team\'s hours toward it.',
              },
            ].map(({ n, head, body }) => (
              <div key={n} className="flex gap-5 items-start border-b border-brand-concrete pb-5 last:border-b-0">
                <span className="font-display text-3xl text-brand-cobalt/20 flex-shrink-0 w-10 leading-none">{n}</span>
                <div>
                  <h4 className="font-sans font-semibold text-brand-black mb-2">{head}</h4>
                  <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout label="The mindset shift" className="mt-8">
            <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
              Success in this phase is measured by how fast you can invalidate a bad idea, not confirm a good one. Every week spent building on an unvalidated assumption is a week you cannot get back. A fast &ldquo;no&rdquo; is a genuine win.
            </p>
          </Callout>
        </section>

        {/* Section 03 — Scoping the MVP */}
        <section>
          <SectionHeading number="03" title="Scoping the MVP" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            A strong MVP scope in practice: one user type, one core job, one complete end-to-end workflow, using only the services required to make that one workflow function in production. Everything else looks strategic on a roadmap and is almost always waste at this stage.
          </p>

          <div className="mt-8">
            <MVPScopeVisual />
          </div>

          <div className="mt-8 space-y-4">
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">Target 90 days, concept to live MVP</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">If it is taking meaningfully longer, that is usually a sign of over-building or of avoiding an uncomfortable truth about the idea, rather than a genuinely hard technical problem.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">No-code and low-code are a legitimate MVP</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">A landing page with a specific value-proposition headline and a working signup or waitlist flow is a valid first MVP. Do not hire engineers to validate the &ldquo;what&rdquo; and &ldquo;why.&rdquo;</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">AI-assisted engineering: use for scaffolding, not decisions</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">Let AI handle boilerplate, drafts, migrations, and repetitive scaffolding. Keep the architectural decisions — data model, auth, RLS policy design, payment integration — as deliberate human calls. Treating AI-generated first-draft output as production-ready is where hidden defects concentrate, and those decisions are exactly the ones that get expensive to unwind later.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-1">One complete workflow beats several partial ones</span>
              <p className="font-sans text-sm text-brand-black/65 leading-relaxed">A user who can go start-to-finish through the one thing that matters gives you a real signal. A user poking at three half-finished features gives you noise.</p>
            </div>
          </div>
        </section>

        {/* Section 04 — Traction metrics */}
        <section>
          <SectionHeading number="04" title="Traction metrics that actually mean something" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The rule that separates a real traction result from a vanity one: waitlists, a Product Hunt spike, and social follower counts tell an investor nothing on their own. Repeatable demand is what they are actually looking for. Proof that a specific segment comes back, pays, or refers others without being pushed each time.
          </p>

          <div className="mt-8">
            <TractionMetricsDiagram />
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                metric: 'Activation',
                desc: 'Do people who sign up actually use the product, or do they sign up and vanish? This gap — signed up vs. actively used — is the first real signal, and it is almost always worse than the founder thinks.',
              },
              {
                metric: 'Retention (NRR)',
                desc: 'Do they come back? Do they keep paying? Median Net Revenue Retention for venture-backed B2B SaaS sits around 106%. Dropping below 100% is a serious flag in Series A conversations, regardless of how fast top-line growth looks.',
              },
              {
                metric: 'Growth rate, not size',
                desc: 'A smaller company growing fast consistently beats a larger one growing slowly in how investors weigh these numbers against each other. Size alone is noise without the trendline.',
              },
              {
                metric: 'Burn multiple',
                desc: 'Cash burned divided by net new revenue. Under roughly 1.5× signals the market is genuinely pulling your product forward. Above roughly 5× signals you are pushing it uphill.',
              },
              {
                metric: 'CAC payback period',
                desc: 'The time it takes acquisition cost to pay itself back in revenue. Over roughly 18 months is treated as a hard stop at Series A in the current funding climate, regardless of everything else.',
              },
            ].map(({ metric, desc }) => (
              <div key={metric} className="border-l-2 border-brand-cobalt/30 pl-4 py-1">
                <span className="font-sans font-semibold text-sm text-brand-black block mb-1">{metric}</span>
                <p className="font-sans text-sm text-brand-black/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              How to present it: one hero metric, full-width, with a trendline — not buried in a table. Stack two or three supporting proofs underneath. Investors reportedly spend roughly three times longer on the traction slide than any other page in a seed deck, and decide whether to keep listening within the first 20 seconds of seeing it. The hero number needs to be the strongest thing you have, put first.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Paid pilots are the strongest available proof point. Someone reallocating real money is qualitatively different evidence from someone saying yes in an interview. A signed pilot beats a waitlist of a thousand signups.
            </p>
          </div>
        </section>

        {/* Section 05 — Intrapreneurship track */}
        <section>
          <SectionHeading number="05" title="The intrapreneurship track" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Same underlying discipline, different audience and different currency. You are not raising capital — you are winning internal sponsorship, budget, and protected time against competing priorities.
          </p>

          <div className="mt-6 space-y-4">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Stage-Gate is the dominant internal model: progress is reviewed at defined milestones, unravelling a Value Hypothesis, a Business Hypothesis, and a Growth Hypothesis in sequence. Most organisations need the sense of control that milestone review provides — pure &ldquo;move fast and don&apos;t ask&rdquo; does not survive contact with a budget owner.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              You often have resources a startup founder does not: existing customer data, existing distribution channels, regulatory cover, technical infrastructure already in place. This can get you to traction faster than an equivalent external startup — but only if you use those advantages deliberately rather than defaulting to building everything from scratch.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-sans font-semibold text-brand-black mb-4">What internal &ldquo;traction&rdquo; looks like before there is external revenue</h3>
            <div className="space-y-3">
              {[
                'A senior sponsor who can actually unblock resources and shield the initiative from bureaucratic drag. Equivalent to a lead investor.',
                'A pilot with a real internal team or a friendly external customer, with actual usage data — not just a positive meeting.',
                'Budget or headcount reallocated toward the initiative specifically, not left as a side project on spare time. An internal team giving up their hours is a stronger signal than one saying they like the idea.',
                'Learning velocity tracked as an explicit outcome. Reward systems that only value short-term output will quietly kill genuine experimentation.',
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-sans text-[11px] font-semibold text-brand-cobalt flex-shrink-0 mt-0.5 w-5">{i + 1}.</span>
                  <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-sans font-semibold text-brand-black mb-4">Three guardrails</h3>
            <div className="space-y-3">
              {[
                'Decentralise decision rights to a small, accountable team early. Layered approvals are not caution — they are inertia dressed up as governance.',
                'Reframe failed experiments explicitly as disproved hypotheses. This is both more accurate and the only way learning velocity survives a performance-review cycle.',
                'Ring-fence budget before you need it. Organisations that pre-allocate incubation funding during normal budgeting report meaningfully smoother internal venture launches than those fighting for it project by project.',
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start border-l-2 border-brand-cobalt/20 pl-4 py-1">
                  <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 06 — Checklist */}
        <section>
          <SectionHeading number="06" title="Before you build anything further" />
          <Callout label="Quick-reference checklist">
            <ul className="space-y-3 mt-2">
              {[
                'Have I validated the problem with 15–20 real conversations, or am I still assuming it?',
                'Does my current scope cover one user type, one job, one complete workflow — or has it quietly grown?',
                'Is my strongest evidence a genuine commitment (money, time, budget) or just positive sentiment?',
                'Am I measuring repeatable demand, or a one-time spike I\'m mistaking for a trend?',
                'If this isn\'t gaining real traction, would I have the discipline to say so — to myself, and to whoever is sponsoring it?',
              ].map((q, i) => (
                <li key={i} className="flex gap-3 font-sans text-sm text-brand-black/70 leading-relaxed">
                  <span className="text-brand-cobalt/50 flex-shrink-0 mt-0.5">□</span>
                  {q}
                </li>
              ))}
            </ul>
          </Callout>
        </section>

        {/* Closing */}
        <section>
          <p className="font-sans text-lg text-brand-black/75 leading-relaxed border-t border-brand-concrete pt-10">
            The finish line is not a shipped product. It is repeatable demand. Everything else is progress toward it — not a substitute for it.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/articles" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

function DesignTasteArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">SWAP</span><br />
          TEST.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Taste is not talent. It is not a style you are born liking. It is a trained
            pattern-recognition skill — built the same way any other pattern-recognition skill
            is built: repeated exposure to good and bad examples, paired with the discipline of
            naming why one beats the other. Designers who &ldquo;just have an eye&rdquo; spent years doing
            this, usually without calling it training.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            The gap between &ldquo;I like this&rdquo; and &ldquo;this works because of X&rdquo; is the entire distance
            between having preferences and having taste. This is the workbook for crossing it.
          </p>
        </section>

        {/* Section 01 — Competent or distinctive */}
        <section>
          <SectionHeading number="01" title="Competent or distinctive" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              There is a specific reason a huge share of current interfaces cluster around the
              same handful of looks: warm cream backgrounds with a serif display face and a
              terracotta accent; near-black with one acid-green accent; broadsheet layouts with
              hairline rules and dense columns. None of these are wrong. What makes them a problem
              is that they are defaults, reached for regardless of subject, rather than choices
              made because a specific brief called for them.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Competent design executes a template well. Distinctive design makes choices that
              could only belong to this specific subject. The diagnostic worth running on your
              own work is direct: swap the logo and copy for an unrelated brand. Does the design
              still make sense? If yes, the design is not coming from the subject — it is coming
              from a default.
            </p>
          </div>

          <div className="mt-8">
            <SwapTestDiagram />
          </div>

          <Callout label="The swap test" className="mt-8">
            Before calling anything finished: would this design still make sense with a
            competitor&apos;s logo and copy dropped in? If the honest answer is yes, it has not
            actually been designed for this brief yet.
          </Callout>
        </section>

        {/* Section 02 — Training your eye */}
        <section>
          <SectionHeading number="02" title="Training your eye" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              This is deliberate practice, not passive scrolling. The difference is whether you
              are forcing yourself to name why. Four practices that actually compound into taste:
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {[
              {
                head: 'Break down designs you respond to, every time.',
                body: 'Use the same checklist below. The forcing function is consistency — running the same questions on every piece you study is what builds a real pattern library in your head, rather than a collection of things you vaguely admired.',
              },
              {
                head: 'Redesign something that already exists.',
                body: 'Pick a page with a real, specific problem — use your own past work. This forces active problem-solving in a way passive inspiration-browsing never does, because every choice has to be justified against a real constraint rather than admired in someone else\'s finished result.',
              },
              {
                head: 'Imitate deliberately, then interrogate the imitation.',
                body: 'Copying a card layout or a button is not cheating — it is how visual vocabulary gets internalised. The value is not in the copy; it is in the questions you ask while doing it. Skipping that interrogation step is what separates genuine skill-building from just tracing.',
              },
              {
                head: 'Build the theory alongside the practice.',
                body: 'Colour theory and typography fundamentals are not optional extras — they are what let you explain why something works instead of just recognising that it does.',
              },
            ].map(({ head, body }, i) => (
              <div key={i} className="flex gap-5 border-l-2 border-brand-cobalt/20 pl-5">
                <div>
                  <p className="font-sans text-base font-semibold text-brand-black/85">{head}</p>
                  <p className="font-sans text-base text-brand-black/65 leading-relaxed mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CodeBlock>
{`Breakdown checklist — run this on every design you study:

  Colour       how many, what relationship, what's doing the work vs. neutral
  Typography   how many faces, what roles, what the size/weight contrast is doing
  Balance      what's heavy, what's light, where the eye lands first and why
  Spacing      systematic (a real scale) or arbitrary per element
  Consistency  same recurring element behaving the same way everywhere
  Tone         does the copy match the visual register, or fight it`}
            </CodeBlock>
          </div>
        </section>

        {/* Section 03 — The fundamentals */}
        <section>
          <SectionHeading number="03" title="The fundamentals" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Most interface problems are solved by contrast, size, and spacing — used deliberately —
              long before you need a clever idea. Four principles that do the most work for the
              least effort:
            </p>
          </div>

          <div className="mt-8">
            <DesignFundamentalsGrid />
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                head: 'Fewer borders than you think.',
                body: 'Borders read as busy at scale. Box shadows, extra whitespace, and background-colour shifts separate elements more cleanly than another hairline. When in doubt, remove the border and add space.',
              },
              {
                head: 'Spacing follows a system, not a feeling.',
                body: 'An arbitrary spacing value on every element reads as noise even when no single value looks wrong in isolation. A real type/spacing scale is what makes a page feel considered rather than assembled screen-by-screen.',
              },
              {
                head: 'Contrast does the hierarchy work.',
                body: 'Before reaching for a new colour or a bigger element, ask whether size, weight, or spacing contrast alone would do it. Restraint in the palette, real contrast in the structure.',
              },
              {
                head: 'Consistency is how people learn an interface.',
                body: 'The same action should look and read the same everywhere it appears. A button labelled "Publish" that produces a toast saying "Submitted" breaks the mental model a user is quietly building — small inconsistencies erode trust faster than almost any visual flaw.',
              },
            ].map(({ head, body }, i) => (
              <div key={i} className="flex gap-5 border-l-2 border-brand-cobalt/20 pl-5">
                <div>
                  <p className="font-sans text-base font-semibold text-brand-black/85">{head}</p>
                  <p className="font-sans text-base text-brand-black/65 leading-relaxed mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04 — Two-pass process */}
        <section>
          <SectionHeading number="04" title="The two-pass process" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Taste that never gets externalised into a real decision does not count. This is the
              discipline that separates knowing what good looks like from actually shipping
              something distinctive.
            </p>
          </div>

          <div className="mt-8">
            <TwoPassDiagram />
          </div>

          <div className="mt-8 space-y-4">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Pass one is a named token system: four to six hex values stated explicitly (not
              &ldquo;blues and greys&rdquo;), a characterful display face used with restraint, a complementary
              body face, a rough wireframe to compare structural ideas before committing pixels,
              and the single signature element this design will actually be remembered by.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Pass two is the interrogation: for every choice in the plan, would you make the same
              choice for an unrelated brief? If the honest answer is yes, that choice is not coming
              from the subject. Revise it and name explicitly what changed and why. The plan earns
              the right to become the build only once it holds up under this check.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Spend boldness in exactly one place. Pick the single signature element that carries
              the risk, and keep everything else quiet and disciplined around it. A design with
              five bold ideas competing for attention reads as less confident than a design with
              one bold idea and total restraint everywhere else. Before calling something finished,
              look once more and remove one thing.
            </p>
          </div>
        </section>

        {/* Section 05 — Copy as design material */}
        <section>
          <SectionHeading number="05" title="Copy is design material" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Copy is one of the fastest ways a design reveals whether it is genuinely considered
              or templated. Generic copy makes even a well-executed visual system read as hollow.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {[
              {
                head: 'Write from the user\'s side of the glass.',
                body: 'Name things by what people recognise and control, not by how the system is technically built underneath.',
              },
              {
                head: 'Active voice, consistent naming through the whole flow.',
                body: 'A button that says "Publish" should produce a result that says "Published" — not "Submitted," not "Done." Inconsistent naming erodes trust in the whole interface faster than almost anything visual.',
              },
              {
                head: 'Specific beats clever, every time.',
                body: 'A label that plainly states what will happen beats a witty one that requires a beat of decoding.',
              },
              {
                head: 'Errors and empty states are opportunities.',
                body: 'An error should state exactly what happened and how to fix it, without apologising. An empty state should read as an invitation to act, not a dead end.',
              },
            ].map(({ head, body }, i) => (
              <div key={i} className="flex gap-5 border-l-2 border-brand-cobalt/20 pl-5">
                <div>
                  <p className="font-sans text-base font-semibold text-brand-black/85">{head}</p>
                  <p className="font-sans text-base text-brand-black/65 leading-relaxed mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06 — Self-check */}
        <section>
          <SectionHeading number="06" title="Before calling it finished" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Run this checklist before shipping anything:
          </p>

          <Callout label="The self-check" className="mt-6">
            <ul className="space-y-3 mt-2">
              {[
                'Named, specific colour and type choices — not "blues" but the actual hex values and the reason for them.',
                'One clear signature element. Everything else disciplined around it.',
                'Passes the swap test — would not make sense for an unrelated brief.',
                'Spacing follows a real scale, not per-element judgment calls.',
                'Copy matches the visual register and stays consistent through the whole flow.',
                'Reviewed after time away from the screen, not only in the moment of building.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-sm text-brand-black/75 leading-relaxed">
                  <span className="text-brand-cobalt shrink-0 mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>
        </section>

        {/* Closing */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            The test is whether the design could belong to anyone — or whether it could only be this.
          </p>
        </section>

      </div>

      <footer className="max-w-[900px] mx-auto px-6 md:px-10 py-10 border-t border-brand-concrete mt-6">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← All Field Notes
        </Link>
        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}

function ContentWritingArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">LAST</span><br />
          50%.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            The American Dialect Society named &ldquo;AI slop&rdquo; its 2025 Word of the Year.
            Merriam-Webster flagged it as a defining term of the era. Google never needed to
            penalise AI-generated content specifically — it ranked it the same way it always
            ranked everything: does it demonstrate real experience, real expertise, and does it
            actually help the reader?
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            The practical upshot: the question was never AI or not. It is whether a real point of
            view, real specifics, and real editorial judgment are present in what ships. AI is a
            legitimate production tool. Skipping the thinking is the actual failure.
          </p>
        </section>

        {/* Section 1 — What slop actually is */}
        <section>
          <SectionHeading number="01" title="What slop actually is" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Slop is not &ldquo;written with AI help.&rdquo; It is a specific failure pattern: no
              point of view, structural padding substituted for substance, generic phrasing that
              could have come from any source, and nothing that proves someone actually did the
              thing being written about. A 2025 Edelman study found 73% of consumers report being
              able to spot it, and 61% say it lowers their trust in the source. That is the
              commercial cost — not an algorithm penalty, a reader penalty.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The tells are patterns, not individual words. A single instance proves nothing.
              A cluster of these, combined with the absence of any specific detail, is the
              actual signal — to a human reader and to the ranking systems built to detect it:
            </p>
          </div>

          <div className="mt-6">
            <CodeBlock>
{`Throat-clearing openers
  "In today's fast-paced world..."
  "It's no secret that..."
  "When it comes to X..."

Hedge-stacking
  "can potentially"
  "it's worth noting that"
  "generally speaking"

False balance
  "Whether you're a beginner or a seasoned professional..."

Empty transitions
  "That being said"  "At the end of the day"  "Moving forward"

Inflated vocabulary standing in for a real claim
  delve  elevate  unlock  unleash  robust  seamless  game-changer`}
            </CodeBlock>
          </div>

          <div className="mt-8">
            <SlopPatternVisual />
          </div>

          <Callout label="The actual signal" className="mt-8">
            None of these words are banned outright. The pattern is: cluster of generic phrasing
            plus no specific detail only the author could know. That combination is what both
            readers and ranking systems are trained to recognise.
          </Callout>
        </section>

        {/* Section 2 — The six-step fix */}
        <section>
          <SectionHeading number="02" title="The six-step fix" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The practitioner consensus that holds up across every serious source: AI produces
              the first 50% — structure, outline, rough pass. The last 50%, where trust and
              originality live, is still a human job.
            </p>
          </div>

          <div className="mt-8">
            <WritingWorkflowDiagram />
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                n: '01',
                head: 'Start with your own voice, not the prompt box.',
                body: 'Record yourself talking through the idea, or write a rough unstructured brain-dump, before AI touches it. This becomes your source material — it is what keeps the eventual piece from starting life as a generic take on the topic.',
              },
              {
                n: '02',
                head: 'Let AI handle structure and drudgery.',
                body: 'Outlines, H2/H3 scaffolding based on real search intent, topic-cluster brainstorming, turning a long document into a summary, expanding a keyword list. This is where AI is genuinely strongest and where it saves real time.',
              },
              {
                n: '03',
                head: 'Write or heavily rewrite the actual sentences yourself.',
                body: 'Use your own material as the spine. Read the draft aloud — clichéd AI-pattern phrasing is far more audible than it is visible on a screen.',
              },
              {
                n: '04',
                head: 'Add at least one detail only you could know.',
                body: 'A specific result, an actual number, an opinion you are willing to defend, a first-hand observation. This single step does more to defeat both slop-perception and algorithmic demotion than any amount of line-editing.',
              },
              {
                n: '05',
                head: 'Fact-check everything AI contributed.',
                body: 'Hallucinated statistics and fabricated citations are a normal failure mode, not an edge case. Treat every AI-sourced fact as unverified until you have checked it yourself.',
              },
              {
                n: '06',
                head: 'Cut, don\'t just polish.',
                body: 'If a sentence doesn\'t survive being deleted, delete it. Length that isn\'t earning its place is the single most common slop signal.',
              },
            ].map(({ n, head, body }) => (
              <div key={n} className="flex gap-5 border-l-2 border-brand-cobalt/20 pl-5">
                <span className="font-mono text-[11px] text-brand-cobalt/50 font-bold pt-0.5 shrink-0">{n}</span>
                <div>
                  <p className="font-sans text-base font-semibold text-brand-black/85">{head}</p>
                  <p className="font-sans text-base text-brand-black/65 leading-relaxed mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — E-E-A-T */}
        <section>
          <SectionHeading number="03" title="E-E-A-T, practically" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Google's E-E-A-T framework is the official vocabulary for what &ldquo;quality&rdquo;
              means in search ranking. Increasingly, it is also the signal answer engines use when
              deciding what to cite. The four components translate to a single practical question:
              does this content contain something that could only have come from actually doing
              the thing?
            </p>
          </div>

          <div className="mt-8">
            <EEATFramework />
          </div>

          <div className="mt-8 space-y-4">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Generic best-practices content, however well-structured, is exactly the shape
              E-E-A-T is designed to rank below something narrower but real. A campaign page
              or blog post gets stronger the moment it contains a specific number from a real
              campaign, a screenshot of an actual result, or a stated opinion you are willing
              to be disagreed with on.
            </p>
          </div>
        </section>

        {/* Section 4 — Structure and clarity */}
        <section>
          <SectionHeading number="04" title="Structure and clarity" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              These principles predate AI and still determine whether anyone reads to the end.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Plain language, active voice. If you wouldn&apos;t say it out loud that way, don&apos;t
              publish it that way. One idea per sentence, one point per paragraph — bloated,
              multi-clause sentences are exactly what forces a reader to mentally run your
              writing back through AI just to extract what you meant.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Front-load the point. Readers and answer engines both reward getting to the actual
              answer fast, not building up to it. Concrete beats abstract, always: &ldquo;Grew signups
              34% in six weeks&rdquo; beats &ldquo;significantly improved conversion.&rdquo; Specificity is also
              the fastest way to sound human, because generic language is what AI defaults to
              when it doesn&apos;t have a real number to reach for.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Match format to intent. A comparison deserves a table. A process deserves numbered
              steps. A narrative deserves prose. Forcing content into the wrong shape is itself
              a slop signal, independent of the sentences inside it.
            </p>
          </div>
        </section>

        {/* Section 5 — The self-edit pass */}
        <section>
          <SectionHeading number="05" title="The self-edit pass" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Before publishing anything AI helped draft, run this checklist:
          </p>

          <Callout label="Before you publish" className="mt-6">
            <ul className="space-y-3 mt-2">
              {[
                'At least one detail that only you — not any generic source — could have written',
                'A clear, stated point of view. Not studied neutrality on something that deserves an opinion.',
                'Read aloud once. Cut anything that sounds like it\'s clearing its throat before saying something.',
                'Every AI-contributed fact or statistic independently verified.',
                'No sentence survives purely because it sounds good. Each one earns its place or gets cut.',
                'Format matches the content\'s actual shape — list vs. table vs. narrative — not defaulted to generic paragraphs.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-sm text-brand-black/75 leading-relaxed">
                  <span className="text-brand-cobalt shrink-0 mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>
        </section>

        {/* Closing */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            The writing is the thinking. Skip that part, and it shows.
          </p>
        </section>

      </div>

      <footer className="max-w-[900px] mx-auto px-6 md:px-10 py-10 border-t border-brand-concrete mt-6">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← All Field Notes
        </Link>
        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}

function AppSecurityArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">OPEN</span><br />
          DOOR.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            In January 2026, a startup called Moltbook shipped with their Supabase database wide open.
            No breach, no sophisticated attack — anyone who copied the project URL from the browser
            could make a raw HTTP request and read 1.5 million API keys. The app functioned perfectly.
            Every manual test passed. The database was just sitting there.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            This is not a story about bad developers. It is a story about a gap that AI-assisted tooling
            creates by default: the gap between an app that <em>works</em> and an app that is <em>secured</em>.
            Nothing in the demo experience tells you the difference.
          </p>
        </section>

        {/* Section 1 — Why the demo lies */}
        <section>
          <SectionHeading number="01" title="Why the demo lies" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Your Supabase anon key ships inside your JavaScript bundle. That is not a mistake — Supabase
              designed it that way. The anon key is public by intent, meant to be visible in browser dev
              tools. It is safe for exactly one reason: Row Level Security. With RLS correctly in place,
              the anon key can only do what your policies allow. Without it, the anon key is a skeleton
              key to your entire public schema.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              An AI coding tool will generate a complete, working frontend against that open database.
              Click through every screen. Create a user, load data, submit a form. It all functions.
              Nothing in that experience surfaces the fact that the same data is readable by anyone on
              the internet with a curl command. A 2025 analysis found that 10.3% of tested AI-scaffolded
              apps exposed vulnerable Supabase endpoints due to missing or misconfigured RLS.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Functional correctness and access control are different concerns, and only one of them
              shows up in a manual click-through. That gap is the central failure mode.
            </p>
          </div>
        </section>

        {/* Section 2 — Three states */}
        <section>
          <SectionHeading number="02" title="The three states of a table" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            RLS has three states, and confusing them is the most common mistake. Only one of the
            three is actually safe.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <RLSStateDiagram />
          </div>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <div className="flex gap-0">
              <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
                <span className="font-sans text-[10px] text-brand-muted block leading-snug tracking-[0.1em] uppercase">State</span>
                <span className="font-sans font-semibold text-sm text-red-700 mt-0.5 block">RLS off</span>
              </div>
              <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">
                The default on every new Supabase table. The table is fully public — anyone with your
                anon key can read or write everything, with no authentication required. Your frontend
                auth checks do not protect this; those run on the client you control, not on the database.
              </p>
            </div>
            <div className="flex gap-0">
              <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
                <span className="font-sans text-[10px] text-brand-muted block leading-snug tracking-[0.1em] uppercase">State</span>
                <span className="font-sans font-semibold text-sm text-amber-700 mt-0.5 block">RLS on, no policies</span>
              </div>
              <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">
                The opposite failure. The table is fully locked — including from your own app. Every
                query returns zero rows, every write is rejected. Your app looks broken, not insecure.
                This is actually the safer failure mode to land in by accident, because it surfaces
                immediately rather than silently.
              </p>
            </div>
            <div className="flex gap-0">
              <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
                <span className="font-sans text-[10px] text-brand-muted block leading-snug tracking-[0.1em] uppercase">State</span>
                <span className="font-sans font-semibold text-sm text-brand-cobalt mt-0.5 block">RLS on + policies</span>
              </div>
              <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">
                Where you want to be. Access is scoped to what your policies explicitly permit — typically
                the authenticated user's own data, or data their role grants them access to. This is the
                only state that is actually secure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — OWASP Top 10 */}
        <section>
          <SectionHeading number="03" title="OWASP Top 10:2025, translated" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            The OWASP Top 10 is the industry-consensus list of the most critical web application
            security risks. The 2025 edition added two new categories that reflect how cloud-native,
            AI-assisted apps actually break. The list matters, but not equally — for a solo builder
            shipping on Supabase, two categories are doing most of the work.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <OWASPTopTenVisual />
          </div>

          <Callout label="The two that actually matter">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              <strong className="text-brand-black">A01 (Broken Access Control)</strong> and{' '}
              <strong className="text-brand-black">A02 (Security Misconfiguration)</strong> account for
              the overwhelming majority of real incidents in small, fast-shipped apps. A01 is the
              category that missing or misconfigured RLS falls into — it has been the number-one risk
              on the OWASP list for four years running. A02 jumped from fifth to second in 2025,
              driven by cloud platform defaults being left open. Every other category on this list is
              real, but these two are where the actual incidents happen.
            </p>
          </Callout>
        </section>

        {/* Section 4 — Five fixes */}
        <section>
          <SectionHeading number="04" title="Five fixes, in order" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-10">
            These are the highest-leverage moves, ordered by when to apply them.
          </p>

          {/* Fix 1 */}
          <div className="border-l-2 border-brand-cobalt pl-6 mb-10">
            <h3 className="font-sans font-semibold text-base text-brand-black mb-3">1. Audit what is open right now</h3>
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-4">
              Run this in the Supabase SQL editor on every project you own. It takes five minutes and
              it is the check that would have caught every real-world incident cited in this article.
            </p>
            <CodeBlock>{`SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public' AND rowsecurity = false;`}</CodeBlock>
            <p className="font-sans text-sm text-brand-black/60 leading-relaxed mt-4">
              Every table this query returns is publicly readable and writable through the REST and
              GraphQL APIs right now, regardless of what your frontend appears to enforce. Do this
              before anything else in this guide.
            </p>
          </div>

          {/* Fix 2 */}
          <div className="border-l-2 border-brand-cobalt pl-6 mb-10">
            <h3 className="font-sans font-semibold text-base text-brand-black mb-3">2. Enable RLS and write real policies</h3>
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-6">
              There is a pattern that looks like RLS but does nothing. Know it so you can spot it in
              generated code.
            </p>
            <div className="border border-brand-concrete overflow-hidden mb-6">
              <RLSPolicyDiagram />
            </div>
            <CodeBlock>{`-- Enable on every table, every time
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- The pattern you want
CREATE POLICY "users read own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

-- UPDATE needs both clauses — USING governs reads,
-- WITH CHECK governs writes
CREATE POLICY "users update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);`}</CodeBlock>
            <p className="font-sans text-sm text-brand-black/60 leading-relaxed mt-4">
              The <code className="font-mono text-[11px] bg-brand-graphite px-1.5 py-0.5">USING</code> / <code className="font-mono text-[11px] bg-brand-graphite px-1.5 py-0.5">WITH CHECK</code> distinction matters: UPDATE policies need both, or a user
              can read their own row but silently overwrite it with another user's data.
              Add <code className="font-mono text-[11px] bg-brand-graphite px-1.5 py-0.5">ALTER TABLE ... ENABLE ROW LEVEL SECURITY</code> to every table-creation migration
              as a standing habit — not an afterthought once data exists.
            </p>
          </div>

          {/* Fix 3 */}
          <div className="border-l-2 border-brand-cobalt pl-6 mb-10">
            <h3 className="font-sans font-semibold text-base text-brand-black mb-3">3. Test from the client, not the SQL editor</h3>
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              The Supabase SQL editor runs as an elevated role that bypasses RLS entirely. Testing
              a policy there tells you nothing about what a real user can actually do. Test from the
              client SDK, logged in as different real accounts, and verify each policy behaves as
              intended. Testing as yourself while you are also the database admin is how policies
              that do nothing ship to production looking correct.
            </p>
          </div>

          {/* Fix 4 */}
          <div className="border-l-2 border-brand-cobalt pl-6 mb-10">
            <h3 className="font-sans font-semibold text-base text-brand-black mb-3">4. Never expose the service_role key</h3>
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-4">
              The <code className="font-mono text-[11px] bg-brand-graphite px-1.5 py-0.5">service_role</code> key bypasses RLS completely — full database access, no restrictions.
              It should never appear in client-side code. The most common real-world leak paths:
            </p>
            <div className="space-y-3">
              {[
                { label: 'NEXT_PUBLIC_ prefix', note: 'Ships the key straight into the browser bundle. Any env variable prefixed NEXT_PUBLIC_ is public by design.' },
                { label: 'Committed to a repo', note: 'Even briefly. Even with "just for testing" in the commit message. Rotation is the only recovery.' },
                { label: 'Logged at server boot', note: 'Or returned in an error response from an Edge Function. Scan your logs if you suspect this.' },
              ].map(({ label, note }) => (
                <div key={label} className="flex gap-3 items-start">
                  <span className="font-mono text-[10px] text-brand-cobalt/60 mt-0.5 flex-shrink-0 bg-brand-graphite px-2 py-1 border border-brand-cobalt/20">{label}</span>
                  <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-brand-black/60 leading-relaxed mt-4">
              If you suspect a service_role key has leaked, rotate it immediately in the Supabase
              dashboard, then audit query logs for anything that could not plausibly have come from
              your own app.
            </p>
          </div>

          {/* Fix 5 */}
          <div className="border-l-2 border-brand-cobalt pl-6">
            <h3 className="font-sans font-semibold text-base text-brand-black mb-3">5. Index every column referenced in your policies</h3>
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              An unindexed policy check is the single most common performance killer in production
              Supabase apps. A policy on an unindexed column can turn a 2ms query into a multi-second
              one — which then becomes the reason someone disables the policy to "fix" a performance
              problem. Every column referenced inside a <code className="font-mono text-[11px] bg-brand-graphite px-1.5 py-0.5">USING</code> or <code className="font-mono text-[11px] bg-brand-graphite px-1.5 py-0.5">WITH CHECK</code> clause needs an index.
              Do not give anyone a reason to remove security for speed.
            </p>
          </div>
        </section>

        {/* Section 5 — AI-assisted building */}
        <section>
          <SectionHeading number="05" title="When you're building with AI" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Treat "it works" and "it's secured" as two separate checkpoints, not one. An AI coding
              tool will happily scaffold a fully functional app against a completely open database,
              because functional correctness and access control are different problems and only the
              first one shows up in a demo.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Ask for RLS policies in the same prompt as the table — not as a follow-up. "Create
              this table with RLS enabled and a policy scoping rows to the authenticated user's own
              data" gets you the right output. "Create this table" followed by "oh, and secure it
              later" produces a table that is live and open until you remember.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Review AI-generated error handling specifically. Generated code often returns raw
              exception details to help with debugging during development — stack traces, database
              error messages, table names. That pattern, shipped to production unchanged, is an
              information leak. Fail closed by default: deny access when something goes wrong,
              return a generic error to the client, and log the detail server-side.
            </p>
          </div>

          <Callout label="Standing habit" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Run the audit query from Fix 1 before every deploy, not just at initial launch.
              It takes five minutes. A significant schema change is enough to introduce an unprotected
              table — normalising the check means you catch it before it ships rather than after.
            </p>
          </Callout>
        </section>

        {/* Section 6 — Pre-launch checklist */}
        <section>
          <SectionHeading number="06" title="Pre-launch checklist" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            Run this against any project before it goes live, and again after any significant schema
            change. The ongoing items belong in your regular review cycle.
          </p>

          <div className="space-y-8">
            {[
              {
                group: 'Access control',
                items: [
                  'Run the RLS audit query on every table in the public schema',
                  'Confirm every table has RLS enabled, not just some',
                  'Confirm no USING (true) policies unless the data is genuinely meant to be public',
                  'UPDATE policies have both USING and WITH CHECK clauses',
                  'Policies tested from the client SDK under real, different user accounts',
                ],
              },
              {
                group: 'Secrets and keys',
                items: [
                  'service_role key does not appear in client-side code or NEXT_PUBLIC_ variables',
                  'No secrets committed to the repo, including in commit history',
                  '.env files are gitignored — verified in the actual repo, not assumed',
                ],
              },
              {
                group: 'Configuration',
                items: [
                  'Storage buckets reviewed — confirm which are intentionally public',
                  'Production error responses do not expose stack traces or raw database errors',
                  'Dependencies reviewed for anything unfamiliar or recently added',
                ],
              },
              {
                group: 'Ongoing',
                items: [
                  'At least one alert configured for anomalous auth or access activity',
                  'This checklist re-run after any schema change, not only at initial launch',
                ],
              },
            ].map(({ group, items }) => (
              <div key={group}>
                <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-cobalt mb-3">{group}</h3>
                <ul className="space-y-2 border border-brand-concrete">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 items-start px-4 py-2.5 border-b border-brand-concrete/60 last:border-b-0">
                      <span className="font-mono text-xs text-brand-concrete flex-shrink-0 mt-0.5 select-none">☐</span>
                      <span className="font-sans text-sm text-brand-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section>
          <p className="font-sans text-base text-brand-black/60 leading-relaxed border-t border-brand-concrete pt-8">
            The security gap in AI-scaffolded apps is not a model problem or a tooling problem — it is a
            checkpoint problem. The five fixes above are not complex. None of them require specialised
            knowledge. They require only that you treat "it works" and "it's secured" as two separate
            questions, and answer both before you ship.
          </p>
        </section>

        {/* Back link */}
        <div className="border-t border-brand-concrete pt-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
          >
            ← Back to Field Notes
          </Link>
        </div>

      </div>
    </div>
  )
}

function AgenticArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          STOP<br />
          <span className="text-brand-cobalt">BUILDING</span><br />
          AGENTS.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Most things marketed as AI agents are not agents. They are workflows: fixed sequences of LLM calls
            with predefined branching logic and deterministic execution paths. The distinction matters, not
            because "workflow" is a demotion, but because calling a workflow an agent tends to make you engineer
            it wrong. You add complexity it doesn't need, remove predictability you were counting on, and then
            wonder why the system that was supposed to be intelligent keeps doing unexpected things.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            Anthropic's own engineering team puts it plainly: find the simplest solution possible, and only
            increase complexity when a simpler workflow genuinely can't do the job. The most common production
            mistake isn't under-engineering AI systems. It's reaching for autonomous loops when a fixed
            workflow would have been cheaper, faster, and far more debuggable.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <SectionHeading number="01" title="The distinction that actually matters" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              A <strong className="text-brand-black">workflow</strong> executes LLM calls and tool calls through
              code paths you define in advance. You decide the structure; the model fills in the content. It is
              predictable, testable, and cheaper because every call has a known place in a known sequence.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              An <strong className="text-brand-black">agent</strong> is a system where the LLM dynamically
              decides its own sequence of actions based on what it observes — rather than following a control
              flow you wrote in advance. You own the goal and the guardrails; the model decides what to do next.
              Flexible. Harder to predict. More expensive. And errors can compound across steps in ways they
              can't in a fixed workflow.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The practical test: can you enumerate the steps this task requires before running it? If yes,
              you're building a workflow and should. If no — if the right next step genuinely depends on what
              the previous step returned, and you can't anticipate that in advance — that's when an agent
              earns its complexity.
            </p>
          </div>
        </section>

        {/* Section 2 — Five patterns */}
        <section>
          <SectionHeading number="02" title="The five patterns. Use these first" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            These are Anthropic's own taxonomy. Five compositional patterns that are all technically workflows —
            predefined code paths — but that together cover nearly every real production use case.
            If your task fits any of these, you don't need a full autonomous agent.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-10">
            <WorkflowSpectrum />
          </div>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <AgentPatternRow
              n="01" label="Prompt chaining" when="Fixed, ordered sub-steps"
              desc={"Each LLM call processes the output of the previous one, in a fixed sequence. The model at step 3 doesn't decide to go to step 3. Your code does. Use when the task decomposes cleanly into ordered stages whose structure you can write down in advance."}
            />
            <AgentPatternRow
              n="02" label="Routing" when="Different input types"
              desc={"An LLM classifies the input and directs it to a specialised follow-up path. The model decides which branch, but not what the branches are. Use when different input types need genuinely different handling that's too varied to cover with one general prompt."}
            />
            <AgentPatternRow
              n="03" label="Parallelisation" when="Independent subtasks"
              desc={"Multiple LLM calls run simultaneously, results aggregated at the end. Two sub-variants: sectioning (divide the problem, run each part independently) and voting (run the same task multiple ways, pick the consensus or best answer). Use when subtasks have no dependencies on each other."}
            />
            <AgentPatternRow
              n="04" label="Orchestrator–workers" when="Subtasks unknown until examined"
              desc={"A central LLM dynamically breaks a task into pieces and delegates to worker LLMs. The orchestrator decides the subtasks; the workers execute them. Closer to agentic than the previous patterns: the orchestrator has real decision-making power. Still a workflow if the worker execution paths are predefined."}
            />
            <AgentPatternRow
              n="05" label="Evaluator–optimiser" when="Clear quality bar, iteration helps"
              desc={"One LLM generates a response; a second evaluates it against criteria; loop until it passes or you hit a ceiling. The classic 'generate and critique' pattern. Works when you can state what 'good' looks like precisely enough that an LLM can score it reliably. If you can't, the loop runs without improving anything."} last
            />
          </div>

          <Callout label="Decision rule">
            If your task structure is knowable in advance, pick from this table.
            Only move to a full autonomous agent when the task genuinely requires dynamic, open-ended
            decision-making that can't be pinned down as a fixed sequence, route, or evaluation loop.
          </Callout>
        </section>

        {/* Section 3 — Loop patterns */}
        <section>
          <SectionHeading number="03" title="When you actually need a loop" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-10">
            Once a task does need genuine autonomy, two loop shapes handle the majority of production cases.
            The choice between them is less about which is "better" and more about which failure mode
            you're most worried about.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">ReAct (Reason + Act)</h3>
              <div className="border border-brand-concrete overflow-hidden mb-5">
                <ReActLoop />
              </div>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-3">
                The foundational loop. The model alternates: <em>Thought</em> (what do I know, what do I
                need next) → <em>Action</em> (call a tool) → <em>Observation</em> (what came back) →
                loop or terminate.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Strengths: transparent, auditable, adapts immediately to unexpected results. If a search
                returns nothing, it reformulates. If an API errors, it tries a fallback. The loop recalibrates
                after every single step.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mt-3">
                Weakness: prone to getting stuck on tasks that need strict execution order, since it
                recalibrates at every step rather than committing to a plan.
              </p>
              <div className="mt-4 p-3 border border-brand-concrete bg-brand-graphite/30">
                <p className="font-sans text-xs text-brand-cobalt font-medium">Use for:</p>
                <p className="font-sans text-xs text-brand-black/60 mt-1">Exploratory, open-ended tasks — debugging, research, anything where the right next step can't be known until the previous step returns.</p>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Plan-and-Execute</h3>
              <div className="border border-brand-concrete overflow-hidden mb-5">
                <PlanExecuteDiagram />
              </div>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-3">
                Splits thinking into two phases. A planner LLM writes the full multi-step plan up front,
                then an executor runs each step in sequence — or in parallel where steps don't depend
                on each other.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Strengths: locks in a coherent strategy before any irreversible action is taken. Reduces
                step-count on long-horizon tasks. Lets a cheaper model do plain execution once a stronger
                model has done the planning.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mt-3">
                Weakness: less adaptive — if an early step produces an unexpected result, the plan
                doesn't automatically recalibrate the way ReAct does.
              </p>
              <div className="mt-4 p-3 border border-brand-concrete bg-brand-graphite/30">
                <p className="font-sans text-xs text-brand-cobalt font-medium">Use for:</p>
                <p className="font-sans text-xs text-brand-black/60 mt-1">Long, structured tasks where you need a guaranteed sequence and mid-stream drift — the agent executing well but in the wrong order — is the failure mode you're most worried about.</p>
              </div>
            </div>
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Beyond the two basics</h3>
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <AgentLoopRow label="Reflection" desc={"The simplest quality loop: generate output, evaluate it, accept or revise. The agent becomes its own reviewer. Identical in shape to evaluator-optimizer, but run as a loop within a single agent rather than as two separate calls."} />
            <AgentLoopRow label="Multi-agent / Debate" desc={"A coordinator LLM breaks a large task into pieces and dispatches to specialised sub-agents. For high-stakes factual decisions: spawn multiple agents with different stances and have them argue; a judge synthesises the result. Measurably reduces hallucination because no single confident wrong answer goes unchallenged."} />
            <AgentLoopRow label="Agentic RAG" desc={"Retrieval embedded inside the reasoning loop rather than run once upfront. The agent decides mid-loop when it needs to retrieve and what to retrieve, based on what it's discovered so far. Different from standard RAG — retrieval itself becomes an available action at every step, not a fixed preprocessing stage."} />
            <AgentLoopRow label="Loop engineering / checkpointing" desc={"For long-running tasks: periodically checkpoint progress to a durable store — a doc, a file, a task list — and restart the loop with compressed context rather than letting the context window grow unbounded. The emerging standard for multi-session or multi-day tasks."} last />
          </div>
        </section>

        {/* Section 4 — Failure modes */}
        <section>
          <SectionHeading number="04" title="The four failure modes" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            These are what production teams actually learn, usually after deploying something that seemed to work fine in testing.
            Design against all of them before you build, not after.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <AgentFailureModeDiagram />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Loop-stuck behavior</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                ReAct-style agents can cycle without making progress if the termination condition is
                poorly specified. The fix: define an explicit "done" condition, and add a hard step-count
                ceiling as a backstop. Both. Not one or the other.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Error compounding</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                Each autonomous step is a chance to drift further from the goal. The longer the loop,
                the more this matters. Grounding in real environment feedback at each step — tool output,
                execution results — is what keeps this in check. Not just model reasoning.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Circular evaluation</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                The evaluator-optimizer pattern breaks down when the evaluator can't reliably distinguish
                good output from bad. If you can't clearly state what "good" looks like, this pattern
                will loop without actually improving anything. State the quality bar before you build the loop.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Over-engineering</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                Reaching for multi-agent orchestration or full autonomy on tasks that are actually
                fixed-sequence or simple classification problems. Reported as the single most common
                production mistake — not the reverse. The same note applies to agent frameworks:
                they simplify getting started, but hide what's actually happening, making debugging harder.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Build sequence */}
        <section>
          <SectionHeading number="05" title="Build it right. Six steps in order" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            These steps are sequenced deliberately. Skipping ahead is the failure mode.
          </p>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <AgentBuildStep n={1} label="State the goal and the done condition"
              desc={"Before writing any code or prompt. If you can't state what success looks like, you're not ready to build the loop yet — you're still scoping the problem. A vague goal produces a loop that can never terminate correctly."} />
            <AgentBuildStep n={2} label="Try the simplest workflow pattern first"
              desc={"Usually prompt chaining or routing. Only move up the table toward orchestrator-workers or full autonomy if the simpler pattern demonstrably can't handle the task's actual complexity. Most don't need to move up."} />
            <AgentBuildStep n={3} label="Build guardrails before you build capability"
              desc={"Step-count ceilings, explicit termination conditions, human-in-the-loop checkpoints at points where an irreversible or high-stakes action would otherwise happen unsupervised. These come first."} />
            <AgentBuildStep n={4} label="Ground every step in real feedback"
              desc={"Tool call results, execution output, retrieved documents. Not just model reasoning. This is what lets an agent self-correct instead of drifting. A model that only reasons from its own prior output will compound its own errors."} />
            <AgentBuildStep n={5} label="Checkpoint long-running loops"
              desc={"To a durable external store rather than letting them run unbounded inside one context window. Compress and restart rather than accumulate indefinitely. Long context windows don't fix this — they delay it."} />
            <AgentBuildStep n={6} label="Evaluate before you scale"
              desc={"Measure whether the loop actually improves outcomes over the simpler workflow before committing to it in production. Same discipline as RAG: 'it looks like it's working' is not evaluation. The gain from autonomy should be measurable, not just felt."} last />
          </div>

          <Callout label="Field lesson">
            Start with direct LLM API calls. Most patterns in this piece take only a few lines of code
            without a framework. If you do adopt a framework, understand what it's doing underneath —
            incorrect assumptions about the internals are a common source of error, and frameworks that
            hide the prompts make debugging those errors much harder.
          </Callout>
        </section>

        {/* Quick reference */}
        <section>
          <SectionHeading number="06" title="Quick reference" />
          <p className="font-sans text-sm text-brand-muted mb-5 mt-4">Which pattern fits which task.</p>
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            {([
              ['Fixed, ordered sub-steps', 'Prompt chaining'],
              ['Different input types need different handling', 'Routing'],
              ['Independent subtasks, or want consensus across attempts', 'Parallelisation'],
              ['Subtasks unknown until main task is examined', 'Orchestrator-workers'],
              ['Clear quality bar exists and iteration helps', 'Evaluator-optimiser'],
              ['Exploratory, open-ended, uncertain next step', 'ReAct'],
              ['Long, structured, guaranteed sequence required', 'Plan-and-Execute'],
              ['High-stakes factual decision', 'Debate pattern (multi-agent)'],
              ['Retrieval need only becomes clear mid-task', 'Agentic RAG'],
              ['Task spans multiple sessions or days', 'Loop engineering + checkpointing'],
            ] as [string, string][]).map(([situation, pattern], i, arr) => (
              <div key={situation} className={`flex gap-0 ${i < arr.length - 1 ? '' : ''}`}>
                <div className="w-1/2 p-4 border-r border-brand-concrete">
                  <p className="font-sans text-sm text-brand-black/70">{situation}</p>
                </div>
                <div className="w-1/2 p-4">
                  <p className="font-sans text-sm font-medium text-brand-cobalt">{pattern}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/articles" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

function AgentPatternRow({ n, label, when, desc, last = false }: { n: string; label: string; when: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? '' : ''}`}>
      <div className="w-8 flex-shrink-0 p-4 border-r border-brand-concrete flex items-start justify-center">
        <span className="font-sans text-[10px] text-brand-muted font-medium">{n}</span>
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <span className="font-sans font-semibold text-sm text-brand-black">{label}</span>
          <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">{when}</span>
        </div>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function AgentLoopRow({ label, desc, last = false }: { label: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? '' : ''}`}>
      <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/30">
        <span className="font-sans font-semibold text-sm text-brand-cobalt">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{desc}</p>
    </div>
  )
}

function AgentBuildStep({ n, label, desc, last = false }: { n: number; label: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? '' : ''}`}>
      <div className="w-12 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/20 flex items-start justify-center">
        <span className="font-display text-2xl text-brand-cobalt/30 leading-none">{n}</span>
      </div>
      <div className="flex-1 p-4">
        <h4 className="font-sans font-semibold text-sm text-brand-black mb-1.5">{label}</h4>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function RAGArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          RETRIEVE<br />
          <span className="text-brand-cobalt">FIRST.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1">{tag}</span>
          ))}
        </div>
      </header>

      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Lede */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 space-y-4">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              RAG fixes two problems simultaneously: a language model&apos;s training data goes stale,
              and a model under-specified on a fact will confidently generate a plausible wrong answer.
              Retrieval gives it a source to draw from instead. It introduces one new way to fail:
              bad retrieval with false confidence attached.
            </p>
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              The pipeline is seven steps and conceptually simple. Getting retrieval right is not.
              Most production mistakes aren&apos;t in the LLM call — they&apos;re in the three steps before it.
            </p>
          </div>
        </section>

        {/* Section 01 — What RAG is */}
        <section>
          <SectionHeading number="01" title="What RAG actually does" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            RAG (Retrieval-Augmented Generation) pairs a language model with an external retrieval system.
            Instead of answering purely from memorised training data, the model first retrieves relevant
            documents from a knowledge source, then generates its answer using those retrieved documents
            as grounding context. The answer cites specific sources. You can check it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-brand-cobalt/30 p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-cobalt block mb-3">What it fixes</span>
              <div className="space-y-2">
                <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                  <strong className="text-brand-black">Staleness:</strong> model training has a cutoff. RAG works with information from after that cutoff, or with private data the model never saw.
                </p>
                <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                  <strong className="text-brand-black">Hallucination:</strong> without retrieval, a model under-specified on a fact generates a plausible-sounding wrong answer. With retrieval, it has an actual source.
                </p>
              </div>
            </div>
            <div className="border border-brand-concrete p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted block mb-3">What it introduces</span>
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                <strong className="text-brand-black">False confidence:</strong> a RAG system with poor retrieval is worse than no RAG. It adds latency and cost while producing an ungrounded answer, now with a citation attached to give it unearned authority.
              </p>
            </div>
          </div>

          <Callout label="vs. fine-tuning">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Fine-tuning changes model <em>behaviour</em>: tone, format, task specialisation.
              RAG changes what <em>facts</em> the model has access to. If you need the model to know
              something specific, use RAG. If you need it to behave differently, fine-tune.
              RAG is also cheaper and faster to update: swap or add documents rather than retraining.
              This matters most when the underlying information changes frequently.
            </p>
          </Callout>
        </section>

        {/* Section 02 — The pipeline */}
        <section>
          <SectionHeading number="02" title="The pipeline" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Seven steps, two phases. Steps 1–4 run at ingestion time (once per document, or when documents
            update). Steps 5–7 run at query time for every user request. The quality of the query-time
            steps depends entirely on how well the ingestion steps were done.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <RAGPipeline />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Shaded steps run at query time — everything before the dashed line is ingestion.
            </figcaption>
          </figure>

          <div className="space-y-3">
            <PipelineRow n="1" label="Ingest" detail="Collect and clean source documents — PDFs, markdown, web pages, database records. Quality here determines quality throughout. Cleaning means removing headers and footers, stripping embedded-image text that won't extract, normalising encoding." />
            <PipelineRow n="2" label="Chunk" detail="Split documents into smaller passages. Retrieval works at the chunk level. Chunk too small: context gets severed. Chunk too large: relevance gets diluted and tokens get wasted. Chunk size is a real trade-off — the right answer depends on your document type and query patterns." />
            <PipelineRow n="3" label="Embed" detail="Convert each chunk into a vector representation capturing semantic meaning. The embedding model choice affects retrieval quality directly. Domain-specific embedding models often outperform general-purpose ones on specialized content." />
            <PipelineRow n="4" label="Index" detail="Store vectors in a vector database for fast similarity search. Choice of database affects latency, scale, and operational complexity — but it's a secondary concern until you've got the first three steps right." />
            <PipelineRow n="5" label="Retrieve" detail="At query time, embed the user's query and compare against the index to surface the most relevant chunks. This is where hybrid search pays off: vector search finds conceptually related content, keyword search catches exact terms the embedding might blur." highlight />
            <PipelineRow n="6" label="Rerank" detail="A secondary model reorders the retrieved candidates by relevance before the final set is sent to the LLM. Common pattern: retrieve top 20, rerank down to 3–5. First-pass vector similarity is a rough filter, not a precise one." highlight />
            <PipelineRow n="7" label="Generate" detail="The query plus the final selected chunks are sent to the LLM, which generates the answer grounded in that context. This is the step most people optimise first. It's usually the wrong place to start." highlight />
          </div>
        </section>

        {/* Section 03 — Chunking */}
        <section>
          <SectionHeading number="03" title="Chunking strategy" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Fixed-size chunking — split every N characters — is a fast start and a low ceiling.
            The chunk boundary is arbitrary, so it frequently falls mid-sentence, severing context and
            making the extracted chunk ambiguous without what came before or after.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Semantic chunking computes embeddings sentence-by-sentence and starts a new chunk when semantic
            similarity between adjacent sentences drops below a threshold. Boundaries correspond to where
            meaning actually shifts. Retrieving a semantically coherent chunk against a semantically similar
            query produces meaningfully better results — especially on documents that shift topic mid-section.
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <ChunkingComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Fixed-size chunks split at arbitrary boundaries — semantic chunks split where meaning shifts.
            </figcaption>
          </figure>
        </section>

        {/* Section 04 — Hybrid retrieval */}
        <section>
          <SectionHeading number="04" title="Hybrid retrieval" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Dense vector search and sparse keyword search (BM25) are complementary, not competing.
            Vector search finds conceptually related content even without matching words — useful for
            paraphrase, synonyms, and domain inference. Keyword search catches exact terms, proper names,
            codes, and identifiers that embeddings can blur by collapsing similar-sounding but distinct things.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Hybrid retrieval combined with reranking is the default for production systems in 2026.
            It&apos;s not exotic — it&apos;s the sensible baseline. The common reranking pattern: retrieve a
            broad candidate pool (~20), rerank down to 3–5 strong candidates, and send only those to the LLM.
            Reranking larger pools (100+) rarely pays off — useful signal concentrates at the head of the distribution.
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <HybridRetrievalDiagram />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Hybrid retrieval — both branches run on the same query, results merge before reranking.
            </figcaption>
          </figure>
        </section>

        {/* Section 05 — Query transformation */}
        <section>
          <SectionHeading number="05" title="Query transformation" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Raw user queries are often poorly shaped for retrieval. Two techniques address this:
          </p>

          <div className="space-y-4">
            <div className="border border-brand-concrete p-5">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-2">Query expansion</span>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Generate several reformulations of the same question to widen the retrieval net. A user asking
                &quot;how does this work with large files&quot; might retrieve more with
                &quot;performance characteristics on large datasets&quot; or &quot;scalability with file size&quot; added as parallel queries.
              </p>
            </div>
            <div className="border border-brand-concrete p-5">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-2">HyDE — Hypothetical Document Embeddings</span>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Have the model generate a hypothetical answer first, then embed and retrieve using <em>that</em> rather
                than the raw query. The hypothetical answer contains domain language the user&apos;s original
                question likely lacks. It&apos;s counterintuitive — you generate before you retrieve — but it
                works well for knowledge-intensive queries where the user&apos;s vocabulary doesn&apos;t match the document vocabulary.
              </p>
            </div>
          </div>
        </section>

        {/* Section 06 — Advanced patterns */}
        <section>
          <SectionHeading number="06" title="Advanced patterns" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Know these exist. Don&apos;t reach for them by default.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <AdaptiveRAGDiagram />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Adaptive RAG — a classifier routes each query to the cheapest pipeline that can handle it.
            </figcaption>
          </figure>

          <div className="space-y-4">
            <AdvancedPatternRow
              name="Agentic RAG"
              detail="The model iteratively decides to run multiple retrieval steps, reformulating its own queries and reasoning across rounds before answering. Strong for multi-step questions where a single retrieve-then-generate pass misses intermediate context."
            />
            <AdvancedPatternRow
              name="GraphRAG"
              detail="Builds a knowledge graph over source data and retrieves via graph traversal rather than similarity search. The right tool when questions are relationship-heavy: 'how do these three entities connect' — where the answer isn't in any single chunk and vector similarity won't find it."
            />
            <AdvancedPatternRow
              name="Adaptive RAG"
              detail="A query classifier routes each incoming question to the cheapest pipeline that can handle it. Simple factual questions go to fast vector RAG. Complex multi-step questions go to agentic RAG. Relationship questions go to GraphRAG. Emerging as the sensible default for production systems in 2026 — most real-world queries are simple and don't need the expensive path."
            />
          </div>

          <Callout label="The field's actual lesson" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              The most common production mistake is not under-engineering RAG — it&apos;s over-engineering it.
              Start with hybrid retrieval plus a reranker. Measure retrieval quality before adding anything else.
              Only add query transformation, agentic loops, or graph structures once metrics prove the simpler
              approach genuinely falls short for a specific, real class of queries — not because it seems more sophisticated.
            </p>
          </Callout>
        </section>

        {/* Section 07 — Two tracks */}
        <section>
          <SectionHeading number="07" title="Two tracks" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            The right architecture depends on scale. One setup I use routinely; one for production applications.
          </p>

          <div className="space-y-0 border border-brand-concrete mb-8">
            <div className="border-b border-brand-concrete">
              <div className="p-4 border-b border-brand-concrete/60 bg-brand-graphite/40">
                <span className="font-display text-2xl text-brand-cobalt">TRACK A</span>
                <span className="font-sans text-sm text-brand-muted ml-3">Personal / research RAG</span>
              </div>
              <div className="p-5 space-y-3">
                <RAGTrackRow n="1" text="One markdown file per topic — not one giant document. Retrieval works at the chunk level, and a single well-scoped file chunks more predictably than a sprawling one." />
                <RAGTrackRow n="2" text="Use headings as natural chunk boundaries. A model retrieving 'just the pricing section' should find it by heading alone." />
                <RAGTrackRow n="3" text="No exotic formatting — strip tables-as-images, embedded screenshots of text, heavy nested formatting. These are extraction failures identical to the Gate 3 problem in AEO." />
                <RAGTrackRow n="4" text="Plain files on disk (e.g. Obsidian 30-library/) are sufficient at this scale. Claude's context window plus good file organization functions as your retrieval layer." />
                <RAGTrackRow n="5" text="Update files in place rather than creating 'v2' copies. Retrieval should never have to guess which version is current." />
              </div>
            </div>
            <div>
              <div className="p-4 border-b border-brand-concrete/60 bg-brand-graphite/40">
                <span className="font-display text-2xl text-brand-black">TRACK B</span>
                <span className="font-sans text-sm text-brand-muted ml-3">Production / application RAG</span>
              </div>
              <div className="p-5 space-y-3">
                <RAGTrackRow n="1" text="Define the question set first. What will this system actually be asked? Build against real query patterns, not hypothetical ones." />
                <RAGTrackRow n="2" text="Choose a vector database on latency, pricing, and indexing behavior for your actual data volume — not on whichever is most discussed. Chroma and pgvector for smaller deployments; Pinecone, Weaviate, Qdrant, or Milvus for larger scale." />
                <RAGTrackRow n="3" text="Build hybrid retrieval + reranking before anything fancier. This alone puts you ahead of most production deployments." />
                <RAGTrackRow n="4" text="Instrument evaluation from the start — don't bolt it on after launch." />
                <RAGTrackRow n="5" text="Only add complexity (agentic loops, graph retrieval, query transformation) once evaluation data shows the simple pipeline is genuinely insufficient for a real class of queries." />
              </div>
            </div>
          </div>
        </section>

        {/* Section 08 — Failure modes */}
        <section>
          <SectionHeading number="08" title="Failure modes" />

          <div className="space-y-3">
            {[
              { title: 'Bad chunking', detail: 'Context lost at boundaries, or chunks too large to be precise. The most common retrieval quality problem — usually fixed by moving from fixed-size to semantic chunking.' },
              { title: 'Irrelevant embeddings', detail: 'Retrieval surfaces topically adjacent content that doesn\'t actually answer the question. Often a sign of a generic embedding model on domain-specific content, or missing query transformation.' },
              { title: 'Outdated index', detail: 'The knowledge base goes stale even though the system is technically "using RAG." Retrieval is only as current as the last index update.' },
              { title: 'Ambiguous queries', detail: 'Vague questions retrieve vague or scattered results. Query expansion and HyDE exist specifically for this — but the first fix is often pushing back on the query design.' },
              { title: 'False confidence', detail: 'A model will generate a fluent answer from irrelevant retrieved context if not explicitly instructed to say when context doesn\'t address the question. Faithfulness evaluation catches this. Visual inspection usually doesn\'t.' },
            ].map(({ title, detail }) => (
              <FailureMode key={title} n={0} title={title} desc={detail} />
            ))}
          </div>
        </section>

        {/* Evaluation */}
        <section>
          <SectionHeading number="09" title="Evaluation" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            &quot;It looks like it&apos;s working&quot; is not evaluation. Systematic evaluation from day one is becoming
            standard — a majority of new RAG deployments now build it in from the start. Three things to measure:
          </p>

          <div className="space-y-0 border border-brand-concrete">
            <EvalRow
              metric="Retrieval quality"
              detail="Are the retrieved chunks actually relevant to the query? Measure precision and recall against a labeled test set. This is the most important metric — if retrieval is bad, generation can't save it."
            />
            <EvalRow
              metric="Faithfulness"
              detail="Does the generated answer reflect what's in the retrieved chunks, or did the model drift from them? A model that ignores its own retrieved context is producing ungrounded output — retrieval failed to constrain it."
            />
            <EvalRow
              metric="Answer relevance"
              detail="Does the final answer address what was actually asked? Distinct from faithfulness — an answer can be faithful to the retrieved context while still not answering the question if retrieval surfaced the wrong chunks."
              last
            />
          </div>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-4 italic">
            RAGAS is a commonly used open framework for scoring these dimensions systematically.
          </p>
        </section>

        {/* Source note */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-sm text-brand-muted leading-relaxed">
            Core RAG mechanism per Lewis et al. (2020), the original RAG paper. Implementation patterns —
            hybrid retrieval, reranking ratios, adaptive routing, evaluation-first deployment —
            drawn from practitioner sources reporting on production trends (2026). Treat specific tool and
            vendor comparisons as directional rather than definitive; verify against current documentation
            before committing to a specific vector database or framework.
          </p>
        </section>

        <div className="border-t border-brand-concrete pt-8">
          <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← Back to Field Notes
          </Link>
        </div>
      </article>
    </div>
  )
}

function PipelineRow({ n, label, detail, highlight = false }: { n: string; label: string; detail: string; highlight?: boolean }) {
  return (
    <div className={`flex gap-0 border border-brand-concrete ${highlight ? 'border-brand-cobalt/30' : ''}`}>
      <div className={`w-12 flex-shrink-0 flex items-center justify-center border-r border-brand-concrete ${highlight ? 'bg-brand-cobalt/8 border-brand-cobalt/30' : 'bg-brand-graphite/40'}`}>
        <span className={`font-display text-xl ${highlight ? 'text-brand-cobalt' : 'text-brand-muted/50'}`}>{n}</span>
      </div>
      <div className="p-3 flex-1">
        <span className={`font-sans font-semibold text-sm block mb-1 ${highlight ? 'text-brand-cobalt' : 'text-brand-black'}`}>{label}</span>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}

function AdvancedPatternRow({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="border border-brand-concrete p-4">
      <span className="font-sans font-semibold text-sm text-brand-black block mb-1.5">{name}</span>
      <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{detail}</p>
    </div>
  )
}

function RAGTrackRow({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-xs text-brand-cobalt/50 flex-shrink-0 mt-0.5">{n}.</span>
      <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{text}</p>
    </div>
  )
}

function EvalRow({ metric, detail, last = false }: { metric: string; detail: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-40 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
        <span className="font-sans font-semibold text-sm text-brand-cobalt block leading-tight">{metric}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">{detail}</p>
    </div>
  )
}

function AEOArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">THREE</span><br />
          GATES.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1">{tag}</span>
          ))}
        </div>
      </header>

      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Lede */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 space-y-4">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Most content optimisation assumes a visibility problem. It usually isn&apos;t.
              It&apos;s a mechanism problem. The engine never opened your page, or chose not to click through,
              or couldn&apos;t extract a usable answer from what it found. Three different problems.
              Three different fixes.
            </p>
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Treating them as one is why most AEO advice gives you motion without traction.
            </p>
          </div>
        </section>

        {/* Section 01 — The core reframe */}
        <section>
          <SectionHeading number="01" title="The core reframe" />

          <Callout label="The rule">
            <p className="font-sans text-base text-brand-cobalt font-medium leading-relaxed">
              The model can only answer from what it fetched. Not what exists. Not what is true.
              What it actually pulled into context for that specific query.
            </p>
          </Callout>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6 mb-4">
            This sounds obvious stated plainly. It&apos;s not obvious in practice, because most content
            optimisation still treats AI visibility the same way it treats search ranking: quality, relevance,
            and authority. Those things matter. But they&apos;re evaluated only after
            the engine has already decided to open your page. Get eliminated before that decision and
            quality is irrelevant.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed">
            The mechanism works in sequence. A human types a messy, multi-part question. The engine
            doesn&apos;t search for that exact query — it translates it into several clean, query-shaped
            searches (query fan-out). Each search returns its own candidate source list. The engine
            then decides which candidates to open, which pages to extract from, and finally which
            extracted chunks to use in composing the answer. Three decisions. Three places to fail.
          </p>
        </section>

        {/* Query fan-out diagram */}
        <figure>
          <div className="border border-brand-concrete overflow-hidden">
            <QueryFanOut />
          </div>
          <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
            Query fan-out — one human prompt becomes multiple discrete searches, each with its own candidate source list.
          </figcaption>
        </figure>

        {/* Section 02 — The cover */}
        <section>
          <SectionHeading number="02" title="The cover" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Before any extraction, before any quality assessment, the engine makes a click decision
            based on what&apos;s visible without opening the page: URL, title, snippet, sometimes
            a freshness date. That&apos;s the cover. Content quality inside the page is irrelevant at this
            stage. If your title signals brand story rather than utility, if your snippet reads like
            a press release rather than an answer, the engine won&apos;t click through regardless of
            what&apos;s inside.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed">
            This is why a well-written product page with strong SEO fundamentals can still be
            invisible in AI answers. The cover wasn&apos;t shaped for the engine&apos;s selection criteria.
            Optimizing the inside without optimizing the cover is backwards.
          </p>
        </section>

        {/* Section 03 — The three gates */}
        <section>
          <SectionHeading number="03" title="The three gates" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Use this diagnostic any time visibility is lower than expected. It tells you
            <em className="text-brand-black"> which</em> problem you have rather than asking you to guess.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <ThreeGateDiagram />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Three gates — failing any one removes you from consideration for that query.
            </figcaption>
          </figure>

          <div className="space-y-4">
            <GateRow
              n="01"
              name="Fetchable"
              question="Can the engine reach and ingest your page?"
              checks={['Indexed and not blocked by robots.txt?', 'Not behind a paywall or authentication?', 'Crawl errors in GSC?']}
              symptom="Low visibility score across platforms — you're not in the candidate list at all."
            />
            <GateRow
              n="02"
              name="Chosen"
              question="Does your cover look like the answer?"
              checks={['Title signals utility, not brand?', 'Snippet is answer-shaped, not promotional?', 'Format matches the query intent — comparison vs single review?']}
              symptom="Decent visibility score but low rank (9th, 10th position). You're in the list but not being selected."
            />
            <GateRow
              n="03"
              name="Extractable"
              question="Can the engine lift a clean, usable chunk?"
              checks={['Answers visible in plain HTML, not JavaScript-rendered?', 'Not buried in accordions or tabs?', 'Text-based — not locked in images, charts, or video with no surrounding copy?']}
              symptom="Being cited but content isn't appearing in the actual answer. The engine found you but couldn't pull a clean extract."
            />
          </div>

          <Callout label="Platform divergence is diagnostic" className="mt-8">
            <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
              Ranking first on ChatGPT and tenth on Gemini isn&apos;t noise: it means two engines are
              applying different selection logic to the same content. The fix for each will be different.
              Averaging them into a single &quot;AI visibility&quot; number hides both the problem and the opportunity.
              Diagnose each platform separately.
            </p>
          </Callout>
        </section>

        {/* Section 04 — Score vs Rank */}
        <section>
          <SectionHeading number="04" title="Score vs Rank" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            These two metrics get conflated constantly. They measure completely different things.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-brand-cobalt/30 p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-cobalt block mb-2">Visibility Score</span>
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                Your raw presence in AI answers. This can rise for everyone simultaneously as engines
                cite more sources overall. A rising score tells you the category is growing.
              </p>
            </div>
            <div className="border border-brand-concrete p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted block mb-2">Visibility Rank</span>
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                Your position relative to competitors. This is the number that tells you whether
                you&apos;re actually winning. Track both, but optimise for rank.
              </p>
            </div>
          </div>

          <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
            A rising score with flat or falling rank means the category is growing but you&apos;re not
            capturing more of it. This is the most common misread in AEO reporting — a chart that
            goes up and right masking a competitive position that&apos;s quietly getting worse.
          </p>
        </section>

        {/* Section 05 — The SAGE loop */}
        <section>
          <SectionHeading number="05" title="The SAGE loop" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            SAGE is a four-stage cycle (Setup, Analyse, Generate, Engineer) and its most useful
            property is that it tells you which stage to be in right now. The temptation is to default
            to Generate (producing content) because it feels productive. Generating against the wrong
            gaps, or without measurement, is how you ship a lot and move nothing.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <SAGELoop />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              SAGE loop — a cycle you run continuously, not a checklist you complete once.
            </figcaption>
          </figure>

          <div className="space-y-0 border border-brand-concrete mb-6">
            <SAGERow
              stage="Setup"
              trigger={`"We don't know what to track yet"`}
              actions={['Define 5–10 prompts using real buyer language, not target keywords', 'Validate each has genuine query volume', 'Map 3–5 direct competitors for citation comparison', 'Tag by funnel stage and persona for later filtering']}
            />
            <SAGERow
              stage="Analyze"
              trigger={`"We're not sure what's missing or why we're losing"`}
              actions={['Run the three-gate diagnostic on 5 lowest-visibility priority pages', 'Pull citation data — see which competitor sources are winning compound-job queries', 'Check platform divergence — diagnose each engine separately', "Identify 3 \"should be winning but isn't\" pages"]}
            />
            <SAGERow
              stage="Generate"
              trigger={`"We know the gap but nothing is shipping"`}
              actions={['Prioritize highest-leverage fixes first — not the easiest ones', 'Rewrite one existing page as a utility asset as a test before building net-new', 'Re-run visibility check 2–4 weeks post-publish — never assume it worked']}
            />
            <SAGERow
              stage="Engineer"
              trigger={`"It's working but it's manual every time"`}
              actions={['Set recurring monthly minimum SAGE review', 'Build automated alerts for visibility drops on priority pages', "Write a one-page reusable brief template so wins aren't personality-dependent"]}
              last
            />
          </div>
        </section>

        {/* Section 06 — Content that gets cited */}
        <section>
          <SectionHeading number="06" title="Content that gets cited" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Two concepts do most of the work here.
          </p>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            <strong className="text-brand-black">Compound jobs</strong> — queries that combine
            multiple needs in a single ask (&quot;cooling <em>and</em> support&quot;, not just
            &quot;cooling&quot;). These force the engine to be selective. It can&apos;t satisfy every angle,
            so it picks the source that covers the combination best. Single-angle content loses to
            content that resolves the compound job in one place. This is where differentiation
            concentrates, because most content is still written to rank on one keyword at a time.
          </p>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            <strong className="text-brand-black">Utility assets</strong> — content shaped to match
            what the engine is already fetching: comparative, high-density, answer-shaped. Explicitly
            not: product pages, brand-story copy, buried leads. The format question to ask before
            writing is &quot;does this match the shape of the answer the AI is already producing for
            this query?&quot; — not &quot;does this match our content brief?&quot;
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <ContentShapeComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Utility asset vs product page — same topic, different shape, very different citation rate.
            </figcaption>
          </figure>

          <Callout label="Supply chain awareness" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Every AI-generated answer has a traceable supply chain: specific sources, specific
              citations, specific reasons one brand gets mentioned over another. Most marketers never
              read this chain. Understanding which sources an engine draws from — and why those
              rather than others — shows you what content shape actually wins for a given query
              before you&apos;ve written a word.
            </p>
          </Callout>
        </section>

        {/* Section 07 — Stack application */}
        <section>
          <SectionHeading number="07" title="Applying this to the stack" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            The three-gate model maps directly onto existing tools. The diagnostic is faster
            when you already know which data to pull.
          </p>

          <div className="space-y-4">
            <StackRow
              tool="BrightEdge"
              gate="Gate 2 → 3"
              detail="Already tracks some AI-answer visibility — cross-reference its citation data against the three-gate model rather than treating an AI visibility drop as one undifferentiated problem. The citation data tells you which sources are winning; the gate diagnostic tells you why."
            />
            <StackRow
              tool="GSC"
              gate="Gate 1"
              detail="Crawl errors and index-coverage data map directly onto Gate 1 (Fetchable). Check this first, before assuming a content or positioning problem. A crawl block or indexing gap is a one-step fix; a content positioning problem is a quarter of work."
            />
            <StackRow
              tool="AEM"
              gate="Gate 3"
              detail="Audit page templates against the extraction principle. Are answers buried in accordions or tabs — a common AEM pattern — that block Gate 3? Extractability is a template-level problem, not a content-level one. Fixing the template fixes it across every page using it."
            />
            <StackRow
              tool="Marketo"
              gate="Gate 2"
              detail="Campaign landing pages built brand-first rather than utility-first are classic Gate 2 failures. A page optimized for a compound job (X vs Y for [use case]) will outperform a single-angle product page in AI citation terms even with identical SEO fundamentals. Rewrite one as a test before rebuilding the whole set."
            />
          </div>
        </section>

        {/* Source note */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-sm text-brand-muted leading-relaxed">
            The SAGE framework, three-gate model, query fan-out, and utility asset framing are sourced
            from Profound University&apos;s Profound 101 curriculum — Profound is the AEO analytics
            platform named sole Leader on G2&apos;s first AEO Grid (Winter 2026). The underlying framework
            is platform-agnostic. Product-specific performance claims from their marketing material
            should be treated with more scepticism than the model itself.
          </p>
        </section>

        <div className="border-t border-brand-concrete pt-8">
          <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← Back to Field Notes
          </Link>
        </div>
      </article>
    </div>
  )
}

function GateRow({ n, name, question, checks, symptom }: {
  n: string; name: string; question: string; checks: string[]; symptom: string;
}) {
  return (
    <div className="border border-brand-concrete">
      <div className="flex items-baseline gap-3 p-4 pb-3 border-b border-brand-concrete bg-brand-graphite/40">
        <span className="font-display text-3xl text-brand-cobalt/25 leading-none">{n}</span>
        <span className="font-display text-2xl text-brand-black">{name.toUpperCase()}</span>
      </div>
      <div className="p-4 space-y-3">
        <p className="font-sans text-sm font-semibold text-brand-black/80">{question}</p>
        <ul className="space-y-1">
          {checks.map((c) => (
            <li key={c} className="font-sans text-sm text-brand-muted flex gap-2">
              <span className="text-brand-cobalt/60 flex-shrink-0">✓</span>{c}
            </li>
          ))}
        </ul>
        <div className="pt-2 border-t border-brand-concrete/60">
          <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted mr-2">Symptom</span>
          <span className="font-sans text-xs text-brand-black/60 italic">{symptom}</span>
        </div>
      </div>
    </div>
  )
}

function SAGERow({ stage, trigger, actions, last = false }: {
  stage: string; trigger: string; actions: string[]; last?: boolean;
}) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-32 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
        <span className="font-display text-xl text-brand-cobalt block">{stage.toUpperCase()}</span>
        <span className="font-sans text-[10px] text-brand-muted leading-tight block mt-1 italic">{trigger}</span>
      </div>
      <ul className="p-4 space-y-1.5 flex-1">
        {actions.map((a) => (
          <li key={a} className="font-sans text-sm text-brand-black/70 flex gap-2">
            <span className="text-brand-cobalt/40 flex-shrink-0">—</span>{a}
          </li>
        ))}
      </ul>
    </div>
  )
}

function StackRow({ tool, gate, detail }: { tool: string; gate: string; detail: string }) {
  return (
    <div className="border border-brand-concrete p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans font-semibold text-sm text-brand-black">{tool}</span>
        <span className="font-mono text-[10px] text-brand-cobalt bg-brand-graphite px-2 py-0.5 border border-brand-cobalt/25">
          {gate}
        </span>
      </div>
      <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{detail}</p>
    </div>
  )
}

function CodexArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      {/* Back nav */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
        >
          ← Field Notes
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">
            {article!.category}
          </span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-7xl md:text-9xl lg:text-[120px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">$140</span><br />
          QUESTION.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Body */}
      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Lede */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 space-y-4">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              In one documented Express.js refactor, Claude Code cost $155. Codex cost $15. Same task, same outcome —
              a working, passing codebase — but one ran 10× the bill. That gap is real. So is the other direction:
              blind code-quality reviews of the same output preferred Claude Code 67% of the time vs Codex&apos;s 25%.
            </p>
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Neither number wins the argument cleanly. They tell you what you&apos;re trading, not what to choose.
            </p>
          </div>
        </section>

        {/* Section 01 — Context window */}
        <section>
          <SectionHeading number="01" title="Context window" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            1M tokens vs 200K. On a greenfield project with clean module boundaries, the difference is irrelevant.
            On a three-year-old monolith with circular imports, undocumented global state, and ten contributors&apos;
            worth of conflicting conventions — it&apos;s the whole game.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Claude Code can hold the full codebase graph while making a change. Codex has to sample it. Whether
            that sampling degrades the result depends entirely on how interconnected the code is. On a tightly
            coupled legacy codebase, it usually does.
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <ContextWindowComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              1M vs 200K token context window — 5× difference; significant on large, interconnected codebases.
            </figcaption>
          </figure>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-6 italic">
            This is the most durable differentiator between the two tools — not benchmark scores, which shift with
            every model update, but a structural fact about how much each agent can hold at once.
          </p>
        </section>

        {/* Section 02 — Benchmarks */}
        <section>
          <SectionHeading number="02" title="Benchmarks vs reviews" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            On Terminal-Bench 2.0, Codex leads: 82.7% vs 69.4%. On SWE-bench Verified, they&apos;re effectively
            tied: 88.7% vs 88.6%. Both measure whether the tool completed an automated evaluation of a coding task —
            not whether a senior developer would merge that output without edits.
          </p>

          <figure className="my-8">
            <div className="border border-brand-concrete overflow-hidden">
              <BenchmarkChart />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Benchmark scores vs blind code-quality reviews — divergence is the story.
            </figcaption>
          </figure>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            The blind review number is the interesting one. A 42-point gap in human code-quality preference doesn&apos;t
            show up in benchmark pass rates because benchmarks are binary — the test either passes or it doesn&apos;t.
            They don&apos;t measure readability, consistency with existing patterns, or whether the approach you&apos;d
            have chosen yourself.
          </p>

          <Callout label="How to read these numbers">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              SWE-bench Verified and Terminal-Bench measure different tasks — treat them as directional, not
              directly comparable. Blind review numbers vary by evaluator and task type. Verify current figures
              at source before using them to justify budget decisions.
            </p>
          </Callout>
        </section>

        {/* Section 03 — Cost */}
        <section>
          <SectionHeading number="03" title="The actual cost" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Claude Code burns 3–4× more tokens per task than Codex on comparable benchmarks. Extended thinking
            is on by default and billed at 5× the input token rate — meaningful if you&apos;re running it
            iteratively against large files.
          </p>

          <figure className="my-8">
            <div className="border border-brand-concrete overflow-hidden">
              <CostComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Same Express.js refactor — one documented community test. Treat as directional.
            </figcaption>
          </figure>

          <div className="space-y-4 mt-6">
            <CostNote
              label="Subscription structure"
              text="Claude Code runs on your Claude subscription. Usage is shared across Claude Code, Claude.ai chat, and Cowork — heavy chat use eats into your coding budget. The $20 Pro tier is suited for light usage; daily multi-file work generally needs the $100 Max tier."
            />
            <CostNote
              label="Codex billing"
              text="Codex uses token-based credits separate from ChatGPT's chat budget. Sandbox costs vary by month and codebase size — hard to forecast upfront but easier to cap per task."
            />
            <CostNote
              label="The right comparison"
              text="Neither is cheap at scale. Model the cost against hours saved, not against each other in isolation. A $140 difference per refactor is noise if it replaces a day of senior engineering time. It isn't if you're running 50 tasks a week."
            />
          </div>
        </section>

        {/* Section 04 — When to use which */}
        <section>
          <SectionHeading number="04" title="When to reach for each" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            The most effective pattern isn&apos;t picking one tool — it&apos;s knowing which moment calls for which.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <WorkflowSplit />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Workflow fit — the decision is about task shape, not tool quality.
            </figcaption>
          </figure>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Reach for <strong className="text-brand-cobalt font-semibold">Claude Code</strong> when you&apos;re in
            the editor actively building something, the context needs to span many files, and the iteration is
            conversational — you&apos;re steering, not just queuing work.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Reach for <strong className="text-brand-black font-semibold">Codex</strong> when the task is
            well-defined enough to hand off unattended: dependency bumps, isolated type fixes, feature flags on
            a stable interface. It handles async PRs well precisely because the task spec does the steering.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
            Agent Teams — multiple Claude Code instances sharing a task list — changes this calculus somewhat for
            large parallel workloads, but that&apos;s a workflow for teams rather than solo development.
          </p>
        </section>

        {/* Section 05 — Practical tips */}
        <section>
          <SectionHeading number="05" title="Getting more out of Claude Code" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Three habits that materially affect both output quality and cost:
          </p>

          <div className="space-y-0 border border-brand-concrete">
            <TipRow
              label="Cap extended thinking"
              detail={<>On by default, billed at 5× input token rate. Use <code className="font-mono text-brand-cobalt text-xs">MAX_THINKING_TOKENS</code> or <code className="font-mono text-brand-cobalt text-xs">/effort</code> to drop it for tasks that don&apos;t need deep reasoning — most Marketo scripting, AEM component work, small fixes.</>}
            />
            <TipRow
              label="Checkpoint before stepping away"
              detail="Save progress to a doc, then /clear and restart with compressed context rather than resuming a stale session. A session that's gone cold accumulates confusion — you're better off giving it a clean brief than asking it to pick up mid-thought."
            />
            <TipRow
              label="Right model, right task"
              detail="Default to Sonnet for routine work — scripting, component scaffolding, small fixes. Reserve Opus for genuine multi-file architecture decisions where the extra context comprehension justifies the token cost."
              last
            />
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed max-w-prose">
            Both tools are accelerators on well-scoped tasks. Neither replaces architectural judgement on
            ambiguous requirements — that&apos;s still your job. The question isn&apos;t which AI is smarter;
            it&apos;s which workflow fits what you&apos;re building today.
          </p>
        </section>

        {/* Back link */}
        <div className="border-t border-brand-concrete pt-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
          >
            ← Back to Field Notes
          </Link>
        </div>
      </article>
    </div>
  )
}

function CostNote({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-4 items-start border-l border-brand-concrete pl-4">
      <div>
        <span className="font-sans font-semibold text-sm text-brand-black block mb-1">{label}</span>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function TipRow({ label, detail, last = false }: { label: string; detail: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/50">
        <span className="font-sans font-semibold text-sm text-brand-cobalt leading-snug block">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">{detail}</p>
    </div>
  )
}

function PKMArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      {/* Back nav */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
        >
          ← Field Notes
        </Link>
      </div>

      {/* Article header */}
      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">
            {article!.category}
          </span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[108px] text-brand-black leading-none tracking-tightest mb-4">
          CAPTURE<br />
          <span className="text-brand-cobalt">THINK.</span><br />
          COORD.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Intro — the boundary rule */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 mb-8">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Most PKM setups fail the same way: tools overlap, filing decisions happen mid-thought, and
              maintenance debt compounds until the system collapses. The fix is boundaries — not cleverness.
            </p>
          </div>

          <Callout label="The Rule">
            <div className="space-y-2">
              <RuleRow icon="◎" tool="Wispr Flow" role="Capture" note="Input method only. No home of its own." />
              <RuleRow icon="◈" tool="Obsidian" role="Thinking" note="Anything that needs to be written: specs, research, RAG docs, decision logs." />
              <RuleRow icon="⊞" tool="Notion" role="Coordination" note="Anything that needs a status, date, or relation." />
            </div>
            <p className="font-sans text-sm text-brand-muted mt-4 pt-4 border-t border-brand-concrete">
              Test: does this need a status field? Yes → Notion. No → Obsidian.
            </p>
          </Callout>
        </section>

        {/* Flow diagram */}
        <figure>
          <div className="border border-brand-concrete overflow-hidden">
            <FlowDiagram />
          </div>
          <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
            System overview — Wispr feeds both capture destinations; Notion links out to Obsidian, never the reverse.
          </figcaption>
        </figure>

        {/* Wispr section */}
        <section>
          <SectionHeading number="01" title="Wispr Flow" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Wispr is not a storage layer. It&apos;s a dictation engine — you speak, text appears wherever your cursor is.
            The setup is minimal and the benefits compound fast once you&apos;re in the habit.
          </p>

          <SetupList items={[
            { label: 'Hotkey', value: 'fn (desktop default) — keep it frictionless.' },
            { label: 'Privacy Mode', value: 'Enable before dictating anything client-confidential. Audio and active-window screenshots are transmitted to Wispr\'s servers by default.' },
            { label: 'Custom dictionary', value: 'Seed immediately with domain vocabulary: Marketo, BrightEdge, AEM, GA4, GSC, OKLCH, Saltiga, Innovation Atlas, fishtripper, Prado.' },
            { label: 'Command Mode (Pro)', value: 'Select text → "make this more formal" / "turn this into bullet points."' },
            { label: 'Notetaker', value: 'Mac only, free plan, launched Aug 2026. System-audio meeting capture — no bot joins the call. Windows and mobile not yet available.' },
          ]} />

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-6 italic">
            Primary use case: dictating long Claude prompts and dumping raw ideas directly into the Obsidian inbox note.
          </p>

          {/* Wispr mockup */}
          <figure className="mt-8">
            <div className="border border-brand-concrete overflow-hidden">
              <WisprMockup />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Wispr Flow dictation capsule — hovers at cursor position, disappears when done.
            </figcaption>
          </figure>
        </section>

        {/* Obsidian section */}
        <section>
          <SectionHeading number="02" title="Obsidian" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Obsidian is the thinking layer. Every note lives in a local markdown file — no proprietary format,
            no lock-in. The vault structure below is opinionated but simple: four numbered folders plus a templates
            directory. The inbox folder does the heaviest lifting.
          </p>

          <CodeBlock>{`00-inbox/          ← everything lands here first, unprocessed
10-projects/       ← one folder per active project
20-areas/          ← ongoing: career, properties, fishing
30-library/        ← research + RAG source docs
40-archive/
_templates/`}</CodeBlock>

          <p className="font-sans text-sm text-brand-black/75 leading-relaxed mt-6 mb-4">
            Every note uses the same frontmatter structure — this makes the Bases views work and keeps retrieval consistent:
          </p>

          <CodeBlock>{`---
type:    # idea | project | research | log
project: # e.g. innovation-atlas, lambda, strata-tool
status:  # unprocessed | active | on-hold | done
created: # YYYY-MM-DD
tags: []
---`}</CodeBlock>

          {/* Obsidian mockup */}
          <figure className="mt-8">
            <div className="border border-brand-concrete overflow-hidden">
              <ObsidianMockup />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Obsidian vault — file tree with numbered folders, note editor showing standard frontmatter.
            </figcaption>
          </figure>

          <h3 className="font-display text-3xl text-brand-black mt-10 mb-4">Bases Views</h3>
          <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-6">
            Three views are all you need. Install Bases and configure these — they make the daily processing loop fast.
          </p>

          <div className="space-y-4">
            <BasesView
              name="Inbox"
              desc="All notes where status = 'unprocessed', ordered by creation date. This is where you start every morning."
              filter="status == 'unprocessed'"
            />
            <BasesView
              name="Active Projects"
              desc="All project-type notes currently active. Your working dashboard."
              filter="type == 'project' AND status == 'active'"
            />
            <BasesView
              name="Stale"
              desc="Unprocessed notes older than 30 days. Review candidates — delete, file, or promote to Notion."
              filter="status == 'unprocessed' AND created < today() - 30d"
            />
          </div>

          <Callout label="Plugin shortlist" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Templater, QuickAdd, Obsidian Git, Excalidraw. Resist adding more until these earn their keep.
              The marginal plugin is where vaults go to rot.
            </p>
          </Callout>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-6 italic">
            RAG note: keep one markdown file per topic in <code className="font-mono text-brand-cobalt text-xs">30-library/</code>,
            headings as retrieval anchors, no exotic formatting — this is already the ideal shape for feeding into Claude.
          </p>
        </section>

        {/* Notion section */}
        <section>
          <SectionHeading number="03" title="Notion" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Notion handles everything with a status or a date. If a project exists as an Obsidian folder, it
            also exists as a row in the Projects database — but working content lives in Obsidian, never duplicated
            in Notion.
          </p>

          {/* Notion mockup */}
          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <NotionMockup />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Notion Projects database — four core databases with relational links between them.
            </figcaption>
          </figure>

          <h3 className="font-display text-3xl text-brand-black mb-4">Database Schema</h3>

          <div className="space-y-6">
            <DatabaseSchema
              name="Projects"
              rows={[
                ['Name', 'Title'],
                ['Status', 'Select — Idea / Active / On Hold / Done'],
                ['Next Action', 'Text'],
                ['Target Date', 'Date'],
                ['Obsidian Link', 'URL → vault note'],
                ['Tasks', 'Relation → Tasks'],
                ['Ideas', 'Relation → Ideas'],
                ['Content', 'Relation → Content'],
              ]}
            />
            <DatabaseSchema
              name="Tasks"
              rows={[
                ['Name', 'Title'],
                ['Project', 'Relation → Projects'],
                ['Due', 'Date'],
                ['Status', 'Select — To Do / Doing / Done'],
              ]}
            />
            <DatabaseSchema
              name="Ideas"
              rows={[
                ['Name', 'Title'],
                ['Source', 'Select — Wispr / Meeting / Reading / Other'],
                ['Status', 'Select — Raw / Evaluating / Promoted / Archived'],
                ['Promoted To', 'Relation → Projects'],
              ]}
            />
            <DatabaseSchema
              name="Content"
              rows={[
                ['Name', 'Title'],
                ['Project', 'Relation → Projects'],
                ['Channel', 'Select — Blog / Social / Landing Page / Video'],
                ['Status', 'Select — Draft / Review / Scheduled / Live'],
                ['Publish Date', 'Date'],
              ]}
            />
          </div>
        </section>

        {/* The loop */}
        <section>
          <SectionHeading number="04" title="The Loop" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            The system only works if the loop runs. Three cadences, each with a distinct scope:
          </p>

          <div className="space-y-0 border border-brand-concrete">
            <LoopRow
              cadence="All day"
              label="Capture"
              desc="Wispr → Obsidian inbox or Notion Ideas. No filing decisions in the moment. Volume over curation."
            />
            <LoopRow
              cadence="10 min daily"
              label="Process"
              desc="Empty the Obsidian inbox — delete, file into a project folder, or promote to a Notion row. Nothing stays unprocessed overnight."
            />
            <LoopRow
              cadence="30 min Sunday AEST"
              label="Review"
              desc="Notion Projects board — set next action per project. Obsidian Stale view — archive or act."
              last
            />
          </div>
        </section>

        {/* Failure modes */}
        <section>
          <SectionHeading number="05" title="Failure Modes to Avoid" />

          <div className="space-y-4">
            <FailureMode
              n={1}
              title="No two-way sync"
              desc="Notion links out to Obsidian via URL. Never automate the reverse — keeping Notion as read-only of the vault avoids the infinite loop of conflicting updates."
            />
            <FailureMode
              n={2}
              title="No project duplication"
              desc="The row lives in Notion. The folder lives in Obsidian. Working content is in one place only. The moment you copy content across both, you've created a maintenance burden that never resolves."
            />
            <FailureMode
              n={3}
              title="Build in order"
              desc="Wispr + Obsidian inbox (week 1) → Notion spine (week 2) → Bases views (week 3) → agents last, once there's real data to run them against. Skipping ahead means building on air."
            />
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed max-w-prose">
            This stack isn&apos;t clever. It&apos;s boring in the right way — each tool does one thing, the boundaries are
            explicit, and the maintenance loop is short enough to actually run. The goal isn&apos;t a perfect system,
            it&apos;s one that doesn&apos;t require willpower to maintain.
          </p>
        </section>

        {/* Back link */}
        <div className="border-t border-brand-concrete pt-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
          >
            ← Back to Field Notes
          </Link>
        </div>
      </article>
    </div>
  )
}

function CreativeToolsArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          NOT<br />
          <span className="text-brand-cobalt">PROMPTING.</span><br />
          DIRECTING.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Tool comparison */}
        <section>
          <div className="border border-brand-concrete overflow-hidden mb-8">
            <ToolComparisonSplit />
          </div>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Midjourney and Higgsfield are not the same kind of tool in competition. One is built around
            image quality and aesthetic sensibility — stills, art direction, composition. The other is
            a director's console layered over 30-plus third-party and in-house video models, with
            70-plus named, one-click camera presets as its actual product. You use Midjourney to build
            the frame. You use Higgsfield to move it.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            The quality gap that separates usable AI video from something that actually looks like it was
            directed isn't model quality. It's intent. Defaulting to Static and hoping the prompt carries
            the shot is the wrong workflow. Picking a deliberate camera move for a deliberate narrative
            reason is the right one.
          </p>
        </section>

        {/* Midjourney section */}
        <section>
          <SectionHeading number="01" title="Midjourney — stills, art direction, composition" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            V8.2 is the current default as of mid-2026, focused on aesthetics and Personalisation — it reads
            your accumulated ratings and moodboard to skew toward your taste. A handful of parameters do
            most of the work. The rest are edge cases.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <MidjourneyParams />
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Technique that actually moves the needle</h3>
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <CreativeTechRow
              label="Draft → full render workflow"
              desc={"Generate 8–12 low-quality variants in Draft Mode at roughly a quarter of standard credit cost. Pick the strongest 2–3 compositions. Then render those at full quality. Running full renders on your first pass is the expensive way to explore."}
            />
            <CreativeTechRow
              label="Subject vs. aesthetic split"
              desc={"Think of the prompt as defining the subject and --sref as defining the aesthetic. They're separate levers. Turn --sw up to let the style reference dominate; down to let the prompt take the lead. Mixing both in the prompt text is the most common source of muddy output."}
            />
            <CreativeTechRow
              label="Character consistency"
              desc={"For a recurring figure across a sequence, use Omni Reference (V7 and up) rather than re-describing the same face in text each time. Text-only re-description drifts. Reference locking doesn't. This applies to style, product shape, and environment geometry as much as faces."}
            />
            <CreativeTechRow
              label="Photorealism combination"
              desc={"--raw with low --s (stylize value) gives maximum photorealism — it cuts Midjourney's default aesthetic bias and follows the prompt more literally. Higher --s with default styling leans toward the polished Midjourney look. Most confusion about V8 output comes from not knowing which mode you're in."}
            />
            <CreativeTechRow
              label="Syntax drift is real"
              desc={"Midjourney changes parameter names and defaults between versions more than most tools — --style raw became --raw between V7 and the V8 family. Before building a repeatable workflow around any specific flag, confirm current syntax at docs.midjourney.com. Last quarter's syntax is not guaranteed to work."} last
            />
          </div>
        </section>

        {/* Higgsfield section */}
        <section>
          <SectionHeading number="02" title="Higgsfield — camera control, motion, Soul ID" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-6">
            Higgsfield is an orchestration layer over 30-plus underlying models — Kling 3.0, Veo 3.1,
            Seedance 2.0, Wan 2.6, MiniMax Hailuo, Sora 2, and its own Soul and Cinema models. You route
            each shot to whichever model fits it, from one interface, without managing separate subscriptions.
            The differentiators are Soul ID (persistent character identity across generations) and the camera
            preset system.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <CameraMovesGrid />
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Model routing — which model for which shot</h3>
          <div className="border border-brand-concrete divide-y divide-brand-concrete mb-8">
            <CreativeTechRow label="Kling 3.0" desc={"Photorealistic human motion and character-driven scenes. The go-to for anything that requires a real face to move naturally. Also supports Kling Motion Control — takes a character reference image plus a separate motion-reference video and transfers the movement onto the still while preserving identity."} />
            <CreativeTechRow label="Veo 3.1" desc={"Atmospheric and outdoor scenes, native audio generation. Strong for establishing shots, environmental B-roll, and anything where ambient sound matters as much as the image."} />
            <CreativeTechRow label="Seedance 2.0" desc={"Multi-shot narrative and stylized motion. Use it when you need consistent motion logic across a short sequence rather than a single clip."} />
            <CreativeTechRow label="Wan 2.6" desc={"Restyling and video-to-video transfer. Takes real footage and reskins it rather than generating from nothing — useful for adapting one piece of content across multiple visual treatments without reshooting."} last />
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">The honest trade-offs</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {([
              ['Motion stability', "Complex, busy action sequences get unstable. Calm single-subject shots and stylized B-roll are where it performs best. Don't use it to replicate a Michael Bay sequence — use it to hold a character in a deliberate frame."],
              ['Soul ID accuracy', '"Will never drift" is marketing, not guarantee — especially across many sequential generations. Treat it as a strong anchor, not a lock.'],
              ['Credit economics', 'It\'s a credit-metered aggregator. Realistic per-clip cost runs well above the headline subscription once re-rolls factor in. Budget roughly $0.60–$1.00 per usable Kling-quality clip, more for Sora/Veo-tier output.'],
              ['Learning curve', 'It operates as a structured pipeline, not a single-prompt generator. There\'s real workflow to learn versus typing one line and hoping. The presets are the payoff for that investment.'],
            ] as [string, string][]).map(([label, desc]) => (
              <div key={label} className="border border-brand-concrete p-4">
                <h4 className="font-sans font-semibold text-xs text-brand-black mb-1.5">{label}</h4>
                <p className="font-sans text-xs text-brand-black/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <Callout label="Camera technique rule">
            Stick to one primary camera move per clip. Distortion and artifacting increase sharply
            when a prompt asks for multiple conflicting motions at once. Layer a primary move with at
            most one subtle secondary effect — Dolly In plus a gentle Tilt Up — not two competing primaries.
            Name the move in both places: select the preset in the app and repeat the move's name in the
            prompt text. This reinforces the motion engine's target and gives the most reliable, repeatable result.
          </Callout>
        </section>

        {/* Cinematography vocabulary */}
        <section>
          <SectionHeading number="03" title="Cinematography vocabulary — know these cold" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            Prompting with cinematographic precision beats prompting with mood words every time.
            "35mm film photography, Rembrandt lighting" outperforms "cinematic, moody" reliably and repeatably.
            These are the terms worth having immediately available — they work across both tools.
          </p>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            {([
              ['Dolly', 'Camera physically moves toward / away / alongside the subject on a track. Different from zoom — the whole camera moves, changing perspective relationships.'],
              ['Dolly zoom (vertigo effect)', 'Dolly and zoom move in opposite directions simultaneously. Background appears to warp while subject stays framed. Hitchcock. Iconic. Use once.'],
              ['Crane / Jib', 'Camera moves vertically, often combined with a horizontal arc. Frequently used for reveals — starting low, rising to show scale.'],
              ['Dutch angle', 'Camera tilted off the horizontal axis. Signals unease, disorientation, instability. One of the most misused moves — reserve it for genuine tension.'],
              ['Rack focus / focus change', 'Shifting focal point from one plane to another within a shot. Directs viewer attention without cutting. Requires shallow depth of field to read clearly.'],
              ['Shallow depth of field', 'Narrow zone of sharp focus, blurred background. Draws attention to subject. Combined with 35mm or 85mm focal length shorthand to signal the look.'],
              ['Anamorphic', 'Wide-format lens look. Horizontal lens flares, oval bokeh. Immediately reads as "film" rather than "digital video."'],
              ['God rays / volumetric light', 'Visible light shafts through haze or fog. Atmospheric. Works best when paired with a specific light source — through a warehouse window, through forest canopy.'],
              ['FPV (first-person view)', 'Fast, drone-style, unstabilized POV associated with chase and action framing. The opposite of a locked-off studio shot.'],
              ['B-roll', 'Supplementary footage that cuts away from the main narrative shot. In AI generation, the fastest shots to generate and the easiest to over-produce.'],
            ] as [string, string][]).map(([term, def], i, arr) => (
              <div key={term} className="flex gap-0">
                <div className="w-52 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/20">
                  <span className="font-sans font-semibold text-sm text-brand-black">{term}</span>
                </div>
                <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prompt formula */}
        <section>
          <SectionHeading number="04" title="The universal prompt formula" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            This structure works across both tools. The order matters — subject and environment set the
            foundation; lighting and lens guide the model's interpretation; style and parameters tune the output.
            App-level controls (aspect ratio, model selection, duration in Higgsfield) belong in the interface,
            not buried in prompt text.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <PromptFormulaDiagram />
          </div>

          <div className="border border-brand-concrete p-6 bg-brand-graphite/20 space-y-4 mb-6">
            <div>
              <p className="font-sans text-xs text-brand-cobalt font-medium tracking-[0.1em] uppercase mb-1.5">Image (Midjourney-style)</p>
              <p className="font-mono text-sm text-brand-black/70 leading-relaxed">
                {"A contemplative portrait of a woman in her 30s, Rembrandt lighting casting gentle shadows across her face, medium format photography aesthetic, shallow depth of field --ar 4:5 --raw --s 150"}
              </p>
            </div>
            <div className="border-t border-brand-concrete pt-4">
              <p className="font-sans text-xs text-brand-cobalt font-medium tracking-[0.1em] uppercase mb-1.5">Video (Higgsfield-style)</p>
              <p className="font-mono text-sm text-brand-black/70 leading-relaxed">
                {"Cinematic slow dolly-in on [subject] standing in a fog-filled warehouse, camera glides forward at a steady creep, shallow depth of field with background softening, volumetric god rays through haze, teal-and-orange grade, anamorphic flares, 24fps film look — Preset: Dolly In"}
              </p>
            </div>
          </div>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <CreativeTechRow label="One dominant cue" desc={"One dominant style or lighting cue is more reliable than five competing ones. Pick the one or two terms that matter most. 'Rembrandt lighting, shallow depth of field' is better than 'dramatic, moody, cinematic, noir, ethereal.'"} />
            <CreativeTechRow label="Concrete beats vague" desc={'"35mm film photography, Rembrandt lighting" outperforms "cinematic, moody" every time. The model has nothing to work with when you give it a mood word and no technical signal.'} />
            <CreativeTechRow label="App controls stay in the app" desc={"Settings that are app-level controls — duration, aspect ratio, model choice in Higgsfield — belong in the interface, not in the prompt. Add a short reminder at the end of your saved prompt template so you don't forget to set them each time."} last />
          </div>
        </section>

        {/* Uses beyond the obvious */}
        <section>
          <SectionHeading number="05" title="Uses beyond still and clip generation" />
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {([
              ['Product visualization', '360 Orbit + macro lens language + high-key studio lighting is a standard e-commerce formula. Shows a product in the round without a physical shoot.'],
              ['Storyboarding', 'Draft Mode (Midjourney) or rapid MiniMax passes (Higgsfield) to block out a full sequence cheaply before committing budget to final-quality renders.'],
              ['Brand / character consistency', 'Soul ID and Omni Reference exist specifically to solve the serialized-content problem: same face, same voice, across an entire campaign or episodic series.'],
              ['Restyling existing footage', "Wan 2.6's video-reference and style-transfer capability takes real footage and reskins it — useful for adapting one piece of content across multiple visual treatments without reshooting."],
              ['Concept art', "Midjourney's strength in stylized composition makes it a fast concept-art layer ahead of a 3D build (directly relevant to Three.js / Unity / UE5 environment work)."],
              ['Voiceover + lipsync', 'Higgsfield bundles multilingual translation with automatic lip-sync and voice swapping — useful for adapting one video asset across markets without re-shooting or re-recording.'],
            ] as [string, string][]).map(([label, desc]) => (
              <div key={label} className="border border-brand-concrete p-4">
                <h4 className="font-sans font-semibold text-xs text-brand-black mb-1.5">{label}</h4>
                <p className="font-sans text-xs text-brand-black/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What separates good from average */}
        <section>
          <SectionHeading number="06" title="What separates good output from average" />
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <CreativeTechRow
              label="Direct, don't just prompt"
              desc={"The biggest quality jump in Higgsfield specifically comes from treating the preset menu as a director's toolkit — picking a deliberate camera move for a deliberate narrative reason — rather than defaulting to Static and relying on text to carry all the motion description. Bullet Time on a quiet moment reads as a mistake, not a choice."}
            />
            <CreativeTechRow
              label="Iterate cheap, finish expensive"
              desc={"Block out and test compositions on faster or cheaper models (Draft Mode, MiniMax) before spending premium credits on Sora / Veo / Kling-tier final renders. The ratio should be heavily weighted toward drafting — one final render per ten drafts is not unusual."}
            />
            <CreativeTechRow
              label="Reference images beat text for anything you need constant"
              desc={"Style, character, product, environment geometry — across multiple generations, text re-description drifts and reference locking doesn't. If you need it to look the same in shot 6 as it did in shot 1, don't re-describe it. Reference it."}
            />
            <CreativeTechRow
              label="Match camera language to narrative intent"
              desc={"The named presets are the vocabulary. Using the right move still matters more than using an unusual one. A Crash Zoom on a slow, contemplative scene is a directorial error regardless of how sharp the render is. Calm shots deserve slow dollies. High-impact moments earn fast cuts and crash zooms."} last
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/articles" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

function CreativeTechRow({ label, desc, last = false }: { label: string; desc: string; last?: boolean }) {
  return (
    <div className="flex gap-0">
      <div className="w-48 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/20">
        <span className="font-sans font-semibold text-sm text-brand-cobalt">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{desc}</p>
    </div>
  )
}

function HermesCommandRow({ cmd, desc, last = false }: { cmd: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-56 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/30">
        <code className="font-mono text-xs text-brand-cobalt">{cmd}</code>
      </div>
      <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{desc}</p>
    </div>
  )
}

function HermesArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          AGENT<br />
          <span className="text-brand-cobalt">THAT</span><br />
          REMEMBERS.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Every time you open a chat tool, you start from zero. You re-explain your stack.
            You re-explain your project history, your naming conventions, your preferences, the decision you made
            last week and why. The model has no memory of any of it — because session tools are designed
            to be stateless. That&rsquo;s a product choice, not a technical constraint. And for most
            active-session work, it&rsquo;s a reasonable one.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            Hermes Agent, released by Nous Research in February 2026 under MIT, is built around the opposite
            premise. It runs as a persistent daemon on your own hardware. It indexes every session into a
            local SQLite store with full-text search. It writes reusable skill documents when it solves
            something hard, so the next time a similar problem comes up, it doesn&rsquo;t start from scratch.
            The setup overhead is real. What you get in return is an agent that already knows who you are
            every time you open a session.
          </p>

          <div className="mt-10 border border-brand-concrete">
            <HermesMemoryTimeline />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            Standard chat vs. Hermes: the session inheritance model
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <SectionHeading number="01" title="Memory that actually persists" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Hermes stores all memory in a local SQLite database at <code className="font-mono text-xs bg-brand-graphite px-1.5 py-0.5">~/.hermes/state.db</code>, indexed with FTS5 for full-text search across every session you&rsquo;ve ever run. When you ask &ldquo;what did we land on for the authentication schema?&rdquo; it&rsquo;s not searching your current context — it&rsquo;s searching the actual historical record, with LLM summarisation to surface relevant cross-session context the way a good note-taking system would.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The memory is <strong className="text-brand-black">agent-curated, not a raw transcript dump.</strong> Hermes periodically reviews what it&rsquo;s logged and decides what&rsquo;s actually worth keeping — condensing, surfacing key decisions, archiving noise. This matters because unlimited transcript accumulation gets expensive and slow quickly; curated memory stays useful.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              For teams or individuals who want deeper user modeling, there&rsquo;s optional Honcho integration — &ldquo;dialectic user modeling&rdquo; in the project&rsquo;s own framing. Instead of re-inferring your working style, your tool preferences, and your project context each session, Honcho builds and maintains a persistent model of who you are across all sessions. The result is an agent that gets progressively better at working with you specifically, not just better at generating text generally.
            </p>
          </div>

          <Callout label="All of it stays local" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Zero telemetry, zero data collection. The state database, all session logs, all memories
              and skills — everything lives in <code className="font-mono text-xs bg-brand-graphite px-1 py-0.5">~/.hermes/</code> on your machine. Nothing leaves unless you&rsquo;ve
              explicitly connected an external provider or messaging platform. The project is fully
              open-source under MIT — every line is auditable.
            </p>
          </Callout>
        </section>

        {/* Section 2 */}
        <section>
          <SectionHeading number="02" title="The agent that writes its own manual" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            When Hermes solves something non-trivial, it writes a <strong className="text-brand-black">SKILL.md</strong> — a reusable, portable skill document that captures what it learned. The next time a similar problem comes up, it loads the relevant skill rather than re-solving from scratch. Skills self-improve during use, accumulate naturally as you work, and follow the open <code className="font-mono text-xs bg-brand-graphite px-1.5 py-0.5">agentskills.io</code> standard — meaning they&rsquo;re portable across any Hermes instance and shareable with the community.
          </p>

          <div className="mt-10 border border-brand-concrete">
            <SkillFlywheel />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            The skill accumulation flywheel — solved once, reused indefinitely
          </p>

          <div className="mt-8 space-y-4">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              40+ skills ship built-in — MLOps workflows, GitHub automation, diagramming, note-taking,
              and more. The community skill hub at <code className="font-mono text-xs bg-brand-graphite px-1.5 py-0.5">agentskills.io</code> extends that with a one-command install.
              But the most useful skills are the ones the agent writes from your own work — those are
              calibrated to your specific stack, your naming conventions, your preferences. They&rsquo;re
              not generic.
            </p>
          </div>

          <Callout label="Curator hygiene" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              As a long-running instance accumulates skills, overlap and redundancy creep in. <code className="font-mono text-xs bg-brand-graphite px-1 py-0.5">hermes curator</code> runs background maintenance: reviewing agent-created skills, consolidating duplicates, archiving stale entries, and protecting anything you&rsquo;ve pinned. Without periodic curation, a mature instance can end up with conflicting skill documents that slow retrieval and produce inconsistent behaviour. Run the curator; don&rsquo;t skip it.
            </p>
          </Callout>
        </section>

        {/* Section 3 */}
        <section>
          <SectionHeading number="03" title="One daemon, every surface" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            A single <code className="font-mono text-xs bg-brand-graphite px-1.5 py-0.5">hermes gateway</code> process serves every connected platform simultaneously — Telegram, Discord, Slack, WhatsApp, Signal, email, and roughly a dozen more. Cross-platform conversation continuity means you can start a thread on your phone via Telegram, continue it in the terminal, and pick it up in your IDE — same session memory, same context, carried across every surface.
          </p>

          <div className="mt-10 border border-brand-concrete">
            <GatewayHubSpoke />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            One gateway process — eight platforms shown, twenty supported
          </p>

          <div className="mt-8">
            <CodeBlock>{`hermes gateway setup     # interactive wizard: connect Telegram, Discord, Slack, etc.
hermes gateway           # start the gateway process
hermes gateway install   # install as a systemd service (runs on reboot)`}</CodeBlock>
          </div>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-8">
            Execution environments give you control over how much isolation you want:
          </p>
          <div className="mt-4 space-y-4">
            <div className="border-l-2 border-brand-cobalt pl-6">
              <h3 className="font-display text-xl text-brand-black mb-1">LOCAL TERMINAL</h3>
              <p className="font-sans text-sm text-brand-black/65">Direct execution on your machine. Fast, no overhead. Appropriate for trusted tasks you&rsquo;d run manually.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/40 pl-6">
              <h3 className="font-display text-xl text-brand-black mb-1">DOCKER</h3>
              <p className="font-sans text-sm text-brand-black/65">Isolated container with read-only root filesystem, dropped capabilities, and PID limits. The right default for anything untrusted.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/40 pl-6">
              <h3 className="font-display text-xl text-brand-black mb-1">SSH REMOTE</h3>
              <p className="font-sans text-sm text-brand-black/65">Execute on any remote server. Useful for scheduled tasks that touch production infrastructure without opening it to your local environment.</p>
            </div>
            <div className="border-l-2 border-brand-cobalt/40 pl-6">
              <h3 className="font-display text-xl text-brand-black mb-1">MODAL / SINGULARITY</h3>
              <p className="font-sans text-sm text-brand-black/65">Cloud and HPC execution backends for compute-heavy workloads.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionHeading number="04" title="The machine that runs while you sleep" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The scheduling system is the practical unlock. A cron job written in natural language, delivered to any connected platform, with skills attached so it doesn&rsquo;t start cold. A &ldquo;morning briefing to Telegram&rdquo; or &ldquo;nightly infrastructure health check to Slack&rdquo; is a single command plus a well-scoped prompt. No script, no wrapper, no pipeline configuration.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            The most important rule for cron job prompts: <strong className="text-brand-black">the prompt must contain everything the agent needs that isn&rsquo;t covered by an attached skill.</strong> Vague prompts fail silently in unattended runs — there&rsquo;s no one present to clarify. A well-scoped cron prompt looks like: <em>&ldquo;SSH into server 192.168.1.100 as user &lsquo;deploy&rsquo;, check if nginx is running with systemctl status nginx, and verify that https://example.com returns HTTP 200.&rdquo;</em> That&rsquo;s specific enough to succeed without human input.
          </p>

          <div className="mt-10 border border-brand-concrete divide-y divide-brand-concrete">
            <HermesCommandRow cmd="hermes cron list" desc="Show all scheduled jobs — status, next run, attached skills." />
            <HermesCommandRow cmd="hermes cron create" desc="Create a job from a natural-language prompt. Specify delivery target and attached skills." />
            <HermesCommandRow cmd="hermes cron edit <job>" desc="Update schedule, prompt, name, delivery target, or attached skills." />
            <HermesCommandRow cmd="hermes cron pause <job>" desc="Pause without deleting. Useful for jobs that touch live infrastructure during testing." />
            <HermesCommandRow cmd="hermes cron run <job>" desc="Trigger immediately, outside the schedule. Test before trusting to the clock." />
            <HermesCommandRow cmd="hermes cron remove <job>" desc="Permanently delete the job." last />
          </div>

          <Callout label="Two safety constraints" className="mt-8">
            <ul className="space-y-2 font-sans text-sm text-brand-black/70 leading-relaxed">
              <li>Scheduled task prompts are scanned for prompt-injection and credential-exfiltration patterns at both creation and update time.</li>
              <li>Cron-run sessions cannot recursively create more cron jobs — Hermes disables cron-management tools inside cron executions specifically to prevent runaway self-scheduling loops.</li>
            </ul>
          </Callout>
        </section>

        {/* Section 5 */}
        <section>
          <SectionHeading number="05" title="Claude Code or Hermes?" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            These tools solve different problems. The marketing language around both implies overlap that doesn&rsquo;t exist in practice.
          </p>

          <div className="mt-8 border border-brand-concrete">
            <HermesVsClaudeComparison />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            Different tools, different jobs — the honest comparison
          </p>

          <div className="mt-8 space-y-4">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              If your need is &ldquo;help me refactor this codebase right now,&rdquo; Claude Code is the sharper tool. It has deeper context engineering, better real-time coding capability, and it&rsquo;s purpose-built for the active-session pairing model.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Hermes is worth the setup overhead specifically for the work that currently means re-explaining your context every time you start a new session — recurring automation, multi-project context management, unattended overnight tasks. If you&rsquo;re not doing that kind of work, the setup overhead doesn&rsquo;t pay off. If you are, nothing else has the same architecture for it.
            </p>
          </div>

          <Callout label="The setup calculus" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Recommended first run: install via the curl script, run <code className="font-mono text-xs bg-brand-graphite px-1 py-0.5">hermes setup</code> with whichever provider you already have credentials for, then <code className="font-mono text-xs bg-brand-graphite px-1 py-0.5">hermes doctor</code> to confirm a clean install. Run one plain interactive session as a smoke test before enabling the gateway or creating any cron jobs. Create exactly one low-stakes scheduled job first — a daily summary delivered to your home channel — before trusting it with anything that touches infrastructure or credentials. Let skills accumulate naturally through real use. That&rsquo;s the entire point of the design.
            </p>
          </Callout>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/articles" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

function MetricRow({ signal, meaning, last = false }: { signal: string; meaning: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-52 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/30">
        <span className="font-sans font-medium text-sm text-brand-black">{signal}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{meaning}</p>
    </div>
  )
}

function TokenmaxxingArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/articles" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">WRONG</span><br />
          SCOREBOARD.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            In April 2026, The Information reported that a Meta employee had built an internal leaderboard —
            nicknamed &ldquo;Claudeonomics&rdquo; — ranking colleagues by tokens processed and generated.
            Top performers earned digital badges with titles like &ldquo;Cache Wizard&rdquo; and &ldquo;Model
            Connoisseur.&rdquo; The highest-ranked individual averaged 281 billion tokens. The leaderboard
            was taken down two days after the report.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            That&rsquo;s the whole story. Everything else is commentary on why it was always going to end
            that way, and what the people who built similar dashboards at Amazon, Atlassian, and a dozen
            other companies should have tracked instead.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <SectionHeading number="01" title="Why the metric failed" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The origin of tokenmaxxing is rational. Organisations wanted a visible signal that teams were
              actually adopting AI tools — a genuine, reasonable goal. Token counts happened to be one of the
              only AI inputs every provider meters cleanly, so it was the easiest number to put on a dashboard.
              Easy to measure is not the same thing as a good proxy for the thing you actually care about, and
              that gap is the entire problem.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The core issue: <strong className="text-brand-black">tokenmaxxing measures consumption, not output.</strong> Token-heavy
              workflows — agentic coding, multi-step reasoning — genuinely do consume large volumes of tokens when
              they deliver real value. But identical token volumes can come from an agent running in circles
              producing nothing useful. The number alone cannot distinguish the two cases.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              Once the metric became visible on a leaderboard, behaviour predictably warped around it: engineers
              padding prompts, running redundant parallel agents, routing everything through frontier-tier models
              regardless of task complexity. One internal audit of roughly 100,000 prompt logs found that
              approximately 65% of queries were simple definitional questions or minor refactors — work that
              didn&rsquo;t need expensive tokens, but got them anyway because the default was always the
              most powerful endpoint available.
            </p>
          </div>

          <div className="mt-10 border border-brand-concrete">
            <TokenLeaderboard />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            Claudeonomics: the leaderboard that lasted 48 hours
          </p>

          <Callout label="The Goodhart problem" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              When a measure becomes a target, it ceases to be a good measure. Goodhart&rsquo;s Law has
              been applied to everything from school test scores to hospital wait times. AI token
              leaderboards were always going to produce the same outcome: behaviour optimised for the
              number, not for the work the number was supposed to represent.
            </p>
          </Callout>
        </section>

        {/* Section 2 */}
        <section>
          <SectionHeading number="02" title="The corrective: valuemaxxing" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            The counter-practice gaining traction is <strong className="text-brand-black">valuemaxxing</strong>:
            optimising for outcomes per dollar spent, rather than volume for its own sake. The signal
            distinction is straightforward. Genuine skill shows up as tokens per good outcome
            <em> going down</em>, not up. A tighter, better-scoped context package consistently
            outperforms four parallel agents running against a vague prompt, using a fraction of
            the tokens to reach an acceptable result.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            What to actually track:
          </p>

          <div className="mt-8 border border-brand-concrete">
            <VanityVsValue />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            Left column: what's on the dashboard. Right column: what should be.
          </p>

          <div className="mt-10 border border-brand-concrete divide-y divide-brand-concrete">
            <MetricRow signal="Total tokens used" meaning="Activity level only — tells you something happened, nothing about whether it was worth anything." />
            <MetricRow signal="Tasks completed & shipped" meaning="The closest single-number proxy to actual productivity. Not granular, but directionally honest." />
            <MetricRow signal="Iterations to acceptable output" meaning="A measure of prompt and context quality. Falling iteration count is the real skill signal." />
            <MetricRow signal="Cost per completed task" meaning="Total spend across all calls until the work is done and accepted. The number that should inform budgeting." />
            <MetricRow signal="Model tier used vs. task complexity" meaning="Whether spend is matched to actual need. 65% of queries don't require frontier-tier models." last />
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <SectionHeading number="03" title="Practical calibration" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            Most of this comes down to one discipline: match the tool to the task before you spend, not
            after. That sounds obvious, but the default in most AI-enabled environments is to route
            everything to the most capable endpoint available. The cost of that default adds up.
          </p>

          <div className="mt-10 border border-brand-concrete">
            <ComplexityRouter />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            Efficient allocation vs. defaulting everything to frontier tier
          </p>

          <div className="mt-10 space-y-6">
            <div className="border-l-2 border-brand-cobalt pl-6">
              <h3 className="font-display text-2xl text-brand-black mb-2">SCOPE BEFORE YOU SPEND.</h3>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Write the actual goal and &ldquo;done&rdquo; condition before starting a session. A vague
                prompt invites a vague, token-heavy back-and-forth to converge on what you actually meant.
                For Claude Code specifically: extended thinking is billed as output tokens at a real premium.
                Cap it or drop the effort tier for tasks that don&rsquo;t require deep reasoning — routine
                scripting and minor refactors don&rsquo;t need the same reasoning budget as a genuine
                multi-file architecture decision.
              </p>
            </div>

            <div className="border-l-2 border-brand-cobalt pl-6">
              <h3 className="font-display text-2xl text-brand-black mb-2">MATCH MODEL TO TASK, NOT HABIT.</h3>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Default to lighter, faster models for simple, well-defined work — definitional questions,
                small refactors, formatting. Reserve heavier models for tasks with real ambiguity or
                multi-step reasoning. The 65% figure above — simple queries hitting frontier endpoints by
                default — is the exact waste this avoids.
              </p>
            </div>

            <div className="border-l-2 border-brand-cobalt pl-6">
              <h3 className="font-display text-2xl text-brand-black mb-2">CHECKPOINT INSTEAD OF SPRAWL.</h3>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Long, meandering sessions accumulate context that isn&rsquo;t all pulling weight. Checkpoint
                progress to a doc and start a fresh, compressed session rather than letting one conversation
                run indefinitely. The same principle applies to your own working sessions, not just
                autonomous agents: a clean context is a cheaper context.
              </p>
            </div>

            <div className="border-l-2 border-brand-cobalt pl-6">
              <h3 className="font-display text-2xl text-brand-black mb-2">MEASURE YOUR OWN SIGNAL.</h3>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Pick one recurring task type and track iterations and spend this month versus last.
                Falling iteration count at stable or falling cost is the actual win condition.
                Rising raw token usage is not.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionHeading number="04" title="The trend line that actually matters" />
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6">
            There&rsquo;s a legitimate version of high token consumption: the learning phase. When
            you&rsquo;re learning how to engineer a new workflow type — figuring out the right context
            packaging, the right model tier, the right loop structure — iteration is expensive, and that
            cost is worth paying. It&rsquo;s training spend. Expected, worth budgeting for, worth
            timeboxing.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-4">
            What isn&rsquo;t acceptable is treating training-mode burn rates as steady-state. If you&rsquo;re
            still consuming the same volume six weeks into a repeatable task, that&rsquo;s a signal the
            workflow hasn&rsquo;t been engineered yet — it&rsquo;s still being improvised.
          </p>

          <div className="mt-10 border border-brand-concrete">
            <CostPerTaskChart />
          </div>
          <p className="font-sans text-[11px] text-brand-muted mt-3 text-center tracking-wide uppercase">
            Training spend followed by outcome mode. The payoff should be visible.
          </p>

          <Callout label="The real skill signal" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              The transition from training spend to steady-state should be visible on a graph.
              If cost per task is still climbing six weeks into a repeatable workflow, the workflow
              hasn&rsquo;t been engineered yet. Track cost per completed task week over week.
              That downward slope is what mastery looks like, not a leaderboard position.
            </p>
          </Callout>

          <div className="mt-10 bg-brand-graphite border border-brand-concrete p-8">
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-cobalt mb-5">Quick reference</p>
            <div className="border border-brand-concrete divide-y divide-brand-concrete">
              <div className="grid grid-cols-2 bg-brand-black/5">
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted p-3">Signal</span>
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted p-3">What it actually tells you</span>
              </div>
              <MetricRow signal="Total tokens used" meaning="Activity level only — no outcome information" />
              <MetricRow signal="Tasks completed per session" meaning="Closer to real productivity" />
              <MetricRow signal="Iterations to acceptable output" meaning="Skill and prompt / context quality" />
              <MetricRow signal="Cost per completed task" meaning="The number that should actually inform budgeting" />
              <MetricRow signal="Model tier vs. task complexity" meaning="Whether spend is matched to actual need" last />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/articles" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-brand-concrete">
      <span className="font-display text-5xl text-brand-cobalt/20">{number}</span>
      <h2 className="font-display text-4xl md:text-5xl text-brand-black">{title.toUpperCase()}</h2>
    </div>
  )
}

function Callout({ label, children, className = '' }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-brand-graphite border border-brand-concrete p-6 ${className}`}>
      <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-cobalt mb-4 block">{label}</span>
      {children}
    </div>
  )
}

function RuleRow({ icon, tool, role, note }: { icon: string; tool: string; role: string; note: string }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-brand-cobalt/60 mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <span className="font-sans font-semibold text-sm text-brand-black">{tool}</span>
        <span className="font-sans text-sm text-brand-cobalt mx-1.5">=</span>
        <span className="font-sans font-semibold text-sm text-brand-cobalt">{role}.</span>
        <span className="font-sans text-sm text-brand-black/60 ml-1.5">{note}</span>
      </div>
    </div>
  )
}

function SetupList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map(({ label, value }) => (
        <li key={label} className="flex gap-3 font-sans text-sm">
          <span className="text-brand-cobalt flex-shrink-0 w-[140px] font-medium">{label}</span>
          <span className="text-brand-black/70">{value}</span>
        </li>
      ))}
    </ul>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-brand-graphite border border-brand-concrete p-5 font-mono text-xs text-brand-black/70 leading-relaxed overflow-x-auto">
      {children}
    </pre>
  )
}

function BasesView({ name, desc, filter }: { name: string; desc: string; filter: string }) {
  return (
    <div className="border border-brand-concrete p-4">
      <div className="flex items-start justify-between gap-4 mb-2">
        <span className="font-sans font-semibold text-sm text-brand-black">{name}</span>
        <code className="font-mono text-[10px] text-brand-cobalt/70 bg-brand-graphite px-2 py-0.5 flex-shrink-0">{filter}</code>
      </div>
      <p className="font-sans text-sm text-brand-black/60">{desc}</p>
    </div>
  )
}

function DatabaseSchema({ name, rows }: { name: string; rows: [string, string][] }) {
  return (
    <div>
      <h4 className="font-sans font-semibold text-sm text-brand-cobalt tracking-[0.1em] uppercase mb-2">{name}</h4>
      <div className="border border-brand-concrete divide-y divide-brand-concrete/60">
        {rows.map(([prop, type]) => (
          <div key={prop} className="flex gap-0 font-sans text-xs">
            <span className="w-40 px-3 py-2 text-brand-black font-medium flex-shrink-0">{prop}</span>
            <span className="px-3 py-2 text-brand-muted border-l border-brand-concrete/60">{type}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LoopRow({ cadence, label, desc, last = false }: { cadence: string; label: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-36 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/50">
        <span className="font-sans text-[10px] text-brand-muted block leading-snug">{cadence}</span>
        <span className="font-sans font-semibold text-sm text-brand-cobalt mt-0.5 block">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">{desc}</p>
    </div>
  )
}

function FailureMode({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="font-display text-4xl text-brand-cobalt/20 flex-shrink-0 leading-none">{n}</span>
      <div>
        <h4 className="font-sans font-semibold text-sm text-brand-black mb-1">{title}</h4>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
