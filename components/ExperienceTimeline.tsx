import React from 'react';
import { EXPERIENCE } from '../constants';
import { Reveal } from './Reveal';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-neutral-900 pb-8">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Experience</h2>
          <p className="text-neutral-500 mt-4 md:mt-0 font-mono text-sm uppercase tracking-widest">
            15+ Years of Proven Results
          </p>
        </div>
      </Reveal>

      <div className="relative">
        {EXPERIENCE.map((job, index) => (
          <Reveal key={job.id} className="w-full mb-0 group" delay={index * 100}>
            <div id={job.id} className="scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-neutral-200 transition-colors group-hover:border-black">
              
              {/* Period - Left Col */}
              <div className="md:col-span-3 text-lg font-mono text-neutral-500 group-hover:text-black transition-colors">
                {job.period}
              </div>

              {/* Role & Company - Middle Col */}
              <div className="md:col-span-5">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{job.role}</h3>
                <div className="text-xl font-medium text-neutral-800 mb-4">{job.company}</div>
                <div className="flex flex-wrap gap-2">
                   {job.tags.slice(0,3).map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-wider px-2 py-1 border border-neutral-200 rounded-sm text-neutral-500">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>

              {/* Description - Right Col */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {job.description}
                </p>
                <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ul className="space-y-2">
                    {job.achievements.slice(0, 2).map((ach, i) => (
                      <li key={i} className="text-sm font-medium flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">→</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};