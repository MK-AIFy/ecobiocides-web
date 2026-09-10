import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl("/certifications/") },
  title: "Awards and Certifications",
  description: "View the original 2007–08 and 2008–09 District Best Entrepreneur award certificates and Ecobiocides quality and organic-input documentation.",
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
