import livro from "../models/Livro.js";


//  Aqui, trazemos a função de listar os livros, tirando-a de 'app.js' e organizando nossa API.
class LivroController {
    static async listarLivros (req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
    }
};

export default LivroController;