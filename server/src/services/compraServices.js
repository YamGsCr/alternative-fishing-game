const Compra = require('../models/Compra');
const Jogador = require('../models/Jogador');

async function registrarCompra(compraData) {
  const { jogadorId, itemId, itemNome, preco, mundo } = compraData;
  const jogador = await Jogador.findById(jogadorId);
  if (!jogador) throw new Error('Jogador não encontrado');

  const jaPossui = jogador.inventario.some(item => item.itemId === itemId);
  if (jaPossui) throw new Error('Item já adquirido');
  if (jogador.moedas < preco) throw new Error('Saldo insuficiente');

  jogador.moedas -= preco;
  jogador.inventario.push({ itemId, itemNome, equipado: false });
  await jogador.save();
  
  const novaCompra = new Compra({ jogadorId, itemId, itemNome, preco, mundo });
  await novaCompra.save();

  return { itemId, itemNome, novoSaldo: jogador.moedas };
}

module.exports = { registrarCompra };
