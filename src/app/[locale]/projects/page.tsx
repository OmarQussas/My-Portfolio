"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/app/[locale]/_components/ui/card";
import { Github, ExternalLink, FolderCode } from "lucide-react";
import { useTranslations } from "next-intl";
import projectImg from "../../../../public/images/projects/project-manager.png";
import { SectionTitle } from "../_components/shared/section-title-background";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
export default function ProjectsPage() {
  const t = useTranslations("projectsPage");
  const projects = t.raw("items");
  const locale = useLocale();

  return (
    <main
      className={cn(
        "py-section py-section-md px-section-sm text-background dark:text-secondary transition-colors duration-300"
      )}
    >
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-light dark:text-primary hover:underline hover:opacity-90 transition-opacity"
        >
          {locale === "ar" ? (
            <ArrowRight className="w-4 h-4" />
          ) : (
            <ArrowLeft className="w-4 h-4" />
          )}
          {t("back", { defaultValue: "Back" })}
        </Link>
      </div>
      <SectionTitle title={t("title")} icon={FolderCode} />

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12 mx-section-xs">
        {projects.map((project: any) => (
          <Card
            key={project.title}
            className={cn(
              "border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-transparent border-gray-200/70 dark:border-gray-700"
            )}
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={projectImg}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-3">
              <h3 className="text-h3 font-semibold text-background dark:text-primary">
                {project.title}
              </h3>

              <p className="text-p2 text-background/80 dark:text-secondary/80 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary-light/10 dark:bg-primary/10 text-primary-light dark:text-primary px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary-light dark:text-primary hover:underline"
                >
                  <Github className="w-5 h-5" /> {t("code")}
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary-light dark:text-primary hover:underline"
                >
                  <ExternalLink className="w-5 h-5" /> {t("demo")}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Call to Action Section */}
      <section className="mt-16 text-center bg-primary-light/10 dark:bg-primary/10 rounded-2xl py-12 px-6">
        <h2 className="text-h2 font-semibold text-primary-light dark:text-primary    mb-4">
          {t("cta.title", { defaultValue: "Have a project in mind?" })}
        </h2>
        <p className="text-p1 text-background/80 dark:text-secondary/80 mb-6">
          {t("cta.description", {
            defaultValue:
              "I’m available for freelance or collaboration projects. Let’s build something amazing together!",
          })}
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-primary-light text-white dark:bg-primary dark:text-background px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          {t("cta.button", { defaultValue: "Get in Touch" })}
        </Link>
      </section>
    </main>
  );
}
