"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, Users, Microscope, ArrowRight } from "lucide-react";
import { TIMELINE, COMPANY } from "@/lib/constants";
import PageBanner from "@/components/ui/PageBanner";

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        badge="About Us"
        title="Pioneering Bio Agriculture Since 1991"
        subtitle="From a single neem oil mill to India's leading Azadirachtin manufacturer — our journey is built on science, quality, and environmental stewardship."
        backgroundImage="/images/about-banner.svg"
      />

      {/* Story Cards */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: "Scientific Excellence",
                description:
                  "State-of-the-art laboratory with imported analytical instruments ensuring every batch meets global purity standards.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Dedicated workforce of skilled chemists, agronomists, and manufacturing specialists focused on delivering excellence.",
              },
              {
                icon: Microscope,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control from raw neem kernel selection through extraction, formulation, and final product testing.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 text-eco-600">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Green field divider */}
          <div className="relative mb-20 h-48 overflow-hidden rounded-3xl sm:h-64">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/field-divider.svg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-eco-900/60 via-transparent to-eco-900/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center text-2xl font-bold text-white sm:text-3xl"
              >
                {COMPANY.experience}+ Years of Excellence
              </motion.p>
            </div>
          </div>

          {/* Founder Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-eco-800 via-eco-900 to-gray-900 p-8 text-white sm:p-12"
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Our Founder
                </span>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Mr. M. Karunakaran
                </h3>
                <p className="mt-1 text-sm font-medium text-eco-300">
                  Managing Director — {COMPANY.experience}+ Years in Neem
                  Industry
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  Starting with KARNA OIL MILL in 1991, Mr.
                  Karunakaran&apos;s vision transformed a local neem oil
                  business into a $10 million state-of-the-art Azadirachtin
                  manufacturing facility. Recognized twice by the Tamil Nadu
                  State Government for excellence, his commitment to organic
                  agriculture continues to drive Ecobiocides&apos; global
                  expansion.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: `${COMPANY.experience}+`,
                    label: "Years Experience",
                  },
                  { value: "$10M", label: "Facility Investment" },
                  { value: "2x", label: "Govt. Awards" },
                  { value: "4", label: "Certifications" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/5 p-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold text-eco-300 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center text-2xl font-bold text-gray-900"
            >
              Our Journey
            </motion.h3>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-4 top-0 h-full w-px bg-eco-200 sm:left-1/2" />

              {TIMELINE.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`relative mb-8 flex items-center ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
                      <div className="h-3 w-3 rounded-full bg-eco-500 ring-4 ring-eco-100" />
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-10 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                      }`}
                    >
                      <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5">
                        <span className="text-xs font-bold text-eco-600">
                          {item.year}
                        </span>
                        <h4 className="mt-1 text-base font-bold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-eco-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-eco-600/20 transition-all hover:bg-eco-700 hover:shadow-xl"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
