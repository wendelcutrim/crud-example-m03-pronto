# crud-example-m03-pronto
O objetivo desta aula é demonstrar de forma básica como funciona um CRUD utilizando o express e métodos HTTP.

## Atividade 1: Criando um servidor com métodos nativo do Node
Nesta atividade iremos criar um servidor utilizando os métodos nativos do node, para isso será necessário:

-  [ ] Criar um projeto node com o nome: **exemplo-crud**
-  [ ] Executar o comando para criar o package.json:
```bash
npm init -y
```

- [ ] Criar o arquivo chamado **app.js**
- [ ] Neste arquivo devemos importar o método nativo do node ``http`` e criar um servidor usando o método **.createServer()**
- [ ] O servidor deve rodar na porta 3000
- [ ] Crie as seguintes rotas com as devidas respostas:


| Rota      | Tipo       | Resposta                            |
| :---------| :--------- | :---------------------------------- |
| `/`       | `GET`      | `Página inicial`                    |
| `/contato`| `GET`      | `Página de Contato`                 | 
| `/login`  | `GET`      | `Página de login`                   |
| `Desafio` | `GET`      | `Ops.. Página não encontrada`       |

### Estudos complementares sobre criação de servidor com métodos nativos do node:

- [Node.js HTTP module - w3Schools](https://www.w3schools.com/nodejs/nodejs_http.asp)

- [Documentação oficial do Node.js](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)

#

## Atividade 2: Criando um servidor utilizando framework - Express
Nesta atividade iremos criar um seridor novamente, mas desta vez utilizando o framework do express.

- [ ] Criar uma pasta com o nome **httpNativo** e mover o arquivo **app.js** que criamos anteriormente para dentro dela, pois não iremos mais utilizar o arquivo do servidor antigo utilizando os métodos nativos do node.
- [ ] Na raiz do diretório criar novamente o arquivo **app.js**
- [ ] Instalar o express 
```bash
npm i express
```
- [ ] Dentro do arquivo app.js que está na raiz do diretório, importar o express
- [ ] O servidor deve rodar na porta **3000**
- [ ] Na raiz do diretório, criar uma pasta chamada views e dentro dela colocar os arquivos que serão enviados no canal ``#material-aula`` no **Slack** e **Discord**
- [ ] Criar as seguintes rotas, sendo que cada rota deve devolver um arquivo .html

| Rota         | Tipo       | Resposta                            |
| :------------| :--------- | :---------------------------------- |
| `/`          | `GET`      | `home.html`                         |
| `/login`     | `GET`      | `login.html`                        | 
| `/cadastro`  | `GET`      | `cadastro.html`                     |
| `Desafio`    |            | `not-found.html`                    |

Dica: Para conseguir realizar o desafio, pesquisar por `error 404 express` ou `como tratar error 404 no express`.

### Estudos complementares 
[Documentação oficial do Express JS](https://expressjs.com/pt-br/);

#

## Atividade 3: CRUD
O CRUD são operacões que realizamos constantemente no backend, cada letra tem um significado importante, pois elas se referem a uma operação que será realizada no banco de dados que está atrelada a algum método HTTP.

- **C: Create (criar)**, nos permite criar um novo registro para ser salvo no banco de dados, para realizar esta operação, utilizamos o método **POST** do HTTP e geralmente devolvemos o status http 201 (created).

- **R: Read (ler)**, nos permite visualizar os dados que estão salvo no banco de dados, para realizar esta operação, utilizamos o método **GET** do HTTP e geralmente devolvemos o status http 200 (ok).

- **U: Update (atualizar)**, nos permite atualizar um registro que está salvo no banco de dados, para realizar esta operação, utilizamos o método **PUT** do HTTP e geralmente devolvemos o status http 200 (ok).

- **D: Delete (deletar)**, nos permite deletar um registro que está salvo no banco de dados, para realizar esta operação, utilizamos o método **DELETE** do HTTP e geralmente devolvemos o status http 204 (no content).

### Atividade:
- [ ] Instalar o insomnia ou thunder client para testar as requisições.
- [ ] Criar um array de objetos, e deixar 2 usuários cadastrados, cada usuário deve ter as seguintes propriedades:
  - [ ] id
  - [ ] Nome completo
  - [ ] E-mail
  - [ ] Senha
- [ ] Criar as seguintes rotas, sendo que cada rota é responsável por realizar uma operação do CRUD e deve retornar um json.

| Rota             | Tipo       | Operação     | Resposta                                                               |                       
| :----------------| :--------- | :------------| :----------------------------------------------------------------------|
| `/usuarios`      | `GET`      | Read         | Devolver a lista com todos os usuários cadastrados                     |    
| `/usuarios/:id`  | `GET`      | Read         | Devolver os dados do usuário em que o id foi solicitado como parâmetro |          
| `/usuarios`      | `POST`     | Create       | Criar um novo usuário e devolver os dados do novo usuário criado       |          
| `/usuarios/:id`  | `PUT`      | Update       | Atualizar os dados do usuário em que o id foi passado como parâmetro e devolver os dados atualizados |                                                                    |
| `/usuarios/:id`  | `DELETE`   | Delete       | Deletar os dados do usuário em que o id foi passado como parâmetro                                                                       |