const supabase = require('../supabaseClient');


const getAllEntregasInDB = async function(req, res){
    const { data, error} = await supabase
    .from('entrega_epi')
    .select('*')
    if(error){
        throw new Error('Falha ao fazer consulta: ' + error.message)
    }
    return data;
};






module.exports = {
    getAllEntregasInDB
};