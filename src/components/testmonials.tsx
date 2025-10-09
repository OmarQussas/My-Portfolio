"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

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
    <section className="py-section-sm bg-background text-secondary">
      <h2 className="text-h2 text-primary font-semibold mb-10 text-center">
        {t("title")}
      </h2>

      <div className="relative mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className={`flex ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
            {testimonials.map((t: Testimonial, index: number) => (
              <div key={index} className="flex-[0_0_80%]  px-4">
                <Card className="border border-gray-200 rounded-2xl shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Quote className="w-8 h-8 text-primary opacity-70" />
                    <p className="text-p2 text-secondary/80 leading-relaxed italic">
                      “{t.message}”
                    </p>
                    <div>
                      <p className="text-primary font-semibold">{t.name}</p>
                      <p className="text-sm text-secondary/60">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
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
