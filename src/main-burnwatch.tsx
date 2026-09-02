import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BurnwatchPage } from './components/BurnwatchPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BurnwatchPage />
  </StrictMode>,
)
