const lojaService = require('../services/lojaServices');

async function listarItens(req, res) {
  try {
    const itens = await lojaService.MostrarItens('data/loja-LagoCalmo.json');
    res.json(itens);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao carregar itens da loja' });
  }
}

module.exports = { listarItens };
