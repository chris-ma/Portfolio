// SVG mockup illustrations for articles — inline, no external deps

const G = '#1A4D3A'      // forest green
const GL = '#3D7A60'     // lighter green
const BG = '#F5F4F0'     // warm white
const BG2 = '#EDEAE4'    // warm graphite
const BORDER = '#C9C6BE' // concrete
const TEXT = '#0A0A0A'   // near black
const MUTED = '#7A7872'  // muted

export function WisprMockup() {
  return (
    <svg viewBox="0 0 720 320" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="320" fill={BG} />

      {/* Desktop window chrome */}
      <rect x="60" y="30" width="600" height="260" rx="10" fill="#fff" stroke={BORDER} strokeWidth="1" />
      {/* Titlebar */}
      <rect x="60" y="30" width="600" height="36" rx="10" fill={BG2} />
      <rect x="60" y="54" width="600" height="12" fill={BG2} />
      <circle cx="84" cy="48" r="6" fill="#F2956A" />
      <circle cx="104" cy="48" r="6" fill="#F5C842" />
      <circle cx="124" cy="48" r="6" fill="#5CB85C" />
      <text x="360" y="52" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={MUTED}>Untitled Document</text>

      {/* Textarea text lines */}
      <rect x="90" y="90" width="380" height="8" rx="2" fill={BG2} opacity="0.8" />
      <rect x="90" y="108" width="320" height="8" rx="2" fill={BG2} opacity="0.8" />
      <rect x="90" y="126" width="420" height="8" rx="2" fill={BG2} opacity="0.8" />
      <rect x="90" y="144" width="260" height="8" rx="2" fill={BG2} opacity="0.8" />
      <rect x="90" y="162" width="350" height="8" rx="2" fill={BG2} opacity="0.8" />

      {/* Cursor blinking at end of last line */}
      <rect x="448" y="158" width="2" height="16" fill={TEXT} opacity="0.7" />

      {/* Wispr floating capsule */}
      <rect x="220" y="205" width="280" height="68" rx="34" fill={TEXT} />
      {/* Microphone icon */}
      <circle cx="258" cy="239" r="10" stroke={BG} strokeWidth="1.5" fill="none" />
      <rect x="254" y="231" width="8" height="14" rx="4" fill={BG} opacity="0.9" />
      <line x1="258" y1="249" x2="258" y2="256" stroke={BG} strokeWidth="1.5" opacity="0.8" />
      <line x1="252" y1="256" x2="264" y2="256" stroke={BG} strokeWidth="1.5" opacity="0.8" />
      {/* Waveform bars */}
      {[0, 6, 12, 18, 24, 30, 36, 42, 48].map((x, i) => {
        const heights = [8, 18, 24, 16, 28, 20, 14, 22, 10]
        const h = heights[i] || 10
        return (
          <rect
            key={x}
            x={282 + x}
            y={239 - h / 2}
            width="3"
            height={h}
            rx="1.5"
            fill={GL}
            opacity="0.85"
          />
        )
      })}
      {/* Status text */}
      <text x="350" y="261" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} opacity="0.6">listening…</text>
      {/* Close X */}
      <circle cx="472" cy="239" r="14" fill={BG} opacity="0.08" />
      <line x1="466" y1="233" x2="478" y2="245" stroke={BG} strokeWidth="1.5" opacity="0.5" />
      <line x1="478" y1="233" x2="466" y2="245" stroke={BG} strokeWidth="1.5" opacity="0.5" />

      {/* Label */}
      <text x="360" y="298" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={MUTED}>Wispr Flow / fn to activate</text>
    </svg>
  )
}

export function ObsidianMockup() {
  return (
    <svg viewBox="0 0 720 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="400" fill="#1A1A1A" />

      {/* Window chrome */}
      <rect x="0" y="0" width="720" height="32" fill="#252525" />
      <circle cx="20" cy="16" r="5.5" fill="#F2956A" />
      <circle cx="38" cy="16" r="5.5" fill="#F5C842" />
      <circle cx="56" cy="16" r="5.5" fill="#5CB85C" />
      <text x="360" y="20" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#888">Obsidian / pkm-vault</text>

      {/* Left sidebar — file tree */}
      <rect x="0" y="32" width="200" height="368" fill="#1E1E1E" />
      <line x1="200" y1="32" x2="200" y2="400" stroke="#333" strokeWidth="1" />

      {/* Vault name */}
      <text x="14" y="56" fontFamily="monospace" fontSize="10" fill="#888">pkm-vault</text>

      {/* Folder tree rows */}
      {[
        { label: '▸ 00-inbox', indent: 14, active: true },
        { label: '  scratch-2026-08-10.md', indent: 22, file: true },
        { label: '  wispr-obsidian-idea.md', indent: 22, file: true, open: true },
        { label: '▸ 10-projects', indent: 14 },
        { label: '▸ 20-areas', indent: 14 },
        { label: '▸ 30-library', indent: 14 },
        { label: '▸ 40-archive', indent: 14 },
        { label: '▸ _templates', indent: 14 },
      ].map(({ label, indent, active, file, open }, i) => (
        <g key={i}>
          {(active || open) && (
            <rect x="0" y={70 + i * 26} width="200" height="26" fill={open ? `${G}22` : '#2a2a2a'} />
          )}
          <text
            x={indent}
            y={70 + i * 26 + 17}
            fontFamily="monospace"
            fontSize="10"
            fill={open ? GL : file ? '#aaa' : '#ccc'}
          >
            {label}
          </text>
        </g>
      ))}

      {/* Editor area */}
      <rect x="200" y="32" width="520" height="368" fill="#282828" />

      {/* Tab bar */}
      <rect x="200" y="32" width="520" height="30" fill="#232323" />
      <rect x="204" y="32" width="170" height="30" rx="0" fill="#282828" />
      <text x="215" y="51" fontFamily="monospace" fontSize="10" fill="#ccc">wispr-obsidian-idea.md</text>
      <line x1="372" y1="36" x2="372" y2="58" stroke="#444" strokeWidth="1" />

      {/* Frontmatter block */}
      <rect x="220" y="80" width="460" height="120" rx="2" fill="#1E1E1E" />
      {[
        '---',
        'type:    idea',
        'project: pkm-stack',
        'status:  unprocessed',
        'created: 2026-08-10',
        'tags: [wispr, obsidian, notion]',
        '---',
      ].map((line, i) => (
        <text key={i} x="232" y={96 + i * 15} fontFamily="monospace" fontSize="9.5" fill={
          line === '---' ? '#666' :
          line.startsWith('type') ? '#9cdcfe' :
          line.startsWith('project') ? '#9cdcfe' :
          line.startsWith('status') ? '#9cdcfe' :
          line.startsWith('created') ? '#9cdcfe' :
          line.startsWith('tags') ? '#9cdcfe' : '#888'
        }>
          {line.includes(':') ? (
            <>
              <tspan fill="#9cdcfe">{line.split(':')[0]}:</tspan>
              <tspan fill="#ce9178"> {line.split(':').slice(1).join(':')}</tspan>
            </>
          ) : line}
        </text>
      ))}

      {/* Body content */}
      {[
        { text: '# Wispr + Obsidian system idea', color: '#dcdcaa', size: 12 },
        { text: '', color: '#ccc', size: 10 },
        { text: 'Three tools, one rule per tool.', color: '#d4d4d4', size: 10 },
        { text: '', color: '#ccc', size: 10 },
        { text: '- **Wispr** = capture input only', color: '#d4d4d4', size: 10 },
        { text: '- **Obsidian** = thinking + writing', color: '#d4d4d4', size: 10 },
        { text: '- **Notion** = status + dates + relations', color: '#d4d4d4', size: 10 },
      ].map(({ text, color, size }, i) => (
        <text key={i} x="232" y={216 + i * 18} fontFamily="monospace" fontSize={size} fill={color}>
          {text}
        </text>
      ))}

      {/* Cursor */}
      <rect x="232" y="330" width="1.5" height="14" fill="#ddd" opacity="0.7" />
    </svg>
  )
}

export function NotionMockup() {
  const cols = ['Name', 'Status', 'Next Action', 'Target Date', 'Obsidian Link']
  const rows = [
    { name: 'Innovation Atlas', status: 'Active', next: 'Draft Section 3', date: '2026-08-15', link: 'obsidian://...' },
    { name: 'Portfolio Rebuild', status: 'Active', next: 'Push to prod', date: '2026-08-12', link: 'obsidian://...' },
    { name: 'Lambda Infrastructure', status: 'On Hold', next: 'Awaiting AWS quote', date: '—', link: 'obsidian://...' },
    { name: 'Strata Tool v2', status: 'Idea', next: 'Validate with team', date: '—', link: 'obsidian://...' },
  ]

  const statusColors: Record<string, string> = {
    Active: '#3D7A60',
    'On Hold': '#B08040',
    Idea: '#5577AA',
    Done: '#888',
  }

  const ROW_H = 36
  const COL_WIDTHS = [180, 90, 160, 110, 120]
  const startX = 20
  const startY = 100
  const totalW = COL_WIDTHS.reduce((a, b) => a + b, 0)

  return (
    <svg viewBox={`0 0 720 340`} className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="340" fill={BG} />

      {/* Notion-style header */}
      <rect x="0" y="0" width="720" height="50" fill={BG2} />
      <text x="30" y="20" fontFamily="monospace" fontSize="11" fill={MUTED} letterSpacing="2">Projects</text>
      <text x="30" y="38" fontFamily="sans-serif" fontSize="22" fill={TEXT} fontWeight="700">Projects</text>

      {/* Table header */}
      <rect x={startX} y={startY} width={totalW} height={ROW_H} fill={BG2} />
      <line x1={startX} y1={startY} x2={startX + totalW} y2={startY} stroke={BORDER} strokeWidth="1" />

      {/* Column headers */}
      {cols.map((col, ci) => {
        const x = startX + COL_WIDTHS.slice(0, ci).reduce((a, b) => a + b, 0)
        return (
          <g key={col}>
            <text x={x + 12} y={startY + 22} fontFamily="monospace" fontSize="9" fill={MUTED} letterSpacing="1">
              {col.toUpperCase()}
            </text>
            {ci > 0 && (
              <line x1={x} y1={startY} x2={x} y2={startY + ROW_H} stroke={BORDER} strokeWidth="0.5" />
            )}
          </g>
        )
      })}

      {/* Data rows */}
      {rows.map((row, ri) => {
        const y = startY + ROW_H + ri * ROW_H
        return (
          <g key={row.name}>
            <rect x={startX} y={y} width={totalW} height={ROW_H} fill={ri % 2 === 0 ? BG : BG2} />
            <line x1={startX} y1={y} x2={startX + totalW} y2={y} stroke={BORDER} strokeWidth="0.5" />

            {/* Name */}
            <text x={startX + 12} y={y + 22} fontFamily="monospace" fontSize="10" fill={TEXT}>{row.name}</text>

            {/* Status badge */}
            <rect x={startX + COL_WIDTHS[0] + 10} y={y + 9} width={68} height={18} rx="3" fill={`${statusColors[row.status]}22`} />
            <text x={startX + COL_WIDTHS[0] + 14} y={y + 22} fontFamily="monospace" fontSize="9" fill={statusColors[row.status]}>{row.status}</text>
            <line x1={startX + COL_WIDTHS[0]} y1={y} x2={startX + COL_WIDTHS[0]} y2={y + ROW_H} stroke={BORDER} strokeWidth="0.5" />

            {/* Next Action */}
            <text x={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + 12} y={y + 22} fontFamily="monospace" fontSize="9" fill={MUTED}>{row.next}</text>
            <line x1={startX + COL_WIDTHS[0] + COL_WIDTHS[1]} y1={y} x2={startX + COL_WIDTHS[0] + COL_WIDTHS[1]} y2={y + ROW_H} stroke={BORDER} strokeWidth="0.5" />

            {/* Target Date */}
            <text x={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + COL_WIDTHS[2] + 12} y={y + 22} fontFamily="monospace" fontSize="9" fill={MUTED}>{row.date}</text>
            <line x1={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + COL_WIDTHS[2]} y1={y} x2={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + COL_WIDTHS[2]} y2={y + ROW_H} stroke={BORDER} strokeWidth="0.5" />

            {/* Obsidian link */}
            <text x={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + COL_WIDTHS[2] + COL_WIDTHS[3] + 12} y={y + 22} fontFamily="monospace" fontSize="9" fill={GL}>{row.link}</text>
            <line x1={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + COL_WIDTHS[2] + COL_WIDTHS[3]} y1={y} x2={startX + COL_WIDTHS[0] + COL_WIDTHS[1] + COL_WIDTHS[2] + COL_WIDTHS[3]} y2={y + ROW_H} stroke={BORDER} strokeWidth="0.5" />
          </g>
        )
      })}

      {/* Table outer border */}
      <rect x={startX} y={startY} width={totalW} height={ROW_H + rows.length * ROW_H} fill="none" stroke={BORDER} strokeWidth="1" />

      {/* + New row */}
      <text x={startX + 12} y={startY + ROW_H + rows.length * ROW_H + 22} fontFamily="monospace" fontSize="10" fill={MUTED} opacity="0.6">+ New</text>
    </svg>
  )
}

export function FlowDiagram() {
  return (
    <svg viewBox="0 0 720 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG} />

      {/* Grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="720" y2={i * 40} stroke={G} strokeWidth="0.3" opacity="0.08" />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="280" stroke={G} strokeWidth="0.3" opacity="0.08" />
      ))}

      {/* ── WISPR node ── */}
      <rect x="60" y="100" width="150" height="80" rx="4" stroke={G} strokeWidth="1.5" fill={BG2} />
      <rect x="60" y="100" width="150" height="28" rx="4" fill={G} />
      <rect x="60" y="118" width="150" height="10" fill={G} /> {/* square off bottom of header */}
      <text x="135" y="120" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BG} letterSpacing="1">WISPR FLOW</text>
      <text x="135" y="148" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>fn hotkey</text>
      <text x="135" y="163" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>Voice → Text</text>

      {/* ── OBSIDIAN node ── */}
      <rect x="290" y="60" width="160" height="80" rx="4" stroke={G} strokeWidth="1.5" fill={BG2} />
      <rect x="290" y="60" width="160" height="28" rx="4" fill={G} />
      <rect x="290" y="78" width="160" height="10" fill={G} />
      <text x="370" y="80" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BG} letterSpacing="1">OBSIDIAN</text>
      <text x="370" y="108" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>00-inbox/ first</text>
      <text x="370" y="123" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>then process daily</text>

      {/* ── NOTION node ── */}
      <rect x="290" y="160" width="160" height="80" rx="4" stroke={G} strokeWidth="1.5" fill={BG2} />
      <rect x="290" y="160" width="160" height="28" rx="4" fill={G} />
      <rect x="290" y="178" width="160" height="10" fill={G} />
      <text x="370" y="180" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BG} letterSpacing="1">NOTION</text>
      <text x="370" y="208" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>Ideas DB • Projects</text>
      <text x="370" y="223" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>Tasks • Content</text>

      {/* ── Arrows Wispr → Obsidian ── */}
      <defs>
        <marker id="tri" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill={G} opacity="0.6" />
        </marker>
      </defs>
      <path
        d="M210,125 C250,125 260,100 290,100"
        fill="none"
        stroke={G}
        strokeWidth="1.2"
        strokeDasharray="5,3"
        opacity="0.5"
        markerEnd="url(#tri)"
      />
      <text x="246" y="107" fontFamily="monospace" fontSize="8" fill={MUTED} textAnchor="middle">inbox</text>

      {/* Wispr → Notion Ideas */}
      <path
        d="M210,155 C250,155 260,200 290,200"
        fill="none"
        stroke={G}
        strokeWidth="1.2"
        strokeDasharray="5,3"
        opacity="0.5"
        markerEnd="url(#tri)"
      />
      <text x="246" y="188" fontFamily="monospace" fontSize="8" fill={MUTED} textAnchor="middle">ideas</text>

      {/* Obsidian → OUTPUT node */}
      <rect x="530" y="80" width="140" height="60" rx="4" stroke={BORDER} strokeWidth="1" fill={BG2} />
      <text x="600" y="106" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>Specs / Research</text>
      <text x="600" y="121" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>RAG Docs / Logs</text>
      <line x1="450" y1="100" x2="530" y2="110" stroke={G} strokeWidth="1.2" opacity="0.35" markerEnd="url(#tri)" />

      {/* Obsidian link → Notion */}
      <line x1="370" y1="140" x2="370" y2="160" stroke={BORDER} strokeWidth="1" strokeDasharray="3,3" opacity="0.4" markerEnd="url(#tri)" />
      <text x="390" y="152" fontFamily="monospace" fontSize="8" fill={MUTED}>URL only →</text>

      {/* Notion → OUTPUT */}
      <rect x="530" y="170" width="140" height="60" rx="4" stroke={BORDER} strokeWidth="1" fill={BG2} />
      <text x="600" y="196" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>Status / Dates</text>
      <text x="600" y="211" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>Relations / Actions</text>
      <line x1="450" y1="200" x2="530" y2="200" stroke={G} strokeWidth="1.2" opacity="0.35" markerEnd="url(#tri)" />

      {/* NO reverse arrow note */}
      <text x="370" y="258" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        ✕ no two-way sync. Notion links to Obsidian, not reverse.
      </text>
    </svg>
  )
}

// ─── Claude Code vs Codex illustrations ───────────────────────────────────────

export function ContextWindowComparison() {
  // 1M vs 200K — proportional bar comparison
  const totalW = 560
  const claudeW = totalW   // 1M = full width reference
  const codexW = Math.round(totalW * (200 / 1000))  // 200K = 20% of 1M = 112px

  return (
    <svg viewBox="0 0 720 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="220" fill={BG} />

      {/* Title */}
      <text x="80" y="36" fontFamily="monospace" fontSize="10" fill={MUTED} letterSpacing="2">CONTEXT WINDOW</text>

      {/* Claude Code bar */}
      <text x="80" y="70" fontFamily="monospace" fontSize="12" fill={TEXT}>Claude Code</text>
      <rect x="80" y="80" width={claudeW} height="28" rx="2" fill={G} opacity="0.85" />
      <text x={80 + claudeW - 8} y="99" textAnchor="end" fontFamily="monospace" fontSize="10" fill={BG}>1,000,000 tokens</text>

      {/* Codex bar */}
      <text x="80" y="138" fontFamily="monospace" fontSize="12" fill={TEXT}>OpenAI Codex</text>
      <rect x="80" y="148" width={codexW} height="28" rx="2" fill={MUTED} opacity="0.5" />
      <text x={80 + codexW + 8} y="167" fontFamily="monospace" fontSize="10" fill={MUTED}>200,000 tokens</text>

      {/* Annotation line */}
      <line x1={80 + codexW} y1="100" x2={80 + codexW} y2="148" stroke={BORDER} strokeWidth="1" strokeDasharray="3,3" />
      <text x={80 + codexW + 8} y="126" fontFamily="monospace" fontSize="8" fill={MUTED}>5× smaller</text>
    </svg>
  )
}

export function BenchmarkChart() {
  const bars = [
    { label: 'Terminal-Bench 2.0', claude: 69.4, codex: 82.7 },
    { label: 'SWE-bench Verified', claude: 88.6, codex: 88.7 },
    { label: 'Blind code-quality', claude: 67, codex: 25, note: '% preferred in review' },
  ]

  const BAR_H = 18
  const GAP = 6
  const ROW_H = BAR_H * 2 + GAP + 28
  const LABEL_W = 170
  const BAR_MAX = 380
  const startX = 60
  const startY = 50

  return (
    <svg viewBox="0 0 720 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="260" fill={BG} />

      {/* Legend */}
      <rect x={startX} y={18} width={12} height={12} rx="2" fill={G} opacity="0.85" />
      <text x={startX + 18} y={29} fontFamily="monospace" fontSize="10" fill={TEXT}>Claude Code</text>
      <rect x={startX + 110} y={18} width={12} height={12} rx="2" fill={MUTED} opacity="0.55" />
      <text x={startX + 128} y={29} fontFamily="monospace" fontSize="10" fill={MUTED}>OpenAI Codex</text>

      {bars.map((b, i) => {
        const y = startY + i * ROW_H
        const claudePx = (b.claude / 100) * BAR_MAX
        const codexPx  = (b.codex  / 100) * BAR_MAX
        return (
          <g key={b.label}>
            <text x={startX} y={y + 14} fontFamily="monospace" fontSize="9" fill={MUTED} letterSpacing="1">
              {b.label.toUpperCase()}
            </text>
            {b.note && (
              <text x={startX} y={y + 24} fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">{b.note}</text>
            )}

            {/* Claude bar */}
            <rect x={startX + LABEL_W} y={y + 4} width={claudePx} height={BAR_H} rx="2" fill={G} opacity="0.85" />
            <text x={startX + LABEL_W + claudePx + 6} y={y + 16} fontFamily="monospace" fontSize="9" fill={G}>{b.claude}%</text>

            {/* Codex bar */}
            <rect x={startX + LABEL_W} y={y + BAR_H + GAP + 4} width={codexPx} height={BAR_H} rx="2" fill={MUTED} opacity="0.45" />
            <text x={startX + LABEL_W + codexPx + 6} y={y + BAR_H + GAP + 16} fontFamily="monospace" fontSize="9" fill={MUTED}>{b.codex}%</text>
          </g>
        )
      })}
    </svg>
  )
}

export function CostComparison() {
  // $155 vs $15 — same Express.js refactor
  const MAX_H = 140
  const claudeH = MAX_H        // $155 = full height
  const codexH  = Math.round(MAX_H * (15 / 155)) // $15 = ~13.7% of $155

  return (
    <svg viewBox="0 0 720 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="260" fill={BG} />

      <text x="360" y="30" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={MUTED} letterSpacing="2">
        SAME TASK · EXPRESS.JS REFACTOR · ONE DOCUMENTED TEST
      </text>

      {/* Baseline */}
      <line x1="160" y1="210" x2="560" y2="210" stroke={BORDER} strokeWidth="1" />

      {/* Claude bar */}
      <rect x="210" y={210 - claudeH} width="120" height={claudeH} rx="2" fill={G} opacity="0.75" />
      <text x="270" y={210 - claudeH - 10} textAnchor="middle" fontFamily="monospace" fontSize="18" fill={G} fontWeight="700">$155</text>
      <text x="270" y="228" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={TEXT}>Claude Code</text>

      {/* Codex bar */}
      <rect x="390" y={210 - codexH} width="120" height={codexH} rx="2" fill={MUTED} opacity="0.45" />
      <text x="450" y={210 - codexH - 10} textAnchor="middle" fontFamily="monospace" fontSize="18" fill={MUTED} fontWeight="700">$15</text>
      <text x="450" y="228" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={MUTED}>Codex</text>

      {/* 10× annotation */}
      <line x1="330" y1={210 - claudeH + 20} x2="390" y2={210 - claudeH + 20} stroke={BORDER} strokeWidth="1" strokeDasharray="4,3" />
      <text x="360" y={210 - claudeH + 14} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>10× cost delta</text>

      <text x="360" y="252" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        source: documented community benchmark · treat as directional
      </text>
    </svg>
  )
}

export function WorkflowSplit() {
  const cols = [
    {
      tool: 'CLAUDE CODE',
      color: G,
      rows: [
        'Real-time pairing in editor',
        'Iterative back-and-forth',
        'Large, tangled codebases',
        'Already in Claude ecosystem',
        'Quality ceiling &gt; per-task cost',
      ],
    },
    {
      tool: 'CODEX',
      color: MUTED,
      rows: [
        'Async PRs while doing other work',
        'Well-defined, unattended tasks',
        'Tight budget per task',
        'Sandboxed cloud execution',
        'Dependency bumps, type fixes',
      ],
    },
  ]

  return (
    <svg viewBox="0 0 720 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="300" fill={BG} />

      {cols.map((col, ci) => {
        const x = ci === 0 ? 40 : 390
        const w = 290
        return (
          <g key={col.tool}>
            {/* Header */}
            <rect x={x} y={30} width={w} height={36} rx="3" fill={col.color} opacity={ci === 0 ? 0.9 : 0.45} />
            <text x={x + w / 2} y={53} textAnchor="middle" fontFamily="monospace" fontSize="12" fill={ci === 0 ? BG : BG} letterSpacing="2">
              {col.tool}
            </text>

            {/* Rows */}
            {col.rows.map((row, ri) => (
              <g key={ri}>
                <rect x={x} y={74 + ri * 38} width={w} height={32} rx="2" fill={col.color} opacity={0.05 + ri * 0.01} />
                <line x1={x} y1={74 + ri * 38} x2={x + w} y2={74 + ri * 38} stroke={BORDER} strokeWidth="0.5" />
                <text x={x + 14} y={74 + ri * 38 + 20} fontFamily="monospace" fontSize="10" fill={col.color === G ? TEXT : MUTED}>
                  {row}
                </text>
              </g>
            ))}
            <line x1={x} y1={74 + cols[0].rows.length * 38} x2={x + w} y2={74 + cols[0].rows.length * 38} stroke={BORDER} strokeWidth="0.5" />
            <rect x={x} y={30} width={w} height={74 + cols[0].rows.length * 38 - 30} rx="3" fill="none" stroke={col.color} strokeWidth="1.2" opacity={ci === 0 ? 0.5 : 0.3} />
          </g>
        )
      })}

      {/* VS divider */}
      <text x="360" y="165" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={BORDER} letterSpacing="2">VS</text>
      <line x1="355" y1="60" x2="355" y2="270" stroke={BORDER} strokeWidth="0.5" strokeDasharray="4,4" />
    </svg>
  )
}

// ─── AEO / Three-Gate illustrations ──────────────────────────────────────────

export function QueryFanOut() {
  // One messy question → multiple clean search branches
  const queries = [
    'best mattress for back pain and hot sleepers',
    'cooling mattress comparison 2026',
    'mattress for lumbar support reviews',
    'hybrid vs memory foam back support',
  ]
  return (
    <svg viewBox="0 0 720 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="260" fill={BG} />

      {/* Source prompt box */}
      <rect x="40" y="100" width="200" height="60" rx="3" fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x="140" y="122" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED} letterSpacing="1">USER PROMPT</text>
      <text x="140" y="138" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill={TEXT}>
        "best mattress for back
      </text>
      <text x="140" y="151" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill={TEXT}>
        pain and hot sleepers"
      </text>

      {/* Fan-out label */}
      <text x="280" y="128" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">QUERY</text>
      <text x="280" y="140" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">FAN-OUT</text>

      {/* Fan lines */}
      {queries.map((_, i) => {
        const y = 40 + i * 55
        const midY = 130
        return (
          <path
            key={i}
            d={`M240,${midY} C300,${midY} 310,${y + 12} 360,${y + 12}`}
            fill="none"
            stroke={G}
            strokeWidth="1"
            opacity="0.35"
          />
        )
      })}

      {/* Query boxes */}
      {queries.map((q, i) => {
        const y = 30 + i * 55
        return (
          <g key={i}>
            <rect x="360" y={y} width="320" height="28" rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.8" />
            <text x="372" y={y + 18} fontFamily="monospace" fontSize="9" fill={G}>
              {q}
            </text>
          </g>
        )
      })}

      <text x="360" y="252" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        each query returns its own candidate source list; engine decides which to open
      </text>
    </svg>
  )
}

