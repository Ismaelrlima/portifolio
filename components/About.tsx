"use client";

import Container from "./Container";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile } from "@/data/profile";
import Image from "next/image";

export default function About() {
  const techs = [
    "Python",
    "SQL",
    "Power BI",
    "Pandas",
    "PySpark",
    "PostgreSQL",
    "MongoDB",
    "Automação",
  ];

  return (
    <section id="sobre" className="relative py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Quem sou eu"
          title="Sobre mim" />


        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="order-1 md:order-1 md:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[280px]">
                <Image
                  src="/me/profile.png"
                  alt="Foto de perfil"
                  width={500}
                  height={500}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="mt-0 text-center">
                <h3 className="text-xl font-bold text-zinc-100">
                  {profile.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {profile.role}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="order-2 md:order-2 md:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
                <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                  <span className="text-zinc-100 font-semibold block">
                    Olá, eu sou o Ismael!!
                  </span>

                  <span className="block mt-4 text-zinc-300">
                    Sou um Especialista em Data Analytics & Machine Learning com mais de{" "}
                    <span className="text-zinc-100 font-semibold">
                      3 anos de experiência
                    </span>{" "}
                    prática apaixonado por transformar grandes volumes de dados brutos em
                    inteligência estratégica que move o ponteiro dos negócios. Venho ajudando
                    empresas dos setores varejista e automotivo a otimizar processos e
                    maximizar receitas através de dados.
                  </span>

                  <span className="block mt-4 text-zinc-300">
                    Minha abordagem une o rigor técnico da Ciência de Dados com a
                    agilidade do Business Intelligence. Não apenas crio
                    dashboards; eu construo pipelines de automação que economizam
                    horas de trabalho manual e desenvolvo modelos preditivos que
                    antecipam demandas de mercado.
                  </span>
                </p>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-200/90">
                    Tecnologias que uso
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {techs.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>


        <div className="mt-16 md:mt-24">
          <Reveal>
            <h3 className="mb-8 text-2xl font-bold text-zinc-100">
              Formação Acadêmica
            </h3>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {profile.education.map((edu, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/10">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-100">
                      {edu.course}
                    </h4>
                    <p className="mt-2 text-sm text-zinc-400">{edu.school}</p>
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {edu.period}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
