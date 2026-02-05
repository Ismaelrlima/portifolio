"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import { ArrowRight, ChevronDown, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY < 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full">
      <Container>
        <div className="min-h-[100dvh] flex items-center justify-center py-20">
          <div className="w-full max-w-5xl text-center">
            <Reveal>
              <h1 className="text-3xl font-semibold tracking-tight md:text-6xl px-4 leading-[1.2] max-w-4xl mx-auto">
                Especialista em{" "}
                <span className="relative inline-block text-indigo-300 drop-shadow-[0_0_15px_rgba(165,180,252,0.6)]">
                  Analytics
                </span>{" "}
                &{" "}
                <span className="relative inline-block text-fuchsia-300 drop-shadow-[0_0_15px_rgba(240,171,252,0.6)]">
                  Machine Learning
                </span>
                <span className="inline">:</span> transformando dados em inteligência estratégica.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap justify-center gap-3 px-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projetos"
                  className="btn-premium inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Ver projetos <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  <Linkedin size={18} /> LinkedIn
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-10 left-0 right-0 z-40 flex justify-center">
        <AnimatePresence>
          {showArrow && (
            <motion.a
              href="#sobre"
              aria-label="Role para ver mais"
              className="pointer-events-auto"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <ChevronDown size={20} className="text-zinc-100" />
              </motion.div>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}