export function ThreeGateDiagram() {
  const gates = [
    {
      n: '01',
      name: 'FETCHABLE',
      q: 'Can the engine reach and ingest the page?',
      checks: ['Indexed?', 'robots.txt clear?', 'No paywall / auth?'],
      symptom: 'Low visibility score',
      color: G,
      opacity: '0.9',
    },
    {
      n: '02',
      name: 'CHOSEN',
      q: 'Does the cover signal the right answer?',
      checks: ['Title utility > brand?', 'Snippet answer-shaped?', 'Format matches intent?'],
      symptom: 'Good score, low rank (9th, 10th)',
      color: G,
      opacity: '0.6',
    },
    {
      n: '03',
      name: 'EXTRACTABLE',
      q: 'Can the engine lift a clean chunk?',
      checks: ['Not buried in accordions?', 'Text-based, not image/video?', 'No JS render-blocking?'],
      symptom: 'Cited but content missing from answer',
      color: G,
      opacity: '0.35',
    },
  ]

  const GATE_W = 200
  const GATE_H = 170
  const GAP = 16
  const startX = 36

  return (
    <svg viewBox="0 0 720 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="260" fill={BG} />

      {/* Flow arrow baseline */}
      <line x1={startX + GATE_W} y1="130" x2={startX + GATE_W + GAP} y2="130" stroke={BORDER} strokeWidth="1" markerEnd="url(#ga)" />
      <line x1={startX + GATE_W * 2 + GAP} y1="130" x2={startX + GATE_W * 2 + GAP * 2} y2="130" stroke={BORDER} strokeWidth="1" markerEnd="url(#ga)" />
      <defs>
        <marker id="ga" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={BORDER} />
        </marker>
      </defs>

      {/* Gate blocks */}
      {gates.map((gate, i) => {
        const x = startX + i * (GATE_W + GAP)
        const y = 44
        return (
          <g key={gate.n}>
            <rect x={x} y={y} width={GATE_W} height={GATE_H} rx="3" fill={BG2} stroke={G} strokeWidth="1.2" opacity={gate.opacity} />

            {/* Header */}
            <rect x={x} y={y} width={GATE_W} height={30} rx="3" fill={G} opacity={gate.opacity} />
            <rect x={x} y={y + 18} width={GATE_W} height={12} fill={G} opacity={gate.opacity} />
            <text x={x + 10} y={y + 12} fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="1">GATE {gate.n}: {gate.name}</text>

            {/* Question */}
            <text x={x + 10} y={y + 48} fontFamily="monospace" fontSize="8.5" fill={TEXT} opacity="0.8">{gate.q.split('?')[0]}</text>
            <text x={x + 10} y={y + 60} fontFamily="monospace" fontSize="8.5" fill={TEXT} opacity="0.8">?</text>

            {/* Checks */}
            {gate.checks.map((c, ci) => (
              <text key={ci} x={x + 14} y={y + 82 + ci * 16} fontFamily="monospace" fontSize="8" fill={MUTED}>
                ✓ {c}
              </text>
            ))}

            {/* Symptom */}
            <rect x={x + 8} y={y + GATE_H - 28} width={GATE_W - 16} height={20} rx="2" fill={G} opacity="0.08" />
            <text x={x + 14} y={y + GATE_H - 14} fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.85">{gate.symptom}</text>
          </g>
        )
      })}

      {/* Citation outcome box */}
      <rect x={startX + GATE_W * 3 + GAP * 3} y="80" width="80" height="60" rx="3" fill={G} opacity="0.15" stroke={G} strokeWidth="1" />
      <text x={startX + GATE_W * 3 + GAP * 3 + 40} y="106" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={G}>CITED</text>
      <text x={startX + GATE_W * 3 + GAP * 3 + 40} y="120" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={G}>IN</text>
      <text x={startX + GATE_W * 3 + GAP * 3 + 40} y="134" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={G}>ANSWER</text>
      <line x1={startX + GATE_W * 3 + GAP * 2} y1="110" x2={startX + GATE_W * 3 + GAP * 3} y2="110" stroke={G} strokeWidth="1.2" markerEnd="url(#ga)" opacity="0.6" />

      <text x="360" y="240" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        failing any gate removes you from consideration. diagnosis tells you which one
      </text>
    </svg>
  )
}

export function SAGELoop() {
  const stages = [
    { label: 'SETUP', sub: 'decide what to track', x: 260, y: 40 },
    { label: 'ANALYSE', sub: 'find where you\'re losing', x: 480, y: 140 },
    { label: 'ENGINEER', sub: 'make wins repeatable', x: 100, y: 140 },
    { label: 'GENERATE', sub: 'turn gaps into shipped work', x: 480, y: 240 },
  ]

  // We'll arrange as a 2×2 grid with arrows between them
  const grid = [
    { label: 'SETUP',    sub: 'Decide what to track',          x: 170, y: 50,  color: G },
    { label: 'ANALYSE',  sub: 'Find where you\'re losing',     x: 430, y: 50,  color: G },
    { label: 'ENGINEER', sub: 'Make wins repeatable',          x: 170, y: 170, color: G },
    { label: 'GENERATE', sub: 'Turn gaps into shipped work',   x: 430, y: 170, color: G },
  ]

  const W = 200
  const H = 80

  return (
    <svg viewBox="0 0 720 310" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="310" fill={BG} />

      <defs>
        <marker id="sa" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill={G} opacity="0.5" />
        </marker>
      </defs>

      {/* Setup → Analyze */}
      <line x1={grid[0].x + W} y1={grid[0].y + H / 2} x2={grid[1].x} y2={grid[1].y + H / 2} stroke={G} strokeWidth="1.2" opacity="0.4" markerEnd="url(#sa)" />
      {/* Analyze → Generate */}
      <line x1={grid[1].x + W / 2} y1={grid[1].y + H} x2={grid[3].x + W / 2} y2={grid[3].y} stroke={G} strokeWidth="1.2" opacity="0.4" markerEnd="url(#sa)" />
      {/* Generate → Engineer */}
      <line x1={grid[3].x} y1={grid[3].y + H / 2} x2={grid[2].x + W} y2={grid[2].y + H / 2} stroke={G} strokeWidth="1.2" opacity="0.4" markerEnd="url(#sa)" />
      {/* Engineer → Setup */}
      <line x1={grid[2].x + W / 2} y1={grid[2].y} x2={grid[0].x + W / 2} y2={grid[0].y + H} stroke={G} strokeWidth="1.2" opacity="0.4" markerEnd="url(#sa)" />

      {/* Stage boxes */}
      {grid.map((s, i) => (
        <g key={s.label}>
          <rect x={s.x} y={s.y} width={W} height={H} rx="3" fill={BG2} stroke={G} strokeWidth="1.2" opacity="0.8" />
          <rect x={s.x} y={s.y} width={W} height={28} rx="3" fill={G} opacity="0.85" />
          <rect x={s.x} y={s.y + 16} width={W} height={12} fill={G} opacity="0.85" />
          <text x={s.x + W / 2} y={s.y + 18} textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BG} letterSpacing="2">{s.label}</text>
          <text x={s.x + W / 2} y={s.y + 56} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>{s.sub}</text>
        </g>
      ))}

      {/* Centre label */}
      <text x="360" y="148" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={MUTED} letterSpacing="2" opacity="0.5">LOOP</text>

      {/* Diagnostic question */}
      <text x="360" y="282" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={G} opacity="0.6" letterSpacing="1">
        "What time is it?" / which stage you're in, right now
      </text>
      <text x="360" y="298" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.5">
        not a checklist you complete once; a cycle you run continuously
      </text>
    </svg>
  )
}

export function ContentShapeComparison() {
  const utilityRows = [
    '▶  What it is + who it\'s for',
    '▶  Comparison: X vs Y vs Z',
    '▶  Answer: cooling AND support',
    '▶  Verdict per use case',
    '▶  Direct recommendation',
  ]
  const productRows = [
    '◦  Brand story / heritage',
    '◦  Feature list',
    '◦  Social proof section',
    '◦  Single-angle positioning',
    '◦  CTA / request demo',
  ]
  const ROW_H = 28
  const W = 270

  return (
    <svg viewBox="0 0 720 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="260" fill={BG} />

      {/* Utility asset column */}
      <rect x="40" y="30" width={W} height={36} rx="3" fill={G} opacity="0.85" />
      <text x={40 + W / 2} y="53" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BG} letterSpacing="2">UTILITY ASSET</text>
      {utilityRows.map((r, i) => (
        <g key={i}>
          <rect x="40" y={66 + i * ROW_H} width={W} height={ROW_H} fill={i % 2 === 0 ? BG2 : BG} />
          <line x1="40" y1={66 + i * ROW_H} x2={40 + W} y2={66 + i * ROW_H} stroke={BORDER} strokeWidth="0.5" />
          <text x="52" y={66 + i * ROW_H + 18} fontFamily="monospace" fontSize="9" fill={G}>{r}</text>
        </g>
      ))}
      <rect x="40" y="66" width={W} height={utilityRows.length * ROW_H} fill="none" stroke={G} strokeWidth="1" opacity="0.4" />
      <text x={40 + W / 2} y={66 + utilityRows.length * ROW_H + 22} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.7">
        resolves the compound job in one place
      </text>

      {/* Product page column */}
      <rect x="410" y="30" width={W} height={36} rx="3" fill={MUTED} opacity="0.45" />
      <text x={410 + W / 2} y="53" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BG} letterSpacing="2">PRODUCT PAGE</text>
      {productRows.map((r, i) => (
        <g key={i}>
          <rect x="410" y={66 + i * ROW_H} width={W} height={ROW_H} fill={i % 2 === 0 ? BG2 : BG} opacity="0.7" />
          <line x1="410" y1={66 + i * ROW_H} x2={410 + W} y2={66 + i * ROW_H} stroke={BORDER} strokeWidth="0.5" />
          <text x="422" y={66 + i * ROW_H + 18} fontFamily="monospace" fontSize="9" fill={MUTED}>{r}</text>
        </g>
      ))}
      <rect x="410" y="66" width={W} height={productRows.length * ROW_H} fill="none" stroke={BORDER} strokeWidth="1" />
      <text x={410 + W / 2} y={66 + productRows.length * ROW_H + 22} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.7">
        single angle. loses compound-job queries
      </text>

      {/* VS */}
      <text x="360" y="148" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={BORDER} letterSpacing="2">VS</text>
    </svg>
  )
}

// ─── RAG illustrations ────────────────────────────────────────────────────────

export function RAGPipeline() {
  const steps = [
    { n: '1', label: 'INGEST', sub: 'collect + clean docs' },
    { n: '2', label: 'CHUNK', sub: 'split into passages' },
    { n: '3', label: 'EMBED', sub: 'convert to vectors' },
    { n: '4', label: 'INDEX', sub: 'store in vector DB' },
    { n: '5', label: 'RETRIEVE', sub: 'top-k by similarity' },
    { n: '6', label: 'RERANK', sub: 'narrow to 3-5 chunks' },
    { n: '7', label: 'GENERATE', sub: 'LLM with context' },
  ]

  const BOX_W = 82
  const BOX_H = 64
  const GAP = 10
  const startX = 18
  const startY = 80

  return (
    <svg viewBox="0 0 720 230" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="230" fill={BG} />
      <defs>
        <marker id="rp" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.45" />
        </marker>
      </defs>

      {steps.map((s, i) => {
        const x = startX + i * (BOX_W + GAP)
        const isKey = i === 4 || i === 5 || i === 6
        return (
          <g key={s.n}>
            <rect x={x} y={startY} width={BOX_W} height={BOX_H} rx="3" fill={BG2} stroke={isKey ? G : BORDER} strokeWidth={isKey ? 1.5 : 1} />
            <rect x={x} y={startY} width={BOX_W} height={24} rx="3" fill={isKey ? G : BORDER} opacity={isKey ? 0.8 : 0.4} />
            <rect x={x} y={startY + 12} width={BOX_W} height={12} fill={isKey ? G : BORDER} opacity={isKey ? 0.8 : 0.4} />
            <text x={x + BOX_W / 2} y={startY + 16} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={BG} letterSpacing="0.5">{s.label}</text>
            <text x={x + BOX_W / 2} y={startY + 40} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>{s.sub.split(' ').slice(0, 2).join(' ')}</text>
            <text x={x + BOX_W / 2} y={startY + 52} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>{s.sub.split(' ').slice(2).join(' ')}</text>
            {i < steps.length - 1 && (
              <line x1={x + BOX_W + 1} y1={startY + BOX_H / 2} x2={x + BOX_W + GAP - 1} y2={startY + BOX_H / 2} stroke={G} strokeWidth="1" opacity="0.35" markerEnd="url(#rp)" />
            )}
            <text x={x + BOX_W / 2} y={startY + BOX_H + 18} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={isKey ? G : MUTED} opacity={isKey ? 0.7 : 0.5}>{s.n}</text>
          </g>
        )
      })}

      <text x="362" y="198" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} letterSpacing="1" opacity="0.6">QUERY TIME ——————</text>
      <line x1="480" y1={startY - 10} x2="480" y2={startY + BOX_H + 4} stroke={G} strokeWidth="0.8" strokeDasharray="3,3" opacity="0.3" />
      <text x="520" y={startY - 14} fontFamily="monospace" fontSize="8" fill={G} opacity="0.5">query-time pipeline</text>
      <text x="200" y={startY - 14} fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.5">ingestion pipeline (run once / on update)</text>
    </svg>
  )
}

export function HybridRetrievalDiagram() {
  return (
    <svg viewBox="0 0 720 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="240" fill={BG} />
      <defs>
        <marker id="hr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.5" />
        </marker>
      </defs>

      {/* Query box */}
      <rect x="40" y="90" width="130" height="52" rx="3" fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x="105" y="112" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={TEXT}>USER QUERY</text>
      <text x="105" y="128" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>"hybrid mattress for</text>

      {/* Dense vector branch */}
      <path d="M170,105 C220,105 230,75 260,75" fill="none" stroke={G} strokeWidth="1.2" opacity="0.5" markerEnd="url(#hr)" />
      <rect x="260" y="50" width="160" height="52" rx="3" fill={BG2} stroke={G} strokeWidth="1.2" opacity="0.7" />
      <rect x="260" y="50" width="160" height="22" rx="3" fill={G} opacity="0.7" />
      <rect x="260" y="60" width="160" height="12" fill={G} opacity="0.7" />
      <text x="340" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="1">DENSE VECTOR</text>
      <text x="340" y="86" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>semantic similarity</text>
      <text x="340" y="98" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>finds conceptually related</text>

      {/* Sparse keyword branch */}
      <path d="M170,127 C220,127 230,157 260,157" fill="none" stroke={MUTED} strokeWidth="1.2" opacity="0.5" markerEnd="url(#hr)" />
      <rect x="260" y="132" width="160" height="52" rx="3" fill={BG2} stroke={MUTED} strokeWidth="1.2" opacity="0.5" />
      <rect x="260" y="132" width="160" height="22" rx="3" fill={MUTED} opacity="0.45" />
      <rect x="260" y="144" width="160" height="10" fill={MUTED} opacity="0.45" />
      <text x="340" y="147" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="1">SPARSE (BM25)</text>
      <text x="340" y="168" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>keyword matching</text>
      <text x="340" y="180" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>catches names, codes, terms</text>

      {/* Merge */}
      <path d="M420,76 C470,76 480,100 510,110" fill="none" stroke={G} strokeWidth="1" opacity="0.4" markerEnd="url(#hr)" />
      <path d="M420,158 C470,158 480,130 510,120" fill="none" stroke={MUTED} strokeWidth="1" opacity="0.4" markerEnd="url(#hr)" />
      <rect x="510" y="86" width="130" height="52" rx="3" fill={BG2} stroke={G} strokeWidth="1.5" />
      <rect x="510" y="86" width="130" height="22" rx="3" fill={G} opacity="0.85" />
      <rect x="510" y="96" width="130" height="12" fill={G} opacity="0.85" />
      <text x="575" y="101" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="1">MERGED + RERANKED</text>
      <text x="575" y="120" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>top 20 → rerank → 3–5</text>
      <text x="575" y="132" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G}>sent to LLM</text>

      <text x="360" y="210" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        hybrid outperforms either alone. default in production systems (2026)
      </text>
    </svg>
  )
}

export function ChunkingComparison() {
  return (
    <svg viewBox="0 0 720 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="240" fill={BG} />

      {/* Fixed-size label */}
      <text x="80" y="30" fontFamily="monospace" fontSize="10" fill={MUTED} letterSpacing="2">FIXED-SIZE CHUNKING</text>
      <text x="80" y="44" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">split every N characters</text>

      {/* Fixed chunk blocks — all equal width, arbitrary breaks */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={80 + i * 88} y={54} width={82} height={44} rx="2" fill={i % 2 === 0 ? BG2 : '#E8E5DF'} stroke={BORDER} strokeWidth="1" />
      ))}
      {/* Break marker mid-sentence */}
      <line x1={80 + 2 * 88 - 4} y1={50} x2={80 + 2 * 88 - 4} y2={102} stroke="#C05000" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.6" />
      <text x={80 + 2 * 88 - 4} y={46} textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#C05000" opacity="0.7">context lost</text>

      {/* Semantic label */}
      <text x="80" y="136" fontFamily="monospace" fontSize="10" fill={G} letterSpacing="2">SEMANTIC CHUNKING</text>
      <text x="80" y="150" fontFamily="monospace" fontSize="8" fill={G} opacity="0.6">split where meaning shifts</text>

      {/* Semantic chunk blocks — variable width, natural breaks */}
      {[
        { w: 140 }, { w: 100 }, { w: 160 }, { w: 120 }, { w: 110 },
      ].reduce((acc, b, i) => {
        const prevX = acc.length > 0 ? acc[acc.length - 1].x + acc[acc.length - 1].w + 6 : 80
        acc.push({ ...b, x: prevX })
        return acc
      }, [] as { w: number; x: number }[]).map(({ w, x }, i) => (
        <rect key={i} x={x} y={160} width={w} height={44} rx="2" fill={BG2} stroke={G} strokeWidth={1.2} opacity={0.6 + i * 0.05} />
      ))}

      <text x="360" y="220" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        semantic chunking: embed sentence-by-sentence, break when similarity drops. better signal for retrieval
      </text>
    </svg>
  )
}

export function AdaptiveRAGDiagram() {
  const paths = [
    { label: 'Simple factual Q', target: 'VECTOR RAG', note: 'fast, cheap', color: GL },
    { label: 'Multi-step reasoning', target: 'AGENTIC RAG', note: 'iterative retrieval loops', color: G },
    { label: '"How do X+Y relate"', target: 'GRAPH RAG', note: 'graph traversal', color: MUTED },
  ]

  return (
    <svg viewBox="0 0 720 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="240" fill={BG} />
      <defs>
        <marker id="ar" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.4" />
        </marker>
      </defs>

      {/* Classifier box */}
      <rect x="40" y="90" width="160" height="56" rx="3" fill={BG2} stroke={G} strokeWidth="1.5" />
      <rect x="40" y="90" width="160" height="24" rx="3" fill={G} opacity="0.8" />
      <rect x="40" y="102" width="160" height="12" fill={G} opacity="0.8" />
      <text x="120" y="106" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="1">QUERY CLASSIFIER</text>
      <text x="120" y="124" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>routes to cheapest pipeline</text>
      <text x="120" y="136" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>that can handle the query</text>

      {/* Routes */}
      {paths.map((p, i) => {
        const y = 60 + i * 60
        return (
          <g key={p.label}>
            <path d={`M200,118 C270,118 280,${y + 22} 330,${y + 22}`} fill="none" stroke={p.color} strokeWidth="1.2" opacity="0.5" markerEnd="url(#ar)" />
            <rect x="330" y={y} width="190" height="44" rx="3" fill={BG2} stroke={p.color} strokeWidth="1.2" opacity="0.7" />
            <text x="340" y={y + 18} fontFamily="monospace" fontSize="10" fill={p.color} fontWeight="600">{p.target}</text>
            <text x="340" y={y + 32} fontFamily="monospace" fontSize="8" fill={MUTED}>{p.note}</text>
          </g>
        )
      })}

      <text x="360" y="218" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">
        adaptive RAG: emerging 2026 default; most queries are simple, route them cheap
      </text>
    </svg>
  )
}

// ─── Agentic AI article mockups ───────────────────────────────────────────────

export function WorkflowSpectrum() {
  const patterns = [
    { label: 'CHAIN', sub: 'fixed sequence', h: 60, op: 0.25 },
    { label: 'ROUTE', sub: 'classify → branch', h: 72, op: 0.32 },
    { label: 'PARALLEL', sub: 'concurrent calls', h: 86, op: 0.42 },
    { label: 'ORCHESTRATE', sub: 'dynamic subtasks', h: 104, op: 0.58 },
    { label: 'EVALUATE', sub: 'generate → judge → loop', h: 120, op: 0.75 },
  ]
  const W = 92
  const GAP = 18
  const baseX = 44
  const baseY = 220
  return (
    <svg viewBox="0 0 600 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="300" fill={BG} />
      {/* Baseline */}
      <line x1="30" y1={baseY} x2="570" y2={baseY} stroke={G} strokeWidth="0.6" opacity="0.15" />
      {/* Complexity arrow */}
      <line x1="30" y1="258" x2="550" y2="258" stroke={G} strokeWidth="0.8" opacity="0.2" markerEnd="url(#cx)" />
      <text x="300" y="274" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.35" letterSpacing="1">INCREASING COMPLEXITY →</text>
      <defs>
        <marker id="cx" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={G} opacity="0.3" />
        </marker>
      </defs>
      {patterns.map((p, i) => {
        const x = baseX + i * (W + GAP)
        const y = baseY - p.h
        return (
          <g key={p.label}>
            <rect x={x} y={y} width={W} height={p.h} rx="2" fill={G} opacity={p.op} />
            <text x={x + W / 2} y={y - 10} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.5" letterSpacing="0.5">{`0${i + 1}`}</text>
            <text x={x + W / 2} y={y + p.h / 2 + 4} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={i >= 3 ? BG : G} opacity={i >= 3 ? 0.9 : 0.7}>{p.label}</text>
            <text x={x + W / 2} y={baseY + 14} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={G} opacity="0.4">{p.sub}</text>
          </g>
        )
      })}
      <text x="300" y="24" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.3" letterSpacing="1">FIVE WORKFLOW PATTERNS — USE THESE BEFORE REACHING FOR FULL AUTONOMY</text>
    </svg>
  )
}

export function ReActLoop() {
  const r = 100
  const cx = 300
  const cy = 148
  const nodes = [
    { label: 'REASON', sub: 'what do I know,\nwhat do I need', angle: -90, fill: G, textFill: BG },
    { label: 'ACT', sub: 'call tool\nor terminate', angle: 30, fill: G, textFill: BG },
    { label: 'OBSERVE', sub: 'what came back\nfrom environment', angle: 150, fill: BG2, textFill: G },
  ]
  const toXY = (angle: number, radius: number) => ({
    x: cx + radius * Math.cos((angle * Math.PI) / 180),
    y: cy + radius * Math.sin((angle * Math.PI) / 180),
  })
  const NR = 40
  const nodePositions = nodes.map((n) => toXY(n.angle, r))
  return (
    <svg viewBox="0 0 600 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="300" fill={BG} />
      <defs>
        <marker id="rl" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.5" />
        </marker>
      </defs>
      {/* Guide circle */}
      <circle cx={cx} cy={cy} r={r} stroke={G} strokeWidth="0.5" fill="none" opacity="0.1" strokeDasharray="4 4" />
      {/* Arrows between nodes */}
      {nodes.map((_, i) => {
        const from = nodePositions[i]
        const to = nodePositions[(i + 1) % 3]
        const dx = to.x - from.x
        const dy = to.y - from.y
        const len = Math.sqrt(dx * dx + dy * dy)
        const ux = dx / len
        const uy = dy / len
        const sx = from.x + ux * (NR + 2)
        const sy = from.y + uy * (NR + 2)
        const ex = to.x - ux * (NR + 8)
        const ey = to.y - uy * (NR + 8)
        const mx = (sx + ex) / 2 + uy * 18
        const my = (sy + ey) / 2 - ux * 18
        return (
          <path key={i} d={`M${sx},${sy} Q${mx},${my} ${ex},${ey}`} fill="none" stroke={G} strokeWidth="1.2" opacity="0.4" markerEnd="url(#rl)" />
        )
      })}
      {/* Node circles */}
      {nodes.map((n, i) => {
        const pos = nodePositions[i]
        return (
          <g key={n.label}>
            <circle cx={pos.x} cy={pos.y} r={NR} fill={n.fill} opacity={n.fill === G ? 0.75 : 0.5} stroke={G} strokeWidth="1" />
            <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={n.textFill} opacity="0.95">{n.label}</text>
          </g>
        )
      })}
      {/* Center */}
      <circle cx={cx} cy={cy} r="22" fill="none" stroke={G} strokeWidth="0.6" opacity="0.2" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.45">LOOP</text>
      {/* Side annotation */}
      <text x="530" y="100" textAnchor="start" fontFamily="monospace" fontSize="7" fill={G} opacity="0.35">recalibrates</text>
      <text x="530" y="112" textAnchor="start" fontFamily="monospace" fontSize="7" fill={G} opacity="0.35">at every step</text>
      <text x="300" y="278" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.3" letterSpacing="1">ReAct LOOP · REASON → ACT → OBSERVE → REPEAT</text>
    </svg>
  )
}

export function PlanExecuteDiagram() {
  const steps = [
    { id: 'step_1', action: 'search_web', note: '"target topic"', dep: null },
    { id: 'step_2', action: 'summarize', note: 'input: step_1.result', dep: null },
    { id: 'step_3', action: 'write_outline', note: 'depends_on: step_2', dep: 'step_2' },
    { id: 'step_4', action: 'write_output', note: 'context: step_3.outline', dep: 'step_3' },
  ]
  const SW = 200
  const SH = 44
  const SGY = 30
  const sx = 340
  const sy = 38
  return (
    <svg viewBox="0 0 600 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="280" fill={BG} />
      <defs>
        <marker id="pe" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.5" />
        </marker>
        <marker id="dep" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={MUTED} opacity="0.5" />
        </marker>
      </defs>
      {/* Planner box */}
      <rect x="44" y="68" width="160" height="130" rx="4" fill={G} opacity="0.08" stroke={G} strokeWidth="1" />
      <text x="124" y="96" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.7">PLANNER</text>
      <text x="124" y="112" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.4">(stronger model)</text>
      {/* Inner LLM icon — simple */}
      {[0,1,2].map(i => (
        <rect key={i} x="72" y={130 + i * 14} width="104" height="8" rx="2" fill={G} opacity="0.12 " />
      ))}
      <text x="124" y="184" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.3">writes plan</text>
      {/* Arrow planner → steps */}
      <line x1="204" y1="133" x2="330" y2="133" stroke={G} strokeWidth="1.2" opacity="0.4" markerEnd="url(#pe)" />
      <text x="267" y="125" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.35">plan</text>
      {/* Steps */}
      {steps.map((s, i) => {
        const y = sy + i * (SH + SGY)
        const midY = y + SH / 2
        return (
          <g key={s.id}>
            <rect x={sx} y={y} width={SW} height={SH} rx="3" fill={BG2} stroke={G} strokeWidth="0.8" opacity="0.7" />
            <text x={sx + 10} y={y + 17} fontFamily="monospace" fontSize="8" fill={G} opacity="0.5">{s.id}</text>
            <text x={sx + 10} y={y + 30} fontFamily="monospace" fontSize="9" fontWeight="600" fill={G} opacity="0.8">{s.action}</text>
            <text x={sx + SW - 10} y={y + 17} textAnchor="end" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.7">{s.note}</text>
            {s.dep && (
              <line x1={sx - 12} y1={midY - SH - SGY / 2} x2={sx - 12} y2={midY} stroke={MUTED} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" markerEnd="url(#dep)" />
            )}
          </g>
        )
      })}
      {/* Executor label */}
      <text x={sx + SW / 2} y="248" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.3" letterSpacing="1">EXECUTOR · cheaper model · runs each step in sequence</text>
      <text x="300" y="270" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">PLAN-AND-EXECUTE · commits to strategy before first irreversible action</text>
    </svg>
  )
}

export function AgentFailureModeDiagram() {
  const failures = [
    { n: '01', label: 'LOOP-STUCK', line1: 'ReAct cycles without progress:', line2: 'no exit condition, no step ceiling', x: 44, y: 44 },
    { n: '02', label: 'ERROR COMPOUND', line1: 'Each autonomous step drifts further:', line2: 'errors stack across the loop', x: 316, y: 44 },
    { n: '03', label: 'CIRCULAR EVAL', line1: "Evaluator can't reliably score quality:", line2: 'iterates without improving', x: 44, y: 168 },
    { n: '04', label: 'OVER-ENGINEER', line1: 'Multi-agent orchestration on a task', line2: 'a simple workflow would handle', x: 316, y: 168 },
  ]
  return (
    <svg viewBox="0 0 600 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="300" fill={BG} />
      {/* Cross divider */}
      <line x1="300" y1="30" x2="300" y2="270" stroke={G} strokeWidth="0.4" opacity="0.12" />
      <line x1="30" y1="155" x2="570" y2="155" stroke={G} strokeWidth="0.4" opacity="0.12" />
      {failures.map((f) => (
        <g key={f.n}>
          <rect x={f.x} y={f.y} width="240" height="100" rx="3" fill={G} opacity="0.05" stroke={G} strokeWidth="0.8" />
          <text x={f.x + 14} y={f.y + 26} fontFamily="monospace" fontSize="20" fontWeight="700" fill={G} opacity="0.12">{f.n}</text>
          <text x={f.x + 14} y={f.y + 50} fontFamily="monospace" fontSize="8.5" fontWeight="600" fill={G} opacity="0.65" letterSpacing="0.5">{f.label}</text>
          <text x={f.x + 14} y={f.y + 68} fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.75">{f.line1}</text>
          <text x={f.x + 14} y={f.y + 82} fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.75">{f.line2}</text>
        </g>
      ))}
      <text x="300" y="288" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.3" letterSpacing="1">FOUR FAILURE MODES · DESIGN AGAINST ALL OF THEM BEFORE YOU BUILD</text>
    </svg>
  )
}

// ─── AI Creative Tools article mockups ────────────────────────────────────────

export function MidjourneyParams() {
  const params = [
    { flag: '--ar', name: 'Aspect Ratio', example: '16:9  ·  2:3  ·  1:1' },
    { flag: '--s', name: 'Stylise', example: '0–1000: low=literal, high=MJ aesthetic' },
    { flag: '--chaos', name: 'Variation', example: '0–100: higher = more unpredictable batch' },
    { flag: '--raw', name: 'Raw mode', example: 'Literal, photoreal; cuts aesthetic bias' },
    { flag: '--sref', name: 'Style Reference', example: 'Image URL or style code + --sw weight' },
    { flag: '--seed', name: 'Seed', example: 'Same seed + prompt → reproducible output' },
  ]
  const ROW_H = 38
  const startY = 50
  return (
    <svg viewBox="0 0 720 310" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="310" fill={BG} />
      {/* Header */}
      <rect x="40" y={startY} width="640" height="26" fill={G} opacity="0.08" />
      <text x="54" y={startY + 17} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.5" letterSpacing="1">FLAG</text>
      <text x="170" y={startY + 17} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.5" letterSpacing="1">PARAMETER</text>
      <text x="370" y={startY + 17} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.5" letterSpacing="1">NOTES</text>
      {/* Rows */}
      {params.map((p, i) => {
        const y = startY + 26 + i * ROW_H
        const isEven = i % 2 === 0
        return (
          <g key={p.flag}>
            {isEven && <rect x="40" y={y} width="640" height={ROW_H} fill={G} opacity="0.03" />}
            <line x1="40" y1={y} x2="680" y2={y} stroke={G} strokeWidth="0.3" opacity="0.12" />
            <text x="54" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="9.5" fontWeight="600" fill={G} opacity="0.75">{p.flag}</text>
            <text x="170" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="9" fill={TEXT} opacity="0.7">{p.name}</text>
            <text x="370" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.8">{p.example}</text>
          </g>
        )
      })}
      <line x1="40" y1={startY + 26 + params.length * ROW_H} x2="680" y2={startY + 26 + params.length * ROW_H} stroke={G} strokeWidth="0.3" opacity="0.12" />
      <text x="360" y="292" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">MIDJOURNEY V8.2 · CONFIRM CURRENT SYNTAX AT DOCS.MIDJOURNEY.COM</text>
    </svg>
  )
}

export function CameraMovesGrid() {
  const groups = [
    { label: 'PUSH / PULL', moves: ['Dolly In', 'Dolly Out', 'Dolly Zoom', 'Super Dolly'] },
    { label: 'ZOOM', moves: ['Crash Zoom In', 'Crash Zoom Out', 'Rapid Zoom', 'YoYo Zoom'] },
    { label: 'ORBIT', moves: ['360 Orbit', 'Arc Left', 'Bullet Time', 'Lazy Susan'] },
    { label: 'CRANE', moves: ['Crane Up', 'Crane Down', 'Jib Up', 'Aerial Pullback'] },
    { label: 'PAN / TILT', moves: ['Pan Left', 'Pan Right', 'Tilt Up', 'Whip Pan'] },
    { label: 'HANDHELD', moves: ['Handheld', 'FPV Drone', 'Snorricam', 'Road Rush'] },
  ]
  const COLS = 3
  const cellW = 210
  const cellH = 90
  const padX = 30
  const padY = 30
  return (
    <svg viewBox="0 0 690 330" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="690" height="330" fill={BG} />
      {groups.map((g, i) => {
        const col = i % COLS
        const row = Math.floor(i / COLS)
        const x = padX + col * (cellW + 15)
        const y = padY + row * (cellH + 12)
        return (
          <g key={g.label}>
            <rect x={x} y={y} width={cellW} height={cellH} rx="2" fill={G} opacity={0.05 + row * 0.02} stroke={G} strokeWidth="0.6" />
            <text x={x + 12} y={y + 18} fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} opacity="0.6" letterSpacing="1">{g.label}</text>
            {g.moves.map((m, mi) => (
              <text key={m} x={x + 12} y={y + 32 + mi * 14} fontFamily="monospace" fontSize="8.5" fill={G} opacity="0.5">{m}</text>
            ))}
          </g>
        )
      })}
      <text x="345" y="314" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">HIGGSFIELD CINEMA STUDIO · 70+ NAMED PRESETS · ONE CLICK EACH</text>
    </svg>
  )
}

