import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import TechStrip from "./TechStrip";

export default function Skills() {
  const entries = Object.entries(profile.skills);

  return (
    <section id="skills" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="skills"
          title="Tecnologias e competências"
          subtitle="Stack principal em destaque (logos), e abaixo os grupos de skills de forma objetiva."
        />

        <Reveal>
          <TechStrip />
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {entries.map(([group, items], idx) => (
            <Reveal key={group} delay={idx * 0.04}>
              <Card>
                <div className="text-sm font-semibold">{group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
