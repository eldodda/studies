let pessoa = {
    nome: 'Douglas',
    idade: 29,
    profissao: 'Desenvolvedor'
}

let pessoa2 = {...pessoa};
pessoa2.idade = 30;
console.log(pessoa);
console.log(pessoa2);

pessoa = {
    ...pessoa2,
    profissao: 'Desenvolvedor Senior',
    possuiCNH: true
}

console.log(pessoa);
console.log(pessoa2);


const {nome, ...resto} = pessoa;
console.log(nome);
console.log(resto);