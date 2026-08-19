import React from 'react';
import { Clock, CheckCircle2, ArrowRight, Sparkles, Target } from 'lucide-react';
import { LEARNING_TIMELINE } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getMilestoneIcon = (status: string) => {
    switch (status) {
      case 'concluido':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'em_andamento':
        return <Sparkles className="w-4 h-4 text-[#22D3EE]" />;
      case 'proximo_passo':
        return <Target className="w-4 h-4 text-[#3B82F6]" />;
      default:
        return <Clock className="w-4 h-4 text-[#A7B0C0]" />;
    }
  };

  return (
    <section id="jornada" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Bento Top Header Card */}
        <div className="bento-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Evolução & Marcos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">
              Jornada de Aprendizado
            </h2>
            <p className="text-sm text-[#A7B0C0] max-w-2xl">
              Linha do tempo contínua ilustrando a evolução técnica, marcos alcançados e metas para o futuro.
            </p>
          </div>
        </div>

        {/* Bento Grid Timeline Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARNING_TIMELINE.map((milestone, idx) => (
            <div
              key={idx}
              id={`timeline-milestone-${idx}`}
              className="bento-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0B1020] border border-white/10 flex items-center justify-center">
                      {getMilestoneIcon(milestone.status)}
                    </div>
                    <span className="text-lg font-bold text-[#22D3EE] font-heading">
                      {milestone.year}
                    </span>
                  </div>

                  <span className="bento-tag text-[10px] py-0.5 px-2">
                    {milestone.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#F5F7FA] font-heading">
                  {milestone.title}
                </h3>

                <p className="text-xs text-[#A7B0C0] leading-relaxed">
                  {milestone.summary}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                {milestone.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-2 rounded-lg bg-[#0B1020] border border-white/5 flex items-start gap-2 text-xs text-[#F5F7FA]"
                  >
                    <ArrowRight className="w-3 h-3 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

