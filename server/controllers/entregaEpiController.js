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

module.exports = {
    getAllEntregasEpi
}