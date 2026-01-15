//  IMPORTANTE:: PARA INTERAÇÃO COM A API ESTAMOS USANDO O POSTMAN.

import express from 'express';

//  Importamos toda a biblioteca do Express para dentro de 'app'.
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

//  Passamos .findIndex() em 'livros' para identificar cada objeto do array pelo id. Convertemos o 'id' de string para Number na comparação, para evitar o erro de tipo.
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

//  Usamos .get para "pegar" algum dado, é o método usado na requisição.
//  Temos .status(), que define o código de status HTTP da resposta ('res'), fazendo algo como "se o código de status for 200, usa o .send para lançar a string "Curso de Node.js"".
//  Usamos .send para dados simples, como strings.
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

//  Usamos .json para dados como o array 'livros' que criamos.
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

//  Ao utilizar os dois ponto em "livros/:id", estamos dizendo ao Express que 'id' é uma variável, não parte da string.
//  O método .params, aponta 'id' como o parâmetro utilizado em 'app.get("/livros/:id", (req, res)'.
//  A variável 'index' chama a função buscaLivro tendo 'id' como parâmetro (params) da requisição (req).
//  E retorna a resposta (res) com o status de 200 (OK), trazendo o array 'livro' na posição apontada por 'index', no formato .json.
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

//  Em livros.push(req.body), o que fazemos é dar push (adicionar) o corpo da requisição ao array 'livros'.
//  LEMBRANDO:: Para interação com a API (como a entrada dos dados para adicionar um novo livro) estamos utilizando o Postman.
//  O código HTTP 201 indica que um dado foi ADICIONADO.
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.");
});

//  O .put() altera um dado existente, no caso de arrays, os valores de determinadas chaves, que, para nós, será o 'titulo', já que o 'id' está sendo usado na busca.
//  Com "livros[index].titulo" nós acessamos o objeto de 'livros' na posição 'index', e com "req.body.titulo", alteramos o valor desse objeto (titulo), no corpo (body) da requisição (req).
app.put("/livros/:id", (req, res) => {
        const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

export default app;