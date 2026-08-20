import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sparkles, Send, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre Mim', href: '#sobre-mim', id: 'sobre-mim' },
    { label: 'Projetos', href: '#projetos', id: 'projetos' },
    { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
    { label: 'Jornada', href: '#jornada', id: 'jornada' },
    { label: 'Formação', href: '#formacao', id: 'formacao' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            id="header-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#3B82F6] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#121A2F] border border-[#1E293B] flex items-center justify-center text-[#3B82F6] group-hover:border-[#3B82F6] group-hover:text-[#22D3EE] transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-[#F5F7FA] group-hover:text-[#22D3EE] transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.shortName}
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
              </span>
              <span className="text-[11px] text-[#A7B0C0] font-mono tracking-wider">CYBER & AI</span>
            </div>
          </a>

          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-[#121A2F]/80 border border-[#1E293B] px-3 py-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#3B82F6] text-white shadow-sm'
                      : 'text-[#A7B0C0] hover:text-[#F5F7FA] hover:bg-[#1E293B]/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#121A2F] border border-[#1E293B] rounded-full text-[11px] text-[#A7B0C0]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Disponível para oportunidades</span>
            </div>

            <a
              href="#contato"
              id="header-cta-button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-medium transition-colors shadow-md shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contato</span>
            </a>
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#121A2F] border border-[#1E293B] text-[#A7B0C0] hover:text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#0B1020]/98 border-b border-[#1E293B] px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="py-2 px-3 mb-2 bg-[#121A2F] border border-[#1E293B] rounded-lg flex items-center justify-between text-xs text-[#A7B0C0]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {PERSONAL_INFO.status}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#3B82F6] text-white'
                    : 'text-[#A7B0C0] hover:text-white hover:bg-[#121A2F]'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'projetos' && <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-[#1E293B] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121A2F] border border-emerald-500/20 text-emerald-400 hover:text-emerald-300"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121A2F] border border-[#1E293B] text-[#A7B0C0] hover:text-[#F5F7FA]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121A2F] border border-[#1E293B] text-[#A7B0C0] hover:text-[#F5F7FA]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-[#121A2F] border border-[#1E293B] text-[#A7B0C0] hover:text-[#F5F7FA]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3B82F6] text-white text-xs font-medium"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Mensagem</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
