import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Share2, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-black tracking-tight uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Brian.King
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <button onClick={() => scrollToSection('work')} className="hover:text-black transition-colors">Work</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-black transition-colors">Experience</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-black transition-colors">About</button>
          </div>
          
          {/* Share Button */}
          <button 
            onClick={handleShare} 
            className="flex items-center gap-2 text-neutral-600 hover:text-black transition-colors group"
            title="Copy Link to Clipboard"
            aria-label="Copy Link"
          >
            {copied ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Share2 size={18} className="group-hover:scale-110 transition-transform" />
            )}
            <span className="hidden md:inline text-sm font-medium">
              {copied ? 'Copied!' : 'Share'}
            </span>
          </button>

          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="bg-black text-white text-sm font-bold py-3 px-6 hover:bg-neutral-800 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};