import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CadastroEpi from './pages/CadastroEpi/index.jsx'
import CadastroFuncionario from './pages/CadastroFuncionario/index.jsx'
import Home from './pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
