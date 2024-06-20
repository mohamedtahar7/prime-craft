import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Pricing from "@/components/main/Pricing";
import Projects from "@/components/main/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Pricing />
    </main>
  );
}
