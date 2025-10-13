import {
  Card,
  CardHeader,
  CardContent,
} from "@/app/[locale]/_components/ui/card";
import { FileText, ExternalLink, FolderCode, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../shared/section-title-background";

export default function Papers() {
  const t = useTranslations("Papers");

  // Get translated papers list
  const papers = t.raw("list") as {
    title: string;
    abstract: string;
    authors: string[];
    year: string;
    link?: string;
  }[];

  return (
    <section className="py-section-sm" id="papers">
      <SectionTitle title={t("title")} icon={Quote} />;
      <div className="grid gap-8 md:grid-cols-2  lg:grid-cols-3 mx-section-xs">
        {papers.map((paper, index) => (
          <Card
            key={index}
            className="border border-gray-200 bg-transparent rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <CardHeader className="flex items-center gap-3 border-b p-6">
              <FileText className="w-6 h-6 text-primary-light dark:text-primary" />
              <div>
                <h3 className="text-h3 text-primary-light dark:text-primary font-semibold">
                  {paper.title}
                </h3>
                <p className="text-sm text-background/60 dark:text-secondary/60 py-2">
                  {paper.year}
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-3">
              <p className="text-p2 text-background/80 dark:text-secondary/80 leading-relaxed">
                {paper.abstract}
              </p>

              <p className="text-sm text-background/70 dark:text-secondary/70">
                <strong>{t("authors")}:</strong> {paper.authors.join("  ,  ")}
              </p>

              {true && (
                <a
                  href={paper.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-primary-light dark:text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> {t("viewPaper")}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
