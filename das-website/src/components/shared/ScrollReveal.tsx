"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPrefersReducedMotion(true);
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
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(20px)",
    transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0)",
    transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
  };

  const noAnimationStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0)",
  };

  const style = prefersReducedMotion
    ? noAnimationStyle
    : isVisible
      ? visibleStyle
      : hiddenStyle;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
