const Aluno = require('../models/aluno');

//array será usado como base de dados temporária
const alunos = [];

const criarAluno = (nome, email, dataNascimento) => 
{
    const aluno = new Aluno(alunos.length + 1, nome, email, dataNascimento);

    alunos.push(aluno);
};

const obterAlunos = () => {
    return alunos.filter(a => !a.indExcluido);
};

const obterAlunoPorId = (id) =>{

    return alunos.find(a => a.id === id && !a.indExcluido);
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