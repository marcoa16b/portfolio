import { getSocialIcon, type SettingsData } from "@/lib/settings";
import { Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";

function Contact({ t, settings }: { t: (key: string) => string; settings: SettingsData }) {
  const socialLinks = settings.socialLinks ?? [];
  const email = settings.email ?? "";

  return (
    <section className="py-12" id="contact">
      <h2 className="text-2xl font-bold">{t("contact.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="flex flex-col justify-between gap-4 order-2 md:order-1">
          <p>{t("contact.description")}</p>

          <div className="flex flex-col gap-2 pt-2">
            {socialLinks.map((link, index) => {
              const Icon = getSocialIcon(link.icon);
              return (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-muted p-4 rounded-lg border border-primary/20 hover:scale-105 transition-transform"
                >
                  <Icon className="size-6 text-primary" />
                  <span className="font-medium">{link.platform}</span>
                </Link>
              );
            })}
            {email && (
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-3 bg-muted p-4 rounded-lg border border-primary/20 hover:scale-105 transition-transform"
              >
                <Mail className="size-6 text-primary" />
                <span className="font-medium">{t("contact.email")}</span>
              </Link>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <ContactForm
            strings={{
              formName: t("contact.formName"),
              formEmail: t("contact.formEmail"),
              formMessage: t("contact.formMessage"),
              formSubmit: t("contact.formSubmit"),
              formSending: t("contact.formSending"),
              formSuccess: t("contact.formSuccess"),
              formError: t("contact.formError"),
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;