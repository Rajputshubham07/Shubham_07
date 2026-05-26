import React from 'react';

export default function ServicesGrid() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Creating futuristic, premium UI/UX with React, Tailwind CSS, and Framer Motion.",
      icon: "💻"
    },
    {
      title: "Backend Systems",
      desc: "Building robust backend solutions with Python, Java, and modern databases.",
      icon: "⚙️"
    },
    {
      title: "Mobile App Development",
      desc: "Developing smart mobile applications with real-time features and location tracking.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      desc: "Crafting glassmorphism designs, smooth animations, and startup-level aesthetics.",
      icon: "🎨"
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Solving complex computational problems efficiently and optimizing application logic.",
      icon: "🧠"
    },
    {
      title: "Smart Solutions",
      desc: "Integrating AI chatbots and real-time tracking into modern applications.",
      icon: "🚀"
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
            Services
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            What I can do for you and your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-[#ffffff] mb-3">{service.title}</h4>
              <p className="text-[#999999] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
