import React from 'react';
import { Palette, Zap, Leaf, Settings } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: Palette,
    title: 'Unmatched Print Quality',
    description: '10-color gravüre printing on high-speed roto presses. Every color layer is precision-registered to deliver photo-realistic packaging that commands shelf attention.',
    stat: '10',
    statLabel: 'Color Capability',
    color: 'bg-[#1B6B58]',
  },
  {
    icon: Zap,
    title: 'Faster Time-to-Market',
    description: 'From artwork approval to finished product — our streamlined process and in-house engineering eliminates bottlenecks and cuts weeks from your timeline.',
    stat: '2x',
    statLabel: 'Faster Turnaround',
    color: 'bg-[#00C9A7]',
  },
  {
    icon: Leaf,
    title: 'Sustainability-Forward',
    description: 'Recyclable mono-material structures, PCR content options, and responsible sourcing. We engineer packaging that protects your product and the planet.',
    stat: '100%',
    statLabel: 'Recyclable Options',
    color: 'bg-[#1B6B58]',
  },
  {
    icon: Settings,
    title: 'Full-Service Partnership',
    description: 'Package engineering, inventory management, and logistics coordination. One trusted partner from concept through delivery — no handoffs, no gaps.',
    stat: 'End-to-End',
    statLabel: 'Service',
    color: 'bg-[#00C9A7]',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#EAEAEA] py-20 md:py-28 overflow-hidden relative">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B6B58]/5 rounded-bl-[160px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
            Why IPSPack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B6B58] leading-tight mb-4">
            The Caring Innovator
          </h2>
          <p className="text-[#5A6A65] text-lg leading-relaxed">
            We are warm, approachable, and dedicated to pushing the boundaries of what's possible. Blending Latin American warmth, Japanese precision, and American innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 md:p-10 hover:shadow-xl hover:shadow-[#1B6B58]/8 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#1B6B58]">{item.stat}</div>
                  <div className="text-xs text-[#5A6A65] tracking-wide">{item.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1B6B58] mb-3">{item.title}</h3>
              <p className="text-[#5A6A65] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}