import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ecobiocides",
  description: "Discover Ecobiocides' journey from neem-oil manufacturing to an integrated botanical crop-protection and agricultural-input company.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
