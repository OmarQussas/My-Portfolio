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

const techs = [
  { name: "Python", icon: Code2 },
  { name: "R Language", icon: Workflow },
  { name: "TensorFlow", icon: Brain },
  { name: "Pandas", icon: BarChart3 },
  { name: "Tableau", icon: LineChart },
  { name: "PostgreSQL", icon: Database },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className=" bg-background text-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-h2 font-heading text-primary mb-4">
          Tech Stack & Tools
        </h2>
        <p className="text-p1 text-secondary/80 max-w-2xl mx-auto mb-12">
          A snapshot of the technologies I use to explore data, build models,
          and deliver insights.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {techs.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white border border-border shadow-sm hover:shadow-md transition">
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <span className="text-p2 font-medium text-secondary">
                    {name}
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
