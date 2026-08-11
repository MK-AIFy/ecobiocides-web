"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TECHNOLOGY_POINTS } from "@/lib/constants";
import { Check } from "lucide-react";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function TechnologyScience() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface-secondary">
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-eco-900/10">
              <Image
                src={`${basePath}/media/story/manufacturing-process.webp`}
                alt="Neem extraction, formulation, quality control and packing process"
                fill
                className="bg-white object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-900/40 via-eco-900/10 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 z-10 rounded-2xl glass-premium p-5 shadow-xl sm:-right-8"
            >
              <p className="text-3xl font-extrabold text-eco-700 font-display">400+</p>
              <p className="text-sm font-medium text-gray-600">Insect Species Controlled</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="mb-4 inline-block rounded-full bg-eco-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-eco-700">
              Science &amp; Technology
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Backed by Science, Driven by Nature
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our products combine rigorous scientific research with the power of botanical compounds to deliver effective, environmentally responsible pest management.
            </p>

            <div className="mt-8 space-y-5">
              {TECHNOLOGY_POINTS.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-eco-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-eco-100 text-eco-600 transition-colors group-hover:bg-eco-600 group-hover:text-white">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
