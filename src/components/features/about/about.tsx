"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getFontClasses } from "@/lib/utils";
import researchImage from "../../../../public/images/about/research-paper.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  User,
  ChartScatter,
  ChartBar,
  ChartBarBigIcon,
  ChartColumn,
  ChartColumnIncreasing,
  ChartPie,
} from "lucide-react";
import React from "react";
import { Highlight } from "./_components/highlight";
import { FileText } from "lucide-react";

export default function AboutMe() {
  const t = useTranslations("about");
  const locale = useLocale();
  const fontClasses = getFontClasses(locale);

  return (
    <section
      id="about"
      className="  dark:bg-background text-secondary py-section-sm flex  !justify-between  items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3     w-full items-center">
        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative hidden lg:block w-64 h-64 md:w-96 md:h-96">
            <ChartPie
              size={400}
              className=" text-primary-light dark:text-primary"
            />
          </div>
        </motion.div>

        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" col-span-full lg:col-span-2"
        >
          <Card className="bg-white/5 backdrop-blur-md border mx-section-xs lg:ms-section-xs lg:mx-0  border-primary/10 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <h2
                className={`text-h2 bg-primary-light uppercase tracking-widest ${fontClasses.heading} text-white p-2 lg:w-1/2 dark:bg-primary     mb-4`}
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
                      className="flex items-center justify-center w-12 h-12 rounded-full border border-background dark:border-secondary hover:bg-gray-100 transition"
                    >
                      <Icon className="w-6 h-6 text-background dark:text-secondary/70" />
                    </a>
                  )
                )}
              </div>

              {/* About paragraphs */}
              <p className="text-p1 text-background/90  dark:text-secondary/90 leading-relaxed">
                {t.rich("intro", {
                  name: (chunk) => <Highlight>{chunk}</Highlight>,
                  role: (chunk) => <Highlight>{chunk}</Highlight>,
                  ai: (chunk) => <Highlight>{chunk}</Highlight>,
                  ml: (chunk) => <Highlight>{chunk}</Highlight>,
                })}
              </p>

              <p className="text-p2 text-background/70 dark:text-secondary/70 leading-relaxed">
                {t.rich("experience", {
                  visualization: (chunk) => <Highlight>{chunk}</Highlight>,
                  analytics: (chunk) => <Highlight>{chunk}</Highlight>,
                  modeling: (chunk) => <Highlight>{chunk}</Highlight>,
                })}
              </p>

              <p className="text-p2 text-background/70 dark:text-secondary/70 leading-relaxed">
                {t.rich("goal", {
                  research: (chunk) => <Highlight>{chunk}</Highlight>,
                  innovation: (chunk) => <Highlight>{chunk}</Highlight>,
                })}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
