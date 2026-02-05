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

    let vw = 0
    let vh = 0

    const getViewport = () => {
      // ✅ Evita “thrash” do visualViewport no iOS: usa clientHeight como base estável
      const w = document.documentElement.clientWidth
      const h = document.documentElement.clientHeight
      return { w, h }
    }

    const createNodes = (w: number, h: number) => {
      const isMobile = w < 768
      const count = isMobile ? 40 : 65

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
      const { w, h } = getViewport()

      // ✅ Só faz resize se mudou “de verdade” (evita pisca por variação de 1px)
      if (Math.abs(w - vw) < 2 && Math.abs(h - vh) < 2) return

      vw = w
      vh = h

      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)

      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

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
      drawBackground()

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > vw) n.vx *= -1
        if (n.y < 0 || n.y > vh) n.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const d = Math.hypot(n.x - n2.x, n.y - n2.y)

          if (d < 220) {
            ctx.strokeStyle = `rgba(120,130,255,${(1 - d / 220) * 0.35})`
            ctx.lineWidth = n.type === "hub" || n2.type === "hub" ? 1 : 0.6
            ctx.setLineDash([4, 6])
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
            ctx.setLineDash([])
          }
        }

        ctx.fillStyle =
          n.type === "hub" ? "rgba(165,180,252,0.9)" : "rgba(99,102,241,0.7)"

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.type === "hub" ? 2.8 : 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      frame = requestAnimationFrame(animate)
    }

    // ✅ Debounce real (em vez de resize por “scroll” do visualViewport)
    let t: number | null = null
    const requestResize = () => {
      if (t) window.clearTimeout(t)
      t = window.setTimeout(() => {
        resize()
        t = null
      }, 120)
    }

    resize()
    animate()

    window.addEventListener("resize", requestResize)
    window.visualViewport?.addEventListener("resize", requestResize)

    return () => {
      cancelAnimationFrame(frame)
      if (t) window.clearTimeout(t)
      window.removeEventListener("resize", requestResize)
      window.visualViewport?.removeEventListener("resize", requestResize)
    }
  }, [])

  return (
  <canvas
    ref={canvasRef}
    className="fixed inset-0 z-0 blur-[1.8px] scale-[1.03] pointer-events-none"
  />
)
}
