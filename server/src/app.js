require('dotenv').config({ path: __dirname + '/.env.public' });
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.TESTE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(express.json());

//Todas rotas para o mvp
const shopRoutes = require('./routes/lojaRoutes');
//const inventarioRoutes = require('./routes/inventarioRoutes');
//const perfilRoutes = require('./routes/perfilRoutes');
//const enciclopediaRoutes = require('./routes/enciclopediaRoutes');
const pescaRoutes = require('./routes/pescaRoutes');
const JogadorRoutes = require('./routes/JogadorRoutes');
const loginRoutes = require('./routes/login.routes');

app.use('/api/pescar', pescaRoutes);
app.use("/api/jogador", JogadorRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/loja', shopRoutes); 

const compraRoutes = require('./routes/compraRoutes');
app.use('/api/compras', compraRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  
