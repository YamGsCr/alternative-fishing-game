const Login = require("../models/Jogador-Login");
const Jogador = require("../models/Jogador");

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
        { itemId: "vara-inicial", equipado: true }
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

    res.json(jogador.inventario);
  } catch (err) {
    console.error('Erro ao buscar inventário:', err);
    res.status(500).json({ erro: 'Erro interno ao buscar inventário' });
  }
};

