'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import TagScroll from '@/components/TagScroll';
import AboutMeSplit from '@/components/AboutMeSplit';
import ServicesGrid from '@/components/ServicesGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main
      id="top"
      className="bg-[#0d0d0d] min-h-screen w-full font-sans text-[#ffffff] selection:bg-[#ff6b35] selection:text-white"
    >
      <Navbar />

      {/* Cinematic Hero — single shared scroll container */}
      <div ref={heroRef} className="relative w-full" style={{ height: '500vh' }}>
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>

      {/* Projects Grid below Scrollytelling */}
      <Projects />

      {/* Content Sections */}
      <div className="relative z-20 bg-[#0d0d0d]">
        <TagScroll />
        <div id="about"><AboutMeSplit /></div>
        <div id="services"><ServicesGrid /></div>
        <div id="timeline"><JourneyTimeline /></div>
        <div id="courses"><Courses /></div>
        <div id="contact"><Footer /></div>
      </div>
    </main>
  );
}
