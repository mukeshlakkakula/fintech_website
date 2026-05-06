"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* First About Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-32">
          <div className="w-full flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
              
              <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-card bg-card">
                <Image
                  src="/assets/qa_team.png"
                  alt="Quality Assurance Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <span className="text-highlight font-bold tracking-widest uppercase text-sm mb-4 block">Precision Advisory</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Strategic Advisory for <br />
              <span className="text-highlight italic">Capital</span>
            </h2>
            <p className="text-lg text-foreground opacity-90 leading-relaxed mb-8">
              Our team of financial experts is dedicated to providing elite solutions for high-stakes environments. We provide premium advisory and technical integration to our clients, ensuring that every asset is managed with the highest standards of precision and discretion.
            </p>
            <div className="flex flex-col gap-4">
              {["Strategic Wealth Planning", "Technological Excellence"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second About Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          <div className="w-full flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
              <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-card bg-card">
                <Image
                  src="/assets/consulting.png"
                  alt="Consulting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Strategic Growth</span>
            <h2 className="text-2xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
              Maximize The <span className="text-brand">Potential</span> <br />
              Of Your Assets
            </h2>
            <p className="text-lg text-foreground opacity-90 leading-relaxed mb-8">
              We empower institutions through innovative financial technology and meticulous risk management. Our approach combines speed with regulatory discipline to deliver results that exceed expectations in the global market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Fintech Innovation", "Wealth Management"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
