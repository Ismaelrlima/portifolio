"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Bloqueia o scroll enquanto carrega para evitar bugs de posição
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Renderizamos o conteúdo sempre, mas controlamos a visibilidade inicial 
         para o navegador já ir processando o layout por baixo do loader.
      */}
      <div className={isLoading ? "invisible h-screen overflow-hidden" : "visible"}>
        <Navbar />
        <Hero />
        <QuickStats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}