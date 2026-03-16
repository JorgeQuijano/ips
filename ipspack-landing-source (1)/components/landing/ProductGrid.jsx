import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProductGrid({ products }) {
  return (
    <section id="products" className="bg-[#EAEAEA] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Product Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B6B58]">
              Our Packaging Solutions
            </h2>
          </div>
          <p className="text-[#5A6A65] text-base max-w-sm mt-4 md:mt-0 leading-relaxed">
            Every format engineered for barrier performance, shelf stability, and brand differentiation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {products.map((product, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#1B6B58]/10 transition-all duration-500 cursor-pointer"
            >
              {/* Card image area */}
              <div className="aspect-[3/4] bg-gradient-to-b from-[#EAEAEA]/50 to-[#EAEAEA] p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-700"
                />
              </div>
              {/* Card footer */}
              <div className="p-4 bg-white">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-[#00C9A7] font-semibold tracking-widest uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold text-[#1B6B58] mt-0.5 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <div className="w-7 h-7 bg-[#1B6B58]/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C9A7] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#1B6B58] group-hover:text-white transition-colors" />
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