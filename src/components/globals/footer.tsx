import Link from "next/link"
import { getSocialIcon, type SettingsData } from '@/lib/settings'
import { _Translator } from "next-intl"

function Footer({ t, settings }: { t: _Translator<Record<string, any>>; settings: SettingsData }) {
  const year = new Date().getFullYear()
  const socialLinks = settings.socialLinks ?? []

  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-1.5">
              <Link href="/projects" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                {t('hero.projects')}
              </Link>
              <Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">
                {t('hero.contact')}
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.social')}</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = getSocialIcon(link.icon);
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Icon className="size-5" />
                    <span className="sr-only">{link.platform}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="sm:text-right space-y-1">
            <p className="text-xs text-muted-foreground">{t('footer.builtWith')}</p>
            <p className="text-xs text-muted-foreground">
              {t('footer.copyright', { year })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer