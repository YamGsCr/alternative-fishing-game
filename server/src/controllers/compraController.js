const compraService = require('../services/compraServices');

async function realizarCompra(req, res) {
  try {
    const resultado = await compraService.registrarCompra(req.body);
    res.status(201).json({ message: 'Compra concluída', resultado });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err.message });
  }
}


module.exports = { realizarCompra };
