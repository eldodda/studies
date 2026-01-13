const frutas = ['Uva', 'Banana', 'Pitaya', 'Kiwi', 'Morango'];
// Uva = Índice [0]
// Pitaya = Índice [2]
console.log(`Primeira fruta: ${frutas[0]}`);
console.log(`Última fruta: ${frutas[4]}`);
console.log(`Total de frutas: ${frutas.length}`);
console.log("Lista das frutas:");
console.log(frutas);
frutas.push('Melão');   // Adiciona ao fim da lista.
console.log(`Última fruta: ${frutas[frutas.length - 1]}`);
console.log(`Total de frutas: ${frutas.length}`);
console.log("Todas as frutas:");
console.log(frutas);
frutas.pop();   // Retira do fim da lista.
console.log("Todas as frutas de novo:");
console.log(frutas);
frutas.unshift('Abacate');   // Adiciona ao início da lista.
console.log("Todas as frutas mais uma vez:");
console.log(frutas);
frutas.shift();   // Retira do início da lista.
console.log("Todas as frutas pela última vez:");
console.log(frutas);

frutas.splice(2, 2)   // Retira o índice apontado. Síntaxe: .splice(índice, intervalo)
console.log("Todas as frutas:");
console.log(frutas);   // Foram retirados a Pitaya(2) e o Kiwi(3). A partir da Pitaya(2) foram retirados dois objetos.

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

frutas.forEach(fruta => {
    console.log(fruta);
});

for (const fruta of frutas){
    console.log(`Fruta da vez: ${fruta}`);
}