import { describe } from "@jest/globals";
import AluguelLivroService from '../../services/aluguelLivroService.js';

const aluguelLivroService = new AluguelLivroService();

describe('Testando AluguelLivroService', () => {
    it('Retornar a data de devolução do livro validando a quantidade de dias alugados', async () => {
        const rentDate = new Date('2023-01-01');
        const daysRented = 5;
        const mockReturnDate = new Date('2023-01-06');

        const returnDate = await aluguelLivroService.calcularDataDevolucao(rentDate, daysRented);

        expect(returnDate).toStrictEqual(mockReturnDate);
    });


});