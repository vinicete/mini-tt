import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/index.css'

import { Pages } from './pages/index.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
