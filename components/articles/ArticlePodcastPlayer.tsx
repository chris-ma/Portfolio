'use client'

import { useState, useEffect, useRef } from 'react'

interface Props {
  title: string
  readTime: string
}

const SPEEDS = [0.8, 1, 1.15, 1.3, 1.6]

const WAVEFORM_HEIGHTS = [10, 18, 14, 22, 12, 20, 16, 24, 10, 18, 22, 14, 20, 16, 12, 24, 18, 14, 22, 10, 16, 20, 12, 18]

function scoreVoice(v: SpeechSynthesisVoice): number {
  const name = v.name.toLowerCase()
  const lang = v.lang.toLowerCase()

  if (!lang.startsWith('en')) return -1000

  let score = 0

  // Google voices in Chrome — very good
  if (name.includes('google')) score += 40

  // Microsoft Neural voices — excellent
  if (name.includes('microsoft')) score += 30
  if (name.includes('neural')) score += 20

  // Apple Enhanced voices (macOS/iOS)
  if (name.includes('enhanced')) score += 15
  if (name.includes('premium')) score += 15

  // Prefer Australian or British for a polished feel, then US
  if (lang.startsWith('en-au')) score += 8
  if (lang.startsWith('en-gb')) score += 6
  if (lang.startsWith('en-us')) score += 4

  // Prefer female voices for narration — generally rated more natural
  if (name.includes('female') || name.includes('zira') || name.includes('jenny') ||
      name.includes('aria') || name.includes('ava') || name.includes('samantha') ||
      name.includes('karen') || name.includes('catherine') || name.includes('serena')) {
    score += 5
  }

  // Penalise low-quality indicators
  if (name.includes('compact')) score -= 20
  if (v.default) score -= 2

  return score
}

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const scored = voices
    .map((v) => ({ v, s: scoreVoice(v) }))
    .filter((x) => x.s > -500)
    .sort((a, b) => b.s - a.s)
  return scored[0]?.v ?? null
}

// Split raw DOM text into natural sentence-level chunks
function extractSentences(minLen = 30): string[] {
  const rawParts: string[] = []
  document.querySelectorAll('h1, h2, h3, p, li').forEach((el) => {
    if (el.closest('[data-podcast-player]') || el.closest('nav')) return
    const t = el.textContent?.trim()
    if (t && t.length > 10) rawParts.push(t)
  })

  const joined = rawParts.join(' ')
  // Split on sentence-ending punctuation followed by a space or end of string
  const raw = joined.split(/(?<=[.!?])\s+/)
  return raw
    .map((s) => s.trim())
    .filter((s) => s.length >= minLen)
}

