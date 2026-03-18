import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CASES = [
  {
    client: "HAK's",
    challenge: 'Needed premium shelf presence for a new snack line while maintaining competitive price points.',
    solution: 'Custom stand-up pouches with 10-color gravüre printing and matte-touch lamination.',
    result: '34% increase in retail sell-through rate within 6 months of repackaging.',
    metric: '+34%',
    metricLabel: 'Sell-Through',
    bg: 'bg-[#1B6B58]',
  },
  {
    client: 'Birch Benders',
    challenge: 'Required rapid packaging iteration for seasonal flavors with short shelf windows.',
    solution: 'Hybrid digital-to-gravüre workflow enabling fast turnarounds on new SKUs.',
    result: '60% reduction in time-to-shelf for limited edition products.',
    metric: '3 wks',
    metricLabel: 'Turnaround',
    bg: 'bg-[#00C9A7]',
  },
  {
    client: 'REDD',
    challenge: 'Scaling from startup quantities to national distribution without losing brand consistency.',
    solution: 'Engineered transition from digital to gravüre with color-matched specifications.',
    result: 'Seamless scale from 10K to 500K units/month with zero color deviation.',
    metric: '50x',
    metricLabel: 'Scale Factor',
    bg: 'bg-[#1B6B58]',
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#EAEAEA]/60 rounded-bl-[120px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B6B58]">
            Client Success Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map((cs, i) => (
            <div
              key={i}
              className="group bg-[#EAEAEA]/50 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#1B6B58]/10 transition-all duration-500"
            >
              {/* Metric header */}
              <div className={`${cs.bg} px-8 py-7 flex items-end justify-between relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {cs.metric}
                  </div>
                  <div className="text-xs text-white/70 tracking-wider uppercase mt-1">
                    {cs.metricLabel}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </div>

              <div className="p-8">
                <h3 className="text-lg font-bold text-[#1B6B58] mb-5">{cs.client}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[#00C9A7] font-semibold text-xs uppercase tracking-wider">Challenge</span>
                    <p className="text-[#5A6A65] mt-1.5 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[#5A6A65] font-semibold text-xs uppercase tracking-wider">Solution</span>
                    <p className="text-[#5A6A65] mt-1.5 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="pt-2 border-t border-[#EAEAEA]">
                    <span className="text-[#1B6B58] font-semibold text-xs uppercase tracking-wider">Result</span>
                    <p className="text-[#1B6B58] font-semibold mt-1.5 leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}