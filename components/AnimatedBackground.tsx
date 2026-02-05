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
    const ctx = canvas.getContext("2d")!

    let nodes: Node[] = []
    let frame: number
    let time = 0

    /* ------------------ Resize ------------------ */
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    /* ------------------ Nodes ------------------ */
    const createNodes = () => {
      nodes = Array.from({ length: 65 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        type: Math.random() > 0.85 ? "hub" : "normal"
      }))
    }

    /* ------------------ Background ------------------ */
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(
        0, 0,
        canvas.width, canvas.height
      )

      gradient.addColorStop(0, "#050816")   // azul bem escuro
      gradient.addColorStop(0.5, "#070b1f") // azul arroxeado
      gradient.addColorStop(1, "#02040a")   // quase preto, mas não chapado

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    /* ------------------ Animation ------------------ */
    const animate = () => {
      time += 0.002
      drawBackground()

      nodes.forEach((n, i) => {
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        // Conexões mais aparentes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const d = Math.hypot(n.x - n2.x, n.y - n2.y)

          if (d < 220) {
            ctx.strokeStyle = `rgba(120,130,255,${(1 - d / 220) * 0.35})`
            ctx.lineWidth = n.type === "hub" || n2.type === "hub" ? 1 : 0.6
            ctx.setLineDash([4, 6]) // efeito tracejado elegante

            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
            ctx.setLineDash([])
          }
        }

        // Nós
        ctx.fillStyle = n.type === "hub"
          ? "rgba(165,180,252,0.9)"
          : "rgba(99,102,241,0.7)"

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.type === "hub" ? 2.8 : 1.6, 0, Math.PI * 2)
        ctx.fill()
      })

      frame = requestAnimationFrame(animate)
    }

    /* ------------------ Init ------------------ */
    resize()
    createNodes()
    animate()

    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 blur-[1.8px] scale-[1.03]"
    />
  )
}
