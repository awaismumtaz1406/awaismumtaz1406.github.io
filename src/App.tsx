import React, { useState, useEffect } from 'react';
import { PORTFOLIO } from './data/portfolio';
import { ActiveCertModal, Project } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientWork } from './components/ClientWork';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CertModal } from './components/CertModal';
import { ArchitectureModal } from './components/ArchitectureModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeCertModal, setActiveCertModal] = useState<ActiveCertModal | null>(null);
  const [activeArchProject, setActiveArchProject] = useState<Project | null>(null);

  // Apply theme to document root
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // ScrollSpy to highlight current navigation item
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      const sectionIds = [
        'hero',
        'projects',
        'client-deliverables',
        'experience',
        'leadership',
        'certifications',
        'contact',
      ];

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />

      <main id="main">
        <Hero metrics={PORTFOLIO.heroMetrics} />

        <hr className="divider" />

        <ClientWork data={PORTFOLIO.clientWork} />

        <hr className="divider" />

        <Projects
          projects={PORTFOLIO.projects}
          onOpenArchitecture={setActiveArchProject}
        />

        <hr className="divider" />

        <Experience
          experience={PORTFOLIO.experience}
          leadership={PORTFOLIO.leadership}
          onOpenCertModal={setActiveCertModal}
        />

        <hr className="divider" />

        <Certifications
          education={PORTFOLIO.education}
          certifications={PORTFOLIO.certifications}
          onOpenCertModal={setActiveCertModal}
        />

        <hr className="divider" />

        <Contact
          personal={PORTFOLIO.personal}
          resumeUrl={PORTFOLIO.resumeUrl}
        />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <CertModal
        modal={activeCertModal}
        onClose={() => setActiveCertModal(null)}
      />

      <ArchitectureModal
        project={activeArchProject}
        onClose={() => setActiveArchProject(null)}
      />
    </>
  );
};

export default App;
