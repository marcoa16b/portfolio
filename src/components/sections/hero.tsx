import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getSocialIcon, type SettingsData } from '@/lib/settings'
import Link from 'next/link'
import { _Translator } from 'next-intl'

function Hero({ t, settings }: { t: _Translator<Record<string, any>>; settings: SettingsData }) {
  const techStack = settings.mainTechnologies?.filter(Boolean) ?? [];

  const socialLinks = settings.socialLinks ?? [];

  const cvUrl =
    settings.cv?.file?.url ?? settings.cv?.url ?? null;

  return (
    <section className="space-y-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
        <figure className="relative w-20 md:w-32 aspect-square rounded-full overflow-hidden shrink-0">
          <Image src="/profile.jpeg" alt="Profile" className="w-full aspect-square" fill sizes="128px" />
        </figure>
        <div className="space-y-2">
          <p className="text-primary text-xs flex items-center gap-2"><span className="inline-block min-w-4 min-h-px bg-primary/40" />{t('hero.country')} 🇨🇷</p>
          <h1 className="text-2xl sm:text-3xl font-bold pt-2">{t('hero.title')}</h1>
          <p className="text-secondary text-sm">{t('hero.role')}</p>
          <hr />
          <p className="text-muted-foreground text-sm sm:text-base">{t('hero.description')}</p>
          <div className="flex flex-wrap gap-2 pt-4">
            <Link href="/projects">
              <Button variant="outline" className="hover:scale-105 transition-transform">
                {t('hero.projects')}
              </Button>
            </Link>
            {cvUrl && (
              <Link href={cvUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  {t('hero.downloadCV')}
                </Button>
              </Link>
            )}
            <Link href="/#contact">
              <Button variant="default" className="hover:scale-105 transition-transform">
                {t('hero.contact')}
              </Button>
            </Link>
            {socialLinks.length > 0 && (
              <div className="flex gap-2 ml-auto">
                {socialLinks.map((link, index) => {
                  const Icon = getSocialIcon(link.icon);
                  return (
                    <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Icon className="size-5" />
                      </Button>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {techStack.length > 0 && (
        <div className="pt-14">
          <h3 className="text-lg font-bold">{t('hero.stack')}</h3>
          <div className="flex flex-wrap gap-2 pt-4">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-primary/5 text-primary px-3 py-1 rounded-lg text-xs border border-primary/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero