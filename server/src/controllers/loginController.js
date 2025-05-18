const Login = require('../models/Jogador-Login');
const Jogador = require('../models/Jogador');

exports.fazerLogin = async (req, res) => {
  const { username, senha } = req.body;
  console.log('Recebido no login:', { username, senha });

  try {
    const login = await Login.findOne({ username, senha });
    console.log('Login encontrado:', login);

    if (!login) {
      return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
    }

    const jogador = await Jogador.findOne({ login: login._id });
    console.log('Jogador encontrado:', jogador);

    if (!jogador) {
      return res.status(404).json({ erro: 'Jogador não encontrado' });
    }

    res.status(200).json({ jogador });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ erro: 'Erro interno no login' });
  }
};

