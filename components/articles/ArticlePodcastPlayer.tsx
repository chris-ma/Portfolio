'use client'

import { useState, useEffect, useRef } from 'react'

interface Props {
  title: string
  readTime: string
}

const SPEEDS = [0.75, 1, 1.25, 1.5, 2]

const WAVEFORM_HEIGHTS = [10, 18, 14, 22, 12, 20, 16, 24, 10, 18, 22, 14, 20, 16, 12, 24, 18, 14, 22, 10, 16, 20, 12, 18]

export default function ArticlePodcastPlayer({ title, readTime }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [chunks, setChunks] = useState<string[]>([])
  const [supported, setSupported] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  const chunkIndexRef = useRef(0)
  const chunksRef = useRef<string[]>([])
  const speedRef = useRef(1)
  const activeRef = useRef(false)
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
    utt.rate = speedRef.current
    utt.onend = () => {
      chunkIndexRef.current++
      setProgress(Math.round((chunkIndexRef.current / all.length) * 100))
      speakNextRef.current()
    }
    utt.onerror = () => {
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
    const texts: string[] = []
    document.querySelectorAll('h1, h2, h3, p, li').forEach((el) => {
      if (el.closest('[data-podcast-player]') || el.closest('nav')) return
      const text = el.textContent?.trim()
      if (text && text.length > 40) texts.push(text)
    })
    setChunks(texts)
    chunksRef.current = texts
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
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .podcast-bar-active {
          animation: podcastWave 0.7s ease-in-out infinite;
          background-color: #1A4D3A;
        }
        .podcast-bar-idle {
          background-color: rgba(26, 77, 58, 0.3);
        }
        .podcast-bar-done {
          background-color: rgba(26, 77, 58, 0.6);
        }
      `}</style>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isPlaying ? 'bg-[#1A4D3A]' : 'bg-[#1A4D3A]/40'}`} />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7A7872] uppercase">
            Field Notes &middot; AI Narrated
          </span>
          {!supported && (
            <span className="font-mono text-[10px] text-[#7A7872]/60">
              (browser not supported)
            </span>
          )}
        </div>

        {/* Player row */}
        <div className="flex items-center gap-5 md:gap-8">
          {/* Play / Pause button */}
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

          {/* Middle: title, time, waveform, progress */}
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
              {speed}× speed &middot; {chunks.length > 0 ? `${chunks.length} segments` : 'loading…'}
            </p>

            {/* Waveform bars */}
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

          {/* Speed + stop controls */}
          <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
            <div className="flex flex-col gap-1">
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeed(s)}
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-sm transition-colors ${
                    speed === s
                      ? 'bg-[#1A4D3A] text-[#F5F4F0]'
                      : 'text-[#7A7872] hover:text-[#F5F4F0]'
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
