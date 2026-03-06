"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AboutPreview() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Green field background image strip */}
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center bg-fixed sm:h-80"
          style={{
            backgroundImage: `url('${basePath}/images/field-divider.svg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eco-900/70 via-eco-900/50 to-eco-900/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                  About Us
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Pioneering Bio Agriculture Since 1991
                </h2>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70">
                  From a single neem oil mill to India&apos;s leading Azadirachtin
                  manufacturer — {COMPANY.experience}+ years of science, quality,
                  and environmental stewardship.
                </p>
                <Link
                  href="/about"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-eco-800 transition-all hover:bg-eco-50 hover:shadow-lg hover:gap-3"
                >
                  Learn Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:grid grid-cols-2 gap-3"
              >
                {[
                  { value: `${COMPANY.experience}+`, label: "Years" },
                  { value: "$10M", label: "Investment" },
                  { value: "400+", label: "Insects" },
                  { value: "4", label: "Certifications" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold text-eco-300">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