export function PromptFormulaDiagram() {
  const blocks = [
    { label: 'SUBJECT', eg: 'a woman in her 30s', color: G, op: 0.75 },
    { label: 'ACTION', eg: 'standing still,\ncontemplative', color: G, op: 0.60 },
    { label: 'ENVIRONMENT', eg: 'fog-filled\nwarehouse', color: G, op: 0.50 },
    { label: 'LIGHTING', eg: 'god rays,\nRembrandt', color: G, op: 0.42 },
    { label: 'LENS', eg: '35mm,\nshallow DOF', color: G, op: 0.35 },
    { label: 'STYLE', eg: 'teal-orange grade,\nanamorphic', color: G, op: 0.28 },
    { label: 'PARAMS', eg: '--ar 16:9\n--raw --s 150', color: G, op: 0.22 },
  ]
  const BW = 74
  const BH = 110
  const GAP = 8
  const startX = 26
  const startY = 80
  return (
    <svg viewBox="0 0 620 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="620" height="280" fill={BG} />
      <text x="310" y="40" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.3" letterSpacing="1">UNIVERSAL PROMPT FORMULA · WORKS ACROSS MIDJOURNEY AND HIGGSFIELD</text>
      {blocks.map((b, i) => {
        const x = startX + i * (BW + GAP)
        return (
          <g key={b.label}>
            <rect x={x} y={startY} width={BW} height={BH} rx="2" fill={b.color} opacity={b.op} />
            <text x={x + BW / 2} y={startY + 16} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fontWeight="700" fill={BG} opacity="0.9" letterSpacing="0.5">{b.label}</text>
            {b.eg.split('\n').map((line, li) => (
              <text key={li} x={x + BW / 2} y={startY + 34 + li * 13} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={BG} opacity="0.8">{line}</text>
            ))}
            {i < blocks.length - 1 && (
              <text x={x + BW + GAP / 2} y={startY + BH / 2 + 4} textAnchor="middle" fontFamily="monospace" fontSize="10" fill={G} opacity="0.3">+</text>
            )}
          </g>
        )
      })}
      <text x="310" y="220" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.3">concrete beats vague · one dominant lighting cue · app controls belong in the interface</text>
    </svg>
  )
}

export function ToolComparisonSplit() {
  return (
    <svg viewBox="0 0 720 320" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="320" fill={BG} />
      {/* Divider */}
      <line x1="360" y1="30" x2="360" y2="290" stroke={G} strokeWidth="0.6" opacity="0.2" />
      {/* Midjourney side */}
      <text x="180" y="56" textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1">MIDJOURNEY</text>
      <text x="180" y="72" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.8">Image-first generator</text>
      {/* MJ icon — aperture-style rings */}
      <circle cx="180" cy="134" r="40" stroke={G} strokeWidth="1.2" fill="none" opacity="0.25" />
      <circle cx="180" cy="134" r="28" stroke={G} strokeWidth="1" fill={G} opacity="0.08" />
      <circle cx="180" cy="134" r="10" fill={G} opacity="0.25" />
      {/* MJ strengths */}
      {['Stylized art direction', 'Cinematic stills', 'Composition + lighting', 'Concept & editorial art', 'Style reference system'].map((s, i) => (
        <g key={s}>
          <circle cx="60" cy={192 + i * 18} r="2" fill={G} opacity="0.4" />
          <text x="70" y={196 + i * 18} fontFamily="monospace" fontSize="8.5" fill={G} opacity="0.55">{s}</text>
        </g>
      ))}
      {/* Higgsfield side */}
      <text x="540" y="56" textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1">HIGGSFIELD</text>
      <text x="540" y="72" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.8">Director's console over 30+ models</text>
      {/* HF icon — camera move path */}
      <path d="M420,114 C450,94 510,94 540,114 C570,134 570,154 540,174 C510,194 450,194 420,174" stroke={G} strokeWidth="1.5" fill="none" opacity="0.25" />
      <circle cx="540" cy="114" r="6" fill={G} opacity="0.35" />
      <text x="540" y="140" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.4">DOLLY IN</text>
      {/* HF strengths */}
      {['Deterministic camera presets', 'Soul ID (persistent character)', 'Model routing (Kling/Veo/Sora)', 'Motion-reference transfer', 'Lipsync + voice binding'].map((s, i) => (
        <g key={s}>
          <circle cx="400" cy={192 + i * 18} r="2" fill={G} opacity="0.4" />
          <text x="410" y={196 + i * 18} fontFamily="monospace" fontSize="8.5" fill={G} opacity="0.55">{s}</text>
        </g>
      ))}
      {/* Bottom note */}
      <text x="360" y="302" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">NOT SUBSTITUTES · MIDJOURNEY MAKES THE STILL · HIGGSFIELD MOVES THE CAMERA</text>
    </svg>
  )
}

// ─── Tokenmaxxing article mockups ─────────────────────────────────────────────

export function TokenLeaderboard() {
  const rows = [
    { rank: '01', name: 'jkrueger', tokens: '281B', badge: 'Cache Wizard', cost: '$4,200/mo' },
    { rank: '02', name: 'priya_s', tokens: '194B', badge: 'Model Connoisseur', cost: '$2,900/mo' },
    { rank: '03', name: 'dan.t', tokens: '147B', badge: 'Context Champion', cost: '$2,200/mo' },
    { rank: '04', name: 'emilyq', tokens: '98B', badge: 'Prompt Architect', cost: '$1,470/mo' },
    { rank: '05', name: 'r.okonkwo', tokens: '61B', badge: 'Token Enthusiast', cost: '$915/mo' },
  ]
  const ROW_H = 38
  const startY = 72
  return (
    <svg viewBox="0 0 720 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="300" fill={BG} />
      {/* Header bar */}
      <rect x="40" y="30" width="640" height="32" fill={G} opacity="0.07" />
      <text x="56" y="50" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.4" letterSpacing="1">CLAUDEONOMICS — WEEKLY TOKEN LEADERBOARD</text>
      <text x="664" y="50" textAnchor="end" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.5">taken down 48 hrs later</text>
      {/* Column headers */}
      <text x="56" y={startY - 8} fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} opacity="0.35" letterSpacing="1">#</text>
      <text x="90" y={startY - 8} fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} opacity="0.35" letterSpacing="1">USER</text>
      <text x="260" y={startY - 8} fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} opacity="0.35" letterSpacing="1">TOKENS</text>
      <text x="370" y={startY - 8} fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} opacity="0.35" letterSpacing="1">BADGE</text>
      <text x="580" y={startY - 8} textAnchor="end" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} opacity="0.35" letterSpacing="1">EST. COST</text>
      <line x1="40" y1={startY - 4} x2="680" y2={startY - 4} stroke={G} strokeWidth="0.4" opacity="0.15" />
      {rows.map((r, i) => {
        const y = startY + i * ROW_H
        const isTop = i === 0
        return (
          <g key={r.rank}>
            {isTop && <rect x="40" y={y} width="640" height={ROW_H} fill={G} opacity="0.05" />}
            <line x1="40" y1={y} x2="680" y2={y} stroke={G} strokeWidth="0.3" opacity="0.1" />
            <text x="56" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="9" fill={G} opacity={isTop ? 0.7 : 0.35}>{r.rank}</text>
            <text x="90" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="9.5" fill={TEXT} opacity={isTop ? 0.8 : 0.55}>{r.name}</text>
            <text x="260" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="10" fontWeight="700" fill={G} opacity={isTop ? 0.85 : 0.5}>{r.tokens}</text>
            <rect x="366" y={y + 10} width="160" height="18" rx="2" fill={G} opacity={isTop ? 0.15 : 0.07} />
            <text x="374" y={y + ROW_H / 2 + 3} fontFamily="monospace" fontSize="8" fill={G} opacity={isTop ? 0.8 : 0.5}>{r.badge}</text>
            <text x="580" y={y + ROW_H / 2 + 4} textAnchor="end" fontFamily="monospace" fontSize="9" fill={MUTED} opacity={isTop ? 0.7 : 0.45}>{r.cost}</text>
          </g>
        )
      })}
      <line x1="40" y1={startY + rows.length * ROW_H} x2="680" y2={startY + rows.length * ROW_H} stroke={G} strokeWidth="0.3" opacity="0.1" />
      <text x="360" y="284" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">TOKEN VOLUME DOES NOT DISTINGUISH WORK FROM NOISE</text>
    </svg>
  )
}

export function VanityVsValue() {
  const vanity = ['Total tokens used', 'Daily active sessions', 'Model tier selected', 'Prompts sent', 'Background tasks run']
  const value = ['Tasks completed & shipped', 'Iterations to acceptable output', 'Cost per shipped task', 'Skill delta month-over-month', 'Spend matched to task complexity']
  const ROW_H = 34
  const startY = 80
  return (
    <svg viewBox="0 0 720 320" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="320" fill={BG} />
      {/* Divider */}
      <line x1="360" y1="20" x2="360" y2="300" stroke={G} strokeWidth="0.4" opacity="0.15" />
      {/* Headers */}
      <rect x="40" y="30" width="300" height="26" fill={MUTED} opacity="0.08" />
      <rect x="380" y="30" width="300" height="26" fill={G} opacity="0.08" />
      <text x="190" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={MUTED} opacity="0.45" letterSpacing="1">VANITY METRICS</text>
      <text x="530" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1">VALUE METRICS</text>
      {/* Rows */}
      {vanity.map((v, i) => {
        const y = startY + i * ROW_H
        return (
          <g key={v}>
            <line x1="40" y1={y} x2="340" y2={y} stroke={MUTED} strokeWidth="0.3" opacity="0.15" />
            <line x1="380" y1={y} x2="680" y2={y} stroke={G} strokeWidth="0.3" opacity="0.12" />
            <text x="56" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="9" fill={MUTED} opacity="0.5">{v}</text>
            <text x="396" y={y + ROW_H / 2 + 4} fontFamily="monospace" fontSize="9" fill={G} opacity="0.72">{value[i]}</text>
          </g>
        )
      })}
      {/* Bottom label */}
      <text x="190" y="288" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.35">activity</text>
      <text x="530" y="288" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.4">outcome</text>
      <text x="360" y="308" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.2" letterSpacing="1">MEASURE WHAT MOVES THE WORK FORWARD, NOT WHAT MOVES THE METER</text>
    </svg>
  )
}

export function CostPerTaskChart() {
  const W = 680
  const H = 200
  const padX = 40
  const padY = 30
  const chartW = W - padX * 2
  const chartH = H - padY * 2
  const baseline = padY + chartH
  // Training phase = left 55% of chart
  const splitX = padX + chartW * 0.55
  // Token burn curve (high then declining as skill builds)
  const tokenPts = [
    [padX, padY + chartH * 0.15],
    [padX + chartW * 0.15, padY + chartH * 0.1],
    [padX + chartW * 0.3, padY + chartH * 0.25],
    [splitX, padY + chartH * 0.4],
    [padX + chartW * 0.7, padY + chartH * 0.55],
    [padX + chartW * 0.85, padY + chartH * 0.62],
    [padX + chartW, padY + chartH * 0.65],
  ] as [number, number][]
  // Outcome/quality curve (low then rising)
  const outcomePts = [
    [padX, padY + chartH * 0.9],
    [padX + chartW * 0.2, padY + chartH * 0.82],
    [padX + chartW * 0.4, padY + chartH * 0.62],
    [splitX, padY + chartH * 0.45],
    [padX + chartW * 0.68, padY + chartH * 0.28],
    [padX + chartW * 0.85, padY + chartH * 0.22],
    [padX + chartW, padY + chartH * 0.18],
  ] as [number, number][]
  const toPath = (pts: [number, number][]) =>
    pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ')
  return (
    <svg viewBox={`0 0 ${W + 40} ${H + 80}`} className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width={W + 40} height={H + 80} fill={BG} />
      {/* Phase bands */}
      <rect x={padX} y={padY} width={splitX - padX} height={chartH} fill={G} opacity="0.03" />
      <rect x={splitX} y={padX} width={padX + chartW - splitX} height={chartH} fill={G} opacity="0.06" />
      {/* Phase labels */}
      <text x={(padX + splitX) / 2} y={padY - 10} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.35" letterSpacing="0.5">TRAINING SPEND</text>
      <text x={(splitX + padX + chartW) / 2} y={padY - 10} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.5" letterSpacing="0.5">OUTCOME MODE</text>
      {/* Split line */}
      <line x1={splitX} y1={padY - 4} x2={splitX} y2={baseline} stroke={G} strokeWidth="0.6" strokeDasharray="4 3" opacity="0.3" />
      {/* Baseline + left axis */}
      <line x1={padX} y1={baseline} x2={padX + chartW} y2={baseline} stroke={G} strokeWidth="0.5" opacity="0.15" />
      <line x1={padX} y1={padY} x2={padX} y2={baseline} stroke={G} strokeWidth="0.5" opacity="0.15" />
      {/* Token burn line */}
      <path d={toPath(tokenPts)} fill="none" stroke={MUTED} strokeWidth="1.5" opacity="0.5" strokeDasharray="5 3" />
      {/* Outcome / quality line */}
      <path d={toPath(outcomePts)} fill="none" stroke={G} strokeWidth="2" opacity="0.65" />
      {/* Legend */}
      <line x1={padX} y1={baseline + 22} x2={padX + 22} y2={baseline + 22} stroke={MUTED} strokeWidth="1.5" opacity="0.5" strokeDasharray="5 3" />
      <text x={padX + 28} y={baseline + 26} fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.55">token burn rate</text>
      <line x1={padX + 160} y1={baseline + 22} x2={padX + 182} y2={baseline + 22} stroke={G} strokeWidth="2" opacity="0.65" />
      <text x={padX + 188} y={baseline + 26} fontFamily="monospace" fontSize="8" fill={G} opacity="0.6">outcomes per dollar</text>
      <text x={(padX + padX + chartW) / 2} y={H + 68} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">SKILL SHOWS UP AS TOKENS-PER-GOOD-OUTCOME GOING DOWN, NOT UP</text>
    </svg>
  )
}

export function ComplexityRouter() {
  const branches = [
    { tier: 'SIMPLE', model: 'Haiku / fast model', pct: '65%', note: 'definitional Q&A, small refactors, formatting', color: MUTED, op: 0.55 },
    { tier: 'STANDARD', model: 'Sonnet-tier', pct: '30%', note: 'multi-step reasoning, code generation', color: GL, op: 0.7 },
    { tier: 'FRONTIER', model: 'Opus / heavy model', pct: '5%', note: 'architecture decisions, novel problems', color: G, op: 0.85 },
  ]
  const startX = 280
  const branchX = 440
  return (
    <svg viewBox="0 0 680 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="280" fill={BG} />
      <defs>
        <marker id="cr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.4" />
        </marker>
      </defs>
      {/* Incoming query */}
      <rect x="40" y="116" width="120" height="48" rx="3" fill={G} opacity="0.07" stroke={G} strokeWidth="0.8" />
      <text x="100" y="137" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.6">QUERY</text>
      <text x="100" y="151" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.5">arrives</text>
      {/* Router box */}
      <rect x={startX} y="108" width="130" height="64" rx="3" fill={G} opacity="0.1" stroke={G} strokeWidth="1" />
      <text x={startX + 65} y="132" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="600" fill={G} opacity="0.7">CLASSIFIER</text>
      <text x={startX + 65} y="148" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55">sub-40ms routing</text>
      <text x={startX + 65} y="162" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.45">complexity score</text>
      {/* Arrow: query → classifier */}
      <line x1="160" y1="140" x2={startX - 4} y2="140" stroke={G} strokeWidth="1" opacity="0.35" markerEnd="url(#cr)" />
      {/* Branch arrows + boxes */}
      {branches.map((b, i) => {
        const totalBranches = branches.length
        const branchY = 60 + i * 80
        const centerY = 140
        return (
          <g key={b.tier}>
            <path d={`M${startX + 130},${centerY} C${startX + 165},${centerY} ${branchX - 20},${branchY + 24} ${branchX},${branchY + 24}`} fill="none" stroke={b.color} strokeWidth="1" opacity={b.op * 0.6} markerEnd="url(#cr)" />
            <rect x={branchX} y={branchY} width="200" height="48" rx="3" fill={b.color} opacity={0.07 + i * 0.04} stroke={b.color} strokeWidth="0.8" />
            <text x={branchX + 10} y={branchY + 17} fontFamily="monospace" fontSize="8" fontWeight="700" fill={b.color} opacity={b.op}>{b.tier}</text>
            <text x={branchX + 10} y={branchY + 30} fontFamily="monospace" fontSize="8.5" fill={b.color} opacity={b.op * 0.85}>{b.model}</text>
            <text x={branchX + 190} y={branchY + 17} textAnchor="end" fontFamily="monospace" fontSize="11" fontWeight="700" fill={b.color} opacity={b.op * 0.7}>{b.pct}</text>
            <text x={branchX + 10} y={branchY + 43} fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55">{b.note}</text>
          </g>
        )
      })}
      <text x="340" y="264" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">65% OF QUERIES ARE SIMPLE — DEFAULT-EVERYTHING-TO-FRONTIER IS THE WASTE</text>
    </svg>
  )
}

export function HermesMemoryTimeline() {
  const leftSessions = [
    { label: 'SESSION 1', sublabel: 'starts blank', note: 'no history' },
    { label: 'SESSION 2', sublabel: 'starts blank', note: 'no history' },
    { label: 'SESSION 3', sublabel: 'starts blank', note: 'no history' },
  ]
  const rightSessions = [
    { label: 'SESSION 1', sublabel: 'context logged & indexed', note: 'foundation' },
    { label: 'SESSION 2', sublabel: 'recalls Session 1 in full', note: 'inherits context' },
    { label: 'SESSION 3', sublabel: 'recalls Sessions 1–2', note: 'full history' },
  ]
  const SESSION_H = 52
  const SESSION_GAP = 10
  const startY = 70
  const ops = [0.07, 0.14, 0.24]
  return (
    <svg viewBox="0 0 720 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG} />
      <rect x="40" y="30" width="295" height="26" fill={MUTED} opacity="0.08" />
      <text x="188" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={MUTED} opacity="0.5" letterSpacing="1">STANDARD CHAT</text>
      <rect x="385" y="30" width="295" height="26" fill={G} opacity="0.08" />
      <text x="533" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1">HERMES DAEMON</text>
      {leftSessions.map((s, i) => {
        const y = startY + i * (SESSION_H + SESSION_GAP)
        return (
          <g key={s.label + 'l'}>
            <rect x="40" y={y} width="295" height={SESSION_H} rx="2" fill={MUTED} opacity="0.06" stroke={MUTED} strokeWidth="0.5" />
            <text x="56" y={y + 20} fontFamily="monospace" fontSize="9" fontWeight="700" fill={MUTED} opacity="0.4">{s.label}</text>
            <text x="56" y={y + 36} fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.3">{s.sublabel}</text>
            <text x="329" y={y + 20} textAnchor="end" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.25">{s.note}</text>
          </g>
        )
      })}
      {rightSessions.map((s, i) => {
        const y = startY + i * (SESSION_H + SESSION_GAP)
        return (
          <g key={s.label + 'r'}>
            {i > 0 && (
              <g>
                <line x1="533" y1={y - SESSION_GAP} x2="533" y2={y} stroke={G} strokeWidth="1" opacity="0.3" />
                <path d={`M529,${y - 4} L533,${y} L537,${y - 4}`} fill={G} opacity="0.35" />
              </g>
            )}
            <rect x="385" y={y} width="295" height={SESSION_H} rx="2" fill={G} opacity={ops[i]} stroke={G} strokeWidth="0.8" />
            <text x="401" y={y + 20} fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.7">{s.label}</text>
            <text x="401" y={y + 36} fontFamily="monospace" fontSize="7.5" fill={G} opacity={0.4 + i * 0.1}>{s.sublabel}</text>
            <text x="674" y={y + 20} textAnchor="end" fontFamily="monospace" fontSize="7" fill={G} opacity={0.35 + i * 0.1}>{s.note}</text>
          </g>
        )
      })}
      <text x="360" y="264" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">EVERY SESSION INHERITS EVERY PREVIOUS SESSION</text>
    </svg>
  )
}

export function SkillFlywheel() {
  const nodes = [
    { n: '01', label: 'HARD PROBLEM', note: 'something non-trivial arises', x: 40, y: 40 },
    { n: '02', label: 'HERMES SOLVES IT', note: 'tools, context, reasoning', x: 360, y: 40 },
    { n: '03', label: 'SKILL.MD WRITTEN', note: 'agentskills.io compatible', x: 360, y: 200 },
    { n: '04', label: 'BENEFIT COMPOUNDS', note: 'future sessions start ahead', x: 40, y: 200 },
  ]
  const W = 200
  const H = 60
  const ops = [0.07, 0.1, 0.13, 0.1]
  return (
    <svg viewBox="0 0 600 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="300" fill={BG} />
      <defs>
        <marker id="sf" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={GL} opacity="0.5" />
        </marker>
      </defs>
      <text x="300" y="143" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.3" letterSpacing="1">GROWS</text>
      <text x="300" y="158" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.3" letterSpacing="1">WITH YOU</text>
      <line x1="240" y1="70" x2="356" y2="70" stroke={GL} strokeWidth="1" opacity="0.4" markerEnd="url(#sf)" />
      <line x1="460" y1="100" x2="460" y2="196" stroke={GL} strokeWidth="1" opacity="0.4" markerEnd="url(#sf)" />
      <line x1="360" y1="230" x2="244" y2="230" stroke={GL} strokeWidth="1" opacity="0.4" markerEnd="url(#sf)" />
      <line x1="140" y1="200" x2="140" y2="104" stroke={GL} strokeWidth="1" opacity="0.4" markerEnd="url(#sf)" />
      {nodes.map((node, i) => (
        <g key={node.n}>
          <rect x={node.x} y={node.y} width={W} height={H} rx="3" fill={G} opacity={ops[i]} stroke={G} strokeWidth="0.8" />
          <text x={node.x + 10} y={node.y + 20} fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.4">{node.n}</text>
          <text x={node.x + 10} y={node.y + 37} fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.75">{node.label}</text>
          <text x={node.x + 10} y={node.y + 52} fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55">{node.note}</text>
        </g>
      ))}
      <text x="300" y="282" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">EACH SOLVED PROBLEM MAKES THE NEXT ONE CHEAPER</text>
    </svg>
  )
}

export function GatewayHubSpoke() {
  const platforms = [
    { name: 'Telegram', cx: 360, cy: 40 },
    { name: 'Discord', cx: 438, cy: 72 },
    { name: 'Slack', cx: 470, cy: 150 },
    { name: 'WhatsApp', cx: 438, cy: 228 },
    { name: 'CLI', cx: 360, cy: 260 },
    { name: 'Email', cx: 282, cy: 228 },
    { name: 'Signal', cx: 250, cy: 150 },
    { name: 'VS Code', cx: 282, cy: 72 },
  ]
  const HUB_CX = 360
  const HUB_CY = 150
  const HUB_R = 48
  const BOX_W = 80
  const BOX_H = 28
  return (
    <svg viewBox="0 0 720 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="300" fill={BG} />
      {platforms.map(p => (
        <line key={p.name + 'l'} x1={HUB_CX} y1={HUB_CY} x2={p.cx} y2={p.cy} stroke={G} strokeWidth="0.8" opacity="0.15" />
      ))}
      {platforms.map(p => (
        <g key={p.name + 'b'}>
          <rect x={p.cx - BOX_W / 2} y={p.cy - BOX_H / 2} width={BOX_W} height={BOX_H} rx="2" fill={G} opacity="0.07" stroke={G} strokeWidth="0.6" />
          <text x={p.cx} y={p.cy + 4} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.7">{p.name}</text>
        </g>
      ))}
      <circle cx={HUB_CX} cy={HUB_CY} r={HUB_R} fill={G} opacity="0.1" stroke={G} strokeWidth="1.2" />
      <text x={HUB_CX} y={HUB_CY - 5} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.75">HERMES</text>
      <text x={HUB_CX} y={HUB_CY + 10} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.55">DAEMON</text>
      <text x="360" y="284" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.25" letterSpacing="1">ONE PROCESS · 20 PLATFORMS · SAME MEMORY ACROSS ALL</text>
    </svg>
  )
}

