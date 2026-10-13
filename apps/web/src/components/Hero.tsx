import React from "react";
import { HERO_METRICS, PERSONAL_INFO } from "../data/portfolioData";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-gutter py-space-xl lg:py-24 relative"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6] animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-space-xs">
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
              Full Stack Developer <span className="text-primary mx-1">|</span>{" "}
              Quality Assurance Analyst{" "}
              <span className="text-secondary mx-1">|</span> Business Analyst
            </p>
          </div>

          {/* Bio Paragraph */}
          <p className="font-body-lg text-body-lg text-on-surface/80 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          {/* CTA Action Hub */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("projects");
              }}
              className="px-space-xl py-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_0_24px_-4px_rgba(208,188,255,0.45)] hover:bg-primary-container hover:shadow-[0_0_32px_0px_rgba(160,120,255,0.6)] transition-all duration-300 flex items-center gap-space-xs group"
            >
              <span>Explore Case Studies</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
              className="px-space-xl py-space-md rounded-full bg-surface-container/60 hover:bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-lg text-label-lg backdrop-blur-xl transition-all duration-300 flex items-center gap-space-xs"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                terminal
              </span>
              <span>Initiate Collaboration</span>
            </a>
          </div>

          {/* Metric Anchors */}
          <div className="grid grid-cols-3 gap-space-md pt-space-md border-t border-outline-variant/20 max-w-xl">
            {HERO_METRICS.map((metric, idx) => (
              <div key={idx}>
                <div
                  className={`font-headline-md text-headline-md font-bold ${metric.color}`}
                >
                  {metric.value}
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Professional Profile Photo Card Container */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Ambient Violet/Cyan Glow Behind Container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-secondary/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

          {/* Glassmorphic Container Matching Telemetry Card Dimensions */}
          <div className="relative w-full rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 backdrop-blur-2xl p-space-md sm:p-space-lg shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between">
            {/* Top Window Header Chrome */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-sm"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant ml-2 font-mono">
                  Reza S.Kennedy
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                <span className="font-label-sm text-label-sm text-secondary font-mono">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Centered Large High-Resolution Profile Photo with Violet/Cyan Outer Glow */}
            <div className="relative my-auto flex items-center justify-center py-2">
              {/* Diffuse Violet and Cyan Radial Backlight */}
              <div className="absolute w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/15 blur-xl pointer-events-none -z-10 animate-pulse"></div>

              <div className="relative w-full max-w-[380px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant/30 ring-1 ring-primary/30 shadow-[0_0_35px_-5px_rgba(208,188,255,0.35),0_0_20px_-5px_rgba(76,215,246,0.25)] group">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent opacity-60"></div>

                {/* Floating Profile Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-surface-container-lowest/85 backdrop-blur-md border border-outline-variant/25 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                      Software Engineer
                    </span>
                    <span className="text-on-surface font-semibold text-xs block">
                      {PERSONAL_INFO.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-mono text-[10px]">
                    Full-Stack & QA
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-3 mt-3 border-t border-outline-variant/20 flex items-center justify-between text-body-sm text-outline">
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  verified
                </span>
                {PERSONAL_INFO.university}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
