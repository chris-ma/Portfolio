'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Props {
  title: string
  readTime: string
}

const SPEEDS = [0.8, 1, 1.15, 1.3, 1.6]

const WAVEFORM_HEIGHTS = [10, 18, 14, 22, 12, 20, 16, 24, 10, 18, 22, 14, 20, 16, 12, 24, 18, 14, 22, 10, 16, 20, 12, 18]

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'done' | 'error'

function extractChunks(): string[] {
  const chunks: string[] = []
  document.querySelectorAll('h1, h2, h3, p, li').forEach((el) => {
    if (el.closest('[data-podcast-player]') || el.closest('nav')) return
    const t = el.textContent?.trim()
    if (t && t.length > 15) chunks.push(t)
  })
  return chunks
}

async function fetchAudio(text: string): Promise<string> {
  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'TTS failed' }))
    throw new Error(err.detail || err.error || 'TTS failed')
  }
  const blob = await res.blob()
  return URL.createObjectURL(blob)
}

export default function ArticlePodcastPlayer({ title, readTime }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [errorMsg, setErrorMsg] = useState('')
  const [hasStarted, setHasStarted] = useState(false)

  const chunksRef = useRef<string[]>([])
  const chunkIndexRef = useRef(0)
  const cacheRef = useRef<Map<number, string>>(new Map()) // index → blob URL
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const activeRef = useRef(false)
  const speedRef = useRef(1)

  const revokeAll = useCallback(() => {
    cacheRef.current.forEach((url) => URL.revokeObjectURL(url))
    cacheRef.current.clear()
  }, [])

  const playIndex = useCallback(
    async (idx: number) => {
      if (!activeRef.current) return
      const chunks = chunksRef.current
      if (idx >= chunks.length) {
        setStatus('done')
        setProgress(100)
        activeRef.current = false
        return
      }

      // Pre-fetch next chunk in background
      const prefetchIdx = idx + 1
      if (prefetchIdx < chunks.length && !cacheRef.current.has(prefetchIdx)) {
        fetchAudio(chunks[prefetchIdx])
          .then((url) => cacheRef.current.set(prefetchIdx, url))
          .catch(() => {})
      }

      // Get or fetch current chunk
      let url = cacheRef.current.get(idx)
      if (!url) {
        setStatus('loading')
        try {
          url = await fetchAudio(chunks[idx])
          cacheRef.current.set(idx, url)
        } catch (e: unknown) {
          const msg = e instanceof Error ? e.message : 'TTS failed'
          if (msg.includes('not configured')) {
            setErrorMsg('Add CARTESIA_API_KEY to your Vercel environment variables to enable audio.')
          } else {
            setErrorMsg(msg)
          }
          setStatus('error')
          activeRef.current = false
          return
        }
      }

      if (!activeRef.current) return

      const audio = new Audio(url)
      audio.playbackRate = speedRef.current
      audioRef.current = audio
      setStatus('playing')

      audio.onended = () => {
        if (!activeRef.current) return
        chunkIndexRef.current = idx + 1
        setProgress(Math.round(((idx + 1) / chunks.length) * 100))
        playIndex(idx + 1)
      }

      audio.onerror = () => {
        if (!activeRef.current) return
        setStatus('error')
        setErrorMsg('Audio playback failed.')
        activeRef.current = false
      }

      audio.play().catch(() => {
        if (!activeRef.current) return
        setStatus('error')
        setErrorMsg('Audio playback failed.')
      })
    },
    [],
  )

  useEffect(() => {
    return () => {
      activeRef.current = false
      audioRef.current?.pause()
      revokeAll()
    }
  }, [revokeAll])

  const handlePlay = useCallback(async () => {
    if (status === 'paused' && audioRef.current) {
      audioRef.current.play()
      setStatus('playing')
      return
    }

    chunksRef.current = extractChunks()
    chunkIndexRef.current = 0
    setProgress(0)
    setErrorMsg('')
    activeRef.current = true
    setHasStarted(true)
    revokeAll()
    await playIndex(0)
  }, [status, playIndex, revokeAll])

  const handlePause = useCallback(() => {
    audioRef.current?.pause()
    setStatus('paused')
  }, [])

  const handleStop = useCallback(() => {
    activeRef.current = false
    audioRef.current?.pause()
    audioRef.current = null
    revokeAll()
    chunkIndexRef.current = 0
    setStatus('idle')
    setProgress(0)
    setHasStarted(false)
    setErrorMsg('')
  }, [revokeAll])

  const handleSpeed = useCallback((s: number) => {
    setSpeed(s)
    speedRef.current = s
    if (audioRef.current) {
      audioRef.current.playbackRate = s
    }
  }, [])

  const isPlaying = status === 'playing'
  const isLoading = status === 'loading'
  const readMinutes = parseInt(readTime) || 9
  const listenMinutes = Math.ceil((readMinutes * 1.35) / speed)

  return (
    <div data-podcast-player="true" className="bg-[#0A0A0A] border-t-2 border-[#1A4D3A]">
      <style>{`
        @keyframes podcastWave {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }
        @keyframes podcastSpin {
          to { transform: rotate(360deg); }
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
        .podcast-spinner {
          animation: podcastSpin 0.8s linear infinite;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: #fff;
          border-radius: 50%;
          width: 18px;
          height: 18px;
        }
      `}</style>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${isPlaying ? 'bg-[#1A4D3A]' : 'bg-[#1A4D3A]/40'}`}
          />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7A7872] uppercase">
            Field Notes &middot; Listen
          </span>
          <span className="font-mono text-[9px] text-[#7A7872]/50 hidden sm:block">
            Cartesia Sonic-2
          </span>
          {status === 'error' && (
            <span className="font-mono text-[10px] text-red-400/80 truncate max-w-[300px]">
              {errorMsg || 'TTS error'}
            </span>
          )}
        </div>

        {/* Player row */}
        <div className="flex items-center gap-5 md:gap-8">
          {/* Play / Pause */}
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            disabled={isLoading || status === 'error'}
            className="w-14 h-14 rounded-full bg-[#1A4D3A] flex items-center justify-center flex-shrink-0 hover:bg-[#3D7A60] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={isPlaying ? 'Pause' : isLoading ? 'Loading' : 'Play'}
          >
            {isLoading ? (
              <div className="podcast-spinner" />
            ) : isPlaying ? (
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
              {speed}× &middot;{' '}
              {status === 'idle'
                ? 'Ready'
                : status === 'loading'
                  ? 'Generating audio…'
                  : status === 'error'
                    ? 'Error'
                    : status === 'done'
                      ? 'Complete'
                      : status === 'paused'
                        ? 'Paused'
                        : 'Playing'}
            </p>

            {/* Waveform */}
            <div className="flex items-end gap-[3px] h-7 mb-3" aria-hidden="true">
              {WAVEFORM_HEIGHTS.map((h, i) => {
                const barProgress = i / WAVEFORM_HEIGHTS.length
                const isDone = hasStarted && progress / 100 > barProgress
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
