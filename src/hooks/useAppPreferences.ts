import { useContext } from 'react'
import { AppPreferencesContext } from '../context/app-preferences-context'

export function useAppPreferences() {
  const ctx = useContext(AppPreferencesContext)
  if (!ctx) {
    throw new Error('useAppPreferences debe usarse dentro de AppPreferencesProvider')
  }
  return ctx
}
