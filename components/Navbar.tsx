"use client";

import Container from "./Container";
import { profile } from "@/data/profile";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" }
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="group flex items-center gap-3">
            {/* <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/20 to-cyan-400/20" />
              <div className="absolute inset-0 noise" />
            </div> */}
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{profile.name}</div>
              <div className="text-xs text-zinc-400">{profile.role}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-300 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={profile.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
              aria-label="Abrir LinkedIn"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </motion.a>
          </div>
        </div>
      </Container>
    </div>
  );
}
