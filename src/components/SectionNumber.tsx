"use client";

import { motion } from "framer-motion";

interface SectionNumberProps {
  number: string;
  light?: boolean;
}

export default function SectionNumber({
  number,
  light = false,
}: SectionNumberProps) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`absolute top-8 left-8 font-sans text-sm tracking-widest ${
        light ? "text-white/30" : "text-charcoal/20"
      }`}
    >
      {number}
    </motion.span>
  );
}
