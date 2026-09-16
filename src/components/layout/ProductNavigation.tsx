"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ProductMenu from "@/components/ui/ProductMenu";

export default function ProductNavigation({ mobile = false, active = false, onNavigate }: { mobile?: boolean; active?: boolean; onNavigate?: () => void }) {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details ref={menu} className="relative" onKeyDown={(event) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
        event.stopPropagation();
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
    }}>
      <summary className={`flex cursor-pointer list-none items-center justify-between gap-2 rounded-lg font-medium [&::-webkit-details-marker]:hidden ${mobile ? "px-4 py-3 text-base" : "px-3 py-2 text-sm"} ${active ? "bg-eco-50 text-eco-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>Products <ChevronDown aria-hidden="true" className="h-4 w-4" /></summary>
      <div className={`${mobile ? "mt-2" : "absolute left-0 top-full mt-3 w-80 shadow-xl"} max-h-[60vh] overflow-y-auto rounded-2xl border border-emerald-100 bg-white p-3`} onClick={(event) => {
        if ((event.target as Element).closest("a")) {
          if (menu.current) menu.current.open = false;
          onNavigate?.();
        }
      }}>
        <Link href="/products/" className="mb-2 block rounded-xl bg-emerald-900 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-800">View all products</Link>
        <ProductMenu />
      </div>
    </details>
  );
}
