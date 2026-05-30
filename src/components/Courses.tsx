'use client';

import { useState } from 'react';

interface TechItem {
  id: string;
  filename: string;
  title: string;
  badge: string;
  lang: string;
  experience: string;
  projects: { name: string; url: string }[];
  insight: string;
  telemetry: {
    label: string;
    value: string;
  }[];
  code: string;
}

const techItems: TechItem[] = [
  {
    id: 'nextjs',
    filename: 'useIntersectionObserver.ts',
    title: 'React & Next.js',
    badge: 'Frontend',
    lang: 'typescript',
    experience: 'Senior level | 5+ Years Production',
    projects: [
      { name: 'SlapMac', url: '#projects' },
      { name: 'SSCONSTRUCTION', url: '#projects' },
      { name: 'GRAMSEVAK-AI', url: '#projects' }
    ],
    insight: 'Leveraging React Server Components (RSC) to minimize client-side hydration cost, utilizing dynamic code-splitting to optimize network payload distributions, and implementing ISR for high-performance static rendering.',
    telemetry: [
      { label: 'Bundle Size', value: '1.2KB (Gzipped)' },
      { label: 'TBT (Total Blocking Time)', value: '< 50ms' },
      { label: 'Render Mode', value: 'Hybrid (RSC / Client)' }
    ],
    code: `import { useEffect, useRef, useState } from 'react';

// Custom viewport observer for high-performance lazy loading
export function useElementInView(options: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return [ref, inView] as const;
}`
  },
  {
    id: 'tailwind',
    filename: 'tailwind.config.ts',
    title: 'Tailwind CSS',
    badge: 'Styling',
    lang: 'typescript',
    experience: 'Expert Customization | 5+ Years',
    projects: [
      { name: 'SlapMac', url: '#projects' },
      { name: 'SSCONSTRUCTION', url: '#projects' }
    ],
    insight: 'Structuring dynamic theme layers, defining HSL color tokens to simplify dark/light overlays, and managing CSS layers (@layer components) to build performant and highly extensible glassmorphic utilities.',
    telemetry: [
      { label: 'Tailwind Build', value: 'Highly Purged' },
      { label: 'Style Count', value: 'Zero Ad-Hoc Utilities' },
      { label: 'Design System', value: 'Glassmorphic/Aesthetic' }
    ],
    code: `import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'hsl(var(--brand-accent) / <alpha-value>)',
        glass: 'rgba(255, 255, 255, 0.03)'
      },
      backdropBlur: {
        ultra: '28px'
      }
    }
  }
} satisfies Config;`
  },
  {
    id: 'backend',
    filename: 'fastapi_router.py',
    title: 'Python & Java',
    badge: 'Backend & APIs',
    lang: 'python',
    experience: 'Systems & Microservices | 4+ Years',
    projects: [
      { name: 'GRAMSEVAK-AI', url: '#projects' },
      { name: 'Scam Intelligence', url: '#projects' },
      { name: 'DisasterOps', url: '#projects' }
    ],
    insight: 'Developing async FastAPI web frameworks for low-latency queries, designing RAG pipeline endpoints for AI query completion, and writing type-safe Java OOP structures for transactional security.',
    telemetry: [
      { label: 'API Response Time', value: '~45ms' },
      { label: 'Concurrent Workers', value: 'Uvicorn / Asgi' },
      { label: 'Database', value: 'PostgreSQL Vector / Mongo' }
    ],
    code: `from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Dict, Any

app = FastAPI(title="Vector Agent Service")

@app.post("/api/v1/query")
async def execute_agent_query(
    payload: Dict[str, Any], 
    db: Session = Depends(get_db)
):
    try:
        context = retrieve_vector_embeddings(payload["query"], db)
        response = await process_llm_chain(payload["query"], context)
        return {"status": "success", "result": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`
  },
  {
    id: 'framer',
    filename: 'scroll_timeline.tsx',
    title: 'Framer Motion',
    badge: 'Animation',
    lang: 'tsx',
    experience: 'Cinematic UX | 3+ Years',
    projects: [
      { name: '3D Scrollytelling', url: '#top' },
      { name: 'Projects Grid Modals', url: '#projects' }
    ],
    insight: 'Orchestrating hardware-accelerated animations using Framer Motion springs. By using useTransform on raw scroll values, I bypass standard component re-renders to prevent main-thread jank.',
    telemetry: [
      { label: 'Framerate', value: 'Target 60/120 FPS' },
      { label: 'GPU Accelerated', value: 'Yes (will-change)' },
      { label: 'Physics Engine', value: 'Spring Dynamics' }
    ],
    code: `import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxHero({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Dynamic spring transforms mapped to GPU composites
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.div style={{ y, opacity, willChange: 'transform' }} />
  );
}`
  },
  {
    id: 'core',
    filename: 'lru_cache.c',
    title: 'C Programming & DSA',
    badge: 'Core Systems',
    lang: 'c',
    experience: 'Systems Level Programming',
    projects: [
      { name: 'GitHub Repositories', url: 'https://github.com/Rajputshubham07' }
    ],
    insight: 'Writing low-level code yields a profound appreciation for compiler optimizations, cache locality, and explicit memory layout mapping. Standard algorithms are tuned for spatial and temporal execution.',
    telemetry: [
      { label: 'Memory Leakage', value: '0 Bytes (Valgrind verified)' },
      { label: 'Locality', value: 'Cache-Line Optimized' },
      { label: 'Time Complexity', value: 'O(1) Hash Map' }
    ],
    code: `#include <stdio.h>
#include <stdlib.h>

typedef struct CacheNode {
    int key;
    int value;
    struct CacheNode* prev;
    struct CacheNode* next;
} CacheNode;

// Fast doubly-linked list insertion at head (O(1))
void insert_at_head(CacheNode** head, CacheNode** tail, CacheNode* node) {
    node->next = *head;
    node->prev = NULL;
    if (*head) {
        (*head)->prev = node;
    }
    *head = node;
    if (!*tail) {
        *tail = node;
    }
}`
  },
  {
    id: 'design',
    filename: 'design_tokens.json',
    title: 'UI/UX Design',
    badge: 'Design System',
    lang: 'json',
    experience: 'Aesthetic & Prototypes',
    projects: [
      { name: 'Figma Layout & Themes', url: 'https://github.com/Rajputshubham07' }
    ],
    insight: 'Establishing responsive spacing grids, specifying custom typography hierarchies (Outfit/Inter), and maintaining consistent color contrasts. The goal is premium glassmorphic surfaces and high visual consistency.',
    telemetry: [
      { label: 'Design Grids', value: '8px Base Grid' },
      { label: 'Aesthetics', value: 'Dark Theme / Glassmorphism' },
      { label: 'Typography', value: 'Outfit / Inter' }
    ],
    code: `{
  "theme": "glass-dark",
  "palette": {
    "background": "#0d0d0d",
    "accent": "#ff6b35",
    "border": "rgba(255,255,255,0.06)"
  },
  "typography": {
    "heading": "Outfit, sans-serif",
    "body": "Inter, sans-serif"
  },
  "glassmorphism": {
    "blur": "28px",
    "saturation": "180%"
  }
}`
  }
];

