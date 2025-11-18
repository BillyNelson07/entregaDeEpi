const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');
const funcionarioController = require('../controllers/funcionarioController');

router.get('/', funcionarioController.getAllFuncionarios);

router.get('/:id', funcionarioController.getFuncionarioById);

router.post('/', async function(req, res){
    const { nome } = req.body;
    const { data, error } = await supabase
        .from('funcionario')
        .insert([{ nome }])
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

router.put('/:id', async function(req, res){
    const { id } = req.params;
    const { nome } = req.body;
    const { data, error} = await supabase
        .from('funcionario')
        .update(
            {"nome" : nome})
        .eq('id_func',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Atualização deu certo', data });
});

module.exports = router;