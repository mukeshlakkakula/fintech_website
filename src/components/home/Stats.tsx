"use client";

import { useState, useEffect, useRef } from "react";
import { History, Users2, Banknote, Target } from "lucide-react";

const stats = [
  {
    value: 500,
    prefix: "$",
    suffix: "M+",
    label: "Assets Under Advisory",
    icon: Banknote,
  },
  {
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    icon: History,
  },
  {
    value: 250,
    suffix: "+",
    label: "Institutional Clients",
    icon: Users2,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Algorithm Precision",
    icon: Target,
  },
];

const StatItem = ({ stat }: { stat: typeof stats[0] }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div ref={countRef} className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-500">
        <stat.icon className="w-8 h-8 text-brand group-hover:text-black transition-colors duration-500" />
      </div>
      <span className="text-4xl md:text-5xl font-heading font-bold text-highlight mb-2">
        {"prefix" in stat && stat.prefix}{stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{stat.suffix}
      </span>
      <span className="text-sm font-bold uppercase tracking-widest text-foreground opacity-80 leading-relaxed">
        {stat.label}
      </span>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
