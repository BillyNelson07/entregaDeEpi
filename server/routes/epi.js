const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');


//funcao get para retornar todos os valores
router.get('/', async function(req,res){
    const { data, error } = await supabase
        .from('epi')
        .select('*')
    if(error) {
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registros retornaram com sucesso', data});
});

//funcao get para item especifico. retorna todas as coluna do registro em questao
router.get('/:id', async function(req,res){
    const { id } = req.params;
    const { data, error } = await supabase
        .from('epi')
        .select('*')
        .eq('id_epi', id)
    if(error) {
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registro retornou com sucesso', data});
});


router.post('/', async function(req, res){
    const { nome, ca } = req.body;
    const { data, error } = await supabase
        .from('epi')
        .insert([{ nome, ca }]);
    if (error) {
        return res.status(500).json({ erro: error.message });
    }
    res.json({ mensagem: 'Inserção deu certo', data });
});

router.delete('/:id', async function(req, res){
    const { id } = req.params;
    const { data, error} = await supabase
        .from('epi')
        .delete()
        .eq('id_epi',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Delete deu certo', data });
});

router.put('/:id', async function(req, res){
    const { id } = req.params;
    const { nome, ca} = req.body;
    const { data, error} = await supabase
        .from('epi')
        .update(
            {"nome" : nome, 
            "ca" : ca})
        .eq('id_epi',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Atualização deu certo', data });
});

module.exports = router;