export default function ArticlePodcastPlayer({ title, readTime }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [chunks, setChunks] = useState<string[]>([])
  const [supported, setSupported] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const [voiceName, setVoiceName] = useState('')

  const chunkIndexRef = useRef(0)
  const chunksRef = useRef<string[]>([])
  const speedRef = useRef(1)
  const activeRef = useRef(false)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const speakNextRef = useRef<() => void>(() => {})

  speakNextRef.current = () => {
    const idx = chunkIndexRef.current
    const all = chunksRef.current
    if (!activeRef.current || idx >= all.length) {
      if (idx >= all.length) {
        setIsPlaying(false)
        setProgress(100)
        activeRef.current = false
      }
      return
    }
    const utt = new SpeechSynthesisUtterance(all[idx])
    utt.rate = speedRef.current * 0.92  // slightly slower for naturalness
    utt.pitch = 1.0
    utt.volume = 1.0
    if (voiceRef.current) utt.voice = voiceRef.current
    utt.onend = () => {
      chunkIndexRef.current++
      setProgress(Math.round((chunkIndexRef.current / all.length) * 100))
      speakNextRef.current()
    }
    utt.onerror = (e) => {
      if (e.error === 'interrupted') return
      activeRef.current = false
      setIsPlaying(false)
    }
    window.speechSynthesis.speak(utt)
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false)
      return
    }

    const init = () => {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        const best = pickBestVoice(voices)
        if (best) {
          voiceRef.current = best
          setVoiceName(best.name)
        }
      }
      const sentences = extractSentences()
      setChunks(sentences)
      chunksRef.current = sentences
    }

    // Voices may load asynchronously
    if (window.speechSynthesis.getVoices().length > 0) {
      init()
    } else {
      window.speechSynthesis.addEventListener('voiceschanged', init, { once: true })
    }

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  const handlePlay = () => {
    if (!supported || chunksRef.current.length === 0) return
    if (isPaused) {
      window.speechSynthesis.resume()
      setIsPlaying(true)
      setIsPaused(false)
      return
    }
    window.speechSynthesis.cancel()
    chunkIndexRef.current = 0
    setProgress(0)
    activeRef.current = true
    setIsPlaying(true)
    setIsPaused(false)
    setHasStarted(true)
    speakNextRef.current()
  }

  const handlePause = () => {
    window.speechSynthesis.pause()
    setIsPlaying(false)
    setIsPaused(true)
  }

  const handleStop = () => {
    window.speechSynthesis.cancel()
    activeRef.current = false
    setIsPlaying(false)
    setIsPaused(false)
    setProgress(0)
    chunkIndexRef.current = 0
    setHasStarted(false)
  }

  const handleSpeed = (s: number) => {
    setSpeed(s)
    speedRef.current = s
    if (isPlaying) {
      window.speechSynthesis.cancel()
      activeRef.current = true
      speakNextRef.current()
    }
  }

  const readMinutes = parseInt(readTime) || 9
  const listenMinutes = Math.ceil((readMinutes * 1.35) / speed)

  return (
    <div data-podcast-player="true" className="bg-[#0A0A0A] border-t-2 border-[#1A4D3A]">
      <style>{`
        @keyframes podcastWave {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }
        .podcast-bar-active {
          animation: podcastWave 0.75s ease-in-out infinite;
          background-color: #1A4D3A;
        }
        .podcast-bar-idle {
          background-color: rgba(26, 77, 58, 0.25);
        }
        .podcast-bar-done {
          background-color: rgba(26, 77, 58, 0.55);
        }
      `}</style>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isPlaying ? 'bg-[#1A4D3A]' : 'bg-[#1A4D3A]/40'}`} />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7A7872] uppercase">
            Field Notes &middot; Listen
          </span>
          {voiceName && (
            <span className="font-mono text-[9px] text-[#7A7872]/50 hidden sm:block truncate max-w-[200px]">
              {voiceName}
            </span>
          )}
          {!supported && (
            <span className="font-mono text-[10px] text-[#7A7872]/50">(not supported in this browser)</span>
          )}
        </div>

        {/* Player row */}
        <div className="flex items-center gap-5 md:gap-8">
          {/* Play / Pause */}
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            disabled={!supported}
            className="w-14 h-14 rounded-full bg-[#1A4D3A] flex items-center justify-center flex-shrink-0 hover:bg-[#3D7A60] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <rect x="2" y="1.5" width="4.5" height="13" rx="1.5" />
                <rect x="9.5" y="1.5" width="4.5" height="13" rx="1.5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
              </svg>
            )}
          </button>

          {/* Middle */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2 mb-0.5">
              <p className="font-display text-[#F5F4F0] text-[22px] leading-none truncate tracking-wide">
                {title.toUpperCase()}
              </p>
              <span className="font-mono text-[10px] text-[#7A7872] flex-shrink-0 hidden sm:block">
                ~{listenMinutes} min
              </span>
            </div>
            <p className="font-mono text-[11px] text-[#7A7872] mb-4">
              {speed}× &middot; {chunks.length > 0 ? `${chunks.length} sentences` : 'loading…'}
            </p>

            {/* Waveform */}
            <div className="flex items-end gap-[3px] h-7 mb-3" aria-hidden="true">
              {WAVEFORM_HEIGHTS.map((h, i) => {
                const barProgress = i / WAVEFORM_HEIGHTS.length
                const isDone = hasStarted && (progress / 100) > barProgress
                return (
                  <div
                    key={i}
                    className={isPlaying ? 'podcast-bar-active' : isDone ? 'podcast-bar-done' : 'podcast-bar-idle'}
                    style={{
                      width: '4px',
                      height: `${h}px`,
                      borderRadius: '2px',
                      animationDelay: isPlaying ? `${i * 0.045}s` : undefined,
                      transformOrigin: 'bottom',
                    }}
                  />
                )
              })}
            </div>

            {/* Progress track */}
            <div className="h-[2px] bg-[#1A4D3A]/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1A4D3A] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Speed + stop */}
          <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
            <div className="flex flex-col gap-1">
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeed(s)}
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-sm transition-colors ${
                    speed === s ? 'bg-[#1A4D3A] text-[#F5F4F0]' : 'text-[#7A7872] hover:text-[#F5F4F0]'
                  }`}
                >
                  {s}×
                </button>
              ))}
            </div>
            {hasStarted && (
              <button
                onClick={handleStop}
                className="font-mono text-[9px] text-[#7A7872]/50 hover:text-[#7A7872] mt-1 transition-colors"
                aria-label="Stop"
              >
                ■ stop
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
