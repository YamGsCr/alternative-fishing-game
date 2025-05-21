const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema({
  jogadorId: { type: String, required: true },
  itemId: { type: String, required: true },
  itemNome: { type: String, required: true },
  preco: { type: Number, required: true },
  mundo: { type: Number, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Compra', CompraSchema);
