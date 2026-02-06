"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Instale com: npm install lucide-react

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const setup = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setShow(false);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (cancelled) return;
          setShow(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "-10% 0px 0px 0px",
        }
      );

      observer.observe(hero);
    };

    const t = window.setTimeout(setup, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
      observer?.disconnect();
    };
  }, []);

  // Fecha o menu mobile ao clicar em um link
  const closeMenu = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4"
        >
          <div className="w-full max-w-fit rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
            
            {/* --- Versão Desktop --- */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* --- Versão Mobile (Cabeçalho do Menu) --- */}
            <div className="flex md:hidden items-center justify-between px-4 py-3 min-w-[280px]">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Menu</span>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-zinc-300 hover:text-white transition"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* --- Menu Mobile Dropdown --- */}
            <AnimatePresence>
              {isOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="flex flex-col md:hidden border-t border-white/5"
                >
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={closeMenu}
                      className="px-6 py-4 text-zinc-300 hover:text-white hover:bg-white/5 transition border-b border-white/5 last:border-0"
                    >
                      {l.label}
                    </a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}