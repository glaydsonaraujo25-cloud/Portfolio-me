import React, { useState } from 'react';
import { Shield, ArrowRight, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const bentoTags = ['#CyberSecurity', '#PythonEmAprendizado', '#InteligenciaArtificial', '#PromptEngineering'];

  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bento-card-gradient p-7 sm:p-9 flex flex-col justify-between relative shadow-2xl">
            <div className="abstract-glow -bottom-16 -right-16 w-64 h-64 opacity-80" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-ping" />
                  Boas-vindas
                </span>
                <span className="text-[10px] font-mono text-[#A7B0C0] bg-[#0B1020]/80 px-2.5 py-1 rounded-full border border-white/5">STATUS: DISPONÍVEL</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] font-heading leading-tight mb-2">
                  Olá, eu sou o<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#22D3EE] to-[#3B82F6]">Glaydson</span>
                </h1>
                <p className="text-base sm:text-lg text-[#3B82F6] font-heading font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>{PERSONAL_INFO.role}</span>
                </p>
              </div>
              <p className="text-[#A7B0C0] text-sm sm:text-base leading-relaxed max-w-xl">
                Estudo <strong className="text-[#F5F7FA]">Segurança Cibernética</strong> e estou desenvolvendo meus conhecimentos em <strong className="text-[#F5F7FA]">Python</strong>, enquanto exploro aplicações de <strong className="text-[#F5F7FA]">Inteligência Artificial</strong> e automação na criação de soluções práticas.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {bentoTags.map((tag, idx) => <span key={idx} className="bento-tag font-mono">{tag}</span>)}
              </div>
            </div>
            <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <a href="#contato" id="hero-cta-contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-500/20">
                <span>Entrar em Contato</span><ArrowRight className="w-4 h-4" />
              </a>
              <button type="button" id="hero-copy-email" onClick={handleCopyEmail} className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0B1020]/70 hover:bg-[#1E293B] border border-white/10 text-[#A7B0C0] hover:text-[#F5F7FA] text-xs font-mono transition-all" title="Copiar e-mail">
                {copiedEmail ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400 font-medium">Copiado!</span></> : <><Copy className="w-3.5 h-3.5" /><span>{PERSONAL_INFO.email}</span></>}
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bento-card p-2 flex flex-col justify-center"><HeroVisual /></div>
        </div>
      </div>
    </section>
  );
};
