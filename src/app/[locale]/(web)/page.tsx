import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import {
  About,
  Contact,
  Hero,
  Portfolio,
  Technologies,
} from "@/components/sections";
import { getSettings } from "@/lib/settings";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations("Home");
  const settings = await getSettings(locale);

  return (
    <React.Fragment>
      <Header />
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <Hero t={t} settings={settings} />
        <About t={t} />
        <Portfolio t={t} locale={locale} />
        <Technologies t={t} settings={settings} />
        <Contact t={t} settings={settings} />
      </main>
      <Footer t={t} settings={settings} />
    </React.Fragment>
  );
}
