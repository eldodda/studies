//  O Mongoose serve como uma camada de abstração, simplificando a interação com o MongoDB.
import mongoose from "mongoose";

//  Schema é como um "molde" ou "modelo" que criamos para tratar os dados no MongoDB.
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String},
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false });

//  Aqui nós aplicamos o modelo a ser usado na const 'livro', agora pronta para ser exportada e utilizada.
const livro = mongoose.model("Livros", livroSchema);

export default livro;