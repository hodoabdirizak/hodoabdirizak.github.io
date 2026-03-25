"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Global Solutions Team",
    role: "Junior Web Developer",
    period: "Jan 2024 \u2014 Aug 2024",
    location: "Toronto",
    bullets: [
      "Built ticket sales platforms for American Airlines, Fanatics, and Flying Blue, handling transactions for millions of users",
      "Delivered 6+ production Vue.js components with Vuex state management",
      "Drove frontend architecture decisions in cross-functional sprints",
    ],
  },
  {
    company: "GoDaddy",
    role: "SDE Intern",
    period: "May 2023 \u2014 Aug 2023",
    location: "Toronto",
    bullets: [
      "Enhanced internal dev tools used daily by 200+ engineers (React, TypeScript, Go)",
      "Resolved 8 critical UX bottlenecks in engineering workflows",
      "Owned 3 feature releases, presented to leadership, shaped Q3 roadmap",
    ],
  },
  {
    company: "TD Bank",
    role: "SWE Intern",
    period: "May 2022 \u2014 Aug 2022",
    location: "Toronto",
    bullets: [
      "Built features for self-serve Messaging Platform-as-a-Service",
      "Developed Spring Boot microservices with RESTful APIs",
      "Shipped Angular UI components in a regulated banking environment",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-dark overflow-hidden noise-overlay"
    >
      {/* Oversized background number */}
      <div className="absolute -left-8 -top-12 font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] leading-none text-white/[0.015] select-none pointer-events-none z-[2]">
        03
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <span className="font-sans text-xs tracking-[0.4em] uppercase text-burgundy-light mb-4 block">
                Experience
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
                Where I&apos;ve <span className="serif-italic text-dusty-rose">shipped</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-start-10 lg:col-span-3 flex items-end"
            >
              <div>
                <p className="font-serif text-lg text-white mb-1">
                  BSc Computer Science
                </p>
                <p className="font-sans text-white/30 text-sm">
                  Toronto Metropolitan University
                </p>
                <p className="font-sans text-white/20 text-xs mt-1">
                  2020 &mdash; 2025 &middot; Co-op &middot; Honours
                </p>
                <div className="mt-4 space-y-1">
                  <p className="font-sans text-white/40 text-xs">
                    Scotiabank Career Builder Award
                  </p>
                  <p className="font-sans text-white/40 text-xs">
                    Dean&apos;s List &middot; Multiple Semesters
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience items */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="border-t border-white/8 py-12 md:py-16 group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
              >
                {/* Left — company & meta */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-sans text-xs text-white/15 tracking-widest">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-dusty-rose transition-colors duration-500">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="font-sans text-sm tracking-[0.1em] uppercase text-burgundy-light/80 ml-8">
                    {exp.role}
                  </p>
                  <p className="font-sans text-xs text-white/25 mt-2 ml-8">
                    {exp.period} &middot; {exp.location}
                  </p>
                </div>

                {/* Right — bullets */}
                <div className="lg:col-start-6 lg:col-span-7">
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="font-sans text-base leading-relaxed text-white/45 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-3 before:h-[1px] before:bg-burgundy/40"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>

          {/* Leadership callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-start-7 lg:col-span-6">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/20 mb-4 block">
                Leadership
              </span>
              <p className="font-serif text-xl text-white">
                Women in Computer Science
              </p>
              <p className="font-sans text-white/35 text-sm mt-1">
                Co-President &amp; VP Outreach &middot; TMU
              </p>
              <p className="font-sans text-white/25 text-sm mt-3 leading-relaxed">
                Led executive team organizing events for 200+ students. Grew
                engagement 40% through targeted outreach.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
