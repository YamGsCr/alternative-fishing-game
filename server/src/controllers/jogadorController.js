const Login = require("../models/Jogador-Login");
const Jogador = require("../models/Jogador");
const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, '../data/loja-LagoCalmo.json'), 'utf-8');
const todosItens = JSON.parse(raw);

const nomesDosItens = {};
todosItens.forEach(item => {
  nomesDosItens[item.id] = item.nome;
});

exports.criarJogador = async (req, res) => {
  const { username, senha, nickname } = req.body;

  try {

    const jaExiste = await Login.findOne({ username });
    if (jaExiste) {
      return res.status(400).json({ erro: "Usuário já existe" });
    }

    const novoLogin = new Login({ username, senha });
    await novoLogin.save();

    const novoJogador = new Jogador({
      nickname,
      login: novoLogin._id,
      moedas: 100,
      inventario: [
        { itemId: "vara-inicial", nomeItem:"Vara do Avô", equipado: true }
      ],
      conquistas: [],
      titulo: "Pescador Iniciante"
    });

    await novoJogador.save();

    res.status(201).json({ mensagem: "Jogador criado com sucesso", jogador: novoJogador });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao criar jogador" });
  }
};

exports.obterInventario = async (req, res) => {
  const { id } = req.params;

  try {
    const jogador = await Jogador.findById(id);
    if (!jogador) {
      return res.status(404).json({ erro: 'Jogador não encontrado' });
    }

    const inventarioComNomes = jogador.inventario.map(item => ({
      ...item.toObject(),
      nomeItem: nomesDosItens[item.itemId] || 'Item Desconhecido'
    }));

    res.json(inventarioComNomes);
  } catch (err) {
    console.error('Erro ao buscar inventário:', err);
    res.status(500).json({ erro: 'Erro interno ao buscar inventário' });
  }
};

exports.equiparItem = async (req, res) => {
  const { jogadorId, itemId } = req.body;

  try {
    console.log('REQ BODY EQUIPAR:', req.body);
    const jogador = await Jogador.findById(jogadorId);
    if (!jogador) {
      return res.status(404).json({ erro: 'Jogador não encontrado' });
    }

    const item = jogador.inventario.find(i => i.itemId === itemId);
    if (!item) {
      return res.status(400).json({ erro: 'Item não encontrado no inventário' });
    }

    jogador.inventario.forEach(i => i.equipado = false);

    item.equipado = true;

    await jogador.save();

    res.status(200).json({ mensagem: `Item equipado: ${itemId}` });
  } catch (err) {
    console.error('Erro ao equipar item:', err);
    res.status(500).json({ erro: 'Erro ao equipar item' });
  }
};
