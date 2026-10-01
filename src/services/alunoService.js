const Aluno = require('../models/aluno');
const conectarMongoDB = require("../database/mongodb");
const {ObjectId} = require("mongodb");

//array será usado como base de dados temporária
const alunos = [];

const criarAluno = async (nome, email, dataNascimento) => 
{
    const db = await conectarMongoDB();

    const aluno = new Aluno(nome, email, dataNascimento);

    await db.collection("alunos").insertOne(aluno);

    return aluno;
};

const obterAlunos = async () => 
{
    const db = await conectarMongoDB();

    return await db
                .collection("alunos")
                .find({indExcluido: {$ne: true}})
                .toArray();
};

const obterAlunoPorId = async (id) =>
{
    const db = await conectarMongoDB();

    return await db
                 .collection("alunos")
                 .findOne
                 ({
                        _id: new ObjectId(id), 
                        indExcluido: {$ne: true}
                 });
}

const atualizarAluno = (id, aluno) => 
{    
    const alunoAtual = alunos.find(a => a.id === id);

    if (!alunoAtual) 
    {
        return null;
    }

    alunoAtual.nome = aluno.nome;    
    alunoAtual.email = aluno.email;    
    alunoAtual.dataNascimento = aluno.dataNascimento;

    return alunoAtual;
}


const atualizarAlunoParcialmente = (id, aluno) => 
{

    const alunoAtual = alunos.find(a => a.id === id);

    if (!alunoAtual)
    {
        return null;
    }

    if (aluno.nome !== undefined)
    {
        if (!aluno.nome.trim()) 
        {
            throw new Error('Nome não pode ser vazio');
        }

        alunoAtual.nome = aluno.nome;
    }

    if (aluno.email !== undefined)
    {
        alunoAtual.email = aluno.email;
    }

    if (aluno.dataNascimento !== undefined)
    {
        if (!aluno.dataNascimento) 
        {
            throw new Error('Data de nascimento não pode ser vazia');
        }

        alunoAtual.dataNascimento = aluno.dataNascimento;
    }
    
    return alunoAtual;
}

const excluirAluno =(id, aluno) => 
{    
    const alunoAtual = alunos.find(a => a.id === id);

    if (!alunoAtual || alunoAtual.indExcluido) 
    {
        return false;
    }

    alunoAtual.indExcluido = true;
    alunoAtual.dataExclusao = new Date();

    return true;
}

module.exports = 
{ 
    criarAluno,
    obterAlunos,
    obterAlunoPorId,
    atualizarAluno,
    atualizarAlunoParcialmente,
    excluirAluno
}