const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.get('/', funcionarioController.getAllFuncionarios);

router.get('/:id', funcionarioController.getFuncionarioById);

router.post('/', funcionarioController.postFuncionario);

router.put('/:id', funcionarioController.putFuncionario);

router.delete('/:id', funcionarioController.deleteFuncionario);

module.exports = router;