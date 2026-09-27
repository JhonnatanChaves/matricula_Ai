const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');

const app = express();

app.use(express.json());
app.use(alunoRoutes);

app.get('/', (req, res) =>
{
    res.json({mensagem: 'API MatriculaAí funcionando!'});
});

app.listen(3000, () => 
{
    console.log('Servidor rodando na porta 3000');
});
