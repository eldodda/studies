// Importando o módulo que trabalha com o sistema de arquivos (nativo do node.js) e armazenando na const 'fs'. 
const fs = require('fs');

// process.arv é um array com os argumentos da linha de comando (terminal):
// Índice 0 = Caminho do executável node.
// Índice 1 = Caminho do script.
// Índice >=2 = Argumentos fornecidos pelo usuário.
// Atribuímos o array à variável filePath.
const filePath = process.argv;
// Pega o primeiro argumento do usuário (índice 2) e guarda na const link. Se nenhum argumento for passado, link será undefined.
const link = filePath[2];


// Aqui, .readFile() usa como argumento a entrada do usuário em link, 'utf-8' faz que o retorno seja uma string, e a callback (erro, texto).
// Se erro for TRUTHY: imprime 'Qual é o erro?' e erro.code, que mostra o nome do erro (ex.: ENOENT) e faz o return, para interromper a execução.
// Se não houver erro, chama a função contaPalavras(texto) para processar o conteúdo.
fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.log("Qual é o erro?", erro.code);
        return;
    }
    contaPalavras(texto);
})


// Chamamos a função extraiParagrafos(texto) e armazenamos seu retorno na const paragrafos.
// Pegamos paragrafos e passamos um .flatMap() com uma callback onde:
// Se paragrafo estiver vazio (!paragrafo), retorna um array vazio.
// Depois entrega o retorno de verificaPalavrasDuplicadas(paragrafo).
// O .flatMap() então 'achata' e mapeia o array, eliminando os arrays vazios.
function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}


// Retorna texto em letras minúsculas (.toLowerCase()) e faz a separação de parágrafos sempre que encontrar uma quebra de linha (.split('\n')), retornando um array onde cada elemento é um parágrafo.
function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
};


// Usa o .replace() para substituir qualquer caractere determinado no primeiro argumento pelo caractere indicado no segundo argumento.
function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$\^&\*;:{}=\-_`~()]/g, '');
};


// Pega o arquivo (no caso, texto) e passa um .split(), separando cada palavra da outra sempre que encontra um espaço (' ') e guarda essa lista de palavras em lsPalavras.
// Criamos um objeto vazio em result.
// Passamos um .forEach() em lsPalavras, e se palavra tiver 3 ou mais letras, chama limpaPalavras(palavra).
// Criamos a chave [palavraLimpa] no objeto result, e seu valor é incrementado em 1 sempre que ela se repetir. Ao fim, a função retorna o objeto result, com as palavras listadas e sem duplicatas.
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
