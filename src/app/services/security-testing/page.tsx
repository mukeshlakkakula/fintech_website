"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import ServiceApproach from "@/components/services/ServiceApproach";
import MeetingRequest from "@/components/services/MeetingRequest";

const securitySteps = [
  {
    number: "1",
    title: "Requirements Gathering",
    description: "We identify the security scope, regulatory requirements (like HIPAA or GDPR), and potential threat vectors specific to your business domain."
  },
  {
    number: "2",
    title: "Analysis And Planning",
    description: "Our experts perform threat modeling and create a comprehensive security test plan to cover all critical application layers and data paths."
  },
  {
    number: "3",
    title: "Design & Development",
    description: "We develop custom security scripts and configure advanced scanning tools to simulate real-world attacks while ensuring data integrity."
  },
  {
    number: "4",
    title: "Testing Device & Release",
    description: "Rigorous vulnerability assessment and penetration testing are executed. We provide detailed reports and verify fixes before final release."
  },
  {
    number: "5",
    title: "Maintenance And Support",
    description: "Security is an ongoing process. We provide continuous monitoring and periodic audits to protect against newly emerging threats."
  }
];

const securityTabs = [
  {
    id: "offline-test",
    label: "Offline Application Test",
    content: {
      title: "Offline Application Test",
      description: "In the treatment of information technology, software testing absolutely rules. With efficient utilization of testing tools and advanced automation, our technical experts provide specialized security testing for 2-tier and windows-based software to ensure business success.",
      points: [
        "Technology based software testing",
        "Software integration testing",
        "Application architecture testing",
        "Backend database applicability testing",
        "Windows based software testing",
        "Front-end tool applicability testing"
      ]
    }
  },
  {
    id: "multi-dimensional",
    label: "Multi-Dimensional Coverage",
    content: {
      title: "Multi-Dimensional Security",
      description: "We provide 360-degree security coverage, from network layers to application logic, ensuring no vulnerability goes unnoticed across your entire digital ecosystem.",
      points: [
        "Network Infrastructure Audits",
        "API Security & JWT Validation",
        "Cloud Configuration Reviews",
        "Identity & Access Management",
        "Social Engineering Simulations"
      ]
    }
  },
  {
    id: "test-productivity",
    label: "Test Productivity",
    content: {
      title: "Efficient Security Audits",
      description: "Our automated security scanning tools integrated into CI/CD pipelines ensure that security is a continuous quality attribute, not a bottleneck to your release cycle.",
      points: [
        "DAST & SAST Pipeline Integration",
        "Automated Vulnerability Scanning",
        "Real-time Threat Intelligence",
        "Rapid Remediation Verification",
        "Security Compliance Dashboards"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "We combine deep ethical hacking expertise with a developer-first mindset to provide security solutions that are both robust and practically implementable.",
      points: [
        "Certified Ethical Hackers (CEH)",
        "Compliance Expertise (GDPR, HIPAA)",
        "Zero-Day Vulnerability Research",
        "Detailed Remediation Guidance",
        "Ongoing Security Monitoring"
      ]
    }
  }
];

export default function SecurityTestingPage() {
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
          title="Security Testing"
          breadcrumb="Security Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Safeguarding your digital assets with rigorous vulnerability assessments and proactive threat mitigation strategies."
        />

        <ServiceIntro 
          title="Security Testing"
          description="Security testing identifies vulnerabilities and weaknesses in your application to ensure its integrity and protect sensitive data from malicious attacks. Our approach includes testing for common security risks such as SQL injection, cross-site scripting (XSS), authentication issues, and data encryption flaws. We help safeguard your application by ensuring it meets industry security standards and best practices, building trust with your users."
          points={[
            "Vulnerability Assessment",
            "Data Encryption Validation",
            "Risk & Threat Mitigation",
            "Authentication & Authorization Checks"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceApproach steps={securitySteps} />

        <ServiceTabs tabs={securityTabs} />

        <MeetingRequest serviceName="Security Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
