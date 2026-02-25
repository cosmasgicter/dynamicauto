"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when hero is NOT intersecting (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 tablet:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-das-navy/95 backdrop-blur-sm px-4 py-3">
        <Link
          href="/contact"
          className="block w-full rounded-lg bg-das-accent py-3 text-center font-semibold text-white transition-colors hover:bg-das-accent-dark"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
