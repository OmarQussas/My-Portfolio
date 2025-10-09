"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Database,
  BarChart3,
  Workflow,
  LineChart,
  Code2,
} from "lucide-react";
import { useTranslations } from "next-intl";

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
    <section id="tech" className=" bg-background py-section-sm text-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-h2 font-heading text-primary mb-4">{t("title")}</h2>
        <p className="text-p1 text-secondary/80 max-w-2xl mx-auto mb-12">
          {t("description")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 ">
          {techs.map(({ name, icon: Icon, key }) => (
            <motion.div
              key={name}
              whileHover={{
                y: -6,
                boxShadow: "0px 8px 20px rgba(243,80,52,0.25)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="relative border border-transparent bg-transparent  transition-all  ">
                {/* Subtle glass reflection */}
                <div className="absolute inset-0   bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-30 pointer-events-none mix-blend-overlay" />

                {/* Card content */}
                <CardContent className="relative flex flex-col items-center justify-center py-6  bg-primary/5 backdrop-blur-md shadow-md">
                  <Icon className="h-10 w-10 text-primary mb-2 drop-shadow-[0_0_6px_rgba(243,80,52,0.5)]" />
                  <span className="text-p2 font-medium text-secondary">
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
