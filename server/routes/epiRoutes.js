const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');
const epiController = require('../controllers/epiController');


//funcao get para retornar todos os valores
router.get('/', epiController.getAllEpi);

//funcao get para item especifico. retorna todas as coluna do registro em questao
router.get('/:id', epiController.getEpiById);


router.post('/', epiController.postEpi);

// router.put('/:id', );

// router.patch('/:id', );

// router.delete('/:id', );




module.exports = router;
