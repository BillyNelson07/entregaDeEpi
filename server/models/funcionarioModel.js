const supabase = require('../supabaseClient');

const getAllFuncionariosInDataBase = async function(){
    const { data, error } = await supabase
        .from('funcionario')
        .select('*')
    if(error) {
        throw new Error('Falha ao fazer consulta: ' + error.message);
    }
    return data;
};

const getFuncionarioById = async function(id_func){
    const { data, error } = await supabase
        .from('funcionario')
        .select('*')
        .eq('id_func', id_func)
        .single()
    if(!data || data.length === 0){
        throw new Error('Funcionário não existe: ' + error.message);
    }
    if(error) {
        throw new Error('Falha ao fazer consulta: ' + error.message);
    }
    
    return data;
};

const postFuncionario = async function(nome_func){
    const { data, error } = await supabase
        .from('funcionario')
        .insert([{ "nome" : nome_func }])
        .select()
    if (error) {
        throw new Error('Falha ao fazer inserção: ' + error.message);
    }
    return data;
};

const putFuncionario = async function(id_func, nome_func){
    const { data, error} = await supabase
        .from('funcionario')
        .update(
            {"nome" : nome_func})
        .eq('id_func',  id_func)
        .select()
    if (error) {
        throw new Error('Falha ao atualizar registro: ' + error.message);
    }
    return data;
};

const deleteFuncionario = async function(id_func){
    const { data, error } = await supabase
        .from('funcionario')
        .delete()
        .eq('id_func', id_func)
        .select()
    if(error){
        throw new Error('Falha ao apagar registro: ' + error.message);
    }
    return data;
};

module.exports = {
    getAllFuncionariosInDataBase,
    getFuncionarioById,
    postFuncionario,
    putFuncionario,
    deleteFuncionario
};