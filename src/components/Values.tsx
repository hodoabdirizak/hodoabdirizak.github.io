"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "User Empathy First",
    description:
      "Every line of code I write has a person on the other end. I start with the user\u2019s frustration, not the technical spec. At GoDaddy, I audited 8 UX bottlenecks by shadowing engineers in their daily workflows \u2014 because you can\u2019t fix what you don\u2019t feel.",
  },
  {
    number: "02",
    title: "Build to Last, Ship to Learn",
    description:
      "I care about clean architecture and thoughtful abstractions, but not at the expense of momentum. The best systems are the ones that ship, get feedback, and evolve. I\u2019ve shipped production code at TD Bank, GoDaddy, and Global Solutions \u2014 always under real deadlines, always with real users.",
  },
  {
    number: "03",
    title: "Lift as You Climb",
    description:
      "As Co-President of Women in CS at TMU, I organized events for 200+ students and grew engagement by 40%. Tech is better when more people have a seat at the table \u2014 I actively work to make that happen.",
  },
  {
    number: "04",
    title: "Craft Over Cleverness",
    description:
      "I\u2019d rather write clear, maintainable code that a new team member can understand in 10 minutes than clever code that impresses for 10 seconds. Readability is a feature.",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F2E8E4" }}
    >
      {/* Oversized background number */}
      <div className="absolute -left-16 -bottom-20 font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] leading-none text-charcoal/[0.02] select-none pointer-events-none">
        02
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header — editorial split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="font-sans text-xs tracking-[0.4em] uppercase text-burgundy mb-4 block">
                Philosophy
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[0.9]">
                Values &<br />
                <span className="serif-italic">Philosophy</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-start-9 lg:col-span-4 flex items-end"
            >
              <p className="font-sans text-base text-charcoal/50 leading-relaxed">
                The principles that guide how I write code, collaborate with
                teams, and think about the people on the other side of the
                screen.
              </p>
            </motion.div>
          </div>

          {/* Values — alternating left/right editorial layout */}
          <div className="space-y-0">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="border-t border-charcoal/10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 group"
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-sans text-sm text-charcoal/20 tracking-widest">
                    {value.number}
                  </span>
                </div>

                {/* Title — alternates alignment */}
                <div
                  className={`lg:col-span-4 ${
                    index % 2 === 0 ? "" : "lg:col-start-2"
                  }`}
                >
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal group-hover:text-burgundy transition-colors duration-500">
                    {value.title}
                  </h3>
                </div>

                {/* Description — offset */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "lg:col-start-7 lg:col-span-6"
                      : "lg:col-start-7 lg:col-span-5"
                  }`}
                >
                  <p className="font-sans text-base leading-relaxed text-charcoal/55">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
