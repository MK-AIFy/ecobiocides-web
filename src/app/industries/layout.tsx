import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Botanical crop-protection and agricultural-input solutions for farming, plantations, formulation, storage and global supply markets.",
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
