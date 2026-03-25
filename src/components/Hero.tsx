"use client";

import { motion } from "framer-motion";

const nameStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "clamp(3.5rem, 12vw, 14vw)",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ background: "linear-gradient(155deg, #C4A4A4 0%, #D4B8A0 35%, #E8D5C8 100%)" }}>
      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-charcoal italic font-normal leading-[0.9] tracking-[-0.01em]"
            style={nameStyle}
          >
            Hodo
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-1 md:-mt-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-charcoal italic font-normal leading-[0.9] tracking-[-0.01em]"
            style={nameStyle}
          >
            Abdirizak
          </motion.h1>
        </div>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-between items-baseline mt-6 md:mt-8 pb-10 md:pb-12 border-t border-charcoal/10 pt-4 gap-y-2"
        >
          <span className="font-sans text-[10px] md:text-xs text-charcoal/50 tracking-[0.2em] uppercase">
            Software Engineer
          </span>
          <a
            href="mailto:hodo.abdirizak@torontomu.ca"
            className="font-sans text-[10px] md:text-xs text-charcoal/50 tracking-wide hover:text-charcoal transition-colors duration-300"
          >
            hodo.abdirizak@torontomu.ca
          </a>
          <a
            href="https://hodoabdirizak.com"
            className="font-sans text-[10px] md:text-xs text-charcoal/50 tracking-wide hover:text-charcoal transition-colors duration-300 hidden md:block"
          >
            hodoabdirizak.com
          </a>
          <span className="font-sans text-[10px] md:text-xs text-charcoal/50 tracking-wide hidden lg:block">
            Toronto
          </span>
          <span className="font-mono text-[10px] md:text-xs text-charcoal/35 tracking-[0.2em]">
            &copy;2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
