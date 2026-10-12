import React, { useEffect } from 'react';
import { Certificate } from '../types/portfolio';
import { Badge } from '@portfolio/ui';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const categoryBadgeVariant: Record<string, 'fullstack' | 'qa' | 'ba'> = {
    Development: 'fullstack',
    Analysis: 'ba',
    Academic: 'qa',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-background/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-surface-container-low/95 border border-outline-variant/35 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Window Bar with Close Action */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20 bg-surface-container-low/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
              Verified Credential Preview
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0 cursor-pointer shadow-sm"
            aria-label="Close Certificate Preview"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Large High-Resolution Certificate Image Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex items-center justify-center bg-surface-container-lowest/60">
          <div className="relative max-h-[58vh] max-w-full rounded-2xl overflow-hidden border border-outline-variant/25 shadow-2xl bg-surface-container-lowest">
            <img
              src={certificate.imageUrl}
              alt={certificate.title}
              className="max-h-[56vh] w-auto object-contain mx-auto transition-transform duration-300"
            />
          </div>
        </div>

        {/* Modal Footer Details */}
        <div className="p-space-md sm:p-space-lg border-t border-outline-variant/20 bg-surface-container-low/95 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          {/* Left Details */}
          <div className="space-y-1.5 flex-1 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge
                variant={categoryBadgeVariant[certificate.category] || 'fullstack'}
                className="text-[11px] font-semibold"
              >
                {certificate.category}
              </Badge>
              <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-mono text-[11px]">
                {certificate.year}
              </span>
              {certificate.credentialId && (
                <span className="font-mono text-[11px] text-outline">
                  ID: {certificate.credentialId}
                </span>
              )}
            </div>

            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
              {certificate.title}
            </h3>

            <p className="text-primary font-mono text-xs font-semibold">
              Issued by {certificate.issuer}
            </p>

            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-2 md:line-clamp-none max-w-2xl">
              {certificate.description}
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 flex items-center gap-space-sm pt-2 md:pt-0">
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-[0_0_20px_-3px_rgba(208,188,255,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View PDF</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
