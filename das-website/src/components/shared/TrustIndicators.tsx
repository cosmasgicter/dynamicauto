"use client";

import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 75, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Vehicles Serviced" },
  { value: 3, suffix: "", label: "Certified Technicians" },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
  reducedMotion,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
  reducedMotion: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (reducedMotion) {
      setCount(target);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target, reducedMotion]);

  return (
    <span className="text-4xl tablet:text-5xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-das-navy py-16 px-4 tablet:px-8"
      aria-label="Company statistics"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 tablet:grid-cols-3 gap-8 text-center text-white">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 p-6">
            <AnimatedCounter
              target={stat.value}
              suffix={stat.suffix}
              isVisible={isVisible}
              reducedMotion={reducedMotion}
            />
            <span className="text-sm tablet:text-base uppercase tracking-wider text-das-gray-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
