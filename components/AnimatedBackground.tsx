"use client"
import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  type: "normal" | "hub"
}

export default function DataScienceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d", { alpha: true })!

    let nodes: Node[] = []
    let frame = 0
    let tick = 0

    let vw = 0
    let vh = 0

    const lowPower = (() => {
      const dm = (navigator as any).deviceMemory as number | undefined
      const cores = navigator.hardwareConcurrency || 0
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
      return !!reduced || (typeof dm === "number" && dm <= 4) || (cores > 0 && cores <= 4)
    })()

    const createNodes = (w: number, h: number) => {
      const isMobile = w < 768
      const base = isMobile ? 40 : 65
      const count = lowPower ? Math.round(base * 0.7) : base

      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        type: Math.random() > 0.85 ? "hub" : "normal",
      }))
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1

      // ✅ pega o tamanho REAL que o CSS está renderizando (100lvh + safe-area)
      const rect = canvas.getBoundingClientRect()
      const w = Math.max(1, Math.round(rect.width))
      const h = Math.max(1, Math.round(rect.height))

      // ✅ evita ficar recalculando por variações mínimas
      if (Math.abs(w - vw) < 2 && Math.abs(h - vh) < 2) return

      vw = w
      vh = h

      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (nodes.length === 0) {
        createNodes(w, h)
      } else {
        for (const n of nodes) {
          n.x = Math.min(Math.max(n.x, 0), w)
          n.y = Math.min(Math.max(n.y, 0), h)
        }
      }
    }

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, vw, vh)
      gradient.addColorStop(0, "#050816")
      gradient.addColorStop(0.5, "#070b1f")
      gradient.addColorStop(1, "#02040a")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, vw, vh)
    }

    const animate = () => {
      if (lowPower) {
        tick = (tick + 1) % 2
        if (tick === 1) {
          frame = requestAnimationFrame(animate)
          return
        }
      }

      drawBackground()

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]

        a.x += a.vx
        a.y += a.vy

        if (a.x < 0 || a.x > vw) a.vx *= -1
        if (a.y < 0 || a.y > vh) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          const maxDist = a.type === "hub" || b.type === "hub" ? 170 : 120
          if (dist < maxDist) {
            const alpha =
              (1 - dist / maxDist) * (a.type === "hub" || b.type === "hub" ? 0.35 : 0.22)
            ctx.strokeStyle = `rgba(140, 160, 255, ${alpha})`
            ctx.lineWidth = a.type === "hub" || b.type === "hub" ? 1.3 : 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.fillStyle = n.type === "hub" ? "rgba(180, 200, 255, 0.9)" : "rgba(130, 150, 255, 0.65)"
        ctx.arc(n.x, n.y, n.type === "hub" ? 2.1 : 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      frame = requestAnimationFrame(animate)
    }

    // ✅ resize debounced
    let t: number | null = null
    const requestResize = () => {
      if (t) window.clearTimeout(t)
      t = window.setTimeout(resize, 60)
    }

    // ✅ pega mudanças de viewport + barras do navegador
    const vv = window.visualViewport
    vv?.addEventListener("resize", requestResize)
    vv?.addEventListener("scroll", requestResize)
    window.addEventListener("resize", requestResize)
    window.addEventListener("orientationchange", requestResize)
    window.addEventListener("scroll", requestResize, { passive: true })

    // ✅ observa mudanças reais no tamanho do canvas (quando CSS recalcula lvh)
    const ro = new ResizeObserver(() => requestResize())
    ro.observe(canvas)

    // init
    resize()
    createNodes(vw, vh)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      if (t) window.clearTimeout(t)

      vv?.removeEventListener("resize", requestResize)
      vv?.removeEventListener("scroll", requestResize)
      window.removeEventListener("resize", requestResize)
      window.removeEventListener("orientationchange", requestResize)
      window.removeEventListener("scroll", requestResize)

      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed left-0 top-0 -z-10 w-[100vw]"
      // ✅ 100lvh cobre inclusive a área “extra” quando as barras mudam
      // ✅ safe-area garante iPhone com notch/home-indicator sem cortar
      style={{
        height: "calc(100lvh + env(safe-area-inset-bottom))",
      }}
    />
  )
}
