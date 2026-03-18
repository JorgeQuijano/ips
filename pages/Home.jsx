import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import IndustriesServed from '@/components/landing/IndustriesServed';
import ProductGrid from '@/components/landing/ProductGrid';
import ServicesSection from '@/components/landing/ServicesSection';
import CaseStudies from '@/components/landing/CaseStudies';
import Sustainability from '@/components/landing/Sustainability';
import ContactCTA from '@/components/landing/ContactCTA';
import Footer from '@/components/landing/Footer';
import ScrollReveal from '@/components/landing/ScrollReveal';

const HERO_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/7ce29eb2f_generated_54831076.png';
const SERVICES_BG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/0d72ec222_generated_39f69fb4.png';

const PRODUCTS = [
  { name: 'Stand-up Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/05dd84b7e_generated_954d0266.png' },
  { name: 'Flat Bottom Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/871f6f900_generated_4a556070.png' },
  { name: 'Quad Seal Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/dfee72376_generated_435927ad.png' },
  { name: 'Retort Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/af0a2ffb5_generated_f195c5d5.png' },
  { name: 'Spouted Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/db9c13213_generated_6e481bb0.png' },
  { name: '3 Side Sealed Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/a7aa03dee_generated_ac30ab5e.png' },
  { name: 'Fin Seal Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/7766e6d0e_generated_0d49c450.png' },
  { name: 'Large Handle Bag', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/38541948e_generated_c49e165e.png' },
  { name: 'Shaped Pouch', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/d9f4c2cd4_generated_cd312dd8.png' },
  { name: 'Roll Stock', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aee5099a19a06f1a5b78a7/1dc2fe092_generated_84a69b51.png' },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <HeroSection heroImage={HERO_IMAGE} />

      <TrustBar />

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <IndustriesServed />
      </ScrollReveal>

      <ScrollReveal>
        <ProductGrid products={PRODUCTS} />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection bgImage={SERVICES_BG} />
      </ScrollReveal>

      <ScrollReveal>
        <CaseStudies />
      </ScrollReveal>

      <ScrollReveal>
        <Sustainability />
      </ScrollReveal>

      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>

      <Footer />
    </div>
  );
}