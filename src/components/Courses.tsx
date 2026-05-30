'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  title: string;
  category: 'frontend' | 'backend' | 'core' | 'design';
  badge: string;
  desc: string;
  details: string[];
}

const skills: Skill[] = [
  {
    title: 'React & Next.js',
    category: 'frontend',
    badge: 'Frontend',
    desc: 'Building optimized, search-indexed, and responsive client experiences.',
    details: ['Next.js 14 (App Router)', 'React 18', 'TypeScript', 'Server Components', 'State Management']
  },
  {
    title: 'Tailwind CSS',
    category: 'frontend',
    badge: 'Styling',
    desc: 'Crafting responsive, layout layouts using custom token configurations.',
    details: ['Glassmorphic Layers', 'Responsive Flex/Grid', 'Custom CSS Directives', 'Media/Container Queries']
  },
  {
    title: 'Python & Java',
    category: 'backend',
    badge: 'Backend & APIs',
    desc: 'Architecting robust backend controllers, database schemas, and AI endpoints.',
    details: ['FastAPI (Python)', 'Java OOP Logic', 'REST API Architecture', 'PostgreSQL / MongoDB', 'RAG Pipelines']
  },
  {
    title: 'Framer Motion',
    category: 'frontend',
    badge: 'Animation',
    desc: 'Orchestrating hardware-accelerated animations and page-state morphs.',
    details: ['Scroll-Driven Timelines', 'AnimatePresence Node hooks', 'Layout ID Morphing', 'Spring Physics']
  },
  {
    title: 'C Programming & DSA',
    category: 'core',
    badge: 'Core Systems',
    desc: 'Solving high-complexity logic puzzles and optimizing runtime performance.',
    details: ['Memory Allocations', 'Data Structure Design', 'Algorithm Optimizations', 'Logical Assertions']
  },
  {
    title: 'UI/UX Design',
    category: 'design',
    badge: 'Design System',
    desc: 'Creating high-end layout guides, custom themes, and interactive prototypes.',
    details: ['Figma Layout Systems', 'Futuristic UI Aesthetics', 'Color Theory & Fonts', 'Visual Motion Polish']
  }
];

export default function Courses() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'core' | 'design'>('all');

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(s => s.category === filter);

  return (
    <section className="bg-[#0d0d0d] py-[100px] lg:py-[140px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h3
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Tech Stack
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            The programming models, framework stacks, and design systems I deploy to build digital products.
          </p>
        </div>

        {/* Filter Pill Menu */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {(['all', 'frontend', 'backend', 'core', 'design'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat
                  ? 'bg-white text-black border-white shadow-[0_8px_20px_-4px_rgba(255,255,255,0.1)]'
                  : 'bg-white/[0.02] text-zinc-400 border-white/5 hover:text-white hover:bg-white/5 hover:border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Tech' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="group relative flex flex-col justify-between glass-card rounded-3xl p-8 hover:border-[#ff6b35]/20"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-widest text-[#ff6b35] uppercase mb-4">
                    {skill.badge}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {skill.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {skill.desc}
                  </p>
                </div>
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 border-t border-white/5 pt-6 mt-auto">
                  {skill.details.map((detail, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 text-[10px] font-medium text-zinc-400 bg-white/[0.02] border border-white/[0.04] rounded-lg group-hover:bg-white/[0.04] group-hover:border-white/[0.08] group-hover:text-zinc-200 transition-colors duration-300"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Code Profile Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Rajputshubham07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full pill-cta font-bold tracking-tight"
          >
            View GitHub Profile →
          </a>
        </div>

      </div>
    </section>
  );
}
