import React from 'react';
import { ArrowUpRight, Github, Layers3, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bento-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#22D3EE] flex items-center gap-2">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Projetos Práticos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-heading">
              Projetos em destaque
            </h2>
            <p className="text-sm text-[#A7B0C0] max-w-2xl">
              Projetos desenvolvidos para transformar meus estudos em experiências práticas nas áreas de Cyber Security e Inteligência Artificial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article key={project.id} className="bento-card p-6 flex flex-col justify-between gap-5 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="bento-tag text-[10px] py-1 px-2.5">{project.categoryLabel}</span>
                  <span className="text-[10px] font-mono text-[#A7B0C0]">{project.status}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F7FA] font-heading group-hover:text-[#22D3EE] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#3B82F6] font-medium mt-1">{project.subtitle}</p>
                </div>

                <p className="text-sm text-[#A7B0C0] leading-relaxed">{project.description}</p>

                <div className="p-3 rounded-xl bg-[#0B1020] border border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#22D3EE] mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Impacto prático
                  </div>
                  <p className="text-xs text-[#F5F7FA] leading-relaxed">{project.practicalSecurityOrAIImpact}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-lg bg-[#0B1020] border border-white/5 text-[10px] font-mono text-[#A7B0C0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B1020] hover:bg-[#1A233D] border border-white/10 hover:border-[#3B82F6]/40 text-xs text-[#F5F7FA] hover:text-[#22D3EE] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-xs text-white transition-colors"
                  >
                    Ver projeto
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
