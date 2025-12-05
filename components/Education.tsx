import React from 'react';
import { EDUCATION } from '../constants';
import { Reveal } from './Reveal';

export const Education: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Reveal>
           <h2 className="text-4xl font-black tracking-tighter uppercase mb-8">Education</h2>
           <p className="text-neutral-600 text-lg max-w-sm">
             Continuous learning and certification in the ever-evolving landscape of digital marketing.
           </p>
        </Reveal>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <Reveal key={index} delay={index * 50} className="border-l-2 border-neutral-300 pl-6 hover:border-black transition-colors">
              <h3 className="text-xl font-bold text-neutral-900">{edu.degree}</h3>
              <p className="text-neutral-500">{edu.institution}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};