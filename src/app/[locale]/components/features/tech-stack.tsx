"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/[locale]/components/ui/card";
import {
  Brain,
  Database,
  BarChart3,
  Workflow,
  LineChart,
  Code2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { SectionTitle } from "../shared/section-title";

const techs = [
  { name: "Python", icon: Code2, key: "Python" },
  { name: "R", icon: Workflow, key: "R" },
  { name: "TensorFlow", icon: Brain, key: "TensorFlow" },
  { name: "Pandas", icon: BarChart3, key: "Pandas" },
  { name: "Tableau", icon: LineChart, key: "Tableau" },
  { name: "PostgreSQL", icon: Database, key: "PostgreSQL" },
];

export default function TechStack() {
  const t = useTranslations("tech");
  return (
    <section
      id="tech"
      className={cn(
        "relative py-section-sm text-background dark:text-secondary shadow-lg px-section-sm rounded-lg",
        // before: creative circular/irregular shape
        "before:content-[''] before:absolute before:-inset-6 before:rounded-full before:border-4 ",
        "before:border-primary-light dark:before:border-primary before:rotate-6 before:scale-[.8] before:opacity-30 before:pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <SectionTitle>{t("title")}</SectionTitle>
        <p className="text-p1  max-w-2xl mx-auto mb-12">{t("description")}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 ">
          {techs.map(({ name, icon: Icon, key }) => (
            <motion.div
              key={name}
              whileHover={{
                y: -6,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="relative border border-transparent bg-transparent  transition-all  ">
                {/* Card content */}
                <CardContent className="relative flex flex-col items-center justify-center py-6  bg-primary-light/5 dark:bg-primary/5 backdrop-blur-md shadow-md">
                  <Icon className="h-10 w-10 text-primary-light dark:text-primary mb-2 drop-shadow-lg" />
                  <span className="text-p2 font-medium text-background dark:text-secondary">
                    {t(key)}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
