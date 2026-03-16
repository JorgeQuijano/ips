import React from 'react';
import { Printer, PenTool, Package, Recycle, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Printer,
    title: 'Digital Printing',
    description: 'Short-run prototyping and small-batch production with photographic quality. Test market-ready designs before committing to full gravüre runs.',
    num: '01',
  },
  {
    icon: PenTool,
    title: 'Package Engineering',
    description: 'Structural design, material specification, and barrier testing. Our engineers build packaging architectures optimized for your product and supply chain.',
    num: '02',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Warehouse allocation, demand forecasting, and JIT delivery. We manage your packaging inventory so you can focus on building your brand.',
    num: '03',
  },
  {
    icon: Recycle,
    title: 'Sustainability Solutions',
    description: 'Mono-material structures, bio-based films, and recyclability certifications. We help you hit your sustainability targets without compromising performance.',
    num: '04',
  },
];

export default function ServicesSection({ bgImage }) {
  return (
    <section id="services" className="relative bg-[#1B6B58] py-20 md:py-28 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C9A7]/15 rounded-bl-[160px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-tr-[100px]" />
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-[#00C9A7]/20 rounded-full" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14">
          <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Full-Service Packaging<br />
            <span className="text-[#00C9A7]">Simplified</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            One partner from concept through delivery. Simplifying life through packaging — that's our purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 cursor-pointer border border-white/10"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-[#00C9A7] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/20 text-2xl font-bold">{service.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mb-5">{service.description}</p>
              <div className="flex items-center gap-2 text-[#00C9A7] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}