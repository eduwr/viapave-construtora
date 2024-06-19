import { AboutUs } from "@/lib/AboutUs";
import { Hero } from "@/lib/Hero";
import { OurWork } from "@/lib/OurWork";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutUs />
      <OurWork />
    </main>
  );
}
