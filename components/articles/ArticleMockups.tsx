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
      <text x="360" y="298" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={MUTED}>Wispr Flow — fn to activate</text>
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
      <text x="360" y="20" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#888">Obsidian — pkm-vault</text>

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
        ✕ no two-way sync — Notion links to Obsidian, never reverse
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
        each query returns its own candidate source list — engine decides which to open
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
            <text x={x + 10} y={y + 12} fontFamily="monospace" fontSize="9" fill={BG} letterSpacing="1">GATE {gate.n} — {gate.name}</text>

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
        failing any gate removes you from consideration — diagnosis tells you which one
      </text>
    </svg>
  )
}

export function SAGELoop() {
  const stages = [
    { label: 'SETUP', sub: 'decide what to track', x: 260, y: 40 },
    { label: 'ANALYZE', sub: 'find where you\'re losing', x: 480, y: 140 },
    { label: 'ENGINEER', sub: 'make wins repeatable', x: 100, y: 140 },
    { label: 'GENERATE', sub: 'turn gaps into shipped work', x: 480, y: 240 },
  ]

  // We'll arrange as a 2×2 grid with arrows between them
  const grid = [
    { label: 'SETUP',    sub: 'Decide what to track',          x: 170, y: 50,  color: G },
    { label: 'ANALYZE',  sub: 'Find where you\'re losing',     x: 430, y: 50,  color: G },
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
        "What time is it?" — which stage you're in, right now
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
        single angle — loses compound-job queries
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
        hybrid outperforms either alone — default in production systems (2026)
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
        semantic chunking: embed sentence-by-sentence, break when similarity drops — better signal for retrieval
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
        adaptive RAG — emerging 2026 default: most queries are simple, route them cheap
      </text>
    </svg>
  )
}
