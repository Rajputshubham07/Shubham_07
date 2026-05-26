'use client';

import { motion } from 'framer-motion';

const courses = [
  {
    title: 'React & Next.js',
    badge: 'Frontend',
    desc: 'Building interactive and dynamic user interfaces.',
    url: '#',
  },
  {
    title: 'Tailwind CSS',
    badge: 'Styling',
    desc: 'Crafting responsive and premium glassmorphic designs.',
    url: '#',
  },
  {
    title: 'Python & Java',
    badge: 'Backend',
    desc: 'Developing robust logic and object-oriented systems.',
    url: '#',
  },
  {
    title: 'Framer Motion',
    badge: 'Animation',
    desc: 'Adding smooth, cinematic micro-animations to web apps.',
    url: '#',
  },
  {
    title: 'C Programming & DSA',
    badge: 'Core',
    desc: 'Solving problems with efficient data structures and algorithms.',
    url: '#',
  },
  {
    title: 'UI/UX Design',
    badge: 'Design',
    desc: 'Focusing on user-centric, startup-level aesthetics.',
    url: '#',
  },
];

export default function Courses() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <h3
            className="text-3xl md:text-5xl text-white mb-4"
            style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            Tech Stack
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            The tools and technologies I use to build digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.a
              key={idx}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group block glass-card rounded-3xl p-8"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#ff6b35] uppercase mb-4">
                {course.badge}
              </span>
              <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                {course.title}
              </h4>
              <p className="text-[#999999] leading-relaxed mb-6">{course.desc}</p>
              <span className="text-sm font-semibold text-white group-hover:text-[#ff6b35] transition-colors">
                Explore →
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
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
