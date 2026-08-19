import React, { useState } from 'react';
import { Brain, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="habilidades" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Bento Top Header Card */}
        <div className="bento-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Competências Técnicas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">
              Habilidades & Conhecimentos em IA
            </h2>
            <p className="text-sm text-[#A7B0C0] max-w-2xl">
              Domínios técnicos estruturados em Inteligência Artificial, Engenharia de Prompts e Automação.
            </p>
          </div>
        </div>

        {/* Bento Categories & Skills Grid */}
        <div className="space-y-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="bento-card p-6 sm:p-7 space-y-4">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1020] border border-white/10 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F5F7FA] font-heading">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#A7B0C0]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Bento Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    id={`skill-card-${category.id}-${index}`}
                    onClick={() => setSelectedSkill(skill)}
                    className="p-4 rounded-xl bento-subcard flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#F5F7FA] group-hover:text-[#22D3EE] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="bento-tag text-[10px] py-0.5 px-2">
                          {skill.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[#A7B0C0] mb-2.5 leading-relaxed">
                        {skill.focus}
                      </p>

                      <div className="p-2 rounded-lg bg-[#0B1020]/90 border border-white/5 text-[11px] text-[#A7B0C0] mb-2.5">
                        <span className="text-[10px] font-mono text-[#3B82F6] block mb-0.5 uppercase tracking-wider font-semibold">
                          Aplicação:
                        </span>
                        {skill.practicalApplication}
                      </div>
                    </div>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                      {skill.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#0B1020] text-[10px] text-[#A7B0C0] font-mono border border-white/5"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div
            id="skill-modal-overlay"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              id="skill-modal-content"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121A2F] border border-[#3B82F6] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1020] border border-white/10 flex items-center justify-center text-[#22D3EE]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F5F7FA]">
                      {selectedSkill.name}
                    </h3>
                    <span className="text-xs font-mono text-[#3B82F6]">
                      {selectedSkill.badge}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="text-[#A7B0C0] hover:text-white text-xs px-2.5 py-1 bg-[#0B1020] border border-white/10 rounded-lg"
                >
                  Fechar
                </button>
              </div>

              <div className="space-y-3 text-xs text-[#A7B0C0]">
                <div>
                  <h4 className="font-mono text-[#F5F7FA] uppercase tracking-wider mb-1">
                    Conceito & Estudo
                  </h4>
                  <p className="leading-relaxed">{selectedSkill.focus}</p>
                </div>

                <div className="p-3 bg-[#0B1020] rounded-xl border border-white/5">
                  <h4 className="font-mono text-[#22D3EE] uppercase tracking-wider mb-1">
                    Como aplico em projetos
                  </h4>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    {selectedSkill.practicalApplication}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[#F5F7FA] uppercase tracking-wider mb-2">
                    Tópicos de Domínio
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {selectedSkill.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-[11px] text-[#A7B0C0] bg-[#0B1020] p-2 rounded-lg border border-white/5"
                      >
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


