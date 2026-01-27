import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, 'Erro de conexão.'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso.')
})

//  A const 'app' está guardando a aplicação do Express, como uma porta de acesso aos seus recursos, por onde vamos passar todas as rotas e comportamentos.
const app = express();

//  app.use() aqui adiciona um processador que transforma os JSON vindos nas requisições em um objeto acessível pelo 'req.body', tornar os dados do cliente legíveis pelo Express.
app.use(express.json())

//  Registra as rotas do projeto importadas na linha 3, ligando as URLs às funções que respondem as requisições.
routes(app);

app.use(manipulador404);

//  app.use() é um método do Express que registra funções de middleware, que são blocos de código que interceptam e processam requisições (req) e respostas (res) antes que elas cheguem às rotas finais, permitindo funções de logging, autenticação, tratamento de cookies, ou servir arquivos estáticos, sendo executado na ordem em que é adicionado ao pipeline de requisições do aplicativo.
//  Ou seja, app.use() está passando todas as requisições (req) do app.js pelo middleware 'manipuladorDeErros'.
app.use(manipuladorDeErros);

export default app