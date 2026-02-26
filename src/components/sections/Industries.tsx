"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Leaf,
  TreePine,
  Flower2,
  Pill,
  Globe,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  wheat: Wheat,
  leaf: Leaf,
  trees: TreePine,
  flower2: Flower2,
  pill: Pill,
  globe: Globe,
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-padding relative bg-gray-50/50"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-eco-100/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-eco-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industries We Serve"
          title="Trusted Across Sectors"
          subtitle="From small-scale organic farms to large plantation estates — our bio solutions protect crops and livelihoods worldwide."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Leaf;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-eco-200 hover:shadow-lg hover:shadow-eco-100/50 sm:p-8"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 text-eco-600 transition-all duration-300 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/30">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-tl-3xl bg-eco-50/0 transition-all duration-500 group-hover:bg-eco-50" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
