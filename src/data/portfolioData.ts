import { Project, SkillCategory, TimelineMilestone, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Glaydson de Araujo Lisboa',
  shortName: 'Glaydson',
  heroTitle: 'Olá, eu sou o Glaydson',
  role: 'Estudante de Cyber Security | Python & Inteligência Artificial',
  headline: 'Construindo minha base em Segurança Cibernética e explorando Python e Inteligência Artificial por meio de estudos e projetos práticos.',
  bio: 'Sou estudante de tecnologia com foco em Cyber Security e interesse em Inteligência Artificial. Aprendo por meio de cursos, estudos práticos e projetos, enquanto desenvolvo meus conhecimentos em Python e exploro como IA e automação podem apoiar a segurança da informação.',
  email: 'glaydsonaraujo25@gmail.com',
  whatsapp: 'https://wa.me/5561981461481?text=Ol%C3%A1%2C%20Glaydson!%20Vim%20pelo%20seu%20portf%C3%B3lio.',
  whatsappFormatted: '+55 (61) 98146-1481',
  github: 'https://github.com/glaydsonaraujo25-cloud',
  linkedin: 'https://linkedin.com',
  location: 'Brasil',
  status: 'Disponível para estágios e projetos',
  currentFocus: 'Cyber Security, fundamentos de Python, IA Generativa e Prompt Engineering',
};

