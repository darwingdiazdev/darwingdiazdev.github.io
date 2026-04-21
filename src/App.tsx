import Navbar from './components/Navbar'
import { useAppPreferences } from './hooks/useAppPreferences'

function Hero() {
  const { t } = useAppPreferences()
  return (
    <h1 className="text-center text-4xl font-bold text-sky-600 dark:text-sky-400">
      {t.hero.title}
    </h1>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main
        id="inicio"
        className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4"
      >
        <Hero />
      </main>
    </div>
  )
}

export default App
