"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Award, CheckCircle2, FileCheck, ArrowRight } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";
import PageBanner from "@/components/ui/PageBanner";

const certIcons = [Shield, Award, FileCheck, CheckCircle2];

export default function CertificationsPage() {
  return (
    <main>
      <PageBanner
        badge="Certifications & Compliance"
        title="Globally Certified Quality"
        subtitle="Our products meet the most stringent international standards for organic agriculture and quality management."
        backgroundImage="/images/certifications-banner.svg"
      />

      {/* Certifications Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((cert, index) => {
              const Icon = certIcons[index % certIcons.length];

              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-eco-200 hover:shadow-xl hover:shadow-eco-100/50"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-eco-50 text-eco-600 transition-all duration-300 group-hover:bg-eco-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-eco-600/30">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="mb-2 inline-block rounded-full bg-eco-50 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-eco-700">
                    {cert.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Official Attestations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-eco-900 via-eco-800 to-gray-900 p-8 sm:p-12"
          >
            <h3 className="mb-6 text-lg font-semibold uppercase tracking-wider text-eco-300">
              Official Attestations
            </h3>
            <div className="space-y-4">
              {[
                "Approved Input for use in organic agriculture according to NPOP standard attested by Ecocert India Pvt. Ltd. (NPOP/NAB/002)",
                "Inspected by Ecocert SA F-32600, Input suitable for organic farming, Product Compliant Under NOP",
                "Inspected by Ecocert SA F-32600, Inputs suitable for use in Organic Farming, according to (EC) n° 834/2007 & 889/2008 Regulations",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco-400" />
                  <p className="text-sm leading-relaxed text-white/80">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-eco-800 transition-all hover:bg-eco-50 hover:shadow-lg"
              >
                Request Certification Documents
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
