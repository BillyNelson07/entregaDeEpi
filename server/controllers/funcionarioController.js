const supabase = require('../supabaseClient');


const getAllFuncionarios = async function(req, res){
    const { data, error } = await supabase
        .from('funcionario')
        .select('*')
    if(error) {
        return res.status(500).json( { erro: error.message });
    }
    res.json({mensagem: 'Registros retornaram com sucesso', data});
};

const getFuncionarioById = async function(req,res){
    const { id } = req.params;
    const { data, error } = await supabase
        .from('funcionario')
        .select('*')
        .eq('id_func', id)
    if(error) {
        return res.status(400).json( { erro: error.message });
    }
    if(!data || data.length === 0){
        return res.status(404).json({ mensagem: "Funcionário não encontrado"})
    }
    res.json({mensagem: 'Registro retornou com sucesso', data});
};

const postFuncionario = async function(req, res){
    const { nome } = req.body;
    const { data, error } = await supabase
        .from('funcionario')
        .insert([{ nome }])
    if (error) {
        return res.status(500).json({ erro: error.message });
    }
    res.json({ mensagem: 'Inserção deu certo', data });
};

const putFuncionario = async function(req, res){
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
};

const deleteFuncionario = async function(req, res){
    const { id } = req.params;
    const { data, error} = await supabase
        .from('funcionario')
        .delete()
        .eq('id_funcionario',  id)
    if (error) {
        return res.status(400).json({ erro: error.message });
    }
    res.json({ mensagem: 'Delete deu certo', data });
};

module.exports = { getAllFuncionarios,
                   getFuncionarioById,
                   postFuncionario,
                   putFuncionario,
                   deleteFuncionario
};