export function HermesVsClaudeComparison() {
  const rows = [
    { dim: 'Scope', claude: 'Deep, real-time session work', hermes: 'Cross-project persistent context' },
    { dim: 'Sessions', claude: 'Bounded: resets each time', hermes: 'Daemon: remembers indefinitely' },
    { dim: 'Scheduling', claude: 'No native cron', hermes: 'Built-in scheduler' },
    { dim: 'Hosting', claude: 'Anthropic-managed', hermes: 'Self-hosted, your data' },
    { dim: 'Platforms', claude: 'Terminal, IDE, desktop app', hermes: 'CLI + ~20 messaging platforms' },
    { dim: 'Best for', claude: 'Active coding, right now', hermes: 'Recurring, unattended automation' },
  ]
  const ROW_H = 34
  const startY = 80
  return (
    <svg viewBox="0 0 720 310" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="310" fill={BG} />
      <line x1="360" y1="20" x2="360" y2="295" stroke={G} strokeWidth="0.4" opacity="0.15" />
      <rect x="40" y="30" width="300" height="26" fill={MUTED} opacity="0.08" />
      <rect x="380" y="30" width="300" height="26" fill={G} opacity="0.08" />
      <text x="190" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={MUTED} opacity="0.5" letterSpacing="1">CLAUDE CODE</text>
      <text x="530" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1">HERMES AGENT</text>
      {rows.map((r, i) => {
        const y = startY + i * ROW_H
        return (
          <g key={r.dim}>
            <line x1="40" y1={y} x2="340" y2={y} stroke={MUTED} strokeWidth="0.3" opacity="0.15" />
            <line x1="380" y1={y} x2="680" y2={y} stroke={G} strokeWidth="0.3" opacity="0.12" />
            <text x="56" y={y + 11} fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.35" letterSpacing="0.5">{r.dim.toUpperCase()}</text>
            <text x="56" y={y + 26} fontFamily="monospace" fontSize="9" fill={MUTED} opacity="0.5">{r.claude}</text>
            <text x="396" y={y + 11} fontFamily="monospace" fontSize="7" fill={G} opacity="0.4" letterSpacing="0.5">{r.dim.toUpperCase()}</text>
            <text x="396" y={y + 26} fontFamily="monospace" fontSize="9" fill={G} opacity="0.72">{r.hermes}</text>
          </g>
        )
      })}
      <text x="190" y="292" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.35">the active coding tool</text>
      <text x="530" y="292" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.4">the persistent automation layer</text>
      <text x="360" y="307" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.2" letterSpacing="1">DIFFERENT TOOLS — DIFFERENT JOBS — BOTH WORTH HAVING</text>
    </svg>
  )
}

// ─── App Security illustrations ───────────────────────────────────────────────

const DANGER = '#C0392B'
const AMBER  = '#D4890A'

export function RLSStateDiagram() {
  return (
    <svg viewBox="0 0 720 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="240" fill={BG} />
      <defs>
        <marker id="rls-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0.5 L5,3 L0,5.5 Z" fill={MUTED} opacity="0.45" />
        </marker>
      </defs>

      {/* ─── Box 1: RLS OFF ─── */}
      <rect x="18" y="28" width="192" height="178" rx="3" fill={DANGER} fillOpacity="0.06" stroke={DANGER} strokeWidth="1" strokeOpacity="0.6" />
      <rect x="18" y="28" width="192" height="24" rx="3" fill={DANGER} fillOpacity="0.14" />
      <rect x="18" y="40" width="192" height="12" fill={DANGER} fillOpacity="0.14" />
      <text x="114" y="44" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={DANGER} letterSpacing="2">RLS OFF</text>
      {/* Open padlock — right shackle leg lifted out of body */}
      <rect x="96" y="100" width="36" height="28" rx="2" stroke={DANGER} strokeWidth="1.5" fill="none" fillOpacity="0.0" />
      <path d="M102 100 L102 88 A12 12 0 0 0 126 88 L126 80" stroke={DANGER} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="114" cy="112" r="3.5" fill={DANGER} fillOpacity="0.45" />
      <rect x="112" y="112" width="4" height="7" rx="1" fill={DANGER} fillOpacity="0.45" />
      <text x="114" y="155" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={DANGER} opacity="0.85">Anyone with your anon key</text>
      <text x="114" y="167" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={DANGER} opacity="0.85">can read/write everything.</text>
      <text x="114" y="196" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={DANGER} opacity="0.45">default on every new table</text>

      {/* ─── Arrow 1 ─── */}
      <line x1="210" y1="117" x2="257" y2="117" stroke={MUTED} strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#rls-arr)" />
      <text x="233" y="110" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55">enable RLS</text>

      {/* ─── Box 2: RLS ON, no policies ─── */}
      <rect x="262" y="28" width="196" height="178" rx="3" fill={AMBER} fillOpacity="0.06" stroke={AMBER} strokeWidth="1" strokeOpacity="0.5" />
      <rect x="262" y="28" width="196" height="24" rx="3" fill={AMBER} fillOpacity="0.12" />
      <rect x="262" y="40" width="196" height="12" fill={AMBER} fillOpacity="0.12" />
      <text x="360" y="44" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={AMBER} letterSpacing="1.5">RLS ON, NO POLICIES</text>
      {/* Closed padlock */}
      <rect x="342" y="100" width="36" height="28" rx="2" stroke={AMBER} strokeWidth="1.5" fill="none" />
      <path d="M348 100 L348 88 A12 12 0 0 0 372 88 L372 100" stroke={AMBER} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="360" cy="112" r="3.5" fill={AMBER} fillOpacity="0.45" />
      <rect x="358" y="112" width="4" height="7" rx="1" fill={AMBER} fillOpacity="0.45" />
      <text x="360" y="155" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={AMBER} opacity="0.85">All queries return zero rows.</text>
      <text x="360" y="167" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={AMBER} opacity="0.85">Your app looks broken.</text>
      <text x="360" y="196" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={AMBER} opacity="0.45">safer failure — still not right</text>

      {/* ─── Arrow 2 ─── */}
      <line x1="458" y1="117" x2="505" y2="117" stroke={MUTED} strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#rls-arr)" />
      <text x="481" y="110" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55">write policies</text>

      {/* ─── Box 3: RLS ON + policies ─── */}
      <rect x="510" y="28" width="192" height="178" rx="3" fill={G} fillOpacity="0.06" stroke={G} strokeWidth="1" strokeOpacity="0.5" />
      <rect x="510" y="28" width="192" height="24" rx="3" fill={G} fillOpacity="0.12" />
      <rect x="510" y="40" width="192" height="12" fill={G} fillOpacity="0.12" />
      <text x="606" y="44" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill={G} letterSpacing="1.5">RLS ON + POLICIES</text>
      {/* Shield with checkmark */}
      <path d="M606 72 L632 80 L632 104 Q632 122 606 130 Q580 122 580 104 L580 80 Z" stroke={G} strokeWidth="1.5" fill={G} fillOpacity="0.1" />
      <path d="M592 104 L603 115 L622 94" stroke={G} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="606" y="155" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.85">Access scoped to authenticated</text>
      <text x="606" y="167" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.85">user. Controlled, tested.</text>
      <text x="606" y="196" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.45">where you want to be</text>
    </svg>
  )
}

export function OWASPTopTenVisual() {
  const items = [
    { code: 'A01', name: 'Broken Access Control',           note: 'Missing/wrong RLS is exactly this',          pct: 100, hi: true  },
    { code: 'A02', name: 'Security Misconfiguration',        note: 'Default settings left open',                  pct: 88,  hi: true  },
    { code: 'A03', name: 'Supply Chain Failures',            note: 'Verify before npm install',                   pct: 38,  hi: false },
    { code: 'A04', name: 'Cryptographic Failures',           note: 'Never store secrets plaintext',               pct: 44,  hi: false },
    { code: 'A05', name: 'Injection',                        note: "Don't bypass the client library",             pct: 42,  hi: false },
    { code: 'A06', name: 'Insecure Design',                  note: 'Threat-model before you build',               pct: 35,  hi: false },
    { code: 'A07', name: 'Authentication Failures',          note: 'Use Supabase Auth, not custom sessions',      pct: 48,  hi: false },
    { code: 'A08', name: 'Integrity Failures',               note: 'Verify webhooks and third-party payloads',    pct: 30,  hi: false },
    { code: 'A09', name: 'Logging & Alerting Failures',      note: 'Set one alert for anomalous auth activity',   pct: 33,  hi: false },
    { code: 'A10', name: 'Mishandling Exceptional Conditions', note: 'Fail closed; never leak raw DB errors',     pct: 37,  hi: false },
  ]

  const ROW_H = 34
  const BAR_MAX = 148
  const startY = 48

  return (
    <svg viewBox="0 0 720 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="400" fill={BG} />

      {/* Header */}
      <text x="20" y="20" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5" letterSpacing="1.5">CODE</text>
      <text x="72" y="20" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5" letterSpacing="1.5">CATEGORY</text>
      <text x="380" y="20" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5" letterSpacing="1.5">YOUR MOVE</text>
      <text x="555" y="20" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5" letterSpacing="1.5">PRIORITY</text>
      <line x1="18" y1="26" x2="702" y2="26" stroke={BORDER} strokeWidth="0.5" />

      {items.map((item, i) => {
        const y = startY + i * ROW_H
        const barW = (item.pct / 100) * BAR_MAX
        const color = item.hi ? G : MUTED
        const textOp = item.hi ? 0.9 : 0.55
        const bgOp = item.hi ? 0.04 : 0

        return (
          <g key={item.code}>
            {item.hi && <rect x="18" y={y - 2} width="684" height={ROW_H} fill={G} fillOpacity={bgOp} />}
            {/* Code */}
            <text x="20" y={y + 18} fontFamily="monospace" fontSize="10" fontWeight={item.hi ? '700' : '400'} fill={color} opacity={item.hi ? 1 : 0.45} letterSpacing="0.5">{item.code}</text>
            {/* Name */}
            <text x="72" y={y + 18} fontFamily="monospace" fontSize="10" fontWeight={item.hi ? '600' : '400'} fill={item.hi ? G : TEXT} opacity={textOp}>{item.name}</text>
            {/* Note */}
            <text x="380" y={y + 18} fontFamily="monospace" fontSize="8" fill={MUTED} opacity={item.hi ? 0.75 : 0.45}>{item.note}</text>
            {/* Bar */}
            <rect x="553" y={y + 8} width={BAR_MAX} height="10" rx="2" fill={MUTED} fillOpacity="0.1" />
            <rect x="553" y={y + 8} width={barW} height="10" rx="2" fill={color} fillOpacity={item.hi ? 0.7 : 0.28} />
            {/* Row divider */}
            <line x1="18" y1={y + ROW_H - 2} x2="702" y2={y + ROW_H - 2} stroke={BORDER} strokeWidth="0.4" opacity="0.5" />
          </g>
        )
      })}

      <text x="360" y="392" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.3" letterSpacing="1">A01 + A02 ACCOUNT FOR THE MAJORITY OF INCIDENTS IN SMALL, FAST-SHIPPED APPS</text>
    </svg>
  )
}

export function RLSPolicyDiagram() {
  return (
    <svg viewBox="0 0 720 210" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="210" fill={BG} />

      {/* Divider */}
      <line x1="360" y1="15" x2="360" y2="195" stroke={BORDER} strokeWidth="0.75" strokeOpacity="0.6" />

      {/* ─── Left: BAD ─── */}
      <rect x="18" y="18" width="326" height="24" fill={DANGER} fillOpacity="0.08" />
      <text x="30" y="34" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={DANGER} opacity="0.8" letterSpacing="1">BAD — USING (true)</text>

      {/* SQL code block */}
      <rect x="18" y="50" width="326" height="80" rx="2" fill={TEXT} fillOpacity="0.04" stroke={BORDER} strokeWidth="0.75" />
      <text x="32" y="70"  fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.6">CREATE POLICY &quot;users can read&quot;</text>
      <text x="32" y="84"  fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.6">  ON profiles</text>
      <text x="32" y="98"  fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.6">  FOR SELECT</text>
      <text x="32" y="112" fontFamily="monospace" fontSize="8.5" fill={DANGER} opacity="0.85">  USING (true);</text>

      {/* Result label */}
      <text x="30" y="152" fontFamily="monospace" fontSize="8" fill={DANGER} opacity="0.8">→  Every row. Every user. No access control.</text>
      <text x="30" y="166" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5">RLS enabled in name only — functionally open.</text>
      <text x="30" y="185" fontFamily="monospace" fontSize="7" fill={DANGER} opacity="0.35">Treat USING(true) the same as no RLS at all.</text>

      {/* ─── Right: GOOD ─── */}
      <rect x="368" y="18" width="334" height="24" fill={G} fillOpacity="0.08" />
      <text x="380" y="34" fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.85" letterSpacing="1">GOOD — USING (auth.uid() = user_id)</text>

      {/* SQL code block */}
      <rect x="368" y="50" width="334" height="80" rx="2" fill={TEXT} fillOpacity="0.04" stroke={BORDER} strokeWidth="0.75" />
      <text x="382" y="70"  fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.6">CREATE POLICY &quot;users read own row&quot;</text>
      <text x="382" y="84"  fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.6">  ON profiles</text>
      <text x="382" y="98"  fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.6">  FOR SELECT</text>
      <text x="382" y="112" fontFamily="monospace" fontSize="8.5" fill={G} opacity="0.9">  USING (auth.uid() = user_id);</text>

      {/* Result label */}
      <text x="380" y="152" fontFamily="monospace" fontSize="8" fill={G} opacity="0.85">→  Only the authenticated user&apos;s own rows.</text>
      <text x="380" y="166" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5">UPDATE policies need both USING and WITH CHECK.</text>
      <text x="380" y="185" fontFamily="monospace" fontSize="7" fill={G} opacity="0.35">auth.uid() comes from the JWT — no extra query.</text>
    </svg>
  )
}

export function SlopPatternVisual() {
  const SLOP = '#C0392B'
  const SLOP_BG = '#FDF0EE'
  const GOOD = '#1A4D3A'
  const GOOD_BG = '#EFF5F2'
  return (
    <svg viewBox="0 0 720 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="300" fill={BG} />

      {/* Column headers */}
      <text x="170" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill={SLOP} letterSpacing="1.5" textDecoration="none">DRAFT</text>
      <text x="550" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill={GOOD} letterSpacing="1.5">EDITED</text>

      {/* Left panel */}
      <rect x="16" y="30" width="310" height="226" rx="4" fill={SLOP_BG} stroke={SLOP} strokeWidth="1" strokeOpacity="0.4" />

      {/* Slop phrase rows */}
      {[
        { y: 58,  text: 'In today’s fast-paced world, content matters.' },
        { y: 94,  text: 'It’s worth noting that AI can potentially help.' },
        { y: 130, text: 'Whether you’re a beginner or a seasoned pro...' },
        { y: 166, text: 'Delve into these robust and seamless solutions.' },
        { y: 202, text: 'At the end of the day, this is a game-changer.' },
      ].map(({ y, text }) => (
        <g key={y}>
          <rect x="28" y={y - 18} width="286" height="26" rx="3" fill={SLOP} fillOpacity="0.08" />
          <text x="36" y={y - 2} fontFamily="system-ui, sans-serif" fontSize="9" fill={TEXT} opacity="0.75">{text}</text>
          {/* Warning dot */}
          <circle cx="302" cy={y - 6} r="5" fill={SLOP} fillOpacity="0.7" />
          <text x="302" y={y - 3} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill="#fff" fontWeight="700">!</text>
        </g>
      ))}

      {/* Arrow */}
      <text x="358" y="148" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="20" fill={BORDER}>&#8594;</text>

      {/* Right panel */}
      <rect x="394" y="30" width="310" height="226" rx="4" fill={GOOD_BG} stroke={GOOD} strokeWidth="1" strokeOpacity="0.3" />

      {/* Edited phrase rows */}
      {[
        { y: 58,  text: 'The Moltbook leak exposed 1.5M API keys in Jan 2026.' },
        { y: 94,  text: 'Claude’s context window is 200k tokens.' },
        { y: 130, text: 'Skip RLS and every row is readable by anyone with your key.' },
        { y: 166, text: 'Signups grew 34% in six weeks after the copy rewrite.' },
        { y: 202, text: 'The audit query takes 30 seconds. Run it before every deploy.' },
      ].map(({ y, text }) => (
        <g key={y}>
          <rect x="406" y={y - 18} width="286" height="26" rx="3" fill={GOOD} fillOpacity="0.07" />
          <text x="414" y={y - 2} fontFamily="system-ui, sans-serif" fontSize="9" fill={TEXT} opacity="0.8">{text}</text>
          {/* Check dot */}
          <circle cx="680" cy={y - 6} r="5" fill={GOOD} fillOpacity="0.7" />
          <text x="680" y={y - 3} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill="#fff" fontWeight="700">&#10003;</text>
        </g>
      ))}

      {/* Bottom label */}
      <text x="360" y="272" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED}>
        No single word is banned. The cluster, plus the absence of any specific detail, is the signal.
      </text>
    </svg>
  )
}

export function EEATFramework() {
  const bands = [
    { label: 'Experience',        shade: '#1A4D3A', note: 'First-hand use or testing. Not a summary of what others said about the topic.' },
    { label: 'Expertise',         shade: '#225E48', note: 'Genuine command shown through correct specifics. Not credential-dropping.' },
    { label: 'Authoritativeness', shade: '#2A7258', note: 'Recognised standing, built through consistent, accurate, citable work over time.' },
    { label: 'Trustworthiness',   shade: '#3D7A60', note: 'Accuracy, transparent sourcing, no manipulative intent.' },
  ]
  const bandH = 52
  const startY = 24
  return (
    <svg viewBox="0 0 720 290" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="290" fill={BG} />

      {bands.map(({ label, shade, note }, i) => {
        const y = startY + i * (bandH + 6)
        return (
          <g key={label}>
            {/* Band background */}
            <rect x="16" y={y} width="688" height={bandH} rx="3" fill={shade} fillOpacity="0.07" stroke={shade} strokeWidth="0.75" strokeOpacity="0.3" />
            {/* Left colour stripe */}
            <rect x="16" y={y} width="6" height={bandH} rx="3" fill={shade} fillOpacity="0.85" />
            {/* Label */}
            <text x="36" y={y + 20} fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill={shade} letterSpacing="0.5">{label.toUpperCase()}</text>
            {/* Note */}
            <text x="36" y={y + 38} fontFamily="system-ui, sans-serif" fontSize="10.5" fill={TEXT} opacity="0.7">{note}</text>
          </g>
        )
      })}

      {/* Callout bar */}
      <rect x="16" y="258" width="688" height="26" rx="3" fill={G} fillOpacity="0.09" stroke={G} strokeWidth="0.75" strokeOpacity="0.35" />
      <text x="360" y="275" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill={G} fontWeight="600">
        Practical trigger: add one thing only you could know. That single step moves all four signals.
      </text>
    </svg>
  )
}

export function WritingWorkflowDiagram() {
  return (
    <svg viewBox="0 0 720 310" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="310" fill={BG} />

      {/* ─── Top split bar ─── */}
      {/* AI half */}
      <rect x="16" y="16" width="340" height="52" rx="3" fill={G} />
      <text x="36" y="40" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#fff">AI</text>
      <text x="36" y="56" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#fff" opacity="0.75">Structure, outline, drudgery</text>

      {/* Human half */}
      <rect x="364" y="16" width="340" height="52" rx="3" fill={BG2} stroke={G} strokeWidth="1.5" />
      <text x="384" y="40" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill={G}>Human</text>
      <text x="384" y="56" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={MUTED}>Sentences, specifics, judgment</text>

      {/* Divider label */}
      <text x="358" y="46" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED} fontWeight="600">50%</text>

      {/* ─── Step cards ─── */}
      {/* Left column: steps 01–02 */}
      <g>
        <rect x="16" y="90" width="340" height="58" rx="3" fill={G} fillOpacity="0.06" stroke={G} strokeWidth="0.75" strokeOpacity="0.3" />
        <text x="30" y="110" fontFamily="monospace" fontSize="11" fontWeight="700" fill={G} opacity="0.6">01</text>
        <text x="30" y="126" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">Start with your own voice. Record yourself talking through</text>
        <text x="30" y="139" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">the idea before AI touches it.</text>
      </g>
      <g>
        <rect x="16" y="158" width="340" height="58" rx="3" fill={G} fillOpacity="0.06" stroke={G} strokeWidth="0.75" strokeOpacity="0.3" />
        <text x="30" y="178" fontFamily="monospace" fontSize="11" fontWeight="700" fill={G} opacity="0.6">02</text>
        <text x="30" y="194" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">Let AI handle structure: outlines, H2/H3 scaffolding,</text>
        <text x="30" y="207" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">topic clusters, keyword expansion.</text>
      </g>

      {/* Right column: steps 03–06 */}
      <g>
        <rect x="364" y="90" width="340" height="50" rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
        <text x="378" y="108" fontFamily="monospace" fontSize="11" fontWeight="700" fill={G} opacity="0.6">03</text>
        <text x="378" y="122" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">Write or heavily rewrite the actual sentences using</text>
        <text x="378" y="135" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">your own material as the spine.</text>
      </g>
      <g>
        <rect x="364" y="148" width="340" height="50" rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
        <text x="378" y="166" fontFamily="monospace" fontSize="11" fontWeight="700" fill={G} opacity="0.6">04</text>
        <text x="378" y="180" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">Add one detail only you could know: a real number,</text>
        <text x="378" y="193" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">a first-hand result, an opinion you will defend.</text>
      </g>
      <g>
        <rect x="364" y="206" width="340" height="50" rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
        <text x="378" y="224" fontFamily="monospace" fontSize="11" fontWeight="700" fill={G} opacity="0.6">05</text>
        <text x="378" y="238" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">Fact-check everything AI contributed. Hallucinated stats</text>
        <text x="378" y="251" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">are a normal failure mode, not an edge case.</text>
      </g>
      <g>
        <rect x="364" y="264" width="340" height="36" rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
        <text x="378" y="280" fontFamily="monospace" fontSize="11" fontWeight="700" fill={G} opacity="0.6">06</text>
        <text x="378" y="294" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">Cut. If a sentence does not survive being deleted, delete it.</text>
      </g>
    </svg>
  )
}

export function SwapTestDiagram() {
  const GOOD_BG = '#EFF5F2'
  const WARN_BG = '#FDF6EE'
  return (
    <svg viewBox="0 0 720 320" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="320" fill={BG} />

      {/* ─── Left card: Brand A ─── */}
      <rect x="16" y="16" width="316" height="200" rx="4" fill={GOOD_BG} stroke={G} strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Header stripe */}
      <rect x="16" y="16" width="316" height="36" rx="4" fill={G} fillOpacity="0.15" />
      <text x="30" y="38" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill={G} letterSpacing="1">BRAND A</text>
      {/* Body blocks */}
      <rect x="30" y="66" width="200" height="10" rx="2" fill={TEXT} fillOpacity="0.12" />
      <rect x="30" y="82" width="260" height="7" rx="2" fill={TEXT} fillOpacity="0.07" />
      <rect x="30" y="94" width="240" height="7" rx="2" fill={TEXT} fillOpacity="0.07" />
      <rect x="30" y="106" width="180" height="7" rx="2" fill={TEXT} fillOpacity="0.07" />
      {/* CTA */}
      <rect x="30" y="128" width="96" height="28" rx="3" fill={G} fillOpacity="0.85" />
      <text x="78" y="145" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#fff" fontWeight="600">Get started</text>
      {/* Accent bar — the "signature" */}
      <rect x="30" y="170" width="60" height="4" rx="2" fill={G} />
      <text x="30" y="196" fontFamily="system-ui, sans-serif" fontSize="8.5" fill={MUTED}>Typography, palette, and layout chosen for this subject.</text>
      {/* Label below */}
      <rect x="16" y="224" width="316" height="28" rx="3" fill={G} fillOpacity="0.1" />
      <text x="174" y="242" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="600" fill={G}>Designed for this brief</text>

      {/* ─── Arrow ─── */}
      <text x="358" y="130" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="24" fill={BORDER}>&#8596;</text>
      <text x="358" y="148" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED}>swap</text>

      {/* ─── Right card: Brand B (same layout, different label) ─── */}
      <rect x="388" y="16" width="316" height="200" rx="4" fill={WARN_BG} stroke="#D4890A" strokeWidth="1.2" strokeOpacity="0.45" />
      {/* Header stripe */}
      <rect x="388" y="16" width="316" height="36" rx="4" fill="#D4890A" fillOpacity="0.1" />
      <text x="402" y="38" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#B5730A" letterSpacing="1">BRAND B</text>
      {/* Identical body blocks */}
      <rect x="402" y="66" width="200" height="10" rx="2" fill={TEXT} fillOpacity="0.12" />
      <rect x="402" y="82" width="260" height="7" rx="2" fill={TEXT} fillOpacity="0.07" />
      <rect x="402" y="94" width="240" height="7" rx="2" fill={TEXT} fillOpacity="0.07" />
      <rect x="402" y="106" width="180" height="7" rx="2" fill={TEXT} fillOpacity="0.07" />
      {/* Identical CTA */}
      <rect x="402" y="128" width="96" height="28" rx="3" fill={G} fillOpacity="0.85" />
      <text x="450" y="145" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#fff" fontWeight="600">Get started</text>
      {/* Same accent bar */}
      <rect x="402" y="170" width="60" height="4" rx="2" fill={G} />
      <text x="402" y="196" fontFamily="system-ui, sans-serif" fontSize="8.5" fill={MUTED}>Same design. Different brand. Still makes sense?</text>
      {/* Label below */}
      <rect x="388" y="224" width="316" height="28" rx="3" fill="#D4890A" fillOpacity="0.1" />
      <text x="546" y="242" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="600" fill="#B5730A">Logo swapped — still works? It&apos;s a default.</text>

      {/* Bottom verdict */}
      <text x="360" y="288" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED}>
        If the design survives the swap, it wasn&apos;t made for this brief. Revise before shipping.
      </text>
    </svg>
  )
}

export function DesignFundamentalsGrid() {
  const MID = 360
  const MID_Y = 165
  return (
    <svg viewBox="0 0 720 330" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="330" fill={BG} />

      {/* Grid lines */}
      <line x1={MID} y1="12" x2={MID} y2="318" stroke={BORDER} strokeWidth="1" />
      <line x1="12" y1={MID_Y} x2="708" y2={MID_Y} stroke={BORDER} strokeWidth="1" />

      {/* ─── TL: Fewer Borders ─── */}
      <text x="24" y="32" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill={TEXT} letterSpacing="1.5" opacity="0.5">FEWER BORDERS</text>
      {/* Noisy version */}
      <rect x="30" y="46" width="120" height="36" rx="2" fill={BG2} stroke={BORDER} strokeWidth="1.5" />
      <rect x="38" y="54" width="80" height="8" rx="1" fill={TEXT} fillOpacity="0.12" />
      <rect x="38" y="67" width="60" height="6" rx="1" fill={TEXT} fillOpacity="0.07" />
      <text x="90" y="97" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill="#D4890A">borders add noise</text>
      {/* Clean version */}
      <rect x="186" y="46" width="120" height="36" rx="2" fill={BG2} />
      <rect x="194" y="54" width="80" height="8" rx="1" fill={TEXT} fillOpacity="0.12" />
      <rect x="194" y="67" width="60" height="6" rx="1" fill={TEXT} fillOpacity="0.07" />
      <text x="246" y="97" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={G}>whitespace separates</text>

      {/* ─── TR: Spacing as a System ─── */}
      <text x={MID + 12} y="32" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill={TEXT} letterSpacing="1.5" opacity="0.5">SPACING AS A SYSTEM</text>
      {/* Arbitrary */}
      {[11, 23, 32, 46, 52].map((h, i) => (
        <rect key={i} x={MID + 30} y={44 + i * 16} width={h * 4} height="8" rx="1" fill="#D4890A" fillOpacity="0.3" />
      ))}
      <text x={MID + 150} y="130" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill="#D4890A">arbitrary gaps</text>
      {/* Systematic */}
      {[4, 8, 8, 16, 16].map((h, i) => (
        <rect key={i} x={MID + 220} y={44 + i * 16} width={h * 5} height="8" rx="1" fill={G} fillOpacity="0.4" />
      ))}
      <text x={MID + 310} y="130" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={G}>4/8/16 scale</text>

      {/* ─── BL: Contrast for Hierarchy ─── */}
      <text x="24" y={MID_Y + 22} fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill={TEXT} letterSpacing="1.5" opacity="0.5">CONTRAST FOR HIERARCHY</text>
      {/* Flat */}
      <text x="40" y={MID_Y + 50} fontFamily="system-ui, sans-serif" fontSize="12" fill={TEXT} opacity="0.6">Section title</text>
      <text x="40" y={MID_Y + 67} fontFamily="system-ui, sans-serif" fontSize="11" fill={TEXT} opacity="0.5">Body text here</text>
      <text x="40" y={MID_Y + 82} fontFamily="system-ui, sans-serif" fontSize="11" fill={TEXT} opacity="0.45">Caption information</text>
      <text x="120" y={MID_Y + 110} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill="#D4890A">no hierarchy</text>
      {/* High contrast */}
      <text x="200" y={MID_Y + 50} fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill={TEXT} opacity="0.85">Section title</text>
      <text x="200" y={MID_Y + 68} fontFamily="system-ui, sans-serif" fontSize="11" fill={TEXT} opacity="0.55">Body text here</text>
      <text x="200" y={MID_Y + 82} fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED}>Caption information</text>
      <text x="260" y={MID_Y + 110} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={G}>clear hierarchy</text>

      {/* ─── BR: Consistency ─── */}
      <text x={MID + 12} y={MID_Y + 22} fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700" fill={TEXT} letterSpacing="1.5" opacity="0.5">CONSISTENCY</text>
      {/* Inconsistent */}
      <rect x={MID + 30} y={MID_Y + 36} width="80" height="24" rx="3" fill={G} />
      <text x={MID + 70} y={MID_Y + 52} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#fff">Publish</text>
      <text x={MID + 70} y={MID_Y + 74} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill="#D4890A">→ toast: &quot;Submitted&quot;</text>
      <text x={MID + 70} y={MID_Y + 88} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fill={MUTED}>breaks mental model</text>
      {/* Consistent */}
      <rect x={MID + 220} y={MID_Y + 36} width="80" height="24" rx="3" fill={G} />
      <text x={MID + 260} y={MID_Y + 52} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#fff">Publish</text>
      <text x={MID + 260} y={MID_Y + 74} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={G}>→ toast: &quot;Published&quot;</text>
      <text x={MID + 260} y={MID_Y + 88} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fill={MUTED}>reinforces mental model</text>
    </svg>
  )
}

