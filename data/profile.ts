export const profile = {
  name: "Ismael Ribeiro dos Santos Lima",
  role: "Analista de Dados | Business Intelligence | Ciência de Dados",
  location: "linkedin.com/in/ismael-ribeiro-dos-santos-lima",
  phone: "(75) 98152-7109",


  whatsapp: "5575981527109",

  email: "canais185@gmail.com",
  github: "https://github.com/Ismaelrlima?tab=repositories",


  linkedin: "https://www.linkedin.com/in/ismael-ribeiro-dos-santos-lima/",

  headline:
    "Analista de Dados com +3 anos de experiência prática em análise, BI, automação e modelagem preditiva, atuando com ETL, SQL, Python, dashboards e generation de insights orientados ao negócio.",
  highlights: [
    "ETL e integração de múltiplas fontes (internas/externas)",
    "SQL (PostgreSQL/MySQL) e performance de consultas",
    "Dashboards estratégicos (Power BI e Python)",
    "Machine Learning aplicado ao negócio (Scikit-learn)",
    "Automação e pipelines via APIs (Meta/Google)"
  ],
  skills: {
    "Python & Dados": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Selenium"],
    "Bancos de Dados": ["PostgreSQL", "MySQL", "MongoDB"],
    "Ciência de Dados & ML": ["Scikit-learn", "Modelagem Preditiva", "Estatística", "Regressão/Classificação"],
    "BI & Analytics": ["Power BI", "KPIs", "Dashboards", "Storytelling"],
    "Engenharia/Automação": ["ETL", "APIs", "Pipelines", "n8n", "SQLAlchemy", "Apache Airflow", "Jenkins (CI/CD)", "PySpark"],
    "Dev & Colaboração": ["Git/GitHub", "Jupyter Notebooks", "Docker", "GCP"]
  },
  experience: [
    {
      title: "Analista de Dados | Business Intelligence",
      company: "Moto Clube Honda",
      period: "Ago/2025 – Atual",
      place: "BA",
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
      period: "Fev/2025 – Jul/2025",
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
    /*{
      name: "Monitoramento de Vendas Multicanal",
      image: "/projects/vendas.png",
      tags: ["Python", "Pandas", "Matplotlib", "Excel"],
      description: "Análise de receita, ticket médio e conversão por região, canal e loja.",
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
      description: "Monitoramento e apoio à redistribuição entre lojas com estatística e ML.",
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
      description: "Segmentação e análise de produtos para campanhas e aumento de rentabilidade.",
      problem:
        "Dificuldade em identificar clientes de alto potencial e produtos com melhor margem/recorrência.",
      solution:
        "Consultas SQL + visualizações no Power BI para segmentar clientes e mapear produtos por performance.",
      impact:
        "Ações mais direcionadas, melhor uso de campanhas e aumento de conversão em ofertas estratégicas.",
      links: [{ label: "GitHub", href: "https://github.com/Ismaelrlima?tab=repositories" }]
    },*/


    {
      name: "Projeto Power BI – Meta Ads",
      image: "/projects/bimeta.jpeg",
      tags: ["Dados", "Power BI", "ETL", "Python", "SQL", "API", "CI/CD"],
      description: "Dashboard analítico automatizado para monitoramento de performance de campanhas no Meta Ads.",
      problem: "Necessidade de unificar dados de múltiplas fontes e garantir análises rápidas, confiáveis e contínuas para tomada de decisão em marketing.",
      solution: "Pipeline ETL em Python integrando API do Meta, banco de dados central e planilhas, com modelagem em Star Schema e automação via Jenkins para entrega contínua no Power BI.",
      impact: "Aumento da confiabilidade e velocidade das análises, suporte direto a decisões estratégicas do time e entrega de valor de negócio a partir de dados automatizados.",
      links: [
        {
          label: "Ver no LinkedIn",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7394809584554590208/"
        }
      ]
    },
    {
      name: "Automação de Vendas via WhatsApp & Analytics",
      image: "/projects/maya.jpeg",
      tags: ["Python", "Automação", "n8n", "WhatsApp API", "IA", "CRM", "BI", "APIs"],
      description: "Sistema inteligente de atendimento e vendas via WhatsApp com automação ponta a ponta e dashboards em tempo real.",
      problem: "Processo de atendimento e vendas descentralizado, com alto esforço manual, baixa rastreabilidade dos dados e pouca visibilidade sobre performance comercial.",
      solution: "Desenvolvimento de um bot de WhatsApp integrado a automações no n8n, Python e IA para triagem, validação e padronização de dados, integração com APIs externas, CRM e banco de dados, alimentando dashboards de BI em tempo real.",
      impact: "Redução de erros manuais, aumento da eficiência do atendimento, maior produtividade dos vendedores e gestão orientada por dados em um ecossistema totalmente automatizado.",
      links: [
        {
          label: "Ver no LinkedIn",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7421656780725772288/"
        }
      ]
    }
  ],
  education: [
    {
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      school: "Centro Universitário UNIFAN – BA",
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
