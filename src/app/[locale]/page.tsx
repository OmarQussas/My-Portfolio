import Hero from "@/components/features/hero/hero";
import TechStack from "@/components/features/tech-stack";
import About from "@/components/features/about/about";
import FeaturedProjects from "@/components/features/featured-projects";
import Papers from "@/components/features/papers";
import Testimonials from "@/components/features/testmonials";
import Contact from "@/components/features/contact";

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
