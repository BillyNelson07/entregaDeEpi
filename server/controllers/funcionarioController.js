const funcionarioModel = require('../models/funcionarioModel');

const getAllFuncionarios = async function (req, res){
    try{
        const allFuncionarios = await funcionarioModel.getAllFuncionariosInDataBase();
        
        return  res.status(200).json({mensagem : 'Registros retornaram com sucesso', Resultado : allFuncionariosllFuncionarios });

    }catch(error){
        console.error('Erro ao buscar funcionários: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    };
};

const getFuncionarioById = async function(req,res){
    const { id } = req.params;
    try{
        const getOneFuncionario = await funcionarioModel.getFuncionarioById(id);
        
        return  res.status(200).json( {mensagem : 'Registro retornou com sucesso', Resultado : getOneFuncionario });
        
    }catch(error){
        console.error('Erro ao buscar funcionário: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    };
};

const postFuncionario = async function(req, res){
    const { nome } = req.body;
    try{
        const newFuncionario = await funcionarioModel.postFuncionario(nome);
        
        return res.status(201).json({ mensagem : 'Registro criado com sucesso', Resultado : newFuncionario });
    }catch(error){
        console.error('Erro ao registrar funcionário: ', error.message); //para fins de debug
        return res.status(500).json({ erro: error.message });
    };
};

const putFuncionario = async function(req, res){
    const { id } = req.params;
    const { nome } = req.body;
    try{
        const alterFuncionario = await funcionarioModel.putFuncionario(id, nome);
        
        return res.status(200).json({ mensagem: 'Registro alterado com sucesso', Resultado : alterFuncionario });
    }catch(error){
        console.error('Erro ao alterar dados do funcionário: ', error.message); //para fins de debug
        return res.status(500).json({ erro : error.message });
    }
};

const deleteFuncionario = async function(req, res){
    const { id } = req.params;
    try{
        const eraseFuncionario = await funcionarioModel.deleteFuncionario(id);

        return res.status(200).json({ mensagem : 'Registro apagado com sucesso', Resultado : eraseFuncionario });
    }catch(error){
        console.error('Erro ao excluir funcionário: ', error.message); //para fins de debug
        return res.status(500).json({ erro : error.message });
    }
};

module.exports = { getAllFuncionarios,
                   getFuncionarioById,
                   postFuncionario,
                   putFuncionario,
                   deleteFuncionario
};