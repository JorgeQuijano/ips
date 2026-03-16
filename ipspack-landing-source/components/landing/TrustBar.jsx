import React from 'react';
import { Shield, Globe, Factory, Award } from 'lucide-react';

const STATS = [
  { icon: Factory, value: '20+', label: 'Years of Excellence' },
  { icon: Shield, value: 'FSSC 22000', label: 'Certified Facility' },
  { icon: Globe, value: '4', label: 'Continents Served' },
  { icon: Award, value: '10-Color', label: 'Gravüre Printing' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-[#EAEAEA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EAEAEA]">
          {STATS.map((stat, i) => (
            <div key={i} className="py-8 md:py-10 px-4 md:px-8 text-center group hover:bg-[#EAEAEA]/40 transition-colors">
              <div className="w-10 h-10 bg-[#1B6B58]/8 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00C9A7]/15 transition-colors">
                <stat.icon className="w-5 h-5 text-[#1B6B58]" />
              </div>
              <div className="text-[#1B6B58] text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-[#5A6A65] text-xs tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}