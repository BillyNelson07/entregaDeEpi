//importar express
const express = require('express');
const { supabaseUrl } = require('./supabaseClient');
const supabase = require('./supabaseClient');

//chama o express para usar suas funcionalidades
const app = express();

//define a porta para o servidor
const PORT = 3000;

//middleware para o express ler as requisicoes que vem em formato json
app.use(express.json());

// importar e usar as rotas do epi
const epiRoutes = require('./routes/epi');
app.use('/epi', epiRoutes);

//coloca o servidor no ar
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);    
});


