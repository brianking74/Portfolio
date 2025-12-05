import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            LET'S<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white'}}>WORK</span><br/>
            TOGETHER
          </h2>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-block bg-yellow-300 text-black text-lg font-bold py-4 px-12 hover:bg-white transition-colors"
          >
            Start a Project
          </a>
        </div>

        <div className="flex flex-col gap-4 text-neutral-400 text-sm font-mono text-right w-full md:w-auto">
          <a href={`https://${SOCIAL_LINKS.linkedin}`} className="hover:text-white transition-colors">LINKEDIN</a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white transition-colors">EMAIL</a>
          <span>{SOCIAL_LINKS.phone}</span>
          <span className="mt-8 text-neutral-600">&copy; 2025 BRIAN KING</span>
        </div>

      </div>
    </footer>
  );
};