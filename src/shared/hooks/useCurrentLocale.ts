'use client'

import { defaultLocale, locales } from '@/src/shared/constants/locales'
import { usePathname } from 'next/navigation'

export const useCurrentLocale = () => {
  const pathname = usePathname()

  const matchedLocale = locales.find((locale) => {
    if (locale.prefix === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(locale.prefix)
  })

  return matchedLocale ? matchedLocale.code : defaultLocale
}
