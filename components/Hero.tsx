"use client";

import Container from "./Container";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Badge from "./Badge";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      {/* ✅ Background animado (sutil + legível) */}

      <Container>
        <div className="py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* Left */}
            <div className="md:col-span-7">
              <Reveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200">
                  <Sparkles size={16} />
                  <span>Dados • BI • Ciência de Dados • Automação</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Convertendo informações em <span className="text-indigo-300">decisões</span> e{" "}
                  <span className="text-fuchsia-300">impacto</span>.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                  <span className="text-zinc-100 font-medium">
                    Transformo dados em estratégia, automação e modelos inteligentes
                    que impulsionam decisões reais.
                  </span>
                  <span className="block mt-2 text-zinc-400">
                    ETL • Analytics • Machine Learning • Dashboards • Integração de dados
                  </span>
                </p>
              </Reveal>



              <Reveal delay={0.18}>
                <div className="mt-7 flex flex-wrap gap-2">
                  {profile.highlights.slice(0, 5).map((h) => (
                    <Badge key={h}>{h}</Badge>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="#projetos"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    Ver projetos <ArrowRight size={18} />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={profile.github}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <Github size={18} /> GitHub
                  </motion.a>
                </div>
              </Reveal>
            </div>

            {/* Right */}
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-glow md:p-7">
                  {/* brilho interno do card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-cyan-400/10" />
                  <div className="absolute inset-0 noise" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-300/80">
                        Snapshot
                      </p>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Sparkles size={18} />
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-zinc-400">Foco</div>
                        <div className="mt-1 text-sm font-semibold">
                          ETL • Dashboards • KPIs • ML aplicado ao negócio
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-zinc-400">Stack</div>
                        <div className="mt-1 text-sm font-semibold">
                          Python • SQL • Power BI • PostgreSQL • MongoDB
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-zinc-400">Contato</div>
                        <div className="mt-1 text-sm font-semibold">{profile.email}</div>
                      </div>
                    </div>

                    {/* linha decorativa bem sutil */}
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <p className="mt-4 text-xs text-zinc-400">
                      Disponível para projetos e oportunidades em dados.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
