"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const automationTabs = [
  {
    id: "area-coverage",
    label: "Area of Coverage",
    content: {
      title: "Area of Coverage",
      description: "Whether it's a new product release, fixes in application, software enhancement, updation or migration, Automated Testing is a magic tool to test all functionality throughout. The expertise of Experts QA offers following services:",
      points: [
        "Development of automated tests scripts",
        "Regression testing plan",
        "In & Out assessment of each test cycles thoroughly",
        "Ensure software speed and operating efficiency",
        "Rapid development of robust test automation environment based on application"
      ]
    }
  },
  {
    id: "integrations",
    label: "Integrations",
    content: {
      title: "Seamless CI/CD Integrations",
      description: "We integrate automated testing into your existing development pipelines to ensure continuous quality. This allows for rapid feedback and ensures that every code change is validated before reaching production.",
      points: [
        "Jenkins & GitHub Actions Integration",
        "Slack & Teams Notifications",
        "Jira & Azure DevOps Linking",
        "Dockerized Test Environments",
        "Cloud-based Device Farm Sync"
      ]
    }
  },
  {
    id: "frameworks",
    label: "Advanced Frameworks",
    content: {
      title: "Cutting-Edge Frameworks",
      description: "We utilize modern, scalable frameworks tailored to your technology stack. Our approach ensures that your test assets are maintainable, reusable, and capable of evolving with your application.",
      points: [
        "Selenium & Playwright Mastery",
        "Cypress for Modern Web Apps",
        "Appium for Mobile Automation",
        "PyTest & JUnit Structures",
        "Cucumber/BDD Implementation"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "Our approach focuses on creating long-term value through robust automation architectures. We aim to reduce maintenance overhead and maximize your return on investment in QA automation.",
      points: [
        "Modular & Scalable Design",
        "Hybrid Framework Approach",
        "High Accuracy & Low Flakiness",
        "Expert Script Maintenance",
        "Detailed Execution Analytics"
      ]
    }
  }
];

export default function AutomationTestingPage() {
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
          title="Automation Testing"
          breadcrumb="Automation Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Accelerating your release cycles with robust, scalable, and high-performance automated testing solutions."
        />

        <ServiceIntro 
          title="Automated Testing"
          description="Automated testing helps accelerate the QA process by running tests quickly, consistently, and repeatedly. We use industry-leading tools and frameworks to automate functional, regression, and performance tests — ensuring faster releases with fewer bugs. Our goal is to improve test coverage, reduce manual effort, and deliver high-quality software at speed, allowing your team to focus on innovation."
          points={[
            "Faster Time to Market",
            "Reduced Manual Effort",
            "Regression Testing Automation",
            "Data-Driven Testing"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={automationTabs} />

        <MeetingRequest serviceName="Automation Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