export function TwoPassDiagram() {
  return (
    <svg viewBox="0 0 720 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="300" fill={BG} />

      {/* ─── PASS 1 block ─── */}
      <rect x="16" y="16" width="280" height="230" rx="4" fill={G} fillOpacity="0.08" stroke={G} strokeWidth="1.2" strokeOpacity="0.4" />
      <rect x="16" y="16" width="280" height="38" rx="4" fill={G} fillOpacity="0.85" />
      <text x="26" y="30" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill="#fff" letterSpacing="1.5" opacity="0.7">PASS 1</text>
      <text x="26" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#fff">Plan before you touch a canvas.</text>

      {/* Token rows */}
      {[
        { y: 72,  label: 'Colour',    detail: '4–6 named hex values, not "blues and greys"' },
        { y: 108, label: 'Type',      detail: 'Display face + body face. Utility if needed for data.' },
        { y: 144, label: 'Layout',    detail: 'One-sentence concept + rough wireframe.' },
        { y: 180, label: 'Signature', detail: 'The single element this design will be remembered by.' },
      ].map(({ y, label, detail }) => (
        <g key={label}>
          <rect x="26" y={y - 2} width="260" height="30" rx="2" fill={BG} fillOpacity="0.5" />
          <text x="36" y={y + 13} fontFamily="monospace" fontSize="9" fontWeight="700" fill={G}>{label}</text>
          <text x="102" y={y + 13} fontFamily="system-ui, sans-serif" fontSize="8.5" fill={TEXT} opacity="0.6">{detail}</text>
        </g>
      ))}

      {/* Arrow right */}
      <text x="330" y="135" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="22" fill={BORDER}>&#8594;</text>

      {/* ─── PASS 2 block ─── */}
      <rect x="366" y="16" width="280" height="152" rx="4" fill={BG2} stroke={G} strokeWidth="1.2" strokeOpacity="0.4" />
      <rect x="366" y="16" width="280" height="38" rx="4" fill={BG2} stroke={G} strokeWidth="1.2" strokeOpacity="0.4" />
      <text x="376" y="30" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill={G} letterSpacing="1.5" opacity="0.7">PASS 2</text>
      <text x="376" y="44" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill={G}>Interrogate the plan.</text>

      <text x="376" y="74" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">For every choice: would I make this same</text>
      <text x="376" y="88" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">choice for an unrelated brief?</text>
      <rect x="376" y="100" width="254" height="22" rx="2" fill={G} fillOpacity="0.07" />
      <text x="503" y="115" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill={G} fontWeight="600">If yes → revise. Name what changed and why.</text>

      <text x="376" y="146" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED}>Only once the plan holds up does it earn the right to build.</text>
      <text x="376" y="158" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED}>Only once the plan holds up does it earn the right to build.</text>

      {/* Arrow down */}
      <text x="506" y="196" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="22" fill={BORDER}>&#8595;</text>

      {/* ─── Build band ─── */}
      <rect x="366" y="212" width="280" height="46" rx="4" fill={G} fillOpacity="0.85" />
      <text x="506" y="232" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#fff" opacity="0.7" letterSpacing="1.5">BUILD</text>
      <text x="506" y="248" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#fff" fontWeight="600">Spend boldness in exactly one place.</text>

      {/* Footer note */}
      <text x="360" y="284" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED}>
        One bold idea with total restraint around it reads more confident than five ideas competing.
      </text>
    </svg>
  )
}

// ─── MVP Traction illustrations ───────────────────────────────────────────────

export function ValidationSequenceDiagram() {
  const SW = 150, SH = 78, GAP = 8, STEP_Y = 32
  const steps = [
    { label: 'Problem',     sub2: 'Validation',   detail: '15–20 interviews, repeated patterns',   fill: G,    op: 0.88 },
    { label: 'Solution',    sub2: 'Verification', detail: 'Landing page · prototype · narrow POC', fill: GL,   op: 0.82 },
    { label: 'Market',      sub2: 'Viability',    detail: 'Segment size + reachability',           fill: MUTED, op: 0.75 },
    { label: 'Willingness', sub2: 'to Pay',       detail: 'Hardest signal. Strongest proof.',      fill: AMBER, op: 0.92 },
  ]
  const tx = 16 + 4 * (SW + GAP)
  const ty = 16 + 3 * STEP_Y + SH - 42
  return (
    <svg viewBox="0 0 720 256" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="256" fill={BG} />
      {steps.map((s, i) => {
        const x = 16 + i * (SW + GAP)
        const y = 16 + i * STEP_Y
        return (
          <g key={i}>
            <rect x={x} y={y} width={SW} height={SH} rx="3" fill={s.fill} fillOpacity={s.op} />
            <text x={x + 10} y={y + 18} fontFamily="monospace" fontSize="9" fontWeight="700" fill="#fff" opacity="0.5">0{i + 1}</text>
            <text x={x + 10} y={y + 34} fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="700" fill="#fff">{s.label}</text>
            <text x={x + 10} y={y + 49} fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="700" fill="#fff" opacity="0.9">{s.sub2}</text>
            <text x={x + 10} y={y + 65} fontFamily="system-ui, sans-serif" fontSize="7.5" fill="#fff" opacity="0.7">{s.detail}</text>
          </g>
        )
      })}
      <text x={16 + SW + GAP / 2} y={36} textAnchor="middle" fontFamily="monospace" fontSize="6" fill={DANGER} opacity="0.65">most</text>
      <text x={16 + SW + GAP / 2} y={46} textAnchor="middle" fontFamily="monospace" fontSize="6" fill={DANGER} opacity="0.65">die →</text>
      <rect x={tx} y={ty} width={54} height={42} rx="3" fill={G} />
      <text x={tx + 27} y={ty + 16} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="1">TRAC</text>
      <text x={tx + 27} y={ty + 30} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#fff" letterSpacing="1">TION</text>
      <text x="360" y="232" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={MUTED} opacity="0.5" letterSpacing="1">FAST NO = GENUINE WIN</text>
      <text x="360" y="246" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.3" letterSpacing="1">EACH STEP IS A FILTER — MOST IDEAS SHOULD DIE AT 01</text>
    </svg>
  )
}

export function MVPScopeVisual() {
  const CX = 360, CY = 128
  return (
    <svg viewBox="0 0 720 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG} />
      <ellipse cx={CX} cy={CY} rx="326" ry="104" fill="none" stroke={BORDER} strokeWidth="0.75" strokeDasharray="3 5" strokeOpacity="0.45" />
      <text x={CX} y={CY - 108} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.35" letterSpacing="1">FULL VISION</text>
      <ellipse cx={CX} cy={CY} rx="228" ry="74" fill="none" stroke={G} strokeWidth="1" strokeDasharray="6 3" strokeOpacity="0.35" />
      <text x={CX} y={CY - 78} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.5">Admin tooling · multi-role · analytics · edge cases</text>
      <ellipse cx={CX} cy={CY} rx="140" ry="46" fill={G} fillOpacity="0.12" stroke={G} strokeWidth="1.5" strokeOpacity="0.65" />
      <text x={CX} y={CY - 22} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.5" letterSpacing="2">MVP CORE</text>
      <text x={CX} y={CY - 6} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} letterSpacing="0.5">ONE USER TYPE</text>
      <text x={CX} y={CY + 10} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} letterSpacing="0.5">ONE JOB</text>
      <text x={CX} y={CY + 26} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} letterSpacing="0.5">ONE WORKFLOW</text>
      <line x1="120" y1="248" x2="600" y2="248" stroke={BORDER} strokeWidth="0.75" strokeOpacity="0.5" />
      <text x={CX} y="262" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={G} opacity="0.65" letterSpacing="0.5">90 days concept → live MVP</text>
      <text x={CX} y="276" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED} opacity="0.5">One complete workflow beats several partial ones.</text>
    </svg>
  )
}

export function TractionMetricsDiagram() {
  const CW = 340, CH = 105, GAP = 8
  const ROW2 = 82
  const ROW3 = ROW2 + CH + GAP
  const barTotalW = 286

  // Burn multiple zone widths (scale 0–6)
  const bmGreen = Math.round(barTotalW * (1.5 / 6))
  const bmAmber = Math.round(barTotalW * (3.5 / 6))
  const bmRed   = barTotalW - bmGreen - bmAmber

  // CAC payback (scale 0–36 months)
  const cacMarkW = Math.round(barTotalW * (18 / 36))

  return (
    <svg viewBox="0 0 720 308" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="308" fill={BG} />

      {/* ── Hero strip ── */}
      <rect x="16" y="16" width="688" height="50" rx="3" fill={G} fillOpacity="0.9" />
      <text x="36" y="50" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700" fill="#fff">127%</text>
      <text x="132" y="43" fontFamily="monospace" fontSize="8" fill="#fff" opacity="0.55" letterSpacing="1">NRR</text>
      <polyline points="165,54 205,46 248,42 292,36 336,39 382,32 428,26 474,22 520,28" fill="none" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.55" />
      <text x="694" y="34" textAnchor="end" fontFamily="monospace" fontSize="7.5" fill="#fff" opacity="0.55" letterSpacing="0.5">ONE HERO METRIC</text>
      <text x="694" y="47" textAnchor="end" fontFamily="monospace" fontSize="7.5" fill="#fff" opacity="0.55" letterSpacing="0.5">FULL WIDTH · FIRST</text>
      <text x="694" y="60" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#fff" opacity="0.3">not buried in a table</text>

      {/* ── TL: Activation ── */}
      <rect x="16" y={ROW2} width={CW} height={CH} rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
      <text x="28" y={ROW2 + 18} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1.5">ACTIVATION</text>
      <rect x="28" y={ROW2 + 28} width={240} height={18} rx="2" fill={G} fillOpacity="0.2" />
      <text x="34" y={ROW2 + 41} fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.7">SIGNED UP</text>
      <text x="272" y={ROW2 + 41} fontFamily="monospace" fontSize="7.5" fill={MUTED} opacity="0.6">100%</text>
      <rect x="28" y={ROW2 + 55} width={156} height={18} rx="2" fill={G} fillOpacity="0.6" />
      <text x="34" y={ROW2 + 68} fontFamily="monospace" fontSize="7.5" fill="#fff" opacity="0.9">ACTIVE</text>
      <text x="188" y={ROW2 + 68} fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.8">~65%</text>
      <text x="28" y={ROW2 + 96} fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.6">Signed up ≠ used. That gap is the real signal.</text>

      {/* ── TR: Retention NRR ── */}
      <rect x={364} y={ROW2} width={CW} height={CH} rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
      <text x="376" y={ROW2 + 18} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1">NET REVENUE RETENTION</text>
      <line x1="376" y1={ROW2 + 75} x2="692" y2={ROW2 + 75} stroke={BORDER} strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="376" y1={ROW2 + 60} x2="692" y2={ROW2 + 60} stroke={AMBER} strokeWidth="0.75" strokeDasharray="4 3" strokeOpacity="0.7" />
      <text x="378" y={ROW2 + 57} fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.8">100% floor</text>
      <polyline points={`394,${ROW2+72} 440,${ROW2+65} 490,${ROW2+55} 550,${ROW2+50} 608,${ROW2+43} 668,${ROW2+38}`} fill="none" stroke={G} strokeWidth="2" strokeOpacity="0.7" />
      <text x="676" y={ROW2 + 36} fontFamily="monospace" fontSize="7" fill={G} opacity="0.85">106%</text>
      <text x="376" y={ROW2 + 96} fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.6">Below 100% = serious flag at Series A.</text>

      {/* ── BL: Burn Multiple ── */}
      <rect x="16" y={ROW3} width={CW} height={CH} rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
      <text x="28" y={ROW3 + 18} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1.5">BURN MULTIPLE</text>
      <rect x="28" y={ROW3 + 48} width={barTotalW} height={18} rx="3" fill={BORDER} fillOpacity="0.4" />
      <rect x="28" y={ROW3 + 48} width={bmGreen} height={18} rx="3" fill={G} fillOpacity="0.75" />
      <rect x={28 + bmGreen} y={ROW3 + 48} width={bmAmber} height={18} fill={AMBER} fillOpacity="0.4" />
      <rect x={28 + bmGreen + bmAmber} y={ROW3 + 48} width={bmRed} height={18} rx="3" fill={DANGER} fillOpacity="0.6" />
      <text x={28 + bmGreen / 2} y={ROW3 + 61} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#fff" fontWeight="700">{'<'}1.5×</text>
      <text x={28 + bmGreen + bmAmber + bmRed / 2} y={ROW3 + 61} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#fff" fontWeight="700">{'>'}5×</text>
      <text x="28" y={ROW3 + 80} fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.5">0</text>
      <text x={28 + barTotalW / 2} y={ROW3 + 80} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.5">3×</text>
      <text x={28 + barTotalW} y={ROW3 + 80} textAnchor="end" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.5">6+</text>
      <text x="28" y={ROW3 + 96} fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.6">{'<'}1.5× = market pulling. {'>'}5× = pushing uphill.</text>

      {/* ── BR: CAC Payback ── */}
      <rect x={364} y={ROW3} width={CW} height={CH} rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
      <text x="376" y={ROW3 + 18} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={G} opacity="0.7" letterSpacing="1.5">CAC PAYBACK</text>
      <rect x="376" y={ROW3 + 48} width={barTotalW} height={18} rx="3" fill={BORDER} fillOpacity="0.4" />
      <rect x="376" y={ROW3 + 48} width={cacMarkW} height={18} rx="3" fill={G} fillOpacity="0.55" />
      <rect x={376 + cacMarkW} y={ROW3 + 48} width={barTotalW - cacMarkW} height={18} rx="3" fill={DANGER} fillOpacity="0.45" />
      <line x1={376 + cacMarkW} y1={ROW3 + 42} x2={376 + cacMarkW} y2={ROW3 + 72} stroke={AMBER} strokeWidth="1.5" strokeDasharray="2 2" />
      <text x={376 + cacMarkW} y={ROW3 + 40} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.9">18mo</text>
      <text x={376 + cacMarkW} y={ROW3 + 82} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.8">Series A limit</text>
      <text x="376" y={ROW3 + 80} fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.5">0</text>
      <text x={376 + barTotalW} y={ROW3 + 80} textAnchor="end" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.5">36mo</text>
      <text x="376" y={ROW3 + 96} fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.6">Over 18 months = hard stop at Series A.</text>
    </svg>
  )
}

// ─── Marketing Funnel illustrations ────────────────────────────────────────────

export function FunnelStageDiagram() {
  const CX = 360
  const stages = [
    { label: 'AWARENESS',     mindset: 'exploratory', metric: 'Reach · CPM',       fill: G,     w: 555, op: 0.88 },
    { label: 'CONSIDERATION', mindset: 'comparing',   metric: 'MQL → SQL rate',    fill: GL,    w: 455, op: 0.82 },
    { label: 'CONVERSION',    mindset: 'deciding',    metric: 'CPA · close rate',  fill: AMBER, w: 348, op: 0.88 },
    { label: 'LOYALTY',       mindset: 'validating',  metric: 'NRR · renewal',     fill: GL,    w: 240, op: 0.72 },
    { label: 'ADVOCACY',      mindset: 'vouching',    metric: 'Referral · NPS',    fill: G,     w: 142, op: 0.86 },
  ]
  const SH = 44, GAP = 5, startY = 20
  return (
    <svg viewBox="0 0 720 296" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="296" fill={BG} />
      <line x1="648" y1="10" x2="648" y2="266" stroke={BORDER} strokeWidth="0.5" strokeOpacity="0.4" />
      <text x="714" y="12" textAnchor="end" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.4" letterSpacing="1">PRIMARY METRIC</text>
      {stages.map((s, i) => {
        const y = startY + i * (SH + GAP)
        const x = CX - s.w / 2
        const midY = y + SH / 2 + 5
        return (
          <g key={i}>
            <rect x={x} y={y} width={s.w} height={SH} rx="3" fill={s.fill} fillOpacity={s.op} />
            <text x={x + 10} y={midY} fontFamily="monospace" fontSize="8" fontWeight="700" fill="#fff" opacity="0.38">0{i + 1}</text>
            <text x={x + 30} y={midY} fontFamily="monospace" fontSize="6.5" fill="#fff" opacity="0.32">{s.mindset}</text>
            <text x={CX} y={midY} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#fff" letterSpacing="0.5">{s.label}</text>
            <text x="714" y={midY} textAnchor="end" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.65">{s.metric}</text>
          </g>
        )
      })}
      <text x={CX} y="278" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.45" letterSpacing="1">ADVOCACY FEEDS AWARENESS — A LOOP, NOT A LINE</text>
      <text x={CX} y="292" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.4">Expansion ARR is 40%+ of new ARR for B2B SaaS above $50M — Loyalty and Advocacy are revenue stages</text>
    </svg>
  )
}

export function ScoringGapDiagram() {
  const BAR_MAX = 220
  const staticPcts  = [5, 5, 90]
  const causalPcts  = [35, 30, 35]
  const stages = ['TOFU', 'MOFU', 'BOFU']
  return (
    <svg viewBox="0 0 720 230" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="230" fill={BG} />

      {/* ── Left: Static scoring ── */}
      <rect x="16" y="16" width="308" height="186" rx="3" fill={BG2} stroke={BORDER} strokeWidth="0.75" />
      <rect x="16" y="16" width="308" height="32" rx="3" fill={MUTED} fillOpacity="0.12" />
      <text x="170" y="37" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={MUTED} letterSpacing="1">STATIC SCORING</text>
      {['Title match', 'Company size', 'Industry tag', 'Geography'].map((sig, i) => (
        <g key={sig}>
          <rect x="30" y={62 + i * 24} width="8" height="8" rx="1" fill={MUTED} fillOpacity="0.25" />
          <text x="46" y={73 + i * 24} fontFamily="system-ui, sans-serif" fontSize="9" fill={MUTED} opacity="0.7">{sig}</text>
        </g>
      ))}
      <text x="30" y="158" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55">MQL → SQL CONVERSION RATE</text>
      <rect x="30" y="164" width={BAR_MAX} height="18" rx="2" fill={MUTED} fillOpacity="0.1" />
      <rect x="30" y="164" width={Math.round(BAR_MAX * 0.14)} height="18" rx="2" fill={MUTED} fillOpacity="0.45" />
      <text x={30 + Math.round(BAR_MAX * 0.14) + 6} y="177" fontFamily="monospace" fontSize="9" fontWeight="700" fill={MUTED} opacity="0.7">13–15%</text>
      <text x="170" y="212" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.5">Demographic data alone. Measures fit, not intent.</text>

      {/* ── Right: Behavioural scoring ── */}
      <rect x="396" y="16" width="308" height="186" rx="3" fill={BG2} stroke={G} strokeWidth="0.75" strokeOpacity="0.5" />
      <rect x="396" y="16" width="308" height="32" rx="3" fill={G} fillOpacity="0.1" />
      <text x="550" y="37" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} letterSpacing="1">BEHAVIOURAL SCORING</text>
      {['Pricing page visit', 'Downloaded guide', 'Webinar attendance', 'Demo request'].map((sig, i) => (
        <g key={sig}>
          <rect x="410" y={62 + i * 24} width="8" height="8" rx="1" fill={G} fillOpacity="0.5" />
          <text x="426" y={73 + i * 24} fontFamily="system-ui, sans-serif" fontSize="9" fill={TEXT} opacity="0.8">{sig}</text>
        </g>
      ))}
      <text x="410" y="158" fontFamily="monospace" fontSize="7" fill={G} opacity="0.6">MQL → SQL CONVERSION RATE</text>
      <rect x="410" y="164" width={BAR_MAX} height="18" rx="2" fill={MUTED} fillOpacity="0.1" />
      <rect x="410" y="164" width={Math.round(BAR_MAX * 0.395)} height="18" rx="2" fill={G} fillOpacity="0.65" />
      <text x={410 + Math.round(BAR_MAX * 0.395) + 6} y="177" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.9">39–40%</text>
      <text x="550" y="212" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={G} opacity="0.55">Engagement signal. Measures intent, not just fit.</text>

      {/* ── Center gap label ── */}
      <text x="360" y="108" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700" fill={G} opacity="0.12">3×</text>
      <text x="360" y="126" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.5" letterSpacing="1">GAP</text>
      <text x="360" y="143" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5">engineering,</text>
      <text x="360" y="154" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5">not content</text>
    </svg>
  )
}

export function AttributionDiagram() {
  const BAR_MAX = 220
  const stages = ['TOFU', 'MOFU', 'BOFU']
  const lastClick = [4, 6, 90]
  const causal    = [35, 30, 35]
  return (
    <svg viewBox="0 0 720 228" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="228" fill={BG} />

      {/* ── Left: Last-click ── */}
      <rect x="16" y="16" width="316" height="182" rx="3" fill={BG2} stroke={DANGER} strokeWidth="0.75" strokeOpacity="0.4" />
      <rect x="16" y="16" width="316" height="32" rx="3" fill={DANGER} fillOpacity="0.08" />
      <text x="174" y="37" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={DANGER} opacity="0.75" letterSpacing="1">LAST-CLICK ATTRIBUTION</text>
      {stages.map((stage, i) => {
        const barW = Math.max(Math.round((lastClick[i] / 100) * BAR_MAX), 4)
        const y = 62 + i * 36
        const color = i === 2 ? DANGER : MUTED
        const op    = i === 2 ? 0.65  : 0.25
        return (
          <g key={stage}>
            <text x="30" y={y + 12} fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">{stage}</text>
            <rect x="72" y={y} width={BAR_MAX} height="18" rx="2" fill={MUTED} fillOpacity="0.1" />
            <rect x="72" y={y} width={barW} height="18" rx="2" fill={color} fillOpacity={op} />
            <text x={72 + barW + 6} y={y + 13} fontFamily="monospace" fontSize="8" fill={color} opacity={i === 2 ? 0.8 : 0.4}>{lastClick[i]}%</text>
          </g>
        )
      })}
      <text x="174" y="183" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={DANGER} opacity="0.65">Systematically over-credits BOFU.</text>
      <text x="174" y="196" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.5">Awareness and nurture look worthless.</text>
      <text x="174" y="214" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.35">where most teams still are in 2026</text>

      {/* ── Right: Causal / MMM ── */}
      <rect x="388" y="16" width="316" height="182" rx="3" fill={BG2} stroke={G} strokeWidth="0.75" strokeOpacity="0.5" />
      <rect x="388" y="16" width="316" height="32" rx="3" fill={G} fillOpacity="0.08" />
      <text x="546" y="37" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.8" letterSpacing="1">CAUSAL / MMM</text>
      {stages.map((stage, i) => {
        const barW = Math.round((causal[i] / 100) * BAR_MAX)
        const y = 62 + i * 36
        return (
          <g key={stage}>
            <text x="402" y={y + 12} fontFamily="monospace" fontSize="8" fill={MUTED} opacity="0.6">{stage}</text>
            <rect x="444" y={y} width={BAR_MAX} height="18" rx="2" fill={MUTED} fillOpacity="0.1" />
            <rect x="444" y={y} width={barW} height="18" rx="2" fill={G} fillOpacity="0.55" />
            <text x={444 + barW + 6} y={y + 13} fontFamily="monospace" fontSize="8" fill={G} opacity="0.75">{causal[i]}%</text>
          </g>
        )
      })}
      <text x="546" y="183" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={G} opacity="0.7">Distributed credit. Accurate stage-level view.</text>
      <text x="546" y="196" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.5">Shows what is actually driving pipeline.</text>
      <text x="546" y="214" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={G} opacity="0.35">Marketing Mix Modelling · incrementality testing</text>
    </svg>
  )
}

