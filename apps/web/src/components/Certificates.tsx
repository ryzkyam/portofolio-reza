import { Badge } from "@portfolio/ui";
import React, { useEffect, useState } from "react";
import { CERTIFICATES as STATIC_CERTIFICATES } from "../data/portfolioData";
import { getCertificates } from "../services/portfolioService";
import { Certificate, CertificateCategory } from "../types/portfolio";
import { CertificateModal } from "./CertificateModal";

type FilterTab = "All" | CertificateCategory;

export const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const filterTabs: FilterTab[] = [
    "All",
    "Analysis",
    "Development",
    "Academic",
  ];

  // Fetch data sertifikat dari Supabase setiap kali activeTab berubah
  useEffect(() => {
    async function loadCertificates() {
      try {
        setLoading(true);
        const data = await getCertificates(activeTab);

        if (data && data.length > 0) {
          // Format respons data Supabase agar sesuai dengan tipe Certificate pada UI
          const formattedData = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            issuer: item.issuer,
            year: item.year,
            category: item.category as CertificateCategory,
            description: item.description || "",
            imageUrl:
              item.image_url ||
              "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop",
            pdfUrl: item.pdf_url || "#",
          }));
          setCertificates(formattedData);
        } else {
          // Fallback ke data statis lokal jika Supabase mengembalikan data kosong
          const staticFiltered = STATIC_CERTIFICATES.filter((cert) => {
            if (activeTab === "All") return true;
            return cert.category === activeTab;
          });
          setCertificates(staticFiltered);
        }
      } catch (err) {
        console.error("Error fetching certificates from Supabase:", err);
        const staticFiltered = STATIC_CERTIFICATES.filter((cert) => {
          if (activeTab === "All") return true;
          return cert.category === activeTab;
        });
        setCertificates(staticFiltered);
      } finally {
        setLoading(false);
      }
    }

    loadCertificates();
  }, [activeTab]);

  const getBadgeVariant = (
    category: CertificateCategory,
  ): "fullstack" | "qa" | "ba" => {
    switch (category) {
      case "Development":
        return "fullstack";
      case "Academic":
        return "qa";
      case "Analysis":
      default:
        return "ba";
    }
  };

  return (
    <section
      className="w-full max-w-7xl mx-auto px-gutter py-space-xl relative"
      id="certificates"
    >
      <div className="flex flex-col gap-space-lg">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                — CREDENTIALS
              </span>
              <span className="w-12 h-px bg-primary/40"></span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Certificates
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Verified credentials confirming competencies in software
              requirements analysis, full-stack engineering, and academic
              computer science foundations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center p-1 rounded-full bg-surface-container-low border border-outline-variant/25 backdrop-blur-md self-start">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary shadow-[0_0_20px_-3px_rgba(208,188,255,0.4)]"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-80 rounded-2xl bg-surface-container/40 animate-pulse border border-outline-variant/10"
              ></div>
            ))}
          </div>
        ) : (
          /* Certificate Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group rounded-2xl bg-surface-container/70 border border-outline-variant/25 hover:border-primary/50 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image Preview Container */}
                  <div
                    className="relative w-full h-52 bg-surface-container-high overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>

                    {/* Category Badge Top Right */}
                    <div className="absolute top-3.5 right-3.5">
                      <Badge
                        variant={getBadgeVariant(cert.category)}
                        className="backdrop-blur-md shadow-md text-[11px] font-semibold"
                      >
                        {cert.category}
                      </Badge>
                    </div>

                    {/* Hover Overlay Button "View Certificate" with Eye Icon */}
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCertificate(cert);
                        }}
                        className="px-4 py-2 rounded-full bg-primary/95 text-on-primary font-label-md text-xs shadow-lg flex items-center gap-1.5 hover:bg-primary transition-all cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-200"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          visibility
                        </span>
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-space-md sm:p-space-lg space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-headline-sm text-[17px] leading-snug font-bold text-on-surface group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <span className="font-mono text-xs text-outline shrink-0 font-medium pt-0.5">
                        {cert.year}
                      </span>
                    </div>

                    {/* Issuer */}
                    <p className="text-primary/90 font-mono text-xs font-semibold">
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action Links */}
                <div className="px-space-md sm:px-space-lg pb-space-md pt-2 border-t border-outline-variant/15 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="font-label-md text-xs text-on-surface hover:text-primary inline-flex items-center gap-1.5 transition-colors cursor-pointer group/link"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary group-hover/link:scale-110 transition-transform">
                      visibility
                    </span>
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-md text-xs text-on-surface-variant hover:text-secondary inline-flex items-center gap-1 transition-colors group/pdf"
                  >
                    <span>View PDF</span>
                    <span className="material-symbols-outlined text-[14px] group-hover/pdf:translate-x-0.5 transition-transform">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificate Modal Dialog */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
