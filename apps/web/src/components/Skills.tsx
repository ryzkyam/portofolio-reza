import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl relative" id="skills">
      <div className="flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Tooling & Expertise
            </span>
            <span className="w-12 h-px bg-primary/40"></span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
            Comprehensive Technical Matrix
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The engineering toolkit driving my day-to-day work—synthesizing rigorous quality
            assurance, structured business architecture documentation, and robust modern web
            engineering.
          </p>
        </div>

        {/* Skills Matrix 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isSecondary = category.iconColor === 'secondary';
            const iconBg = isSecondary
              ? 'bg-secondary/10 border-secondary/20 text-secondary'
              : 'bg-primary/10 border-primary/20 text-primary';
            const hoverBorder = isSecondary ? 'hover:border-secondary/40' : 'hover:border-primary/40';
            const domainText = isSecondary ? 'text-secondary' : 'text-primary';
            const footerText = isSecondary ? 'text-secondary' : 'text-primary';

            return (
              <div
                key={idx}
                className={`p-space-lg rounded-2xl bg-surface-container/60 border border-outline-variant/25 backdrop-blur-xl flex flex-col justify-between shadow-lg ${hoverBorder} transition-all duration-300`}
              >
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconBg}`}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {category.icon}
                      </span>
                    </div>
                    <span className={`font-mono text-[11px] ${domainText} font-semibold uppercase`}>
                      {category.domainLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {category.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface text-[12px] font-mono hover:border-outline-variant/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-space-lg pt-space-xs border-t border-outline-variant/20 ${footerText} font-mono text-[11px] flex items-center gap-1`}
                >
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>{' '}
                  {category.footerBadge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
