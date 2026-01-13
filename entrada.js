const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
leitor.question("Qual é o seu nome? ", (nome) => {
    console.log(`Olá, ${nome}! Seja bem vindo(a)!`);
    leitor.question("Qual a sua idade? ", (idade) => {
        if (idade >= 18) {
            console.log("Você é maior de idade.")
        } else {
            console.log("Você é menor de idade.")
        };
        leitor.close()

    });
});

class User {
    constructor(nome, idade = null, cidade = '', estado = ''){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.estado = estado;
    }
}
leitor.question("Qual o seu nome?", (nome) => {
    const user1 = new User(nome);
    console.log('Usuário criado:', user1);
})