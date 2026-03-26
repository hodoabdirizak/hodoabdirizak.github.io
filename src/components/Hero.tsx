"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end md:justify-end overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, #A67C6B 0%, #BFA08E 35%, #D9C4B4 100%)",
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

      {/* Desktop: photo absolute right */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute z-[2] md:right-[8%] lg:right-[12%] md:bottom-[10%] md:w-[35vw] lg:w-[28vw] md:max-w-[420px]"
      >
        <div className="relative">
          <div
            className="absolute -bottom-4 -right-4 w-full h-full border border-charcoal/10 z-0"
            style={{ borderRadius: "50% 50% 0 0 / 35% 35% 0 0" }}
          />
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-3 font-mono text-[9px] tracking-[0.3em] uppercase text-charcoal/40 text-right"
          >
            Toronto, 2026
          </motion.p>
        </div>
      </motion.div>

      {/* Mobile: photo + text grouped together, anchored to bottom */}
      <div className="md:hidden relative z-[2] mt-auto px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-[45vw] max-w-[200px] mb-6"
        >
          <div className="relative">
            <div
              className="absolute -bottom-2 -right-2 w-full h-full border border-charcoal/10 z-0"
              style={{ borderRadius: "50% 50% 0 0 / 35% 35% 0 0" }}
            />
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
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block font-sans text-[10px] tracking-[0.4em] uppercase text-[#2a2a2a] mb-3"
        >
          Software Engineer
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0f0f0f] italic font-normal leading-[0.85] tracking-[-0.02em] text-[clamp(2.8rem,10vw,14vw)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Hodo
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-1">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0f0f0f] italic font-normal leading-[0.85] tracking-[-0.02em] text-[clamp(2.8rem,10vw,14vw)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Abdirizak
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-baseline mt-5 border-t border-charcoal/15 pt-3 gap-y-2 gap-x-4"
        >
          <a
            href="mailto:hodo.abdirizak@torontomu.ca"
            className="font-sans text-[10px] text-charcoal/65 tracking-wide hover:text-charcoal transition-colors duration-300"
          >
            hodo.abdirizak@torontomu.ca
          </a>
          <span className="font-mono text-[10px] text-charcoal/50 tracking-[0.2em]">
            &copy;2026
          </span>
        </motion.div>
      </div>

      {/* Desktop: text at bottom left */}
      <div className="hidden md:block relative z-[3] px-12 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block font-sans text-xs tracking-[0.4em] uppercase text-[#2a2a2a] mb-8"
        >
          Software Engineer
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0f0f0f] italic font-normal leading-[0.85] tracking-[-0.02em] text-[clamp(2.8rem,10vw,14vw)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Hodo
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0f0f0f] italic font-normal leading-[0.85] tracking-[-0.02em] text-[clamp(2.8rem,10vw,14vw)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Abdirizak
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-baseline mt-10 pb-12 border-t border-charcoal/15 pt-4 gap-x-0 justify-between max-w-[45%]"
        >
          <a
            href="mailto:hodo.abdirizak@torontomu.ca"
            className="font-sans text-xs text-charcoal/65 tracking-wide hover:text-charcoal transition-colors duration-300"
          >
            hodo.abdirizak@torontomu.ca
          </a>
          <span className="font-sans text-xs text-charcoal/65 tracking-wide">
            Toronto, ON
          </span>
          <span className="font-mono text-xs text-charcoal/50 tracking-[0.2em]">
            &copy;2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
