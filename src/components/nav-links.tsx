import Link from "next/link";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";

const links = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#papers", label: "Papers" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

export function NavLinks({ mobile = false, onClick }: NavLinksProps) {
  return (
    <>
      {links.map((link) =>
        mobile ? (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="text-p1 text-primary hover:text-primary font-medium transition-colors"
          >
            {link.label}
          </Link>
        ) : (
          <NavigationMenuItem key={link.href}>
            <Link
              href={link.href}
              className="text-p2 text-primary hover:text-primary-dark font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </Link>
          </NavigationMenuItem>
        )
      )}
    </>
  );
}
