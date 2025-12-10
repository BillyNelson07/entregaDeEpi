import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CadastroEpi from './pages/CadastroEpi/index.jsx';
import CadastroFuncionario from './pages/CadastroFuncionario/index.jsx';
import Home from './pages/Home/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-epi" element={<CadastroEpi />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
