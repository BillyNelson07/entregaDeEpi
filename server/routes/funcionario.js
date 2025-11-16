const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.get('/', async function(req, res){
    const { data, error } = await supabase
        .from('funcionario')
        .select('*')
    if(error) {
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registros retornaram com sucesso', data});
});

router.get('/:id', async function(req,res){
    const { id } = req.params;
    const { data, error } = await supabase
        .from('funcionario')
        .select('*')
        .eq('id_funcionario', id)
        .single()
    if(error) {
        return res.status(204).json( { erro: error.message });
    }
    res.json({mensagem: 'Registro retornou com sucesso', data});
});

router.post('/', async function(req, res){
    const { funcionario } = req.body;
    const { data, error } = await supabase
        .from('funcionario')
        .insert([{ funcionario }]);
    if (error) {
        return res.status(500).json({ erro: error.message });
    }
    res.json({ mensagem: 'Inserção deu certo', data });
});

router.delete('/:id', async function(req, res){
    const { id } = req.params;
    const { data, error} = await supabase
        .from('funcionario')
        .delete()
        .eq('id_funcionario',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Delete deu certo', data });
});