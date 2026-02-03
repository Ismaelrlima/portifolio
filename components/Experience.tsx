import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experiencia" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="experiência"
          title="Histórico profissional"
          subtitle="Atuação em varejo, automotivo e dados, com foco em BI, automação e geração de insights."
        />

        <div className="mt-10 space-y-4">
          {profile.experience.map((xp, i) => (
            <Reveal key={`${xp.title}-${xp.company}-${i}`} delay={i * 0.05}>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    {/* ✅ Corrigido: era xp.role, mas no seu profile é xp.title */}
                    <div className="text-base font-semibold">{xp.title}</div>

                    <div className="mt-1 text-sm text-zinc-300">
                      {xp.company}
                      {/* ✅ Mostra o place apenas se existir */}
                      {xp.place ? <span className="text-zinc-500"> • {xp.place}</span> : null}
                    </div>
                  </div>

                  {/* ✅ Mantém o período/datas */}
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200">
                    {xp.period}
                  </div>
                </div>

                <ul className="mt-5 list-inside list-disc space-y-2 text-sm text-zinc-300">
                  {xp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
