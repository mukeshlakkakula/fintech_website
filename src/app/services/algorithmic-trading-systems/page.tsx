"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const tradingTabs = [
  {
    id: "strategy-engine",
    label: "Strategy Engine",
    content: {
      title: "Custom Strategy Development",
      description: "We build sophisticated algorithmic engines capable of executing complex trading strategies across multiple asset classes with precision and speed.",
      points: [
        "Quantitative Strategy Design",
        "Machine Learning Model Integration",
        "Arbitrage & Market Making Bots",
        "Portfolio Rebalancing Algos",
        "Custom Alpha Factor Development"
      ]
    }
  },
  {
    id: "execution",
    label: "Execution",
    content: {
      title: "Low-Latency Execution",
      description: "Our execution systems are optimized for microsecond latency, ensuring your trades are filled at the best possible prices with minimal slippage.",
      points: [
        "Direct Market Access (DMA)",
        "FIX/Binary Protocol Integration",
        "Smart Order Routing (SOR)",
        "Colocation Strategy Support",
        "High-Throughput Order Management"
      ]
    }
  },
  {
    id: "risk-control",
    label: "Risk Controls",
    content: {
      title: "Automated Risk Management",
      description: "Protect your capital with real-time automated risk checks and circuit breakers integrated directly into the trading workflow.",
      points: [
        "Pre-Trade Risk Checks",
        "Max Drawdown Controls",
        "Real-time PnL Monitoring",
        "Automated Kill Switches",
        "Regulatory Compliance Tracking"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "Why Elite FinTech?",
      description: "We combine deep market knowledge with extreme technical performance to give your trading desk a sustainable competitive advantage.",
      points: [
        "Microsecond Latency Optimization",
        "Robust Backtesting Frameworks",
        "Scalable Cloud Infrastructure",
        "Multi-Asset Class Expertise",
        "Discrete & Secure Development"
      ]
    }
  }
];

export default function AlgorithmicTradingPage() {
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
          title="Algorithmic Trading Systems"
          breadcrumb="Algo Trading"
          imageSrc="/assets/about-hero.png"
          subtitle="Precision-engineered trading systems designed for high-frequency performance and market-beating strategies."
        />

        <ServiceIntro 
          title="Algorithmic Trading"
          description="We deliver high-performance algorithmic trading systems that empower institutional traders to execute complex strategies with unmatched speed and accuracy. Our solutions cover the entire trading lifecycle, from quantitative model development and backtesting to low-latency execution and real-time risk management. In a market where every microsecond counts, we provide the technical edge you need."
          points={[
            "Custom Strategy Development",
            "Low-Latency Execution Engines",
            "Advanced Backtesting Suites",
            "Real-time Risk Monitoring"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={tradingTabs} />

        <MeetingRequest serviceName="Algorithmic Trading" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
