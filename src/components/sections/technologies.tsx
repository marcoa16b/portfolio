import { TECH_CATEGORIES, getTechCategoryItems, type SettingsData } from "@/lib/settings";

function Technologies({ t, settings }: { t: (key: string) => string; settings: SettingsData }) {
  return (
    <section className="py-12" id="technologies">
      <h2 className="text-2xl font-bold">{t("technologies.title")}</h2>
      <p className="py-4">{t("technologies.intro")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECH_CATEGORIES.map(({ key, field, labelKey }) => {
          const items = getTechCategoryItems(settings, field);

          if (items.length === 0) return null;

          return (
            <div
              key={key}
              className="bg-muted p-4 rounded-lg border border-primary/20"
            >
              <h4 className="font-bold">
                {t(labelKey)}
              </h4>
              <div className="w-10 h-0.5 bg-secondary my-2" />
              <div className="flex flex-wrap gap-2 pt-2">
                {items.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/5 text-primary px-3 py-1 rounded-lg text-xs border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;