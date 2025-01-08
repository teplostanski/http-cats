type Locale = {
  code: string
  name: string
  prefix: string
}

const LOCALES = [
  { code: 'ru', name: 'Русский', prefix: '/' },
  { code: 'en', name: 'English', prefix: '/en' },
  { code: 'ca', name: 'Català', prefix: '/ca' },
] as const

const validateLocales = (locales: readonly Locale[], defaultCode: string) => {
  const defaultLocale = locales.find((locale) => locale.code === defaultCode)

  if (!defaultLocale) {
    throw new Error(
      `locales: Default code "${defaultCode}" does not exist in the locales.`
    )
  }

  locales.forEach((locale) => {
    if (!locale.prefix.startsWith('/')) {
      throw new Error(
        `locales: Prefix "${locale.prefix}" must start with a slash "/".`
      )
    }
  })

  return { locales, defaultLocale: defaultLocale.code }
}

export const { locales, defaultLocale } = validateLocales(LOCALES, 'ru')
