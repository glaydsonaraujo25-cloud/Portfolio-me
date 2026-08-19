import React from 'react';
import { Shield, ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-10 text-[#A7B0C0] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0B1020] border border-white/10 flex items-center justify-center text-[#22D3EE]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F5F7FA] font-heading">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[10px] text-[#22D3EE]">
                Cyber Security & Inteligência Artificial
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0B1020] border border-white/10 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
              aria-label="WhatsApp"
              title="Conversar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0B1020] border border-white/10 text-[#A7B0C0] hover:text-[#22D3EE] hover:border-[#3B82F6] transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0B1020] border border-white/10 text-[#A7B0C0] hover:text-[#22D3EE] hover:border-[#3B82F6] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[#0B1020] border border-white/10 text-[#A7B0C0] hover:text-[#22D3EE] hover:border-[#3B82F6] transition-colors"
              aria-label="Email"
              title="Enviar E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0B1020] hover:bg-[#1A233D] border border-white/10 text-[#F5F7FA] text-xs transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#22D3EE]" />
          </button>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] text-[#A7B0C0]/60">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
          </div>
          <div>
            Projetado no formato Bento Grid com alto desempenho e segurança.
          </div>
        </div>
      </div>
    </footer>
  );
};

