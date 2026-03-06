"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Droplets,
  Leaf,
  Sprout,
  ArrowRight,
  Check,
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  droplets: Droplets,
  leaf: Leaf,
  sprout: Sprout,
};

export default function ProductsPreview() {
  return (
    <section id="products" className="section-padding relative bg-white overflow-hidden">
      {/* Subtle gradient mesh */}
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Products"
          title="Neem-Based Bio Solutions"
          subtitle="Scientifically formulated, globally certified organic products for sustainable agriculture."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon] || Leaf;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm card-hover hover:border-eco-200"
              >
                {/* Hover accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-eco-400 via-eco-500 to-eco-600 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 text-eco-600 transition-all duration-500 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/25">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {product.shortDescription}
                </p>

                {/* Hover-reveal features */}
                <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    {product.features.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="h-3 w-3 shrink-0 text-eco-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-eco-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-eco-600/20 transition-all hover:bg-eco-700 hover:shadow-xl hover:shadow-eco-600/30"
          >
            Explore All Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
