import React, { useEffect, useRef, useState } from 'react';

export const MouseFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  // Use refs for mutable values to avoid re-renders during animation loop
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const isVisible = useRef(false);

  useEffect(() => {
    // Disable on touch devices to prevent clutter
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
         isVisible.current = true;
         // Snap to position on first entry to avoid "flying in" from corner
         pos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect interactive elements to trigger hover state
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setHovered(true);
      }
    };

    const onMouseOut = () => {
       setHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  useEffect(() => {
    let frameId: number;

    const animate = () => {
      // Linear interpolation for smooth "catch up" effect
      const ease = 0.15;
      
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      if (cursorRef.current) {
        // Move the wrapper
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block will-change-transform"
      style={{
        // Initial position off-screen
        transform: 'translate3d(-100px, -100px, 0)'
      }}
    >
      {/* 
        Inner circle handles the scaling and visual style.
        Using yellow-400 for visibility on white backgrounds.
        Opacity changes on hover to allow reading text through the "bubble".
      */}
      <div 
        className={`
           absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2
           rounded-full bg-yellow-400
           transition-all duration-300 ease-out
           ${hovered ? 'w-16 h-16 opacity-50' : 'w-4 h-4 opacity-100'}
        `}
      />
    </div>
  );
};