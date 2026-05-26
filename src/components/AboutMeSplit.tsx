'use client';

import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ from, to, suffix, label }: { from: number; to: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return (
    <div ref={ref} className="flex flex-col mb-8">
      <div className="flex items-baseline gap-1">
        <motion.span className="text-5xl md:text-6xl font-black text-[#ff6b35]">
          {rounded}
        </motion.span>
        <span className="text-4xl md:text-5xl font-black text-[#ff6b35]">{suffix}</span>
      </div>
      <span className="text-sm md:text-base font-semibold tracking-wider text-[#999999] uppercase mt-2">
        {label}
      </span>
    </div>
  );
}

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Stats (40%) */}
        <div className="lg:w-[40%] flex flex-col justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-8">
            <Counter from={0} to={10} suffix="+" label="Tech Stack" />
            <Counter from={0} to={5} suffix="+" label="Live Projects" />
            <Counter from={0} to={100} suffix="%" label="Commitment" />
            <Counter from={0} to={1} suffix="+" label="Years Coding" />
          </div>
        </div>

        {/* Right Side: Story (60%) */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-8 tracking-tight">
            From Curious Learner to Tech Innovator
          </h3>
          <div className="space-y-6 text-[#999999] text-lg md:text-xl leading-relaxed">
            <p>
              I am a passionate developer and AKTU student focused on Web Development, App Development, DSA, and modern digital experiences. My goal is to build impactful products, startup-level solutions, and government-tech innovations.
            </p>
            <p>
              I enjoy building innovative tech solutions like the Lucknow Metro App, a smart transit application designed for Lucknow Metro users to simplify ticket booking with live tracking and chatbot support.
            </p>
            <p>
              I love combining creativity with technology to create powerful, user-friendly applications with premium UI/UX. I am a fast learner and a team player driven by innovation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
