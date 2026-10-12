export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: 'all' | 'qa' | 'ba' | 'fullstack';
  categoryMatch: string[];
  badges: { label: string; variant: 'primary' | 'secondary' | 'neutral' }[];
  tagNote: string;
  tags: string[];
  statusNote: string;
  actionText: string;

  // 9 Required Project Modal Sections
  overview: string;
  background: string;
  objectives: string[];
  roleAndContribution: string[];
  process: string[];
  outputAndFeatures: string[];
  toolsUsed: string[];
  keyLearnings: string[];
  gallery: string[];
}

export interface StatItem {
  icon: string;
  iconColor: 'primary' | 'secondary';
  label: string;
  value: string;
  subtext: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: 'primary' | 'secondary';
  domainLabel: string;
  skills: string[];
  footerBadge: string;
}

export type CertificateCategory = 'Analysis' | 'Development' | 'Academic';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CertificateCategory;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  credentialId?: string;
}
