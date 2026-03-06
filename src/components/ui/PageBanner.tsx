"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PageBanner({
  title,
  subtitle,
  badge,
  backgroundImage,
}: PageBannerProps) {
  const bgUrl = backgroundImage
    ? `${basePath}${backgroundImage}`
    : `${basePath}/images/hero-field.svg`;

  return (
    <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-eco-900 sm:min-h-[50vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-eco-950/90 via-eco-900/60 to-eco-800/30" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-36 sm:px-6 sm:pb-16 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
