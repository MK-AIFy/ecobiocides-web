"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Droplets,
  Leaf,
  Sprout,
  ArrowRight,
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
    <section id="products" className="section-padding relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-eco-200 hover:shadow-xl hover:shadow-eco-100/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 text-eco-600 transition-all duration-300 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {product.shortDescription}
                </p>
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
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-eco-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-eco-600/20 transition-all hover:bg-eco-700 hover:shadow-xl hover:gap-3"
          >
            Explore All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
