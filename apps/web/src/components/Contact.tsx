import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "fullstack",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Gantilah URL ini dengan public URL dari Supabase Bucket kamu
  // Misal: https://[your-project-id].supabase.co/storage/v1/object/public/cv/CV_Reza_Rizki_Ramadhan.pdf
  const CV_URL =
    PERSONAL_INFO.resumeUrl ||
    "https://skopxltcpbhgtsokdliy.supabase.co/storage/v1/object/public/project-assets/cv_Reza_Rizki.pdf";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "fullstack",
        message: "",
      });
    }, 800);
  };

  return (
    <section
      className="w-full max-w-7xl mx-auto px-gutter py-space-xl lg:pb-32 relative"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* Left Narrative Column */}
        <div className="lg:col-span-5 space-y-space-lg">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                Contact
              </span>
              <span className="w-12 h-px bg-primary/40"></span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Let's Build Reliable Software Together
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether you need a dedicated Full Stack Engineer to construct your
              product from zero, a Quality Assurance Analyst to engineer an
              infallible test automation harness, or a Business Analyst to
              formalize your system requirements—I am open to discuss.
            </p>
          </div>

          {/* Contact Direct Channels */}
          <div className="space-y-space-sm font-body-sm text-body-sm">
            <div className="p-space-md rounded-2xl bg-surface-container/60 border border-outline-variant/20 flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-outline block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-on-surface font-medium hover:text-primary transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="p-space-md rounded-2xl bg-surface-container/60 border border-outline-variant/20 flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  location_on
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-outline block">
                  Location / Work Mode
                </span>
                <span className="text-on-surface font-medium">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Network Anchors & Download CV */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            {/* Download CV Button (Primary CTA) */}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Reza_Rizki_Ramadhan.pdf"
              className="px-space-md py-space-sm rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container flex items-center gap-1.5 transition-all shadow-md group"
            >
              <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform">
                download
              </span>
              <span>Download CV</span>
            </a>

            {/* LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-md py-space-sm rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-label-md hover:bg-surface-container-high hover:text-secondary flex items-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">
                work
              </span>
              <span>LinkedIn</span>
            </a>

            {/* GitHub Profile */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-md py-space-sm rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-label-md hover:bg-surface-container-high hover:text-primary flex items-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">
                terminal
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="p-space-lg md:p-space-xl rounded-3xl bg-surface-container-low/80 border border-outline-variant/30 backdrop-blur-2xl shadow-2xl relative">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
              Send an Inquiry or Project Proposal
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              Expected response window: within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-space-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-label-md text-label-md text-on-surface"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Leon s kennedy"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container/70 border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-sm text-body-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-label-md text-label-md text-on-surface"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. @company.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container/70 border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-sm text-body-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-service"
                  className="font-label-md text-label-md text-on-surface"
                >
                  Primary Engagement Focus
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface-container/70 border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-sm text-body-sm"
                >
                  <option
                    value="fullstack"
                    className="bg-surface-container text-on-surface"
                  >
                    Full Stack Web Engineering (Next.js / Python / C#)
                  </option>
                  <option
                    value="qa"
                    className="bg-surface-container text-on-surface"
                  >
                    QA Engineering & Automated Test Strategy (Playwright /
                    Postman)
                  </option>
                  <option
                    value="ba"
                    className="bg-surface-container text-on-surface"
                  >
                    Business Analysis, BRD/SRS, & System Modeling (BPMN / UML)
                  </option>
                  <option
                    value="all"
                    className="bg-surface-container text-on-surface"
                  >
                    Comprehensive End-to-End System Delivery
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-label-md text-label-md text-on-surface"
                >
                  Message & Project Context
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share system requirements, delivery timeline, or interview details..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-container/70 border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-sm text-body-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-space-xl rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_0_20px_-3px_rgba(208,188,255,0.4)] hover:bg-primary-container hover:shadow-[0_0_28px_0px_rgba(160,120,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                <span>
                  {isSubmitting ? "Transmitting..." : "Transmit Message"}
                </span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>

              {/* Success Alert Notification */}
              {submitted && (
                <div className="p-3.5 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary font-mono text-[13px] text-center flex items-center justify-center gap-2 animate-in fade-in duration-300">
                  <span className="material-symbols-outlined text-[18px]">
                    check_circle
                  </span>
                  <span>
                    Inquiry successfully dispatched. Reza will connect back
                    shortly!
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
