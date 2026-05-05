"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const optimizationTabs = [
  {
    id: "portfolio-rebalancing",
    label: "Rebalancing",
    content: {
      title: "Dynamic Portfolio Rebalancing",
      description: "Automated and strategic rebalancing to maintain target asset allocations and manage risk exposure in real-time.",
      points: [
        "Drift-based Rebalancing",
        "Cash Flow Integration",
        "Tax-Loss Harvesting",
        "Trading Cost Minimization",
        "Model Portfolio Tracking"
      ]
    }
  },
  {
    id: "tax-efficiency",
    label: "Tax Efficiency",
    content: {
      title: "Tax-Efficient Investing",
      description: "Maximize after-tax returns through sophisticated asset location and intelligent capital gains management.",
      points: [
        "Asset Location Optimization",
        "Capital Gains Mitigation",
        "Tax-efficient Withdrawal Strategies",
        "Charitable Giving Optimization",
        "Dividend Reinvestment Control"
      ]
    }
  },
  {
    id: "performance-alpha",
    label: "Alpha Generation",
    content: {
      title: "Data-Driven Performance Alpha",
      description: "Leveraging advanced analytics and alternative data to identify market inefficiencies and enhance portfolio yield.",
      points: [
        "Alternative Data Integration",
        "Factor-based Analysis",
        "Predictive Market Modeling",
        "Yield Enhancement Strategies",
        "Downside Risk Protection"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "Optimization at Scale",
      description: "We use institutional-grade algorithms to ensure your assets are always working at their maximum potential.",
      points: [
        "Advanced Quant Models",
        "Real-time Data Streams",
        "Scalable Cloud Architecture",
        "Precision Execution",
        "Continuous Performance Audits"
      ]
    }
  }
];

export default function AssetOptimizationPage() {
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
          title="Asset Optimization"
          breadcrumb="Asset Optimization"
          imageSrc="/assets/about-hero.png"
          subtitle="Maximize portfolio performance through data-driven strategies and algorithmic rebalancing."
        />

        <ServiceIntro 
          title="Asset Optimization"
          description="In a rapidly changing market, passive management is no longer enough. We provide advanced asset optimization services that leverage institutional-grade algorithms to enhance portfolio performance. Our approach combines traditional financial wisdom with modern data science to identify opportunities for tax-efficiency and risk-adjusted alpha generation, ensuring your capital is always working optimally."
          points={[
            "Algorithmic Portfolio Rebalancing",
            "Tax-Loss Harvesting Strategies",
            "Yield Enhancement Modeling",
            "Institutional Yield Audits"
          ]}
          imageSrc="/assets/fintech_trading.png"
        />

        <ServiceTabs tabs={optimizationTabs} />

        <MeetingRequest serviceName="Asset Optimization" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