export function JourneyMapVisual() {
  const SW = 116, SH = 46, GAP = 18, startX = 34
  const stages = [
    { label: 'AWARENESS',     sub: 'exploratory', fill: G,    op: 0.55 },
    { label: 'CONSIDERATION', sub: 'comparing',   fill: GL,   op: 0.72 },
    { label: 'PURCHASE',      sub: 'deciding',    fill: G,    op: 0.90 },
    { label: 'ONBOARDING',    sub: 'validating',  fill: GL,   op: 0.60 },
    { label: 'EXPANSION',     sub: 'compounding', fill: G,    op: 0.45 },
  ]
  const boxY = 20, boxBot = 66
  return (
    <svg viewBox="0 0 720 215" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="215" fill={BG2} />
      {[1, 2, 3].map(i => (
        <line key={i} x1="0" y1={70 + i * 44} x2="720" y2={70 + i * 44} stroke={BORDER} strokeWidth="0.3" opacity="0.35" />
      ))}
      <defs>
        <marker id="jmFwd" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={G} opacity="0.55" />
        </marker>
        <marker id="jmLoop" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={AMBER} opacity="0.78" />
        </marker>
      </defs>
      {stages.map((s, i) => {
        const x = startX + i * (SW + GAP)
        const cx = x + SW / 2
        return (
          <g key={s.label}>
            <rect x={x} y={boxY} width={SW} height={SH} rx="2" fill={s.fill} fillOpacity={s.op} />
            <text x={cx} y={boxY + 17} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#F5F4F0" letterSpacing="1" opacity="0.95">{s.label}</text>
            <text x={cx} y={boxY + 32} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill="#F5F4F0" opacity="0.6">{s.sub}</text>
            {[24, 58, 92].map(dx => (
              <circle key={dx} cx={x + dx} cy={76} r="3" fill={s.fill} fillOpacity={0.38} />
            ))}
            {i < stages.length - 1 && (
              <line x1={x + SW + 2} y1={boxY + SH / 2} x2={x + SW + GAP - 2} y2={boxY + SH / 2} stroke={G} strokeWidth="1.2" opacity="0.45" markerEnd="url(#jmFwd)" />
            )}
          </g>
        )
      })}
      {/* Arc 1: CONSIDERATION(cx=226) → AWARENESS(cx=92) */}
      <path d="M 226 66 C 226 118 92 118 92 66" fill="none" stroke={AMBER} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.65" markerEnd="url(#jmLoop)" />
      <text x="159" y="113" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.7" letterSpacing="0.5">RE-EVALUATION</text>
      {/* Arc 2: ONBOARDING(cx=494) → CONSIDERATION(cx=226) */}
      <path d="M 494 66 C 494 150 226 150 226 66" fill="none" stroke={AMBER} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.48" markerEnd="url(#jmLoop)" />
      <text x="360" y="146" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.55" letterSpacing="0.5">RE-ENTRY</text>
      <text x="360" y="173" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.38" letterSpacing="1.5">CUSTOMERS LOOP — DESIGN FOR IT</text>
      <text x="360" y="186" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fill={MUTED} opacity="0.45">map both the forward path and the return</text>
    </svg>
  )
}

export function CXMetricsDiagram() {
  const COL_W = 210, GAP = 15
  const startX = (720 - 3 * COL_W - 2 * GAP) / 2  // = 30
  const cols = [
    { key: 'NPS',  full: 'Net Promoter Score',    fill: G,    measures: 'Likelihood to recommend the brand', bestFor: 'Overall relationship health · Long-horizon trend tracking' },
    { key: 'CSAT', full: 'Customer Satisfaction',  fill: GL,   measures: 'Satisfaction with a specific interaction', bestFor: 'Point-in-time touchpoint quality — support, onboarding, checkout' },
    { key: 'CES',  full: 'Customer Effort Score',  fill: AMBER, measures: 'How much effort a task required', bestFor: 'Diagnosing friction in a specific flow — the most actionable of the three' },
  ]
  return (
    <svg viewBox="0 0 720 268" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="268" fill={BG2} />
      {cols.map((c, i) => {
        const x = startX + i * (COL_W + GAP)
        return (
          <g key={c.key}>
            <rect x={x} y="16" width={COL_W} height={COL_W * 1.14} rx="2" fill={BG} stroke={BORDER} strokeWidth="0.6" strokeOpacity="0.6" />
            {/* Header band */}
            <rect x={x} y="16" width={COL_W} height="44" rx="2" fill={c.fill} fillOpacity="0.75" />
            <text x={x + COL_W / 2} y="36" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#F5F4F0" opacity="0.95">{c.key}</text>
            <text x={x + COL_W / 2} y="51" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="6.5" fill="#F5F4F0" opacity="0.75" letterSpacing="0.5">{c.full.toUpperCase()}</text>
            {/* Measures */}
            <text x={x + 14} y="76" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55" letterSpacing="1">MEASURES</text>
            <text x={x + 14} y="90" fontFamily="system-ui, sans-serif" fontSize="9.5" fill={TEXT} opacity="0.75">{c.measures}</text>
            {/* Best for */}
            <text x={x + 14} y="112" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.55" letterSpacing="1">BEST FOR</text>
            <text x={x + 14} y="126" fontFamily="system-ui, sans-serif" fontSize="8.5" fill={TEXT} opacity="0.65">{c.bestFor.split(' · ')[0]}</text>
            {c.bestFor.includes(' · ') && (
              <text x={x + 14} y="138" fontFamily="system-ui, sans-serif" fontSize="8.5" fill={TEXT} opacity="0.65">{c.bestFor.split(' · ').slice(1).join(' · ')}</text>
            )}
            <line x1={x + 14} y1="150" x2={x + COL_W - 14} y2="150" stroke={BORDER} strokeWidth="0.5" />
          </g>
        )
      })}
      {/* NPS visual: horizontal scale */}
      {(() => {
        const x = startX, bx = x + 15, bw = 180, by = 158, bh = 16
        return (
          <g>
            <rect x={bx} y={by} width={bw / 2} height={bh} rx="1" fill={DANGER} fillOpacity="0.12" />
            <rect x={bx + bw / 2} y={by} width={bw / 2} height={bh} rx="1" fill={G} fillOpacity="0.22" />
            <line x1={bx + bw / 2} y1={by - 2} x2={bx + bw / 2} y2={by + bh + 2} stroke={MUTED} strokeWidth="0.8" strokeOpacity="0.4" />
            <circle cx={bx + bw * 0.72} cy={by + bh / 2} r="4" fill={G} fillOpacity="0.8" />
            <text x={bx} y={by + bh + 12} fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5">−100</text>
            <text x={bx + bw / 2} y={by + bh + 12} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5">0</text>
            <text x={bx + bw} y={by + bh + 12} textAnchor="end" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5">+100</text>
            <text x={bx + bw / 2} y="212" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={G} opacity="0.38" letterSpacing="0.5">RELATIONSHIP LEVEL</text>
          </g>
        )
      })()}
      {/* CSAT visual: 4 point-in-time bars */}
      {(() => {
        const x = startX + COL_W + GAP
        const heights = [50, 32, 62, 40]
        const labels = ['Support', 'Email', 'Checkout', 'Chat']
        const barW = 26, gap = 11, base = 212
        const totalW = heights.length * barW + (heights.length - 1) * gap
        const bx = x + (COL_W - totalW) / 2
        return (
          <g>
            {heights.map((h, j) => (
              <g key={j}>
                <rect x={bx + j * (barW + gap)} y={base - h} width={barW} height={h} rx="1" fill={GL} fillOpacity="0.62" />
                <text x={bx + j * (barW + gap) + barW / 2} y={base + 12} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="6.5" fill={MUTED} opacity="0.5">{labels[j]}</text>
              </g>
            ))}
            <text x={x + COL_W / 2} y="232" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={GL} opacity="0.45" letterSpacing="0.5">TOUCHPOINT LEVEL</text>
          </g>
        )
      })()}
      {/* CES visual: LOW/MED/HIGH segments */}
      {(() => {
        const x = startX + 2 * (COL_W + GAP)
        const bx = x + 15, bw = 60, by = 162, bh = 20
        const segs = [{ label: 'LOW', fill: G }, { label: 'MED', fill: AMBER }, { label: 'HIGH', fill: DANGER }]
        return (
          <g>
            {segs.map((s, j) => (
              <g key={j}>
                <rect x={bx + j * (bw + 2)} y={by} width={bw} height={bh} rx="1" fill={s.fill} fillOpacity={j === 0 ? 0.72 : j === 1 ? 0.6 : 0.4} />
                <text x={bx + j * (bw + 2) + bw / 2} y={by + 13} textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#F5F4F0" opacity="0.9">{s.label}</text>
              </g>
            ))}
            {/* Arrow pointing to LOW */}
            <path d={`M ${bx + 30} ${by - 8} L ${bx + 30} ${by - 2}`} stroke={G} strokeWidth="1.2" markerEnd="url(#cesArr)" opacity="0.65" />
            <text x={bx + 30} y={by - 12} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={G} opacity="0.7">TARGET</text>
            <text x={x + COL_W / 2} y="202" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.45" letterSpacing="0.5">EFFORT REQUIRED</text>
            <text x={x + COL_W / 2} y="218" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={TEXT} opacity="0.55">Lower = better experience</text>
          </g>
        )
      })()}
      <defs>
        <marker id="cesArr" markerWidth="5" markerHeight="5" refX="2.5" refY="5" orient="auto">
          <path d="M0,0 L5,0 L2.5,5 Z" fill={G} opacity="0.7" />
        </marker>
      </defs>
      {/* Bottom note */}
      <rect x="0" y="250" width="720" height="18" fill={G} fillOpacity="0.06" />
      <text x="360" y="263" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} opacity="0.55" letterSpacing="0.5">NPS tells you IF there is a problem · CSAT + CES tell you WHERE</text>
    </svg>
  )
}

export function DataUnificationDiagram() {
  const sources = [
    { label: 'GA4 · Behavioral', sub: 'clicks · sessions · heatmaps' },
    { label: 'Salesforce · Pipeline', sub: 'pipeline · response times' },
    { label: 'NPS · Surveys', sub: 'solicited voice of customer' },
    { label: 'Support · Tickets', sub: 'unsolicited friction signals' },
  ]
  const outputs = [
    { label: 'CDJ Dashboard', sub: 'exec / waterfall / diagnostic' },
    { label: 'Team Routing', sub: 'Jira / Azure DevOps delivery' },
    { label: 'Financial Metrics', sub: 'CLV · churn · NRR linkage' },
  ]
  const SRC_W = 196, SRC_H = 40, SRC_GAP = 10, startY = 26
  const CX = 236, CW = 168
  const OUT_X = 432, OUT_W = 270
  const OUT_H = 50, OUT_GAP = 10
  const outStartY = startY + 10
  return (
    <svg viewBox="0 0 720 248" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="248" fill={BG2} />
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="0" y1={30 + i * 44} x2="720" y2={30 + i * 44} stroke={BORDER} strokeWidth="0.3" opacity="0.3" />
      ))}
      {/* Source boxes */}
      {sources.map((s, i) => {
        const y = startY + i * (SRC_H + SRC_GAP)
        const cy = y + SRC_H / 2
        return (
          <g key={s.label}>
            <rect x="16" y={y} width={SRC_W} height={SRC_H} rx="2" fill={BG} stroke={BORDER} strokeWidth="0.6" />
            <text x="28" y={y + 15} fontFamily="monospace" fontSize="8" fontWeight="700" fill={TEXT} opacity="0.7">{s.label}</text>
            <text x="28" y={y + 29} fontFamily="system-ui, sans-serif" fontSize="7" fill={MUTED} opacity="0.55">{s.sub}</text>
            {/* Arrow to center */}
            <line x1={16 + SRC_W + 2} y1={cy} x2={CX - 2} y2={cy} stroke={G} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.38" markerEnd="url(#duArr)" />
          </g>
        )
      })}
      {/* Center box */}
      <rect x={CX} y={startY} width={CW} height={4 * SRC_H + 3 * SRC_GAP} rx="3" fill={G} fillOpacity="0.08" stroke={G} strokeWidth="1" strokeOpacity="0.45" />
      <text x={CX + CW / 2} y={startY + 64} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.75" letterSpacing="0.5">UNIFIED</text>
      <text x={CX + CW / 2} y={startY + 80} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.75" letterSpacing="0.5">CUSTOMER</text>
      <text x={CX + CW / 2} y={startY + 96} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={G} opacity="0.75" letterSpacing="0.5">VIEW</text>
      <text x={CX + CW / 2} y={startY + 115} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill={MUTED} opacity="0.45">single source of truth</text>
      {/* Output boxes */}
      {outputs.map((o, i) => {
        const y = outStartY + i * (OUT_H + OUT_GAP)
        const cy = y + OUT_H / 2
        const unifiedCY = startY + (4 * SRC_H + 3 * SRC_GAP) / 2
        return (
          <g key={o.label}>
            <rect x={OUT_X} y={y} width={OUT_W} height={OUT_H} rx="2" fill={GL} fillOpacity="0.1" stroke={GL} strokeWidth="0.5" strokeOpacity="0.4" />
            <text x={OUT_X + 14} y={y + 19} fontFamily="monospace" fontSize="8" fontWeight="700" fill={G} opacity="0.72">{o.label}</text>
            <text x={OUT_X + 14} y={y + 34} fontFamily="system-ui, sans-serif" fontSize="7.5" fill={MUTED} opacity="0.55">{o.sub}</text>
            {/* Arrow from center */}
            <line x1={CX + CW + 2} y1={cy} x2={OUT_X - 2} y2={cy} stroke={G} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.35" markerEnd="url(#duArr)" />
          </g>
        )
      })}
      <defs>
        <marker id="duArr" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={G} opacity="0.45" />
        </marker>
      </defs>
      {/* Footer */}
      <rect x="0" y="232" width="720" height="16" fill={G} fillOpacity="0.05" />
      <text x="360" y="244" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} opacity="0.45" letterSpacing="0.5">CONNECT VOICE · ANALYTICS · DELIVERY · BI INTO ONE OPERATING SYSTEM</text>
    </svg>
  )
}

export function AIUsageTypologyDiagram() {
  const modes = [
    { label: 'TASK',       sub: 'Execution',          when: 'Daily, as needed',       purpose: 'Build, draft, fix, execute',   level: 0.88, fill: G,    note: 'Already established' },
    { label: 'LEARNING',   sub: 'Skill-building',     when: 'Weekly, 1 session',      purpose: 'Close one specific gap',       level: 0.38, fill: GL,   note: 'Usually underdone' },
    { label: 'REFLECTION', sub: 'Pattern recognition', when: 'Monthly, structured',   purpose: 'Notice your own patterns',     level: 0.12, fill: AMBER, note: 'Highest leverage' },
  ]
  const COL_W = 208, GAP = 16
  const startX = Math.round((720 - 3 * COL_W - 2 * GAP) / 2)  // 32
  const CONT_H = 70, CONT_Y = 130, CONT_BOT = CONT_Y + CONT_H
  const POT_LINE_Y = CONT_Y + Math.round(CONT_H * 0.2)  // 80% fill potential line
  return (
    <svg viewBox="0 0 720 272" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="272" fill={BG2} />
      {modes.map((m, i) => {
        const x = startX + i * (COL_W + GAP)
        const cx = x + COL_W / 2
        const fillH = Math.round(CONT_H * m.level)
        const fillY = CONT_BOT - fillH
        return (
          <g key={m.label}>
            <rect x={x} y="16" width={COL_W} height="222" rx="2" fill={BG} stroke={BORDER} strokeWidth="0.5" />
            <rect x={x} y="16" width={COL_W} height="42" rx="2" fill={m.fill} fillOpacity="0.78" />
            <text x={cx} y="33" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#F5F4F0" opacity="0.95">{m.label}</text>
            <text x={cx} y="48" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill="#F5F4F0" opacity="0.65">{m.sub.toUpperCase()}</text>
            <text x={x + 14} y="74" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5" letterSpacing="0.8">WHEN</text>
            <text x={x + 14} y="86" fontFamily="system-ui, sans-serif" fontSize="9" fill={TEXT} opacity="0.7">{m.when}</text>
            <text x={x + 14} y="103" fontFamily="monospace" fontSize="6.5" fill={MUTED} opacity="0.5" letterSpacing="0.8">PURPOSE</text>
            <text x={x + 14} y="115" fontFamily="system-ui, sans-serif" fontSize="9" fill={TEXT} opacity="0.7">{m.purpose}</text>
            <line x1={x + 12} y1="125" x2={x + COL_W - 12} y2="125" stroke={BORDER} strokeWidth="0.4" />
            {/* Container */}
            <rect x={x + 16} y={CONT_Y} width={COL_W - 32} height={CONT_H} rx="1" fill={BG2} stroke={BORDER} strokeWidth="0.4" />
            {/* Fill from bottom */}
            <rect x={x + 16} y={fillY} width={COL_W - 32} height={fillH} rx="1" fill={m.fill} fillOpacity="0.45" />
            {/* Potential line (80% fill target) */}
            <line x1={x + 16} y1={POT_LINE_Y} x2={x + COL_W - 16} y2={POT_LINE_Y} stroke={m.fill} strokeWidth="1" strokeDasharray="3 2" opacity="0.55" />
            {i === 0 && (
              <text x={x + COL_W - 18} y={POT_LINE_Y - 3} textAnchor="end" fontFamily="monospace" fontSize="5.5" fill={MUTED} opacity="0.5">TARGET</text>
            )}
            {/* Level % */}
            <text x={cx} y={CONT_BOT + 14} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={m.fill} opacity="0.75">{Math.round(m.level * 100)}%</text>
            <text x={cx} y="226" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.55">{m.note}</text>
          </g>
        )
      })}
      <text x="360" y="258" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} opacity="0.35" letterSpacing="1.5">STRUCTURE IS THE DECIDING FACTOR — NOT VOLUME</text>
    </svg>
  )
}

export function WellbeingBoundaryDiagram() {
  const pairs = [
    { left: 'Structured reflection on a specific situation',     right: 'Open-ended venting that loops without resolving' },
    { left: 'Rehearsing a hard conversation before having it',    right: 'Having the conversation with AI instead of the person' },
    { left: 'Learning a skill with practice and feedback',        right: 'Passive Q&A that feels productive but isn\'t structured' },
    { left: 'Turning real work into something shareable',         right: 'Producing generic content just to seem active or visible' },
    { left: 'Mental health literacy and coping-skill practice',   right: 'Treating AI as professional therapy during a real crisis' },
    { left: 'AI\'s pushback to stress-test your thinking',        right: 'AI\'s agreeableness confirming what you already believe' },
  ]
  const ROW_H = 34, ROW_START = 68
  return (
    <svg viewBox="0 0 720 282" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="282" fill={BG2} />
      {/* Left panel header */}
      <rect x="16" y="16" width="334" height="40" rx="2" fill={G} fillOpacity="0.72" />
      <text x="183" y="34" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#F5F4F0" opacity="0.95" letterSpacing="1.5">GENUINE USE</text>
      <text x="183" y="47" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill="#F5F4F0" opacity="0.65">structured · bounded · growth-oriented</text>
      {/* Right panel header */}
      <rect x="370" y="16" width="334" height="40" rx="2" fill={AMBER} fillOpacity="0.7" />
      <text x="537" y="34" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#F5F4F0" opacity="0.95" letterSpacing="1.5">WATCH FOR THIS INSTEAD</text>
      <text x="537" y="47" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill="#F5F4F0" opacity="0.65">substitution · avoidance · echo-chamber</text>
      {/* Center divider */}
      <line x1="360" y1="56" x2="360" y2="270" stroke={BORDER} strokeWidth="0.6" />
      {/* Rows */}
      {pairs.map((p, i) => {
        const y = ROW_START + i * ROW_H
        const cy = y + ROW_H / 2
        const alt = i % 2 === 0
        return (
          <g key={i}>
            {alt && <rect x="16" y={y} width="334" height={ROW_H} fill={G} fillOpacity="0.04" />}
            {alt && <rect x="370" y={y} width="334" height={ROW_H} fill={AMBER} fillOpacity="0.04" />}
            <circle cx="30" cy={cy} r="3" fill={G} fillOpacity="0.55" />
            <text x="40" y={cy + 4} fontFamily="system-ui, sans-serif" fontSize="8.5" fill={TEXT} opacity="0.72">{p.left}</text>
            <circle cx="384" cy={cy} r="3" fill={AMBER} fillOpacity="0.6" />
            <text x="394" y={cy + 4} fontFamily="system-ui, sans-serif" fontSize="8.5" fill={TEXT} opacity="0.65">{p.right}</text>
            <line x1="16" y1={y + ROW_H} x2="704" y2={y + ROW_H} stroke={BORDER} strokeWidth="0.3" opacity="0.5" />
          </g>
        )
      })}
      {/* Footer */}
      <text x="360" y="275" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} opacity="0.45" letterSpacing="0.5">AI companionship: real but temporary · not a substitute for connection that compounds</text>
    </svg>
  )
}

export function UsageRhythmDiagram() {
  const rows = [
    { cadence: 'DAILY',    sub: 'as needed',   activity: 'Task-directed AI use — build, draft, fix, execute',              purpose: 'Execution',          color: G,    dots: 14, r: 4,  spacing: 14 },
    { cadence: 'WEEKLY',   sub: '~20 min',     activity: 'Reflection session — what worked, what didn\'t, one pattern noticed', purpose: 'Self-improvement',  color: GL,   dots: 4,  r: 6,  spacing: 28 },
    { cadence: 'MONTHLY',  sub: 'one piece',   activity: 'Existing work turned into something shareable',                  purpose: 'Opportunity',        color: G,    dots: 1,  r: 10, spacing: 0  },
    { cadence: 'ONGOING',  sub: 'standing check', activity: 'Am I reaching for AI instead of a person — or in addition to one?', purpose: 'Wellbeing',       color: AMBER,dots: 0,  r: 0,  spacing: 0  },
  ]
  const ROW_H = 44, ROW_GAP = 8, START_Y = 16
  const DOT_START_X = 464
  return (
    <svg viewBox="0 0 720 240" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="240" fill={BG2} />
      {rows.map((r, i) => {
        const y = START_Y + i * (ROW_H + ROW_GAP)
        const cy = y + ROW_H / 2
        return (
          <g key={r.cadence}>
            <rect x="16" y={y} width="688" height={ROW_H} rx="2" fill={BG} stroke={BORDER} strokeWidth="0.4" />
            {/* Cadence label */}
            <rect x="16" y={y} width="88" height={ROW_H} rx="2" fill={r.color} fillOpacity="0.65" />
            <text x="60" y={cy - 4} textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#F5F4F0" opacity="0.95">{r.cadence}</text>
            <text x="60" y={cy + 9} textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="6.5" fill="#F5F4F0" opacity="0.65">{r.sub}</text>
            {/* Activity + purpose */}
            <text x="112" y={cy - 3} fontFamily="system-ui, sans-serif" fontSize="9" fill={TEXT} opacity="0.72">{r.activity}</text>
            <text x="112" y={cy + 11} fontFamily="monospace" fontSize="6.5" fill={r.color} opacity="0.55" letterSpacing="0.5">{r.purpose.toUpperCase()}</text>
            {/* Density visual */}
            {r.dots > 0 && Array.from({ length: r.dots }).map((_, j) => (
              <circle key={j} cx={DOT_START_X + j * r.spacing} cy={cy} r={r.r} fill={r.color} fillOpacity={0.5 - j * 0.02} />
            ))}
            {r.cadence === 'ONGOING' && (
              <>
                <line x1={DOT_START_X} y1={cy} x2={692} y2={cy} stroke={AMBER} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.55" />
                <text x="580" y={cy - 5} fontFamily="monospace" fontSize="6.5" fill={AMBER} opacity="0.6" textAnchor="middle">ALWAYS PRESENT</text>
              </>
            )}
          </g>
        )
      })}
      <text x="360" y="233" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fill={MUTED} opacity="0.45" fontStyle="italic">&ldquo;Instead of a person, or in addition to one?&rdquo; — the question worth asking regularly</text>
    </svg>
  )
}

// ── AI Hallucination Reduction Diagrams ──────────────────────────────────────

export function CalibrationVsAccuracyDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', DANGER = '#C0392B', AMBER = '#D4890A'
  const panelW = 300, gap = 40, padX = 40, padY = 28

  return (
    <svg viewBox="0 0 720 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG2} />

      {/* Divider label */}
      <text x="360" y="20" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">ACCURACY-FOCUSED vs CALIBRATION-FOCUSED</text>

      {/* ── Left panel: Accuracy model ── */}
      <rect x={padX} y={padY + 8} width={panelW} height={220} rx="3" fill={BG} stroke={BORDER} strokeWidth="1" />
      <text x={padX + panelW / 2} y={padY + 26} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED} letterSpacing="1">ACCURACY-FOCUSED</text>

      {/* 95% correct block */}
      <rect x={padX + 20} y={padY + 44} width={panelW - 40} height={110} rx="2" fill={GL} opacity="0.18" />
      <rect x={padX + 20} y={padY + 44} width={panelW - 40} height={110} rx="2" fill="none" stroke={GL} strokeWidth="1" />
      <text x={padX + panelW / 2} y={padY + 90} textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="700" fill={G}>95%</text>
      <text x={padX + panelW / 2} y={padY + 110} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} letterSpacing="1">CONFIDENT · CORRECT</text>
      <text x={padX + panelW / 2} y={padY + 126} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>answers delivered with certainty</text>

      {/* 5% wrong block — danger */}
      <rect x={padX + 20} y={padY + 162} width={panelW - 40} height={52} rx="2" fill={DANGER} opacity="0.12" />
      <rect x={padX + 20} y={padY + 162} width={panelW - 40} height={52} rx="2" fill="none" stroke={DANGER} strokeWidth="1" opacity="0.5" />
      <text x={padX + panelW / 2} y={padY + 183} textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill={DANGER}>5%</text>
      <text x={padX + panelW / 2} y={padY + 200} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={DANGER} letterSpacing="1">SILENTLY WRONG</text>
      <text x={padX + panelW / 2} y={padY + 212} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>poisons every downstream decision</text>

      {/* ── Right panel: Calibration model ── */}
      <rect x={padX + panelW + gap} y={padY + 8} width={panelW} height={220} rx="3" fill={BG} stroke={BORDER} strokeWidth="1" />
      <text x={padX + panelW + gap + panelW / 2} y={padY + 26} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED} letterSpacing="1">CALIBRATION-FOCUSED</text>

      {/* 80% answered block */}
      <rect x={padX + panelW + gap + 20} y={padY + 44} width={panelW - 40} height={90} rx="2" fill={G} opacity="0.14" />
      <rect x={padX + panelW + gap + 20} y={padY + 44} width={panelW - 40} height={90} rx="2" fill="none" stroke={G} strokeWidth="1" />
      <text x={padX + panelW + gap + panelW / 2} y={padY + 88} textAnchor="middle" fontFamily="monospace" fontSize="24" fontWeight="700" fill={G}>80%</text>
      <text x={padX + panelW + gap + panelW / 2} y={padY + 108} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} letterSpacing="1">CONFIDENT · VERIFIED</text>

      {/* 20% refused block — amber */}
      <rect x={padX + panelW + gap + 20} y={padY + 142} width={panelW - 40} height={72} rx="2" fill={AMBER} opacity="0.12" />
      <rect x={padX + panelW + gap + 20} y={padY + 142} width={panelW - 40} height={72} rx="2" fill="none" stroke={AMBER} strokeWidth="1" opacity="0.5" />
      <text x={padX + panelW + gap + panelW / 2} y={padY + 167} textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill={AMBER}>20%</text>
      <text x={padX + panelW + gap + panelW / 2} y={padY + 184} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={AMBER} letterSpacing="1">"I CANNOT ANSWER THIS"</text>
      <text x={padX + panelW + gap + panelW / 2} y={padY + 198} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>flags exactly where to double-check</text>
      <text x={padX + panelW + gap + panelW / 2} y={padY + 209} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>AA-Omniscience: 0% hallucination</text>

      {/* Bottom label */}
      <text x="360" y="272" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} letterSpacing="1">THE WINNING MOVE IS OFTEN NOT ANSWERING · CALIBRATION &gt; ACCURACY</text>
    </svg>
  )
}

export function PromptTechniquesRanking() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  const techniques = [
    { rank: 1, label: 'Ground in source material — restrict explicitly', tier: 'top',    barW: 220 },
    { rank: 2, label: 'Authorise "I don\'t know" explicitly',            tier: 'top',    barW: 210 },
    { rank: 3, label: 'Maximum specificity — narrow scope, dated',       tier: 'top',    barW: 198 },
    { rank: 4, label: 'Separate knowns from unknowns before answering',  tier: 'mid',    barW: 172 },
    { rank: 5, label: 'Chain-of-thought — show the reasoning',           tier: 'mid',    barW: 160 },
    { rank: 6, label: 'Require sources + confidence per claim',          tier: 'mid',    barW: 148 },
    { rank: 7, label: 'Constrained output format or schema',             tier: 'mid',    barW: 136 },
    { rank: 8, label: 'Two-step verification pass',                      tier: 'mid',    barW: 124 },
    { rank: 9, label: 'Anchor to a real output example',                 tier: 'low',    barW: 104 },
    { rank: 10, label: 'System-level refusal boundary',                   tier: 'low',    barW: 92 },
    { rank: 11, label: 'Lower temperature (0.0–0.2)',                     tier: 'low',    barW: 76 },
  ]

  const rowH = 20, startY = 36, labelX = 52

  const tierColor = (tier: string) => tier === 'top' ? G : tier === 'mid' ? GL : MUTED

  return (
    <svg viewBox="0 0 720 272" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="272" fill={BG2} />
      <text x="360" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">11 TECHNIQUES · RANKED BY LEVERAGE</text>

      {/* Column headers */}
      <text x={labelX} y={startY - 4} fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">TECHNIQUE</text>
      <text x={labelX + 320} y={startY - 4} fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">LEVERAGE</text>

      {techniques.map((t, i) => {
        const y = startY + i * rowH
        const c = tierColor(t.tier)
        const isTop = t.tier === 'top'
        return (
          <g key={t.rank}>
            {/* Row bg */}
            <rect x={28} y={y} width={664} height={rowH - 1} fill={i % 2 === 0 ? BG : BG2} />
            {/* Rank */}
            <text x={40} y={y + 13} fontFamily="monospace" fontSize="7.5" fill={MUTED}>{String(t.rank).padStart(2, '0')}</text>
            {/* Label */}
            <text x={labelX} y={y + 13} fontFamily="monospace" fontSize="7.5" fill={isTop ? TEXT : MUTED} fontWeight={isTop ? '600' : '400'}>{t.label}</text>
            {/* Bar */}
            <rect x={labelX + 300} y={y + 4} width={t.barW} height={11} rx="1" fill={c} opacity={isTop ? 0.7 : t.tier === 'mid' ? 0.45 : 0.25} />
          </g>
        )
      })}

      {/* Tier labels on right */}
      <text x={692} y={startY + 30} textAnchor="end" fontFamily="monospace" fontSize="7" fill={G} letterSpacing="1">TOP</text>
      <text x={692} y={startY + 114} textAnchor="end" fontFamily="monospace" fontSize="7" fill={GL} letterSpacing="1">MID</text>
      <text x={692} y={startY + 186} textAnchor="end" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">LOW</text>

      {/* Tier dividers */}
      <line x1={28} y1={startY + rowH * 3} x2={692} y2={startY + rowH * 3} stroke={BORDER} strokeWidth="0.8" strokeDasharray="4 3" />
      <line x1={28} y1={startY + rowH * 8} x2={692} y2={startY + rowH * 8} stroke={BORDER} strokeWidth="0.8" strokeDasharray="4 3" />

      <text x="360" y="265" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">EACH TECHNIQUE PUSHES THE MODEL TOWARD: ADMIT UNCERTAINTY · DON'T FILL GAPS</text>
    </svg>
  )
}

export function TwoStepVerificationDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  return (
    <svg viewBox="0 0 720 228" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="228" fill={BG2} />
      <text x="360" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">TWO-STEP VERIFICATION · GENERATE THEN AUDIT</text>

      {/* Step 1 box */}
      <rect x="44" y="32" width="260" height="148" rx="3" fill={BG} stroke={G} strokeWidth="1" opacity="0.9" />
      <rect x="44" y="32" width="260" height="28" rx="3" fill={G} opacity="0.8" />
      <text x="174" y="51" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="2">STEP 1 · GENERATE</text>
      <text x="174" y="84" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">MODEL AS GENERATOR</text>
      <text x="174" y="104" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Answers the question.</text>
      <text x="174" y="120" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Produces full response.</text>
      <text x="174" y="136" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Fluency-optimised mode —</text>
      <text x="174" y="152" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>fills gaps without flagging.</text>
      <text x="174" y="168" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>original question → first-pass answer</text>

      {/* Arrow */}
      <line x1="316" y1="106" x2="400" y2="106" stroke={GL} strokeWidth="1.5" markerEnd="url(#tsva)" />
      <text x="358" y="98" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={GL} letterSpacing="1">FEED</text>
      <text x="358" y="118" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={GL} letterSpacing="1">BACK</text>
      <defs>
        <marker id="tsva" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={GL} />
        </marker>
      </defs>

      {/* Step 2 box */}
      <rect x="412" y="32" width="264" height="148" rx="3" fill={BG} stroke={AMBER} strokeWidth="1" opacity="0.9" />
      <rect x="412" y="32" width="264" height="28" rx="3" fill={AMBER} opacity="0.75" />
      <text x="544" y="51" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="2">STEP 2 · AUDIT</text>
      <text x="544" y="84" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">MODEL AS AUDITOR</text>
      <text x="544" y="104" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Review your answer above.</text>
      <text x="544" y="120" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Flag claims under 90% confident.</text>
      <text x="544" y="136" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Note logical inconsistencies.</text>
      <text x="544" y="152" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>Score your overall confidence.</text>
      <text x="544" y="168" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>structurally different task from generating</text>

      {/* Key insight strip */}
      <rect x="44" y="192" width="632" height="26" rx="2" fill={G} opacity="0.08" stroke={G} strokeWidth="0.8" />
      <text x="360" y="208" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} letterSpacing="1">AUDITING IS NOT "TRY HARDER" — IT IS A DIFFERENT COGNITIVE MODE · "ARE YOU SURE?" WITHOUT STRUCTURE JUST PRODUCES A CONFIDENT RESTATEMENT</text>
    </svg>
  )
}

