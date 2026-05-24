import { _Translator } from "next-intl"

function About({ t }: { t: _Translator<Record<string, any>> }) {
  return (
    <section className="py-12" id="about">
      <h2 className="text-2xl font-bold">{t("about.title")}</h2>
      <p className="py-4">{t("about.description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="bg-muted p-4 rounded-lg border border-primary/20">
          <h3 className="text-lg font-bold">{t("about.card1.title")}</h3>
          <div className="w-10 h-0.5 bg-secondary my-2" />
          <p className="text-muted-foreground pt-2">{t("about.card1.description").split("\n").map((line, i) => <span key={i} className="block mt-2">{line}</span>)}</p>
        </div>
        <div className="bg-muted p-4 rounded-lg border border-primary/20">
          <h3 className="text-lg font-bold">{t("about.card2.title")}</h3>
          <div className="w-10 h-0.5 bg-secondary my-2" />
          <p className="text-muted-foreground pt-2">{t("about.card2.description").split("\n").map((line, i) => <span key={i} className="block mt-2">{line}</span>)}</p>
        </div>
      </div>
    </section>
  )
}

export default About