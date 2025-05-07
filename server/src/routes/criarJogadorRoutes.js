const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

router.post("/criar", jogadorController.criarJogador);

module.exports = router;