export default function Courses() {
  const [activeId, setActiveId] = useState<string>('nextjs');
  const [terminalTab, setTerminalTab] = useState<'insight' | 'telemetry' | 'projects'>('insight');

  const activeTech = techItems.find((item) => item.id === activeId) || techItems[0];

  function highlightCode(code: string, lang: string) {
    if (lang === 'json') {
      return code.split('\n').map((line, idx) => {
        const html = line
          .replace(/(".*?")(\s*:)/g, '<span class="text-[#ff6b35]">$1</span>$2')
          .replace(/(:\s*)(".*?")/g, '$1<span class="text-[#43a047]">$2</span>')
          .replace(/(:\s*)(\d+|true|false|null)/g, '$1<span class="text-[#ffb74d]">$2</span>');
        return (
          <div key={idx} className="min-h-[1.25rem] whitespace-pre" dangerouslySetInnerHTML={{ __html: html }} />
        );
      });
    }

    const keywords = lang === 'c'
      ? /\b(typedef|struct|void|int|if|else|return|const|#include)\b/g
      : lang === 'python'
      ? /\b(def|async|await|return|import|from|as|class|try|except|raise)\b/g
      : /\b(import|export|from|const|function|return|let|if|else|as|satisfies|type|interface|default|public)\b/g;

    const stringRegex = lang === 'python' ? /(".*?"|'.*?')/g : /(".*?"|'.*?'|`.*?`)/g;
    const commentRegex = lang === 'python' ? /(#.*)/g : /(\/\/.*|\/\*[\s\S]*?\*\/)/g;

    return code.split('\n').map((line, idx) => {
      let html = line;
      // HTML escape
      html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      // Highlight strings
      html = html.replace(stringRegex, '<span class="text-[#43a047]">$1</span>');
      // Highlight comments
      html = html.replace(commentRegex, '<span class="text-zinc-500 italic">$1</span>');
      // Highlight keywords
      html = html.replace(keywords, '<span class="text-[#268bd2] font-semibold">$1</span>');
      
      return (
        <div key={idx} className="min-h-[1.25rem] whitespace-pre" dangerouslySetInnerHTML={{ __html: html }} />
      );
    });
  }

  return (
    <section className="bg-[#0d0d0d] py-[100px] lg:py-[140px] px-6 md:px-12 lg:px-16 border-t border-white/5">
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
            Explore the production codebase logic, telemetry, and architectural blueprints behind my digital solutions.
          </p>
        </div>

        {/* IDE Frame container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0a0a0b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* File Navigation Panel */}
          <div className="lg:col-span-3 bg-[#0d0d0f] border-b lg:border-b-0 lg:border-r border-white/5 p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]"></span>
                Project Explorer
              </div>
              
              <div className="space-y-4 font-mono text-xs text-zinc-400">
                <div className="text-zinc-500 font-bold select-none">📁 src/tech/</div>
                <div className="pl-3 space-y-1">
                  {techItems.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                        className={`w-full text-left py-1.5 px-3 rounded flex items-center justify-between group transition-all duration-200 ${
                          isActive
                            ? 'bg-white/[0.04] text-white border-l-2 border-[#ff6b35] font-semibold'
                            : 'hover:bg-white/[0.02] hover:text-zinc-200'
                        }`}
                      >
                        <span className="truncate flex items-center gap-2">
                          <span className={isActive ? 'text-[#ff6b35]' : 'text-zinc-600 group-hover:text-zinc-400'}>
                            📄
                          </span>
                          {item.filename}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-zinc-600 bg-white/[0.02] px-1.5 py-0.5 rounded">
                          {item.lang}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                Active System
              </div>
              <div className="text-xs text-zinc-300 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                v14.2-Production
              </div>
            </div>
          </div>

          {/* Code Editor & Console Screen */}
          <div className="lg:col-span-9 flex flex-col justify-between bg-[#0e0e10]">
            
            {/* Tab Header Bar */}
            <div className="h-11 bg-[#0b0b0c] border-b border-white/5 flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                {/* Simulated Window Dots */}
                <div className="flex items-center gap-1.5 mr-4">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                </div>
                
                {/* Active tab pill */}
                <div className="flex items-center gap-2 bg-[#0e0e10] border-t border-x border-white/10 px-4 py-2.5 rounded-t-lg text-xs font-mono text-white select-none">
                  <span className="text-[#ff6b35]">📄</span>
                  {activeTech.filename}
                </div>
              </div>
              
              <div className="text-zinc-600 font-mono text-[10px] hidden sm:block">
                UTF-8 // LF // {activeTech.lang.toUpperCase()}
              </div>
            </div>

            {/* Code Editor Body */}
            <div className="p-6 font-mono text-xs md:text-sm overflow-x-auto bg-[#0a0a0b] flex-grow select-text selection:bg-[#ff6b35]/30">
              <div className="flex gap-4">
                {/* Line Numbers */}
                <div className="text-zinc-600 select-none text-right font-light pr-2 border-r border-white/5">
                  {activeTech.code.split('\n').map((_, idx) => (
                    <div key={idx} className="h-5">
                      {idx + 1}
                    </div>
                  ))}
                </div>
                {/* Highlighted Code */}
                <div className="text-zinc-300 overflow-x-auto flex-grow">
                  {highlightCode(activeTech.code, activeTech.lang)}
                </div>
              </div>
            </div>

            {/* Terminal Drawer */}
            <div className="border-t border-white/5 bg-[#0c0c0e] p-6">
              
              {/* Terminal Tab Bar */}
              <div className="flex gap-2 border-b border-white/5 pb-3 mb-4">
                {(['insight', 'telemetry', 'projects'] as const).map((tab) => {
                  const isActive = terminalTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setTerminalTab(tab)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider font-mono transition-all duration-200 border ${
                        isActive
                          ? 'bg-[#ff6b35]/10 text-[#ff6b35] border-[#ff6b35]/20'
                          : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Terminal Contents */}
              <div className="font-mono text-xs leading-relaxed min-h-[90px]">
                {terminalTab === 'insight' && (
                  <div className="text-zinc-300">
                    <span className="text-zinc-500 font-semibold">{"// Developer Insight:"}</span>
                    <p className="mt-2 text-zinc-400 max-w-3xl leading-relaxed">
                      {activeTech.insight}
                    </p>
                  </div>
                )}

                {terminalTab === 'telemetry' && (
                  <div>
                    <span className="text-zinc-500 font-semibold mb-3 block">{"// Stack Telemetry Metrics:"}</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                      {activeTech.telemetry.map((tel, idx) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{tel.label}</div>
                          <div className="text-sm font-semibold text-white mt-1">{tel.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {terminalTab === 'projects' && (
                  <div>
                    <span className="text-zinc-500 font-semibold block mb-3">{"// Associated Projects:"}</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activeTech.projects.map((proj, idx) => (
                        <a
                          key={idx}
                          href={proj.url}
                          className="px-3 py-1.5 rounded bg-white/[0.04] hover:bg-[#ff6b35]/15 border border-white/5 hover:border-[#ff6b35]/20 text-zinc-300 hover:text-white transition-all duration-200"
                        >
                          ⚡ {proj.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* GitHub link */}
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

