"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Droplets,
  Leaf,
  Sprout,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS, COMPANY } from "@/lib/constants";
import type { Product } from "@/lib/constants";
import PageBanner from "@/components/ui/PageBanner";
import ProductDialog from "@/components/ui/ProductDialog";

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  droplets: Droplets,
  leaf: Leaf,
  sprout: Sprout,
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  return (
    <>
      <main>
        <PageBanner
          badge="Our Products"
          title="Neem-Based Bio Solutions"
          subtitle="Scientifically formulated, globally certified organic products for sustainable agriculture and crop protection."
          backgroundImage="/images/products-banner.svg"
        />

        {/* Products Grid */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {PRODUCTS.map((product, index) => {
                const Icon = iconMap[product.icon] || Leaf;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:border-eco-200 hover:shadow-xl hover:shadow-eco-100/50 hover:-translate-y-1">
                      {/* Green accent bar */}
                      <div className="h-1 bg-gradient-to-r from-eco-400 via-eco-500 to-eco-600" />

                      <div className="p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-eco-50 text-eco-600 transition-all duration-500 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/30">
                            <Icon className="h-7 w-7" />
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

                        {/* Features preview */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* View Details button */}
                        <button
                          onClick={() => openDialog(product as unknown as Product)}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-eco-50 px-5 py-2.5 text-sm font-semibold text-eco-700 transition-all hover:bg-eco-600 hover:text-white hover:shadow-lg hover:shadow-eco-600/20"
                        >
                          View Details
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Custom formulation CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-eco-800 via-eco-900 to-gray-900 p-8 text-center sm:p-12"
            >
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Need a Custom Formulation?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
                Our technical team can develop bespoke neem-based solutions tailored to your specific crop protection requirements.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-eco-800 transition-all hover:bg-eco-50 hover:shadow-lg"
                >
                  Contact Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'd like to discuss a custom formulation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ProductDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={closeDialog}
      />
    </>
  );
}
