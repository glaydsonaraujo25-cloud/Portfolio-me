import { Project, SkillCategory, TimelineMilestone, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Glaydson de Araujo Lisboa',
  shortName: 'Glaydson',
  heroTitle: 'Olá, eu sou o Glaydson',
  role: 'Estudante de Cyber Security e Inteligência Artificial',
  headline: 'Construindo soluções práticas na interseção entre Segurança da Informação, Inteligência Artificial e Desenvolvimento de Software.',
  bio: 'Sou estudante da área de tecnologia, interessado em Inteligência Artificial, Cyber Security e programação. Tenho buscado desenvolver meus conhecimentos por meio de cursos, estudos práticos e criação de projetos, sempre procurando entender como a tecnologia pode ser aplicada para resolver problemas reais.',
  email: 'glaydsonaraujo25@gmail.com',
  whatsapp: 'https://wa.me/5561981461481?text=Ol%C3%A1%2C%20Glaydson!%20Vim%20pelo%20seu%20portf%C3%B3lio.',
  whatsappFormatted: '+55 (61) 98146-1481',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: 'Brasil',
  status: 'Disponível para estágios e projetos',
  currentFocus: 'Cyber Security, IA Generativa, RAG, Python & Prompt Engineering',
};

export const ABOUT_QUESTIONS = [
  {
    id: 'quem-sou',
    question: 'Quem sou?',
    tag: 'Perfil & Trajetória',
    answer: 'Sou estudante da área de tecnologia, interessado em Inteligência Artificial, Cyber Security e programação. Tenho buscado desenvolver meus conhecimentos por meio de cursos, estudos práticos e criação de projetos, sempre procurando entender como a tecnologia pode ser aplicada para resolver problemas reais.',
    highlight: 'Foco em aprendizado contínuo e resolução metódica de problemas.'
  },
  {
    id: 'o-que-estudo',
    question: 'O que estou estudando?',
    tag: 'Foco Técnico Atual',
    answer: 'Atualmente, estou estudando Cyber Security, Inteligência Artificial, Python e Engenharia de Prompts. Também estou aprofundando meus conhecimentos em conceitos como IA Generativa, LLMs, RAG, automação e desenvolvimento de aplicações utilizando IA.',
    highlight: 'Fundamentos sólidos de algoritmos, redes, arquitetura de LLMs e segurança.'
  },
  {
    id: 'areas-interesse',
    question: 'Quais áreas me interessam?',
    tag: 'Áreas de Especialização',
    answer: 'Tenho interesse principalmente em Cyber Security e Inteligência Artificial, especialmente na aplicação de IA para segurança da informação. Também tenho interesse em programação, automação, desenvolvimento de ferramentas e análise de incidentes de segurança.',
    highlight: 'Convergência entre defesa cibernética ativa e modelos inteligentes.'
  },
  {
    id: 'objetivos',
    question: 'Quais são meus objetivos profissionais?',
    tag: 'Visão de Futuro',
    answer: 'Meu objetivo é construir uma carreira na área de tecnologia, desenvolvendo experiência principalmente em Cyber Security e Inteligência Artificial. Quero transformar meus conhecimentos em projetos práticos, continuar evoluindo tecnicamente e, futuramente, atuar profissionalmente no desenvolvimento de soluções que unam segurança e inteligência artificial.',
    highlight: 'Evolução técnica contínua e contribuição em projetos de alto impacto.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai',
    name: 'Inteligência Artificial',
    iconName: 'Brain',
    description: 'Estudo e aplicação de engenharia de contexto, modelos generativos e automações com IA.',
    skills: [
      {
        name: 'Prompt Engineering',
        badge: 'Prática Contínua',
        focus: 'Construção de prompts estruturados, Few-Shot, Chain-of-Thought e System Instructions defensivas.',
        practicalApplication: 'Otimização de respostas de modelos, redução de alucinações e padronização de saídas.',
        topics: ['System Prompts', 'Few-Shot Learning', 'Chain-of-Thought', 'Restrições & Formatação JSON']
      },
      {
        name: 'IA Generativa & RAG',
        badge: 'Em Aprofundamento',
        focus: 'Conceitos de Retrieval-Augmented Generation, busca semântica e ancoragem de conhecimento.',
        practicalApplication: 'Desenvolvimento de protótipos de assistentes que consultam documentações técnicas específicas.',
        topics: ['RAG Architecture', 'Vector Search', 'Chunking de Documentos', 'Grounded Responses']
      },
      {
        name: 'Automação com IA',
        badge: 'Projetos Práticos',
        focus: 'Criação de scripts para automação de tarefas repetitivas integrando modelos de IA.',
        practicalApplication: 'Triagem de dados, sumarização automática de relatórios técnicos e pipelines.',
        topics: ['Pipelines Python', 'Integração de APIs', 'Processamento de Texto', 'Workflows']
      }
    ]
  }
];

export const PROJECTS: Project[] = [];

export const LEARNING_TIMELINE: TimelineMilestone[] = [
  {
    year: '2026',
    title: 'Especialização em Cyber Security & Inteligência Artificial',
    status: 'em_andamento',
    badge: 'Momento Atual',
    summary: 'Aprofundamento intensivo em segurança defensiva, modelos de linguagem e desenvolvimento prático de projetos.',
    items: [
      'Estudo dedicado de Cyber Security, análise de incidentes e princípios de defesa de sistemas',
      'Aprofundamento em Inteligência Artificial, LLMs, IA Generativa e arquiteturas RAG',
      'Domínio de Engenharia de Prompts (Few-shot, CoT, System Prompts e Guardrails de Segurança)',
      'Desenvolvendo meus conhecimentos em Python e explorando suas aplicações em automação, Inteligência Artificial e Cyber Security.'
    ]
  },
  {
    year: 'Próximos Objetivos',
    title: 'Evolução Técnica & Atuação Profissional',
    status: 'proximo_passo',
    badge: 'Metas Futuras',
    summary: 'Consolidação de experiência prática no mercado e criação de soluções robustas que unam IA e segurança.',
    items: [
      'Aprofundar conhecimentos avançados em Cyber Security e segurança aplicada a sistemas de IA',
      'Desenvolver projetos práticos mais complexos e de código aberto para a comunidade técnica',
      'Conquistar as primeiras oportunidades profissionais (estágio / júnior) na área de tecnologia',
      'Contribuir ativamente no desenvolvimento de soluções seguras, eficientes e inteligentes'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Ensino Superior em Tecnologia',
    course: 'Graduação / Formação na Área de Tecnologia (Cyber Security & IA)',
    level: 'Ensino Superior',
    status: 'Em andamento',
    period: '2026 - Presente',
    focusAreas: [
      'Fundamentos de Computação e Redes',
      'Segurança da Informação e Criptografia',
      'Algoritmos e Estruturas de Dados',
      'Inteligência Artificial e Aprendizado de Máquina'
    ],
    description: 'Desenvolvimento de base acadêmica sólida em computação, segurança de sistemas e novas tecnologias emergentes.'
  }
];
