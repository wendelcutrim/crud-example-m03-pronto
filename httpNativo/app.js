const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    switch (req.url) {
        case '/': 
            res.end('Página Inicial');
            break;
        case '/contato':
            res.end('Página de Contato');
            break;
        case '/login': 
            res.end('Página de login'); 
            break;
        default: res.end('Página não encontrada');
    }
}).listen(port, () => console.log(`O Servidor está rodando na porta: ${port}`));