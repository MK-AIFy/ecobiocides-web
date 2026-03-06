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
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  wheat: Wheat,
  leaf: Leaf,
  trees: TreePine,
  flower2: Flower2,
  pill: Pill,
  globe: Globe,
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function IndustriesPreview() {
  return (
    <section
      id="industries"
      className="section-padding relative bg-gray-50/50 overflow-hidden"
    >
      {/* Field background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{
            backgroundImage: `url('${basePath}/images/industries-banner.svg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/60 to-gray-50/90" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-eco-100/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-eco-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industries We Serve"
          title="Trusted Across Sectors"
          subtitle="From organic farms to large plantation estates — our bio solutions protect crops worldwide."
        />

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Leaf;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-eco-200 hover:shadow-lg"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 text-eco-600 transition-all duration-300 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                  {industry.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-eco-600 transition-all hover:text-eco-700 hover:gap-3"
          >
            See All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
