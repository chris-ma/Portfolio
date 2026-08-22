export default function ArticleEndCTA() {
  return (
    <div className="bg-bk-deep border border-bk-rule p-6 md:p-8 mt-16">
      <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold mb-3">
        Continue the conversation
      </p>
      <p className="font-book font-bold text-2xl md:text-3xl text-bk-parchment leading-tight mb-4">
        If this changed how you think about it — or you think I&apos;m wrong — I want to know.
      </p>
      <p className="font-sans text-sm text-bk-muted leading-relaxed mb-6 max-w-lg">
        Corrections, disagreements, and applications all welcome. Replies go directly to Chris.
      </p>
      <a
        href="/portfolio#contact"
        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 border border-bk-gold text-bk-gold hover:bg-bk-gold hover:text-bk-deep transition-all duration-200"
      >
        Get in touch →
      </a>
    </div>
  )
}
