import React, { useState } from 'react';
import { User, BookOpen, Compass, Target, CheckCircle2, Terminal, Shield, Brain, Sparkles } from 'lucide-react';
import { ABOUT_QUESTIONS } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string>('quem-sou');

  const getQuestionIcon = (id: string) => {
    switch (id) {
      case 'quem-sou':
        return <User className="w-4 h-4 text-[#22D3EE]" />;
      case 'o-que-estudo':
        return <BookOpen className="w-4 h-4 text-[#3B82F6]" />;
      case 'areas-interesse':
        return <Compass className="w-4 h-4 text-emerald-400" />;
      case 'objetivos':
        return <Target className="w-4 h-4 text-indigo-400" />;
      default:
        return <User className="w-4 h-4 text-[#22D3EE]" />;
    }
  };

  return (
    <section id="sobre-mim" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main About Overview Bento Card (Span 5) */}
          <div className="md:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="abstract-glow -top-12 -left-12 w-48 h-48 opacity-60" />
            <div className="relative z-10 space-y-4">
              <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE]">
                Sobre Mim
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">
                Perfil & Trajetória
              </h2>
              <p className="text-sm text-[#A7B0C0] leading-relaxed">
                Sou estudante da área de tecnologia, interessado em <strong className="text-[#F5F7FA]">Inteligência Artificial</strong>, <strong className="text-[#F5F7FA]">Cyber Security</strong> e programação. Tenho buscado desenvolver meus conhecimentos por meio de cursos, estudos práticos e criação de projetos, sempre procurando entender como a tecnologia pode ser aplicada para resolver problemas reais.
              </p>
              <div className="p-4 bento-subcard space-y-2">
                <div className="text-xs font-heading font-semibold text-[#22D3EE] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Metodologia</span>
                </div>
                <p className="text-xs text-[#A7B0C0] leading-relaxed">
                  Transformar conceitos teóricos complexos em pipelines de segurança e ferramentas inteligentes de código aberto.
                </p>
              </div>
            </div>

            {/* Quick Principles Row */}
            <div className="relative z-10 pt-4 mt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-[#A7B0C0]">
              <div className="p-2 rounded-lg bg-[#0B1020]/60 border border-white/5">
                <Shield className="w-3.5 h-3.5 text-[#3B82F6] mx-auto mb-1" />
                <span>Defensivo</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0B1020]/60 border border-white/5">
                <Brain className="w-3.5 h-3.5 text-[#22D3EE] mx-auto mb-1" />
                <span>IA Prática</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0B1020]/60 border border-white/5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* Detailed Question Answers Bento Grid (Span 7) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_QUESTIONS.map((item) => {
              const isSelected = activeQuestion === item.id;
              return (
                <div
                  key={item.id}
                  id={`about-card-${item.id}`}
                  onClick={() => setActiveQuestion(item.id)}
                  className={`bento-card p-5 cursor-pointer flex flex-col justify-between group transition-all duration-200 ${
                    isSelected
                      ? 'border-[#3B82F6] ring-1 ring-[#3B82F6]/40 shadow-lg shadow-blue-500/10'
                      : 'hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0B1020] border border-white/10 flex items-center justify-center">
                          {getQuestionIcon(item.id)}
                        </div>
                        <span className="text-[10px] font-mono text-[#22D3EE] uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-[#F5F7FA] font-heading group-hover:text-[#22D3EE] transition-colors">
                      {item.question}
                    </h3>

                    <p className="text-xs text-[#A7B0C0] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#3B82F6]">
                    <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-400" />
                    <span className="truncate">{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

