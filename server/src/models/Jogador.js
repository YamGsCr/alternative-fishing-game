const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  login: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', required: true },
  inventario: [
    {
      itemId: { type: String, required: true },
      equipado: { type: Boolean, default: false }
    }
  ],
  moedas: { type: Number, default: 0 },
  conquistas: [{type: String}],
  título: {type: String, default:""}
});

module.exports = mongoose.model('Jogador', jogadorSchema);
