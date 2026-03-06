"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Award, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const certIcons = [Shield, Award, FileCheck, CheckCircle2];

export default function CertificationsPreview() {
  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-eco-900 via-eco-800 to-gray-900"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
          style={{
            backgroundImage: `url('${basePath}/images/certifications-banner.svg')`,
          }}
        />
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-eco-400/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-eco-400/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
            Certifications
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Globally Certified Quality
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = certIcons[index % certIcons.length];

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-eco-400/30 hover:bg-white/10"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-400/10 text-eco-300 transition-all duration-300 group-hover:bg-eco-400/20 group-hover:text-eco-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-center text-sm font-bold text-white">
                  {cert.title}
                </h3>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-eco-300">
                  {cert.category}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:gap-3"
          >
            View All Certifications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
