//  Aqui nós criamos a classe ErroBase herdando os atributos da classe Error, nativa do JavaScript.
class ErroBase extends Error {
    constructor(mensagem = "Erro interno do servidor.", status = 500) {
        //  super() chama o construtor da classe pai (Error), que está sendo estendida aqui.
        super();
        this.message = mensagem;
        this.status = status;
    }

    enviarResposta(res) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        });
    }
}

export default ErroBase;