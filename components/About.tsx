import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="sobre" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="sobre"
          title="Perfil profissional"
          subtitle="Resumo objetivo e orientado a impacto: do dado bruto ao insight, do dashboard à decisão."
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Card>
                <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                  {profile.headline}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {profile.highlights.map((h) => (
                    <div
                      key={h}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.06}>
              <Card>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">Educação</p>
                <div className="mt-5 space-y-4">
                  {profile.education.map((e) => (
                    <div key={e.course} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold">{e.course}</div>
                      <div className="mt-1 text-sm text-zinc-300">{e.school}</div>
                      <div className="mt-2 text-xs text-zinc-400">{e.period}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">Idiomas</div>
                  <div className="mt-2 text-sm text-zinc-200">
                    {profile.languages.join(" • ")}
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
