import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/portfolioService';
import { PROJECTS as STATIC_PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onOpenModal: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'qa' | 'ba' | 'fullstack'>('all');

  const filterTabs: { id: 'all' | 'qa' | 'ba' | 'fullstack'; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'qa', label: 'QA Engineering' },
    { id: 'ba', label: 'Business Analyst' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  // Fetch data dari Supabase saat komponen dipasang
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await getProjects();
        if (data && data.length > 0) {
          // Format data Supabase agar sesuai dengan kebutuhan UI
          const formattedData = data.map((item: any) => ({
            id: item.slug || item.id,
            title: item.title,
            category: item.category === 'QA Engineering' ? 'qa' : item.category === 'Business Analyst' ? 'ba' : 'fullstack',
            categoryMatch: [
              'all',
              item.category === 'QA Engineering' ? 'qa' : item.category === 'Business Analyst' ? 'ba' : 'fullstack'
            ],
            description: item.overview || item.background || '',
            imageUrl: item.gallery_urls?.[0] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
            imageAlt: item.title,
            badges: [
              { label: item.category, variant: item.category === 'QA Engineering' ? 'secondary' : 'primary' }
            ],
            tags: item.tools_used || [],
            tagNote: item.category,
            actionText: 'View Case Study',
            statusNote: 'Production'
          }));
          setProjectsData(formattedData);
        } else {
          // Fallback ke data statis jika data Supabase kosong
          setProjectsData(STATIC_PROJECTS);
        }
      } catch (err) {
        console.error('Error loading projects from Supabase, fallback to static:', err);
        setProjectsData(STATIC_PROJECTS);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.categoryMatch ? proj.categoryMatch.includes(activeFilter) : proj.category === activeFilter;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl relative" id="projects">
      <div className="flex flex-col gap-space-lg">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Featured Projects
              </span>
              <span className="w-12 h-px bg-secondary/40"></span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-1">
              Production Implementations & Case Studies
            </h2>
          </div>

          {/* Filter Tab Buttons */}
          <div className="flex items-center p-1 rounded-full bg-surface-container-low border border-outline-variant/25 backdrop-blur-md self-start">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {[1, 2].map((n) => (
              <div key={n} className="h-96 rounded-2xl bg-surface-container/40 animate-pulse border border-outline-variant/10"></div>
            ))}
          </div>
        ) : (
          /* Project Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {filteredProjects.map((project) => {
              const isQACentric = project.category === 'qa';
              const hoverBorder = isQACentric ? 'hover:border-secondary/50' : 'hover:border-primary/50';
              const hoverText = isQACentric ? 'group-hover:text-secondary' : 'group-hover:text-primary';
              const buttonColor = isQACentric
                ? 'text-secondary hover:text-secondary-fixed'
                : 'text-primary hover:text-primary-container';

              return (
                <div
                  key={project.id}
                  className={`project-card group rounded-2xl bg-surface-container/70 border border-outline-variant/25 ${hoverBorder} backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col shadow-xl`}
                >
                  {/* Thumbnail Mockup Display */}
                  <div className="relative w-full h-56 bg-surface-container-high overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                      {project.badges?.map((badge: any, bIdx: number) => {
                        const badgeClasses =
                          badge.variant === 'primary'
                            ? 'bg-primary/20 text-primary border-primary/30'
                            : badge.variant === 'secondary'
                            ? 'bg-secondary/20 text-secondary border-secondary/30'
                            : 'bg-surface-container-lowest/80 text-on-surface border-transparent';
                        return (
                          <span
                            key={bIdx}
                            className={`px-2.5 py-1 rounded-full backdrop-blur-md border font-mono text-[11px] font-semibold ${badgeClasses}`}
                          >
                            {badge.label}
                          </span>
                        );
                      })}
                    </div>

                    {/* Bottom Right Tag */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 text-on-surface-variant font-mono text-[11px]">
                        {project.tagNote}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                    <div className="space-y-space-xs">
                      <h3
                        className={`font-headline-sm text-headline-sm text-on-surface font-bold ${hoverText} transition-colors`}
                      >
                        {project.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-space-md">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags?.map((tag: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
                        <button
                          onClick={() => onOpenModal(project.id)}
                          className={`font-label-md text-label-md ${buttonColor} inline-flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer`}
                        >
                          <span>{project.actionText || 'View Details'}</span>
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_outward
                          </span>
                        </button>
                        <span className="font-mono text-[11px] text-outline">
                          {project.statusNote || 'Production'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};