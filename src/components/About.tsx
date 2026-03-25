"use client";

import { motion } from "framer-motion";

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

          {/* Text — two-column editorial layout without photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 md:mb-32">
            {/* Left column — large intro text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-[1.3] tracking-[-0.01em]">
                {`I build software that serves people — not the other way around.`}
              </p>
            </motion.div>

            {/* Right column — body text */}
            <div className="lg:col-start-7 lg:col-span-6 space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-charcoal/70"
              >
                {`With 3 co-op terms shipping production software at scale — from
                airline ticketing platforms serving millions to banking
                infrastructure — I bring a rare blend of technical depth and
                human-centered thinking to everything I build.`}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-charcoal/70"
              >
                {`Based in Toronto. I've worked across the full stack — crafting
                polished UIs, designing resilient APIs, and collaborating with
                cross-functional teams to ship features that matter.`}
              </motion.p>
            </div>
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
