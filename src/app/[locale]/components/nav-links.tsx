import Link from "next/link";
import { NavigationMenuItem } from "@/app/[locale]/components/ui/navigation-menu";
import { useTranslations } from "next-intl";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

export function NavLinks({ mobile = false, onClick }: NavLinksProps) {
  const t = useTranslations("NavLinks");

  const links = [
    { href: "#about", label: t("about") },
    { href: "#tech", label: t("tech") },
    { href: "#projects", label: t("projects") },
    { href: "#papers", label: t("papers") },
    { href: "#blogs", label: t("blogs") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <>
      {links.map((link) =>
        mobile ? (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="text-p1 text-background dark:text-secondary hover:text-primary-light dark:hover:text-primary font-medium transition-colors"
          >
            {link.label}
          </Link>
        ) : (
          <NavigationMenuItem key={link.href}>
            <Link
              href={link.href}
              className="text-p2 text-secondary-light dark:text-secondary hover:text-primary-light dark:hover:text-primary font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </Link>
          </NavigationMenuItem>
        )
      )}
    </>
  );
}
