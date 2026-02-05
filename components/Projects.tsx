"use client";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
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
  const id = project.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[60]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.button 
          className="absolute inset-0 bg-black/80 backdrop-blur-md" 
          onClick={onClose}
        />

        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <motion.div
            layoutId={`card-${id}`}
            className="glass relative w-full max-w-4xl rounded-3xl shadow-glow h-[92dvh] md:h-auto md:max-h-[90vh] overflow-y-auto overscroll-contain"
          >
            <div className="flex items-start justify-between gap-3 border-b border-white/10 p-5 md:p-6">
              <motion.div layoutId={`title-${id}`}>
                <div className="text-sm text-zinc-400">Case study</div>
                <div className="mt-1 text-xl font-semibold tracking-tight">{project.name}</div>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="btn-premium flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-200"
              >
                <span><X size={20} /></span> <span>Fechar</span>
              </motion.button>
            </div>

            <div className="grid gap-6 p-5 pb-8 md:grid-cols-12 md:p-6">
              <div className="md:col-span-7">
                <motion.div
                  layoutId={`image-${id}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50"
                >
                  <Image
                    src={project.image ?? "/projects/placeholder.png"}
                    alt={project.name}
                    width={1600}
                    height={900}
                    /* IMAGEM SEM CORTE: object-contain e h-auto */
                    className="h-auto max-h-[50vh] w-full object-contain md:max-h-[60vh]"
                    priority
                  />
                </motion.div>
                
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
                    <motion.a
                      href={primaryLink}
                      target="_blank"
                      whileTap={{ scale: 0.98 }}
                      className="btn-premium flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-black"
                    >
                      <span>{primaryLabel}</span> <ArrowUpRight size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const projects = useMemo(() => profile.projects as Project[], []);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-14 md:py-20">
      <Container>
        <SectionTitle eyebrow="projetos" title="Projetos em Destaque" />

        <LayoutGroup>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, idx) => {
              const id = p.name.replace(/\s+/g, "-").toLowerCase();
              return (
                <Reveal key={p.name} delay={idx * 0.05}>
                  <motion.button
                    onClick={() => setSelected(p)}
                    className="text-left w-full group"
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div layoutId={`card-${id}`} className="project-hover rounded-3xl">
                      <Card>
                        <motion.div layoutId={`image-${id}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                            <Image
                              src={p.image ?? "/projects/placeholder.png"}
                              alt={p.name}
                              width={800}
                              height={450}
                              className="h-48 w-full object-cover"
                            />
                          </motion.div>
                        </motion.div>

                        <div className="mt-5">
                          <motion.div layoutId={`title-${id}`} className="text-lg font-semibold">{p.name}</motion.div>
                          <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{p.description}</p>
                          <div className="mt-5 flex items-center gap-2 text-xs font-bold text-indigo-300">
                            DETALHES DO CASE <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.button>
                </Reveal>
              );
            })}
          </div>

          <AnimatePresence>
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
          </AnimatePresence>
        </LayoutGroup>
      </Container>
    </section>
  );
}