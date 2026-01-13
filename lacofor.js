// Síntaxe do laço FOR
for (let contador = 0; contador <= 5; contador++){
    console.log(contador);
}
for (let num = 0; num <= 15; num++){
    if (num % 2 == 0){
        console.log("Número par!");
    } else {
        console.log("Número ímpar!");
    }
}

const palavra = "jumento";

for (let contador = 0; contador < palavra.length; contador++){
    console.log(palavra[contador]);
}