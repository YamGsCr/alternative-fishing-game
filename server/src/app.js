const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


//Todas rotas para o mvp
//const shopRoutes = require('./routes/shopRoutes');
//const inventarioRoutes = require('./routes/inventarioRoutes');
//const perfilRoutes = require('./routes/perfilRoutes');
//const enciclopediaRoutes = require('./routes/enciclopediaRoutes');
const pescaRoutes = require('./routes/pescaRoutes');
const jogadorRoutes = require('./routes/criarJogadorRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.use('/api/pescar', pescaRoutes);
app.use("/api/jogador", jogadorRoutes);
app.use('/api/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  
