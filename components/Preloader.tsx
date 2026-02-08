"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  useEffect(() => {
    // Verifica se a página já carregou completamente
    const handleLoad = () => setIsFullyLoaded(true);

    if (document.readyState === "complete") {
      setIsFullyLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Gerenciador do contador
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 99 && !isFullyLoaded) return 99;
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 15); 

    return () => {
      clearInterval(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [isFullyLoaded]);

  useEffect(() => {
    if (count === 100) {
      setTimeout(onComplete, 500);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020205]"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-7xl font-bold tracking-tighter text-white md:text-9xl"
        >
          {count}%
        </motion.div>
        
        <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10 md:w-80">
          <motion.div
            className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
          Sincronizando Base de Dados
        </span>
      </div>
    </motion.div>
  );
}