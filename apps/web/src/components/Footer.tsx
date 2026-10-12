import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Full Stack Developer | QA Analyst | Business Analyst
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-outline-variant/10 text-on-surface-variant">
          <p className="font-body-sm text-body-sm">
            © 2024 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-space-lg">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 flex items-center gap-space-xs"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 flex items-center gap-space-xs"
            >
              <span className="material-symbols-outlined text-[16px]">work</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 flex items-center gap-space-xs"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
