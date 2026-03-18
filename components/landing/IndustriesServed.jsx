import React from 'react';
import { UtensilsCrossed, Heart, Home } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    name: 'Food & Beverage',
    description: 'Barrier structures for freshness, retort-capable pouches, and FDA-compliant materials for snacks, beverages, sauces, and more.',
    bg: 'bg-[#1B6B58]',
  },
  {
    icon: Heart,
    name: 'Health & Personal Care',
    description: 'Precision dispensing pouches, child-resistant closures, and premium finishes for supplements, cosmetics, and wellness brands.',
    bg: 'bg-[#00C9A7]',
  },
  {
    icon: Home,
    name: 'Household Care',
    description: 'Durable spouted pouches, large-format bags, and chemical-resistant substrates for detergents, cleaners, and home products.',
    bg: 'bg-[#1B6B58]',
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00C9A7]/8 rounded-tr-[120px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
            Industries
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B6B58] tracking-tight mb-4">
            Built for Your Market
          </h2>
          <p className="text-[#5A6A65] text-lg">
            Customer success is our success — we build lasting relationships based on trust, reliability, and mutual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="group bg-[#EAEAEA]/60 rounded-3xl p-8 hover:shadow-lg hover:shadow-[#1B6B58]/8 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B6B58]/5 rounded-bl-[60px] group-hover:scale-150 transition-transform duration-700" />
              <div className={`w-14 h-14 ${ind.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <ind.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B6B58] mb-3">{ind.name}</h3>
              <p className="text-[#5A6A65] leading-relaxed">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}