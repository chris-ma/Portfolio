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
