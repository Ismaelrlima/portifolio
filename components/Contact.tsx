"use client";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import { Mail, Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const whatsappMessage = "Olá, vim do portfólio e gostaria de saber mais do seu serviço.";
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const contactMethods = [
    {
      icon: <MessageCircle size={22} />,
      label: "WhatsApp",
      value: "Mandar mensagem",
      href: whatsappUrl,
      color: "group-hover:text-green-400",
    },
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: "group-hover:text-indigo-400",
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "Conectar no perfil",
      href: `https://linkedin.com/in/${profile.linkedin}`,
      color: "group-hover:text-blue-400",
    },
    {
      icon: <Github size={22} />,
      label: "GitHub",
      value: "Ver repositórios",
      href: `https://github.com/${profile.github}`,
      color: "group-hover:text-white",
    },
  ];

  return (
    <section id="contato" className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="contato"
          title="Vamos projetar algo novo?"
          subtitle="Disponível para consultorias e projetos pontuais."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, idx) => (
            <Reveal key={method.label} delay={idx * 0.1}>
              <motion.a
                href={method.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="btn-premium group relative block h-full overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-px transition-all duration-500"
              >
                {/* Ajuste de altura: Removi p-6 do Card original (via CSS/Props se necessário) 
                   ou forçando um padding menor aqui dentro 
                */}
                <Card>
                  <div className="relative z-10 flex items-center gap-4 py-1"> 
                    {/* Ícone menor e alinhado à esquerda para economizar altura vertical */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-all duration-500 group-hover:bg-white/10 ${method.color}`}>
                      {method.icon}
                    </div>

                    <div className="flex flex-1 flex-col justify-center min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                          {method.label}
                        </span>
                        <ArrowRight size={12} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-zinc-400" />
                      </div>
                      <div className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white truncate">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <p className="text-[10px] font-medium tracking-widest text-zinc-500 uppercase">
              Remoto para o mundo
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}