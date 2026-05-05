"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const functionalTabs = [
  {
    id: "core-functionality",
    label: "Core Functionality",
    content: {
      title: "Core Functionality Testing",
      description: "We verify that each and every feature of your software performs exactly according to the business requirements and functional specifications, ensuring no logic is left unvalidated.",
      points: [
        "Business Logic Validation",
        "User Interface Testing",
        "Database Integrity Checks",
        "API & Web Service Testing",
        "Error Handling & Boundary Testing"
      ]
    }
  },
  {
    id: "end-to-end",
    label: "End-to-End Test",
    content: {
      title: "End-to-End Workflow Validation",
      description: "We simulate real-world user scenarios to ensure that the entire application workflow, from start to finish, is seamless, consistent, and error-free across all modules.",
      points: [
        "Cross-Module Integration",
        "Complex User Journey Validation",
        "Data Flow Consistency Checks",
        "System-Level Interoperability",
        "Third-party Integration Verification"
      ]
    }
  },
  {
    id: "regression-smoke",
    label: "Regression & Smoke",
    content: {
      title: "Regression & Smoke Testing",
      description: "We ensure that new code changes or enhancements do not break existing functionality through rigorous regression suites and rapid smoke tests for every build.",
      points: [
        "Automated Regression Suites",
        "Critical Path Smoke Testing",
        "Impact Analysis & Scoping",
        "Release Readiness Evaluation",
        "Configuration & Environment Testing"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "Our functional testing approach is grounded in deep business understanding and requirement traceability, ensuring that your software delivers the intended business value.",
      points: [
        "Requirement Traceability Matrix",
        "Expert Domain Analysts",
        "Shift-Left Testing Methodology",
        "100% Functional Coverage",
        "Actionable Business-Level Insights"
      ]
    }
  }
];

export default function FunctionalTestingPage() {
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
          title="Functional Testing"
          breadcrumb="Functional Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Validating every feature and workflow to ensure your application behaves exactly as intended for your users."
        />

        <ServiceIntro 
          title="Functional Testing"
          description="Functional testing ensures that every feature of your application works as intended. We validate each function against defined requirements to confirm accurate behavior, proper user interactions, and seamless data flow. Our team focuses on delivering a bug-free experience by thoroughly testing user interfaces, APIs, databases, and integrations across all platforms, ensuring your software is ready for the real world."
          points={[
            "Requirement-Based Validation",
            "UI & API Functionality Checks",
            "End-to-End Workflow Testing",
            "Input & Output Verification"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={functionalTabs} />

        <MeetingRequest serviceName="Functional Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
