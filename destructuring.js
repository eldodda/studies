const pessoa = {
    nome: 'Fulano',
    idade: 17,
    profissao: 'Estudante'
}

/* console.log(pessoa.nome);
console.log(pessoa.idade); */

const {nome, idade} = pessoa;
console.log(nome);
console.log(idade);

function salute({nome}) {
    console.log(`Olá, ${nome}`);
}
salute(pessoa);