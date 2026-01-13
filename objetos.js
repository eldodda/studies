const pessoa = {
    nome: 'Douglas',
    sobrenome: 'Lima',
    idade: 29,
    temCNH: true
}

pessoa.cidade = 'Niterói';
console.log(pessoa.nome, pessoa.idade);

const livro = {
    título: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 315
}

livro.publicado = true;
console.log(livro);
livro.idiomas = [
    'Inglês', 'Português', 'Espanhol'
]
console.log(livro);
livro.idiomas.push('Francês');
console.log(livro);

delete livro.paginas;
console.log(livro);