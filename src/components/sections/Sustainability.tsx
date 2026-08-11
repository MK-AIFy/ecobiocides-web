"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SUSTAINABILITY_STATS } from "@/lib/constants";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function AnimatedCounter({
  value,
  suffix,
  prefix,
  inView,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(() => (prefix ? value : 0));

  useEffect(() => {
    if (!inView) return;
    if (prefix) {
      return;
    }

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, value, prefix]);

  if (prefix) {
    return (
      <span className="text-4xl font-extrabold text-white font-display sm:text-5xl lg:text-6xl">
        {prefix}
      </span>
    );
  }

  return (
    <span className="text-4xl font-extrabold text-white font-display sm:text-5xl lg:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Sustainability() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src={`${basePath}/images/photos/green-plantation.jpg`}
          alt="Sustainable green landscape showing thriving ecosystem"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eco-950/90 via-eco-900/85 to-eco-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-eco-950/60 via-transparent to-eco-950/60" />
      </div>

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-eco-300 backdrop-blur-sm">
            Sustainability
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Protecting Ecosystems
            <br className="hidden sm:block" />
            <span className="text-gradient-light"> While Protecting People</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Every product we create is designed to work with nature, not against it.
            Our commitment to sustainability drives every decision we make.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {SUSTAINABILITY_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                inView={inView}
              />
              <p className="mt-2 text-sm font-medium text-white/60 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
