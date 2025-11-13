//importar express
const express = require('express');

//chama o express para usar suas funcionalidades
const app = express();

//define a porta para o servidor
const PORT = 3000;

//testa se o servidor está funcionando
// app.get('/', (req, res) => {
//     res.send('teste')
// });


//coloca o servidor no ar
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);    
});

//criacao de rotas

//middleware para o express ler as requisicoes que vem em formato json
app.use(express.json());

app.get(

)
