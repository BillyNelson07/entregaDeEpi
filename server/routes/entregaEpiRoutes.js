const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.get('/', async function(req, res){
    const { data, error} = await supabase
    .from('entrega_epi')
    .select('*')
    if(error){
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registros retornaram com sucesso', data});
});

router.get('/:id', async function(req,res){
    const { id } = req.params;
    const { data, error } = await supabase
        .from('entrega_epi')
        .select('*')
        .eq('id_entrega', id)
    if(error) {
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registro retornou com sucesso', data});
});

router.post('/', async function(req, res){
    const { id_func, data_ent } = req.body;
    //verifica se o funcionário existe
    const { data: funcionario, error: errorFuncionario } = await supabase
        .from('funcionario')
        .select('*')
        .eq('id_func', id_func)
    if (errorFuncionario || !funcionario) {
        return res.status(404).json({ erro: `Funcionário ID ${id_func} não encontrado` });
    }
    //faz o insert na entrega_epi se o funcionario existir
    const { data, error } = await supabase
        .from('entrega_epi')
        .insert([{ id_func, data_ent }]);
    if (error) {
        return res.status(500).json({ erro: error.message });
    }
    res.json({ mensagem: 'Inserção deu certo', data});
});

router.delete('/:id', async function(req, res){
    const { id } = req.params;
    const { data, error} = await supabase
        .from('entrega_epi')
        .delete()
        .eq('id_entrega',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Delete deu certo', data });
});

router.put('/:id', async function(req, res){
    const { id } = req.params;
    const { data_ent } = req.body;
    const { data, error} = await supabase
        .from('entrega_epi')
        .update(
            {"data_ent" : data_ent})
        .eq('id_entrega',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Atualização deu certo', data });
});

module.exports = router;