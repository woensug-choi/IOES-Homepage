'use client'

import { Twitter, Search, Plus, LayoutDashboard } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()
  const t = useTranslations('Navbar')

  const routes = [
    {
      icon: Search,
      href: '/basic',
      label: t('Hero'),
      pro: false,
    },
    {
      icon: LayoutDashboard,
      href: '/dashboard',
      label: t('Hero'),
      pro: false,
    },
    {
      icon: Twitter,
      href: '/thread/threads',
      label: 'Hero',
      pro: false,
    },
    {
      icon: Plus,
      href: '/chatbot/new',
      label: t('Hero'),
      pro: false,
    },
    {
      icon: Plus,
      href: '/companion/new',
      label: t('Hero'),
      pro: false,
    },
    // {
    //     icon: User,
    //     href: "/settings",
    //     label: "설정",
    //     pro: false,
    // }
  ]

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-white dark:bg-secondary">
      <div className="p-2 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={`text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition ${pathname === route.href && 'bg-primary/10 text-primary'}`}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1 text-center">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
