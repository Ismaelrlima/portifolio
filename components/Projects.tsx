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

  const github = project.links?.[0]?.href;

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

        {/* Modal */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <motion.div
            className="glass relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-glow"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Top bar */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 p-5 md:p-6">
              <div>
                <div className="text-sm text-zinc-400">Case study</div>
                <div className="mt-1 text-xl font-semibold tracking-tight">
                  {project.name}
                </div>
              </div>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
              >
                <X size={16} />
                Fechar
              </button>
            </div>

            {/* Content */}
            <div className="grid gap-6 p-5 md:grid-cols-12 md:p-6">
              {/* Image */}
              <div className="md:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src={project.image ?? "/projects/placeholder.png"}
                    alt={`Preview do projeto: ${project.name}`}
                    width={1600}
                    height={900}
                    className="h-[260px] w-full object-cover md:h-[360px]"
                    priority
                  />
                </div>

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
                    {github ? (
                      <a
                        href={github}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                      >
                        Ver no GitHub <ArrowUpRight size={18} />
                      </a>
                    ) : null}

                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      Fechar
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
          subtitle="Clique em um projeto para ver a imagem em tamanho maior + Problema, Solução e Impacto."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.05}>
              <button
                onClick={() => setSelected(p)}
                className="text-left"
                aria-label={`Abrir detalhes do projeto ${p.name}`}
              >
                <Card>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
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
                  </div>

                  <div className="mt-5">
                    <div className="text-sm font-semibold">{p.name}</div>
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
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
