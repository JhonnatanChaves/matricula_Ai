const express = require('express');

const alunoController = require('../controller/alunoController');

const router = express.Router();

router.post('/alunos', alunoController.criarAluno);

router.get('/alunos', alunoController.obterAlunos);

router.get('/alunos/:id', alunoController.obterAlunoPorId);

router.put('/alunos/:id', alunoController.atualizarAluno);

router.patch('/alunos/:id', alunoController.atualizarAlunoParcialmente);

router.delete('/alunos/:id', alunoController.excluirAluno);

module.exports = router;