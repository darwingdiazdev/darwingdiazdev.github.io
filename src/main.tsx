import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'
import { AppPreferencesProvider } from './context/AppPreferencesProvider'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('No se encontró el elemento #root')

createRoot(rootEl).render(
  <StrictMode>
    <AppPreferencesProvider>
      <App />
    </AppPreferencesProvider>
  </StrictMode>,
)
