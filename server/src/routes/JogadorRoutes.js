const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

router.post("/criar", jogadorController.criarJogador);
router.get('/:id/inventario', jogadorController.obterInventario);
router.post("/equipar", jogadorController.equiparItem);


module.exports = router;
