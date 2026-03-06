"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="section-padding relative bg-gray-50 overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-eco-100/20 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-eco-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="Hear from agricultural professionals, researchers, and farm managers who rely on our bio solutions."
        />

        {/* Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Card */}
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50">
            {/* Gradient accent top line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-eco-400 via-eco-600 to-eco-400" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="px-8 py-10 sm:px-14 sm:py-12"
              >
                <div className="flex items-start justify-between">
                  {/* Quote icon */}
                  <Quote className="h-12 w-12 text-eco-100" />

                  {/* Industry badge */}
                  {TESTIMONIALS[current].industry && (
                    <span className="rounded-full bg-eco-50 px-3 py-1 text-xs font-semibold text-eco-700">
                      {TESTIMONIALS[current].industry}
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="mt-4 mb-5 flex gap-1">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4.5 w-4.5 fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>

                <blockquote className="text-xl leading-relaxed text-gray-700 sm:text-2xl sm:leading-relaxed">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>

                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-eco-500 to-eco-700 text-white font-bold text-lg shadow-lg shadow-eco-600/20">
                    {TESTIMONIALS[current].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {TESTIMONIALS[current].role},{" "}
                      {TESTIMONIALS[current].organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-eco-300 hover:text-eco-600 hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-10 bg-eco-600"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-eco-300 hover:text-eco-600 hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
