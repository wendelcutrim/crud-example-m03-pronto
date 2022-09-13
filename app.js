const express = require('express');
const path = require('path');
const usuarios = require('./database/usuarios');

const app = express();
const port = 3000;

app.use(express.json());

//Atividade 2
app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/login', (req, res) => {
    return res.sendFile(path.resolve("views", "login.html"));
});

app.get('/cadastro', (req, res) => {
    return res.sendFile(path.resolve("views", "cadastro.html"));
});

//Atividade 3

//Listar todos os usuarios:
app.get('/usuarios', (req, res) => {
    return res.json(usuarios);
});

//Listar um usuário
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(user => user.id == id);

    if(!usuario) {
        return res.json("Usuário não encontrado");
    }
    
    return res.json(usuario);
});

//Cadastrar um usuário
app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const novoUsuario = { 
        id: usuarios.at(-1).id + 1,
        nome, 
        email, 
        senha 
    };

    usuarios.push(novoUsuario);

    return res.json(novoUsuario);
});

//Editar um usuário
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha} = req.body;

    const index = usuarios.findIndex(user => user.id == id);

    if(index < 0) {
        return res.json("Usuário não encontrado");
    }

    let usuarioAtualizado = { id, nome, email, senha }

    usuarios[index] = usuarioAtualizado;

    return res.json(usuarioAtualizado);

});

//Deletar um usuário
app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(usuario => usuario.id == id);

    if(index < 0) {
        return res.json("Usuário não encontrado");
    }

    usuarios.splice(index, 1)

    return res.json("Usuario deletado com sucesso");
});

//Desafio atividade 2
app.use((req, res, next) => {
    return res.status(404).sendFile(path.resolve("views", "not-found.html"));
});

//Subindo o servidor
const message = () => console.log(`O servidor está rodando na porta: ${port}`);

app.listen(port, message);