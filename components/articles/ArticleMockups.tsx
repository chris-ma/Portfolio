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
