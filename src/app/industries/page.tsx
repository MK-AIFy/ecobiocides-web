"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wheat,
  Leaf,
  TreePine,
  Flower2,
  Pill,
  Globe,
  ArrowRight,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import PageBanner from "@/components/ui/PageBanner";

const iconMap: Record<string, React.ElementType> = {
  wheat: Wheat,
  leaf: Leaf,
  trees: TreePine,
  flower2: Flower2,
  pill: Pill,
  globe: Globe,
};

export default function IndustriesPage() {
  return (
    <main>
      <PageBanner
        badge="Industries We Serve"
        title="Trusted Across Sectors"
        subtitle="From small-scale organic farms to large plantation estates — our bio solutions protect crops and livelihoods worldwide."
        backgroundImage="/images/industries-banner.svg"
      />

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-eco-200 hover:shadow-xl hover:shadow-eco-100/50 sm:p-8"
                >
                  {/* Background accent */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-eco-50/0 transition-all duration-700 group-hover:bg-eco-50/80 group-hover:scale-150" />

                  {/* Icon */}
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-eco-50 text-eco-600 transition-all duration-300 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/30">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="relative text-xl font-bold text-gray-900">
                    {industry.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-gray-600">
                    {industry.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-tl-3xl bg-eco-50/0 transition-all duration-500 group-hover:bg-eco-50" />
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-eco-800 via-eco-900 to-gray-900 p-8 text-center sm:p-12"
          >
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Serving Your Industry
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
              Whatever your agricultural or industrial need, we have the neem-based solution. Talk to our experts today.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-eco-800 transition-all hover:bg-eco-50 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
