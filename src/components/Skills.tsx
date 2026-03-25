"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Node.js",
      "FastAPI",
      "Spring Boot",
      "Prisma",
      "REST APIs",
      "WebSockets",
      "OAuth 2.0",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GCP",
      "CI/CD",
    ],
  },
  {
    title: "Tools & Methods",
    skills: ["Git", "Figma", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#E8EDE8" }}
    >
      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header — right-aligned for variety */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 md:mb-28 text-right"
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-burgundy mb-4 block">
              Toolkit
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal">
              Skills
            </h2>
          </motion.div>

          {/* Skills — horizontal rows with category labels */}
          <div className="space-y-12 md:space-y-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * catIndex }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline border-t border-charcoal/8 pt-8"
              >
                <h3 className="md:col-span-3 font-sans text-xs tracking-[0.3em] uppercase text-charcoal/30">
                  {category.title}
                </h3>
                <div className="md:col-span-9 font-serif text-xl md:text-2xl lg:text-3xl text-charcoal/70 leading-relaxed">
                  {category.skills.map((skill, i) => (
                    <span key={skill}>
                      <span className="hover:text-burgundy transition-colors duration-300 cursor-default">
                        {skill}
                      </span>
                      {i < category.skills.length - 1 && (
                        <span className="text-charcoal/15 mx-2 md:mx-3">
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
