"use client";

import Container from "./Container";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Badge from "./Badge";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
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
                    Transformo dados em estratégia, automação e modelos inteligentes que impulsionam decisões reais.
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
                    className="btn-premium inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    <span className="relative z-10">Ver projetos</span>
                    <ArrowRight size={18} className="relative z-10" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={profile.github}
                    target="_blank"
                    className="btn-premium inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Github size={18} /> GitHub
                    </span>
                  </motion.a>
                </div>
              </Reveal>
            </div>

            {/* Right (Foto solta, completa, sem efeitos) */}
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative mx-auto w-full max-w-[290px]">
                  <Image
                    src="/me/profile.png"
                    alt="Foto de perfil"
                    width={520}
                    height={520}
                    className="h-auto w-full"
                    priority
                  />

                  {/* Nome e cargo (clean) */}
                  <div className="mt-4 text-center">
                    <div className="text-lg font-semibold tracking-tight text-zinc-100">
                      {profile.name}
                    </div>
                    <div className="mt-1 text-sm text-zinc-400">{profile.role}</div>

                  {/*<div className="mt-4 flex justify-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                        {profile.email}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                        Python • SQL • BI • ML
                      </span>
                    </div>*/}
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
