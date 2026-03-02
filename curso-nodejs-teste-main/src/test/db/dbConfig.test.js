import { describe, expect } from '@jest/globals';
import db from '../../db/dbconfig.js';

describe('Testando configDB', () => {
    it('Teste de conexão com o db', async () => {
        const mockAutor = {
            nome: 'Luana',
            nacionalidade: 'Brasileira',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }

        const savedAutor = await db('autores')
            .insert(mockAutor)
            .then((retorno) => db('autores')
                .where('id', retorno[0]))
            .then((autorSelecionado) => autorSelecionado[0]);

        expect(savedAutor.nome).toBe(mockAutor.nome);

        await db('autores').where({ id: savedAutor.id }).del();
    });
});