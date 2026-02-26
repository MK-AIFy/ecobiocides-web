"use client";

import { motion } from "framer-motion";
import { TIMELINE, COMPANY } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { FlaskConical, Users, Microscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title="Pioneering Bio Agriculture Since 1991"
          subtitle="From a single neem oil mill to India's leading Azadirachtin manufacturer — our journey is built on science, quality, and environmental stewardship."
        />

        {/* Story Cards */}
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
              className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 text-eco-600">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
            </motion.div>
          ))}
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
                Managing Director — {COMPANY.experience}+ Years in Neem Industry
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Starting with KARNA OIL MILL in 1991, Mr. Karunakaran&apos;s vision
                transformed a local neem oil business into a $10 million
                state-of-the-art Azadirachtin manufacturing facility. Recognized
                twice by the Tamil Nadu State Government for excellence, his
                commitment to organic agriculture continues to drive
                Ecobiocides&apos; global expansion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${COMPANY.experience}+`, label: "Years Experience" },
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
                    isLeft
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
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
      </div>
    </section>
  );
}