// ── Social Media Algorithms + KPIs Diagrams ────────────────────────────────

export function PlatformEngagementDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  // Chart area
  const chartH = 160
  const baseY = 220
  const padX = 60
  const maxRate = 6 // percent — y-axis max
  const scale = chartH / maxRate

  const platforms = [
    { label: 'LinkedIn',  rate: 5.20, carouselRate: 21.77, color: G,    carouselColor: G    },
    { label: 'TikTok',   rate: 3.70, carouselRate: null,  color: GL,   carouselColor: null },
    { label: 'Instagram', rate: 0.48, carouselRate: 6.90,  color: MUTED, carouselColor: GL  },
    { label: 'X',         rate: 0.12, carouselRate: null,  color: MUTED, carouselColor: null },
  ]

  const totalBars = 4
  const barW = 80
  const gapW = 52
  const totalW = totalBars * barW + (totalBars - 1) * gapW // = 476
  const startX = padX + (600 - totalW) / 2

  // Y-axis gridlines at 0, 2, 4, 6
  const gridLines = [0, 1, 2, 3, 4, 5, 6]

  return (
    <svg viewBox="0 0 720 290" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="290" fill={BG2} />
      <text x="360" y="20" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">2026 MEDIAN ENGAGEMENT RATE · BY PLATFORM</text>

      {/* Y-axis gridlines */}
      {gridLines.map((v) => {
        const y = baseY - v * scale
        return (
          <g key={v}>
            <line x1={startX - 8} y1={y} x2={startX + totalW + 20} y2={y} stroke={BORDER} strokeWidth={v === 0 ? 1 : 0.5} opacity={v === 0 ? 0.7 : 0.4} />
            <text x={startX - 14} y={y + 4} textAnchor="end" fontFamily="monospace" fontSize="7" fill={MUTED}>{v}%</text>
          </g>
        )
      })}

      {/* Bars */}
      {platforms.map((p, i) => {
        const x = startX + i * (barW + gapW)
        const barH = Math.max(p.rate * scale, 3)
        const barY = baseY - barH
        return (
          <g key={p.label}>
            <rect x={x} y={barY} width={barW} height={barH} rx="2" fill={p.color} opacity={i === 0 ? 0.85 : i === 1 ? 0.65 : 0.35} />
            {/* Rate label above bar */}
            <text x={x + barW / 2} y={barY - 8} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="600" fill={p.color} opacity={i < 2 ? 0.9 : 0.6}>{p.rate.toFixed(2)}%</text>
            {/* Platform label below */}
            <text x={x + barW / 2} y={baseY + 16} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={i < 2 ? TEXT : MUTED}>{p.label}</text>
            {/* Carousel callout if applicable */}
            {p.carouselRate && (
              <g>
                <rect x={x + barW + 4} y={baseY - p.carouselRate * scale * (chartH / p.carouselRate)} width={barW * 0.55} height={3} rx="1" fill={p.carouselColor!} opacity="0.5" />
                <text x={x + barW + 6} y={baseY - p.carouselRate * scale * (chartH / p.carouselRate) - 5} fontFamily="monospace" fontSize="7" fill={p.carouselColor!} opacity="0.75">↑ carousel {p.carouselRate}%</text>
              </g>
            )}
          </g>
        )
      })}

      {/* YouTube note — separate since it's watch-time based */}
      <rect x="580" y="142" width="112" height="68" rx="2" fill={BG} stroke={BORDER} strokeWidth="0.8" />
      <text x="636" y="158" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">YOUTUBE</text>
      <text x="636" y="173" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>watch time</text>
      <text x="636" y="186" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>not views</text>
      <text x="636" y="199" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>avg duration</text>
      <text x="636" y="211" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>= primary signal</text>

      {/* Footer */}
      <text x="360" y="280" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">BENCHMARK AGAINST YOUR OWN PLATFORM ONLY — NEVER CROSS-PLATFORM</text>
    </svg>
  )
}

export function AlgorithmShiftDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  return (
    <svg viewBox="0 0 720 248" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="248" fill={BG2} />
      <text x="360" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">DISTRIBUTION MODEL · THEN VS NOW</text>

      {/* ── LEFT panel: Old model ── */}
      <rect x="28" y="28" width="308" height="192" rx="3" fill={BG} stroke={BORDER} strokeWidth="1" />
      <text x="182" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">PRE-2022 MODEL</text>

      {/* Follower count → linear reach */}
      <rect x="58" y="60" width="100" height="36" rx="2" fill={MUTED} opacity="0.2" stroke={MUTED} strokeWidth="0.8" />
      <text x="108" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">FOLLOWERS</text>

      <line x1="158" y1="78" x2="210" y2="78" stroke={MUTED} strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#asOld)" />
      <defs>
        <marker id="asOld" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={MUTED} opacity="0.5" />
        </marker>
        <marker id="asNew" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={G} opacity="0.8" />
        </marker>
      </defs>

      <rect x="210" y="60" width="96" height="36" rx="2" fill={MUTED} opacity="0.15" stroke={MUTED} strokeWidth="0.8" />
      <text x="258" y="82" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">REACH</text>

      <text x="182" y="120" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>Proportional. Predictable.</text>
      <text x="182" y="134" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>More followers = more reach.</text>

      <rect x="68" y="152" width="236" height="48" rx="2" fill={MUTED} opacity="0.08" />
      <text x="186" y="170" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>Each follower had ~equal chance of seeing</text>
      <text x="186" y="184" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>your post. Chronological or near-chrono.</text>
      <text x="186" y="198" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>Platform = follower graph.</text>

      {/* ── RIGHT panel: New model ── */}
      <rect x="384" y="28" width="308" height="192" rx="3" fill={BG} stroke={G} strokeWidth="1" />
      <text x="538" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} letterSpacing="1">2026 MODEL · AI-RANKED</text>

      {/* Content → Algorithm → branching distribution */}
      <rect x="406" y="64" width="80" height="32" rx="2" fill={G} opacity="0.15" stroke={G} strokeWidth="0.8" />
      <text x="446" y="84" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G} letterSpacing="1">CONTENT</text>

      <line x1="486" y1="80" x2="512" y2="80" stroke={G} strokeWidth="1.2" markerEnd="url(#asNew)" />

      <rect x="512" y="64" width="88" height="32" rx="2" fill={G} opacity="0.6" />
      <text x="556" y="80" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={BG} letterSpacing="1">ALGORITHM</text>
      <text x="556" y="92" textAnchor="middle" fontFamily="monospace" fontSize="6" fill={BG} opacity="0.75">interest graph</text>

      {/* Branches to viewer segments */}
      {[
        { label: 'Viewer: fashion', y: 134 },
        { label: 'Viewer: marketing', y: 158 },
        { label: 'Viewer: startups', y: 182 },
      ].map((v, i) => (
        <g key={v.label}>
          <line x1="600" y1="80" x2="620" y2={v.y} stroke={G} strokeWidth="0.8" opacity="0.5" />
          <rect x="622" y={v.y - 9} width="50" height="18" rx="2" fill={G} opacity="0.12" stroke={G} strokeWidth="0.5" />
          <text x="647" y={v.y + 4} textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={G}>{v.label}</text>
          <line x1="600" y1="80" x2="600" y2="182" stroke={G} strokeWidth="0.5" opacity="0.2" />
        </g>
      ))}

      <text x="538" y="116" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G}>Follower count ≠ reach predictor.</text>
      <text x="538" y="130" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G}>Distributed by relevance to each viewer.</text>
      <text x="538" y="211" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>early engagement velocity triggers amplification</text>

      {/* Divider label */}
      <line x1="340" y1="28" x2="340" y2="220" stroke={BORDER} strokeWidth="1" strokeDasharray="5 4" />
      <text x="340" y="240" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>→</text>

      <text x="360" y="236" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">GROWING A FOLLOWING IS NECESSARY · NOT SUFFICIENT</text>
    </svg>
  )
}

export function SocialSEODiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  const gates = [
    {
      num: '01',
      title: 'DISCOVERABLE',
      label: 'Keyword in caption,\non-screen text,\nspoken audio',
      sublabel: 'Platforms scan audio\ntranscripts for search\nranking — same as a\nweb crawler on text',
      color: G,
    },
    {
      num: '02',
      title: 'CHOSEN',
      label: 'Hook earns the click\nor keeps the scroll\nin the first 3 seconds',
      sublabel: 'Early completion rate\nis a ranking signal —\nthe algorithm reads\nit as quality proof',
      color: GL,
    },
    {
      num: '03',
      title: 'EXTRACTABLE',
      label: 'Full answer lives\ninside the post —\ncaption or audio,\nnot behind a link',
      sublabel: 'Zero-click penalty:\noutbound links get\ndeprioritised — value\nmust be on-platform',
      color: AMBER,
    },
  ]

  const gateW = 192
  const gateGap = 22
  const totalW = 3 * gateW + 2 * gateGap // = 620
  const startX = (720 - totalW) / 2

  return (
    <svg viewBox="0 0 720 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="250" fill={BG2} />
      <text x="360" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">SOCIAL SEO · THREE-GATE DIAGNOSTIC</text>

      {gates.map((gate, i) => {
        const x = startX + i * (gateW + gateGap)
        const isAmber = gate.color === AMBER
        return (
          <g key={gate.num}>
            {/* Gate box */}
            <rect x={x} y="30" width={gateW} height="184" rx="3" fill={BG} stroke={gate.color} strokeWidth={i === 0 ? 1.5 : 1} opacity="0.95" />
            {/* Header band */}
            <rect x={x} y="30" width={gateW} height="30" rx="3" fill={gate.color} opacity={isAmber ? 0.75 : i === 0 ? 0.85 : 0.65} />
            <text x={x + gateW / 2} y="42" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={BG} letterSpacing="1">{gate.num}</text>
            <text x={x + gateW / 2} y="54" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={BG} letterSpacing="2">{gate.title}</text>
            {/* Primary label */}
            {gate.label.split('\n').map((line, li) => (
              <text key={li} x={x + gateW / 2} y={84 + li * 13} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={TEXT}>{line}</text>
            ))}
            {/* Divider */}
            <line x1={x + 16} y1="131" x2={x + gateW - 16} y2="131" stroke={BORDER} strokeWidth="0.6" />
            {/* Sub-label */}
            {gate.sublabel.split('\n').map((line, li) => (
              <text key={li} x={x + gateW / 2} y={146 + li * 12} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>{line}</text>
            ))}
            {/* Connector arrow */}
            {i < 2 && (
              <line x1={x + gateW + 2} y1="122" x2={x + gateW + gateGap - 2} y2="122" stroke={GL} strokeWidth="1.2" markerEnd="url(#seoArrow)" />
            )}
          </g>
        )
      })}

      <defs>
        <marker id="seoArrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={GL} />
        </marker>
      </defs>

      {/* Footer cross-reference */}
      <text x="360" y="236" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">SAME THREE-GATE LOGIC AS AEO — FETCHABLE → CHOSEN → EXTRACTABLE — APPLIED TO SOCIAL</text>
      <text x="360" y="246" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">CAPTION IS THE CRAWLABLE PAGE · HOOK IS THE TITLE TAG · ON-PLATFORM ANSWER IS THE CITABLE CHUNK</text>
    </svg>
  )
}

// ── MCP: Model Context Protocol Diagrams ────────────────────────────────────

export function MCPInteropDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  const hosts = ['Claude', 'ChatGPT', 'Cursor']
  const tools = ['GitHub', 'Figma', 'Supabase', 'Slack']

  const hostY = [72, 128, 184]
  const toolY = [60, 106, 152, 198]

  // Left panel: before (n² problem)
  const lHX = 90    // host circle centers
  const lTX = 270   // tool circle centers
  // Right panel: with MCP (hub + spoke)
  const rHX = 430
  const rMX = 546
  const rTX = 650

  return (
    <svg viewBox="0 0 720 268" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="268" fill={BG2} />

      {/* Panel labels */}
      <text x="185" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">WITHOUT MCP · N² PROBLEM</text>
      <text x="547" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={G} letterSpacing="2">WITH MCP · HUB + SPOKE</text>

      {/* ── LEFT PANEL ── */}
      <rect x="22" y="26" width="328" height="210" rx="3" fill={BG} stroke={BORDER} strokeWidth="0.8" />

      {/* n² crossing lines — visual mess */}
      {hostY.map((hy) =>
        toolY.map((ty, ti) => (
          <line key={`${hy}-${ti}`} x1={lHX + 30} y1={hy} x2={lTX - 30} y2={ty} stroke={MUTED} strokeWidth="0.7" opacity="0.25" />
        ))
      )}

      {/* Host nodes */}
      {hosts.map((h, i) => (
        <g key={h}>
          <rect x={lHX - 30} y={hostY[i] - 13} width="60" height="26" rx="13" fill={MUTED} opacity="0.2" stroke={MUTED} strokeWidth="0.8" />
          <text x={lHX} y={hostY[i] + 4} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>{h}</text>
        </g>
      ))}

      {/* Tool nodes */}
      {tools.map((t, i) => (
        <g key={t}>
          <rect x={lTX - 30} y={toolY[i] - 13} width="60" height="26" rx="2" fill={MUTED} opacity="0.15" stroke={MUTED} strokeWidth="0.8" />
          <text x={lTX} y={toolY[i] + 4} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>{t}</text>
        </g>
      ))}

      {/* Count label */}
      <text x="185" y="250" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>3 × 4 = 12 custom integrations</text>

      {/* Divider */}
      <line x1="360" y1="26" x2="360" y2="236" stroke={BORDER} strokeWidth="1" strokeDasharray="5 4" />

      {/* ── RIGHT PANEL ── */}
      <rect x="372" y="26" width="326" height="210" rx="3" fill={BG} stroke={G} strokeWidth="0.8" />

      {/* Host → MCP lines */}
      {hostY.map((hy, i) => (
        <line key={`rh${i}`} x1={rHX + 30} y1={hy} x2={rMX - 26} y2={128} stroke={G} strokeWidth="0.9" opacity="0.4" />
      ))}

      {/* MCP → Tool lines */}
      {toolY.map((ty, i) => (
        <line key={`rt${i}`} x1={rMX + 26} y1={128} x2={rTX - 30} y2={ty} stroke={GL} strokeWidth="0.9" opacity="0.4" />
      ))}

      {/* Host nodes */}
      {hosts.map((h, i) => (
        <g key={h}>
          <rect x={rHX - 30} y={hostY[i] - 13} width="60" height="26" rx="13" fill={G} opacity="0.15" stroke={G} strokeWidth="0.8" />
          <text x={rHX} y={hostY[i] + 4} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G}>{h}</text>
        </g>
      ))}

      {/* MCP hub */}
      <circle cx={rMX} cy="128" r="26" fill={G} opacity="0.85" />
      <text x={rMX} y="124" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={BG} letterSpacing="1">MCP</text>
      <text x={rMX} y="136" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill={BG} opacity="0.8">protocol</text>

      {/* Tool nodes */}
      {tools.map((t, i) => (
        <g key={t}>
          <rect x={rTX - 30} y={toolY[i] - 13} width="60" height="26" rx="2" fill={GL} opacity="0.15" stroke={GL} strokeWidth="0.8" />
          <text x={rTX} y={toolY[i] + 4} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={GL}>{t}</text>
        </g>
      ))}

      {/* Count label */}
      <text x="547" y="250" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={G}>3 + 4 = 7 connections · any new host works instantly</text>
    </svg>
  )
}

export function MCPCapabilityLayersDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  const panelW = 200
  const panelGap = 24
  const startX = (720 - (3 * panelW + 2 * panelGap)) / 2

  const panels = [
    {
      layer: 'LAYER 1',
      title: 'CONNECT',
      color: MUTED,
      desc: 'Tools and data.\nOne call, one result.',
      detail: 'Standard tool calling.\nThe layer everyone\nknows and uses first.',
      example: 'search_docs(query)\nread_file(path)',
    },
    {
      layer: 'LAYER 2',
      title: 'COMPOSE',
      color: GL,
      desc: 'Multiple servers,\none coherent task.',
      detail: 'Figma → Supabase\n→ GitHub → Slack\nin a single session,\nno custom glue code.',
      example: 'Compounding leverage\nwith each new server',
    },
    {
      layer: 'LAYER 3',
      title: 'INTERACT',
      color: G,
      desc: 'Real UI, not\njust text output.',
      detail: 'MCP Apps (SEP-1865):\ncharts, forms, pickers\nrendered inline.\nBidirectional.',
      example: 'Stabilised Jan 2026',
    },
  ]

  return (
    <svg viewBox="0 0 720 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG2} />
      <text x="360" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">WHAT MCP ENABLES · THREE LAYERS</text>

      {panels.map((p, i) => {
        const x = startX + i * (panelW + panelGap)
        const isTop = p.color === G
        const isMid = p.color === GL
        return (
          <g key={p.title}>
            <rect x={x} y="28" width={panelW} height="226" rx="3" fill={BG} stroke={p.color} strokeWidth={isTop ? 1.5 : 1} />
            <rect x={x} y="28" width={panelW} height="34" rx="3" fill={p.color} opacity={isTop ? 0.85 : isMid ? 0.65 : 0.35} />
            <text x={x + panelW / 2} y="42" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={isTop ? BG : MUTED} letterSpacing="1">{p.layer}</text>
            <text x={x + panelW / 2} y="55" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={isTop ? BG : TEXT} letterSpacing="2">{p.title}</text>

            {/* Visual icon area */}
            <rect x={x + 16} y="72" width={panelW - 32} height="52" rx="2" fill={p.color} opacity="0.07" />
            {p.desc.split('\n').map((line, li) => (
              <text key={li} x={x + panelW / 2} y={92 + li * 14} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={p.color} opacity="0.9">{line}</text>
            ))}

            {/* Detail lines */}
            {p.detail.split('\n').map((line, li) => (
              <text key={li} x={x + panelW / 2} y={142 + li * 13} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>{line}</text>
            ))}

            {/* Example / bottom label */}
            <rect x={x + 12} y="220" width={panelW - 24} height="24" rx="2" fill={p.color} opacity="0.08" />
            {p.example.split('\n').map((line, li) => (
              <text key={li} x={x + panelW / 2} y={232 + li * 11} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={p.color} opacity="0.8">{line}</text>
            ))}

            {/* Arrow between panels */}
            {i < 2 && (
              <g>
                <line x1={x + panelW + 4} y1="141" x2={x + panelW + panelGap - 4} y2="141" stroke={GL} strokeWidth="1.2" markerEnd="url(#mcpArr)" />
              </g>
            )}
          </g>
        )
      })}

      <defs>
        <marker id="mcpArr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={GL} />
        </marker>
      </defs>

      <text x="360" y="272" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">VALUE COMPOUNDS WITH EACH CONNECTED SERVER · COMPOSITION IS WHERE THE LEVERAGE LIVES</text>
    </svg>
  )
}

export function MCPTimelineDiagram() {
  const G = '#1A4D3A', GL = '#3D7A60', BG = '#F5F4F0', BG2 = '#EDEAE4'
  const BORDER = '#C9C6BE', TEXT = '#0A0A0A', MUTED = '#7A7872', AMBER = '#D4890A'

  const events = [
    { date: 'Nov 2024', label: 'Initial release\nopen-sourced by\nAnthropic', highlight: false },
    { date: 'Jun 2025', label: 'Servers formalised\nas OAuth Resource\nServers (RFC 8707)', highlight: false },
    { date: 'Sep 2025', label: 'MCP Registry\nlaunches\n~2,000 servers', highlight: false },
    { date: 'Nov 2025', label: 'Agent loops,\nMCP Apps proposed\n(SEP-1865)', highlight: false },
    { date: 'Dec 2025', label: 'Linux Foundation\nOpenAI + Block\njoin as co-founders', highlight: true },
    { date: 'Jan 2026', label: 'MCP Apps\nstabilises\nClaude, VS Code…', highlight: false },
    { date: 'Jul 2026', label: 'Largest revision:\nstateless core\nhardened OAuth', highlight: true },
  ]

  const n = events.length
  const padX = 48
  const lineY = 100
  const totalW = 720 - padX * 2
  const step = totalW / (n - 1)

  return (
    <svg viewBox="0 0 720 210" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="210" fill={BG2} />
      <text x="360" y="18" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="2">MCP TIMELINE · NOV 2024 → JUL 2026</text>

      {/* Base line */}
      <line x1={padX} y1={lineY} x2={720 - padX} y2={lineY} stroke={BORDER} strokeWidth="1.2" />

      {events.map((ev, i) => {
        const x = padX + i * step
        const isLast = i === n - 1
        const aboveBelow = i % 2 === 0 ? 'above' : 'below'
        const dotY = lineY
        const textY = aboveBelow === 'above' ? lineY - 16 : lineY + 20
        const dateY = aboveBelow === 'above' ? lineY - 64 : lineY + 68
        const c = ev.highlight ? G : (i >= 4 ? GL : MUTED)

        return (
          <g key={ev.date}>
            {/* Connector tick */}
            <line x1={x} y1={lineY - 6} x2={x} y2={lineY + 6} stroke={c} strokeWidth={ev.highlight ? 2 : 1} />
            {/* Dot */}
            <circle cx={x} cy={dotY} r={ev.highlight ? 6 : 4} fill={c} opacity={ev.highlight ? 0.9 : 0.5} />
            {/* Date label */}
            <text x={x} y={aboveBelow === 'above' ? lineY - 76 : lineY + 80} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={c} fontWeight={ev.highlight ? '700' : '400'}>{ev.date}</text>
            {/* Event label lines */}
            {ev.label.split('\n').map((line, li) => {
              const baseY = aboveBelow === 'above' ? lineY - 62 + li * 12 : lineY + 20 + li * 12
              return (
                <text key={li} x={x} y={baseY} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={ev.highlight ? G : MUTED}>{line}</text>
              )
            })}
          </g>
        )
      })}

      <text x="360" y="204" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1">97M+ MONTHLY SDK DOWNLOADS · VENDOR-NEUTRAL SINCE DEC 2025</text>
    </svg>
  )
}

// ─── N8N / Process Automation Diagrams ──────────────────────────────────────

export function PlatformComparisonDiagram() {
  const BG2 = '#EDEAE4', G = '#1A4D3A', GL = '#3D7A60', MUTED = '#7A7872', TEXT = '#0A0A0A', BORDER = '#C9C6BE'
  const cols = [
    {
      name: 'ZAPIER',
      sub: 'NON-TECHNICAL',
      theme: MUTED,
      opacity: 0.18,
      rows: ['8,000+ apps', 'Cloud only', '$30 / 750 tasks', 'Steps billed', 'separately', 'Growing AI depth'],
      best: 'Simple · Fast · Low volume',
    },
    {
      name: 'MAKE',
      sub: 'VISUAL BUILDERS',
      theme: GL,
      opacity: 0.22,
      rows: ['2,000+ apps', 'Cloud only', '$29 / 10k ops', 'Operations', 'bundled', 'Growing AI depth'],
      best: 'Mid-complexity · Canvas',
    },
    {
      name: 'N8N',
      sub: 'FULL CONTROL',
      theme: G,
      opacity: 1,
      rows: ['Any HTTP API', 'Self-hosted / cloud', 'Execution-based', 'Infra cost only', 'when self-hosted', 'Deepest AI + MCP'],
      best: 'Technical · Data control',
    },
  ]
  const colW = 210, colH = 262, startY = 14, gap = 14

  return (
    <svg viewBox="0 0 720 290" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="290" fill={BG2} />

      {cols.map((col, ci) => {
        const x = 15 + ci * (colW + gap)
        const isN8N = ci === 2
        return (
          <g key={col.name}>
            {/* Column background */}
            <rect x={x} y={startY} width={colW} height={colH} rx="2"
              fill={isN8N ? G : BG2}
              stroke={isN8N ? G : BORDER}
              strokeWidth={isN8N ? 0 : 1}
              opacity={isN8N ? 1 : 1}
            />
            {/* Header bar */}
            <rect x={x} y={startY} width={colW} height={46} rx="2"
              fill={isN8N ? '#0A3325' : col.theme}
              opacity={isN8N ? 1 : 0.85}
            />
            {/* Platform name */}
            <text x={x + colW / 2} y={startY + 22} textAnchor="middle"
              fontFamily="monospace" fontSize="13" fontWeight="700"
              fill={isN8N ? '#F5F4F0' : '#F5F4F0'} letterSpacing="3">
              {col.name}
            </text>
            <text x={x + colW / 2} y={startY + 37} textAnchor="middle"
              fontFamily="monospace" fontSize="7" fill={isN8N ? '#3D7A60' : 'rgba(245,244,240,0.6)'} letterSpacing="2">
              {col.sub}
            </text>

            {/* Divider rows */}
            {['INTEGRATIONS', 'HOSTING', 'PRICING'].map((label, ri) => {
              const rowY = startY + 52 + ri * 58
              return (
                <g key={label}>
                  <line x1={x + 12} y1={rowY} x2={x + colW - 12} y2={rowY}
                    stroke={isN8N ? 'rgba(245,244,240,0.12)' : BORDER} strokeWidth="0.5" />
                  <text x={x + 14} y={rowY + 14} fontFamily="monospace" fontSize="7"
                    fill={isN8N ? 'rgba(245,244,240,0.45)' : MUTED} letterSpacing="1.5">
                    {label}
                  </text>
                  <text x={x + 14} y={rowY + 28} fontFamily="monospace" fontSize="9.5"
                    fill={isN8N ? '#F5F4F0' : TEXT} fontWeight="600">
                    {col.rows[ri * 2]}
                  </text>
                  {col.rows[ri * 2 + 1] && (
                    <text x={x + 14} y={rowY + 42} fontFamily="monospace" fontSize="8.5"
                      fill={isN8N ? 'rgba(245,244,240,0.65)' : MUTED}>
                      {col.rows[ri * 2 + 1]}
                    </text>
                  )}
                </g>
              )
            })}

            {/* Best for footer */}
            <rect x={x} y={startY + colH - 38} width={colW} height={38} rx="2"
              fill={isN8N ? 'rgba(255,255,255,0.06)' : isN8N ? G : col.theme}
              opacity={isN8N ? 1 : 0.1}
            />
            <line x1={x + 12} y1={startY + colH - 38} x2={x + colW - 12} y2={startY + colH - 38}
              stroke={isN8N ? 'rgba(245,244,240,0.12)' : BORDER} strokeWidth="0.5" />
            <text x={x + colW / 2} y={startY + colH - 18} textAnchor="middle"
              fontFamily="monospace" fontSize="7.5"
              fill={isN8N ? 'rgba(245,244,240,0.7)' : col.theme} letterSpacing="0.5">
              {col.best}
            </text>
          </g>
        )
      })}

      <text x="360" y="283" textAnchor="middle" fontFamily="monospace" fontSize="7"
        fill={MUTED} letterSpacing="1.5" opacity="0.6">
        AUTOMATION PLATFORM COMPARISON · 2026
      </text>
    </svg>
  )
}

