"use client";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Project = (typeof profile.projects)[number] & {
  image?: string;
  problem?: string;
  solution?: string;
  impact?: string;
};

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useLockBodyScroll(true);

  const primaryLink = project.links?.[0]?.href;
  const isLinkedIn = (primaryLink ?? "").includes("linkedin.com");
  const primaryLabel = isLinkedIn ? "Ver no LinkedIn" : "Ver no GitHub";

  return (
    <motion.div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />

      <motion.button
        onClick={onClose}
        aria-label="Fechar modal"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="absolute top-4 right-4 z-[70] flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white md:top-6 md:right-6"
      >
        <X size={18} /> <span>Fechar</span>
      </motion.button>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="glass relative w-full max-w-4xl rounded-3xl shadow-glow h-[92dvh] md:h-auto md:max-h-[90vh] overflow-y-auto overscroll-contain bg-zinc-900"
      >

        <div className="border-b border-white/10 p-5 md:p-6">
          <div>
            <div className="text-sm text-zinc-400">Case study</div>
            <div className="mt-1 text-xl font-semibold tracking-tight">{project.name}</div>
          </div>
        </div>

        <div className="grid gap-6 p-5 pb-8 md:grid-cols-12 md:p-6">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
              <Image
                src={project.image ?? "/projects/placeholder.png"}
                alt={project.name}
                width={1200}
                height={675}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags?.map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 space-y-4">
            {[
              { label: "Problema", text: project.problem },
              { label: "Solução", text: project.solution },
              { label: "Impacto", text: project.impact }
            ].map(item => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{item.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.text ?? "—"}</p>
              </div>
            ))}
            <div className="pt-4 flex gap-3">
              {primaryLink && (
                <a
                  href={primaryLink}
                  target="_blank"
                  className="btn-premium flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-black"
                >
                  <span>{primaryLabel}</span> <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = useMemo(() => profile.projects as Project[], []);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-14 md:py-20">
      <Container>
        <SectionTitle eyebrow="projetos" title="Projetos em Destaque" />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.05}>
              <button
                onClick={() => setSelected(p)}
                className="project-hover rounded-3xl text-left w-full transition-transform active:scale-[0.98]"
              >
                <Card>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="hover:scale-105 transition-transform duration-500">
                      <Image
                        src={p.image ?? "/projects/placeholder.png"}
                        alt={p.name}
                        width={800}
                        height={450}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="text-lg font-semibold">{p.name}</div>
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{p.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-indigo-300">
                      DETALHES DO CASE <ArrowUpRight size={14} />
                    </div>
                  </div>
                </Card>
              </button>
            </Reveal>
          ))}
        </div>

        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </Container>
    </section>
  );
}