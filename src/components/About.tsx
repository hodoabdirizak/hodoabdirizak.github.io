"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "3", label: "Co-op terms" },
  { number: "3", label: "Enterprise companies" },
  { number: "M+", label: "Users impacted" },
  { number: "200+", label: "Students led" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream overflow-hidden">
      {/* Oversized background number */}
      <div className="absolute -right-20 top-0 font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] leading-none text-charcoal/[0.02] select-none pointer-events-none">
        01
      </div>

      {/* Top strip — burgundy accent bar */}
      <div className="h-1 bg-burgundy/20" />

      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric header — label left, title pushed right */}
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-0 mb-20 md:mb-28">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-burgundy"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl text-charcoal md:ml-auto"
            >
              Who I <span className="serif-italic">am</span>
            </motion.h2>
          </div>

          {/* Photo + Text — editorial magazine layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 md:mb-32">
            {/* Photo — offset with editorial framing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:row-span-2 relative"
            >
              <div className="relative">
                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-burgundy/20 z-0" />
                <div className="relative z-10 overflow-hidden bg-dusty-rose/20 aspect-[4/4.5]">
                  <Image
                    src="/hodo.jpg"
                    alt="Hodo Abdirizak"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover object-[center_15%] grayscale-[20%] contrast-[1.05]"
                    priority
                  />
                </div>
                {/* Photo caption — editorial style */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-6 md:mt-8 font-mono text-[10px] tracking-[0.3em] uppercase text-charcoal/30"
                >
                  Toronto, 2026
                </motion.p>
              </div>
            </motion.div>

            {/* Text columns — right side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-start-7 lg:col-span-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-charcoal/70">
                {`I'm Hodo — a software engineer who believes the best code serves
                people, not the other way around. With 3 co-op terms shipping
                production software at scale (from airline ticketing platforms to
                banking infrastructure), I bring a rare blend of technical depth
                and human-centered thinking to everything I build.`}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true }}
              className="lg:col-start-7 lg:col-span-5"
            >
              <p className="text-lg md:text-xl leading-relaxed text-charcoal/70">
                {`Currently based in Toronto but ready to go wherever the most
                interesting problems are. I've worked across the full stack —
                crafting polished UIs, designing resilient APIs, and collaborating
                with cross-functional teams to ship features that matter.`}
              </p>
            </motion.div>
          </div>

          {/* Stats — large editorial numbers with a divider line */}
          <div className="border-t border-charcoal/10 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`${
                    index > 0 ? "md:border-l md:border-charcoal/10 md:pl-8" : ""
                  }`}
                >
                  <span className="block font-serif text-6xl md:text-7xl text-burgundy leading-none">
                    {stat.number}
                  </span>
                  <span className="block mt-3 font-sans text-xs tracking-[0.2em] uppercase text-charcoal/40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
