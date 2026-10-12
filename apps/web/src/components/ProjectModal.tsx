import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Badge } from '@portfolio/ui';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  projectId,
  onClose,
  onNavigateContact,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, selectedImage, onClose]);

  if (!projectId) return null;

  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  const handleDiscussClick = () => {
    onClose();
    onNavigateContact();
  };

  return (
    <>
      {/* Main Glassmorphic Modal Dialog Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-background/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-hidden"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-surface-container-low/95 border border-outline-variant/35 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-space-lg md:p-space-xl border-b border-outline-variant/20 bg-surface-container-low/90 backdrop-blur-md sticky top-0 z-20">
            <div className="space-y-1.5 pr-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="fullstack" className="text-[11px] font-semibold tracking-wider">
                  {project.tagNote}
                </Badge>
                <span className="text-outline text-body-sm">•</span>
                <span className="text-secondary font-mono text-[12px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  {project.statusNote}
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0 cursor-pointer shadow-sm"
              aria-label="Close Case Study Modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Scrollable Modal Content with All 9 Sections in Order */}
          <div className="flex-1 overflow-y-auto p-space-lg md:p-space-xl space-y-space-xl text-on-surface">
            {/* SECTION 1: Overview */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">domain_verification</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  01. System Overview
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Executive Overview & Architecture
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* SECTION 2: Background */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  02. Context & Problem Space
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Business Background & Operational Bottlenecks
              </h3>
              <div className="p-4 rounded-2xl bg-surface-container/60 border border-outline-variant/25 leading-relaxed text-body-sm text-on-surface-variant">
                {project.background}
              </div>
            </section>

            {/* SECTION 3: Objectives */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">target</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  03. Project Goals
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Strategic Engineering Objectives
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                {project.objectives.map((objective, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-container/50 border border-outline-variant/20 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-body-sm text-on-surface-variant leading-relaxed">
                      {objective}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: Role & Contribution */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">engineering</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  04. Ownership & Responsibilities
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Role & Core Contributions
              </h3>
              <div className="space-y-2.5 pt-1">
                {project.roleAndContribution.map((role, idx) => {
                  const parts = role.split(':');
                  const roleName = parts.length > 1 ? parts[0] : null;
                  const roleText = parts.length > 1 ? parts.slice(1).join(':') : role;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-container-high/40 border border-outline-variant/25 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 shrink-0">
                        arrow_right_alt
                      </span>
                      <div className="text-body-sm text-on-surface-variant leading-relaxed">
                        {roleName && (
                          <strong className="text-on-surface font-semibold block sm:inline mr-2">
                            {roleName}:
                          </strong>
                        )}
                        <span>{roleText.trim()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 5: Process */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">timeline</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  05. Methodology & Execution
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Engineering & Analysis Process
              </h3>
              <div className="space-y-3 pt-1">
                {project.process.map((step, idx) => {
                  const splitIdx = step.indexOf(':');
                  const phaseTitle = splitIdx !== -1 ? step.slice(0, splitIdx) : null;
                  const phaseBody = splitIdx !== -1 ? step.slice(splitIdx + 1) : step;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-surface-container/60 border border-outline-variant/20 hover:border-primary/30 transition-colors"
                    >
                      {phaseTitle && (
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] font-bold">
                            {phaseTitle.trim()}
                          </span>
                        </div>
                      )}
                      <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        {phaseBody.trim()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 6: Output & Features */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">featured_play_list</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  06. Delivered Capabilities
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Outputs & Key Feature Sets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                {project.outputAndFeatures.map((feature, idx) => {
                  const parts = feature.split(':');
                  const featName = parts.length > 1 ? parts[0] : null;
                  const featBody = parts.length > 1 ? parts.slice(1).join(':') : feature;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-container-highest/30 border border-outline-variant/20"
                    >
                      <div className="flex items-center gap-2 text-secondary mb-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        <strong className="text-on-surface text-[13px] font-semibold">
                          {featName ? featName.trim() : `Feature 0${idx + 1}`}
                        </strong>
                      </div>
                      <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        {featBody.trim()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 7: Tools Used */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">construction</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  07. Technical Stack
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Tools & Technologies Leveraged
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.toolsUsed.map((tool, idx) => (
                  <Badge
                    key={idx}
                    variant={idx % 2 === 0 ? 'fullstack' : 'qa'}
                    className="px-3 py-1.5 text-xs font-mono shadow-sm"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>

            {/* SECTION 8: Key Learnings */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  08. Professional Insights
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Key Technical & Business Learnings
              </h3>
              <div className="space-y-2.5 pt-1">
                {project.keyLearnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-container/60 border border-outline-variant/20 flex items-start gap-3"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                      psychology
                    </span>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">{learning}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 9: Gallery */}
            <section className="space-y-space-xs">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">photo_library</span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  09. Visual Documentation
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold">
                Project Gallery & Interface Previews
              </h3>
              <p className="text-body-sm text-outline">
                Click any screenshot thumbnail to expand into full-resolution preview.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-md pt-2">
                {project.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className="group relative h-44 rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all cursor-pointer shadow-lg"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-surface-container-lowest/80 text-primary opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                      <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-space-lg md:p-space-xl border-t border-outline-variant/20 bg-surface-container-low/95 flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex items-center gap-2 text-outline font-mono text-[12px]">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified_user
              </span>
              <span>Empirical Production Specifications Verified</span>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                onClick={handleDiscussClick}
                className="px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-[0_0_20px_-3px_rgba(208,188,255,0.4)] transition-all cursor-pointer"
              >
                Discuss Similar Project
              </button>
              <button
                onClick={onClose}
                className="px-space-md py-space-sm rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Lightbox Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-background/95 backdrop-blur-2xl animate-in fade-in duration-150"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-outline-variant/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Expanded preview"
              className="max-h-[85vh] w-auto object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-lowest/80 text-on-surface hover:text-primary backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close Lightbox"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
