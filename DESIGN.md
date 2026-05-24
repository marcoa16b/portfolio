# Design System

## Tech Stack

- **Framework**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Base**: shadcn/ui `base-nova` style
- **Animations**: `tw-animate-css`, `motion` (framer-motion)
- **Icons**: lucide-react (primary), @tabler/icons-react (supplementary)
- **Theme**: `@teispace/next-themes` (class-based dark mode)

## Color Tokens

### Light Mode (`:root`)

| Token                | Hex       | Description         |
| -------------------- | --------- | ------------------- |
| `--background`       | `#fcf7fc` | Page background     |
| `--foreground`       | `#0a0a0a` | Body text           |
| `--card`             | `#f3f1f3` | Card/surface bg     |
| `--card-foreground`  | `#0a0a0a` | Card text           |
| `--primary`          | `#36183e` | Primary actions     |
| `--primary-foreground` | `#fafafa` | Primary text      |
| `--secondary`        | `#044d67` | Secondary elements  |
| `--secondary-foreground` | `#ffffff` | Secondary text  |
| `--muted`            | `#ebeef0` | Muted surfaces      |
| `--muted-foreground` | `#737373` | Muted/secondary txt |
| `--accent`           | `#edc7ff` | Accent highlights   |
| `--accent-foreground` | `#171717` | Accent text        |
| `--destructive`      | `#e7000b` | Error/destructive   |
| `--border`           | `#e5e5e5` | Borders             |
| `--input`            | `#e5e5e5` | Input borders       |
| `--ring`             | `#a1a1a1` | Focus ring          |

### Dark Mode (`.dark`)

| Token                | Hex        | Description         |
| -------------------- | ---------- | ------------------- |
| `--background`       | `#060609`  | Page background     |
| `--foreground`       | `#fafafa`  | Body text           |
| `--card`             | `#0e0c12`  | Card/surface bg     |
| `--card-foreground`  | `#fafafa`  | Card text           |
| `--primary`          | `#d0bcff`  | Primary actions     |
| `--primary-foreground` | `#0a030c` | Primary text      |
| `--secondary`        | `#4cd7f6`  | Secondary elements  |
| `--secondary-foreground` | `#0a030c` | Secondary text  |
| `--muted`            | `#0e0d11`  | Muted surfaces      |
| `--muted-foreground` | `#a1a1a1`  | Muted text          |
| `--accent`           | `#1e0f1f`  | Accent highlights   |
| `--accent-foreground` | `#fafafa` | Accent text        |
| `--destructive`      | `#ff6467`  | Error/destructive   |
| `--border`           | `#ffffff1a`| Borders             |
| `--input`            | `#ffffff26`| Input borders       |
| `--ring`             | `#737373`  | Focus ring          |

### Color Roles

- **Primary** (purple range): Main brand color — logo, primary buttons, highlighted text, decorative underlines, section dividers, tag text
- **Secondary** (teal/cyan): Role labels, decorative lines under card headings, secondary CTAs
- **Muted**: Card backgrounds, hover states, tag backgrounds
- **Accent** (purple range): Used sparingly for highlights
- **Destructive** (red): Error states, dangerous actions
- **Border**: Card borders, input outlines, tag borders

## Typography

### Font Family

| Role  | Font          | CSS Variable        |
| ----- | ------------- | ------------------- |
| Sans  | Poppins, Geist | `--font-sans`       |
| Serif | Poppins, Geist | `--font-serif`      |
| Mono  | Geist Mono    | `--font-mono`       |

- Body uses Poppins via `font-(--font-poppins)` — loaded in weights 100–900 from Google Fonts
- HTML/root uses `--font-sans` (Geist as primary sans)

### Type Scale

| Element                  | Size      | Weight   |
| ------------------------ | --------- | -------- |
| Hero heading (h1)        | `text-3xl` | `font-bold` |
| Section title (h2)       | `text-2xl` | `font-bold` |
| Card title (h3)          | `text-lg`  | `font-bold` |
| Body text                | base      | normal   |
| Small/meta text          | `text-xs` `text-sm` | normal |
| Tag text                 | `text-xs` | normal   |
| Logo                     | `text-md` | normal   |

## Spacing

### Layout

- **Content width**: `max-w-3xl` (768px) centered with `mx-auto`
- **Layout padding**: `p-4` (header), `px-4` `py-8` (main)
- **Section vertical spacing**: `py-12`
- **Gutters**: `gap-2`, `gap-4`, `gap-10`

### Component Spacing

- **Cards**: `p-4`, `rounded-lg`, `border`
- **Tech tags**: `px-3 py-1` or `px-2 py-1`, `rounded-lg` or `rounded`
- **Section headings**: `pt-4` or `py-4` from content above
- **Dividers in cards**: `w-10 h-0.5 bg-secondary my-2`
- **Button groups**: `gap-2`

## Border Radius

