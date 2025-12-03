import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CadastroEpi from './pages/CadastroEpi/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CadastroEpi />
  </StrictMode>,
)
