"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getFontClasses } from "@/lib/utils";
import researchImage from "../../public/images/about/research-paper.png";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import React from "react";

export default function AboutMe() {
  const t = useTranslations("about");
  const locale = useLocale();
  const fontClasses = getFontClasses(locale);

  return (
    <section
      id="about"
      className="dark:bg-background  rounded-lg text-secondary-light  dark:text-secondary py-section-sm flex gap-section px-section-sm items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-section-lg max-w-6xl w-full items-center">
        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative hidden lg:block w-64 h-64 md:w-96 md:h-96">
            <Image
              src={researchImage}
              alt="research paper"
              fill
              className="object-contain brightness-0 dark:invert opacity-80"
            />
          </div>
        </motion.div>

        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 col-span-2"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <h2
                className={`text-h2 ${fontClasses.heading} text-primary-light dark:text-primary mb-4`}
              >
                {t("title")}
              </h2>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <Icon className="w-6 h-6 text-gray-700" />
                    </a>
                  )
                )}
              </div>

              {/* About paragraphs */}
              <p className="text-p1 text-secondary-light dark:text-secondary leading-relaxed">
                {t.rich<any>("intro", {
                  name: (
                    <span className="text-primary-light dark:text-primary font-semibold">
                      {t("name")}
                    </span>
                  ),
                  role: (
                    <span className="text-primary-light dark:text-primary font-semibold">
                      {t("role")}
                    </span>
                  ),
                  ai: (
                    <span className="text-primary-light dark:text-primary">
                      {t("ai")}
                    </span>
                  ),
                  ml: (
                    <span className="text-primary-light dark:text-primary">
                      {t("ml")}
                    </span>
                  ),
                })}
              </p>

              <p className="text-p2 text-secondary-light dark:text-secondary leading-relaxed">
                {t.rich<any>("experience", {
                  visualization: (
                    <span className="text-primary-light dark:text-primary">
                      {t("visualization")}
                    </span>
                  ),
                  analytics: (
                    <span className="text-primary-light dark:text-primary">
                      {t("analytics")}
                    </span>
                  ),
                  modeling: (
                    <span className="text-primary-light dark:text-primary">
                      {t("modeling")}
                    </span>
                  ),
                })}
              </p>

              <p className="text-p2 text-secondary-light dark:text-secondary leading-relaxed">
                {t.rich<any>("goal", {
                  research: (
                    <span className="text-primary-light dark:text-primary">
                      {t("research")}
                    </span>
                  ),
                  innovation: (
                    <span className="text-primary-light dark:text-primary">
                      {t("innovation")}
                    </span>
                  ),
                })}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
