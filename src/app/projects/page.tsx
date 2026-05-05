"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, School, Globe, Cpu, Building2, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import CTA from "@/components/home/CTA";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";

import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Aurelius Asset Management",
    description: "Advanced multi-asset portfolio tracking and risk modeling platform for institutional wealth managers.",
    category: "Asset Management",
    icon: <Cpu className="w-8 h-8" />,
    image: "/assets/fintech_wealth.png"
  },
  {
    id: 2,
    title: "FinVault Neo-Bank",
    description: "Core banking system audit and mobile app infrastructure for a leading European digital banking provider.",
    category: "Digital Banking",
    icon: <Users className="w-8 h-8" />,
    image: "/assets/fintech_payments.png"
  },
  {
    id: 3,
    title: "Nexus Algorithmic Trading",
    description: "High-frequency trading engine optimization and latency reduction for institutional hedge funds.",
    category: "Algo Trading",
    icon: <School className="w-8 h-8" />,
    image: "/assets/fintech_trading.png"
  },
  {
    id: 4,
    title: "Apex Global Payments",
    description: "Secure cross-border settlement system utilizing blockchain for instant global liquidity.",
    category: "Payments",
    icon: <Globe className="w-8 h-8" />,
    image: "/assets/fintech_payments.png"
  },
  {
    id: 5,
    title: "Prism Wealth Advisor",
    description: "AI-driven wealth management advisory tool tailored for ultra-high-net-worth individual portfolios.",
    category: "Wealth Management",
    icon: <Code2 className="w-8 h-8" />,
    image: "/assets/fintech_wealth.png"
  },
  {
    id: 6,
    title: "Lumina Risk Analytics",
    description: "Enterprise-wide financial risk assessment and market stress testing suite for global banking institutions.",
    category: "Risk Management",
    icon: <Building2 className="w-8 h-8" />,
    image: "/assets/fintech_trading.png"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <GlassHero 
          title="Case Studies"
          breadcrumb="Projects"
          imageSrc="/assets/about-team.png"
          subtitle="Delivering financial excellence across markets through strategic advisory and innovative fintech architecture."
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div {...fadeIn} className="text-center mb-20">
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Projects</span>
              <h2 className="text-3xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Bring The Revolution <br className="hidden md:block" />
                With The <span className="text-brand italic">Elite Strategy</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  variant="reveal" 
                />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
