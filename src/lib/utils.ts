import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFontClasses(locale: string) {
  return {
    body: locale === "ar" ? "font-arabic" : "font-sans",
    heading: locale === "ar" ? "font-arabic-heading" : "font-heading",
  };
}
