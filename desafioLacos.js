// Quantos números pares e ímpares entre 0 e 100
let totalPar = 0;
let totalImpar = 0;

for (let count = 0; count <= 100; count++){
    if (count % 2 == 0){
        totalPar++;
    } else {
        totalImpar++
    }
}
console.log(`Total de números pares: ${totalPar}`);
console.log(`Total de números ímpares: ${totalImpar}`);