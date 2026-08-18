import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ecobiocides",
  description: "Explore Ecobiocides' original Theni factory, botanical processing infrastructure, quality-control laboratory and journey from neem-oil manufacturing to integrated crop protection.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
