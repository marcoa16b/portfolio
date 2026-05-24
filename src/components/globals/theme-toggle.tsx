"use client"
import { useTheme } from '@teispace/next-themes'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

const SunIcon = dynamic(() => import('lucide-react').then(mod => mod.Sun), { ssr: false })
const MoonIcon = dynamic(() => import('lucide-react').then(mod => mod.Moon), { ssr: false })

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
    return (
    <div>
        <Button size="icon" variant="outline" onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    </div>
  )
}

export default ThemeToggle