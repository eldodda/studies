// HOF -> High Order Function == Função que recebe funções como argumentos.

function calcular(num1, num2, oper){
    return oper(num1, num2);
}

function soma(num1, num2){
    return num1 + num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

const resSoma = calcular(3, 8, soma);
console.log(resSoma);

const resDiv = calcular(32, 8, divisao);
console.log(resDiv);