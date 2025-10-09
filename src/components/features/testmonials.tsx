"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote, User, User2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../shared/section-title";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const testimonials = t.raw("items"); // array from messages
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    align: "center",
    loop: false,
  });
  const [isRtl, setIsRtl] = useState(false);

  const scrollPrev = useCallback(() => {
    if (isRtl) {
      emblaApi?.scrollNext(); // swap
    } else {
      emblaApi?.scrollPrev();
    }
  }, [emblaApi, isRtl]);

  const scrollNext = useCallback(() => {
    if (isRtl) {
      emblaApi?.scrollPrev(); // swap
    } else {
      emblaApi?.scrollNext();
    }
  }, [emblaApi, isRtl]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const dir =
        document.documentElement.getAttribute("dir") || document.dir || "ltr";
      setIsRtl(dir === "rtl");
    }
  }, []);

  type Testimonial = {
    name: string;
    role: string;
    message: string;
  };

  return (
    <section className="py-section-sm  text-secondary " id="testimonials">
      <SectionTitle>{t("title")}</SectionTitle>

      <div className="relative mx-auto">
        {/* Carousel */}
        <div className="relative mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className={`flex ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              {testimonials.map((t: Testimonial, index: number) => (
                <div key={index} className="flex-[0_0_80%] px-4 relative">
                  <Card className="border border-gray-200 bg-transparent flex flex-col justify-center items-center rounded-2xl shadow-sm relative">
                    {/* Floating Image Placeholder */}
                    <div className=" w-20 h-20 rounded-full mt-section-xs bg-gradient-to-br from-primary-light to-primary dark:from-primary dark:to-primary-light shadow-lg border-4 border-white dark:border-gray-900">
                      <User2 className="w-full h-full text-white p-2" />
                    </div>

                    <CardContent className="p-6  flex flex-col items-center text-center space-y-4">
                      {/* <Quote className="w-8 h-8 text-primary-light dark:text-primary opacity-70" /> */}
                      <p className="text-p2 text-background/80 dark:text-secondary/80 leading-relaxed italic">
                        “{t.message}”
                      </p>
                      <div>
                        <p className="text-primary-light dark:text-primary font-semibold">
                          {t.name}
                        </p>
                        <p className="text-sm text-background/60 dark:text-secondary/60">
                          {t.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            onClick={scrollPrev}
            className="rounded-full w-10 h-10"
          >
            {isRtl ? <ArrowRight /> : <ArrowLeft />}
          </Button>
          <Button
            variant="outline"
            onClick={scrollNext}
            className="rounded-full w-10 h-10"
          >
            {isRtl ? <ArrowLeft /> : <ArrowRight />}
          </Button>
        </div>
      </div>
    </section>
  );
}
