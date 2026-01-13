const agora = new Date()
console.log(agora);
console.log('Ano: ', agora.getFullYear());
console.log('Mês (0-11): ', agora.getMonth());
console.log('Dia do mês: ', agora.getDate());
console.log('Dia do mês: ', agora.getHours());
console.log('Dia do mês: ', agora.getMinutes());

const nasc = new Date(1996, 2, 29);
console.log(nasc);
console.log("Data BR: ", nasc.toLocaleDateString('pt-BR'));
console.log("Data BR: ", agora.toLocaleDateString('pt-BR'));