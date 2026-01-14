// Importando o módulo que trabalha com o sistema de arquivos (nativo do node.js) e armazenando na const 'fs'. 
import fs from 'fs';
// Importando a biblioteca path, que trata de caminhos como origem e destino.
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
// Importando bibliotecas externas.
import { Command } from 'commander';
import chalk from 'chalk';

// Aqui, implementamos as funções da biblioteca Commander na const program
const program = new Command();

program
//  .version exibe no terminal a versão do programa que estamos escrevendo.
    .version('0.0.1')
//  .option cria as flags que auxiliam a organização dos argumentos na linha de comando.
    .option('-t, --texto <string>', 'Caminho do texto a processar')
    .option('-d --destino <string>', 'Caminho da pasta onde salvar')
//  .action mostra o que vai acontecer uma vez que o programa começa a executar.
    .action((options) => {
        const { texto, destino } = options;
//  Se texto ou destino estiverem vazios ou incompletos, uma mensagem de erro é exibida, junto com os comandos disponíveis pelo .help.
        if (!texto || !destino) {
            console.log(chalk.red('Erro: favor inserir caminho de origem e destino'))
            program.help();
            return;
        }
// Guardam os caminhos de origem e destino como absolutos nas determinadas const.
        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado com sucesso.'))
        } catch(erro){
            console.log('Ocorreu um erro no processameno:', erro);
        }
    })
// É o que faz o Commander ler e interpretar os argumentos da linha de comando. Ele não funciona se você não chamá-lo.
program.parse();

// process.arv é um array com os argumentos da linha de comando (terminal):
// Índice 0 = Caminho do executável node.
// Índice 1 = Caminho do script.
// Índice >=2 = Argumentos fornecidos pelo usuário.
// Atribuímos o array à variável filePath.
/* const filePath = process.argv;
// Pega o primeiro argumento do usuário (índice 2) e guarda na const link. Se nenhum argumento for passado, link será undefined.
const link = filePath[2];
const endereco = filePath[3]; */

function processaArquivo(texto, destino) {
    // Aqui, .readFile() usa como argumento a entrada do usuário em link, 'utf-8' faz que o retorno seja uma string, e a callback (erro, texto).
    // Se erro for TRUTHY: imprime 'Qual é o erro?' e erro.code, que mostra o nome do erro (ex.: ENOENT) e faz o return, para interromper a execução.
    // Se não houver erro, chama a função contaPalavras(texto) para processar o conteúdo.
    // throw lança o objeto à frente, para o catch, que vai capturar este erro e tratá-lo de acordo.
    // É como dizer à alguém, "tente fazer isso, se não der certo, faça isso."
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro
            const result = contaPalavras(texto);
            criaESalvaArquivo(result, destino);
        } catch (erro) {
            trataErros(erro);
        }
    })

}



async function criaESalvaArquivo(lsPalavras, endereco) {
    const newFile = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(lsPalavras);
    try {
        await fs.promises.writeFile(newFile, textoPalavras);
        console.log('Arquivo criado.')
    } catch (erro) {
        throw erro;
    }
}