"use client";

import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLinks } from "./nav-links";
import { LanguageSwitcher } from "./language-switcher";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const locale = useLocale();
  const t = useTranslations("Navbar");

  // initialize dark mode based on html class
  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(html.classList.contains("dark"));
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50 border-b border-secondary/20 dark:border-secondary-dark/20 bg-background-light dark:bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-h3 font-heading flex gap-2 text-primary-light dark:text-primary"
        >
          {t("logoFirst")}
          <span className="text-secondary-light dark:text-secondary">
            {t("logoSecond")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-secondary-light dark:text-secondary">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              <NavLinks />
            </NavigationMenuList>
          </NavigationMenu>

          <LanguageSwitcher />

          {/* Dark mode toggler */}
          <Button
            variant="default"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-2 bg-primary-light dark:bg-primary"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6 text-primary-light dark:text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={locale === "ar" ? "left" : "right"}
            className="text-foreground-light dark:text-foreground"
          >
            <nav className="flex flex-col space-y-6 mt-10">
              <NavLinks mobile onClick={() => setOpen(false)} />
              <div className="pt-4 flex justify-between items-center">
                <LanguageSwitcher />
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
