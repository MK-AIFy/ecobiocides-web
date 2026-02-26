"use client";

import { motion } from "framer-motion";
import { COMPANY, STATS } from "@/lib/constants";
import {
  ArrowRight,
  MessageCircle,
  Shield,
  Leaf,
  Award,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'd like to request a quote for your products.")}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-eco-50/30"
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-eco-200/30 blur-3xl" />
        <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-eco-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-earth-200/20 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, #16a34a 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-eco-200 bg-eco-50/80 px-4 py-2"
            >
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-eco-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-eco-500" />
              </span>
              <span className="text-sm font-medium text-eco-800">
                ISO 9001 & Ecocert Certified
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Nature&apos;s Science,{" "}
              <span className="text-gradient">Engineered</span> for
              Agriculture
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              India&apos;s premier manufacturer of neem-based bio pesticides.
              Over {COMPANY.experience} years of pioneering sustainable crop
              protection with globally certified organic solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 rounded-full bg-eco-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-eco-600/30 transition-all hover:bg-eco-700 hover:shadow-xl hover:shadow-eco-600/40"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-eco-300 hover:text-eco-700"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                WhatsApp Us
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-eco-600" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-eco-600" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-eco-600" />
                <span>Govt. Awarded</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main visual card */}
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 animate-[spin_30s_linear_infinite] rounded-full border border-eco-200/30" />
              <div className="absolute -inset-8 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-eco-100/20" />

              {/* Central visual */}
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-eco-600 via-eco-700 to-eco-900 p-1 shadow-2xl shadow-eco-900/30">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[20px] bg-gradient-to-br from-eco-600 via-eco-700 to-eco-900 p-8 text-center text-white">
                  {/* Neem leaf icon */}
                  <svg
                    viewBox="0 0 120 120"
                    fill="none"
                    className="mb-6 h-24 w-24 opacity-90"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="55"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.15"
                    />
                    <path
                      d="M60 25C60 25 45 45 45 60C45 75 52 85 60 95C68 85 75 75 75 60C75 45 60 25 60 25Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M60 35C60 35 50 50 50 60C50 70 55 78 60 85C65 78 70 70 70 60C70 50 60 35 60 35Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <line
                      x1="60"
                      y1="40"
                      x2="60"
                      y2="80"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                  </svg>

                  <h3 className="text-2xl font-bold">
                    {COMPANY.experience}+ Years
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
                    Of Scientific Excellence
                  </p>
                  <div className="mt-6 h-px w-16 bg-white/20" />
                  <p className="mt-4 text-base font-medium text-white/80">
                    Neem-Based Bio Solutions
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Protecting Crops, Preserving Nature
                  </p>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-8 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
              >
                <p className="text-2xl font-bold text-eco-600">400+</p>
                <p className="text-xs font-medium text-gray-500">
                  Insects Controlled
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-6 bottom-20 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
              >
                <p className="text-2xl font-bold text-eco-600">$10M</p>
                <p className="text-xs font-medium text-gray-500">
                  Facility Investment
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-lg shadow-gray-100/50 backdrop-blur-sm sm:grid-cols-4 sm:gap-8 sm:p-8"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
