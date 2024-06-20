import { AboutUs } from "@/lib/AboutUs";
import { Contact } from "@/lib/Contact";
import { Footer } from "@/lib/Footer";
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
      <Contact />
      <Footer />
    </main>
  );
}
