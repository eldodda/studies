const frutas = ['Maçã', 'Manga', 'Morango'];
const maisFrutas = ['Uva', 'Graviola', 'Ameixa'];
const clone = [...frutas];
const todasFrutas = [...frutas, ...maisFrutas];
frutas.push('Pitanga');

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasFrutas);

const [primeira, segunda, ...restante] = todasFrutas;
console.log(primeira);
console.log(segunda);
console.log(restante);