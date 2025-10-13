"use client";

import { Card, CardContent } from "@/app/[locale]/components/ui/card";
import { Input } from "@/app/[locale]/components/ui/input";
import { Textarea } from "@/app/[locale]/components/ui/textarea";
import { Button } from "@/app/[locale]/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../shared/section-title";
import { useMutation } from "@tanstack/react-query";
import { use, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const locale = useLocale();
  // const pathname = usePathname();
  console.log(locale);

  const mutation = useMutation({
    mutationFn: async (formData: typeof form) => {
      const res = await fetch(`${locale}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send email");
      return res.json();
    },

    onSuccess: () => {
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    },
    onError: () => {
      alert("❌ Failed to send message. Try again later.");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <section id="contact" className="py-section-sm">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="mx-auto grid gap-10 md:grid-cols-3 p-section-xs">
        {/* Contact Info */}
        <Card className="bg-transparent border shadow-md">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-h3 text-primary-light dark:text-primary font-semibold">
              {t("getInTouch")}
            </h3>
            <p className="text-p2 text-background/80 dark:text-secondary/80">
              {t("description")}
            </p>

            <div className="flex items-center gap-3 text-background/80 dark:text-secondary/80">
              <Mail className="w-5 h-5 text-primary-light dark:text-primary" />
              <span>{t("email")}</span>
            </div>
            <div className="flex items-center gap-3 text-background/80 dark:text-secondary/80">
              <Phone className="w-5 h-5 text-primary-light dark:text-primary" />
              <span>{t("phone")}</span>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-primary-light dark:text-primary hover:opacity-80"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-primary-light dark:text-primary hover:opacity-80"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-primary-light dark:text-primary hover:opacity-80"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-white/5 border md:col-span-2 border-primary-light/10 dark:border-secondary/80 shadow-md">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-h3 text-primary-light dark:text-primary font-semibold">
              {t("sendMessage")}
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("form.name")}
                required
              />
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("form.email")}
                required
              />
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="resize-none"
                placeholder={t("form.message")}
                required
                rows={4}
              />
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="mt-2"
              >
                {mutation.isPending ? "Sending..." : t("form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
