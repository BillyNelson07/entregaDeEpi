const supabase = require('../supabaseClient');
const funcionarioModel = require('../models/funcionarioModel');

const getAllFuncionarios = async function (req, res){
    try{
        const getAllFuncionarios = await funcionarioModel.getAllFuncionariosInDataBase();
        
        return  res.status(200).json({mensagem : 'Registros retornaram com sucesso', Resultado : getAllFuncionarios })

    }catch(error){
        console.error('Erro ao buscar funcionários: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    };
};

const getFuncionarioById = async function(req,res){
    const { id } = req.params;
    try{
        const getOneFuncionario = await funcionarioModel.getFuncionarioById(id);
        
        return  res.status(200).json( {mensagem : 'Registro retornou com sucesso', Resultado : getOneFuncionario })
        
    }catch(error){
        console.error('Erro ao buscar funcionário: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    };
};

const postFuncionario = async function(req, res){
    const { nome } = req.body;
    try{
        const newFuncionario = await funcionarioModel.postFuncionario(nome);
        
        return res.status(201).json({ mensagem : 'Registro criado com sucesso', Resultado : newFuncionario }) 
    }catch(error){
        console.error('Erro ao registrar funcionário: ', error.message); //para fins de debug
        return res.status(500).json({ erro: error.message })
    };
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