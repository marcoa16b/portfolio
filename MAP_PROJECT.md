# Project Map

## Directory Structure

```
portfolio/
├── .env                          # Environment variables (gitignored)
├── .gitignore                    # Git ignore rules
├── AGENTS.md                     # Agent instructions (Next.js quirks, project features)
├── CLAUDE.md                     # Delegates to AGENTS.md
├── DESIGN.md                     # (empty) Design docs placeholder
├── MAP_PROJECT.md                # This file — project map
├── README.md                     # Default Next.js boilerplate README
├── .prettierignore               # Prettier ignore rules (build artifacts, lockfile)
├── .prettierrc.json              # Prettier config (no semicolons, single quotes, Tailwind plugin)
├── eslint.config.mjs             # ESLint flat config (Next core-web-vitals + TypeScript + Prettier)
├── components.json               # shadcn/ui config (base-nova style, lucide icons)
├── next-env.d.ts                 # Auto-generated Next.js type declarations
├── next.config.ts                # Next.js config (next-intl plugin + @payloadcms/next/withPayload)
├── package.json                  # Project manifest (Next.js 16.2.6, React 19.2.4, Payload CMS 3.84.1)
├── payload.config.ts             # Payload CMS config (PostgreSQL, Lexical editor, S3/R2 storage, i18n)
├── pnpm-lock.yaml                # Lockfile
├── pnpm-workspace.yaml           # PNPM workspace config
├── postcss.config.mjs            # PostCSS with @tailwindcss/postcss (Tailwind v4)
├── tsconfig.json                 # TypeScript config (ES2017, bundler module, @/* -> src/*)
├── public/
│   ├── file.svg                  # Generic file SVG icon
│   ├── globe.svg                 # Globe SVG icon
│   ├── next.svg                  # Next.js logo
│   ├── profile.jpeg              # Profile photo (Marco Aguero)
│   ├── vercel.svg                # Vercel logo
│   └── window.svg                # Window SVG icon
└── src/
    ├── proxy.ts                  # next-intl middleware (locale routing, static file exclusions)
    ├── app/
    │   ├── favicon.ico           # Site favicon
    │   ├── globals.css           # Global styles: Tailwind v4, shadcn, light/dark themes, fonts
    │   ├── (payload)/            # Payload CMS admin routes (auto-generated, do not modify)
    │   │   ├── layout.tsx        # Payload root layout
    │   │   ├── custom.scss       # (empty) Admin SCSS overrides placeholder
    │   │   ├── admin/
    │   │   │   ├── importMap.js  # Dynamic component import map
    │   │   │   └── [[...segments]]/
    │   │   │       ├── page.tsx      # Admin catch-all page
    │   │   │       └── not-found.tsx # Admin 404 page
    │   │   └── api/
    │   │       ├── graphql/           # GraphQL API POST endpoint
    │   │       ├── graphql-playground/ # GraphQL playground GET endpoint
    │   │       └── [...slug]/         # REST API catch-all (GET, POST, DELETE, PATCH, PUT, OPTIONS)
    │   └── [locale]/
    │       └── (web)/
    │           ├── layout.tsx     # Public web root layout (ThemeProvider, NextIntlClientProvider, fonts)
    │           ├── page.tsx       # Home page (Header, Hero, About, Portfolio, Technologies, Contact, Footer)
    │           └── projects/
    │               └── [slug]/
    │                   └── page.tsx   # Project detail page (fetches Payload, renders RichText, gallery, testimonial)
    ├── collections/
    │   ├── media.ts              # Payload "media" collection (image uploads + PDF, 4 sizes, alt text)
    │   └── projects.ts           # Payload "projects" collection (localized fields: title, description, slug, role,
    │                            #   gallery, links, challenge/solution/results/content, testimonial; sidebar: order,
    │                            #   year, status, featured)
    ├── globals/
    │   └── Settings.ts           # Payload "settings" global (CV file/URL, email, socialLinks array, technologies with category & order)
    ├── components/
    │   ├── globals/
    │   │   ├── footer.tsx            # Footer: "Build with Next.js by me - {year}" + social links (from Settings)
    │   │   ├── header.tsx            # Header: fixed, scroll-aware (floating glass on scroll), mobile hamburger menu with fullscreen overlay
    │   │   ├── language-switcher.tsx # Client component: toggle locale es/en via next-intl
    │   │   └── theme-toggle.tsx      # Client component: toggle light/dark via @teispace/next-themes
    │   ├── sections/
│   │   ├── index.ts          # Barrel re-exporting About, Contact, Hero, Portfolio, Technologies
│   │   ├── hero.tsx          # Hero section: profile image, title, role, description, buttons, social links (from Settings), tech tags (from Settings)
    │   │   ├── about.tsx         # About section: "What I do" — Full Stack & Process Automation cards
    │   │   ├── technologies.tsx  # Technologies section: main stack badges + categorized technologies (from Settings)
    │   │   ├── contact.tsx       # Contact section: form (webhook to n8n) + social links (from Settings)
    │   │   └── portfolio.tsx     # Portfolio section: fetches projects from Payload CMS, renders cards with tech tags + CTA
    │   └── ui/
    │       └── button.tsx        # shadcn/ui Button (CVA variants + sizes, @base-ui/react/button)
    ├── i18n/
    │   ├── messages/
    │   │   ├── en.json           # English translations (hero, about, technologies, projects, metadata)
    │   │   └── es.json           # Spanish translations (same structure)
    │   ├── navigation.ts         # Lightweight wrappers: Link, redirect, usePathname, useRouter
    │   ├── request.ts            # Request config: resolves locale, returns matching messages
    │   └── routing.ts            # Routing config: locales ['en', 'es'], default 'es'
    ├── lib/
    │   ├── payload.ts            # Payload client utility (getPayloadClient helper)
    │   ├── settings.ts           # Settings fetcher (getSettings from Payload global) + icon mapping + types
    │   └── utils.ts              # cn() — clsx + tailwind-merge utility
    └── types/
        └── global.d.ts           # IntlMessages type augmentation (from es.json)
```

## Key Notes

- **Empty placeholders**: `DESIGN.md`, `src/app/(payload)/custom.scss`.
- **Payload admin routes** are auto-generated (do not modify).
- **Portfolio section** fetches projects from Payload CMS `projects` collection (sorted by `order`).
- **Project detail pages** at `/[locale]/projects/[slug]` render challenge/solution/results via RichText, plus gallery and testimonial.
- **Tech stack**: Next.js 16, React 19, Payload CMS 3, PostgreSQL, Tailwind v4, shadcn/ui, next-intl, motion (framer-motion), lucide-react, tabler-icons, ESLint + Prettier.
