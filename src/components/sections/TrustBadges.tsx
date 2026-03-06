"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  HeartPulse,
  UtensilsCrossed,
  Factory,
  Building2,
  Home,
  Leaf,
  Pill,
  Shield,
  Award,
  BadgeCheck,
  Globe,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const industries = [
  { label: "Agriculture", Icon: Wheat },
  { label: "Healthcare", Icon: HeartPulse },
  { label: "Food Processing", Icon: UtensilsCrossed },
  { label: "Industrial", Icon: Factory },
  { label: "Commercial", Icon: Building2 },
  { label: "Residential", Icon: Home },
  { label: "Organic Farming", Icon: Leaf },
  { label: "Pharmaceuticals", Icon: Pill },
];

const trustIndicators = [
  { icon: Shield, label: "ISO 9001 Certified", value: "Quality" },
  { icon: BadgeCheck, label: "Ecocert Organic", value: "Organic" },
  { icon: Award, label: `${COMPANY.experience}+ Years`, value: "Experience" },
  { icon: Globe, label: "Global Exports", value: "Reach" },
];

export default function TrustBadges() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-surface-secondary py-12 sm:py-16">
      {/* Trust indicators row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        >
          {trustIndicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-eco-50 text-eco-600">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-500">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries served — scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            Industries We Protect
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-secondary to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-secondary to-transparent" />

            <div className="flex animate-marquee gap-8">
              {/* Duplicate for seamless loop */}
              {[...industries, ...industries].map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="flex shrink-0 items-center gap-2.5 rounded-full border border-gray-100 bg-white px-5 py-2.5 shadow-sm"
                >
                  <item.Icon className="h-4 w-4 text-eco-600" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
