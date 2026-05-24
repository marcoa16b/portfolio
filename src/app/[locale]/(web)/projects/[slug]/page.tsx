import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";
import { getPayloadClient } from "@/lib/payload";
import { getSettings } from "@/lib/settings";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs: projects } = await payload.find({
    collection: "projects",
    locale: "all",
    limit: 100,
    depth: 1,
  });

  const params: { locale: string; slug: string }[] = [];

  for (const project of projects) {
    for (const locale of routing.locales) {
      const localizedSlug =
        project.slug && typeof project.slug === "object"
          ? project.slug[locale]
          : project.slug;

      if (localizedSlug) {
        params.push({ locale, slug: localizedSlug });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const payload = await getPayloadClient();
  const { docs: projects } = await payload.find({
    collection: "projects",
    where: { slug: { equals: slug } },
    locale,
    limit: 1,
    depth: 1,
  });

  const project = projects[0];
  if (!project) return { title: "Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations("Home");
  const settings = await getSettings(locale);
  const payload = await getPayloadClient();

  const { docs: projects } = await payload.find({
    collection: "projects",
    where: { slug: { equals: slug } },
    locale,
    limit: 1,
    depth: 2,
  });

  const project = projects[0];
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <Link href="/projects">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="size-4 mr-2" />
            {t("projects.back")}
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
              {project.year && <span>{project.year}</span>}
              {project.role && (
                <>
                  <span>·</span>
                  <span className="text-secondary">{project.role}</span>
                </>
              )}
              {project.status && project.status !== "completed" && (
                <>
                  <span>·</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">
                    {project.status === "in-progress"
                      ? "In Progress"
                      : "Maintenance"}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-2xl font-bold">{project.title}</h1>

            {project.description && (
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {project.links.map((link: { url: string; label: string }) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <ExternalLink className="size-4 mr-2" />
                      {link.label}
                    </Button>
                  </a>
                ))}
              </div>
            )}
          </header>

          {project.media &&
            typeof project.media === "object" &&
            "url" in project.media && (
              <div className="mb-8 rounded-lg overflow-hidden border border-primary/20">
                <Image
                  src={(project.media as { url: string }).url || ""}
                  alt={(project.media as { alt?: string }).alt || project.title}
                  width={768}
                  height={432}
                  className="w-full object-cover"
                />
              </div>
            )}

          {project.challenge && (
            <section className="mb-8">
              <h2 className="text-lg font-bold text-primary mb-3">
                {t("projects.challenge")}
              </h2>
              <RichText
                data={project.challenge}
                className="prose prose-sm dark:prose-invert max-w-none"
              />
            </section>
          )}

          {project.solution && (
            <section className="mb-8">
              {/* <div className="w-10 h-0.5 bg-secondary my-2" /> */}
              <h2 className="text-lg font-bold text-primary mb-3">
                {t("projects.solution")}
              </h2>
              <RichText
                data={project.solution}
                className="prose prose-sm dark:prose-invert max-w-none"
              />
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map(
                (item: { id: string; image: { url: string }; alt?: string }) =>
                  item.image &&
                  typeof item.image === "object" &&
                  "url" in item.image && (
                    <div
                      key={item.id}
                      className="rounded-lg overflow-hidden border border-primary/20"
                    >
                      <Image
                        src={(item.image as { url: string }).url || ""}
                        alt={item.alt || ""}
                        width={768}
                        height={432}
                        className="w-full object-cover"
                      />
                    </div>
                  ),
              )}
            </div>
          )}

          {project.results && (
            <section className="mb-8">
              {/* <div className="w-10 h-0.5 bg-secondary my-2" /> */}
              <h2 className="text-lg font-bold text-primary mb-3">
                {t("projects.results")}
              </h2>
              <RichText
                data={project.results}
                className="prose prose-sm dark:prose-invert max-w-none"
              />
            </section>
          )}

          <div className="w-full h-0.5 bg-secondary/20 my-2" />

          {project.content && (
            <section className="my-8">
              <RichText
                data={project.content}
                className="prose prose-sm dark:prose-invert max-w-none"
              />
            </section>
          )}

          {project.testimonial?.quote && (
            <aside className="bg-muted p-4 rounded-lg border border-primary/20 mb-8">
              <blockquote className="italic text-muted-foreground">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              {project.testimonial.author && (
                <footer className="mt-2 text-sm">
                  <strong>{project.testimonial.author}</strong>
                  {project.testimonial.role && (
                    <span className="text-muted-foreground">
                      {" "}
                      · {project.testimonial.role}
                    </span>
                  )}
                </footer>
              )}
            </aside>
          )}
        </article>
      </main>
      <Footer t={t} settings={settings} />
    </>
  );
}
