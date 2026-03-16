import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00C9A7]/8 rounded-br-[120px]" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#1B6B58]/6 rounded-tl-[100px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-[#00C9A7] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B6B58] leading-tight mb-6">
              Ready to Grow Your<br />Brand Together?
            </h2>
            <p className="text-[#5A6A65] text-lg leading-relaxed mb-10">
              Tell us about your project. Our team will respond within 24 hours with a tailored approach — because your success is our success.
            </p>
            <div className="space-y-4">
              {[
                'Free packaging consultation & material recommendation',
                'Prototype development within 2 weeks',
                'Competitive pricing on all order quantities',
                'Dedicated account manager from day one',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00C9A7] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-[#1A1A1A] text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Brand Promise Badge */}
            <div className="mt-12 inline-flex items-center gap-3 bg-[#1B6B58] text-white px-6 py-4 rounded-2xl">
              <div className="w-8 h-8 bg-[#00C9A7] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">IPS</span>
              </div>
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Brand Promise</div>
                <div className="text-sm font-bold">As flexible as your packaging</div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#EAEAEA]/60 rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#00C9A7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B6B58] mb-2">Thank You!</h3>
                <p className="text-[#5A6A65]">Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-[#1B6B58] mb-2 block">Full Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-white rounded-xl h-12 bg-white focus:border-[#00C9A7] focus:ring-[#00C9A7]/20"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1B6B58] mb-2 block">Email</label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-white rounded-xl h-12 bg-white focus:border-[#00C9A7] focus:ring-[#00C9A7]/20"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1B6B58] mb-2 block">Company</label>
                  <Input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="border-white rounded-xl h-12 bg-white focus:border-[#00C9A7] focus:ring-[#00C9A7]/20"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1B6B58] mb-2 block">Tell us about your project</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="border-white rounded-xl min-h-[120px] bg-white focus:border-[#00C9A7] focus:ring-[#00C9A7]/20"
                    placeholder="What packaging solutions are you looking for?"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1B6B58] hover:bg-[#155248] text-white font-semibold h-12 rounded-full shadow-lg shadow-[#1B6B58]/20 transition-all"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>Request a Quote <Send className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}