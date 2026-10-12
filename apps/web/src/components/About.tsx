import React from 'react';
import { STATS_STRIP, PILLARS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl relative" id="about">
      <div className="flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Multidisciplinary Profile
            </span>
            <span className="w-12 h-px bg-primary/40"></span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
            Where Business Clarity Meets Engineering Discipline
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Holding an academic background in Computer Science from Gunadarma University, I engineered my
            career path through a specialized convergence of three disciplines. I believe flawless
            software cannot happen in a silo: it demands crystal-clear requirement definition, robust
            full-stack architecture, and defensive automated testing.
          </p>
        </div>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
          {STATS_STRIP.map((stat, idx) => {
            const isPrimary = stat.iconColor === 'primary';
            return (
              <div
                key={idx}
                className="p-space-md rounded-2xl bg-surface-container-low/70 border border-outline-variant/25 backdrop-blur-lg hover:border-outline-variant/40 transition-colors"
              >
                <div
                  className={`flex items-center gap-space-xs ${
                    isPrimary ? 'text-primary' : 'text-secondary'
                  } mb-1`}
                >
                  <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {stat.label}
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {stat.value}
                </div>
                <div className="font-body-sm text-body-sm text-outline mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* The Triad: 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg pt-space-xs">
          {PILLARS.map((pillar, idx) => {
            const isSecondary = pillar.color === 'secondary';
            const iconBg = isSecondary
              ? 'bg-secondary/10 border-secondary/25 text-secondary'
              : idx === 0
              ? 'bg-primary/10 border-primary/25 text-primary'
              : 'bg-primary-container/20 border-primary-container/30 text-primary-fixed';
            const hoverBorder = isSecondary
              ? 'hover:border-secondary/40'
              : 'hover:border-primary/40';
            const tagBg = isSecondary
              ? 'bg-secondary/10 text-secondary'
              : idx === 0
              ? 'bg-surface-container-high text-on-surface-variant'
              : 'bg-primary/10 text-primary';

            return (
              <div
                key={idx}
                className={`group p-space-lg rounded-2xl bg-surface-container/60 hover:bg-surface-container border border-outline-variant/20 ${hoverBorder} backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl`}
              >
                <div className="space-y-space-md">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${iconBg} group-hover:scale-110 transition-transform`}
                  >
                    <span className="material-symbols-outlined text-[26px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`font-label-sm text-label-sm uppercase font-mono tracking-wider ${
                        isSecondary ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {pillar.domain}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
