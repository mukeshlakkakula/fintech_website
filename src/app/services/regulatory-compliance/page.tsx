"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const complianceTabs = [
  {
    id: "aml-kyc",
    label: "AML/KYC",
    content: {
      title: "Anti-Money Laundering & KYC",
      description: "We implement robust AML and KYC frameworks that ensure institutional compliance while providing a frictionless onboarding experience.",
      points: [
        "Automated Identity Verification",
        "Sanctions & PEP Screening",
        "UBO Discovery & Mapping",
        "Transaction Monitoring",
        "Regulatory Reporting (SAR/STR)"
      ]
    }
  },
  {
    id: "fintech-law",
    label: "FinTech Law",
    content: {
      title: "Global Fintech Regulations",
      description: "Navigate the complex landscape of international financial laws with our expert guidance on PSD2, GDPR, and crypto-asset regulations.",
      points: [
        "PSD2/SCA Compliance",
        "GDPR Data Protection",
        "MiCA (Crypto Assets) Advisory",
        "Cross-Border License Pass-porting",
        "Digital Signature Standards"
      ]
    }
  },
  {
    id: "risk-mitigation",
    label: "Risk Mitigation",
    content: {
      title: "Operational Risk Management",
      description: "Identify and mitigate systemic risks within your financial operations through rigorous stress testing and auditing.",
      points: [
        "Financial Stress Testing",
        "Cyber-Security Compliance",
        "Third-party Risk Assessment",
        "Business Continuity Planning",
        "Internal Audit Frameworks"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Edge",
    content: {
      title: "Compliance Reimagined",
      description: "We turn regulatory compliance from a cost center into a strategic advantage, enabling you to scale into new markets with confidence.",
      points: [
        "RegTech Experts",
        "Global Regulatory Network",
        "Proactive Threat Detection",
        "Zero-Trust Security Models",
        "Audit-Ready Reporting"
      ]
    }
  }
];

export default function RegulatoryCompliancePage() {
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
          title="Regulatory Compliance"
          breadcrumb="Compliance"
          imageSrc="/assets/about-hero.png"
          subtitle="Institutional-grade regulatory frameworks ensuring your operations meet the highest global standards."
        />

        <ServiceIntro 
          title="Compliance & Risk"
          description="In the rapidly evolving world of fintech, regulatory compliance is the foundation of trust. We provide end-to-end compliance solutions that protect your institution from legal and financial risks while optimizing your operational efficiency. Our team of experts ensures that your platform remains ahead of regulatory changes, allowing you to focus on innovation and growth."
          points={[
            "Global AML/KYC Frameworks",
            "FinTech Licensing Advisory",
            "Data Protection & Privacy",
            "Regulatory Reporting Automation"
          ]}
          imageSrc="/assets/about-office.png"
        />

        <ServiceTabs tabs={complianceTabs} />

        <MeetingRequest serviceName="Regulatory Compliance" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
