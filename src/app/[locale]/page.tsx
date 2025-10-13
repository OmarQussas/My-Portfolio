import Hero from "@/app/[locale]/components/features/hero/hero";
import TechStack from "@/app/[locale]/components/features/tech-stack";
import About from "@/app/[locale]/components/features/about/about";
import FeaturedProjects from "@/app/[locale]/components/features/featured-projects";
import Papers from "@/app/[locale]/components/features/papers";
import Testimonials from "@/app/[locale]/components/features/testmonials";
import Contact from "@/app/[locale]/components/features/contact";

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
