export type Locale = 'es' | 'en'

export const dictionary = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      themeLight: 'Modo claro',
      themeDark: 'Modo oscuro',
      languagePicker: 'Idioma',
      navMain: 'Navegación principal',
      navMobile: 'Navegación móvil',
    },
    hero: {
      title: 'Hola, soy Darwing!',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
      languagePicker: 'Language',
      navMain: 'Main navigation',
      navMobile: 'Mobile navigation',
    },
    hero: {
      title: "Hello, I'm Darwing!",
    },
  },
} as const

export type Messages = (typeof dictionary)[Locale]
