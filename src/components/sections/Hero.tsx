"use client";

import { motion } from "framer-motion";
import { COMPANY, STATS } from "@/lib/constants";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Shield,
  Leaf,
  Award,
  ChevronDown,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'd like to request a consultation about your eco-safe solutions.")}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface"
    >
      {/* Cinematic background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={`${basePath}/images/photos/hero-field.jpg`}
          alt="Lush green agricultural field under clear sky"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 lg:from-white/92 lg:via-white/75 lg:to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
      </div>

      {/* Animated gradient mesh overlay */}
      <div className="pointer-events-none absolute inset-0 gradient-mesh-animated" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(14,150,72,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,150,72,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 md:pt-40 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl lg:max-w-xl"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-eco-200/60 bg-eco-50/60 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-eco-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-eco-500" />
              </span>
              <span className="text-sm font-medium text-eco-800">
                ISO 9001 &amp; Ecocert Certified
              </span>
            </motion.div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Eco-Safe Protection for{" "}
              <span className="text-gradient">Modern Environments</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl sm:leading-8">
              Advanced pest management powered by sustainable science.{" "}
              {COMPANY.experience}+ years of pioneering organic crop protection
              with globally certified bio solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2.5 rounded-full bg-eco-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-eco-600/25 transition-all hover:bg-eco-700 hover:shadow-xl hover:shadow-eco-600/35"
              >
                Get Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2.5 rounded-full border-2 border-gray-200 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:border-eco-300 hover:bg-white hover:text-eco-700"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                WhatsApp Chat
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-eco-600" />
                <span>ISO Certified</span>
              </div>
              <div className="hidden h-4 w-px bg-gray-200 sm:block" />
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-eco-600" />
                <span>100% Organic</span>
              </div>
              <div className="hidden h-4 w-px bg-gray-200 sm:block" />
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-eco-600" />
                <span>Govt. Awarded</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[480px]">
              {/* Decorative glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-eco-400/10 blur-[100px]" />

              {/* Stats cards - glassmorphism floating */}
              {STATS.map((stat, index) => {
                const positions = [
                  "top-0 left-4",
                  "top-8 right-0",
                  "bottom-16 left-0",
                  "bottom-0 right-8",
                ];
                const delays = [0.5, 0.65, 0.8, 0.95];

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: delays[index],
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={`absolute ${positions[index]} w-48`}
                  >
                    <div
                      className="glass-premium rounded-2xl p-5 shadow-lg shadow-black/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                      style={{
                        animation: `float-subtle ${4 + index * 0.5}s ease-in-out ${index * 0.3}s infinite`,
                      }}
                    >
                      <p className="text-3xl font-extrabold text-eco-700 font-display">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Central accent image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 overflow-hidden rounded-3xl border border-eco-200/40 shadow-xl">
                <Image
                  src={`${basePath}/images/photos/neem-leaves.jpg`}
                  alt="Neem leaves — the source of eco-safe bio protection"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-eco-900/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="/#products"
          className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-eco-600"
          aria-label="Scroll to explore"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-5 w-5 animate-scroll-indicator" />
        </a>
      </motion.div>
    </section>
  );
}
