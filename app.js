const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

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

app.use((req, res, next) => {
    return res.status(404).sendFile(path.resolve("views", "not-found.html"));
});

//Subindo o servidor
const message = () => console.log(`O servidor está rodando na porta: ${port}`);

app.listen(port, message);