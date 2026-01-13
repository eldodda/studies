/* function salute(){
    console.log("Opa!")
}
setTimeout(salute, 3000) */

let count = 0;
const id = setInterval(() => {
    count++;
    console.log(`Tempo decorrido (segundos): ${count}`);
    if (count == 10){
        clearInterval(id);
    }
}, 1000);