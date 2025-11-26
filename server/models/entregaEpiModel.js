const supabase = require('../supabaseClient');


const getAllEntregasInDB = async function(){
    const { data, error} = await supabase
    .from('entrega_epi')
    .select('*')
    if(error){
        throw new Error('Falha ao fazer consulta: ' + error.message)
    }
    return data;
};

const getEntregaEpiById = async function(idEntrega){
    const { data, error } = await supabase
        .from('entrega_epi')
        .select('*')
        .eq('id_entrega', idEntrega)
        .single()
    if(!data || data.length === 0){
        throw new Error('EPI não existe: ' + error.message);
    }
    if(error) {
        throw new Error('Falha ao fazer consulta: ' + error.message);
    }
    
    return data;
}






module.exports = {
    getAllEntregasInDB,
    getEntregaEpiById
};