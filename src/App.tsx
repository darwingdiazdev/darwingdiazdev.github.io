import Navbar from './components/Navbar'
import { useAppPreferences } from './hooks/useAppPreferences'

function Hero() {
  const { t } = useAppPreferences()
  return (
    <section
      id="inicio"
      className="scroll-mt-14 grid min-h-[calc(100vh-3.5rem)] w-full  grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-12"
    >
      <div className="flex flex-col gap-4 text-center md:text-left"
      
      >
        <h1 className="text-4xl font-bold tracking-tight text-sky-600 dark:text-sky-400 sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {t.hero.lead}
        </p>
      </div>
      <div className="flex justify-center"
      
      >
        <img
          src="/perfil.jpg"
          alt={t.hero.imageAlt}
          className="aspect-[4/5] w-full max-w-md rounded-2xl object-cover shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10"
        />
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto flex w-full flex-col items-stretch">
        <Hero />
      </main>
    </div>
  )
}

export default App
