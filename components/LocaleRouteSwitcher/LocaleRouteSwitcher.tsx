'use client'

import { useRouter } from 'next/navigation'
import { useCurrentLocale } from '../../src/shared/hooks/useCurrentLocale'
import { locales } from '@/src/shared/constants/locales'

export const LocaleRouteSwitcher = () => {
  const router = useRouter()
  const currentLang = useCurrentLocale()

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = locales.find((lang) => lang.code === e.target.value)
    if (!selectedLang) return

    let newPath = window.location.pathname

    locales.forEach((lang) => {
      if (newPath.startsWith(`${lang.prefix}/`)) {
        newPath = newPath.replace(`${lang.prefix}`, '')
      } else if (newPath === lang.prefix) {
        newPath = '/'
      }
    })

    if (selectedLang.prefix) {
      newPath = `${selectedLang.prefix}${newPath}`
    }

    newPath = newPath.replace(/\/+/g, '/')

    router.push(newPath || '/')
  }

  return (
    <select value={currentLang} onChange={changeLanguage}>
      {locales.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}
