const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

router.post('/', compraController.realizarCompra);

module.exports = router;
