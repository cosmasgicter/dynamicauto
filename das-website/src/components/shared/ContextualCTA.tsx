"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ContextualCTAProps {
  text: string;
  buttonText: string;
  href: string;
}

export default function ContextualCTA({ text, buttonText, href }: ContextualCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when sentinel is scrolled past (not intersecting from above)
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const show = visible && !dismissed;

  return (
    <>
      {/* Invisible sentinel placed at the midpoint of page content */}
      <div ref={sentinelRef} aria-hidden="true" className="h-0 w-0 overflow-hidden" />

      {/* Floating CTA bar */}
      <div
        className={`fixed left-0 right-0 z-30 transition-transform duration-300 ease-out bottom-0 tablet:bottom-0 ${
          show ? "translate-y-0 tablet:translate-y-0" : "translate-y-full"
        }`}
        style={{ bottom: "env(safe-area-inset-bottom, 0px)" }}
        role="complementary"
        aria-label="Contextual call to action"
      >
        {/* Offset above StickyMobileCTA on mobile */}
        <div className="mb-[56px] tablet:mb-0">
          <div className="bg-white/95 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
              <p className="text-sm font-medium text-das-navy tablet:text-base">
                {text}
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href={href}
                  className="whitespace-nowrap rounded-lg bg-das-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-das-accent-dark"
                >
                  {buttonText}
                </Link>
                <button
                  onClick={() => setDismissed(true)}
                  className="rounded-lg p-1.5 text-das-gray-500 transition-colors hover:bg-das-gray-100 hover:text-das-gray-700"
                  aria-label="Dismiss"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
