'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { RefObject } from 'react';

interface Props {
  heroRef: RefObject<HTMLDivElement>;
}

export default function Overlay({ heroRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  // Section 1: "Shubham Singh. Creative Developer." (Center) - Visible from 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -150]);

  // Section 2: "I build digital experiences." (Left aligned) - Visible from 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [150, -150]);

  // Section 3: "Bridging design and engineering." (Right aligned) - Visible from 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [150, -150]);

  // Section 4 (optional fade-out phase): Scroll down indicator or ending
  const opacity4 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Section 1 - Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="text-center drop-shadow-2xl max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight">
              Shubham Singh.
            </h1>
            <p className="mt-4 text-xl md:text-3xl text-zinc-300 font-medium tracking-wide">
              Creative Developer.
            </p>
          </div>
        </motion.div>

        {/* Section 2 - Left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl max-w-2xl leading-tight">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              experiences.
            </span>
          </h2>
        </motion.div>

        {/* Section 3 - Right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-24 text-right"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl max-w-3xl leading-tight">
            Bridging design <br />
            and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ff6b35]">engineering.</span>
          </h2>
        </motion.div>
        
        {/* Scroll Indicator at the end */}
        <motion.div
          style={{ opacity: opacity4 }}
          className="absolute bottom-12 inset-x-0 flex justify-center items-end"
        >
          <p className="text-sm tracking-widest uppercase text-zinc-400 font-semibold flex items-center gap-2">
            Explore Work 
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

