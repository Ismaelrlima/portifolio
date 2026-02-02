export const profile = {
  name: "Ismael Ribeiro dos Santos Lima",
  role: "Analista de Dados | Business Intelligence | Ciência de Dados",
  location: "Feira de Santana – Bahia",
  phone: "(75) 98152-7109",
  email: "canais185@gmail.com",
  github: "https://github.com/Ismaelrlima?tab=repositories",
  headline:
    "Analista de Dados com +3 anos de experiência prática em análise, BI, automação e modelagem preditiva, atuando com ETL, SQL, Python, dashboards e geração de insights orientados ao negócio.",
  highlights: [
    "ETL e integração de múltiplas fontes (internas/externas)",
    "SQL (PostgreSQL/MySQL) e performance de consultas",
    "Dashboards estratégicos (Power BI e Python)",
    "Machine Learning aplicado ao negócio (Scikit-learn)",
    "Automação e pipelines via APIs (Meta/Google)"
  ],
  skills: {
    "Python & Dados": ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Selenium"],
    "Bancos de Dados": ["PostgreSQL", "MySQL", "MongoDB"],
    "BI & Analytics": ["Power BI", "KPIs", "Dashboards", "Storytelling"],
    "Engenharia/Automação": ["ETL", "APIs", "Pipelines", "n8n", "SQLAlchemy"],
    "Dev & Colaboração": ["Git/GitHub", "Jupyter Notebooks", "Documentação"]
  },
  experience: [
    {
      title: "Analista de Dados | Business Intelligence",
      company: "Moto Clube Honda",
      period: "Ago/2025 – Atual",
      place: "Feira de Santana – BA",
      bullets: [
        "Integração e tratamento de dados de múltiplas fontes (ETL), garantindo consistência e qualidade.",
        "Extração e análise em bancos relacionais (PostgreSQL), com foco em integridade e performance.",
        "Criação de dashboards interativos para áreas estratégicas (KPIs e tendências).",
        "Soluções em Python para análises estatísticas, ML e previsões, apoiando decisões.",
        "Automação e pipelines com APIs do Meta e Google para atualização quase em tempo real."
      ]
    },
    {
      title: "Estágio em Ciência de Dados",
      company: "Maria Bonita",
      period: "Fev/2025 – Atual",
      place: "Varejo (7+ filiais)",
      bullets: [
        "Análises personalizadas e insights acionáveis para decisões estratégicas das unidades.",
        "Pipelines ETL em Python (Pandas/NumPy/Scikit-learn) e MongoDB.",
        "Dashboards no Power BI com automação e redução de tempo de geração em ~50%.",
        "Análises exploratórias (Matplotlib/Seaborn) para monitorar performance e padrões de vendas.",
        "Projeções de demanda com ML para redistribuição inteligente de estoque entre filiais."
      ]
    },
    {
      title: "Analista de Dados",
      company: "Racka Autopeças",
      period: "Jan/2023 – Fev/2025",
      place: "Segmento automotivo",
      bullets: [
        "Análise de grandes volumes de vendas/estoque/clientes, otimizando sortimento em ~15%.",
        "Dashboards no Power BI reduzindo ~30% o tempo de relatórios gerenciais.",
        "Processos ETL consolidando fontes distintas para análises consistentes.",
        "Automação de rotinas e atualização de bases, liberando ~10h/semana do time.",
        "Monitoramento de KPIs com ganhos de receita em produtos-chave e redução de excesso de estoque."
      ]
    }
  ],
  projects: [
  {
    name: "Monitoramento de Vendas Multicanal",
    image: "/projects/vendas.png",
    tags: ["Python", "Pandas", "Matplotlib", "Excel"],
    description:
      "Análise de receita, ticket médio e conversão por região, canal e loja.",
    problem:
      "Time sem visão consolidada por canal/loja e dependência de relatórios manuais, atrasando decisões.",
    solution:
      "Pipeline em Python para padronizar dados e gerar análises por canal/loja, com gráficos e exportação automatizada.",
    impact:
      "Acompanhamento mais rápido de KPIs, redução de retrabalho e identificação de oportunidades por canal/região.",
    links: [{ label: "GitHub", href: "https://github.com/Ismaelrlima?tab=repositories" }]
  },
  {
    name: "Redistribuição de Estoque (Multiloja)",
    image: "/projects/estoque.png",
    tags: ["Python", "NumPy", "Scikit-learn", "Estatística"],
    description:
      "Monitoramento e apoio à redistribuição entre lojas com estatística e ML.",
    problem:
      "Risco de ruptura em algumas lojas e excesso em outras, com decisão baseada em feeling.",
    solution:
      "Modelos e regras estatísticas para sugerir redistribuição, considerando giro, sazonalidade e demanda.",
    impact:
      "Melhor equilíbrio de estoque, redução de ruptura e uso mais eficiente do capital parado.",
    links: [{ label: "GitHub", href: "https://github.com/Ismaelrlima?tab=repositories" }]
  },
  {
    name: "Segmentação de Clientes e Produtos",
    image: "/projects/clientes.png",
    tags: ["SQL", "Power BI", "Insights"],
    description:
      "Segmentação e análise de produtos para campanhas e aumento de rentabilidade.",
    problem:
      "Dificuldade em identificar clientes de alto potencial e produtos com melhor margem/recorrência.",
    solution:
      "Consultas SQL + visualizações no Power BI para segmentar clientes e mapear produtos por performance.",
    impact:
      "Ações mais direcionadas, melhor uso de campanhas e aumento de conversão em ofertas estratégicas.",
    links: [{ label: "GitHub", href: "https://github.com/Ismaelrlima?tab=repositories" }]
  }
],
  education: [
    {
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      school: "Centro Universitário UNIFAN – Feira de Santana/BA",
      period: "Conclusão: 2025 (Nota MEC 5)"
    },
    {
      course: "Google Advanced Data Analytics Professional Certificate",
      school: "Coursera (Online)",
      period: "Em andamento"
    }
  ],
  languages: ["Inglês (Intermediário)", "Espanhol (Básico)"]
};
