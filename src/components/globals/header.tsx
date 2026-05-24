"use client"

import { useState, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/globals/theme-toggle'
import LanguageSwitcher from '@/components/globals/language-switcher'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/#about', key: 'about' },
  { href: '/projects', key: 'projects' },
  { href: '/#technologies', key: 'skills' },
  { href: '/#contact', key: 'contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Home.nav')

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-1/2 -translate-x-1/2 z-50
          w-full max-w-3xl flex items-center justify-between gap-4 p-4
          transition-all duration-300 ease-in-out
          ${scrolled
            ? 'top-4 rounded-lg border border-border/40 bg-background/80 backdrop-blur-lg shadow-sm'
            : 'rounded-none border-transparent bg-transparent'
          }
        `}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="text-md text-primary hover:text-primary/80 duration-200">NAN.DEV</Link>
          <nav className="hidden md:flex items-center gap-4 ml-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground duration-200"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t('menuClose') : t('menuOpen')}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </header>

      <div className="h-[72px]" />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-6 text-lg">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
