//  Agora estamos puxando todos os serviços do Express que escrevemos em 'app.js', ao invés do http.
import app from "./src/app.js";

//  3000 é a porta lógica de comunicação utilizada nesta API.
const PORT = 3000;

//  Usamos .listen() para tornar 'app' em status de "ouvindo". Para que o servidor detecte quando chegar a requisição de um cliente buscando determinado dado.
app.listen(PORT, () => {
    console.log('Servidor escutando.');
});
