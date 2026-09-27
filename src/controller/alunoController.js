const alunoService = require('../services/alunoService');

const criarAluno = (req, res) => {
    const {nome, email, dataNascimento} = req.body;

    const aluno = alunoService.criarAluno(nome, email, dataNascimento);

    res.status(201).json(aluno);
}

const obterAlunos = (req, res) => {
    const alunos = alunoService.obterAlunos();

    res.status(200).json(alunos);
};


const obterAlunoPorId = (req, res) => {

    const id = Number(req.params.id);

    const aluno = alunoService.obterAlunoPorId(id);    

    if (!aluno) 
    {

        return res.status(404).json({
            mensagem: 'Aluno não encontrado'
        });
    }

    res.status(200).json(aluno);
}

const atualizarAluno = (req, res) => 
{
    const id = Number(req.params.id);
    const dados = req.body;

    const alunoAtualizado = alunoService.atualizarAluno(id, dados);

    if (!alunoAtualizado)
    {
        return res.status(404).json
        ({
            mensagem: "Aluno não encontrado"
        });
    }

    res.status(200).json(alunoAtualizado);
}

const atualizarAlunoParcialmente = (req, res) => 
{
    const id = Number(req.params.id);
    const dados = req.body;

    try 
    {
        const alunoAtualizado = alunoService.atualizarAlunoParcialmente(id, dados);

        if (!alunoAtualizado)
        {
            return res.status(404).json
            ({
                mensagem: "Aluno não encontrado"
            });
        }

        res.status(200).json(alunoAtualizado);
        
    } catch (error) 
    {
        res.status(400).json
        ({
            mensagem: error.message
        });
    }
}

const excluirAluno = (req, res) => 
{
    const id = Number(req.params.id);
    const dados = req.body;

    const alunoAtualizado = alunoService.excluirAluno(id, dados);

    if (!alunoAtualizado)
    {
        return res.status(404).json
        ({
            mensagem: "Aluno não encontrado"
        });
    }

    res.status(204).send();
}


module.exports = 
{
    criarAluno,
    obterAlunos,
    obterAlunoPorId,
    atualizarAluno,
    atualizarAlunoParcialmente,
    excluirAluno
};