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

// put async function(req, res){
//     const { id } = req.params;
//     const { nome, ca} = req.body;
//     const { data, error} = await supabase
//         .from('epi')
//         .update(
//             {"nome" : nome, 
//             "ca" : ca})
//         .eq('id_epi',  id)
//     if (error) {
//         return res.status(400).json({ erro: error.message });
//     }
//     res.json({ mensagem: 'Atualização deu certo', data });
// });

// patch  async function(req, res){
//     const { id } = req.params;
//     const { nomeColuna, novoDado } = req.body;
//     const objetoParaUpdate = {};
//     objetoParaUpdate[nomeColuna] = novoDado;
//     const { data, error} = await supabase
//         .from('epi')
//         .update(objetoParaUpdate)
//         .eq('id_epi',  id)
//     if (error) {
//         return res.status(400).json({ erro: error.message });
//     }
//     res.json({ mensagem: 'Atualização deu certo', data });
// });

// delete  async function(req, res){
//     const { id } = req.params;
//     const { data, error} = await supabase
//         .from('epi')
//         .delete()
//         .eq('id_epi',  id)
//     if (error) {
//         return res.status(400).json({ erro: error.message });
//     }
//     res.json({ mensagem: 'Delete deu certo', data });
// });

module.exports = {
    getAllEpi,
    getEpiById,
    postEpi
}