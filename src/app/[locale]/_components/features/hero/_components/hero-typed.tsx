"use client";

import { ReactTyped } from "react-typed";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/app/[locale]/_components/ui/button";
import { Link } from "@/i18n/navigation";

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
        <ReactTyped strings={typedStrings} typeSpeed={40} backSpeed={50} loop />
      </h1>
      <p className="text-p1 dark:text-secondary">{description}</p>

      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
        {/* Download Resume Button */}
        <a
          href="/files/OmarAlzahdyCV.pdf" // put your resume in the public folder
          download
          className=" px-3 py-2 text-[.85rem] font-medium flex items-center gap-2 bg-primary-light text-white dark:bg-primary  rounded-xl hover:opacity-90 transition-opacity"
        >
          <ArrowDownToLine className="h-5 w-5" />
          {download}
        </a>

        {/* Contact Button */}
        <Button variant="outline">
          <Link href={"/#contact"}>{contact}</Link>
        </Button>
      </div>
    </div>
  );
}
