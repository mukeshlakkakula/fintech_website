"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const webAppTabs = [
  {
    id: "cbt-qa",
    label: "CBT QA",
    content: {
      title: "CBT QA",
      description: "In globalized marketplace, web browsers acceptance differs geographically and for business, every web experience matters! Hence, Expert QA brings a special category of service named under cross browser testing which magnificence ensures user experience across 1000+ real browsers on mobile devices. Experts QA offers following services in Cross Browser testing –",
      points: [
        "Interactive and Manual Live testing",
        "Cross browsing visual testing",
        "Cross browser automated testing",
        "Cross browser record and replay testing",
        "Parallel cross browser testing on multiple browsers",
        "Continuous cross browser testing on CI/CD integrations"
      ]
    }
  },
  {
    id: "multi-platform",
    label: "Multi-Platform Test",
    content: {
      title: "Multi-Platform Testing",
      description: "We ensure your web application works seamlessly across diverse platforms, operating systems, and hardware configurations. Our testing strategy covers various screen resolutions and device-specific functionalities.",
      points: [
        "OS Compatibility (Windows, macOS, Linux)",
        "Hardware Configuration Testing",
        "Browser Version Compatibility",
        "Network Latency Simulation",
        "Third-party Integration Checks"
      ]
    }
  },
  {
    id: "reliable-effective",
    label: "Reliable and Effective",
    content: {
      title: "Reliable and Effective QA",
      description: "Our approach focuses on delivering consistent results and high-impact bug detection. We combine automated efficiency with manual precision to provide full coverage of your application's logic.",
      points: [
        "Rigorous Regression Testing",
        "User Acceptance Testing (UAT)",
        "End-to-End Workflow Validation",
        "Performance Benchmarking",
        "Scalability Analysis"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "We leverage industry-leading tools and a decade of experience to provide QA services that don't just find bugs, but improve your overall product quality and user satisfaction.",
      points: [
        "1000+ Real Browser/Device Lab",
        "Custom Automation Frameworks",
        "Agile-Integrated QA Process",
        "Dedicated Security Experts",
        "Comprehensive Reporting & Analytics"
      ]
    }
  }
];

export default function WebApplicationTestingPage() {
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
          title="Web Application Testing"
          breadcrumb="Web Application Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Comprehensive testing solutions to ensure your web applications are fast, secure, and compatible across all platforms."
        />

        <ServiceIntro 
          title="Web Application Testing"
          description="We ensure your web application performs flawlessly across all browsers, devices, and user scenarios. Our testing process covers functionality, usability, compatibility, performance, and security to deliver a smooth, bug-free experience. From UI validation to backend verification, we help identify issues early and optimize your web app for real-world use, ensuring your brand's digital presence is impeccable."
          points={[
            "Cross-Browser Compatibility",
            "Mobile Responsiveness Testing",
            "Security & Vulnerability Checks",
            "UI/UX Validation"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={webAppTabs} />

        <MeetingRequest serviceName="Web Application Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
