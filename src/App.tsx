import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleIntersection = () => {
      const sections = [
        'hero',
        'sobre-mim',
        'projetos',
        'habilidades',
        'jornada',
        'formacao',
        'contato',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleIntersection, { passive: true });
    return () => window.removeEventListener('scroll', handleIntersection);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F5F7FA] selection:bg-[#3B82F6] selection:text-white relative">
      <Header activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Timeline />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
