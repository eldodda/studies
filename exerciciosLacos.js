// Contar de 1 a 10
/* for (let count = 1; count <= 10; count++){
    console.log(count);
} */

// Somando todos os números de 1 a 100
/* let total = 0;
for (let count = 1; count <= 100; count++){
    total += count;
    console.log(`Soma atual: ${total}.`);
}
console.log("Soma finalizada!"); */

// Tabuada personalizada
/* let num = 9;
for (let count = 0; count <= 10; count++){
    console.log(`${num} * ${count} = ${num*count}`)
} */

// Contagem regressiva com WHILE
/* count = 10;
while (count >= 0){
    console.log(count);
    count--
} */

// Receber números até digitar 0
/* const prompt = require('prompt-sync')({sigint: true}); // Para pedir dado do usuário
let num;
let soma = 0;
do {
   num = prompt("Digite um número: ");
   soma++
} while (num != 0);
console.log(`Total de números digitados: ${soma}`); */

// Três chances de acertar o número secreto
const prompt = require('prompt-sync')({sigint: true}); // Para pedir dado do usuário
const secretNum = 5;
let tent;
for (let count = 3; count > 0; count--){
    tent = prompt(`Qual o número secreto? \nVocê tem ${count} tentativas.`)
    if (tent == secretNum) {
        console.log("Você acertou!!")
        break;
    } else if (count > 1) {
        console.log("Tente novamente.");
    }
}
console.log("Fim de jogo.")
