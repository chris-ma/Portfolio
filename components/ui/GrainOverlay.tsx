'use client'

import { useEffect, useRef } from 'react'

/**
 * Canvas-based film grain — generated as a raster PNG tile on mount,
 * tiled and shifted every frame via CSS animation.
 * Gives the dark slate ground the tactile feel of book cloth / heavy paper.
 */
export default function GrainOverlay() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!
    const img = ctx.createImageData(256, 256)
    const { data } = img

    for (let i = 0; i < data.length; i += 4) {
      const v = (Math.random() * 255) | 0
      data[i]     = v
      data[i + 1] = v
      data[i + 2] = v
      data[i + 3] = v   // alpha = same as luma — darker patches more opaque
    }
    ctx.putImageData(img, 0, 0)

    if (divRef.current) {
      divRef.current.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`
    }
  }, [])

  return (
    <div
      ref={divRef}
      aria-hidden="true"
      className="grain-overlay"
    />
  )
}
