"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const manualTabs = [
  {
    id: "manual-qa",
    label: "Manual QA",
    content: {
      title: "Manual QA",
      description: "Our manual testing services cover a wide range of business needs and technical environments to ensure every corner of your application is vetted by expert human eyes, ensuring total reliability and compliance.",
      points: [
        "User acceptance & customer experience assurance testing",
        "Compliance & regulations testing (SOX, HIPAA, etc.)",
        "BI & ETL testing, including reports and end-to-end flows",
        "Client-server, Web, and Desktop application testing",
        "Product testing in real-world environments",
        "Comprehensive manual security audits"
      ]
    }
  },
  {
    id: "our-agenda",
    label: "Our Agenda",
    content: {
      title: "Our Testing Agenda",
      description: "We follow a structured approach to manual testing that prioritizes critical user paths and identifies subtle defects that automated tools often overlook, focusing on real-world usability.",
      points: [
        "Structured Test Case Design",
        "In-depth Exploratory Testing",
        "Usability & Accessibility Audits",
        "Detailed Defect Lifecycle Management",
        "Rigorous Re-testing & Verification"
      ]
    }
  },
  {
    id: "frameworks",
    label: "Advanced Frameworks",
    content: {
      title: "Structured Frameworks",
      description: "Even in manual testing, we utilize best-in-class test management tools and standardized frameworks to ensure high efficiency, full traceability, and clear reporting.",
      points: [
        "Modern Test Management (TestRail)",
        "Agile Bug Tracking (Jira)",
        "Standardized QC Frameworks",
        "Compliance-Ready Documentation",
        "Collaborative QA Review Cycles"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "Our manual testers are domain experts who think like your end-users. We combine human insight with professional discipline to uncover the bugs that matter most to your business.",
      points: [
        "Human Insight & User Empathy",
        "Deep Domain-Specific Knowledge",
        "Agile & Collaborative Integration",
        "Maximum Path Coverage",
        "Actionable Quality & UX Metrics"
      ]
    }
  }
];

export default function ManualTestingPage() {
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
          title="Manual Testing"
          breadcrumb="Manual Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Delivering human insight and meticulous validation to ensure your software is intuitive, reliable, and bug-free."
        />

        <ServiceIntro 
          title="Manual Testing"
          description="Manual testing plays a crucial role in identifying bugs, usability issues, and edge cases that automated tests may miss. Our QA experts thoroughly validate each functionality, ensuring the application behaves as expected under real-world conditions. We focus on user experience, visual correctness, and functional accuracy to deliver a reliable and user-friendly product that builds long-term customer trust."
          points={[
            "Human-Centered Test Execution",
            "UI/UX Validation",
            "Functional & Exploratory Testing",
            "Real-World Scenario Testing"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={manualTabs} />

        <MeetingRequest serviceName="Manual Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
