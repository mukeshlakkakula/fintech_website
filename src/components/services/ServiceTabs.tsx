"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabContent {
  title: string;
  description: string;
  points: string[];
}

interface Tab {
  id: string;
  label: string;
  content: TabContent;
}

interface ServiceTabsProps {
  tabs: Tab[];
}

export default function ServiceTabs({ tabs }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-bold text-sm transition-all border duration-300 ${
                activeTab === tab.id
                  ? "bg-brand text-black border-brand shadow-xl shadow-brand/20"
                  : "bg-background/50 text-foreground/60 border-border hover:border-brand/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div 
          className="bg-background rounded-[2rem] p-8 md:p-16 border border-border shadow-2xl relative overflow-hidden"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="max-w-4xl">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  {activeContent?.title}
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed mb-12">
                  {activeContent?.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {activeContent?.points.map((point) => (
                    <div key={point} className="flex items-center gap-4 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand shadow-lg shadow-brand/40 group-hover:scale-125 transition-transform" />
                      <span className="text-foreground/80 font-medium text-lg">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Decorative Background Blob */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
