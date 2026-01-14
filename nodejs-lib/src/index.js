// Chamamos a função extraiParagrafos(texto) e armazenamos seu retorno na const paragrafos.
// Pegamos paragrafos e passamos um .flatMap() com uma callback onde:
// Se paragrafo estiver vazio (!paragrafo), retorna um array vazio.
// Depois entrega o retorno de verificaPalavrasDuplicadas(paragrafo).
// O .flatMap() então 'achata' e mapeia o array, eliminando os arrays vazios.
export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;
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
