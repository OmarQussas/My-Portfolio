// components/section-title.tsx
"use client";

import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-h2 tracking-widest uppercase font-heading text-primary-light dark:text-primary mb-4 text-center ${className}`}
    >
      {children}
    </h2>
  );
}
