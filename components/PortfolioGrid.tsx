import React from 'react';
import { Project, ProjectCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioGridProps {
  category: ProjectCategory;
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ category, projects }) => {
  const filteredProjects = category === ProjectCategory.ALL 
    ? projects 
    : projects.filter(p => p.category === category);

  // If user selected contact, we show a contact section instead of grid (basic logic)
  if (category === ProjectCategory.CONTACT) {
    return (
      <div className="w-full max-w-[1920px] mx-auto px-6 py-24 min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold mb-8">Let's Create Together</h2>
        <a href="mailto:hello@lylechan.design" className="text-2xl text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-8 transition-colors">
          hello@lylechan.design
        </a>
      </div>
    );
  }

  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 py-16 md:py-24">
      {/* Grid Container - 1 column on mobile, 2 columns on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        {filteredProjects.map((project) => (
          <article key={project.id} className="group cursor-pointer flex flex-col">
            {/* Image Container - Width adaptive, Aspect Ratio preserved */}
            <div className="w-full aspect-video overflow-hidden bg-gray-900 mb-6 rounded-[8px]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Content Container - Text size static, only line wrapping changes */}
            <div className="flex flex-col items-start">
              <div className="flex w-full justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
              </div>
              
              <div className="mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 border border-gray-800 px-2 py-1 rounded-sm">
                  {project.category}
                </span>
              </div>

              <p className="text-base text-gray-400 leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="w-full py-24 text-center text-gray-600">
          <p>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;