'use client';

import React, { useState } from 'react';

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-singh-1a235a394/' },
  { label: 'Instagram', url: 'https://www.instagram.com/rajput_shubham_07/' },
  { label: 'X (Twitter)', url: 'https://x.com/Shubham18689860' },
  { label: 'Bluesky', url: 'https://bsky.app/profile/shubhamsingh0011.bsky.social' },
  { label: 'Reddit', url: 'https://www.reddit.com/user/Overall_Spray_1167/' },
  { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/32111602/shubham-singh' },
  { label: 'Codepen', url: 'https://codepen.io/xicopvyv-the-sasster' },
  { label: 'GitHub', url: 'https://github.com/Rajputshubham07' },
];

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResultMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Retrieve access key from env or fallback to placeholder.
    // To set up, create a .env.local file with: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setResultMessage("Thank you! Your message has been transmitted successfully.");
        form.reset();
      } else {
        setStatus('error');
        setResultMessage(data.message || "Failed to submit. Please ensure your Web3Forms Access Key is set up correctly.");
      }
    } catch (error) {
      setStatus('error');
      setResultMessage("Unable to establish network connection. Please check your internet and try again.");
    }
  };

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 px-8 md:px-16 py-[80px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 items-start">
          
          {/* Left Column: Direct info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3
              className="text-4xl md:text-5xl text-white mb-6 font-bold"
              style={{ letterSpacing: '-0.03em' }}
            >
              Let’s build <br />something.
            </h3>
            <p className="text-lg text-[#999999] leading-relaxed mb-8 max-w-md">
              I am open to consulting, contract roles, speaking at workshops, or collaborating on high-end web/mobile development and AI automation setups.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#ff6b35]">
                Direct Mail
              </span>
              <a
                href="mailto:shubhamsingh164573@gmail.com"
                className="text-lg font-semibold text-white hover:text-[#ff6b35] transition-colors"
              >
                shubhamsingh164573@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Web3Forms contact card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <h4 className="text-xl font-bold text-white mb-6">Quick Message</h4>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot Spam Protection (Web3Forms auto-support) */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                />

                {/* Custom Email Subject */}
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New Portfolio message from Shubham Singh Website" 
                />

                 {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-400">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#ff6b35] focus:bg-white/[0.04] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-400">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#ff6b35] focus:bg-white/[0.04] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-zinc-400">Mobile Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#ff6b35] focus:bg-white/[0.04] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#ff6b35] focus:bg-white/[0.04] text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {/* Status Notifications */}
                {status === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium">
                    {resultMessage}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm font-medium">
                    {resultMessage}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-4 rounded-full font-bold text-sm uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === 'loading'
                      ? 'bg-zinc-800 text-zinc-500 cursor-wait'
                      : 'bg-white text-black hover:bg-[#ff6b35] hover:text-white shadow-[0_4px_20px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_rgba(255,107,53,0.3)]'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Social Badges and Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#999999] hover:text-white transition-colors font-medium"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#666666]">
          <span>© {new Date().getFullYear()} Shubham Singh. All rights reserved.</span>
          <span>Lucknow, Uttar Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
