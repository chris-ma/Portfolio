'use client'

import { useEffect, useRef } from 'react'

const VERT_SRC = `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAG_SRC = `#version 300 es
precision mediump float;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_scroll;

out vec4 fragColor;

// ── Noise helpers ────────────────────────────────────────────────────────────
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));
  float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 0.5 + 0.5;
}

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 4; i++) {
    v += amp * noise(p * freq);
    freq *= 2.1;
    amp  *= 0.48;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;

  // Aspect-correct + parallax offset (bg drifts at 25% of scroll speed)
  float aspect = u_resolution.x / u_resolution.y;
  uv.x *= aspect;
  uv.y -= u_scroll * 0.00022;

  float t = u_time * 0.06;

  // Domain warp: two layers of fbm drive the input coordinates
  vec2 q = vec2(
    fbm(uv + vec2(0.0,  0.0) + t * 0.5),
    fbm(uv + vec2(5.2,  1.3) + t * 0.4)
  );

  vec2 r = vec2(
    fbm(uv + 1.8 * q + vec2(1.7, 9.2) + t * 0.3),
    fbm(uv + 1.8 * q + vec2(8.3, 2.8) + t * 0.25)
  );

  float f = fbm(uv + 2.2 * r + t * 0.2);

  // Colour palette — Book Cloth: deep slate ground with barely-visible gold warmth
  vec3 deep  = vec3(0.051, 0.122, 0.157);  // #0D1F28 bk-deep
  vec3 slate = vec3(0.110, 0.200, 0.251);  // #1C3340 bk-slate
  vec3 warm  = vec3(0.831, 0.686, 0.431);  // #D4AF6E bk-gold

  // Blend — fabric formations in slate, gold warmth barely perceptible at peaks
  float t1 = smoothstep(0.35, 0.65, f);
  float t2 = smoothstep(0.68, 0.90, f);

  vec3 col = deep;
  col = mix(col, slate, t1 * 0.60);
  col = mix(col, warm,  t2 * 0.07);  // barely visible — foil catching ambient light

  // Vignette — edges pull toward bk-deep, reinforces depth
  vec2 vig = (gl_FragCoord.xy / u_resolution.xy) * 2.0 - 1.0;
  float vignette = 1.0 - dot(vig, vig) * 0.18;
  col *= vignette;

  fragColor = vec4(col, 1.0);
}
`

function compileShader(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('[WebGL shader]', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    throw new Error('Shader compile failed')
  }
  return shader
}

function createProgram(gl: WebGL2RenderingContext): WebGLProgram {
  const vert = compileShader(gl, gl.VERTEX_SHADER,   VERT_SRC)
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC)
  const prog = gl.createProgram()!
  gl.attachShader(prog, vert)
  gl.attachShader(prog, frag)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('[WebGL program]', gl.getProgramInfoLog(prog))
    throw new Error('Program link failed')
  }
  gl.deleteShader(vert)
  gl.deleteShader(frag)
  return prog
}

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false })
    if (!gl) {
      // Graceful fallback — canvas stays transparent, CSS bg shows
      return
    }

    let program: WebGLProgram
    try {
      program = createProgram(gl)
    } catch {
      return
    }

    // ── Fullscreen quad ──────────────────────────────────────────────────────
    const vao = gl.createVertexArray()!
    gl.bindVertexArray(vao)

    const buf = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1,  1, -1, -1,  1,  1, -1,  1,  1, -1,  1]),
      gl.STATIC_DRAW,
    )

    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)
    gl.bindVertexArray(null)

    // ── Uniforms ─────────────────────────────────────────────────────────────
    gl.useProgram(program)
    const uRes    = gl.getUniformLocation(program, 'u_resolution')
    const uTime   = gl.getUniformLocation(program, 'u_time')
    const uScroll = gl.getUniformLocation(program, 'u_scroll')

    // ── Resize ───────────────────────────────────────────────────────────────
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2)

    function resize() {
      const w = canvas!.clientWidth
      const h = canvas!.clientHeight
      canvas!.width  = Math.round(w * dpr)
      canvas!.height = Math.round(h * dpr)
      gl!.viewport(0, 0, canvas!.width, canvas!.height)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // ── Scroll tracking ───────────────────────────────────────────────────────
    let scrollY = window.scrollY
    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── RAF loop ─────────────────────────────────────────────────────────────
    let raf = 0
    let startTime = performance.now()

    function render() {
      const elapsed = (performance.now() - startTime) / 1000

      gl!.useProgram(program)
      gl!.uniform2f(uRes,    canvas!.width, canvas!.height)
      gl!.uniform1f(uTime,   elapsed)
      gl!.uniform1f(uScroll, scrollY)

      gl!.bindVertexArray(vao)
      gl!.drawArrays(gl!.TRIANGLES, 0, 6)
      gl!.bindVertexArray(null)

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      gl.deleteBuffer(buf)
      gl.deleteVertexArray(vao)
      gl.deleteProgram(program)
      const ext = gl.getExtension('WEBGL_lose_context')
      ext?.loseContext()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'block',
      }}
      aria-hidden="true"
    />
  )
}
