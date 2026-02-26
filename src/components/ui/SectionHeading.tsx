"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span
          className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light
              ? "bg-white/10 text-white/80"
              : "bg-eco-50 text-eco-700"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
