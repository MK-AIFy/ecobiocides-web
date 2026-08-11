"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { mediaUrl } from "@/lib/media";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage: string;
  imagePosition?: string;
  highlights?: readonly string[];
}

export default function PageBanner({
  title,
  subtitle,
  badge,
  backgroundImage,
  imagePosition = "center",
  highlights = [],
}: PageBannerProps) {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-emerald-950 pt-24 text-white sm:pt-28">
      <Image
        src={mediaUrl(backgroundImage)}
        alt=""
        fill
        priority
        loading="eager"
        fetchPriority="high"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,35,22,.96)_0%,rgba(2,35,22,.87)_48%,rgba(2,35,22,.34)_78%,rgba(2,35,22,.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/20" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-lime-300/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          {badge && <p className="eyebrow text-lime-300">{badge}</p>}
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              {subtitle}
            </p>
          )}
          {highlights.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <span key={highlight} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/85 backdrop-blur-md">
                  <CheckCircle2 className="h-4 w-4 text-lime-300" />
                  {highlight}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
