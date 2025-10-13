import React from "react";

interface HighlightProps {
  children: React.ReactNode;
}

export function Highlight({ children }: HighlightProps) {
  return (
    <span className="  text-primary-light dark:text-primary font-semibold">
      {children}
    </span>
  );
}
