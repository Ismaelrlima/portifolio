"use client";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import { Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="contato"
          title="Vamos conversar"
          subtitle="Se você busca alguém para acelerar análises, automatizar rotinas e transformar dados em estratégia, me chame."
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Card>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Mail size={18} /> Email
                    </div>
                    <a className="mt-2 block text-sm text-zinc-300 hover:text-white transition" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Phone size={18} /> Telefone
                    </div>
                    <div className="mt-2 text-sm text-zinc-300">{profile.phone}</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin size={18} /> Local
                    </div>
                    <div className="mt-2 text-sm text-zinc-300">{profile.location}</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Github size={18} /> GitHub
                    </div>
                    <a className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href={profile.github} target="_blank">
                      Repositórios <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">Sugestão de mensagem</div>
                  <p className="mt-2 text-sm text-zinc-300">
                    “Oi Ismael! Vi seu portfólio e queria conversar sobre um projeto/vaga em Dados.
                    Você tem disponibilidade para uma call essa semana?”
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.06}>
              <Card>
                <div className="text-sm font-semibold">CTA rápido</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Respondo mais rápido por email. Se preferir, pode mandar um resumo do desafio,
                  stack atual e prazo.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${profile.email}?subject=Contato%20-%20Portf%C3%B3lio&body=Oi%20Ismael%2C%20tudo%20bem%3F%0A%0AVi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20...%0A%0AObrigado!`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    <Mail size={18} /> Enviar email
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={profile.github}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <Github size={18} /> Ver GitHub
                  </motion.a>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
