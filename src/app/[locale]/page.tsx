import Hero from "@/app/[locale]/_components/features/hero/hero";
import TechStack from "@/app/[locale]/_components/features/tech-stack";
import About from "@/app/[locale]/_components/features/about/about";
import FeaturedProjects from "@/app/[locale]/_components/features/featured-projects";
import Testimonials from "@/app/[locale]/_components/features/testmonials";
import Contact from "@/app/[locale]/_components/features/contact";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto">
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}
