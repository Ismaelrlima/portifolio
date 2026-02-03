"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithub, SiJupyter, SiN8N, SiSelenium
} from "react-icons/si";

type Tech = { name: string; icon: React.ReactNode };

const techs: Tech[] = [
  { name: "Python", icon: <SiPython /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  // ✅ Power BI via imagem (para evitar erro de export)
  {
    name: "Power BI",
    icon: (
      <span className="relative inline-block h-[18px] w-[18px] opacity-80 group-hover:opacity-100 transition">
        <Image
          src="/tech/powerbi.svg"
          alt="Power BI"
          fill
          className="object-contain"
          sizes="18px"
        />
      </span>
    )
  },

  { name: "Selenium", icon: <SiSelenium /> },
  { name: "n8n", icon: <SiN8N /> },
  { name: "Jupyter", icon: <SiJupyter /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> }
];

export default function TechStrip() {
  return (
    <div className="glass rounded-2xl p-4 shadow-glow">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
          Tecnologias
        </div>
        <div className="text-xs text-zinc-500">stack principal</div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <motion.div
          className="flex gap-6 px-5 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...techs, ...techs].map((t, idx) => (
            <div key={`${t.name}-${idx}`} className="group flex items-center gap-2">
              <span className="text-lg text-zinc-200/80 group-hover:text-white transition">
                {t.icon}
              </span>
              <span className="text-xs text-zinc-300/70 group-hover:text-zinc-100 transition">
                {t.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
