import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";

export default function Hero() {
  // You can customize the avatar by changing the seed
  const avatarUrl =
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Omar&backgroundColor=white";

  return (
    <section className="bg-white py-section flex flex-col-reverse lg:flex-row items-center justify-between gap-12 container mx-auto px-4">
      {/* Left: Text Content */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-h1 font-heading text-primary">
          Data Scientist & AI Specialist
        </h1>
        <p className="text-p1 text-slate-600">
          I’m Omar, a passionate data scientist with over 5 years of experience
          in AI and machine learning — transforming data into actionable
          insights through predictive modeling and big data analytics.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
          <Button className="bg-primary hover:bg-primary-dark px-6 py-3 text-p2 font-medium rounded-lg flex items-center gap-2">
            <ArrowDownToLine className="h-5 w-5" />
            Download Resume
          </Button>
          <Button
            variant="accent"
            className="border-primary px-6 py-3 text-p2 font-medium rounded-lg"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Right: Avatar */}
      <div className="relative bg-primary w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20 bg-muted flex items-center justify-center">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian"
          alt="Omar Avatar"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
