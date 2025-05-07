const Login = require("../models/Jogador-Login");
const Jogador = require("../models/Jogador");

exports.fazerLogin = async (req, res) => {
  const { username, senha } = req.body;

  try {
    const login = await Login.findOne({ username });

    if (!login || login.senha !== senha) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }

    // Busca o jogador vinculado
    const jogador = await Jogador.findOne({ login: login._id });

    res.json({ mensagem: "Login bem-sucedido", jogador });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro no login" });
  }
};
