import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl("/about/") },
  title: "About Ecobiocides",
  description: "Discover Karna Oil Mill, founder M. Karunakaran, our neem expertise, USD 10 million Azadirachtin facility and vision for sustainable agriculture.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
