// Buscas as chaves (palavras) de cada parágrafo com Object.keys(paragrafo);
// E passa um .filter() no objeto parágrafo, em sua propriedade chave (notação de colchetes(paragrafo[chave])), tendo como condição do filtro a palavra ter mais de uma letra (paragrafo[chave] > 1);
// Retornando então um array com as palavras com mais de uma letra;
function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo)
    .filter(chave => paragrafo[chave] > 1)
}


// "Formata" a saída de palavras duplicadas e torna o texto final mais legível.
function montaSaidaArquivo(lsPalavras) {
    let textoFinal = '';
    lsPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras duplicadas no parágrafo ${indice+1}: \n${duplicadas} \n`
    })

    return textoFinal;
}

export { montaSaidaArquivo };