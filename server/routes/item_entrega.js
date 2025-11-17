const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.get('/', async function(req, res){
    const { data, error} = await supabase
        .from('item_entrega')
        .select('*')
        if(error){
            return res.status(204).json({ erro : error.message })
        }
    res.json({ mensagem: 'Registros retornaram com sucesso', data})
});

//continuar daqui

// router.get('/:id_entrega/:id_epi', async function(req, res){
//     const { id_entrega, id_epi } = req.params;
//     //verifica se id_entrega existe
//     const { data: idEntrega, error: errorIdEntrega } = await supabase
//         .from('entrega_epi')
//         .select('*')
//         .eq('id_entrega', idEntrega)
//     if (errorIdEntrega || !idEntrega) {
//         return res.status(404).json({ erro: "ID da entrega não encontrado" });
//     }
//     //verifica se id_epi existe
//     const { data: idEpi, error: errorIdEpi } = await supabase
//         .from('epi')
//         .select('*')
//         .eq('id_epi', idEpi)
//     if (errorIdEpi || !idEpi) {
//         return res.status(404).json({ erro: "ID do EPI não encontrado" });
//     }
//     const { data, error} = await supabase
//         .from('item_entrega')
//         .select('id_entrega')
//         .eq('id_entrega', id)
//         if(error){
//             return res.status(204).json({ erro : error.message })
//         }
//     res.json({ mensagem: 'Registros retornaram com sucesso', data})
// });











module.exports = router;