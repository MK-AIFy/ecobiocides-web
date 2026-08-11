"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stories = [
  {
    badge: "The Problem",
    title: "Chemical Pesticides Are Destroying Our Ecosystems",
    description:
      "Conventional pest management relies on synthetic chemicals that contaminate soil, water, and food chains. These toxins harm beneficial organisms, degrade biodiversity, and leave persistent residues that endanger human health for generations.",
    image: `${basePath}/media/story/pest-spectrum.webp`,
    imageAlt: "Collage of common agricultural pests affecting crops",
    reverse: false,
  },
  {
    badge: "The Solution",
    title: "Nature Already Has the Answer",
    description:
      "The neem tree — Azadirachta indica — produces Azadirachtin, a powerful bioactive compound that controls over 400 insect species. It disrupts pest reproduction and feeding without harming beneficial insects, birds, or soil microbiomes. Completely biodegradable, leaving zero toxic residues.",
    image: `${basePath}/media/story/neem-shield.webp`,
    imageAlt: "Neem seedling represented inside a botanical protection shield",
    reverse: true,
  },
  {
    badge: "The Impact",
    title: "Protecting Crops While Preserving Nature",
    description:
      "Our solutions help farmers achieve higher yields with safer produce. By replacing synthetic chemicals with botanical alternatives, we protect pollinators, maintain soil health, and deliver food-grade safety — all while meeting the strictest international organic certification standards.",
    image: `${basePath}/media/story/indian-farmer.webp`,
    imageAlt: "Farmer working in healthy fields at sunrise",
    reverse: false,
  },
];

export default function EnvironmentalStory() {
  return (
    <section className="section-padding relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center lg:mb-24"
        >
          <span className="mb-4 inline-block rounded-full bg-eco-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-eco-700">
            Why Eco-Safe Matters
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            From Problem to Solution
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Understanding why sustainable pest management is not just better for the planet — it&apos;s better for business.
          </p>
        </motion.div>

        {/* Story blocks */}
        <div className="space-y-20 lg:space-y-32">
          {stories.map((story, index) => (
            <div
              key={story.badge}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                story.reverse ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={story.reverse ? fadeInRight : fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-eco-900/10 ${
                  story.reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Green accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-eco-900/20 via-transparent to-transparent" />
                {/* Step badge on image */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-eco-700 backdrop-blur-sm sm:left-6 sm:top-6">
                  0{index + 1}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={story.reverse ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={story.reverse ? "lg:order-1" : ""}
              >
                <span className="mb-3 inline-block rounded-full bg-eco-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-eco-700">
                  {story.badge}
                </span>
                <h3 className="font-display text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  {story.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8">
                  {story.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
