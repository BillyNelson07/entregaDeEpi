const supabase = require('../supabaseClient');


const getAllEpiInDataBase = async function(){
    const { data, error } = await supabase
        .from('epi')
        .select('*')
    if(error) {
        throw new Error('Falha ao fazer consulta: ' + error.message)
    }
    return data;
};

const getEpiById = async function(id_epi){
    const { data, error } = await supabase
        .from('epi')
        .select('*')
        .eq('id_epi', id_epi)
    if(!data || data.length === 0){
        throw new Error('EPI não existe: ' + error.message);
    }
    if(error) {
        throw new Error('Falha ao fazer consulta: ' + error.message);
    }
    
    return data;
};

const postEpi = async function(nome, ca){
    const { data, error } = await supabase
        .from('epi')
        .insert([{ nome, ca }])
        .select()
    if (error) {
        throw new Error('Falha ao fazer inserção: ' + error.message);
    }
    return data;
}



























































module.exports = {
    getAllEpiInDataBase,
    getEpiById,
    postEpi
}