"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const wealthTabs = [
  {
    id: "strategic-planning",
    label: "Strategic Planning",
    content: {
      title: "Long-term Capital Growth",
      description: "We develop comprehensive financial roadmaps designed to preserve and grow wealth across generations through disciplined asset allocation.",
      points: [
        "Multi-Generational Wealth Planning",
        "Retirement & Estate Strategies",
        "Philanthropic Advisory",
        "Capital Preservation Focus",
        "Tax-Advantaged Structures"
      ]
    }
  },
  {
    id: "family-office",
    label: "Family Office",
    content: {
      title: "Private Family Governance",
      description: "Our bespoke family office solutions provide institutional-grade infrastructure for managing complex private wealth and family interests.",
      points: [
        "Family Governance Frameworks",
        "Global Lifestyle Management",
        "Private Investment Vehicles",
        "Consolidated Reporting",
        "Succession Planning"
      ]
    }
  },
  {
    id: "alternative-investments",
    label: "Alternatives",
    content: {
      title: "Diversified Asset Classes",
      description: "Access a curated selection of alternative investments, including private equity, real estate, and venture capital, to enhance portfolio resilience.",
      points: [
        "Private Equity Access",
        "Real Estate Syndication",
        "Venture Capital Advisory",
        "Hedge Fund Selection",
        "Direct Investment Opportunities"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "The Elite Standard",
      description: "We combine deep market expertise with a high-touch advisory model to ensure your financial vision is executed with absolute precision.",
      points: [
        "Bespoke Advisory Model",
        "Institutional-Grade Research",
        "Unbiased Conflict-Free Advice",
        "Discreet Personal Service",
        "Global Market Access"
      ]
    }
  }
];

export default function WealthStrategyPage() {
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
          title="Wealth Management Strategy"
          breadcrumb="Wealth Strategy"
          imageSrc="/assets/about-hero.png"
          subtitle="Strategic advisory tailored for high-net-worth individuals and families seeking long-term capital preservation."
        />

        <ServiceIntro 
          title="Wealth Management"
          description="At Elite FinTech Consulting, we believe that wealth management is more than just investing—it's about creating a sustainable legacy. Our strategic approach integrates advanced financial modeling with deep personal insight to build portfolios that withstand market volatility. We work as your dedicated partner to ensure every asset is aligned with your long-term goals and family values."
          points={[
            "Bespoke Investment Strategies",
            "Multi-Asset Class Allocation",
            "Tax-Efficient Wealth Growth",
            "Estate & Legacy Planning"
          ]}
          imageSrc="/assets/fintech_wealth.png"
        />

        <ServiceTabs tabs={wealthTabs} />

        <MeetingRequest serviceName="Wealth Strategy" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
