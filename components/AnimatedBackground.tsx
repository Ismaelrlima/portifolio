"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base (escuro premium) */}
      <div className="absolute inset-0 bg-black" />

      {/* Mesh estático (estrutura do fundo) */}
      <div className="absolute inset-0 bg-mesh" />

      {/* Aurora 1 */}
      <motion.div
        className="absolute -inset-[35%] blur-[80px] opacity-55"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgba(99,102,241,.30), transparent 58%)," +
            "radial-gradient(circle at 75% 35%, rgba(217,70,239,.22), transparent 60%)"
        }}
        animate={{
          x: ["-2%", "2%", "-2%"],
          y: ["-1%", "1%", "-1%"],
          scale: [1.02, 1.07, 1.02]
        }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Aurora 2 */}
      <motion.div
        className="absolute -inset-[35%] blur-[90px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 55% 75%, rgba(34,211,238,.18), transparent 60%)," +
            "radial-gradient(circle at 35% 70%, rgba(255,255,255,.06), transparent 65%)"
        }}
        animate={{
          x: ["2%", "-2%", "2%"],
          y: ["-1%", "1%", "-1%"],
          scale: [1.03, 1.09, 1.03]
        }}
        transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Partículas super sutis (não atrapalha) */}
      <motion.div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,.10) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 70% 55%, rgba(255,255,255,.08) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 40% 80%, rgba(255,255,255,.07) 0 1px, transparent 2px)"
        }}
        animate={{ opacity: [0.10, 0.20, 0.10] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Grid sutil + vinheta + noise pra legibilidade */}
      <div className="absolute inset-0 bg-grid-soft" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
