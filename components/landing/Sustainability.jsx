import React from 'react';
import { Leaf, Recycle, Award, ArrowRight } from 'lucide-react';

export default function Sustainability() {
  return (
    <section className="bg-[#EAEAEA] py-20 md:py-28 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1B6B58]/8 rounded-tl-[160px]" />
      <div className="absolute top-16 left-16 w-24 h-24 bg-[#00C9A7]/20 rounded-full" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Sustainability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B6B58] leading-tight mb-6">
              Sustainability is Our
              <br />Responsibility
            </h2>
            <p className="text-[#5A6A65] text-base leading-relaxed mb-4">
              We believe in reducing our environmental footprint through sustainable practices and eco-friendly packaging solutions.
            </p>
            <p className="text-[#5A6A65] text-base leading-relaxed mb-8">
              High-performance packaging and environmental responsibility aren't mutually exclusive. Our engineers develop structures that meet the most demanding barrier requirements while maximizing recyclability.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#1B6B58] font-semibold text-sm hover:gap-3 transition-all hover:text-[#00C9A7]"
            >
              Explore Our Sustainability Roadmap <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Recycle, title: 'Recyclable Mono-Materials', desc: 'PE and PP mono-structures that enter existing recycling streams without delamination.' },
              { icon: Leaf, title: 'Bio-Based Film Options', desc: 'Plant-derived substrates that reduce petroleum dependency without sacrificing shelf life.' },
              { icon: Award, title: 'FSSC 22000 Certified', desc: 'Certified facility with documented chain-of-custody for all raw materials and processes.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl hover:shadow-lg hover:shadow-[#1B6B58]/8 transition-all group">
                <div className="w-12 h-12 bg-[#1B6B58] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C9A7] transition-colors">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#1B6B58] font-bold mb-1">{item.title}</h4>
                  <p className="text-[#5A6A65] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}