export const ABOUT_QUESTIONS = [
  { id: 'quem-sou', question: 'Quem sou?', tag: 'Perfil & Trajetória', answer: 'Sou estudante de tecnologia com foco em Cyber Security e interesse em Inteligência Artificial. Gosto de aprender na prática, transformando os conteúdos estudados em exercícios e projetos que me ajudam a desenvolver experiência.', highlight: 'Aprendizado contínuo, curiosidade e prática.' },
  { id: 'o-que-estudo', question: 'O que estou estudando?', tag: 'Foco Técnico Atual', answer: 'Atualmente estudo Cyber Security, fundamentos de Python, Inteligência Artificial e Engenharia de Prompts. Também estou conhecendo conceitos de IA Generativa, LLMs, RAG e automação, sempre buscando entender suas aplicações de forma prática.', highlight: 'Construindo fundamentos antes de avançar para temas mais complexos.' },
  { id: 'areas-interesse', question: 'Quais áreas me interessam?', tag: 'Áreas de Interesse', answer: 'Tenho maior interesse em segurança defensiva, análise de incidentes e SOC. Também me interessa entender como Inteligência Artificial e automação podem apoiar atividades de segurança e análise.', highlight: 'Interesse em defesa cibernética e IA aplicada à segurança.' },
  { id: 'objetivos', question: 'Quais são meus objetivos profissionais?', tag: 'Objetivos', answer: 'Meu objetivo é conquistar minha primeira oportunidade profissional em tecnologia, especialmente em Cyber Security, e evoluir por meio de experiência prática, projetos e aprendizado contínuo.', highlight: 'Preparação para oportunidades de estágio e nível júnior.' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'security', name: 'Cyber Security', iconName: 'Shield', description: 'Conhecimentos em desenvolvimento por meio de estudos de segurança defensiva e fundamentos de segurança da informação.',
    skills: [
      { name: 'Fundamentos de Segurança', badge: 'Em Estudo', focus: 'Princípios de confidencialidade, integridade e disponibilidade, autenticação, controle de acesso e boas práticas de proteção.', practicalApplication: 'Análise de cenários e exercícios voltados à identificação de riscos e aplicação de medidas defensivas.', topics: ['CIA Triad', 'Autenticação', 'Controle de Acesso', 'Boas Práticas'] },
      { name: 'Análise de Ameaças', badge: 'Em Desenvolvimento', focus: 'Estudo de phishing, malware, spyware, backdoors, engenharia social e indicadores básicos de comprometimento.', practicalApplication: 'Classificação de incidentes simulados e identificação de sinais comuns de ataques.', topics: ['Phishing', 'Malware', 'Engenharia Social', 'IOCs'] },
      { name: 'Segurança Defensiva & SOC', badge: 'Área de Interesse', focus: 'Introdução a monitoramento, resposta a incidentes e rotina de equipes de segurança defensiva.', practicalApplication: 'Estudos de caso e simulações educacionais de triagem e análise de incidentes.', topics: ['SOC', 'Incident Response', 'Triagem', 'Monitoramento'] }
    ]
  },
  {
    id: 'ai', name: 'Inteligência Artificial', iconName: 'Brain', description: 'Estudo de IA Generativa, Engenharia de Prompts e aplicações de IA em problemas práticos.',
    skills: [
      { name: 'Prompt Engineering', badge: 'Prática Contínua', focus: 'Criação e melhoria de prompts estruturados, definição de contexto, exemplos e formatos de saída.', practicalApplication: 'Criação de instruções para obter respostas mais claras, consistentes e adequadas a diferentes tarefas.', topics: ['Contexto', 'Few-Shot', 'System Instructions', 'Saídas Estruturadas'] },
      { name: 'IA Generativa & LLMs', badge: 'Em Estudo', focus: 'Fundamentos de modelos de linguagem, tokens, IA Generativa e conceitos introdutórios de RAG.', practicalApplication: 'Exploração de ferramentas de IA e criação de protótipos para estudo e automação de tarefas.', topics: ['LLMs', 'Tokens', 'IA Generativa', 'Introdução a RAG'] },
      { name: 'IA aplicada à Segurança', badge: 'Área de Interesse', focus: 'Exploração de como modelos de IA podem auxiliar análise, organização de informações e atividades defensivas.', practicalApplication: 'Estudos e protótipos educacionais voltados à análise de incidentes e apoio a tarefas de segurança.', topics: ['Análise Assistida', 'Automação', 'Segurança de IA', 'Casos de Uso'] }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'soc-sentinel-l2', title: 'SOC Sentinel L2', subtitle: 'Incident Response & Threat Analysis Studio', category: 'security', categoryLabel: 'Cyber Security / SOC',
    description: 'Laboratório web de operações SOC e resposta a incidentes com análise assistida por IA, evidências, MITRE ATT&CK, Threat Intelligence, playbooks e gerenciamento de casos.',
    longDescription: 'Projeto educacional que simula um ambiente de análise de incidentes de nível SOC L2, combinando IA com fluxos defensivos e organização estruturada de evidências.',
    architecture: ['React no frontend', 'API serverless', 'Google Gemini', 'Supabase opcional', 'Integrações de Threat Intelligence'],
    features: ['Risk e Confidence Score', 'Extração de IOCs', 'MITRE ATT&CK', 'Playbooks', 'Case Management', 'Dashboard SOC'],
    techStack: ['React', 'TypeScript', 'Gemini', 'Supabase', 'Vercel'], status: 'Protótipo Funcional',
    demoUrl: 'https://soc-sentinel-l2-incident-response-a.vercel.app',
    practicalSecurityOrAIImpact: 'Simula etapas de triagem e resposta a incidentes, ajudando a praticar análise estruturada, correlação de evidências e tomada de decisão defensiva assistida por IA.'
  },
  {
    id: 'analisador-soc-phishing', title: 'Analisador SOC Phishing', subtitle: 'Triagem de phishing e engenharia social com IA', category: 'security', categoryLabel: 'Cyber Security / Phishing',
    description: 'Plataforma educativa para análise defensiva de phishing com classificação de risco, extração de indicadores, mapeamento MITRE ATT&CK e playbook de resposta.',
    longDescription: 'Ferramenta voltada ao treinamento de triagem de mensagens suspeitas e engenharia social, utilizando IA para apoiar a classificação e organização das evidências.',
    architecture: ['React', 'Backend Express', 'Google Gemini', 'Análise local de URLs e evidências'],
    features: ['Phishing Risk Score', 'Case ID', 'Extração de IOCs', 'MITRE ATT&CK', 'Histórico', 'Parecer técnico'],
    techStack: ['React', 'TypeScript', 'Express', 'Gemini', 'Tailwind CSS'], status: 'Protótipo Funcional',
    demoUrl: 'https://analisador-soc-phishing.vercel.app',
    practicalSecurityOrAIImpact: 'Reúne conceitos de phishing, engenharia social, indicadores de comprometimento e fluxo SOC em uma experiência prática de análise defensiva.'
  },
  {
    id: 'mailflow-ai', title: 'MailFlow AI', subtitle: 'Automatizador Inteligente de E-mails', category: 'automation', categoryLabel: 'IA / Automação',
    description: 'Plataforma inteligente para criação, resposta, resumo, classificação, melhoria e análise de segurança de e-mails com Inteligência Artificial.',
    longDescription: 'Projeto criado para explorar aplicações práticas de IA no fluxo de comunicação por e-mail, reunindo produtividade, organização e análise assistida.',
    architecture: ['Interface web', 'Backend', 'Integração com Google Gemini', 'Processamento de conteúdo de e-mails'],
    features: ['Criação de e-mails', 'Respostas assistidas', 'Resumo', 'Classificação', 'Melhoria de texto', 'Análise de segurança'],
    techStack: ['React', 'TypeScript', 'Gemini', 'Vite', 'Express'], status: 'Protótipo Funcional',
    demoUrl: 'https://mail-flow-ai-vert.vercel.app',
    practicalSecurityOrAIImpact: 'Demonstra o uso de IA para automatizar e organizar tarefas de e-mail, incluindo apoio à análise de conteúdo e identificação de possíveis sinais de risco.'
  }
];

export const LEARNING_TIMELINE: TimelineMilestone[] = [
  {
    year: '2026',
    title: 'Fundamentos + Projetos Práticos em Cyber Security & IA',
    status: 'em_andamento',
    badge: 'Momento Atual',
    summary: 'Consolidação dos fundamentos de segurança cibernética enquanto transformo o aprendizado em projetos publicados e experiências práticas.',
    items: [
      'Estudo contínuo de Cyber Security, segurança da informação, ameaças digitais e resposta a incidentes',
      'Criação e publicação do SOC Sentinel L2 para praticar análise de incidentes, IOCs, MITRE ATT&CK e fluxos defensivos',
      'Criação do Analisador SOC Phishing para praticar triagem de phishing e engenharia social',
      'Exploração de Inteligência Artificial e Prompt Engineering em projetos como o MailFlow AI',
      'Aprendizado gradual dos fundamentos de Python com foco futuro em automação e segurança'
    ]
  },
  {
    year: 'Próximos Passos',
    title: 'Aprofundamento Técnico & Primeira Oportunidade',
    status: 'proximo_passo',
    badge: 'Metas',
    summary: 'Evoluir os conhecimentos atuais, ampliar a qualidade dos projetos e buscar experiência profissional em segurança cibernética.',
    items: [
      'Aprofundar conhecimentos em SOC, redes, monitoramento e resposta a incidentes',
      'Evoluir em Python e aplicar o aprendizado em pequenos projetos de automação defensiva',
      'Continuar melhorando os projetos já publicados com documentação, testes e novas funcionalidades',
      'Buscar oportunidades de estágio ou nível júnior em Cyber Security'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  { institution: 'Ensino Superior em andamento', course: 'Cyber Security', level: 'Graduação', status: 'Em andamento', period: 'Em andamento', focusAreas: ['Fundamentos de Computação', 'Redes de Computadores', 'Segurança da Informação', 'Cyber Security'], description: 'Formação voltada ao desenvolvimento de conhecimentos em tecnologia e segurança cibernética, complementada por estudos práticos em Inteligência Artificial e fundamentos de Python.' }
];