| Token         | Value              |
| ------------- | ------------------ |
| `--radius`    | `0.625rem` (10px)  |
| `--radius-sm` | `6px`              |
| `--radius-md` | `8px`              |
| `--radius-lg` | `10px`             |
| `--radius-xl` | `14px`             |

- Cards: `rounded-lg` (10px)
- Buttons: `rounded-lg`
- Tags: `rounded-lg` or `rounded`
- Avatar: `rounded-full`

## Shadows

All shadow tokens use the same base (`0 1px 3px 0px rgb(0 0 0 / …)`) with increasing opacity for larger sizes. Token range: `--shadow-2xs` through `--shadow-2xl`.

## Buttons

Component: `src/components/ui/button.tsx`

Built on `@base-ui/react/button` with CVA variants.

### Variants

| Variant      | Style                                                    |
| ------------ | -------------------------------------------------------- |
| `default`    | `bg-primary text-primary-foreground`                     |
| `secondary`  | `bg-secondary text-secondary-foreground`                 |
| `outline`    | `border-border bg-background` → hover `bg-muted`         |
| `ghost`      | transparent → hover `bg-muted`                           |
| `destructive`| `bg-destructive/10 text-destructive` → hover increased   |
| `link`       | `text-primary underline-offset-4 hover:underline`         |

### Sizes

| Size       | Height | Usage               |
| ---------- | ------ | ------------------- |
| `xs`       | 24px   | Compact inline      |
| `sm`       | 28px   | Dense UIs           |
| `default`  | 32px   | Primary CTAs        |
| `lg`       | 36px   | Prominent CTAs      |
| `icon`     | 32px   | Icon-only buttons   |
| `icon-xs`  | 24px   | Small icon buttons  |
| `icon-sm`  | 28px   | Medium icon buttons |
| `icon-lg`  | 36px   | Large icon buttons  |

### Interaction

- Hover: `hover:scale-105 transition-transform` (on links wrapping buttons in hero)
- Focus-visible: ring with `--ring` color
- Active: `translate-y-px`
- Disabled: `opacity-50`, no pointer events

## Component Patterns

### Cards
```
bg-muted p-4 rounded-lg border border-primary/20
```

### Tech Tags
```
bg-primary/5 text-primary px-3 py-1 rounded-lg text-xs border border-primary/20
```
Alternative: `bg-primary/10 text-primary px-2 py-1 rounded text-sm`

### Section Dividers
```
w-10 h-0.5 bg-secondary my-2
```

### Section Headings
```
<h2 className="text-2xl font-bold">
```

### Grid
- Mobile: 1 column
- `md:` 2 columns (`grid-cols-1 md:grid-cols-2 gap-4`)

## Header Layout

```tsx
<header className="flex items-center justify-between container max-w-3xl mx-auto gap-4 p-4">
  <div className="flex items-center gap-2">
    <Link className="text-md text-primary hover:text-primary/80 duration-200">LOGO</Link>
    <nav className="flex items-center gap-4 ml-4">
      <Link className="text-xs text-muted-foreground hover:text-foreground duration-200" />
    </nav>
  </div>
  <div className="flex items-center gap-4">
    <ThemeToggle />
    <LanguageSwitcher />
  </div>
</header>
```

## Icons

- **Primary set**: `lucide-react` — Sun, Moon, Globe (dynamically imported in theme-toggle to avoid SSR mismatch)
- **Supplementary**: `@tabler/icons-react` — IconBrandGithub, IconBrandLinkedin
- **Convention**: Icon size `size-4` (default button icon), `size-5` (hero social icons)

## Theme Switching

- Strategy: `class`-based dark mode via `@teispace/next-themes`
- Toggle: Button that switches between `light` and `dark`
- Sun icon shown in dark mode, Moon icon shown in light mode
- Lucide icons dynamically imported with `next/dynamic` (`ssr: false`)

## i18n

- Locales: `en`, `es` (default: `es`)
- Theme-aware translations served via `next-intl` (`NextIntlClientProvider`)
- Language switcher toggles locale using `useRouter`/`usePathname` from `next-intl`

## CSS Utilities

- `cn()` — `clsx` + `tailwind-merge` for conditional class merging (`src/lib/utils.ts`)
- `@layer base` sets global border color, outline ring, body bg/text/font, html font, button cursor
- `outline-ring/50` on all elements for accessible focus indicators

## Conventions Summary

1. Use Tailwind classes directly (no CSS modules)
2. Use CSS custom properties (tokens) for theme values, referenced via `@theme inline`
3. Buttons always use the `Button` component from `@/components/ui/button`
4. All user-facing text goes through `next-intl` translations (no hardcoded strings beyond structural labels)
5. Hover transitions use `duration-200` on interactive elements
6. Content width constrained to `max-w-3xl` for optimal readability
7. Use `motion/react` (framer-motion) for animations, not raw CSS animations
