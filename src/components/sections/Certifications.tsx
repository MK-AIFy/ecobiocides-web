"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2, FileCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const certIcons = [Shield, Award, FileCheck, CheckCircle2];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-eco-900 via-eco-800 to-gray-900"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
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
        <SectionHeading
          badge="Certifications & Compliance"
          title="Globally Certified Quality"
          subtitle="Our products meet the most stringent international standards for organic agriculture and quality management."
          light
        />

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
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-eco-400/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-400/10 text-eco-300 transition-all duration-300 group-hover:bg-eco-400/20 group-hover:text-eco-200">
                  <Icon className="h-6 w-6" />
                </div>

                <span className="mb-2 inline-block rounded-full bg-eco-400/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-eco-300">
                  {cert.category}
                </span>

                <h3 className="text-lg font-bold text-white">{cert.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-eco-300">
            Official Attestations
          </h3>
          <div className="space-y-3">
            {[
              "Approved Input for use in organic agriculture according to NPOP standard attested by Ecocert India Pvt. Ltd. (NPOP/NAB/002)",
              "Inspected by Ecocert SA F-32600, Input suitable for organic farming, Product Compliant Under NOP",
              "Inspected by Ecocert SA F-32600, Inputs suitable for use in Organic Farming, according to (EC) n° 834/2007 & 889/2008 Regulations",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco-400" />
                <p className="text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
