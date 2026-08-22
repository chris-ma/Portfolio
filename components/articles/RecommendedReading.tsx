interface ReadingItem {
  title: string
  author: string
  type: 'Book' | 'Paper' | 'Article'
  description: string
  href?: string
}

export default function RecommendedReading({ items }: { items: ReadingItem[] }) {
  return (
    <section className="border-t border-bk-rule pt-10">
      <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bk-gold mb-6 block">
        Recommended Reading
      </span>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.title} className="bg-bk-deep border border-bk-rule p-5">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-sans text-[9px] tracking-[0.18em] uppercase text-bk-gold/60 border border-bk-gold/20 px-1.5 py-0.5 flex-shrink-0">
                {item.type}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-book font-bold text-lg text-bk-parchment leading-tight hover:text-bk-gold transition-colors duration-200 group"
                >
                  {item.title}
                  <span className="ml-1.5 font-sans text-[11px] text-bk-gold/40 group-hover:text-bk-gold transition-colors">↗</span>
                </a>
              ) : (
                <span className="font-book font-bold text-lg text-bk-parchment leading-tight">{item.title}</span>
              )}
            </div>
            <p className="font-sans text-xs text-bk-muted mb-2">{item.author}</p>
            <p className="font-sans text-sm text-bk-parchment/70 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
