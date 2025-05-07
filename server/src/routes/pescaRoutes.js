const express = require('express');
const router = express.Router();
const pescaController = require('../controllers/pescaController');

router.post('/', pescaController.executarPesca);

module.exports = router;
