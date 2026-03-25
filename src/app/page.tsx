import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Values />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
