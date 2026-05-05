"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const performanceTabs = [
  {
    id: "performance-analysis",
    label: "Performance Analysis",
    content: {
      title: "Performance Analysis",
      description: "Performance testing is a process that integrates itself into every development cycle to ensure optimal application load and speed. It is a top-priority QA engagement that ensures high-speed product delivery. We automate performance testing using industry-standard tools like JMeter, including comprehensive API load tests.",
      points: [
        "Multi-dimensional load factor analysis",
        "High-speed product delivery optimization",
        "Load analysis for pages, flows, and APIs",
        "Execution speed and response time optimization",
        "Expert detection of low-performing API endpoints"
      ]
    }
  },
  {
    id: "our-agenda",
    label: "Our Agenda",
    content: {
      title: "Our Testing Agenda",
      description: "We follow a rigorous performance testing lifecycle to identify limits and ensure your application can handle peak traffic without any degradation in user experience.",
      points: [
        "Comprehensive Workload Modeling",
        "Stress & Endurance Testing",
        "Spike & Soak Testing Scenarios",
        "Configuration & Performance Tuning",
        "Bottleneck Root Cause Analysis"
      ]
    }
  },
  {
    id: "frameworks",
    label: "Advanced Frameworks",
    content: {
      title: "Advanced Tools & Frameworks",
      description: "We utilize cutting-edge tools to simulate thousands of concurrent users and provide deep insights into system performance and resource utilization.",
      points: [
        "Apache JMeter & Gatling",
        "Locust for Distributed Loading",
        "New Relic & Dynatrace Monitoring",
        "Cloud-based Load Generation",
        "Real-time Performance Dashboards"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "We go beyond just identifying performance limits; we provide actionable recommendations for code optimization and infrastructure scaling to future-proof your app.",
      points: [
        "Predictive Performance Analytics",
        "End-to-End Latency Tracking",
        "Infrastructure-Aware Testing",
        "Seamless CI/CD Performance Gates",
        "Cross-Platform Benchmarking"
      ]
    }
  }
];

export default function PerformanceTestingPage() {
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
          title="Performance Testing"
          breadcrumb="Performance Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Optimizing speed, stability, and scalability to ensure your application performs flawlessly under any load."
        />

        <ServiceIntro 
          title="Performance Testing"
          description="Performance testing ensures your application runs smoothly under varying loads and stress conditions. We evaluate speed, responsiveness, stability, and scalability to detect performance bottlenecks before they impact users. Our goal is to help you deliver a fast, reliable, and optimized experience across all devices and user volumes, ensuring your infrastructure is ready for growth."
          points={[
            "Load & Stress Testing",
            "Response Time Monitoring",
            "Scalability Assessment",
            "Resource Usage Analysis"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={performanceTabs} />

        <MeetingRequest serviceName="Performance Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
