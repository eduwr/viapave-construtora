import { AboutUs } from "@/lib/AboutUs";
import { Hero } from "@/lib/Hero";
import { OurWork } from "@/lib/OurWork";
import { Projects } from "@/lib/Projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutUs />
      <OurWork />
      <Projects />
    </main>
  );
}
