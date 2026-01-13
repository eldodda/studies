// Desestruturando objetos
const cadastro = {
    nome: 'Douglas',
    idade: 29,
    email: 'dugbits@gmail.com'
}
const {nome, idade, email} = cadastro;
console.log(nome, idade, email);

// Desestruturando arrays
const langs = ['JavaScript', 'Java', 'Python'];
const [lang1, lang2, lang3] = langs;
console.log(lang1, lang2, lang3);

// Função com operador Rest
function somaTudo(...nums){
    let soma = 0;

    for (let i = 0; i < nums.length; i++){
        soma += nums[i];
    }
    return soma;
}
console.log(somaTudo(4, 64, 70, 42, 64, 10, 1, 3, 5, 7));

// Spread com arrays
const frutas = ['banana', 'maçã', 'uva'];
const maisFrutas = ['limão', 'tomate', 'laranja'];
const todasAsFrutas = [...frutas, ...maisFrutas];
console.log(todasAsFrutas);

// Spread com objetos
const nomes = {
    nome: 'Douglas'
}
const city = {
    cidade: 'Niterói'
}
const info = {...nomes, ...city}
console.log(info)

// Parâmetro default
function salute (nome = 'mané') {
    console.log(`Bom dia, ${nome}! Como vai?`)
}
salute('Douglas');
salute();