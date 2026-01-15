//  Criando um servidor local com http, simulando um servidor web que fornece dados.
import http from 'http';

//  3000 é a porta lógica de comunicação utilizada nesta API.
const PORT = 3000;

const rotas = {
    "/": "Curso de Express API.",
    "/livros": "Entrei na rota livros.",
    "/autores": "Entrei na rota autores."
};

//  Criando um servidor em 'server' com os parâmetros 'req' (requisição) e 'res' (resposta).
const server = http.createServer((req, res) => {
    //  .writeHead aqui gera o cabeçalho, essencial, pois contém informações importantes sobre a requisição e a resposta.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
});

//  Usamos .listen() para tornar 'server' em status de "ouvindo". Para que o servidor detecte quando chegar a requisição de um cliente buscando determinado dado.
server.listen(PORT, () => {
    console.log('Servidor escutando.');
});
