"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import CTA from "@/components/home/CTA";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import JobCard from "@/components/careers/JobCard";
import { Search, Filter } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Quant Analyst",
    department: "Quants & Research",
    location: "London / Remote",
    type: "Full-time",
    description: "Lead our quantitative research and algorithmic trading efforts. You will be responsible for designing and implementing sophisticated market models and high-frequency trading strategies."
  },
  {
    id: 2,
    title: "Wealth Advisory Lead",
    department: "Wealth Management",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    description: "Oversee high-net-worth client portfolios and investment strategies. Experience with multi-asset allocation and long-term capital growth planning is essential for this role."
  },
  {
    id: 3,
    title: "FinTech Compliance Officer",
    department: "Compliance & Legal",
    location: "Remote",
    type: "Full-time",
    description: "Ensure all digital banking operations and payment gateways meet global financial regulations. You'll help our clients navigate the evolving landscape of fintech law."
  },
  {
    id: 4,
    title: "Blockchain Architect",
    department: "Tech & Infrastructure",
    location: "New York / Remote",
    type: "Full-time",
    description: "Design and implement secure cross-border settlement systems using distributed ledger technology. You'll be at the forefront of the next generation of global payments."
  },
  {
    id: 5,
    title: "Investment Risk Analyst",
    department: "Risk Management",
    location: "Remote",
    type: "Contract",
    description: "Perform rigorous market stress tests and risk modeling for institutional clients. You'll help global banks identify and mitigate systemic financial risks."
  },
  {
    id: 6,
    title: "Financial Data Scientist",
    department: "Specialized Services",
    location: "Remote",
    type: "Full-time",
    description: "Leverage AI and machine learning to uncover hidden market trends and optimize asset allocation. Join our team of data-driven financial strategists."
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function CareersPage() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <GlassHero 
          title="Join Our Elite Team"
          breadcrumb="Careers"
          imageSrc="/assets/about-team.png"
          subtitle="Be part of a team that's redefining wealth management. We're looking for passionate financial architects to help us deliver excellence globally."
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div {...fadeIn} className="text-center mb-20">
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Careers</span>
              <h2 className="text-3xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Empowering The Next <br className="hidden md:block" />
                Generation Of <span className="text-brand italic">Financial Leaders</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Explore our current openings and find your place in a culture of discipline, innovation, and continuous growth.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 group-focus-within:text-brand transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search by role or department..."
                  className="w-full pl-16 pr-8 py-6 bg-background-secondary border border-border/50 rounded-full focus:outline-none focus:border-brand/50 text-foreground transition-all shadow-sm focus:shadow-xl focus:shadow-brand/5"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-xl text-foreground/40 italic">No matching positions found. Try a different search term.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background-secondary">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Why Join Us</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
                  A Culture Built On <br className="hidden md:block" />
                  <span className="text-brand italic">Trust & Excellence</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Global Mobility", desc: "Work from our premium hubs or remotely from anywhere." },
                    { title: "Performance Alpha", desc: "Annual performance-based bonuses and investment perks." },
                    { title: "Cutting-Edge Fintech", desc: "Access the latest algorithmic and financial analysis tools." },
                    { title: "Institutional Impact", desc: "Shape the future of finance for global institutional clients." }
                  ].map((benefit) => (
                    <div key={benefit.title} className="p-6 bg-background rounded-3xl border border-border shadow-sm">
                      <h4 className="text-lg font-bold text-brand mb-2">{benefit.title}</h4>
                      <p className="text-sm text-foreground/50 leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...fadeIn} className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/assets/about-office.png" 
                  alt="Our Culture" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand/10 backdrop-blur-[2px]" />
              </motion.div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
