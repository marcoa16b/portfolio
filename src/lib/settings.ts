import { getPayloadClient } from "@/lib/payload";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconGlobe,
} from "@tabler/icons-react";
import { Mail } from "lucide-react";

export async function getSettings(locale?: string) {
  const payload = await getPayloadClient();
  return payload.findGlobal({
    slug: "settings",
    locale: locale ?? "all",
    depth: 1,
  });
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandX,
  youtube: IconBrandYoutube,
  website: IconGlobe,
  email: Mail,
};

export function getSocialIcon(
  iconName: string,
): React.ComponentType<{ className?: string }> {
  return iconMap[iconName.toLowerCase()] || IconGlobe;
}

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
  id?: string | null;
};

export const TECH_CATEGORIES = [
  { key: "main", field: "mainTechnologies", labelKey: "technologies.mainStackTitle" },
  { key: "languages", field: "techLanguages", labelKey: "technologies.categories.languages" },
  { key: "frontend", field: "techFrontend", labelKey: "technologies.categories.frontend" },
  { key: "backend", field: "techBackend", labelKey: "technologies.categories.backend" },
  { key: "ai", field: "techAI", labelKey: "technologies.categories.ai" },
  { key: "tools", field: "techTools", labelKey: "technologies.categories.tools" },
  { key: "design", field: "techDesign", labelKey: "technologies.categories.design" },
  { key: "other", field: "techOther", labelKey: "technologies.categories.other" },
] as const;

export type SettingsData = {
  cv?: {
    file?: { url: string } | null;
    url?: string | null;
  } | null;
  email?: string | null;
  socialLinks?: SocialLink[] | null;
  mainTechnologies?: string[] | null;
  techLanguages?: string[] | null;
  techFrontend?: string[] | null;
  techBackend?: string[] | null;
  techAI?: string[] | null;
  techTools?: string[] | null;
  techDesign?: string[] | null;
  techOther?: string[] | null;
};

export function getTechCategoryItems(
  settings: SettingsData,
  field: (typeof TECH_CATEGORIES)[number]["field"],
): string[] {
  return (settings[field as keyof SettingsData] as string[] | null | undefined)?.filter(Boolean) ?? [];
}