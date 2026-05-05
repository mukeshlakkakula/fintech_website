"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const mobileAppTabs = [
  {
    id: "test-coverage",
    label: "Mobile App's Test coverage",
    content: {
      title: "Mobile App's Test coverage",
      description: "The boom in mobile technology adoption among the user is purely magical in terms of speed and acceptability. It advances overnight and business needs to have it in order to create its presence in digital marketplace. The great user experience defines the value hence Experts QA offers following services in Mobile app testing –",
      points: [
        "App testing over-the-air (OTA)",
        "App testing on user interface",
        "Performance & Functionality testing on app",
        "App testing on sound/vibration along with notifications",
        "App testing based on specific carrier"
      ]
    }
  },
  {
    id: "effective-areas",
    label: "Effective Areas",
    content: {
      title: "Effective Testing Areas",
      description: "We focus on the most critical aspects of the mobile user experience to ensure high retention and positive app store ratings. Our testing covers diverse user conditions and device configurations.",
      points: [
        "Battery Consumption Analysis",
        "Interrupt Testing (Calls/SMS)",
        "Location-Based Services Validation",
        "Offline Mode Functionality",
        "Memory Leak Detection"
      ]
    }
  },
  {
    id: "test-productivity",
    label: "App Test Productivity",
    content: {
      title: "Maximizing Productivity",
      description: "Our automated testing pipelines and cloud-based device farms ensure rapid feedback loops, allowing your development team to move faster without sacrificing quality.",
      points: [
        "CI/CD Pipeline Integration",
        "Cloud Device Farm Access",
        "Parallel Test Execution",
        "Automated Regression Suites",
        "Real-time Crash Reporting"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "We bring a unique blend of manual expertise and cutting-edge automation tools to the table, ensuring your mobile application stands out in a crowded market.",
      points: [
        "Global Device Coverage",
        "Expertise in Appium & Espresso",
        "Real-world Network Simulation",
        "Rapid Turnaround Time",
        "Dedicated Mobile QA Experts"
      ]
    }
  }
];

export default function MobileAppTestingPage() {
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
          title="Mobile App Testing"
          breadcrumb="Mobile App Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Ensuring your mobile applications deliver a flawless experience across all devices, OS versions, and network conditions."
        />

        <ServiceIntro 
          title="Mobile App Testing"
          description="We provide end-to-end mobile app testing services to ensure your app delivers a seamless, secure, and consistent user experience across devices and platforms. Our process includes functional, performance, usability, and compatibility testing — covering both Android and iOS. We help identify and resolve issues early, ensuring your app meets quality standards before going live and exceeding user expectations."
          points={[
            "Functional & UI Testing",
            "Real Device & Emulator Testing",
            "Security & Data Privacy Checks",
            "Crash & Bug Reporting"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={mobileAppTabs} />

        <MeetingRequest serviceName="Mobile App Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
