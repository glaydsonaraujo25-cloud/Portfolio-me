import React from 'react';
import { GraduationCap, Check } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => (
  <section id="formacao" className="py-12 md:py-16 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="bento-card p-6 sm:p-8"><div className="space-y-1"><div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2"><GraduationCap className="w-3.5 h-3.5" /><span>Formação & Estudos</span></div><h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">Formação Acadêmica</h2><p className="text-sm text-[#A7B0C0] max-w-2xl">Minha formação acadêmica em Cyber Security, complementada por estudos e prática contínua em tecnologia.</p></div></div>
      <div className="max-w-4xl mx-auto">
        {EDUCATION_DATA.map((item, idx) => (
          <div key={idx} className="bento-card p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-[#0B1020] border border-white/10 flex items-center justify-center text-[#22D3EE]"><GraduationCap className="w-4 h-4" /></div><div><span className="text-xs font-mono text-[#3B82F6]">{item.level}</span><h3 className="text-base sm:text-lg font-bold text-[#F5F7FA] font-heading">{item.course}</h3></div></div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7B0C0] pb-2 border-b border-white/5"><span className="text-[#F5F7FA] font-medium">{item.institution}</span><span className="font-mono px-2 py-0.5 rounded bg-[#0B1020] border border-white/10 text-[#22D3EE] text-[11px]">{item.period}</span></div>
              <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">{item.description}</p>
              <div className="space-y-1.5"><span className="text-[10px] font-mono uppercase text-[#22D3EE] tracking-wider block">Áreas de estudo:</span><div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{item.focusAreas.map((area, aIdx) => <div key={aIdx} className="p-2 rounded-lg bg-[#0B1020] border border-white/5 flex items-center gap-2 text-xs text-[#A7B0C0]"><Check className="w-3 h-3 text-emerald-400 shrink-0" /><span>{area}</span></div>)}</div></div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-[#A7B0C0]"><span className="flex items-center gap-1.5 text-[11px]"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Status: {item.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
