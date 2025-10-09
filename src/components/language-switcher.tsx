"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "En", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇪🇬" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("language");
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 rounded-xl bg-primary-light     text-secondary-light hover:bg-primary-light/80 dark:bg-primary dark:hover:bg-primary/80  "
        >
          <Globe className=" text-secondary " />
          <span className="hidden sm:inline font-medium text-secondary">
            {currentLanguage?.name}
          </span>
          <span className="sm:hidden font-medium uppercase">
            {currentLanguage?.code}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={locale === "ar" ? "start" : "end"}
        className=" flex flex-col gap-1 py-2  shadow-md border border-secondary/20"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-3  px-3 py-2 text-sm font-medium cursor-pointer transition-colors
              ${
                locale === language.code
                  ? "bg-secondary/10 text-secondary"
                  : "hover:bg-secondary/10"
              }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {locale === language.code && (
              <span
                className={`text-xs text-muted-foreground ${
                  locale === "ar" ? "mr-auto" : "ml-auto"
                }`}
              >
                ✓
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
