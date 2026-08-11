"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 620);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f7f5ec]"
          role="status"
          aria-live="polite"
          aria-label="Loading Ecobiocides"
        >
          <div className="relative flex flex-col items-center">
            <div className="absolute h-32 w-32 rounded-full bg-lime-300/25 blur-3xl" />
            <motion.div
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 0.9, ease: "linear", repeat: Infinity }}
              className="relative h-20 w-20 overflow-hidden rounded-full border border-emerald-100 bg-white p-2 shadow-2xl shadow-emerald-950/15"
            >
              <Image
                src={`${basePath}/ecobiosides-logo.png`}
                alt=""
                fill
                priority
                className="object-cover object-left"
                sizes="80px"
              />
            </motion.div>
            <p className="relative mt-5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-emerald-900">
              Ecobiocides &amp; Botanicals
            </p>
          </div>
          <span className="sr-only">Loading page</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
