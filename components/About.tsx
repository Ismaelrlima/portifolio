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
          title="Sobre mim"/>
          {/*subtitle="Um resumo direto de como eu trabalho e o que eu entrego."*/}
        

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-center">
          {/* FOTO - ESQUERDA (COLUNA 1-5) */}
          <div className="order-1 md:order-1 md:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[280px]">
                <Image
                  src="/me/profile.png"
                  alt="Foto de perfil"
                  width={520}
                  height={520}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </Reveal>
          </div>

          {/* TEXTO - DIREITA (COLUNA 6-12) */}
          <div className="order-2 md:order-2 md:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
                <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                  <span className="text-zinc-100 font-semibold">
                    Olá, eu sou o Ismael! 👋
                  </span>

                  <span className="block mt-4 text-zinc-300">
                    Sou um{" "}
                    <span className="text-zinc-100 font-medium">
                      Analista de Dados
                    </span>{" "}
                    &{" "}
                    <span className="text-zinc-100 font-medium">
                      Especialista em BI
                    </span>{" "}
                    apaixonado por transformar grandes volumes de dados brutos em
                    inteligência estratégica que move o ponteiro dos negócios.{" "}
                    <span className="text-zinc-100 font-semibold">
                      Com mais de 3 anos de experiência prática
                    </span>
                    , venho ajudando empresas dos setores varejista e automotivo
                    a otimizar processos e maximizar receitas através de dados.
                  </span>

                  {/* MESMA TONALIDADE DA PARTE DE CIMA */}
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
      </Container>
    </section>
  );
}
