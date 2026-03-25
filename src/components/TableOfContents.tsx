"use client";

import { motion } from "framer-motion";

const navItems = [
  {
    label: "About me",
    href: "#about",
    x: "4%",
    y: "6%",
    rotate: -2,
    size: "text-2xl md:text-3xl lg:text-4xl",
  },
  {
    label: "Values & Philosophy",
    href: "#values",
    x: "52%",
    y: "4%",
    rotate: 1,
    size: "text-xl md:text-2xl lg:text-3xl",
  },
  {
    label: "Experience",
    href: "#experience",
    x: "18%",
    y: "35%",
    rotate: 0,
    size: "text-2xl md:text-3xl lg:text-[2.5rem]",
    highlight: true,
  },
  {
    label: "Projects",
    href: "#projects",
    x: "58%",
    y: "38%",
    rotate: 2,
    size: "text-xl md:text-2xl lg:text-3xl",
  },
  {
    label: "Skills",
    href: "#skills",
    x: "5%",
    y: "65%",
    rotate: 1,
    size: "text-xl md:text-2xl lg:text-3xl",
  },
  {
    label: "Let's Connect",
    href: "#contact",
    x: "42%",
    y: "70%",
    rotate: -1,
    size: "text-xl md:text-2xl lg:text-3xl",
  },
];

/* Collage pieces — small colored rectangles, polaroid-style frames, and tape strips */
const collageElements = [
  // Polaroid-style photo frames
  {
    type: "polaroid",
    x: "35%",
    y: "2%",
    w: "100px",
    h: "120px",
    rotate: 5,
    bg: "#E8D5C8",
    shadow: true,
  },
  {
    type: "polaroid",
    x: "72%",
    y: "30%",
    w: "90px",
    h: "110px",
    rotate: -8,
    bg: "#D4E0D4",
    shadow: true,
  },
  // Colored paper scraps
  {
    type: "scrap",
    x: "28%",
    y: "18%",
    w: "140px",
    h: "35px",
    rotate: -3,
    bg: "#F0D5D5",
  },
  {
    type: "scrap",
    x: "80%",
    y: "10%",
    w: "60px",
    h: "80px",
    rotate: 12,
    bg: "#C5D4C5",
  },
  {
    type: "scrap",
    x: "48%",
    y: "55%",
    w: "120px",
    h: "30px",
    rotate: 2,
    bg: "#E0D5E8",
  },
  // Tape strips
  {
    type: "tape",
    x: "38%",
    y: "0%",
    w: "50px",
    h: "18px",
    rotate: 0,
    bg: "#E8DFC5",
  },
  {
    type: "tape",
    x: "74%",
    y: "28%",
    w: "45px",
    h: "16px",
    rotate: 5,
    bg: "#E8DFC5",
  },
  // Circle elements
  {
    type: "circle",
    x: "88%",
    y: "60%",
    w: "70px",
    h: "70px",
    rotate: 0,
    bg: "#D5C8D5",
  },
  {
    type: "circle",
    x: "15%",
    y: "52%",
    w: "45px",
    h: "45px",
    rotate: 0,
    bg: "#C8D5C8",
  },
  // Small accent rectangles
  {
    type: "scrap",
    x: "65%",
    y: "62%",
    w: "80px",
    h: "100px",
    rotate: -6,
    bg: "#F5E6D0",
  },
  {
    type: "scrap",
    x: "2%",
    y: "38%",
    w: "70px",
    h: "50px",
    rotate: 4,
    bg: "#D0D8E8",
  },
];

export default function TableOfContents() {
  return (
    <section className="relative bg-[#C5C8E8] py-12 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
        {/* Collage decorative elements */}
        {collageElements.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.04 * i }}
            viewport={{ once: true }}
            className={`absolute hidden md:block ${
              el.type === "circle" ? "rounded-full" : ""
            } ${el.type === "tape" ? "opacity-60" : ""} ${
              el.shadow ? "shadow-md" : ""
            }`}
            style={{
              left: el.x,
              top: el.y,
              width: el.w,
              height: el.h,
              backgroundColor: el.bg,
              transform: `rotate(${el.rotate}deg)`,
              borderRadius:
                el.type === "polaroid"
                  ? "2px"
                  : el.type === "tape"
                  ? "1px"
                  : el.type === "circle"
                  ? "50%"
                  : "3px",
            }}
          >
            {el.type === "polaroid" && (
              <div className="m-[6px] mb-[20px] h-[calc(100%-26px)] bg-charcoal/8 rounded-[1px]" />
            )}
          </motion.div>
        ))}

        {/* Navigation items */}
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 * index + 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06, x: 4 }}
            className={`absolute font-serif ${item.size} text-charcoal hover:text-burgundy transition-colors duration-300 cursor-pointer z-10 ${
              (item as { highlight?: boolean }).highlight
                ? "underline decoration-burgundy/40 decoration-2 underline-offset-8"
                : ""
            }`}
            style={{
              left: item.x,
              top: item.y,
              transform: `rotate(${item.rotate}deg)`,
            }}
          >
            {item.label}
            <span className="ml-2 text-burgundy/50 text-sm font-sans">→</span>
          </motion.a>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center max-w-7xl mx-auto pt-4 border-t border-charcoal/10">
        <span className="font-sans text-xs text-charcoal/40 tracking-widest">
          02
        </span>
        <span className="font-sans text-xs text-charcoal/40 tracking-wide">
          @hodoabdirizak
        </span>
        <span className="font-sans text-xs text-charcoal/40 tracking-wide">
          About Me →
        </span>
      </div>
    </section>
  );
}
