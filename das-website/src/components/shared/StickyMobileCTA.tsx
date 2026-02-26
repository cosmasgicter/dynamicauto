"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 right-5 z-40 tablet:hidden"
          initial={{ scale: 0, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Pulsing ring effect */}
          <motion.span
            className="absolute inset-0 rounded-full bg-das-accent/40"
            animate={{
              scale: [1, 1.5, 1.8],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          {/* Second pulse ring (offset timing) */}
          <motion.span
            className="absolute inset-0 rounded-full bg-das-accent/30"
            animate={{
              scale: [1, 1.3, 1.6],
              opacity: [0.4, 0.15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.8,
            }}
          />

          {/* Main button with bounce + glow */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link
              href="/contact"
              className="relative flex items-center gap-2 rounded-full bg-das-accent px-5 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(230,57,70,0.5)] transition-all hover:bg-das-accent-dark hover:shadow-[0_0_30px_rgba(230,57,70,0.7)] hover:scale-110 active:scale-95"
            >
              {/* Animated phone icon */}
              <motion.svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </motion.svg>
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
