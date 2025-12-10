import React from 'react';
import { CLIENT_PROJECTS } from '../constants';
import { Reveal } from './Reveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const ClientProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto bg-neutral-900 text-white">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/20 pb-8">
           <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Client Projects</h2>
           <p className="text-neutral-400 mt-4 md:mt-0 font-mono text-sm uppercase tracking-widest">
             Recent Deliverables
           </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CLIENT_PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 100} className="h-full">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-neutral-800 p-8 md:p-10 transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-2 border border-transparent"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono uppercase tracking-wider px-2 py-1 border border-white/20 rounded-full text-neutral-300 group-hover:border-black/20 group-hover:text-black transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="text-neutral-500 group-hover:text-black transition-colors" size={24} />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-black transition-colors">
                {project.title}
              </h3>
              
              <p className="text-neutral-400 leading-relaxed text-lg mb-8 flex-grow group-hover:text-neutral-900 transition-colors">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                Visit Site <ExternalLink size={14} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};