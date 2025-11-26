const express = require('express');
const { supabaseUrl } = require('./supabaseClient');
const supabase = require('./supabaseClient');
const cors = require('cors')

//chama o express para usar suas funcionalidades
const app = express();

//define a porta para o servidor
const PORT = 3001;
app.use(cors())
//middleware para o express ler as requisicoes que vem em formato json
app.use(express.json());

// importar e usar as rotas da tabela epi
const epiRoutes = require('./routes/epiRoutes');
app.use('/epi', epiRoutes);

//importar e usar as rotas da tabela funcionario
const funcionarioRoutes = require('./routes/funcionarioRoutes');
app.use('/funcionario', funcionarioRoutes);

//importar e usar as rotas da tabela entrega_epi
const entregaEpiRoutes = require('./routes/entregaEpiRoutes');
app.use('/entrega_epi', entregaEpiRoutes)

//importar e usar as rotas da tabela item_entrega
// const item_entregaRouter = require('./routes/item_entrega');
// app.use('/item_entrega', item_entregaRouter);

//coloca o servidor no ar
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);    
});