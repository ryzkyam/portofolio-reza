import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalProjectId, setModalProjectId] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative selection:bg-primary selection:text-on-primary">
      {/* Fixed Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Container */}
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Atmospheric Ambient Glows */}
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute top-[1800px] left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />
          <div className="absolute top-[3200px] right-20 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[130px] pointer-events-none -z-10" />

          {/* Sections */}
          <Hero onNavigate={scrollToSection} />
          <About />
          <Projects onOpenModal={(id) => setModalProjectId(id)} />
          <Skills />
          <Certificates />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Case Study Modal Dialog */}
      <ProjectModal
        projectId={modalProjectId}
        onClose={() => setModalProjectId(null)}
        onNavigateContact={() => scrollToSection('contact')}
      />
    </div>
  );
}

export default App;
