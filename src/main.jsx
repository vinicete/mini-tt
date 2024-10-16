import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/index.css'

import { Pages } from './pages/index.jsx'
import { connect } from './utils/firebase.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Pages app={connect()}/>
  </StrictMode>,
)
