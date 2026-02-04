"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const setup = () => {
      const hero = document.getElementById("hero");

      // Se não achar o hero, NÃO mostra navbar (evita ficar "travada" no topo)
      if (!hero) {
        setShow(false);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (cancelled) return;

          // entry.isIntersecting = hero visível
          // show = quando hero NÃO está mais visível
          setShow(!entry.isIntersecting);
        },
        {
          // Quando o topo do hero sai do viewport, a navbar aparece
          // Ajuste o rootMargin se quiser que apareça um pouco antes/depois
          root: null,
          threshold: 0,
          rootMargin: "-10% 0px 0px 0px",
        }
      );

      observer.observe(hero);
    };

    // Garante que o #hero já existe (timing do Next/React)
    const t = window.setTimeout(setup, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3"
        >
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <nav className="flex items-center gap-1 px-3 py-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
