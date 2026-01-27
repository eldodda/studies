import NaoEncontrado from "../erros/NaoEncontrado.js";
import { livros, autores } from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();

      req.resultado = buscaLivros;
      next();
    } catch (erro) {
      //  'next()' envia a resposta capturada no 'catch' (no caso, 'erro') e lança ao middleware "manipuladorDeErros".
      next(erro);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findById(id, {}, { autopopulate: false })
      .populate("autor");
      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndUpdate(id, { $set: req.body });
      if (livroResultado !== null) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndDelete(id);
      if (livroResultado !== null) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);
      if (busca !== null) {
        const livrosResultado = livros
          .find(busca)

        req.resultado = livrosResultado;
        if (livrosResultado.length === 0) {
          return res.status(200).json({ message: "Nenhum livro encontrado." });
        }
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  }



}
async function processaBusca(parametros) {
  //  DESESTRUTURAÇÃO: A const {editora, titulo} pega as informações da query de requisição (parâmetros passados na URL após o "?") e identifica como esses dois parâmetros.
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  //  A const 'busca' recebe um objeto vazio, que vai ser preenchido a partir dos 'if's seguintes. Se o parâmetro 'editora' for fornecido na query, o objeto 'busca' vai receber uma chave 'editora' com o valor fornecido pela query, então a busca será feita. A mesma coisa se o parâmetro fornecido for 'titulo'.
  let busca = {};
  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.numeroPaginas = {}
  //  gte = Greater Than or Equal = Maior ou igual que.
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // lte = Less Than or Equal = Menor igual que.
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;
  //  busca.numeroPaginas.$lte = maxPaginas não poderia ser feito sem o if acima, já que 'busca' ainda não possuia a chave 'numeroPaginas' para que algum valor fosse atribuído a ela.

  //  Se 'nomeAutor' for fornecido nos parâmetros da URL, vamos passar o findOne() em 'autores' tendo como parâmetro a chave 'nome' e o valor 'nomeAutor' (fornecido na URL), que vai nos devolver o autor cujo nome se encaixou com 'nomeAutor', e guarda em 'autor'.
  //  Então, tendo o autor correspondente guardado, puxamos seu id com 'autor._id' e guardamos em 'autorId'.
  //  Por fim, 'busca.autor = autorId' cria a chave 'autor' dentro de 'busca' e lança lá o 'autorId'.
  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });
    if (autor !== null) {
      busca.autor = autor._id;

    } else {
      busca = null
    }

  }

  return busca;
}

export default LivroController;
