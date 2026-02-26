"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS, IMAGE_ASSETS } from "@/lib/constants";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import MobileDrawer from "@/components/layout/MobileDrawer";

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 tablet:px-6">
        {/* Animated Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <ImageWithFallback
              src={IMAGE_ASSETS.logo}
              alt="DAS - Dynamic Automotive Solutions"
              width={180}
              height={72}
              className="h-12 w-auto object-contain tablet:h-14 desktop:h-16"
              sizes="180px"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 tablet:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-das-navy/70 transition-colors hover:text-das-navy"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-das-navy tablet:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
