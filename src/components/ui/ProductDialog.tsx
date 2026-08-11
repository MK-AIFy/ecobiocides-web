"use client";

import { Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  X,
  Check,
  ChevronRight,
  FlaskConical,
  Droplets,
  Leaf,
  Sprout,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { Product } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  droplets: Droplets,
  leaf: Leaf,
  sprout: Sprout,
};

interface ProductDialogProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDialog({
  product,
  isOpen,
  onClose,
}: ProductDialogProps) {
  if (!product) return null;

  const Icon = iconMap[product.icon] || Leaf;
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello! I'd like to request a quote for ${product.title}.`)}`;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-[60]">
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        {/* Panel */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <DialogPanel className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-br from-eco-50 to-eco-100/50 px-6 pb-6 pt-8 sm:px-8">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-eco-600 text-white shadow-lg shadow-eco-600/30"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <div className="pr-8">
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        {product.title}
                      </DialogTitle>
                      <p className="mt-1 text-sm text-eco-700 font-medium">
                        Neem-Based Bio Solution
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6 sm:px-8">
                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-600">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                      Key Features
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 rounded-lg bg-gray-50 px-3 py-2.5 text-sm text-gray-700"
                        >
                          <Check className="h-4 w-4 shrink-0 text-eco-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Variants */}
                  {product.variants && product.variants.length > 0 && (
                    <div className="mt-6">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                        Available Variants
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.map((variant) => (
                          <span
                            key={variant}
                            className="rounded-full bg-eco-50 px-4 py-2 text-sm font-medium text-eco-700 ring-1 ring-eco-200 transition-colors hover:bg-eco-100"
                          >
                            {variant}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row">
                    <Link
                      href="/#contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-eco-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-eco-600/20 transition-all hover:bg-eco-700 hover:shadow-xl"
                    >
                      Request Quote
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-eco-200 hover:bg-eco-50"
                    >
                      WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
