import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#EAEAEA]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#1B6B58] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">IPS</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-base tracking-tight transition-colors ${scrolled ? 'text-[#1B6B58]' : 'text-white'}`}>
                IPSPack
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors ${scrolled ? 'text-[#00C9A7]' : 'text-[#00C9A7]'}`}>
                Innovative Packaging
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#00C9A7] ${
                  scrolled ? 'text-[#1A1A1A]/70' : 'text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-[#00C9A7] hover:bg-[#00B396] text-white font-semibold text-sm px-6 h-10 rounded-full shadow-md shadow-[#00C9A7]/20 transition-all">
                Request a Quote
              </Button>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden transition-colors ${scrolled ? 'text-[#1B6B58]' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B6B58] rounded-bl-[80px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00C9A7] rounded-tr-[60px] opacity-10" />

        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-[#1B6B58] text-2xl font-bold hover:text-[#00C9A7] transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)}>
          <Button className="bg-[#00C9A7] hover:bg-[#00B396] text-white font-semibold text-lg px-10 h-12 rounded-full mt-4">
            Request a Quote
          </Button>
        </a>
      </div>
    </>
  );
}