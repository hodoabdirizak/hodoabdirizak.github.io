"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Spectator",
    subtitle: "Browser Session Replay Engine",
    description:
      "A DVR for web sessions. Records the DOM and streams every user interaction over WebSocket, then replays it frame-perfectly with click heatmaps, conversion funnels, and live spectating. Built from scratch — TypeScript SDK, Go server, React player.",
    tech: [
      "TypeScript",
      "Go",
      "React 19",
      "WebSockets",
      "PostgreSQL",
      "Docker",
      "Fly.io",
    ],
    github: "https://github.com/hodoabdirizak/spectator",
    live: "https://spectator-player.vercel.app",
    accent: "#2A4A7A",
  },
  {
    title: "IntelliApply",
    subtitle: "AI-Powered Job Application Tracker",
    description:
      "Track applications, analyze resume-job fit with AI, and generate tailored cover letters. All in one clean interface.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Claude API",
    ],
    github: "https://github.com/hodoabdirizak/intelliapply",
    live: "https://intelliapply-production.up.railway.app",
    accent: "#6B2D3E",
  },
  {
    title: "DevPulse",
    subtitle: "Real-Time GitHub Analytics Dashboard",
    description:
      "Commit heatmaps, PR metrics, language breakdowns, and a gamified developer score. Powered by real-time WebSocket updates.",
    tech: ["Python", "FastAPI", "WebSockets", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/hodoabdirizak/devpulse",
    live: null,
    accent: "#8B9E8B",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#E8E4F0" }}
    >
      {/* Oversized background number */}
      <div className="absolute -right-12 -top-16 font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] leading-none text-charcoal/[0.02] select-none pointer-events-none">
        04
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 md:mb-28"
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-burgundy mb-4 block">
              Selected Work
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal">
              Projects
            </h2>
          </motion.div>

          {/* Project cards — full-width stacked with large number */}
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left side — large project number + title */}
                <div className="lg:col-span-5 relative">
                  <span
                    className="font-serif text-[8rem] md:text-[10rem] leading-none block -mb-6 select-none"
                    style={{ color: `${project.accent}15` }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal group-hover:text-burgundy transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm tracking-[0.15em] uppercase mt-3 text-charcoal/40">
                    {project.subtitle}
                  </p>
                </div>

                {/* Right side — description, tech, links */}
                <div className="lg:col-start-7 lg:col-span-6 flex flex-col justify-end">
                  <p className="font-sans text-lg leading-relaxed text-charcoal/60 mb-8">
                    {project.description}
                  </p>

                  {/* Tech as inline text, not badges */}
                  <p className="font-sans text-sm text-charcoal/35 mb-8">
                    {project.tech.join(" / ")}
                  </p>

                  {/* Links */}
                  <div className="flex gap-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-charcoal/60 hover:text-burgundy transition-colors duration-300 flex items-center gap-2 group/link"
                    >
                      <span className="w-8 h-[1px] bg-charcoal/20 group-hover/link:bg-burgundy group-hover/link:w-12 transition-all duration-300" />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-charcoal/60 hover:text-burgundy transition-colors duration-300 flex items-center gap-2 group/link"
                      >
                        <span className="w-8 h-[1px] bg-charcoal/20 group-hover/link:bg-burgundy group-hover/link:w-12 transition-all duration-300" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
