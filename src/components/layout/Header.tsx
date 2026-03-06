"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24 lg:h-28">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3"
            >
              <div className="relative h-11 w-11 shrink-0 overflow-hidden sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
                <Image
                  src={`${basePath}/ecobiosides-logo.png`}
                  alt="Ecobiocides & Botanicals Pvt Ltd"
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 640px) 44px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                  priority
                />
              </div>
              <div className="hidden min-[520px]:block">
                <p className="text-sm font-bold leading-tight tracking-tight text-gray-900 sm:text-base lg:text-lg">
                  Ecobiocides <span className="text-eco-600">&</span> Botanicals
                </p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-[11px] lg:text-xs">
                  Pvt Ltd
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "text-eco-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-lg bg-eco-50"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phones[0]}`}
              className="hidden items-center gap-2 rounded-full bg-eco-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-eco-600/30 transition-all duration-300 hover:bg-eco-700 hover:shadow-xl hover:shadow-eco-600/40 sm:flex"
            >
              <Phone className="h-4 w-4" />
              Get Quote
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-200/50 lg:hidden"
          >
            <div className="glass space-y-1 px-4 pb-6 pt-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-eco-50 text-eco-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <a
                  href={`tel:${COMPANY.phones[0]}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-eco-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-eco-600/30"
                >
                  <Phone className="h-4 w-4" />
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
