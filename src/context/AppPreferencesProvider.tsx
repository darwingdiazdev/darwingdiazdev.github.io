import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { type Locale, dictionary } from '../i18n/messages'
import { AppPreferencesContext, type Theme } from './app-preferences-context'

const THEME_KEY = 'portfolio-theme'
const LOCALE_KEY = 'portfolio-locale'

function readStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  return null
}

function readStoredLocale(): Locale | null {
  try {
    const v = localStorage.getItem(LOCALE_KEY)
    if (v === 'es' || v === 'en') return v
  } catch {
    /* ignore */
  }
  return null
}

function initialTheme(): Theme {
  const stored = readStoredTheme()
  if (stored) return stored
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return 'dark'
}

function initialLocale(): Locale {
  const stored = readStoredLocale()
  if (stored) return stored
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language.slice(0, 2).toLowerCase()
    if (lang === 'en') return 'en'
  }
  return 'es'
}

export function AppPreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initialTheme)
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(THEME_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme === 'dark' ? 'dark' : 'light'
  }, [theme])

  const t = useMemo(() => dictionary[locale], [locale])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      locale,
      setLocale,
      t,
    }),
    [theme, setTheme, toggleTheme, locale, setLocale, t],
  )

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  )
}
