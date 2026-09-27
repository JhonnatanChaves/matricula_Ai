class Aluno{
    constructor(id, nome, email, dataNascimento){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.indExcluido = false;
        this.dataExclusao = null;
    }
}

module.exports = Aluno;