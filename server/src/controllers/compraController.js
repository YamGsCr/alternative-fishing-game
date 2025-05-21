const compraService = require('../services/compraServices');

async function realizarCompra(req, res) {
  try {
    const resultado = await compraService.registrarCompra(req.body);
    res.status(200).json({
      mensagem: `Você comprou: ${resultado.nomeItem}`,
      novoSaldo: resultado.novoSaldo
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err.message });
  }
}


module.exports = { realizarCompra };
