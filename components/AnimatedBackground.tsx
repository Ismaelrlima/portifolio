"use client";

export default function AnimatedBackground() {
  return (
    <div className="data-bg">
      {/* camada de pontos + grid */}
      <div className="data-bg__dots" />
      <div className="data-bg__grid" />

      {/* rede (SVG leve) */}
      <svg
        className="data-bg__net"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* linhas */}
        <g className="net-lines">
          <line x1="90" y1="120" x2="420" y2="180" />
          <line x1="420" y1="180" x2="680" y2="90" />
          <line x1="680" y1="90" x2="980" y2="140" />
          <line x1="260" y1="420" x2="520" y2="340" />
          <line x1="520" y1="340" x2="840" y2="420" />
          <line x1="840" y1="420" x2="1080" y2="300" />
          <line x1="180" y1="260" x2="420" y2="180" />
          <line x1="420" y1="180" x2="520" y2="340" />
          <line x1="520" y1="340" x2="680" y2="90" />
          <line x1="520" y1="340" x2="980" y2="140" />
          <line x1="260" y1="420" x2="180" y2="260" />
          <line x1="1080" y1="300" x2="980" y2="140" />
        </g>

        {/* nós */}
        <g className="net-nodes">
          <circle cx="90" cy="120" r="5" />
          <circle cx="420" cy="180" r="6" />
          <circle cx="680" cy="90" r="5" />
          <circle cx="980" cy="140" r="6" />
          <circle cx="180" cy="260" r="5" />
          <circle cx="520" cy="340" r="7" />
          <circle cx="260" cy="420" r="6" />
          <circle cx="840" cy="420" r="6" />
          <circle cx="1080" cy="300" r="6" />
        </g>
      </svg>

      {/* “fluxo de dados” (faixa luminosa animada) */}
      <div className="data-bg__flow" />

      {/* scanline bem leve */}
      <div className="data-bg__scanline" />

      {/* vinheta */}
      <div className="data-bg__vignette" />
    </div>
  );
}
