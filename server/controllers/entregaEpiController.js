const entregaEpiModel = require('../models/entregaEpiModel');

const getAllEntregasEpi = async function(req,res){
    try{
        const allEntregasEpi = await entregaEpiModel.getAllEntregasInDB();
        
        return  res.status(200).json({mensagem : 'Registros retornaram com sucesso', Resultado : allEntregasEpi });
    }catch(error){
        console.error('Erro ao buscar Entregas: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    }
};

const getEntregaEpi = async function(req, res){
    const id = req.params
    try{
        const getOneEntregaEpi = await entregaEpiModel.getEntregaEpiById(id);

        return  res.status(200).json( {mensagem : 'Registro retornou com sucesso', Resultado : getOneEntregaEpi });
    }catch(error){
        console.error('Erro ao buscar entrega: ', error.message); //para fins de debug
        return res.status(500).json( { erro: error.message });
    };
};

module.exports = {
    getAllEntregasEpi,
    getEntregaEpi
}