import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden max-w-[1400px] mx-auto">
      
      <div className="z-10 w-full">
        <Reveal delay={0}>
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-6 text-neutral-900">
            <div>Digital</div>
            <div className="flex flex-wrap gap-4">
              <span className="text-outline">Growth</span>
              <span>Expert</span>
            </div>
            <div>& Strategist</div>
          </h1>
        </Reveal>
        
        <div className="w-full h-px bg-neutral-200 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <Reveal delay={200} className="max-w-2xl">
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
              I craft data-driven digital strategies that blend technical precision with 
              <span className="bg-yellow-300 px-2 font-medium text-black mx-1">bold ROI metrics</span>. 
              Helping brands dominate their market in a noisy world.
            </p>
          </Reveal>

          <Reveal delay={300} className="flex flex-col items-end gap-2 text-right">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">Available for Freelance</span>
            </div>
            <div className="text-sm font-mono font-medium">
              Nov 2025 — Present
            </div>
            <div className="text-neutral-400 text-sm mt-1">
              {SOCIAL_LINKS.location}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};