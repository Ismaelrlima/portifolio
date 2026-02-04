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
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function ProjectModal({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) {
  useLockBodyScroll(true);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // Link principal (GitHub OU LinkedIn)
  const primaryLink = project.links?.[0]?.href;
  const isLinkedIn = (primaryLink ?? "").includes("linkedin.com");
  const primaryLabel = isLinkedIn ? "Ver no LinkedIn" : "Ver no GitHub";

  const id = project.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <motion.button
          aria-label="Fechar modal"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal wrapper */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          {/* Shared layout container */}
          <motion.div
            layoutId={`card-${id}`}
            className="glass relative w-full max-w-4xl rounded-3xl shadow-glow
                       h-[92dvh] md:h-auto md:max-h-[90vh]
                       overflow-y-auto overscroll-contain"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 p-5 md:p-6">
              <motion.div layoutId={`title-${id}`}>
                <div className="text-sm text-zinc-400">Case study</div>
                <div className="mt-1 text-xl font-semibold tracking-tight">
                  {project.name}
                </div>
              </motion.div>

              <button
                onClick={onClose}
                className="btn-premium inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/10 transition"
              >
                <X size={26} className="mr-2" />
                Fechar
              </button>

            </div>

            {/* Content */}
            <div className="grid gap-6 p-5 pb-8 md:grid-cols-12 md:p-6">
              {/* Image */}
              <div className="md:col-span-7">
                <motion.div
                  layoutId={`image-${id}`}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={project.image ?? "/projects/placeholder.png"}
                    alt={`Preview do projeto: ${project.name}`}
                    width={1600}
                    height={900}
                    className="h-[180px] w-full object-cover sm:h-[240px] md:h-[360px]"
                    priority
                  />
                </motion.div>

                {project.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Text */}
              <div className="md:col-span-5">
                <div className="space-y-3">
                  {project.description ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                        Resumo
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {project.description}
                      </p>
                    </div>
                  ) : null}

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                      Problema
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {project.problem ?? "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                      Solução
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {project.solution ?? "—"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                      Impacto
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {project.impact ?? "—"}
                    </p>
                  </div>

                  <div className="mt-1 flex flex-wrap gap-2">
                    {primaryLink ? (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-premium inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                      >
                        <span className="relative z-10 inline-flex items-center gap-2">
                          {primaryLabel} <ArrowUpRight size={18} />
                        </span>
                      </a>
                    ) : null}

                    <button
                      onClick={onClose}
                      className="btn-premium inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      <span className="relative z-10">Fechar</span>
                    </button>
                  </div>
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
        <SectionTitle
          eyebrow="projetos"
          title="Projetos (case study)"
          /*subtitle="Passe o mouse para ver o glow roxo. Clique para abrir com transição suave."*/
        />

        <LayoutGroup>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, idx) => {
              const id = p.name.replace(/\s+/g, "-").toLowerCase();

              return (
                <Reveal key={p.name} delay={idx * 0.05}>
                  <motion.button
                    onClick={() => setSelected(p)}
                    className="text-left w-full"
                    aria-label={`Abrir detalhes do projeto ${p.name}`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      layoutId={`card-${id}`}
                      className="project-hover rounded-3xl"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Card>
                        <motion.div
                          layoutId={`image-${id}`}
                          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        >
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Image
                              src={p.image ?? "/projects/placeholder.png"}
                              alt={`Preview do projeto: ${p.name}`}
                              width={1200}
                              height={700}
                              className="h-44 w-full object-cover"
                              priority={idx === 0}
                            />
                          </motion.div>
                        </motion.div>

                        <div className="mt-5">
                          <motion.div
                            layoutId={`title-${id}`}
                            className="text-sm font-semibold"
                          >
                            {p.name}
                          </motion.div>

                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {p.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags?.slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="mt-5 inline-flex items-center gap-2 text-xs text-zinc-400">
                            Clique para ver detalhes <ArrowUpRight size={16} />
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
            {selected ? (
              <ProjectModal project={selected} onClose={() => setSelected(null)} />
            ) : null}
          </AnimatePresence>
        </LayoutGroup>
      </Container>
    </section>
  );
}
