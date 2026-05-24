import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import { Button } from "../ui/button";
import { _Translator } from "next-intl";

async function Portfolio({
  t,
  locale,
}: {
  t: _Translator<Record<string, any>>
  locale: string;
}) {
  const payload = await getPayloadClient();
  const { docs: projects } = await payload.find({
    collection: "projects",
    locale,
    sort: "order",
    limit: 3,
    depth: 1,
  });

  if (projects.length === 0) return null;

  return (
    <section className="py-12" id="projects" >
      <h2 className="text-2xl font-bold">{t("projects.title")}</h2>

      <div className="pt-8 flex flex-col gap-6">
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

      <div className="flex justify-center pt-8">
        <Link href="/projects">
          <Button variant="outline" className="hover:scale-105 transition-transform">
            {t("projects.viewAll")}
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
