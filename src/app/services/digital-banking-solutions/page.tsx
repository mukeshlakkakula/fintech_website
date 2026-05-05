"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const bankingTabs = [
  {
    id: "core-banking",
    label: "Core Banking",
    content: {
      title: "Core Banking Infrastructure",
      description: "We provide high-performance core banking systems that serve as the backbone of modern financial institutions, ensuring reliability and high availability.",
      points: [
        "Ledger Management",
        "Real-time Transaction Processing",
        "Account Lifecycle Management",
        "Interest Calculation Engines",
        "Legacy System Modernization"
      ]
    }
  },
  {
    id: "open-banking",
    label: "Open Banking",
    content: {
      title: "Open Banking & APIs",
      description: "Expand your reach and foster innovation with secure, compliant open banking APIs that allow for seamless third-party integrations.",
      points: [
        "PSD2/Open Banking Compliance",
        "Secure API Gateway",
        "Consent Management",
        "Developer Portal Integration",
        "Third-party Provider (TPP) Onboarding"
      ]
    }
  },
  {
    id: "security",
    label: "Security",
    content: {
      title: "Enterprise-Grade Security",
      description: "Our digital banking solutions are built with a security-first mindset, protecting sensitive financial data with advanced encryption and biometrics.",
      points: [
        "Multi-factor Authentication (MFA)",
        "End-to-End Encryption",
        "Fraud Detection Systems",
        "Biometric Identity Verification",
        "Real-time Threat Monitoring"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "Why Elite FinTech?",
      description: "We bridge the gap between traditional banking stability and modern technological agility to deliver a superior banking experience.",
      points: [
        "Financial Domain Experts",
        "Scalable Cloud-Native Tech",
        "Global Regulatory Insight",
        "Seamless User Experience",
        "24/7 Mission-Critical Support"
      ]
    }
  }
];

export default function DigitalBankingPage() {
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
          title="Digital Banking Solutions"
          breadcrumb="Digital Banking"
          imageSrc="/assets/about-hero.png"
          subtitle="Empowering financial institutions with secure, scalable, and innovative digital banking platforms."
        />

        <ServiceIntro 
          title="Digital Banking"
          description="We specialize in modernizing financial infrastructure through cloud-native digital banking platforms. Our solutions enable banks to offer seamless, real-time services to their customers while ensuring the highest levels of security and regulatory compliance. From core ledger systems to advanced mobile banking interfaces, we deliver the technology that powers the future of finance."
          points={[
            "Core Banking Modernization",
            "Open Banking API Ecosystems",
            "Next-Gen Mobile Banking",
            "Secure Payment Gateways"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={bankingTabs} />

        <MeetingRequest serviceName="Digital Banking" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
