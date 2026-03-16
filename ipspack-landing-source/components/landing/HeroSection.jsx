import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1B6B58]">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Premium flexible packaging" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B6B58] via-[#1B6B58]/90 to-[#0f4a3c]/80" />
      </div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00C9A7]/15 rounded-bl-[120px]" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-tr-[80px]" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#00C9A7] rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-[#00C9A7] text-sm font-semibold tracking-wide">Your Trusted Packaging Partner</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            IPS — As <span className="italic font-light text-[#00C9A7]">flexible</span><br />as your packaging
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed mb-10">
            Empowering growth through packaging. From concept to shelf — full-service custom flexible packaging with 10-color gravüre printing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button className="bg-[#00C9A7] hover:bg-[#00B396] text-white font-semibold text-base px-8 h-12 rounded-full group">
                Request a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#products">
              <Button variant="outline" className="border-white/30 text-white font-medium text-base px-8 h-12 rounded-full hover:bg-white/10 bg-transparent">View Products</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
}