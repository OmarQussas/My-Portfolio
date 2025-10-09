import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

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
    <section className="py-section-sm">
      <h2 className="text-h2 text-primary font-semibold mb-10 text-center">
        {t("title")}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-section-xs">
        {papers.map((paper, index) => (
          <Card
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <CardHeader className="flex items-center gap-3 border-b p-6">
              <FileText className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-h3 text-primary font-semibold">
                  {paper.title}
                </h3>
                <p className="text-sm text-secondary/60 py-2">{paper.year}</p>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-3">
              <p className="text-p2 text-secondary/80 leading-relaxed">
                {paper.abstract}
              </p>

              <p className="text-sm text-secondary/70">
                <strong>{t("authors")}:</strong> {paper.authors.join("  ,  ")}
              </p>

              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
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
