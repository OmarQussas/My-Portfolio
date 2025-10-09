import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import { useTranslations } from "next-intl";
import zahdyPortrait from "../../public/images/hero/zahdy-avatar-img-removebg.png";

export default function Hero() {
  //translations
  const t = useTranslations("home");

  return (
    <section className="py-none lg:py-section-sm mt-section flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-4">
      {/* Left: Text Content */}
      <div className="max-w-xl space-y-6 text-center md:text-start">
        <h1 className="text-h1 font-heading text-primary-light dark:text-primary">
          {t("title")}
        </h1>
        <p className="text-p1  dark:text-secondary">{t("description")}</p>

        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
          <Button className="bg-primary-light dark:bg-primary hover:bg-primary-dark px-6 py-3 text-p2 font-medium rounded-lg flex items-center gap-2">
            <ArrowDownToLine className="h-5 w-5" />
            {t("download")}
          </Button>
          <Button
            variant="outline"
            className="border-primary-light dark:border-primary px-6 py-3 text-p2 font-medium rounded-lg text-primary-light dark:text-primary"
          >
            {t("contact")}
          </Button>
        </div>
      </div>

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
