const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');


//funcaoo get, mas está retornando todos. mudar depois
router.get('/', async function(req,res){
    const { data, error } = await supabase
        .from('epi')
        .select('*')
    if(error) {
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registros retornaram com sucesso', data});
})


router.post('/', async function(req, res){
    const { nome, descricao, ca } = req.body;
    const { data, error } = await supabase
        .from('epi')
        .insert([{ nome, descricao, ca }]);
    if (error) {
        return res.status(500).json({ erro: error.message });
    }
    res.json({ mensagem: 'Inserção deu certo', data });
});

router.delete('/', async function(req, res){
    const { id } = req.body;
    const { data, error} = await supabase 
})

module.exports = router;
