/* cria o cliente para se conectar e comunicar com a minha instancia no sevidor do supabase na nuvem.
liga o meu código express com o postgresql do supabase. createClient é a função do supabase especifica para fazer isso*/ 
const { createClient } = require('@supabase/supabase-js');

//chama o dotenv para a adicionar segurança na chave e url
require('dotenv').config();

//cria a const que tem como valor a url do meu banco de dados dos supabase, para o programa em qual banco de dados operar. protegido com o env.
const supaBaseUrl = process.env.SUPABASE_URL;


//chave publica que permite que as requisicoes leiam e escrevam dados. protegido com o env.
const supaBaseKey = process.env.SUPABASE_KEY;

//verifica se as variaveis de ambiente existem antes de criar o client
if(!supaBaseUrl || !supaBaseKey){
    throw new Error('As variáveis de ambiente SUPABASE_KEY e SUPABASE_URL precisam ser definidas')
}

//usa as informações que passei para criar o cliente e entao se conectar na nuvem
//serve também para eu acessar todos os métodos que o supbase dispoibiliza(sql, autenticação, storage, etc.)
const supabase = createClient(supaBaseUrl, supaBaseKey);

//faz com que o cliente seja acessivel por qualquer outro arquivo do projeto que
//precise interagir com o banco de dados
module.exports = supabase;
