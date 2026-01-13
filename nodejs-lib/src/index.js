const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.log("Qual é o erro?", erro.code);
        return;
    }
    contaPalavras(texto);
})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

    function extraiParagrafos(texto) {
        return texto.toLowerCase().split('\n');
    };


    function limpaPalavras(palavra) {
        return palavra.replace(/[.,\/#!$\^&\*;:{}=\-_`~()]/g, '');
    };

    function verificaPalavrasDuplicadas(texto) {
        const lsPalavras = texto.split(' ');
        const result = {};
        lsPalavras.forEach(palavra => {
            if (palavra.length >= 3) {
                const palavraLimpa = limpaPalavras(palavra);
                result[palavraLimpa] = (result[palavraLimpa] || 0) + 1
            }
        })
        return result;
    }
