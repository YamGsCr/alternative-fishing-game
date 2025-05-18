const express = require('express');
const router = express.Router();
const lojaController = require('../controllers/lojaController');

router.get('/', lojaController.listarItens);

module.exports = router;
