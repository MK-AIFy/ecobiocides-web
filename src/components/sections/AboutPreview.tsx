"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY_STORY, AWARDS } from "@/lib/company-content";
import { FEATURED_AZAGRO_RANGE } from "@/lib/products";
import { COMPANY } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";

export default function AboutPreview() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src={mediaUrl("/media/factory/factory-aerial-campus.webp")}
            alt="Aerial view of the Ecobiocides manufacturing campus in Theni"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,44,28,.92)_0%,rgba(2,44,28,.77)_52%,rgba(2,44,28,.28)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-eco-950/55 via-transparent to-eco-950/20" />
        <div className="relative flex min-h-[30rem] items-center py-16 sm:min-h-[32rem] lg:min-h-[34rem]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                  Our Manufacturing Base
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Rooted in Karna Oil Mill. Growing through neem science.
                </h2>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70">
                  {COMPANY_STORY.expertise}
                </p>
                <Link
                  href="/about/"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-eco-800 transition-all hover:bg-eco-50 hover:shadow-lg hover:gap-3"
                >
                  Our story & facility
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
                  { value: String(FEATURED_AZAGRO_RANGE.length), label: "Azagro EC strengths" },
                  { value: String(AWARDS.length), label: "District awards" },
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
