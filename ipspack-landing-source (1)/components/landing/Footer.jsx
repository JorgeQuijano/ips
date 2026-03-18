import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Stand-up Pouches', href: '#products' },
  { label: 'Retort Pouches', href: '#products' },
  { label: 'Digital Printing', href: '#services' },
  { label: 'Package Engineering', href: '#services' },
  { label: 'Sustainability', href: '#about' },
];

const COMPANY_LINKS = [
  { label: 'About IPSPack', href: '#about' },
  { label: 'Case Studies', href: '#about' },
  { label: 'Certifications', href: '#about' },
  { label: 'Careers', href: '#contact' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B6B58] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C9A7]/15 rounded-bl-[160px]" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-tr-[80px]" />
      <div className="absolute top-16 right-24 w-16 h-16 bg-[#00C9A7]/20 rounded-full" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00C9A7] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">IPS</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">IPSPack</div>
                <div className="text-[#00C9A7] text-[10px] tracking-widest uppercase">Innovative Packaging</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Simplifying life through packaging. A family business built on Latin American warmth, Japanese precision, and American innovation.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#00C9A7] rounded-full" />
              <span className="text-white/80 text-xs font-medium italic">As flexible as your packaging</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#00C9A7] text-xs font-semibold uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 text-sm hover:text-[#00C9A7] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#00C9A7] text-xs font-semibold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 text-sm hover:text-[#00C9A7] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#00C9A7] text-xs font-semibold uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#00C9A7]" />
                </div>
                <span className="text-white/50 text-sm leading-relaxed">
                  43620 Ridge Park Dr<br />Temecula, CA 92590
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#00C9A7]" />
                </div>
                <a href="tel:+17442760979" className="text-white/50 text-sm hover:text-[#00C9A7] transition-colors">
                  +1 (744) 276-0979
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#00C9A7]" />
                </div>
                <a href="mailto:cs@ipspack.com" className="text-white/50 text-sm hover:text-[#00C9A7] transition-colors">
                  cs@ipspack.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Innovative Packaging Solutions, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-[#00C9A7] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-xs hover:text-[#00C9A7] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}