export function WorkflowVsAgentDiagram() {
  const BG2 = '#EDEAE4', G = '#1A4D3A', GL = '#3D7A60', MUTED = '#7A7872', AMBER = '#D4890A', TEXT = '#0A0A0A', BORDER = '#C9C6BE'
  const wfSteps = ['TRIGGER', 'TRANSFORM', 'NOTIFY', 'DONE']
  const boxH = 38, boxW = 226, boxX = 34
  const agentNodes = [
    { label: 'OBSERVE', cx: 540, cy: 82 },
    { label: 'REASON', cx: 622, cy: 150 },
    { label: 'ACT', cx: 540, cy: 218 },
    { label: 'SELECT', cx: 458, cy: 150 },
  ]
  const r = 28
  const arrows = [
    { x1: 569, y1: 97, x2: 605, y2: 130 },
    { x1: 609, y1: 168, x2: 569, y2: 200 },
    { x1: 511, y1: 203, x2: 477, y2: 171 },
    { x1: 472, y1: 132, x2: 511, y2: 99 },
  ]

  return (
    <svg viewBox="0 0 720 260" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="wva-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill={MUTED} />
        </marker>
        <marker id="wva-garr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill={G} />
        </marker>
      </defs>
      <rect width="720" height="260" fill={BG2} />

      {/* Left: Fixed Workflow */}
      <text x="157" y="28" textAnchor="middle" fontFamily="monospace" fontSize="10"
        fill={MUTED} fontWeight="700" letterSpacing="2">FIXED WORKFLOW</text>

      {wfSteps.map((step, i) => {
        const y = 42 + i * (boxH + 11)
        const isLast = i === wfSteps.length - 1
        const isFade = i === 1 || i === 2
        return (
          <g key={step}>
            <rect x={boxX} y={y} width={boxW} height={boxH} rx="2"
              fill={isLast ? G : BG2}
              stroke={isLast ? G : isFade ? BORDER : MUTED}
              strokeWidth={isLast ? 0 : isFade ? 0.75 : 1}
              opacity={isFade ? 0.55 : 1}
            />
            <text x={boxX + boxW / 2} y={y + boxH / 2 + 4} textAnchor="middle"
              fontFamily="monospace" fontSize="10" fontWeight="700"
              fill={isLast ? '#F5F4F0' : isFade ? MUTED : TEXT} letterSpacing="1.5">
              {step}
            </text>
            {!isLast && (
              <line x1={boxX + boxW / 2} y1={y + boxH + 1} x2={boxX + boxW / 2} y2={y + boxH + 10}
                stroke={MUTED} strokeWidth="1.2" markerEnd="url(#wva-arr)" opacity="0.5" />
            )}
          </g>
        )
      })}

      <text x="157" y="246" textAnchor="middle" fontFamily="monospace" fontSize="7.5"
        fill={MUTED} opacity="0.7">Every branch scripted in advance</text>

      {/* Divider */}
      <line x1="352" y1="18" x2="352" y2="242" stroke={BORDER} strokeWidth="1" strokeDasharray="4 4" opacity="0.8" />

      {/* Right: ReAct Agent */}
      <text x="540" y="28" textAnchor="middle" fontFamily="monospace" fontSize="10"
        fill={G} fontWeight="700" letterSpacing="2">REACT AGENT</text>

      {/* Loop arrows */}
      {arrows.map((a, i) => (
        <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke={G} strokeWidth="1.5" markerEnd="url(#wva-garr)" opacity="0.75" />
      ))}

      {/* Center hub */}
      <circle cx="540" cy="150" r="18" fill={GL} opacity="0.12" stroke={GL} strokeWidth="0.5" />
      <text x="540" y="147" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} letterSpacing="1">TOOLS</text>
      <text x="540" y="158" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={G} letterSpacing="1">AVAIL.</text>

      {/* Agent nodes */}
      {agentNodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.cx} cy={n.cy} r={r} fill={G} opacity="0.9" />
          <text x={n.cx} y={n.cy + 4} textAnchor="middle"
            fontFamily="monospace" fontSize="7.5" fontWeight="700"
            fill="#F5F4F0" letterSpacing="0.5">
            {n.label}
          </text>
        </g>
      ))}

      <text x="540" y="246" textAnchor="middle" fontFamily="monospace" fontSize="7.5"
        fill={G} opacity="0.7">Reasons through unexpected cases</text>
    </svg>
  )
}

export function N8NMCPBridgeDiagram() {
  const BG2 = '#EDEAE4', G = '#1A4D3A', GL = '#3D7A60', MUTED = '#7A7872', BORDER = '#C9C6BE'
  const n8nX = 278, n8nY = 98, n8nW = 164, n8nH = 104
  const n8nCX = n8nX + n8nW / 2

  const leftItems = [
    { label: 'CLAUDE DESKTOP', y: 80 },
    { label: 'CURSOR / VS CODE', y: 128 },
    { label: 'ENTERPRISE LLM', y: 176 },
  ]
  const rightItems = [
    { label: 'SUPABASE', y: 80 },
    { label: 'FIGMA MCP', y: 128 },
    { label: 'SLACK / EMAIL', y: 176 },
  ]
  const boxW = 152, boxH = 34, lx = 22, rx = 546

  return (
    <svg viewBox="0 0 720 280" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="mcpb-in" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill={GL} />
        </marker>
        <marker id="mcpb-out" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill={MUTED} />
        </marker>
      </defs>
      <rect width="720" height="280" fill={BG2} />

      {/* Left side label */}
      <text x={lx + boxW / 2} y="28" textAnchor="middle" fontFamily="monospace"
        fontSize="8" fill={GL} fontWeight="700" letterSpacing="2">AS MCP SERVER</text>
      <text x={lx + boxW / 2} y="42" textAnchor="middle" fontFamily="monospace"
        fontSize="7" fill={MUTED}>AI hosts trigger your workflows</text>

      {/* Right side label */}
      <text x={rx + boxW / 2} y="28" textAnchor="middle" fontFamily="monospace"
        fontSize="8" fill={MUTED} fontWeight="700" letterSpacing="2">AS MCP CLIENT</text>
      <text x={rx + boxW / 2} y="42" textAnchor="middle" fontFamily="monospace"
        fontSize="7" fill={MUTED}>Agents call external tools</text>

      {/* Left boxes + arrows */}
      {leftItems.map((item) => {
        const boxMidY = item.y + boxH / 2
        return (
          <g key={item.label}>
            <rect x={lx} y={item.y} width={boxW} height={boxH} rx="2"
              fill={BG2} stroke={GL} strokeWidth="0.75" />
            <text x={lx + boxW / 2} y={item.y + boxH / 2 + 4} textAnchor="middle"
              fontFamily="monospace" fontSize="8" fill={G} letterSpacing="0.5">
              {item.label}
            </text>
            {/* Arrow from left box to n8n */}
            <line x1={lx + boxW + 2} y1={boxMidY} x2={n8nX - 3} y2={n8nY + n8nH / 2}
              stroke={GL} strokeWidth="1.2" markerEnd="url(#mcpb-in)" opacity="0.7" strokeDasharray="5 3" />
          </g>
        )
      })}

      {/* Right boxes + arrows */}
      {rightItems.map((item) => {
        const boxMidY = item.y + boxH / 2
        return (
          <g key={item.label}>
            <rect x={rx} y={item.y} width={boxW} height={boxH} rx="2"
              fill={BG2} stroke={BORDER} strokeWidth="1" />
            <text x={rx + boxW / 2} y={item.y + boxH / 2 + 4} textAnchor="middle"
              fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="0.5">
              {item.label}
            </text>
            {/* Arrow from n8n to right box */}
            <line x1={n8nX + n8nW + 3} y1={n8nY + n8nH / 2} x2={rx - 3} y2={boxMidY}
              stroke={MUTED} strokeWidth="1.2" markerEnd="url(#mcpb-out)" opacity="0.5" strokeDasharray="5 3" />
          </g>
        )
      })}

      {/* n8n central box */}
      <rect x={n8nX} y={n8nY} width={n8nW} height={n8nH} rx="3" fill={G} />
      <rect x={n8nX} y={n8nY} width={n8nW} height={32} rx="3" fill="rgba(0,0,0,0.25)" />
      <rect x={n8nX} y={n8nY + 26} width={n8nW} height={6} fill="rgba(0,0,0,0.25)" />
      <text x={n8nCX} y={n8nY + 21} textAnchor="middle" fontFamily="monospace"
        fontSize="15" fontWeight="700" fill="#F5F4F0" letterSpacing="4">N8N</text>
      <text x={n8nCX} y={n8nY + 50} textAnchor="middle" fontFamily="monospace"
        fontSize="7.5" fill="rgba(245,244,240,0.65)" letterSpacing="2">WORKFLOW ENGINE</text>
      <text x={n8nCX} y={n8nY + 67} textAnchor="middle" fontFamily="monospace"
        fontSize="7" fill="rgba(245,244,240,0.45)">Tools Agent · ReAct</text>
      <text x={n8nCX} y={n8nY + 82} textAnchor="middle" fontFamily="monospace"
        fontSize="7" fill="rgba(245,244,240,0.45)">Publish / Save split</text>

      {/* Bottom footnote */}
      <text x="360" y="236" textAnchor="middle" fontFamily="monospace"
        fontSize="7" fill={MUTED} letterSpacing="1" opacity="0.6">
        n8n-mcp package: build workflows via conversation (prototyping only — review before Publish)
      </text>

      <text x="360" y="270" textAnchor="middle" fontFamily="monospace"
        fontSize="7" fill={MUTED} letterSpacing="1.5" opacity="0.5">
        N8N + MCP · BOTH SIDES OF THE BRIDGE
      </text>
    </svg>
  )
}

export function ModelLandscapeDiagram() {
  const MODELS = [
    { lab: 'DeepSeek AI',  family: 'V4 / V4-Pro',    score: '80.6%', sub: 'SWE-bench Verified',  lic: 'MIT',        licOk: true,  s1: '· Coding leader',         s2: '· Structural cost efficiency', s3: '· Strongest self-host use',  foot: 'Cost-sensitive self-hosting', hi: true  },
    { lab: 'Alibaba',      family: 'Qwen 3.6–3.8',   score: '119',   sub: 'languages supported', lic: 'Apache 2.0', licOk: true,  s1: '· 119 languages',         s2: '· Runs on consumer GPU',      s3: '· MCP-native tool-calling',  foot: 'Multilingual · small hardware', hi: false },
    { lab: 'Moonshot AI',  family: 'Kimi K2.6 / K3', score: '#1',    sub: 'open-weight AAII',    lic: 'Custom ⚠',   licOk: false, s1: '· Long-horizon agents',   s2: '· Sub-agent parallelism',     s3: '· Built for tool-use loops', foot: 'Long-horizon agentic coding', hi: false },
    { lab: 'Zhipu / Z.ai', family: 'GLM-4.6 / 5.x', score: '81.0',  sub: 'Terminal-Bench 2.1',  lic: 'MIT',        licOk: true,  s1: '· Terminal-bench leader',  s2: '· 1M-token context',          s3: '· Day-to-day coding value',  foot: 'Docs · terminals · coding', hi: false },
  ]
  return (
    <svg viewBox="0 0 720 306" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="306" fill={BG} />
      {MODELS.map((m, i) => {
        const x = 16 + i * 174
        return (
          <g key={i}>
            <rect x={x} y={8} width={166} height={282} fill={BG} stroke={m.hi ? G : BORDER} strokeWidth={m.hi ? 2 : 1} />
            <rect x={x} y={8} width={166} height={58} fill={m.hi ? G : BG2} />
            <text x={x+10} y={25} fontFamily="monospace" fontSize="7" fill={m.hi ? BG+'88' : MUTED} letterSpacing="1">{m.lab.toUpperCase()}</text>
            <text x={x+10} y={50} fontFamily="monospace" fontSize="13" fontWeight="700" fill={m.hi ? BG : TEXT}>{m.family}</text>
            <text x={x+10} y={96} fontFamily="monospace" fontSize="28" fontWeight="700" fill={m.hi ? G : TEXT}>{m.score}</text>
            <text x={x+10} y={111} fontFamily="monospace" fontSize="7" fill={MUTED}>{m.sub}</text>
            <line x1={x+10} y1={118} x2={x+156} y2={118} stroke={BORDER} strokeWidth="1" />
            <rect x={x+10} y={125} width={70} height={15} rx="2" fill={m.licOk ? G+'25' : AMBER+'30'} />
            <text x={x+45} y={136} fontFamily="monospace" fontSize="7.5" fill={m.licOk ? G : AMBER} textAnchor="middle" fontWeight="700">{m.lic}</text>
            <text x={x+10} y={163} fontFamily="monospace" fontSize="8" fill={MUTED}>{m.s1}</text>
            <text x={x+10} y={178} fontFamily="monospace" fontSize="8" fill={MUTED}>{m.s2}</text>
            <text x={x+10} y={193} fontFamily="monospace" fontSize="8" fill={MUTED}>{m.s3}</text>
            <rect x={x} y={252} width={166} height={38} fill={m.hi ? G+'18' : BG2} />
            <line x1={x} y1={252} x2={x+166} y2={252} stroke={m.hi ? G+'50' : BORDER} strokeWidth="1" />
            <text x={x+10} y={265} fontFamily="monospace" fontSize="6.5" fill={MUTED} letterSpacing="0.8">BEST FOR</text>
            <text x={x+10} y={281} fontFamily="monospace" fontSize="8" fill={m.hi ? G : TEXT}>{m.foot}</text>
          </g>
        )
      })}
      <text x="360" y="301" textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} letterSpacing="1" opacity="0.6">CHINESE OPEN-WEIGHT LEADERS · MID-2026</text>
    </svg>
  )
}

export function RiskMatrixDiagram() {
  const MX = 80, MY = 16, MW = 606, MH = 226
  const HX = MX + MW / 2   // 383
  const HY = MY + MH / 2   // 129
  return (
    <svg viewBox="0 0 720 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG} />
      {/* TL: self-hosted + high sensitivity = MODERATE (amber) */}
      <rect x={MX} y={MY} width={MW/2} height={MH/2} fill={AMBER+'22'} />
      <text x={MX+14} y={MY+28} fontFamily="monospace" fontSize="14" fontWeight="700" fill={AMBER}>MODERATE</text>
      <text x={MX+14} y={MY+46} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">Verify content-moderation behavior</text>
      <text x={MX+14} y={MY+60} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">for your specific topics.</text>
      <text x={MX+14} y={MY+76} fontFamily="monospace" fontSize="8" fill={G} opacity="0.9">Jurisdiction risk: eliminated.</text>
      {/* TR: hosted + high sensitivity = HIGH (red) */}
      <rect x={HX} y={MY} width={MW/2} height={MH/2} fill={DANGER+'20'} />
      <text x={HX+14} y={MY+28} fontFamily="monospace" fontSize="14" fontWeight="700" fill={DANGER}>HIGH</text>
      <text x={HX+14} y={MY+46} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">Data law jurisdiction applies.</text>
      <text x={HX+14} y={MY+60} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">Content moderation embedded.</text>
      <text x={HX+14} y={MY+76} fontFamily="monospace" fontSize="8" fill={DANGER} opacity="0.9">Not for client-confidential data.</text>
      {/* BL: self-hosted + low sensitivity = LOW (green) */}
      <rect x={MX} y={HY} width={MW/2} height={MH/2} fill={G+'20'} />
      <text x={MX+14} y={HY+28} fontFamily="monospace" fontSize="14" fontWeight="700" fill={G}>LOW</text>
      <text x={MX+14} y={HY+46} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">Best option. No data leaves</text>
      <text x={MX+14} y={HY+60} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">your infrastructure.</text>
      <text x={MX+14} y={HY+76} fontFamily="monospace" fontSize="8" fill={G} opacity="0.9">Full control. Strongest profile.</text>
      {/* BR: hosted + low sensitivity = LOW-MODERATE (amber) */}
      <rect x={HX} y={HY} width={MW/2} height={MH/2} fill={AMBER+'14'} />
      <text x={HX+14} y={HY+28} fontFamily="monospace" fontSize="14" fontWeight="700" fill={AMBER}>LOW–MOD</text>
      <text x={HX+14} y={HY+46} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">Acceptable for non-sensitive</text>
      <text x={HX+14} y={HY+60} fontFamily="monospace" fontSize="8" fill={TEXT} opacity="0.65">or exploratory work.</text>
      <text x={HX+14} y={HY+76} fontFamily="monospace" fontSize="8" fill={AMBER} opacity="0.9">Jurisdiction concern remains.</text>
      {/* Grid */}
      <rect x={MX} y={MY} width={MW} height={MH} fill="none" stroke={BORDER} strokeWidth="1.5" />
      <line x1={HX} y1={MY} x2={HX} y2={MY+MH} stroke={BORDER} strokeWidth="1.5" />
      <line x1={MX} y1={HY} x2={MX+MW} y2={HY} stroke={BORDER} strokeWidth="1.5" />
      {/* X-axis labels */}
      <text x={MX+MW/4} y={MY+MH+18} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="0.8">SELF-HOSTED (OPEN-WEIGHT)</text>
      <text x={HX+MW/4} y={MY+MH+18} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="0.8">HOSTED SERVICE (API / CHAT)</text>
      {/* Y-axis labels rotated */}
      <text x={MX-10} y={MY+MH/4} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} transform={`rotate(-90 ${MX-10} ${MY+MH/4})`}>HIGH SENSITIVITY</text>
      <text x={MX-10} y={HY+MH/4} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED} transform={`rotate(-90 ${MX-10} ${HY+MH/4})`}>LOW SENSITIVITY</text>
    </svg>
  )
}

export function DeploymentPathDiagram() {
  const LX = 20, RX = 380, CW = 300
  return (
    <svg viewBox="0 0 720 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="200" fill={BG} />
      {/* Left: Self-hosted */}
      <rect x={LX} y={8} width={CW} height={30} fill={G} />
      <text x={LX+CW/2} y={27} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={BG} letterSpacing="0.8">OPEN-WEIGHT · SELF-HOSTED</text>
      <rect x={LX} y={46} width={CW} height={32} fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x={LX+CW/2} y={66} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={TEXT}>Download model weights</text>
      <line x1={LX+CW/2} y1={78} x2={LX+CW/2} y2={90} stroke={G} strokeWidth="1.5" />
      <polygon points={`${LX+CW/2-4},87 ${LX+CW/2+4},87 ${LX+CW/2},93`} fill={G} />
      <rect x={LX} y={92} width={CW} height={32} fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x={LX+CW/2} y={112} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={TEXT}>Runs on your own servers</text>
      <line x1={LX+CW/2} y1={124} x2={LX+CW/2} y2={136} stroke={G} strokeWidth="1.5" />
      <polygon points={`${LX+CW/2-4},133 ${LX+CW/2+4},133 ${LX+CW/2},139`} fill={G} />
      <text x={LX+12} y={152} fontFamily="monospace" fontSize="8.5" fill={G}>+ No data jurisdiction</text>
      <text x={LX+12} y={167} fontFamily="monospace" fontSize="8.5" fill={G}>+ Data stays in your infra</text>
      <text x={LX+12} y={182} fontFamily="monospace" fontSize="8.5" fill={AMBER}>~ Test model output for your topics</text>
      {/* Right: Hosted service */}
      <rect x={RX} y={8} width={CW} height={30} fill={DANGER+'cc'} />
      <text x={RX+CW/2} y={27} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={BG} letterSpacing="0.8">HOSTED API / CHAT PRODUCT</text>
      <rect x={RX} y={46} width={CW} height={32} fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x={RX+CW/2} y={66} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={TEXT}>Send request to their API</text>
      <line x1={RX+CW/2} y1={78} x2={RX+CW/2} y2={90} stroke={DANGER} strokeWidth="1.5" />
      <polygon points={`${RX+CW/2-4},87 ${RX+CW/2+4},87 ${RX+CW/2},93`} fill={DANGER} />
      <rect x={RX} y={92} width={CW} height={32} fill={DANGER+'0d'} stroke={DANGER+'50'} strokeWidth="1" />
      <text x={RX+CW/2} y={112} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={TEXT}>Data on their servers (China)</text>
      <line x1={RX+CW/2} y1={124} x2={RX+CW/2} y2={136} stroke={DANGER} strokeWidth="1.5" />
      <polygon points={`${RX+CW/2-4},133 ${RX+CW/2+4},133 ${RX+CW/2},139`} fill={DANGER} />
      <text x={RX+12} y={152} fontFamily="monospace" fontSize="8.5" fill={DANGER}>! Chinese data law jurisdiction</text>
      <text x={RX+12} y={167} fontFamily="monospace" fontSize="8.5" fill={DANGER}>! Content moderation embedded</text>
      <text x={RX+12} y={182} fontFamily="monospace" fontSize="8.5" fill={AMBER}>~ API pricing / terms can change</text>
      {/* Centre divider */}
      <line x1={350} y1={12} x2={350} y2={192} stroke={BORDER} strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  )
}

export function DirectVsIndirectDiagram() {
  const LX = 20, RX = 370, CW = 330, H = 250
  const BOX_H = 32, BOX_R = 3
  return (
    <svg viewBox="0 0 720 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="260" fill={BG} />
      {/* ── Left: Direct injection ── */}
      <rect x={LX} y={8} width={CW} height={28} fill={G} />
      <text x={LX+CW/2} y={26} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={BG} letterSpacing="1">DIRECT INJECTION</text>
      {/* User box */}
      <rect x={LX+20} y={46} width={CW-40} height={BOX_H} rx={BOX_R} fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x={LX+CW/2} y={66} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={TEXT}>User types into chat</text>
      {/* Malicious instruction highlight */}
      <rect x={LX+20} y={90} width={CW-40} height={38} rx={BOX_R} fill={DANGER+'18'} stroke={DANGER+'60'} strokeWidth="1" />
      <text x={LX+CW/2} y={107} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={DANGER} fontWeight="700">MALICIOUS INSTRUCTION</text>
      <text x={LX+CW/2} y={121} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED}>&quot;Ignore previous instructions and...&quot;</text>
      {/* Arrow */}
      <line x1={LX+CW/2} y1={130} x2={LX+CW/2} y2={148} stroke={DANGER} strokeWidth="1.5" />
      <polygon points={`${LX+CW/2-4},145 ${LX+CW/2+4},145 ${LX+CW/2},151`} fill={DANGER} />
      {/* Model */}
      <rect x={LX+20} y={152} width={CW-40} height={BOX_H} rx={BOX_R} fill={G+'22'} stroke={G+'50'} strokeWidth="1" />
      <text x={LX+CW/2} y={172} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={TEXT}>LLM processes combined input</text>
      {/* Arrow */}
      <line x1={LX+CW/2} y1={186} x2={LX+CW/2} y2={200} stroke={MUTED} strokeWidth="1.5" />
      <polygon points={`${LX+CW/2-4},197 ${LX+CW/2+4},197 ${LX+CW/2},203`} fill={MUTED} />
      {/* Output */}
      <rect x={LX+20} y={204} width={CW-40} height={BOX_H} rx={BOX_R} fill={DANGER+'12'} stroke={DANGER+'40'} strokeWidth="1" />
      <text x={LX+CW/2} y={224} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={DANGER}>Follows attacker instruction</text>
      <text x={LX+CW/2} y={251} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>Easier to detect — input comes directly from user</text>
      {/* ── Right: Indirect injection ── */}
      <rect x={RX} y={8} width={CW} height={28} fill={DANGER+'cc'} />
      <text x={RX+CW/2} y={26} textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={BG} letterSpacing="1">INDIRECT INJECTION</text>
      {/* Attacker */}
      <rect x={RX+20} y={46} width={CW-40} height={BOX_H} rx={BOX_R} fill={BG2} stroke={BORDER} strokeWidth="1" />
      <text x={RX+CW/2} y={66} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={TEXT}>Attacker embeds in external content</text>
      {/* Arrow */}
      <line x1={RX+CW/2} y1={80} x2={RX+CW/2} y2={88} stroke={MUTED} strokeWidth="1.5" />
      <polygon points={`${RX+CW/2-4},85 ${RX+CW/2+4},85 ${RX+CW/2},91`} fill={MUTED} />
      {/* Document */}
      <rect x={RX+20} y={90} width={CW-40} height={38} rx={BOX_R} fill={DANGER+'18'} stroke={DANGER+'60'} strokeWidth="1" />
      <text x={RX+CW/2} y={104} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED}>webpage · email · doc · Slack message</text>
      <text x={RX+CW/2} y={120} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={DANGER} fontWeight="700">HIDDEN INSTRUCTION INSIDE CONTENT</text>
      {/* Arrow */}
      <line x1={RX+CW/2} y1={130} x2={RX+CW/2} y2={148} stroke={DANGER} strokeWidth="1.5" />
      <polygon points={`${RX+CW/2-4},145 ${RX+CW/2+4},145 ${RX+CW/2},151`} fill={DANGER} />
      {/* Model reading */}
      <rect x={RX+20} y={152} width={CW-40} height={BOX_H} rx={BOX_R} fill={G+'22'} stroke={G+'50'} strokeWidth="1" />
      <text x={RX+CW/2} y={172} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={TEXT}>Agent reads content on your behalf</text>
      {/* Arrow */}
      <line x1={RX+CW/2} y1={186} x2={RX+CW/2} y2={200} stroke={DANGER} strokeWidth="1.5" />
      <polygon points={`${RX+CW/2-4},197 ${RX+CW/2+4},197 ${RX+CW/2},203`} fill={DANGER} />
      {/* Action */}
      <rect x={RX+20} y={204} width={CW-40} height={BOX_H} rx={BOX_R} fill={DANGER+'20'} stroke={DANGER+'60'} strokeWidth="1" />
      <text x={RX+CW/2} y={224} textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={DANGER}>Takes real action you never authorised</text>
      <text x={RX+CW/2} y={251} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={MUTED}>Harder to detect — you trusted the content source</text>
      {/* Divider */}
      <line x1={355} y1={12} x2={355} y2={244} stroke={BORDER} strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  )
}

export function AttackSuccessRateDiagram() {
  const chartX = 80, chartY = 20, chartW = 560, chartH = 180
  const chartBottom = chartY + chartH
  const maxVal = 80
  const scale = chartH / maxVal
  const bars = [
    { label: '1 attempt',   pct: 4.7,  fill: G,      cx: 190 },
    { label: '10 attempts', pct: 33.6, fill: AMBER,   cx: 360 },
    { label: '100 attempts',pct: 63.0, fill: DANGER,  cx: 530 },
  ]
  const barW = 90
  return (
    <svg viewBox="0 0 720 250" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="250" fill={BG} />
      {/* Y-axis gridlines */}
      {[0, 20, 40, 60, 80].map((v) => {
        const y = chartBottom - v * scale
        return (
          <g key={v}>
            <line x1={chartX} y1={y} x2={chartX+chartW} y2={y} stroke={BORDER} strokeWidth="1" opacity="0.6" strokeDasharray={v===0?'none':'3 3'} />
            <text x={chartX-8} y={y+4} textAnchor="end" fontFamily="monospace" fontSize="8" fill={MUTED}>{v}%</text>
          </g>
        )
      })}
      {/* Bars */}
      {bars.map((b) => {
        const barH = b.pct * scale
        const barY = chartBottom - barH
        return (
          <g key={b.label}>
            <rect x={b.cx-barW/2} y={barY} width={barW} height={barH} fill={b.fill} opacity="0.85" />
            <text x={b.cx} y={barY-8} textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" fill={b.fill}>{b.pct}%</text>
            <text x={b.cx} y={chartBottom+16} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTED}>{b.label}</text>
          </g>
        )
      })}
      {/* Axis */}
      <line x1={chartX} y1={chartY} x2={chartX} y2={chartBottom} stroke={BORDER} strokeWidth="1" />
      <line x1={chartX} y1={chartBottom} x2={chartX+chartW} y2={chartBottom} stroke={BORDER} strokeWidth="1" />
      <text x="360" y="237" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} letterSpacing="0.8">
        Indirect prompt-injection attack success · Claude Opus 4.5 · Agentic coding environment · Anthropic System Card
      </text>
    </svg>
  )
}

export function DefenseStackDiagram() {
  const layers = [
    { label: 'Adversarial testing — recurring cadence, not just pre-launch', note: 'catches novel vectors', fill: G+'22', border: G+'50' },
    { label: 'Input / output filtering for known attack patterns',            note: 'catches known signatures', fill: G+'1a', border: G+'40' },
    { label: 'Human approval for high-risk or irreversible actions',          note: 'backstop against any injection', fill: AMBER+'22', border: AMBER+'50' },
    { label: 'Least-privilege tooling — only what the task needs',            note: 'limits blast radius', fill: AMBER+'1a', border: AMBER+'40' },
    { label: 'System-level behavioral constraints + output format rules',     note: 'reduces hijack surface', fill: G+'22', border: G+'50' },
    { label: 'Segregate untrusted content from instruction stream',           note: 'command ≠ data channel', fill: G+'18', border: G+'40' },
  ]
  const LAYER_H = 36, GAP = 4, startY = 18, startX = 60
  return (
    <svg viewBox="0 0 720 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="280" fill={BG} />
      <text x="360" y="14" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={MUTED} letterSpacing="1">DEFENSE IN DEPTH — NO SINGLE CONTROL IS SUFFICIENT</text>
      {layers.map((l, i) => {
        const y = startY + 10 + i * (LAYER_H + GAP)
        const shrink = i * 10
        const x = startX + shrink
        const w = 600 - shrink * 2
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={LAYER_H} fill={l.fill} stroke={l.border} strokeWidth="1" rx="2" />
            <text x={x+14} y={y+15} fontFamily="monospace" fontSize="8.5" fill={TEXT} fontWeight="600">{l.label}</text>
            <text x={x+14} y={y+28} fontFamily="monospace" fontSize="7.5" fill={MUTED}>{l.note}</text>
          </g>
        )
      })}
      {/* ATTACK arrow from right */}
      <text x="692" y="148" textAnchor="end" fontFamily="monospace" fontSize="8" fill={DANGER} letterSpacing="0.5">ATTACK</text>
      <line x1={690} y1={154} x2={670} y2={154} stroke={DANGER} strokeWidth="2" />
      <polygon points="672,150 660,154 672,158" fill={DANGER} />
      <text x="360" y="275" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={MUTED} letterSpacing="0.8">
        Stack from outermost (bottom) to innermost (top) · OWASP LLM Top 10 2025 — LLM01
      </text>
    </svg>
  )
}
