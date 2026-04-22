import { useState } from 'react'
import { useAppPreferences } from '../../hooks/useAppPreferences'
import type { Locale } from '../../i18n/messages'

const linkKeys = [
  { href: '#inicio', key: 'home' as const },
  { href: '#sobre-mi', key: 'about' as const },
  { href: '#proyectos', key: 'projects' as const },
  { href: '#contacto', key: 'contact' as const },
]

export default function Navbar() {
  const { theme, toggleTheme, locale, setLocale, t } = useAppPreferences()
  const [open, setOpen] = useState(false)

  const linkClass =
    'rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/90">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4 sm:px-6">
        <a
          href="#inicio"
          className="shrink-0 text-2xl font-bold tracking-tight text-sky-800 transition hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
        >
          DD
        </a>

        <nav
          className="hidden flex-1 justify-center md:flex"
          aria-label={t.nav.navMain}
        >
          <div className="flex items-center gap-1">
            {linkKeys.map(({ href, key }) => (
              <a key={href} href={href} className={linkClass}>
                {t.nav[key]}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="flex rounded-lg border border-slate-200 p-0.5 dark:border-slate-600"
            role="group"
            aria-label={t.nav.languagePicker}
          >
            {(['es', 'en'] as const satisfies readonly Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`rounded-md px-2 py-2 text-xs font-semibold uppercase transition ${
                  locale === code
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
          >
            {theme === 'dark' ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            {open ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-slate-200 dark:border-slate-700/80 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col px-4 py-3" aria-label={t.nav.navMobile}>
          {linkKeys.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className={`${linkClass} py-2.5`}
              onClick={() => setOpen(false)}
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
