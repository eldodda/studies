const num1 = 2;
const num2 = 6;
const op = 'multi';

if (op === 'soma'){
    console.log(num1+num2);
} else if (op === 'multi') {
    console.log(num1*num2);
} else {
    console.log('Operação não identificada.')
}

//===============================================
const salario = 7500;
if (salario >= 11000){
    console.log("3% de bônus.");
} else if (salario < 11000 && salario > 7000){
    console.log("5% de bônus");
} else if (salario < 7000 && salario > 4000){
    console.log("7% de bônus.");
} else {
    console.log("9% de bônus");
}

//================================================
//Verificar se tal ano é bissexto
const ano = 2024;
if (ano % 4 == 0 && ano % 100 != 0){
    console.log("Ano bissexto.");
} else {
    console.log("Ano comum.");
}

//==============================================
// Ternário e switch
const nome = "Bob";
const nota = 8;
const faltas = 3;

const recebeBonus = (nota >= 8 && faltas <= 2) ? "Recebe bônus." : "Não recebe bônus.";
console.log(recebeBonus);

const usuario = 'premium'
switch (usuario) {
    case 'free':
    console.log("Acesso limitado.");
    break;

    case 'premium':
    console.log("Acesso total.");
    break;

    case 'super premium':
    console.log("Acesso total + bônus.");
    break;

    default:
    console.log("Sobra nada.");
    break;
}

//======================================
//For
for (let count = 1; count <= 30; count++){
    const num = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (num === 15){
        console.log(`${num} em ${count} tentativas.`);
        break
    }
}
let count = 0;
for (let i = 1; i <= 30; i++){
    const num = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (num % 5 === 0){
        continue;
    }
    count++;
}
console.log(count);

//===================================================
//While
const secretNum = 8;
let randNum = 0;
let tent = 0;
while (randNum != secretNum){
    randNum = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tent++;
}
console.log(`Acertou em ${tent} tentativas! :D`);

tent = 0;
do {
    randNum = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tent++;
} while (randNum % 2 != 0);
console.log(`Número par em ${tent} tentativas :O`);

//============================================================
