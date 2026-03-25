"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const nameStyle = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "clamp(3.5rem, 12vw, 14vw)",
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, #C4A4A4 0%, #D4B8A0 35%, #E8D5C8 100%)",
      }}
    >
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Photo — editorial placement, right-aligned */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[5%] md:right-[8%] lg:right-[12%] bottom-[12%] md:bottom-[10%] w-[55vw] md:w-[35vw] lg:w-[28vw] max-w-[420px] z-[2]"
      >
        <div className="relative">
          {/* Decorative offset frame — arch top, flat bottom */}
          <div
            className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border border-charcoal/10 z-0"
            style={{ borderRadius: "50% 50% 0 0 / 35% 35% 0 0" }}
          />
          {/* Photo container — rounded arch top, flat bottom */}
          <div
            className="relative z-10 overflow-hidden"
            style={{ borderRadius: "50% 50% 0 0 / 35% 35% 0 0" }}
          >
            <Image
              src="/hodo.jpg"
              alt="Hodo Abdirizak"
              width={420}
              height={560}
              className="w-full h-auto object-cover grayscale-[15%] contrast-[1.05]"
              priority
            />
          </div>
          {/* Photo caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-3 font-mono text-[9px] tracking-[0.3em] uppercase text-charcoal/25 text-right"
          >
            Toronto, 2026
          </motion.p>
        </div>
      </motion.div>

      {/* Name — oversized, overlaps with photo for depth */}
      <div className="relative z-[3] px-6 md:px-12 lg:px-16">
        {/* Role label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-charcoal/40 mb-6 md:mb-8"
        >
          Software Engineer
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-charcoal italic font-normal leading-[0.85] tracking-[-0.02em]"
            style={nameStyle}
          >
            Hodo
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-1 md:-mt-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-charcoal italic font-normal leading-[0.85] tracking-[-0.02em]"
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
          className="flex flex-wrap items-baseline mt-8 md:mt-10 pb-8 md:pb-12 border-t border-charcoal/8 pt-4 gap-y-2 gap-x-6 md:gap-x-0 md:justify-between max-w-[55%] md:max-w-[45%]"
        >
          <a
            href="mailto:hodo.abdirizak@torontomu.ca"
            className="font-sans text-[10px] md:text-xs text-charcoal/40 tracking-wide hover:text-charcoal transition-colors duration-300"
          >
            hodo.abdirizak@torontomu.ca
          </a>
          <span className="font-sans text-[10px] md:text-xs text-charcoal/40 tracking-wide hidden md:block">
            Toronto, ON
          </span>
          <span className="font-mono text-[10px] md:text-xs text-charcoal/25 tracking-[0.2em]">
            &copy;2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
