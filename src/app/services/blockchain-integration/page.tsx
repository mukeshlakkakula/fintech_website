"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const blockchainTabs = [
  {
    id: "smart-contracts",
    label: "Smart Contracts",
    content: {
      title: "Secure Smart Contracts",
      description: "We develop and audit production-grade smart contracts that automate financial processes with complete transparency and zero counterparty risk.",
      points: [
        "Financial Logic Automation",
        "Multi-Sig Wallet Systems",
        "Governance Model Design",
        "Tokenization of Real Assets",
        "Automated Dividend Distribution"
      ]
    }
  },
  {
    id: "asset-tokenization",
    label: "Tokenization",
    content: {
      title: "Asset Tokenization",
      description: "Unlock liquidity for traditional assets by tokenizing real estate, private equity, and commodities on secure distributed ledgers.",
      points: [
        "Fractional Ownership Logic",
        "Security Token Offerings (STO)",
        "Compliance-Enforced Transfers",
        "Automated Asset Servicing",
        "Secondary Market Integration"
      ]
    }
  },
  {
    id: "audits",
    label: "Security Audits",
    content: {
      title: "Security & Auditing",
      description: "Our security experts perform deep-dive audits of blockchain protocols and smart contracts to ensure your capital is protected against vulnerabilities.",
      points: [
        "Code-Level Security Audits",
        "Formal Verification",
        "Economic Stress Testing",
        "Zero-Day Threat Research",
        "Post-Deployment Monitoring"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "Why Elite FinTech?",
      description: "We bring institutional discipline to the decentralized world, ensuring your blockchain initiatives are both innovative and secure.",
      points: [
        "Cross-Chain Interoperability",
        "Institutional Grade Custody",
        "Regulatory-First Approach",
        "Experienced Web3 Architects",
        "Seamless Enterprise Integration"
      ]
    }
  }
];

export default function BlockchainIntegrationPage() {
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
          title="Blockchain Integration"
          breadcrumb="Blockchain"
          imageSrc="/assets/about-hero.png"
          subtitle="Leveraging distributed ledger technology to drive transparency, security, and efficiency in financial systems."
        />

        <ServiceIntro 
          title="Blockchain Solutions"
          description="We integrate enterprise-grade blockchain solutions into your existing financial workflows. Our expertise spans private and public ledgers, smart contract development, and asset tokenization. By removing intermediaries and enhancing transparency, we help you reduce costs and create new financial products that were previously impossible."
          points={[
            "Smart Contract Engineering",
            "Asset Tokenization (RWA)",
            "Blockchain Security Auditing",
            "DeFi Protocol Architecture"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={blockchainTabs} />

        <MeetingRequest serviceName="Blockchain Integration" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
