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
  {
    id: 'quem-sou',
    question: 'Quem sou?',
    tag: 'Perfil & Trajetória',
    answer: 'Sou estudante de tecnologia com foco em Cyber Security e interesse em Inteligência Artificial. Gosto de aprender na prática, transformando os conteúdos estudados em exercícios e projetos que me ajudam a desenvolver experiência.',
    highlight: 'Aprendizado contínuo, curiosidade e prática.'
  },
  {
    id: 'o-que-estudo',
    question: 'O que estou estudando?',
    tag: 'Foco Técnico Atual',
    answer: 'Atualmente estudo Cyber Security, fundamentos de Python, Inteligência Artificial e Engenharia de Prompts. Também estou conhecendo conceitos de IA Generativa, LLMs, RAG e automação, sempre buscando entender suas aplicações de forma prática.',
    highlight: 'Construindo fundamentos antes de avançar para temas mais complexos.'
  },
  {
    id: 'areas-interesse',
    question: 'Quais áreas me interessam?',
    tag: 'Áreas de Interesse',
    answer: 'Tenho maior interesse em segurança defensiva, análise de incidentes e SOC. Também me interessa entender como Inteligência Artificial e automação podem apoiar atividades de segurança e análise.',
    highlight: 'Interesse em defesa cibernética e IA aplicada à segurança.'
  },
  {
    id: 'objetivos',
    question: 'Quais são meus objetivos profissionais?',
    tag: 'Objetivos',
    answer: 'Meu objetivo é conquistar minha primeira oportunidade profissional em tecnologia, especialmente em Cyber Security, e evoluir por meio de experiência prática, projetos e aprendizado contínuo.',
    highlight: 'Preparação para oportunidades de estágio e nível júnior.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'security',
    name: 'Cyber Security',
    iconName: 'Shield',
    description: 'Conhecimentos em desenvolvimento por meio de estudos de segurança defensiva e fundamentos de segurança da informação.',
    skills: [
      {
        name: 'Fundamentos de Segurança',
        badge: 'Em Estudo',
        focus: 'Princípios de confidencialidade, integridade e disponibilidade, autenticação, controle de acesso e boas práticas de proteção.',
        practicalApplication: 'Análise de cenários e exercícios voltados à identificação de riscos e aplicação de medidas defensivas.',
        topics: ['CIA Triad', 'Autenticação', 'Controle de Acesso', 'Boas Práticas']
      },
      {
        name: 'Análise de Ameaças',
        badge: 'Em Desenvolvimento',
        focus: 'Estudo de phishing, malware, spyware, backdoors, engenharia social e indicadores básicos de comprometimento.',
        practicalApplication: 'Classificação de incidentes simulados e identificação de sinais comuns de ataques.',
        topics: ['Phishing', 'Malware', 'Engenharia Social', 'IOCs']
      },
      {
        name: 'Segurança Defensiva & SOC',
        badge: 'Área de Interesse',
        focus: 'Introdução a monitoramento, resposta a incidentes e rotina de equipes de segurança defensiva.',
        practicalApplication: 'Estudos de caso e simulações educacionais de triagem e análise de incidentes.',
        topics: ['SOC', 'Incident Response', 'Triagem', 'Monitoramento']
      }
    ]
  },
  {
    id: 'ai',
    name: 'Inteligência Artificial',
    iconName: 'Brain',
    description: 'Estudo de IA Generativa, Engenharia de Prompts e aplicações de IA em problemas práticos.',
    skills: [
      {
        name: 'Prompt Engineering',
        badge: 'Prática Contínua',
        focus: 'Criação e melhoria de prompts estruturados, definição de contexto, exemplos e formatos de saída.',
        practicalApplication: 'Criação de instruções para obter respostas mais claras, consistentes e adequadas a diferentes tarefas.',
        topics: ['Contexto', 'Few-Shot', 'System Instructions', 'Saídas Estruturadas']
      },
      {
        name: 'IA Generativa & LLMs',
        badge: 'Em Estudo',
        focus: 'Fundamentos de modelos de linguagem, tokens, IA Generativa e conceitos introdutórios de RAG.',
        practicalApplication: 'Exploração de ferramentas de IA e criação de protótipos para estudo e automação de tarefas.',
        topics: ['LLMs', 'Tokens', 'IA Generativa', 'Introdução a RAG']
      },
      {
        name: 'IA aplicada à Segurança',
        badge: 'Área de Interesse',
        focus: 'Exploração de como modelos de IA podem auxiliar análise, organização de informações e atividades defensivas.',
        practicalApplication: 'Estudos e protótipos educacionais voltados à análise de incidentes e apoio a tarefas de segurança.',
        topics: ['Análise Assistida', 'Automação', 'Segurança de IA', 'Casos de Uso']
      }
    ]
  }
];

export const PROJECTS: Project[] = [];

export const LEARNING_TIMELINE: TimelineMilestone[] = [
  {
    year: '2026',
    title: 'Construção de Fundamentos em Cyber Security & IA',
    status: 'em_andamento',
    badge: 'Momento Atual',
    summary: 'Desenvolvimento gradual de conhecimentos em segurança cibernética, Inteligência Artificial e fundamentos de Python.',
    items: [
      'Estudo de fundamentos de Cyber Security, segurança da informação e ameaças digitais',
      'Aprendizado sobre phishing, malware, autenticação, resposta a incidentes e segurança defensiva',
      'Estudo e prática de Inteligência Artificial, IA Generativa e Engenharia de Prompts',
      'Aprendizado dos fundamentos de Python e exploração futura de aplicações em automação e segurança'
    ]
  },
  {
    year: 'Próximos Passos',
    title: 'Projetos Práticos & Primeira Oportunidade',
    status: 'proximo_passo',
    badge: 'Metas',
    summary: 'Transformar o aprendizado em projetos demonstráveis e construir experiência para ingressar profissionalmente em Cyber Security.',
    items: [
      'Desenvolver projetos educacionais de segurança defensiva e análise de incidentes',
      'Evoluir gradualmente em Python e aplicar o aprendizado em pequenos projetos',
      'Aprofundar conhecimentos em SOC, redes e resposta a incidentes',
      'Buscar oportunidades de estágio ou nível júnior em Cyber Security'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Ensino Superior em andamento',
    course: 'Cyber Security',
    level: 'Graduação',
    status: 'Em andamento',
    period: 'Em andamento',
    focusAreas: [
      'Fundamentos de Computação',
      'Redes de Computadores',
      'Segurança da Informação',
      'Cyber Security'
    ],
    description: 'Formação voltada ao desenvolvimento de conhecimentos em tecnologia e segurança cibernética, complementada por estudos práticos em Inteligência Artificial e fundamentos de Python.'
  }
];
