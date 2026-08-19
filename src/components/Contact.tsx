import React, { useState } from 'react';
import { Mail, Check, Copy, Github, Linkedin, Shield, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contato" className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Bento Top Header Card */}
        <div className="bento-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Conexão & Contato</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">
              Vamos conversar?
            </h2>
            <p className="text-sm text-[#A7B0C0] max-w-2xl">
              Aberto a oportunidades profissionais, estágios, dúvidas e colaborações em Cyber Security e Inteligência Artificial.
            </p>
          </div>
        </div>

        {/* Bento Direct Contact Card */}
        <div className="bento-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-xl font-bold text-[#F5F7FA] font-heading mb-0.5">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-[#22D3EE] font-mono">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <span className="bento-tag text-xs self-start sm:self-auto py-1 px-3">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Quick Contact Highlight Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Direct Message Highlight Card */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-card"
              className="p-4 bg-gradient-to-r from-[#0B1020] to-[#12232F] hover:to-[#17303E] rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-all group shadow-lg shadow-emerald-950/10"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold tracking-wide">WhatsApp Pessoal</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#F5F7FA] group-hover:text-emerald-300 transition-colors block truncate">
                    {PERSONAL_INFO.whatsappFormatted}
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-[#0B1020] border border-emerald-500/20 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/40 transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Email Direct Box */}
            <div className="p-4 bg-[#0B1020] rounded-xl border border-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-[#121A2F] border border-white/10 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-[#A7B0C0] block font-mono uppercase">E-mail Direto</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs font-mono text-[#F5F7FA] hover:text-[#22D3EE] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#121A2F] hover:bg-[#1E293B] border border-white/10 text-[#A7B0C0] hover:text-[#F5F7FA] transition-colors shrink-0"
                title="Copiar e-mail"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Social Channels & Networks */}
          <div className="pt-2 space-y-2">
            <span className="text-[10px] font-mono text-[#22D3EE] uppercase tracking-wider block">
              Canais & Redes Profissionais:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* WhatsApp Action Button */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-link"
                className="p-3.5 bg-[#0B1020] hover:bg-[#0E2024] border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl flex items-center gap-3 text-xs text-[#F5F7FA] hover:text-emerald-300 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold flex items-center gap-1">
                    WhatsApp
                    <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[10px] text-[#A7B0C0] truncate">Mensagem direta</span>
                </div>
              </a>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-link"
                className="p-3.5 bg-[#0B1020] hover:bg-[#1A233D] border border-white/5 hover:border-[#3B82F6]/40 rounded-xl flex items-center gap-3 text-xs text-[#F5F7FA] hover:text-[#22D3EE] transition-colors group"
              >
                <Github className="w-4 h-4 text-[#3B82F6] group-hover:scale-110 transition-transform shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold flex items-center gap-1">
                    GitHub
                    <ArrowUpRight className="w-3 h-3 text-[#3B82F6] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[10px] text-[#A7B0C0] truncate">Repositórios</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-link"
                className="p-3.5 bg-[#0B1020] hover:bg-[#1A233D] border border-white/5 hover:border-[#3B82F6]/40 rounded-xl flex items-center gap-3 text-xs text-[#F5F7FA] hover:text-[#22D3EE] transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#3B82F6] group-hover:scale-110 transition-transform shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-semibold flex items-center gap-1">
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3 text-[#3B82F6] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[10px] text-[#A7B0C0] truncate">Rede profissional</span>
                </div>
              </a>
            </div>
          </div>

          {/* Privacy & Professional Commitment */}
          <div className="p-4 rounded-xl bento-subcard flex items-start gap-3 text-xs text-[#A7B0C0]">
            <Shield className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
            <p>
              Respeito e confidencialidade. Suas informações não serão compartilhadas e serão utilizadas exclusivamente para comunicação profissional direta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


