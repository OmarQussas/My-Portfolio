import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto">
      <Hero />
      <TechStack />
    </main>
  );
}
