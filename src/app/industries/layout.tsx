import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl("/industries/") },
  title: "Manufacturing, People and Industries",
  description: "Explore our neem manufacturing operations, seven core strengths, research, skilled workforce and capabilities for domestic and international markets.",
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
