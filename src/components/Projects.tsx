'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  demo?: string;
  techStack: string[];
  features: string[];
  metrics?: string;
}

const projects: Project[] = [
  {
    title: 'SlapDash (SlapMac)',
    category: 'macOS Menu Bar App',
    description: 'A viral macOS menu bar utility using device accelerometers to trigger force-proportional screaming sounds.',
    longDescription: 'SlapDash (originally SlapMac) is a quirky macOS application that accesses MacBook accelerometer hardware. It processes real-time vibration data through five concurrent voting filter algorithms to detect physical taps or slaps, immediately playing scream sounds relative to the force applied. The project went viral, earning millions of social media impressions and features on national radio.',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/Rajputshubham07/SlapMac',
    demo: 'https://slap-mac-teal.vercel.app/',
    techStack: ['Swift', 'AppKit', 'CoreMotion', 'DSP Filtering', 'macOS APIs'],
    features: [
      'Headless execution with menu-bar-only daemon (no dock/window footprint)',
      'Force-proportional volume scaling (gentle tap whispers, full commitment screams)',
      '9 built-in audio voice packs (Goat, Cat, Anime, Robot, Ghost, etc.)',
      'Adjustable sensitivity threshold to prevent false positives from keyboard typing',
      'Anti-spam cooldown timer and local lifetime slap counter stats'
    ],
    metrics: 'Featured on 500+ US radio stations; 1M+ views across social media'
  },
  {
    title: 'SS Construction Portal',
    category: 'Web Platform',
    description: 'A corporate web platform showcasing civil engineering projects, architectural layouts, and client inquiries.',
    longDescription: 'SS Construction Portal is a clean, modern landing page and catalog built for a premium civil engineering and construction firm. It presents structural foundations, 3BHK layout blueprints, and project status updates in an interactive gallery, utilizing a lightweight Express server backend to manage and log customer inquiries.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/Rajputshubham07/SSCONSTRUCTION',
    demo: 'http://shrishyamconstructions.in/',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'JSON Database'],
    features: [
      'Interactive architecture and blueprint grid displaying 3BHK plans',
      'Dynamic project portfolio galleries (Surendra Towers, foundation works)',
      'Integrated backend contact logging system (persisting inquiries to JSON)',
      'Frosted glass design cards matching premium structural aesthetics'
    ],
    metrics: 'Fully responsive layouts; server-side message persistence'
  },
  {
    title: 'DisasterOps',
    category: 'Emergency Management',
    description: 'A real-time disaster response system for geo-SOS alerts, incident verification, and responder routing.',
    longDescription: 'DisasterOps (Shubhshastra) is an agentic, full-scale disaster response platform designed to close communication gaps during crises. Citizens can broadcast one-tap SOS signals with live GPS coordinates and photo attachments, which are immediately verified by administrators and intelligently routed to local emergency responders.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    github: 'https://github.com/Rajputshubham07/DisasterOps.git',
    demo: 'https://disaster-ops-opal.vercel.app/',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Leaflet.js'],
    features: [
      'Real-time geospatial victim tracking and map clustering using Leaflet.js',
      'Persistent WebSocket alerts (Red Alert HUD) for rapid incident triages',
      'Visual proof evidence uploads enabling responders to assess incident severity',
      'Centralized dashboards for administrators and emergency service providers',
      'Interactive, secure live chat rooms for victim-responder coordination'
    ],
    metrics: 'WebSocket latency under 50ms; real-time admin incident triage'
  },
  {
    title: 'GramSevak AI',
    category: 'AI Assistant',
    description: 'Offline-first voice assistant for rural India optimized for 2G bandwidth (<2KB per query).',
    longDescription: 'GramSevak AI is a hyper-efficient, offline-first voice assistant designed specifically for rural India\'s connectivity challenges. Running on a lightweight PWA footprint of just 50KB, it delivers critical government schemes, healthcare steps, and agricultural market rates over low-end 2G networks, using a fallback SMS/USSD channel when offline.',
    image: '/Gramsevek.webp',
    github: 'https://github.com/Rajputshubham07/GRAMSEVAK-AI_VERTEX',
    demo: 'https://gramsevak-ai.netlify.app',
    techStack: ['Python', 'FastAPI', 'PWA', 'Web Speech API', 'RAG Pipeline', 'Keyword-Semantic Router'],
    features: [
      'Hyper-compressed bandwidth utilization of <2KB per query (96% less than ChatGPT)',
      'Multi-lingual speech recognition and text-to-speech (Hindi, Bengali, Telugu, etc.)',
      'Offline service worker architecture caching 200+ common Q&As locally',
      'Automated fallback triggers utilizing SMS and USSD protocol communications',
      'FastAPI server-side RAG processing with MANDI market rate scrapers'
    ],
    metrics: '95.9% bandwidth reduction; response time <1s on poor 2G connections'
  },
  {
    title: 'ScamShield',
    category: 'Autonomous AI Honeypot',
    description: 'AI-driven threat intelligence platform that interacts automatically with scammers to extract threat intelligence.',
    longDescription: 'ScamShield (Scam Intelligence System) is an intelligent threat-intelligence honeypot system. It deploys autonomous LLM agents acting as highly vulnerable senior personas to engage scammers in automated conversations. During interactions, ScamShield automatically parses threat data (payment IDs, bank accounts, phones) and scores the risk level using custom classification systems.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/Rajputshubham07/scam-intelligence-system-main',
    demo: 'https://scam-intelligence-system.onrender.com/',
    techStack: ['TypeScript', 'Node.js', 'OpenAI GPT-4', 'Claude AI', 'PostgreSQL', 'Docker'],
    features: [
      'Natural conversational persona models (Margaret, David, Sarah) with custom profiles',
      '8 tactical risk signal extractors (time pressure, urgency, financial request, etc.)',
      'Entity parser isolating indicators of compromise (IOCs) like phone numbers & banks',
      'Terminal-inspired interactive sandbox console with 12 preset testing scenarios',
      'Real-time risk scoring dial and structured JSON data export options'
    ],
    metrics: 'Extracted over 100+ scammer banking profiles; automated risk meters'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A showcase of recent projects combining high-end design, performant engineering, and intuitive user experiences. Click any card to explore details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-card-${project.title}`}
              onClick={() => setSelectedProject(project)}
              className="group block relative overflow-hidden rounded-2xl glass-card cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full shadow-lg tracking-wide uppercase">
                    Explore Details
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest uppercase text-[#ff6b35] mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111113] border border-white/[0.08] shadow-2xl p-6 md:p-10 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Close details"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4">
                {/* Visual Header / Image (Lg: 5 columns) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 400px"
                    />
                  </div>

                  {/* Impact Metric Banner */}
                  {selectedProject.metrics && (
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff6b35]">
                        Performance / Impact Key
                      </span>
                      <p className="text-sm font-semibold text-zinc-200">
                        {selectedProject.metrics}
                      </p>
                    </div>
                  )}
                </div>

                {/* Content Panel (Lg: 7 columns) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Category & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-[#ff6b35]/10 text-[#ff6b35] rounded-full border border-[#ff6b35]/25">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
                      {selectedProject.title}
                    </h3>

                    {/* Detailed Story */}
                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>

                    {/* Features Bullet List */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-3">
                        Key Architecture & Features
                      </h4>
                      <ul className="space-y-2.5 text-zinc-300 text-sm leading-relaxed">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <span className="text-[#ff6b35] mt-1 text-xs">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-3">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1.5 text-xs font-semibold text-zinc-300 bg-white/[0.04] border border-white/[0.06] rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 mt-6">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-sm tracking-tight transition-all duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                      </svg>
                      Source Code
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0d0d0d] hover:bg-[#ff6b35] hover:text-white rounded-full font-bold text-sm tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demonstration
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
