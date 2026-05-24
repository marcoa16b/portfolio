import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
  slug: "settings",
  label: {
    en: "Settings",
    es: "Configuración",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "cv",
      type: "group",
      label: {
        en: "CV / Resume",
        es: "CV / Currículum",
      },
      fields: [
        {
          name: "file",
          type: "upload",
          relationTo: "media",
          label: {
            en: "CV File (PDF)",
            es: "Archivo CV (PDF)",
          },
          filterOptions: {
            mimeType: { equals: "application/pdf" },
          },
        },
        {
          name: "url",
          type: "text",
          label: {
            en: "External URL (optional)",
            es: "URL externa (opcional)",
          },
          admin: {
            description: {
              en: "If no file is uploaded, this URL will be used",
              es: "Si no se sube un archivo, se usará esta URL",
            },
          },
        },
      ],
    },
    {
      name: "email",
      type: "text",
      label: "Email",
      admin: {
        description: {
          en: "Contact email address",
          es: "Dirección de correo electrónico de contacto",
        },
      },
    },
    {
      name: "socialLinks",
      type: "array",
      label: {
        en: "Social Links",
        es: "Redes Sociales",
      },
      labels: {
        singular: {
          en: "Social Link",
          es: "Enlace social",
        },
        plural: {
          en: "Social Links",
          es: "Enlaces sociales",
        },
      },
      admin: {
        description: {
          en: "Add your social media profiles (GitHub, LinkedIn, etc.)",
          es: "Agrega tus perfiles de redes sociales (GitHub, LinkedIn, etc.)",
        },
      },
      fields: [
        {
          name: "platform",
          type: "text",
          required: true,
          label: {
            en: "Platform",
            es: "Plataforma",
          },
          admin: {
            description: {
              en: "Display name (e.g. GitHub, LinkedIn)",
              es: "Nombre visible (ej. GitHub, LinkedIn)",
            },
          },
        },
        {
          name: "url",
          type: "text",
          required: true,
          label: "URL",
        },
        {
          name: "icon",
          type: "text",
          required: true,
          label: {
            en: "Icon",
            es: "Icono",
          },
          admin: {
            description: {
              en: "Icon identifier: github, linkedin, twitter, youtube, website, email",
              es: "Identificador del icono: github, linkedin, twitter, youtube, website, email",
            },
          },
        },
      ],
    },
    {
      name: "mainTechnologies",
      type: "text",
      hasMany: true,
      label: {
        en: "Main Stack",
        es: "Stack Principal",
      },
      admin: {
        description: {
          en: "Technologies that define your main stack (appear in hero section)",
          es: "Tecnologías que definen tu stack principal (aparecen en la sección hero)",
        },
      },
    },
    {
      name: "techLanguages",
      type: "text",
      hasMany: true,
      label: {
        en: "Languages",
        es: "Lenguajes",
      },
    },
    {
      name: "techFrontend",
      type: "text",
      hasMany: true,
      label: {
        en: "Frontend",
        es: "Frontend",
      },
    },
    {
      name: "techBackend",
      type: "text",
      hasMany: true,
      label: {
        en: "Backend",
        es: "Backend",
      },
    },
    {
      name: "techAI",
      type: "text",
      hasMany: true,
      label: {
        en: "AI & Automation",
        es: "IA y Automatización",
      },
    },
    {
      name: "techTools",
      type: "text",
      hasMany: true,
      label: {
        en: "Tools & Cloud",
        es: "Herramientas y Cloud",
      },
    },
    {
      name: "techDesign",
      type: "text",
      hasMany: true,
      label: {
        en: "Design & Management",
        es: "Diseño y Gestión",
      },
    },
    {
      name: "techOther",
      type: "text",
      hasMany: true,
      label: {
        en: "Other",
        es: "Other",
      },
    },
  ],
};