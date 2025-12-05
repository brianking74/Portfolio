import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { GROWTH_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const StatsDashboard: React.FC = () => {
  return (
    <section id="work" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex items-end gap-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Selected Impact</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: The Visual Chart (Noir Branding Style) */}
        <Reveal className="group cursor-pointer">
          <div className="aspect-square bg-neutral-900 p-8 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={GROWTH_DATA}>
                  <Area type="monotone" dataKey="sales" stroke="#fff" strokeWidth={2} fill="#525252" fillOpacity={0.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="relative z-10">
               <div className="text-white/60 text-sm uppercase tracking-widest font-mono mb-2">Revenue Growth</div>
               <div className="text-6xl font-bold text-white tracking-tighter">370%</div>
            </div>

            <div className="relative z-10 flex justify-end">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Cellarmaster Wines</h3>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">Platform Optimization</p>
          </div>
        </Reveal>

        {/* Card 2: The Bold Highlight (Flux Interface Style) */}
        <Reveal delay={100} className="group cursor-pointer">
          <div className="aspect-square bg-[#F5F5F5] p-8 flex flex-col justify-center items-center relative transition-transform duration-500 hover:-translate-y-2 group-hover:bg-yellow-300">
            <div className="bg-white px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
              <span className="text-lg font-bold tracking-widest uppercase">7.8x ROI</span>
            </div>
            
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Compass Offices</h3>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">Paid Media Strategy</p>
          </div>
        </Reveal>

        {/* Card 3: Minimalist Typography (Apex Architecture Style) */}
        <Reveal delay={200} className="group cursor-pointer">
          <div className="aspect-square bg-neutral-100 p-8 flex flex-col relative transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="flex-1 flex items-center justify-center">
               <h4 className="text-4xl font-black text-center leading-tight">
                 100%<br/>
                 <span className="text-neutral-400">New<br/>Cust.</span>
               </h4>
            </div>
            <div className="w-8 h-8 rounded-full bg-neutral-200 self-end group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
               <ArrowUpRight size={14} />
            </div>
          </div>
           <div className="mt-4">
            <h3 className="text-xl font-bold">Acquisition</h3>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">36 Month Campaign</p>
          </div>
        </Reveal>

         {/* Card 4: Abstract (Texture) */}
        <Reveal delay={300} className="group cursor-pointer">
          <div className="aspect-video md:aspect-square bg-neutral-900 p-8 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
             <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
             <div className="absolute bottom-8 left-8">
               <div className="text-white text-3xl font-bold max-w-[150px]">+57% Organic Leads</div>
             </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Opsview Ltd</h3>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">SEO & Content</p>
          </div>
        </Reveal>

         {/* Card 5: Text Heavy (Editorial) */}
        <Reveal delay={400} className="md:col-span-2 group cursor-pointer">
           <div className="h-full min-h-[300px] bg-[#E8E8E8] p-8 md:p-12 flex flex-col justify-center relative transition-transform duration-500 hover:-translate-y-2">
              <h3 className="text-3xl md:text-5xl font-black mb-6 max-w-xl">
                I create digital products that people <span className="text-yellow-600 bg-yellow-300 px-2">love to use.</span>
              </h3>
              <p className="text-neutral-600 max-w-md">
                My approach is rooted in simplicity and functionality. I believe that good marketing shouldn't just look good—it should convert flawlessly.
              </p>
               <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-neutral-400 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
           </div>
        </Reveal>

      </div>
    </section>
  );
};