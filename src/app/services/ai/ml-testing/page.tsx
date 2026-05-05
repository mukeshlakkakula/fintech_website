"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import GlassHero from "@/components/layout/GlassHero";
import CTA from "@/components/home/CTA";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceTabs from "@/components/services/ServiceTabs";
import MeetingRequest from "@/components/services/MeetingRequest";

const aiMlTabs = [
  {
    id: "model-validation",
    label: "Model Validation",
    content: {
      title: "Model Validation",
      description: "We ensure your AI models are robust, accurate, and generalize well to unseen data. Our validation process identifies overfitting, underfitting, and performance bottlenecks through rigorous testing cycles.",
      points: [
        "Dataset Profiling & Cleaning",
        "Automated Model Evaluation",
        "Overfitting & Bias Detection",
        "Performance Metrics Validation",
        "Robustness & Stress Testing"
      ]
    }
  },
  {
    id: "data-quality",
    label: "Data Quality",
    content: {
      title: "Data Quality & Integrity",
      description: "The quality of your AI is only as good as your data. We perform rigorous checks to ensure your training and testing data are representative, balanced, and free of systemic errors.",
      points: [
        "Data Drift Detection",
        "Missing Value Analysis",
        "Outlier Identification",
        "Data Distribution Checks",
        "Privacy & Compliance Audits"
      ]
    }
  },
  {
    id: "ethical-ai",
    label: "Ethical AI Audit",
    content: {
      title: "Ethical AI & Fairness",
      description: "We help you build trustworthy AI by auditing models for bias and ensuring they adhere to ethical standards and regulatory requirements across all demographic segments.",
      points: [
        "Algorithmic Bias Assessment",
        "Fairness Metric Auditing",
        "Explainability Analysis",
        "Impact Evaluation",
        "Regulatory Compliance Support"
      ]
    }
  },
  {
    id: "differentiators",
    label: "Our Differentiators",
    content: {
      title: "Why Choose Experts in QA?",
      description: "We combine deep domain expertise in quality assurance with cutting-edge AI knowledge to provide superior testing services that ensure your AI solutions are market-ready.",
      points: [
        "End-to-End AI Lifecycle Testing",
        "Custom Frameworks for ML",
        "Real-time Monitoring Solutions",
        "Domain-Specific Expertise",
        "Agile & Collaborative Approach"
      ]
    }
  }
];

export default function AiMlTestingPage() {
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
          title="AI/ML Testing"
          breadcrumb="AI/ML Testing"
          imageSrc="/assets/about-hero.png"
          subtitle="Ensuring accuracy, reliability, and fairness in your AI/ML models with advanced testing strategies and ethical audits."
        />

        <ServiceIntro 
          title="AI/ML Testing"
          description="We provide comprehensive AI/ML testing services to ensure your models are accurate, reliable, and perform as expected in real-world scenarios. Our testing process verifies model precision, data integrity, bias mitigation, and algorithmic performance across all endpoints. By simulating complex data distributions and edge cases, we help ensure seamless integration between AI components and a flawless user experience that builds trust."
          points={[
            "Model Validation & Accuracy",
            "Data Quality & Integrity",
            "Bias & Fairness Testing",
            "Performance & Scalability"
          ]}
          imageSrc="/assets/qa_team.png"
        />

        <ServiceTabs tabs={aiMlTabs} />

        <MeetingRequest serviceName="AI/ML Testing" />

        <CTA />

      </main>

      <Footer />
    </div>
  );
}
