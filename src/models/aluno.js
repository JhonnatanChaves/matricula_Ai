class Aluno{
    constructor(nome, email, dataNascimento)
    {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.indExcluido = false;
        this.dataExclusao = null;
    }
}

module.exports = Aluno;