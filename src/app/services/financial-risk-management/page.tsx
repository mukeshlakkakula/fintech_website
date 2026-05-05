"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const riskTabs = [
  {
    id: "market-risk",
    label: "Market Risk",
    content: {
      title: "Market Risk Analytics",
      description: "We provide sophisticated modeling tools to measure and mitigate your exposure to market fluctuations, interest rates, and currency volatility.",
      points: [
        "Value-at-Risk (VaR) Modeling",
        "Historical Stress Testing",
        "Monte Carlo Simulations",
        "Sensitivity Analysis (Greeks)",
        "Portfolio Diversification Strategy"
      ]
    }
  },
  {
    id: "compliance",
    label: "Compliance",
    content: {
      title: "Regulatory Compliance",
      description: "Navigate the complex global regulatory landscape with automated compliance frameworks that ensure you stay ahead of reporting requirements.",
      points: [
        "AML/KYC Automation",
        "Mifid II / Basel III Reporting",
        "Real-time Transaction Monitoring",
        "Regulatory Reporting Pipelines",
        "Internal Audit Automation"
      ]
    }
  },
  {
    id: "operational-risk",
    label: "Operational Risk",
    content: {
      title: "Operational Resilience",
      description: "Protect your firm against system failures, human error, and external disruptions with robust operational risk frameworks.",
      points: [
        "Systemic Redundancy Audits",
        "Cyber-Risk Financial Modeling",
        "Business Continuity Planning",
        "Third-party Risk Management",
        "Incident Impact Analysis"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "Why Elite FinTech?",
      description: "We combine data science with deep regulatory knowledge to provide a proactive risk posture that protects your capital in all conditions.",
      points: [
        "Real-time Risk Dashboards",
        "Global Regulatory Experts",
        "Custom Risk Modeling (Python/R)",
        "Scalable Data Infrastructure",
        "24/7 Monitoring & Alerting"
      ]
    }
  }
];

export default function RiskManagementPage() {
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
          title="Financial Risk Management"
          breadcrumb="Risk Management"
          imageSrc="/assets/about-hero.png"
          subtitle="Proactive risk modeling and regulatory compliance solutions designed to protect your capital in a volatile global market."
        />

        <ServiceIntro 
          title="Risk Management"
          description="We empower financial institutions with advanced risk management frameworks that turn uncertainty into opportunity. Our approach combines rigorous mathematical modeling with deep regulatory expertise to ensure your firm is resilient against market shocks, operational failures, and compliance breaches. We provide the tools and insights you need to manage risk with confidence."
          points={[
            "Market & Credit Risk Modeling",
            "Automated Regulatory Compliance",
            "Operational Resilience Audits",
            "Real-time Risk Dashboards"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={riskTabs} />

        <MeetingRequest serviceName="Financial Risk" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
