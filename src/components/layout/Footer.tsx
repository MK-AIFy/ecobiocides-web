"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* Back to top */}
      <div className="flex justify-center">
        <button
          onClick={scrollToTop}
          className="-mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-eco-600 text-white shadow-lg shadow-eco-600/30 transition-all hover:-translate-y-1 hover:bg-eco-700 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <Image
                  src={`${basePath}/ecobiosides-logo.png`}
                  alt="Ecobiocides & Botanicals Pvt Ltd"
                  fill
                  className="object-cover object-left brightness-0 invert"
                  sizes="(max-width: 640px) 44px, (max-width: 1024px) 48px, 56px"
                />
              </div>
              <div>
                <p className="text-base font-bold leading-tight text-white sm:text-lg">
                  Ecobiocides <span className="text-eco-400">&</span> Botanicals
                </p>
                <p className="text-[11px] font-medium uppercase tracking-widest text-gray-500 sm:text-xs">
                  Pvt Ltd
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {COMPANY.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-eco-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                "Azadirachtin Technical",
                "Azagro EC Formulations",
                "Cold Pressed Neem Oil",
                "Neem Cake",
                "Neem Kernel Cake",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-sm text-gray-400 transition-colors hover:text-eco-400"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-eco-400" />
                <span className="text-sm text-gray-400">
                  {COMPANY.address.street}, {COMPANY.address.city} –{" "}
                  {COMPANY.address.zip}, {COMPANY.address.state},{" "}
                  {COMPANY.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-eco-400" />
                <div className="space-y-1">
                  {COMPANY.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-sm text-gray-400 transition-colors hover:text-eco-400"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-eco-400" />
                <a
                  href={`mailto:${COMPANY.emails[0]}`}
                  className="text-sm text-gray-400 transition-colors hover:text-eco-400"
                >
                  {COMPANY.emails[0]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={COMPANY.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-eco-400"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={COMPANY.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-eco-400"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={COMPANY.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-eco-400"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
