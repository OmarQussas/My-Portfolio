import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, FolderCode } from "lucide-react";
import projectImg from "../../../public/images/projects/project-manager.png";
import { useTranslations } from "next-intl";

import ViewAllLink from "../view-all";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  const t = useTranslations("featuredProjects");
  const projects = t.raw("items");

  return (
    <section
      id="tech"
      className={cn(
        "relative py-section-sm text-background dark:text-secondary  px-section-sm rounded-lg"
      )}
    >
      <h2 className="text-h2 text-white uppercase tracking-widest bg-primary-light flex justify-center items-center gap-4  py-2 dark:bg-primary font-semibold mb-10 text-center">
        <FolderCode size={40} /> {t("title")}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-section-xs">
        {projects.map((project: any) => (
          <Card
            key={project.title}
            className="border bg-transparent border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <CardHeader className="p-0">
              <div className="relative p-10 rounded-t-2xl overflow-hidden">
                <Image
                  src={projectImg}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-3">
              <h3 className="text-h3 text-background dark:text-primary font-semibold">
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
                  className="flex items-center gap-1 text-primary-light dark:text-primary hover:underline"
                >
                  <Github className="w-5 h-5" /> {t("code")}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 text-primary-light dark:text-primary hover:underline"
                >
                  <ExternalLink className="w-5 h-5" /> {t("demo")}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Projects Link */}
      <ViewAllLink href="/projects" label={t("viewAll")} />
    </section>
  );
}
