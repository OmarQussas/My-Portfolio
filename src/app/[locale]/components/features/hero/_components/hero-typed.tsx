"use client";

import { ReactTyped } from "react-typed";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/app/[locale]/components/ui/button";

interface HeroTypedProps {
  title: string;
  description: string;
  download: string;
  contact: string;
  typedStrings: string[];
}

export function HeroTyped({
  title,
  description,
  download,
  contact,
  typedStrings,
}: HeroTypedProps) {
  return (
    <div className="max-w-xl space-y-6 text-center md:text-start">
      <h1 className="text-h1 font-heading text-primary-light dark:text-primary">
        <ReactTyped strings={typedStrings} typeSpeed={70} backSpeed={50} loop />
      </h1>
      <p className="text-p1 dark:text-secondary">{description}</p>

      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
        <Button className="  px-6 py-3 text-p2 font-medium  flex items-center gap-2">
          <ArrowDownToLine className="h-5 w-5" />
          {download}
        </Button>
        <Button variant="outline">{contact}</Button>
      </div>
    </div>
  );
}
