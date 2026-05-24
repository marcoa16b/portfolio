'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div>
      <Button onClick={() => changeLanguage(locale === 'es' ? 'en' : 'es')}>
        <Globe />
        {locale === 'es' ? 'EN' : 'ES'}
      </Button>
    </div>
  );
}