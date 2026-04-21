import { createContext } from 'react'
import type { Locale, Messages } from '../i18n/messages'

export type Theme = 'light' | 'dark'

export type AppPreferencesContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

export const AppPreferencesContext =
  createContext<AppPreferencesContextValue | null>(null)
