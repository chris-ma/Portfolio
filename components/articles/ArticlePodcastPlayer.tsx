'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Props {
  title: string
  readTime: string
  slug: string
}

const SPEEDS = [0.8, 1, 1.15, 1.3, 1.6]

const WAVEFORM_HEIGHTS = [10, 18, 14, 22, 12, 20, 16, 24, 10, 18, 22, 14, 20, 16, 12, 24, 18, 14, 22, 10, 16, 20, 12, 18]

type Status = 'idle' | 'loading' | 'playing' | 'paused' | 'done' | 'error'

async function fetchPodcastAudio(slug: string): Promise<string> {
  const cacheKey = `podcast-blob-${slug}`
  const cached = sessionStorage.getItem(cacheKey)
  if (cached) return cached

  const res = await fetch(`/api/podcast?slug=${slug}`)
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Podcast failed' }))
    throw new Error(err.detail || err.error || 'Podcast generation failed')
  }
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  try { sessionStorage.setItem(cacheKey, url) } catch { /* storage full */ }
  return url
}

export default function ArticlePodcastPlayer({ title, slug }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [errorMsg, setErrorMsg] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [podcastUrl, setPodcastUrl] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const activeRef = useRef(false)
  const speedRef = useRef(1)

  const stopAll = useCallback(() => {
    activeRef.current = false
    audioRef.current?.pause()
    audioRef.current = null
    setStatus('idle')
    setProgress(0)
    setHasStarted(false)
    setErrorMsg('')
  }, [])

  const handlePlay = useCallback(async () => {
    if (status === 'paused' && audioRef.current) {
      audioRef.current.play()
      setStatus('playing')
      return
    }

    setErrorMsg('')
    setStatus('loading')
    setHasStarted(true)

    let url: string
    try {
      url = await fetchPodcastAudio(slug)
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Podcast generation failed'
      setErrorMsg(
        msg.includes('not configured')
          ? 'Add GOOGLE_AI_API_KEY to your environment variables to enable podcast mode.'
          : msg.includes('Script not found')
            ? 'Podcast script not yet generated for this article.'
            : msg
      )
      setStatus('error')
      return
    }

    setPodcastUrl(url)
    const audio = new Audio(url)
    audio.playbackRate = speedRef.current
    audioRef.current = audio
    activeRef.current = true
    setStatus('playing')
    setProgress(0)

    audio.ontimeupdate = () => {
      if (audio.duration) setProgress(Math.round((audio.currentTime / audio.duration) * 100))
    }
    audio.onended = () => {
      setStatus('done')
      setProgress(100)
      activeRef.current = false
    }
    audio.onerror = () => {
      setStatus('error')
      setErrorMsg('Audio playback failed.')
      activeRef.current = false
    }
    audio.play().catch(() => {
      setStatus('error')
      setErrorMsg('Audio playback blocked — tap play to try again.')
    })
  }, [status, slug])

  const handlePause = useCallback(() => {
    audioRef.current?.pause()
    setStatus('paused')
  }, [])

  const handleSpeed = useCallback((s: number) => {
    setSpeed(s)
    speedRef.current = s
    if (audioRef.current) audioRef.current.playbackRate = s
  }, [])

  useEffect(() => {
    return () => {
      activeRef.current = false
      audioRef.current?.pause()
    }
  }, [])

  const isPlaying = status === 'playing'
  const isLoading = status === 'loading'

  return (
    <div data-podcast-player="true" className="bg-[#0A0A0A] border-t-2 border-[#D4890A]/40">
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
          background-color: #D4890A;
        }
        .podcast-bar-idle {
          background-color: rgba(212, 137, 10, 0.2);
        }
        .podcast-bar-done {
          background-color: rgba(212, 137, 10, 0.45);
        }
        .podcast-spinner {
          animation: podcastSpin 0.8s linear infinite;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: #D4890A;
          border-radius: 50%;
          width: 18px;
          height: 18px;
        }
      `}</style>

      <div className="w-full px-4 sm:px-6 md:px-10 py-5 sm:py-8 md:max-w-[900px] md:mx-auto">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-500 ${isPlaying ? 'bg-[#D4890A]' : 'bg-[#D4890A]/30'}`}
          />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7A7872] uppercase">
            Field Notes · Podcast
          </span>
          <span className="ml-auto font-mono text-[8px] text-[#D4890A]/50 tracking-[0.12em] uppercase">
            Host + Expert · Gemini TTS
          </span>
        </div>

        {/* Error message */}
        {status === 'error' && errorMsg && (
          <div className="mb-4 font-mono text-[10px] text-red-400/80 leading-relaxed break-words">
            {errorMsg}
          </div>
        )}

        {/* Main player row */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-8">

          {/* Play / Pause button */}
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            disabled={isLoading || status === 'error'}
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-[#D4890A] hover:bg-[#B8750A]"
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

          {/* Middle: title + waveform + progress */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <p className="font-display text-[#F5F4F0] text-[18px] sm:text-[22px] leading-none truncate tracking-wide">
                {title.toUpperCase()}
              </p>
              <span className="font-mono text-[10px] text-[#7A7872] flex-shrink-0">~6-8 min</span>
            </div>
            <p className="font-mono text-[10px] sm:text-[11px] text-[#7A7872] mb-3">
              {speed}× &middot;{' '}
              {status === 'idle' ? 'Two speakers · tap to generate'
                : status === 'loading' ? 'Generating dialogue…'
                : status === 'error' ? 'Error'
                : status === 'done' ? 'Complete'
                : status === 'paused' ? 'Paused'
                : 'Playing'}
            </p>

            {/* Waveform */}
            <div className="flex items-end gap-[3px] h-6 sm:h-7 mb-3" aria-hidden="true">
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
            <div className="h-[2px] bg-[#D4890A]/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D4890A] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Speed + download — desktop */}
          <div className="hidden sm:flex flex-col items-end gap-1.5 flex-shrink-0">
            <div className="flex flex-col gap-1">
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeed(s)}
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-sm transition-colors ${
                    speed === s ? 'bg-[#D4890A] text-[#F5F4F0]' : 'text-[#7A7872] hover:text-[#F5F4F0]'
                  }`}
                >
                  {s}×
                </button>
              ))}
            </div>
            <div className="flex flex-col items-end gap-1 mt-1">
              {hasStarted && (
                <button
                  onClick={stopAll}
                  className="font-mono text-[9px] text-[#7A7872]/50 hover:text-[#7A7872] transition-colors"
                  aria-label="Stop"
                >
                  ■ stop
                </button>
              )}
              {podcastUrl && (
                <a
                  href={podcastUrl}
                  download={`${slug}-podcast.mp3`}
                  className="font-mono text-[9px] text-[#D4890A]/60 hover:text-[#D4890A] transition-colors"
                >
                  ↓ save
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Mobile bottom row */}
        <div className="flex items-center justify-between mt-4 sm:hidden">
          <div className="flex items-center gap-1">
            {SPEEDS.map((s) => (
              <button
                key={s}
                onClick={() => handleSpeed(s)}
                className={`font-mono text-[11px] px-2.5 py-1.5 rounded transition-colors ${
                  speed === s ? 'bg-[#D4890A] text-[#F5F4F0]' : 'text-[#7A7872]'
                }`}
              >
                {s}×
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {podcastUrl && (
              <a
                href={podcastUrl}
                download={`${slug}-podcast.mp3`}
                className="font-mono text-[11px] text-[#D4890A]/70 px-2 py-1.5"
              >
                ↓ save
              </a>
            )}
            {hasStarted && (
              <button
                onClick={stopAll}
                className="font-mono text-[11px] text-[#7A7872]/60 px-2 py-1.5"
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
