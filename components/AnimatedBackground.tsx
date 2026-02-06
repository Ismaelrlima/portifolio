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
      if (typeof window === "undefined") return false
      const dm = (navigator as any).deviceMemory as number | undefined
      const cores = navigator.hardwareConcurrency || 0
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
      return !!reduced || (typeof dm === "number" && dm <= 4) || (cores > 0 && cores <= 4)
    })()

    const createNodes = (w: number, h: number) => {
      const isMobile = w < 768
      // ✅ Partículas aumentadas
      const base = isMobile ? 65 : 100 
      const count = lowPower ? Math.round(base * 0.7) : base

      // Aumenta a velocidade no mobile (0.55) vs desktop (0.18)
      const speed = isMobile ? 0.55 : 0.18

      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        type: Math.random() > 0.85 ? "hub" : "normal",
      }))
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      
      // ✅ FIX DEFINITIVO: Trava na altura da tela para não mexer no scroll
      const h = w < 768 ? window.screen.height : window.innerHeight

      // Ignora redimensionamento se a largura não mudou (evita lag no scroll do iOS)
      if (nodes.length > 0 && Math.abs(w - vw) < 10) return

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
            const alpha = (1 - dist / maxDist) * (a.type === "hub" || b.type === "hub" ? 0.35 : 0.22)
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

    let t: any = null
    const handleResize = () => {
      if (t) clearTimeout(t)
      t = setTimeout(resize, 250)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    resize()
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      if (t) clearTimeout(t)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10"
      style={{
        width: '100vw',
        height: '100lvh', // Ocupa a altura total estável
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        backgroundColor: '#050816',
        transform: 'translateZ(0)', // Mantém na camada de GPU
        willChange: 'transform'
      }}
    />
  )
}