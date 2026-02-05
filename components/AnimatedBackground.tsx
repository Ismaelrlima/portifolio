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

    /* ------------------ Resize (Com correção de nitidez) ------------------ */
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      // Ajustamos a resolução interna do canvas
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      
      // Ajustamos o contexto para desenhar na escala correta
      ctx.scale(dpr, dpr)
      
      // Mantemos o tamanho visual via CSS
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      
      createNodes() // Recria os nós para preencher o novo tamanho
    }

    /* ------------------ Nodes ------------------ */
    const createNodes = () => {
      // No mobile, reduzimos apenas um pouco a quantidade para não travar, 
      // mas mantemos a estética densa do PC
      const isMobile = window.innerWidth < 768
      const count = isMobile ? 40 : 65

      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        type: Math.random() > 0.85 ? "hub" : "normal"
      }))
    }

    /* ------------------ Background Original ------------------ */
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight)

      gradient.addColorStop(0, "#050816")   // azul bem escuro
      gradient.addColorStop(0.5, "#070b1f") // azul arroxeado
      gradient.addColorStop(1, "#02040a")   // quase preto

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

    /* ------------------ Animation ------------------ */
    const animate = () => {
      time += 0.002
      drawBackground()

      nodes.forEach((n, i) => {
        n.x += n.vx
        n.y += n.vy

        // Bordas baseadas no tamanho da janela
        if (n.x < 0 || n.x > window.innerWidth) n.vx *= -1
        if (n.y < 0 || n.y > window.innerHeight) n.vy *= -1

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

        ctx.fillStyle = n.type === "hub"
          ? "rgba(165,180,252,0.9)"
          : "rgba(99,102,241,0.7)"

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.type === "hub" ? 2.8 : 1.6, 0, Math.PI * 2)
        ctx.fill()
      })

      frame = requestAnimationFrame(animate)
    }

    resize()
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
      // Mantive seu Blur e Scale originais aqui
      className="fixed inset-0 -z-10 blur-[1.8px] scale-[1.03]"
    />
  )
}