"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Droplets,
  Leaf,
  Sprout,
  ChevronRight,
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

export default function Products() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  return (
    <section id="products" className="section-padding relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Products"
          title="Neem-Based Bio Solutions"
          subtitle="Scientifically formulated, globally certified organic products for sustainable agriculture and crop protection."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon] || Leaf;
            const isExpanded = expandedProduct === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isExpanded
                      ? "border-eco-200 bg-eco-50/50 shadow-xl shadow-eco-200/30"
                      : "border-gray-100 bg-white shadow-sm hover:border-eco-200 hover:shadow-lg hover:shadow-eco-100/50"
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                          isExpanded
                            ? "bg-eco-600 text-white shadow-lg shadow-eco-600/30"
                            : "bg-eco-50 text-eco-600 group-hover:bg-eco-100"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Expand toggle */}
                    <button
                      onClick={() =>
                        setExpandedProduct(isExpanded ? null : product.id)
                      }
                      className="mt-4 flex items-center gap-1 text-sm font-semibold text-eco-600 transition-colors hover:text-eco-700"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Show less" : "Learn more"}
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-eco-100 px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
                          <p className="text-sm leading-relaxed text-gray-600">
                            {product.description}
                          </p>

                          {/* Features */}
                          <ul className="mt-4 space-y-2">
                            {product.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                <Check className="h-4 w-4 shrink-0 text-eco-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* Variants */}
                          {"variants" in product && product.variants && (
                            <div className="mt-4">
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Available Variants
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {product.variants.map((variant) => (
                                  <span
                                    key={variant}
                                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-eco-700 ring-1 ring-eco-200"
                                  >
                                    {variant}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-eco-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-eco-600/20 transition-all hover:bg-eco-700"
                          >
                            Request Quote
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Need a custom formulation or bulk order?{" "}
            <a
              href="#contact"
              className="font-semibold text-eco-600 underline decoration-eco-300 underline-offset-2 hover:text-eco-700"
            >
              Contact our technical team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
