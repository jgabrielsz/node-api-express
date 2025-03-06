const express = require('express');
const logger = require('./middlewares/logger');
const app = express();

app.use(express.json());
app.use(logger);

const authMiddleware = require('./middlewares/auth');

// Variavel que simula um banco de dados
let usuarios = [
  { id: 1, nome: 'Usuário 1' },
  { id: 2, nome: 'Usuário 2' }
];


// Rota que retorna todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});


// Rota para adicionar um novo usuário
app.post('/usuarios', authMiddleware, (req, res) => {
  const novoUsuario = { id: usuarios.length + 1, nome: req.body.nome };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});


// Rota para atualizar um usuário
app.put('/usuarios/:id', authMiddleware, (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  
  usuario.nome = req.body.nome;
  res.json(usuario);
});


// Rota para deletar um usuário
app.delete('/usuarios/:id', authMiddleware,(req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.status(204).send();
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
