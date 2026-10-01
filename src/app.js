const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');
const conectarMongoDB = require('./database/mongodb');

const app = express();

app.use(express.json());
app.use(alunoRoutes);

app.get('/', (req, res) =>
{
    res.json({mensagem: 'API MatriculaAí funcionando!'});
});

const iniciarServidor = async () =>
{
    await conectarMongoDB();

    app.listen(3000, () => 
    {
        console.log('Servidor rodando na porta 3000');
    });
};

iniciarServidor();
