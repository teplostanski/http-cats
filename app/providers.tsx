'use client'

import { LocaleRouteSwitcher } from '../components/LocaleRouteSwitcher/LocaleRouteSwitcher'
import { useCurrentLocale } from '../src/shared/hooks/useCurrentLocale'

export default function Providers({ children }: { children: React.ReactNode }) {
  const locale = useCurrentLocale()

  return (
    <html lang={locale}>
      <body>
        <div className="p-4 sm:px-16 sm:py-4 lg:px-32 lg:py-4">
          <LocaleRouteSwitcher />
          {children}
        </div>
      </body>
    </html>
  )
}
