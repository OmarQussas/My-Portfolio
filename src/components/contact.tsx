"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="py-section-sm bg-background text-secondary"
    >
      <h2 className="text-h2 text-primary font-semibold mb-10 text-center">
        {t("title")}
      </h2>

      <div className="mx-auto grid gap-10 md:grid-cols-3 p-section-xs">
        {/* Contact Info */}
        <Card className="bg-white/5 border border-primary/10 shadow-md">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-h3 text-primary font-semibold">
              {t("getInTouch")}
            </h3>
            <p className="text-p2 text-secondary/80">{t("description")}</p>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>{t("email")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>{t("phone")}</span>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-white/5 border lg:col-span-2 border-primary/10 shadow-md">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-h3 text-primary font-semibold">
              {t("sendMessage")}
            </h3>
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder={t("form.name")} required />
              <Input type="email" placeholder={t("form.email")} required />
              <Textarea
                className="resize-none"
                placeholder={t("form.message")}
                required
                rows={4}
              />
              <Button type="submit" className="mt-2">
                {t("form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
