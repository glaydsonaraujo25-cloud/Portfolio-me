import React, { useState } from 'react';
import { Mail, Check, Copy, Github, Linkedin, Shield, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = () => { navigator.clipboard.writeText(PERSONAL_INFO.email); setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 2500); };
  const socialLinks = [
    { name: 'WhatsApp', subtitle: 'Mensagem direta', href: PERSONAL_INFO.whatsapp, icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'GitHub', subtitle: 'Projetos e estudos', href: PERSONAL_INFO.github, icon: <Github className="w-4 h-4" /> },
    { name: 'LinkedIn', subtitle: 'Rede profissional', href: PERSONAL_INFO.linkedin, icon: <Linkedin className="w-4 h-4" /> }
  ];
  return (
    <section id="contato" className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bento-card p-6 sm:p-8"><div className="space-y-1"><div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2"><Mail className="w-3.5 h-3.5" /><span>Contato</span></div><h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">Vamos conversar?</h2><p className="text-sm text-[#A7B0C0] max-w-2xl">Estou aberto a oportunidades de estágio, projetos e conexões profissionais relacionadas a Cyber Security e tecnologia.</p></div></div>
        <div className="bento-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5"><div><h3 className="text-xl font-bold text-[#F5F7FA] font-heading">{PERSONAL_INFO.name}</h3><p className="text-xs text-[#22D3EE] font-mono">{PERSONAL_INFO.role}</p></div><span className="bento-tag text-xs self-start sm:self-auto py-1 px-3">{PERSONAL_INFO.status}</span></div>
          <div className="p-4 bg-[#0B1020] rounded-xl border border-white/5 flex items-center justify-between gap-3"><div className="flex items-center gap-3 overflow-hidden"><div className="w-9 h-9 rounded-lg bg-[#121A2F] border border-white/10 flex items-center justify-center text-[#3B82F6]"><Mail className="w-4 h-4" /></div><div className="overflow-hidden"><span className="text-[10px] text-[#A7B0C0] block font-mono uppercase">E-mail profissional</span><a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-mono text-[#F5F7FA] hover:text-[#22D3EE] truncate block">{PERSONAL_INFO.email}</a></div></div><button type="button" onClick={handleCopyEmail} className="p-2 rounded-lg bg-[#121A2F] border border-white/10 text-[#A7B0C0]">{copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}</button></div>
          <div className="space-y-2"><span className="text-[10px] font-mono text-[#22D3EE] uppercase tracking-wider block">Canais profissionais:</span><div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{socialLinks.map((link) => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[#0B1020] hover:bg-[#1A233D] border border-white/5 hover:border-[#3B82F6]/40 rounded-xl flex items-center gap-3 text-xs text-[#F5F7FA] hover:text-[#22D3EE] transition-colors group"><span className="text-[#3B82F6]">{link.icon}</span><div className="flex flex-col overflow-hidden"><span className="font-semibold flex items-center gap-1">{link.name}<ArrowUpRight className="w-3 h-3 opacity-60" /></span><span className="text-[10px] text-[#A7B0C0] truncate">{link.subtitle}</span></div></a>)}</div></div>
          <div className="p-4 rounded-xl bento-subcard flex items-start gap-3 text-xs text-[#A7B0C0]"><Shield className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" /><p>Busco oportunidades para aprender, contribuir com projetos reais e continuar desenvolvendo minha experiência em segurança cibernética.</p></div>
        </div>
      </div>
    </section>
  );
};
