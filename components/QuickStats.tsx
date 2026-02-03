import Container from "./Container";

export default function QuickStats() {
  const items = [
    { label: "Especialidade", value: "Data Analytics • BI • Machine Learning" },
    { label: "Entregas", value: "ETL • Dashboards • Automação • KPIs" },
    { label: "Stack", value: "Python • SQL • Power BI • PostgreSQL • MongoDB" }
  ];

  return (
    <section className="pb-6 md:pb-10">
      <Container>
        <div className="grid gap-3 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="glass rounded-2xl p-4 shadow-glow">
              <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                {it.label}
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-100">
                {it.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
