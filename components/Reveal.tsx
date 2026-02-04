"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }} // Agora anima direto ao carregar
      transition={{ 
        duration: 0.4, 
        ease: "easeOut", 
        delay: delay + 0.8 // Começa logo após o loader sumir
      }}
    >
      {children}
    </motion.div>
  );
}