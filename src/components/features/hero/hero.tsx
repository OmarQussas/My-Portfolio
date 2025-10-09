import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import { useTranslations } from "next-intl";
import zahdyPortrait from "../../../../public/images/hero/zahdy-avatar-img-removebg.png";
import { HeroTyped } from "./_components/hero-typed";

export default function Hero() {
  //translations
  const t = useTranslations("home");
  const title = t("title");
  const description = t("description");
  const download = t("download");
  const contact = t("contact");
  const typedStrings = t.raw("typedStrings");

  return (
    <section className="py-none lg:py-section-sm  mt-section flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-4">
      {/* Left: Text Content */}

      <HeroTyped
        title={title}
        description={description}
        download={download}
        contact={contact}
        typedStrings={typedStrings}
      />

      {/* Right: Avatar */}
      <div className="relative bg-primary-light dark:bg-primary w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-light/20 dark:ring-primary/20 flex items-center justify-center">
        <div className="scale-95 w-full h-full">
          <Image
            src={zahdyPortrait}
            alt="Omar Avatar"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
