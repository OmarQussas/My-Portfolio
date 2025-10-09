import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import About from "@/components/about";
import FeaturedProjects from "@/components/featured-projects";
import Papers from "@/components/papers";
import Testimonials from "@/components/testmonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto">
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Testimonials />
      <Papers />
      <Contact />
    </main>
  );
}
