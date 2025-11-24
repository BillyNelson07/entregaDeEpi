const epiModel = require('../models/epiModel');

const getAllEpi = async function(req,res){
    try{
        const allEpi = await epiModel.getAllEpiInDataBase();
        
        return  res.status(200).json({mensagem : 'Registros retornaram com sucesso', Resultado : allEpi });
    }catch(error){
        console.error('Erro ao buscar EPIs: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    };
};

const getEpiById = async function(req,res){
    const { id } = req.params;
    try{
        const getOneEpi = await epiModel.getEpiById(id)

        return  res.status(200).json({mensagem : 'Registro retornou com sucesso', Resultado : getOneEpi });
    }catch(error){
        console.error('Erro ao buscar EPI: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    }
};

const postEpi =  async function(req, res){
    const { nome, ca } = req.body;
    try{
        const newEpi = await epiModel.postEpi(nome, ca);
        
        return res.status(201).json({ mensagem : 'Registro criado com sucesso', Resultado : newEpi });
    }catch(error){
        console.error('Erro ao registrar EPI: ', error.message); //para fins de debug
        return res.status(500).json({ erro: error.message });
    };
};

const putEpi = async function(req, res){
    const { id } = req.params;
    const { nome, ca} = req.body;
    try{
        const alterEpi = await epiModel.putEpi(id, nome, ca);

        return res.status(200).json({ mensagem: 'Registro alterado com sucesso', Resultado : alterEpi });
    }catch(error){
        console.error('Erro ao alterar dados do EPI: ', error.message); //para fins de debug
        return res.status(500).json({ erro : error.message });
    }
};

const patchEpi = async function(req, res){
    const { id } = req.params;
    const { nomeColuna, novoDado } = req.body;
    try{
        const changeEpi = await epiModel.patchEpi(id, nomeColuna, novoDado);

        return res.status(200).json({ mensagem: 'Registro alterado com sucesso', Resultado : changeEpi });
    }catch(error){
        console.error('Erro ao alterar dados do EPI: ', error.message); //para fins de debug
        return res.status(500).json({ erro : error.message });
    }
};

const deleteEpi = async function(req, res){
    const { id } = req.params;
    try{
        const eraseEpi = await epiModel.deleteEpi(id);

        return res.status(200).json({ mensagem : 'Registro apagado com sucesso', Resultado : eraseEpi });
    }catch(error){
        console.error('Erro ao excluir EPI: ', error.message); //para fins de debug
        return res.status(500).json({ erro : error.message });
    }
};

module.exports = {
    getAllEpi,
    getEpiById,
    postEpi,
    putEpi,
    patchEpi,
    deleteEpi
}