"use client";

import { motion } from "framer-motion";
import SiteLoader from "@/components/layout/SiteLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteLoader />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.08, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
