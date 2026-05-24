import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayloadClient } from "@/lib/payload";
import { routing } from "@/i18n/routing";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import { getSettings } from "@/lib/settings";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: t("projects.title"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations("Home");
  const settings = await getSettings(locale);
  const payload = await getPayloadClient();

  const { docs: projects } = await payload.find({
    collection: "projects",
    locale,
    sort: "order",
    limit: 100,
    depth: 1,
  });

  return (
    <>
      <Header />
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t("projects.title")}</h1>

        {projects.length === 0 ? (
          <p className="text-muted-foreground">No projects yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-muted p-4 rounded-lg border border-primary/20"
              >
                <span className="text-4xl font-bold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies?.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex justify-end">
                  <Link href={`/projects/${project.slug}`}>
                    <Button size="lg">{t("projects.viewMore")}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer t={t} settings={settings} />
    </>
  );
}
