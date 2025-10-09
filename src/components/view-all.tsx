"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ViewAllLinkProps {
  href: string;
  label: string;
}

export default function ViewAllLink({ href, label }: ViewAllLinkProps) {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const dir = document.documentElement.getAttribute("dir") || "ltr";
      setIsRtl(dir === "rtl");
    }
  }, []);

  return (
    <div className="text-center mt-12">
      <a
        href={href}
        className="inline-flex items-center gap-2 text-primary-light dark:text-primary font-medium group no-underline"
      >
        {label}
        {isRtl ? (
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />
        ) : (
          <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        )}
      </a>
    </div>
  );
}
