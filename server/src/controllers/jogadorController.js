const Login = require("../models/Jogador-Login");
const Jogador = require("../models/Jogador");

exports.criarJogador = async (req, res) => {
  const { username, senha, nickname } = req.body;

  try {
    // Verifica se usuário já existe
    const jaExiste = await Login.findOne({ username });
    if (jaExiste) {
      return res.status(400).json({ erro: "Usuário já existe" });
    }

    // Cria login
    const novoLogin = new Login({ username, senha });
    await novoLogin.save();

    // Cria jogador com login vinculado
    const novoJogador = new Jogador({
      nickname,
      login: novoLogin._id,
      moedas: 100, // começa com 100 moedas?
      inventario: [
        { itemId: "vara-inicial", equipado: true } // começa com a vara básica
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
