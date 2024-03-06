"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0, scale: 0.8, rotate: -30 }}
    animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
