const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

router.post("/criar", jogadorController.criarJogador);
router.get('/:id/inventario', jogadorController.obterInventario);


module.exports = router;
