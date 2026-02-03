"use client";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const whatsappMessage = "Olá, vim do portfólio e gostaria de saber mais do seu serviço.";
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="contato"
          title="Vamos conversar"
          subtitle="Se você busca alguém para acelerar análises, automatizar rotinas e transformar dados em estratégia, me chame."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {/* Caixa esquerda: infos */}
          <div className="md:col-span-7">
            <Reveal>
              <Card>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                      <Mail size={18} /> Email
                    </div>
                    <a
                      className="mt-2 block text-sm text-zinc-300 hover:text-white transition"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                      <Phone size={18} /> Telefone
                    </div>
                    <div className="mt-2 text-sm text-zinc-300">{profile.phone}</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                      <Linkedin size={18} /> LinkedIn
                    </div>
                    <a
                      className="mt-2 block text-sm text-zinc-300 hover:text-white transition"
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir perfil
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                      <Github size={18} /> GitHub
                    </div>
                    <a
                      className="mt-2 block text-sm text-zinc-300 hover:text-white transition"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver repositórios
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Caixa direita: ações */}
          <div className="md:col-span-5">
            <Reveal delay={0.06}>
              <Card>
                <div className="text-sm font-semibold text-zinc-100">Ações rápidas</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Quer conversar mais rápido? Me chame no WhatsApp ou envie um email.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    <MessageCircle size={18} />
                    Enviar mensagem (WhatsApp)
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <Mail size={18} />
                    Enviar email
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
